import { a as jsxs, F as Fragment, j as jsx } from "../ssr.mjs";
import axios from "axios";
import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import { Card } from "primereact/card";
import { Column } from "primereact/column";
import { ConfirmPopup, confirmPopup } from "primereact/confirmpopup";
import { DataTable } from "primereact/datatable";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputText";
import { InputTextarea } from "primereact/inputtextarea";
import { Toast } from "primereact/toast";
import React from "react";
import { I as InputWrapper } from "./theme-fbe202b3.mjs";
import { u as useFormValidation } from "./useFormValidation-8a20563f.mjs";
import { D as Dashboard } from "./Dashboard-3650dec2.mjs";
import "primereact/rating";
import "primereact/progressbar";
import { f as formatDateTimeShort } from "./helpers-bf0c6e44.mjs";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/inertia-react";
import "process";
import "http";
import "primereact/api";
import "@inertiajs/inertia";
import "primereact/avatar";
import "primereact/badge";
const Publication = () => {
  const toast = React.useRef(null);
  const [newPublicationDialog, setNewPublicationDialog] = React.useState(false);
  const [currentPublication, setCurrentPublication] = React.useState();
  const [allPublicationsCount, setAllPublicationsCount] = React.useState();
  const [allPublications, setAllPublications] = React.useState([]);
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
  const publicationForm = useFormValidation(
    {
      title: "",
      pdf: null,
      image: null,
      description: "",
      published_date: ""
    },
    {
      title: "required",
      pdf: "required",
      image: "required",
      description: "",
      published_date: "required"
    },
    submitPublicationForm
  );
  const publicationUpdateForm = useFormValidation(
    {
      title: "",
      pdf: null,
      image: null,
      description: "",
      published_date: ""
    },
    {
      title: "required",
      pdf: "",
      image: "",
      description: "",
      published_date: "required"
    },
    updatePublicationForm
  );
  function submitPublicationForm() {
    const data = new FormData();
    data.append("title", publicationForm.state.title);
    data.append("pdf", publicationForm.state.pdf[0]);
    data.append("description", publicationForm.state.description);
    data.append("published_date", publicationForm.state.published_date);
    data.append("image", publicationForm.state.image[0]);
    axios.post(`/dashboard/publications`, data, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }).then(({ data: data2 }) => {
      publicationForm.clearValues(true);
      publicationForm.updateIsSubmitting(false);
      toast.current.show({
        severity: "success",
        summary: "Publication added successfully",
        life: 3e3
      });
      const newPubs = allPublications.length < lazyParams.rows ? [data2.data, ...allPublications] : [data2.data, ...[].concat(allPublications.pop())];
      setAllPublications(newPubs);
    }).catch((err) => {
      publicationForm.updateIsSubmitting(false);
      if (err["response"]) {
        if (err.response.status === 422) {
          publicationForm.setServerErrors(
            err.response.data.errors
          );
        } else if (err.response.status === 413) {
          toast.current.show({
            severity: "error",
            summary: "Files to large",
            life: 3e3
          });
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
  function updatePublicationForm() {
    const data = new FormData();
    data.append("title", publicationUpdateForm.state.title);
    data.append(
      "pdf",
      publicationUpdateForm.state.pdf ? publicationUpdateForm.state.pdf[0] : publicationUpdateForm.state.pdf
    );
    data.append("description", publicationUpdateForm.state.description);
    data.append(
      "published_date",
      publicationUpdateForm.state.published_date
    );
    data.append(
      "image",
      publicationUpdateForm.state.image ? publicationUpdateForm.state.image[0] : publicationUpdateForm.state.image
    );
    axios.post(`/dashboard/publications/${currentPublication.id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }).then(({ data: data2 }) => {
      publicationUpdateForm.updateIsSubmitting(false);
      toast.current.show({
        severity: "success",
        summary: "Publication updated successfully",
        life: 3e3
      });
      setAllPublications(
        (state) => state.map((p) => {
          if (p.id === data2.data.id) {
            return data2.data;
          }
          return p;
        })
      );
      setNewPublicationDialog(false);
    }).catch((err) => {
      publicationUpdateForm.updateIsSubmitting(false);
      if (err["response"]) {
        if (err.response.status === 422) {
          publicationUpdateForm.setServerErrors(
            err.response.data.errors
          );
        } else if (err.response.status === 413) {
          toast.current.show({
            severity: "error",
            summary: "Files to large",
            life: 3e3
          });
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
  const deletePublication = (event, id) => {
    confirmPopup({
      target: event.currentTarget,
      message: "Do you want to delete this publication?",
      icon: "pi pi-trash",
      acceptClassName: "p-button-danger",
      accept: () => {
        axios.delete(`/dashboard/publications/${id}`).then(({ data }) => {
          toast.current.show({
            severity: "success",
            summary: "Publication deleted successfully",
            life: 3e3
          });
          setAllPublications(
            (state) => state.filter((p) => p.id !== id)
          );
        }).catch((err) => {
          if (err["response"]) {
            if (err.response.status === 413) {
              toast.current.show({
                severity: "error",
                summary: "Files to large",
                life: 3e3
              });
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
    });
  };
  const setUpdatePublicationForm = (publication) => {
    publicationUpdateForm.setValues({
      title: publication.title,
      pdf: null,
      image: null,
      description: publication.description,
      published_date: new Date(publication.published_date)
    });
    setCurrentPublication(publication);
    setNewPublicationDialog(true);
  };
  const onPage = (event) => {
    setLazyParams(event);
  };
  const renderHeader = () => {
    return /* @__PURE__ */ jsxs("div", { className: "table__header", children: [
      /* @__PURE__ */ jsx("div", { className: "table__header__search", children: /* @__PURE__ */ jsxs("span", { className: "p-input-icon-left", children: [
        /* @__PURE__ */ jsx("i", { className: "pi pi-search" }),
        /* @__PURE__ */ jsx(InputText, { placeholder: "Search publications..." })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "table__header__buttons", children: /* @__PURE__ */ jsx(
        Button,
        {
          label: "New Publication",
          type: "button",
          icon: "pi pi-plus",
          className: "p-button-primary",
          onClick: () => setNewPublicationDialog(true)
        }
      ) })
    ] });
  };
  const publishedDateBody = (row) => /* @__PURE__ */ jsx("span", { children: formatDateTimeShort(row.published_date) });
  const imageBody = (row) => /* @__PURE__ */ jsx("div", { style: { height: "6rem", overflow: "hidden" }, children: /* @__PURE__ */ jsx(
    "img",
    {
      src: `/uploads/publications/images/${row.image}`,
      alt: row.title,
      style: { width: "12rem", height: "6rem" }
    }
  ) });
  const titleBody = (row) => /* @__PURE__ */ jsx(
    "a",
    {
      href: `/uploads/publications/pdf/${row.pdf}`,
      target: "_blank",
      rel: "noopener noreferrer",
      style: { textDecoration: "underline" },
      children: row.title
    }
  );
  const actionTemplate = (row) => {
    return /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(
        Button,
        {
          type: "button",
          icon: "pi pi-pencil",
          tooltip: "Edit Publication ",
          tooltipOptions: { position: "top" },
          className: "p-button-text p-button-secondary p-button-sm",
          onClick: () => setUpdatePublicationForm(row)
        }
      ),
      /* @__PURE__ */ jsx(
        Button,
        {
          type: "button",
          icon: "pi pi-trash",
          tooltip: "Delete Publication",
          tooltipOptions: { position: "top" },
          className: "p-button-text p-button-danger p-button-sm",
          onClick: (e) => deletePublication(e, row.id)
        }
      )
    ] });
  };
  const loadLazyData = React.useCallback(async () => {
    axios.get(
      `/dashboard/publications/all?offset=${lazyParams.first}&limit=${lazyParams.rows}`
    ).then(({ data }) => {
      if (data.status) {
        const response = data.data;
        setAllPublicationsCount(response.count);
        setAllPublications(response.records);
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
    /* @__PURE__ */ jsx(Dashboard, { page: "Publications", children: /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(
      DataTable,
      {
        value: allPublications,
        first: lazyParams.first,
        rows: lazyParams.rows,
        totalRecords: allPublicationsCount,
        onPage,
        paginator: true,
        lazy: true,
        dataKey: "id",
        header: renderHeader,
        className: "mt-6",
        responsiveLayout: "scroll",
        emptyMessage: "No publication found.",
        children: [
          /* @__PURE__ */ jsx(Column, { header: "Banner", body: imageBody }),
          /* @__PURE__ */ jsx(Column, { header: "Title", body: titleBody }),
          /* @__PURE__ */ jsx(
            Column,
            {
              header: "Description",
              field: "description",
              bodyStyle: { width: "40rem" }
            }
          ),
          /* @__PURE__ */ jsx(
            Column,
            {
              header: "Published On",
              body: publishedDateBody
            }
          ),
          /* @__PURE__ */ jsx(Column, { header: "Actions", body: actionTemplate })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsx(
      Dialog,
      {
        header: currentPublication ? "Update Publication" : "Add New Publication",
        visible: newPublicationDialog,
        style: { width: "50%" },
        onHide: () => {
          setNewPublicationDialog(false);
          publicationForm.clearValues();
          publicationUpdateForm.clearValues();
          setCurrentPublication();
        },
        children: currentPublication ? /* @__PURE__ */ jsxs("form", { onSubmit: publicationUpdateForm.handleSubmit, children: [
          /* @__PURE__ */ jsx("div", { className: "s__row", children: /* @__PURE__ */ jsx("div", { className: "s__col c--12", children: /* @__PURE__ */ jsx(
            InputWrapper,
            {
              label: "Title",
              name: "title",
              errors: publicationUpdateForm.errors,
              children: /* @__PURE__ */ jsx(
                InputText,
                {
                  name: "title",
                  value: publicationUpdateForm.state.title,
                  onBlur: publicationUpdateForm.handleBlur,
                  onChange: publicationUpdateForm.handleChange
                }
              )
            }
          ) }) }),
          /* @__PURE__ */ jsx("div", { className: "s__row", children: /* @__PURE__ */ jsx("div", { className: "s__col c--12", children: /* @__PURE__ */ jsx(
            InputWrapper,
            {
              label: "Description",
              name: "description",
              errors: publicationUpdateForm.errors,
              children: /* @__PURE__ */ jsx(
                InputTextarea,
                {
                  rows: 5,
                  cols: 30,
                  autoResize: true,
                  name: "description",
                  value: publicationUpdateForm.state.description,
                  onBlur: publicationUpdateForm.handleBlur,
                  onChange: publicationUpdateForm.handleChange
                }
              )
            }
          ) }) }),
          /* @__PURE__ */ jsxs("div", { className: "s__row", children: [
            /* @__PURE__ */ jsx("div", { className: "s__col c--6", children: /* @__PURE__ */ jsx(
              InputWrapper,
              {
                label: "Image",
                name: "image",
                errors: publicationUpdateForm.errors,
                children: /* @__PURE__ */ jsx(
                  InputText,
                  {
                    type: "file",
                    accept: "image/*",
                    name: "image",
                    onChange: publicationUpdateForm.handleChange
                  }
                )
              }
            ) }),
            /* @__PURE__ */ jsx("div", { className: "s__col c--6", children: /* @__PURE__ */ jsx(
              InputWrapper,
              {
                label: "PDF File",
                name: "pdf",
                errors: publicationUpdateForm.errors,
                children: /* @__PURE__ */ jsx(
                  InputText,
                  {
                    type: "file",
                    accept: "application/pdf",
                    name: "pdf",
                    onChange: publicationUpdateForm.handleChange
                  }
                )
              }
            ) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "s__row", children: /* @__PURE__ */ jsx("div", { className: "s__col c--12", children: /* @__PURE__ */ jsx(
            InputWrapper,
            {
              label: "Published Date",
              name: "published_date",
              errors: publicationUpdateForm.errors,
              children: /* @__PURE__ */ jsx(
                Calendar,
                {
                  name: "published_date",
                  value: publicationUpdateForm.state.published_date,
                  onBlur: publicationUpdateForm.handleBlur,
                  onChange: publicationUpdateForm.handleChange
                }
              )
            }
          ) }) }),
          /* @__PURE__ */ jsx("div", { className: "flex justify-end mt-6", children: /* @__PURE__ */ jsx(
            Button,
            {
              type: "submit",
              label: "Add",
              loading: publicationUpdateForm.isSubmitting,
              disabled: publicationUpdateForm.isSubmitting
            }
          ) })
        ] }) : /* @__PURE__ */ jsxs("form", { onSubmit: publicationForm.handleSubmit, children: [
          /* @__PURE__ */ jsx("div", { className: "s__row", children: /* @__PURE__ */ jsx("div", { className: "s__col c--12", children: /* @__PURE__ */ jsx(
            InputWrapper,
            {
              label: "Title",
              name: "title",
              errors: publicationForm.errors,
              children: /* @__PURE__ */ jsx(
                InputText,
                {
                  name: "title",
                  value: publicationForm.state.title,
                  onBlur: publicationForm.handleBlur,
                  onChange: publicationForm.handleChange
                }
              )
            }
          ) }) }),
          /* @__PURE__ */ jsx("div", { className: "s__row", children: /* @__PURE__ */ jsx("div", { className: "s__col c--12", children: /* @__PURE__ */ jsx(
            InputWrapper,
            {
              label: "Description",
              name: "description",
              errors: publicationForm.errors,
              children: /* @__PURE__ */ jsx(
                InputTextarea,
                {
                  rows: 5,
                  cols: 30,
                  autoResize: true,
                  name: "description",
                  value: publicationForm.state.description,
                  onBlur: publicationForm.handleBlur,
                  onChange: publicationForm.handleChange
                }
              )
            }
          ) }) }),
          /* @__PURE__ */ jsxs("div", { className: "s__row", children: [
            /* @__PURE__ */ jsx("div", { className: "s__col c--6", children: /* @__PURE__ */ jsx(
              InputWrapper,
              {
                label: "Image",
                name: "image",
                errors: publicationForm.errors,
                children: /* @__PURE__ */ jsx(
                  InputText,
                  {
                    type: "file",
                    accept: "image/*",
                    name: "image",
                    onChange: publicationForm.handleChange
                  }
                )
              }
            ) }),
            /* @__PURE__ */ jsx("div", { className: "s__col c--6", children: /* @__PURE__ */ jsx(
              InputWrapper,
              {
                label: "PDF File",
                name: "pdf",
                errors: publicationForm.errors,
                children: /* @__PURE__ */ jsx(
                  InputText,
                  {
                    type: "file",
                    accept: "application/pdf",
                    name: "pdf",
                    onChange: publicationForm.handleChange
                  }
                )
              }
            ) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "s__row", children: /* @__PURE__ */ jsx("div", { className: "s__col c--12", children: /* @__PURE__ */ jsx(
            InputWrapper,
            {
              label: "Published Date",
              name: "published_date",
              errors: publicationForm.errors,
              children: /* @__PURE__ */ jsx(
                Calendar,
                {
                  name: "published_date",
                  value: publicationForm.state.published_date,
                  onBlur: publicationForm.handleBlur,
                  onChange: publicationForm.handleChange
                }
              )
            }
          ) }) }),
          /* @__PURE__ */ jsx("div", { className: "flex justify-end mt-6", children: /* @__PURE__ */ jsx(
            Button,
            {
              type: "submit",
              label: "Add",
              loading: publicationForm.isSubmitting,
              disabled: publicationForm.isSubmitting
            }
          ) })
        ] })
      }
    )
  ] });
};
export {
  Publication as default
};
