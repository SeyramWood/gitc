import { a as jsxs, F as Fragment, j as jsx } from "../ssr.mjs";
import axios from "axios";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Column } from "primereact/column";
import { ConfirmPopup, confirmPopup } from "primereact/confirmpopup";
import { DataTable } from "primereact/datatable";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputText";
import { Toast } from "primereact/toast";
import React from "react";
import { I as InputWrapper } from "./app-95bf8c62.mjs";
import { u as useFormValidation } from "./useFormValidation-8a20563f.mjs";
import { D as Dashboard } from "./Dashboard-3b10314c.mjs";
import "primereact/rating";
import "primereact/progressbar";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/inertia-react";
import "process";
import "http";
import "@inertiajs/inertia";
import "primereact/avatar";
import "primereact/badge";
const Users = () => {
  const toast = React.useRef(null);
  const [newUserDialog, setNewUserDialog] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState();
  const [allUsersCount, setAllUsersCount] = React.useState();
  const [allUsers, setAllUsers] = React.useState([]);
  const [lazyParams, setLazyParams] = React.useState({
    first: 0,
    rows: 50,
    page: 0
    // sortField: "create_at",
    // sortOrder: "desc",
    // filters: {
    //     'name': { value: '', matchMode: 'contains' },
    //     'country.name': { value: '', matchMode: 'contains' },
    //     'company': { value: '', matchMode: 'contains' },
    //     'representative.name': { value: '', matchMode: 'contains' },
    // }
  });
  const userForm = useFormValidation(
    {
      name: "",
      email: "",
      password: ""
    },
    {
      name: "required|string",
      email: "required|email",
      password: "required|string|min:8"
    },
    submitUserForm
  );
  const userUpdateForm = useFormValidation(
    {
      name: "",
      email: ""
    },
    {
      name: "required|string",
      email: "required|email"
    },
    updateUserForm
  );
  function submitUserForm() {
    axios.post(`/dashboard/users`, userForm.state).then(({ data }) => {
      userForm.clearValues(true);
      userForm.updateIsSubmitting(false);
      toast.current.show({
        severity: "success",
        summary: "Users added successfully",
        life: 3e3
      });
      const newUsers = allUsers.length < lazyParams.rows ? [data.data, ...allUsers] : [data.data, ...[].concat(allUsers.pop())];
      setAllUsers(newUsers);
    }).catch((err) => {
      userForm.updateIsSubmitting(false);
      if (err["response"]) {
        if (err.response.status === 422) {
          userForm.setServerErrors(err.response.data.errors);
        } else if (err.response.status === 500) {
          toast.current.show({
            severity: "error",
            summary: "Ooops! Something went wrong, please refresh and try again.",
            life: 3e3
          });
        } else {
          console.trace(err);
        }
      } else {
        console.trace(err);
      }
    });
  }
  function updateUserForm() {
    axios.put(`/dashboard/users/${currentUser.id}`, userUpdateForm.state).then(({ data }) => {
      userUpdateForm.updateIsSubmitting(false);
      toast.current.show({
        severity: "success",
        summary: "User updated successfully",
        life: 3e3
      });
      setAllUsers(
        (state) => state.map((user) => {
          if (user.id === data.data.id) {
            return data.data;
          }
          return user;
        })
      );
      setNewUserDialog(false);
    }).catch((err) => {
      userUpdateForm.updateIsSubmitting(false);
      if (err["response"]) {
        if (err.response.status === 422) {
          userUpdateForm.setServerErrors(
            err.response.data.errors
          );
        } else if (err.response.status === 500) {
          toast.current.show({
            severity: "error",
            summary: "Ooops! Something went wrong, please refresh and try again.",
            life: 3e3
          });
        } else {
          console.trace(err);
        }
      } else {
        console.trace(err);
      }
    });
  }
  const deleteUser = (event, id) => {
    confirmPopup({
      target: event.currentTarget,
      message: "Do you want to delete this user?",
      icon: "pi pi-trash",
      acceptClassName: "p-button-danger",
      accept: () => {
        axios.delete(`/dashboard/users/${id}`).then(({ data }) => {
          toast.current.show({
            severity: "success",
            summary: "User deleted successfully",
            life: 3e3
          });
          setAllUsers(
            (state) => state.filter((user) => user.id !== id)
          );
        }).catch((err) => {
          if (err["response"]) {
            if (err.response.status === 500) {
              toast.current.show({
                severity: "error",
                summary: "Ooops! Something went wrong, please refresh and try again.",
                life: 3e3
              });
            } else {
              console.trace(err);
            }
          } else {
            console.trace(err);
          }
        });
      }
    });
  };
  const setUpdateUserForm = (data) => {
    userUpdateForm.setValues({
      name: data.name,
      email: data.email
    });
    setCurrentUser(data);
    setNewUserDialog(true);
  };
  const onPage = (event) => {
    setLazyParams(event);
  };
  const renderHeader = () => {
    return /* @__PURE__ */ jsxs("div", { className: "table__header", children: [
      /* @__PURE__ */ jsx("div", { className: "table__header__search", children: /* @__PURE__ */ jsxs("span", { className: "p-input-icon-left", children: [
        /* @__PURE__ */ jsx("i", { className: "pi pi-search" }),
        /* @__PURE__ */ jsx(InputText, { placeholder: "Search users..." })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "table__header__buttons", children: /* @__PURE__ */ jsx(
        Button,
        {
          label: "New User",
          type: "button",
          icon: "pi pi-plus",
          className: "p-button-primary",
          onClick: () => setNewUserDialog(true)
        }
      ) })
    ] });
  };
  const actionTemplate = (row) => {
    return /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(
        Button,
        {
          type: "button",
          icon: "pi pi-pencil",
          tooltip: "Edit User",
          tooltipOptions: { position: "top" },
          className: "p-button-text p-button-secondary p-button-sm",
          onClick: () => setUpdateUserForm(row)
        }
      ),
      /* @__PURE__ */ jsx(
        Button,
        {
          type: "button",
          icon: "pi pi-trash",
          tooltip: "Delete User",
          tooltipOptions: { position: "top" },
          className: "p-button-text p-button-danger p-button-sm",
          onClick: (e) => deleteUser(e, row.id)
        }
      )
    ] });
  };
  const loadLazyData = React.useCallback(async () => {
    axios.get(
      `/dashboard/users/all?offset=${lazyParams.first}&limit=${lazyParams.rows}`
    ).then(({ data }) => {
      if (data.status) {
        const response = data.data;
        setAllUsersCount(response.count);
        setAllUsers(response.records);
      }
    }).catch((error) => {
      console.trace(`Could not fetch data: 
`, error);
    });
  }, [lazyParams]);
  React.useEffect(() => {
    loadLazyData();
  }, [lazyParams]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Toast, { ref: toast }),
    /* @__PURE__ */ jsx(ConfirmPopup, {}),
    /* @__PURE__ */ jsx(Dashboard, { page: "Users", children: /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(
      DataTable,
      {
        value: allUsers,
        first: lazyParams.first,
        rows: lazyParams.rows,
        totalRecords: allUsersCount,
        onPage,
        paginator: true,
        lazy: true,
        dataKey: "id",
        header: renderHeader,
        className: "mt-6",
        responsiveLayout: "scroll",
        emptyMessage: "No user found.",
        children: [
          /* @__PURE__ */ jsx(Column, { header: "Name", field: "name" }),
          /* @__PURE__ */ jsx(Column, { header: "Email", field: "email" }),
          /* @__PURE__ */ jsx(Column, { header: "Actions", body: actionTemplate })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsx(
      Dialog,
      {
        header: currentUser ? "Update User" : "Add New User",
        visible: newUserDialog,
        style: { width: "50%" },
        onHide: () => {
          setNewUserDialog(false);
          userForm.clearValues();
          userUpdateForm.clearValues();
          setCurrentUser();
        },
        children: currentUser ? /* @__PURE__ */ jsxs("form", { onSubmit: userUpdateForm.handleSubmit, children: [
          /* @__PURE__ */ jsx("div", { className: "s__row", children: /* @__PURE__ */ jsx("div", { className: "s__col c--12", children: /* @__PURE__ */ jsx(
            InputWrapper,
            {
              label: "Name",
              name: "name",
              errors: userUpdateForm.errors,
              children: /* @__PURE__ */ jsx(
                InputText,
                {
                  name: "name",
                  value: userUpdateForm.state.name,
                  onBlur: userUpdateForm.handleBlur,
                  onChange: userUpdateForm.handleChange
                }
              )
            }
          ) }) }),
          /* @__PURE__ */ jsx("div", { className: "s__row", children: /* @__PURE__ */ jsx("div", { className: "s__col c--12", children: /* @__PURE__ */ jsx(
            InputWrapper,
            {
              label: "Email",
              name: "email",
              errors: userUpdateForm.errors,
              children: /* @__PURE__ */ jsx(
                InputText,
                {
                  type: "email",
                  name: "email",
                  value: userUpdateForm.state.email,
                  onBlur: userUpdateForm.handleBlur,
                  onChange: userUpdateForm.handleChange
                }
              )
            }
          ) }) }),
          /* @__PURE__ */ jsx("div", { className: "flex justify-end mt-6", children: /* @__PURE__ */ jsx(
            Button,
            {
              type: "submit",
              label: "Update",
              loading: userForm.isSubmitting,
              disabled: userForm.isSubmitting
            }
          ) })
        ] }) : /* @__PURE__ */ jsxs("form", { onSubmit: userForm.handleSubmit, children: [
          /* @__PURE__ */ jsx("div", { className: "s__row", children: /* @__PURE__ */ jsx("div", { className: "s__col c--12", children: /* @__PURE__ */ jsx(
            InputWrapper,
            {
              label: "Name",
              name: "name",
              errors: userForm.errors,
              children: /* @__PURE__ */ jsx(
                InputText,
                {
                  name: "name",
                  value: userForm.state.name,
                  onBlur: userForm.handleBlur,
                  onChange: userForm.handleChange
                }
              )
            }
          ) }) }),
          /* @__PURE__ */ jsx("div", { className: "s__row", children: /* @__PURE__ */ jsx("div", { className: "s__col c--12", children: /* @__PURE__ */ jsx(
            InputWrapper,
            {
              label: "Email",
              name: "email",
              errors: userForm.errors,
              children: /* @__PURE__ */ jsx(
                InputText,
                {
                  type: "email",
                  name: "email",
                  value: userForm.state.email,
                  onBlur: userForm.handleBlur,
                  onChange: userForm.handleChange
                }
              )
            }
          ) }) }),
          /* @__PURE__ */ jsx("div", { className: "s__row", children: /* @__PURE__ */ jsx("div", { className: "s__col c--12", children: /* @__PURE__ */ jsx(
            InputWrapper,
            {
              label: "Password",
              name: "password",
              errors: userForm.errors,
              children: /* @__PURE__ */ jsx(
                InputText,
                {
                  type: "password",
                  name: "password",
                  value: userForm.state.password,
                  onBlur: userForm.handleBlur,
                  onChange: userForm.handleChange
                }
              )
            }
          ) }) }),
          /* @__PURE__ */ jsx("div", { className: "flex justify-end mt-6", children: /* @__PURE__ */ jsx(
            Button,
            {
              type: "submit",
              label: "Add",
              loading: userForm.isSubmitting,
              disabled: userForm.isSubmitting
            }
          ) })
        ] })
      }
    )
  ] });
};
export {
  Users as default
};
