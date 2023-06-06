import { a as jsxs, F as Fragment, j as jsx } from "../ssr.mjs";
import axios from "axios";
import Lightbox from "yet-another-react-lightbox";
import Counter from "yet-another-react-lightbox/plugins/counter";
/* empty css                  */import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import { Card } from "primereact/card";
import { Column } from "primereact/column";
import { ConfirmPopup, confirmPopup } from "primereact/confirmpopup";
import { DataTable } from "primereact/datatable";
import { Dialog } from "primereact/dialog";
import { FileUpload } from "primereact/fileupload";
import { InputText } from "primereact/inputText";
import { InputTextarea } from "primereact/inputtextarea";
import { Menu } from "primereact/menu";
import { Toast } from "primereact/toast";
import React from "react";
import { I as InputWrapper } from "./theme-fbe202b3.mjs";
import { u as useFormValidation } from "./useFormValidation-8a20563f.mjs";
import { D as Dashboard } from "./Dashboard-3650dec2.mjs";
import "primereact/rating";
import "primereact/progressbar";
import { f as formatDateTimeShort } from "./helpers-97f56fd4.mjs";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/inertia-react";
import "process";
import "http";
import "primereact/api";
import "@inertiajs/inertia";
import "primereact/avatar";
import "primereact/badge";
const Album = () => {
  const toast = React.useRef(null);
  const actionMenu = React.useRef(null);
  React.useState(false);
  const [newAlbumDialog, setNewAlbumDialog] = React.useState(false);
  const [newGalleryDialog, setNewGalleryDialog] = React.useState(false);
  const [newGalleryActionDialog, setNewGalleryActionDialog] = React.useState("add");
  const [currentAlbum, setCurrentAlbum] = React.useState();
  const [currentGallery, setCurrentGallery] = React.useState();
  const [selectedIndex, setSelectedIndex] = React.useState(-1);
  const [allAlbumCount, setAllAlbumCount] = React.useState();
  const [allAlbum, setAllAlbum] = React.useState([]);
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
  const albumForm = useFormValidation(
    {
      name: "",
      description: "",
      date: ""
    },
    {
      name: "required",
      description: "",
      date: "required"
    },
    currentAlbum ? updateAlbumForm : submitAlbumForm
  );
  function submitAlbumForm() {
    axios.post(`/dashboard/albums`, albumForm.state).then(({ data }) => {
      albumForm.clearValues(true);
      albumForm.updateIsSubmitting(false);
      toast.current.show({
        severity: "success",
        summary: "Album added successfully",
        life: 3e3
      });
      const newAlbum = allAlbum.length < lazyParams.rows ? [data.data, ...allAlbum] : [data.data, ...[].concat(allAlbum.pop())];
      setAllAlbum(newAlbum);
    }).catch((err) => {
      albumForm.updateIsSubmitting(false);
      if (err["response"]) {
        if (err.response.status === 422) {
          albumForm.setServerErrors(err.response.data.errors);
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
  function updateAlbumForm() {
    axios.put(`/dashboard/albums/${currentAlbum.id}`, albumForm.state).then(({ data }) => {
      albumForm.updateIsSubmitting(false);
      toast.current.show({
        severity: "success",
        summary: "Album updated successfully",
        life: 3e3
      });
      setAllAlbum(
        (state) => state.map((p) => {
          if (p.id === data.data.id) {
            return data.data;
          }
          return p;
        })
      );
      setNewAlbumDialog(false);
    }).catch((err) => {
      albumForm.updateIsSubmitting(false);
      if (err["response"]) {
        if (err.response.status === 422) {
          albumForm.setServerErrors(err.response.data.errors);
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
  const deleteAlbum = (event, id) => {
    confirmPopup({
      target: event.currentTarget,
      message: "Do you want to delete this album?",
      icon: "pi pi-trash",
      acceptClassName: "p-button-danger",
      accept: () => {
        axios.delete(`/dashboard/albums/${id}`).then(({ data }) => {
          toast.current.show({
            severity: "success",
            summary: "Album deleted successfully",
            life: 3e3
          });
          setAllAlbum(
            (state) => state.filter((p) => p.id !== id)
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
  const deleteGalleryImage = (id) => {
    axios.delete(`/dashboard/gallery/${id}`).then(({ data }) => {
      setCurrentAlbum((state) => ({
        ...state,
        gallery: state.gallery.filter((g) => g.id !== id)
      }));
      setAllAlbum(
        (state) => state.map((album) => {
          if (album.id === currentAlbum.id) {
            return {
              ...album,
              gallery: album.gallery.filter(
                (g) => g.id !== id
              )
            };
          }
          return album;
        })
      );
      toast.current.show({
        severity: "success",
        summary: "Image deleted successfully",
        life: 3e3
      });
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
  };
  const deleteGallery = () => {
    axios.delete(`/dashboard/gallery/${currentAlbum.id}/all`).then(({ data }) => {
      setAllAlbum(
        (state) => state.map((album) => {
          if (album.id === currentAlbum.id) {
            return {
              ...album,
              gallery: []
            };
          }
          return album;
        })
      );
      toast.current.show({
        severity: "success",
        summary: "Image deleted successfully",
        life: 3e3
      });
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
  };
  const setUpdateAlbumForm = (data) => {
    albumForm.setValues({
      name: data.name,
      description: data.description,
      date: new Date(data.date)
    });
    setCurrentAlbum(data);
    setNewAlbumDialog(true);
  };
  const openGalleryDialog = (action) => {
    setNewGalleryActionDialog(action);
    setNewGalleryDialog(true);
  };
  const viewGallery = (data) => {
    setCurrentGallery(
      data.gallery.map((gallery) => ({
        src: `/uploads/gallery/${gallery.image}`
      }))
    );
    setSelectedIndex(0);
  };
  const onPage = (event) => {
    setLazyParams(event);
  };
  const renderHeader = () => {
    return /* @__PURE__ */ jsxs("div", { className: "table__header", children: [
      /* @__PURE__ */ jsx("div", { className: "table__header__search", children: /* @__PURE__ */ jsxs("span", { className: "p-input-icon-left", children: [
        /* @__PURE__ */ jsx("i", { className: "pi pi-search" }),
        /* @__PURE__ */ jsx(InputText, { placeholder: "Search album..." })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "table__header__buttons", children: /* @__PURE__ */ jsx(
        Button,
        {
          label: "New Album",
          type: "button",
          icon: "pi pi-plus",
          className: "p-button-primary",
          onClick: () => setNewAlbumDialog(true)
        }
      ) })
    ] });
  };
  const dateDateBody = (row) => /* @__PURE__ */ jsx("span", { children: formatDateTimeShort(row.date) });
  const actionTemplate = (row) => {
    var _a;
    return /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(
        Button,
        {
          type: "button",
          icon: "pi pi-eye",
          tooltip: "View Gallery",
          tooltipOptions: { position: "top" },
          className: "p-button-text p-button-secondary p-button-sm",
          disabled: ((_a = row.gallery) == null ? void 0 : _a.length) === 0,
          onClick: () => viewGallery(row)
        }
      ),
      /* @__PURE__ */ jsx(
        Button,
        {
          type: "button",
          icon: "pi pi-pencil",
          tooltip: "Edit Album ",
          tooltipOptions: { position: "top" },
          className: "p-button-text p-button-secondary p-button-sm",
          onClick: () => setUpdateAlbumForm(row)
        }
      ),
      /* @__PURE__ */ jsx(
        Button,
        {
          type: "button",
          icon: "pi pi-trash",
          tooltip: "Delete Album",
          tooltipOptions: { position: "top" },
          className: "p-button-text p-button-danger p-button-sm",
          onClick: (e) => deleteAlbum(e, row.id)
        }
      ),
      /* @__PURE__ */ jsx(
        Button,
        {
          type: "button",
          icon: "pi pi-ellipsis-h",
          tooltip: "More actions",
          tooltipOptions: { position: "top" },
          className: "p-button-text p-button-secondary p-button-sm",
          onClick: (event) => {
            setCurrentAlbum(row);
            actionMenu.current.toggle(event);
          },
          "aria-controls": "action_menu",
          "aria-haspopup": true
        }
      )
    ] });
  };
  const loadLazyData = React.useCallback(async () => {
    axios.get(
      `/dashboard/albums/all?offset=${lazyParams.first}&limit=${lazyParams.rows}`
    ).then(({ data }) => {
      if (data.status) {
        const response = data.data;
        setAllAlbumCount(response.count);
        setAllAlbum(response.records);
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
    /* @__PURE__ */ jsx(Dashboard, { page: "Album", children: /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(
      DataTable,
      {
        value: allAlbum,
        first: lazyParams.first,
        rows: lazyParams.rows,
        totalRecords: allAlbumCount,
        onPage,
        paginator: true,
        lazy: true,
        dataKey: "id",
        header: renderHeader,
        className: "mt-6",
        responsiveLayout: "scroll",
        emptyMessage: "No case found.",
        children: [
          /* @__PURE__ */ jsx(Column, { header: "Name", field: "name" }),
          /* @__PURE__ */ jsx(Column, { header: "Date", body: dateDateBody }),
          /* @__PURE__ */ jsx(
            Column,
            {
              header: "Description",
              field: "description",
              bodyStyle: { maxWidth: "40rem" }
            }
          ),
          /* @__PURE__ */ jsx(Column, { header: "Actions", body: actionTemplate })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsx(
      Dialog,
      {
        header: currentAlbum ? "Update Album" : "Add New Album",
        visible: newAlbumDialog,
        style: { width: "50%" },
        onHide: () => {
          setNewAlbumDialog(false);
          albumForm.clearValues();
          setCurrentAlbum();
        },
        children: /* @__PURE__ */ jsxs("form", { onSubmit: albumForm.handleSubmit, children: [
          /* @__PURE__ */ jsx("div", { className: "s__row", children: /* @__PURE__ */ jsx("div", { className: "s__col c--12", children: /* @__PURE__ */ jsx(
            InputWrapper,
            {
              label: "Name",
              name: "name",
              errors: albumForm.errors,
              children: /* @__PURE__ */ jsx(
                InputText,
                {
                  name: "name",
                  value: albumForm.state.name,
                  onBlur: albumForm.handleBlur,
                  onChange: albumForm.handleChange
                }
              )
            }
          ) }) }),
          /* @__PURE__ */ jsx("div", { className: "s__row", children: /* @__PURE__ */ jsx("div", { className: "s__col c--12", children: /* @__PURE__ */ jsx(
            InputWrapper,
            {
              label: "Description",
              name: "description",
              errors: albumForm.errors,
              children: /* @__PURE__ */ jsx(
                InputTextarea,
                {
                  rows: 5,
                  cols: 30,
                  autoResize: true,
                  name: "description",
                  value: albumForm.state.description,
                  onBlur: albumForm.handleBlur,
                  onChange: albumForm.handleChange
                }
              )
            }
          ) }) }),
          /* @__PURE__ */ jsx("div", { className: "s__row", children: /* @__PURE__ */ jsx("div", { className: "s__col c--12", children: /* @__PURE__ */ jsx(
            InputWrapper,
            {
              label: "Date",
              name: "date",
              errors: albumForm.errors,
              children: /* @__PURE__ */ jsx(
                Calendar,
                {
                  name: "date",
                  value: albumForm.state.date,
                  onBlur: albumForm.handleBlur,
                  onChange: albumForm.handleChange
                }
              )
            }
          ) }) }),
          /* @__PURE__ */ jsx("div", { className: "flex justify-end mt-6", children: /* @__PURE__ */ jsx(
            Button,
            {
              type: "submit",
              label: `${currentAlbum ? "Update" : "Add"}`,
              loading: albumForm.isSubmitting,
              disabled: albumForm.isSubmitting
            }
          ) })
        ] })
      }
    ),
    /* @__PURE__ */ jsx(
      Dialog,
      {
        header: newGalleryActionDialog === "edit" ? "Edit Gallery" : "Add New Gallery",
        visible: newGalleryDialog,
        style: { width: "60vw" },
        onHide: () => {
          setNewGalleryDialog(false);
          setCurrentAlbum();
        },
        children: newGalleryActionDialog === "edit" ? /* @__PURE__ */ jsx(Fragment, { children: currentAlbum == null ? void 0 : currentAlbum.gallery.map((gallery) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: "flex items-center justify-between [&:not(:last-child)]:mb-[1rem]",
            children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: `/uploads/gallery/${gallery.image}`,
                  alt: `${gallery.image}`,
                  className: "object-center w-[12rem] h-[6rem]"
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center ", children: [
                /* @__PURE__ */ jsx(
                  FileUpload,
                  {
                    mode: "basic",
                    name: "images[]",
                    url: `/dashboard/gallery/${gallery.id}`,
                    accept: "image/*",
                    maxFileSize: 1e7,
                    onUpload: () => {
                      toast.current.show({
                        severity: "success",
                        summary: "Success",
                        detail: "Image replaced successfully"
                      });
                    },
                    auto: true,
                    chooseLabel: "Replace"
                  }
                ),
                /* @__PURE__ */ jsx(
                  Button,
                  {
                    label: "Delete",
                    icon: "pi pi-times",
                    className: " p-button-danger",
                    style: { marginLeft: "1rem" },
                    "aria-label": "Delete",
                    onClick: () => deleteGalleryImage(gallery.id)
                  }
                )
              ] })
            ]
          },
          `${gallery.id}`
        )) }) : /* @__PURE__ */ jsx(
          FileUpload,
          {
            multiple: true,
            name: "images[]",
            url: `/dashboard/gallery?album=${currentAlbum == null ? void 0 : currentAlbum.id}`,
            accept: "image/*",
            maxFileSize: 1e7,
            emptyTemplate: /* @__PURE__ */ jsx("p", { className: "m-0", children: "Drag and drop files to here to upload." }),
            onUpload: (e) => {
              setNewGalleryDialog(false);
              toast.current.show({
                severity: "success",
                summary: "Success",
                detail: "Gallery uploaded successfully"
              });
              const data = JSON.parse(e.xhr.response);
              setAllAlbum(
                (state) => state.map((a) => {
                  if (a.id === data.data.id) {
                    return data.data;
                  }
                  return a;
                })
              );
            },
            onError: (e) => {
              if (e.xhr.status === 413) {
                toast.current.show({
                  severity: "error",
                  summary: "Files to large",
                  life: 3e3
                });
              } else {
                toast.current.show({
                  severity: "error",
                  summary: "Oooops! somthing went wrong.",
                  life: 3e3
                });
              }
            }
          }
        )
      }
    ),
    /* @__PURE__ */ jsx(
      Menu,
      {
        popup: true,
        ref: actionMenu,
        id: "action_menu",
        model: [
          {
            label: "Add Gallery",
            icon: "pi pi-image",
            command: () => openGalleryDialog("add")
          },
          {
            label: "Edit Gallery",
            icon: "pi pi-pencil",
            command: () => openGalleryDialog("edit")
          },
          {
            label: "Delete Gallery",
            icon: "pi pi-times",
            command: () => deleteGallery()
          }
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      Lightbox,
      {
        open: selectedIndex >= 0,
        fullscreen: { auto: false },
        plugins: [Fullscreen, Counter],
        index: selectedIndex,
        close: () => {
          setSelectedIndex(-1);
          setCurrentGallery();
        },
        slides: currentGallery
      }
    )
  ] });
};
export {
  Album as default
};
