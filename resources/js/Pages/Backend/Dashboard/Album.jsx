import axios from "axios";
import FsLightbox from "fslightbox-react";
import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import { Card } from "primereact/card";
import { Column } from "primereact/column";
import { confirmPopup, ConfirmPopup } from "primereact/confirmpopup";
import { DataTable } from "primereact/datatable";
import { Dialog } from "primereact/dialog";
import { FileUpload } from "primereact/fileupload";
import { InputText } from "primereact/inputText";
import { InputTextarea } from "primereact/inputtextarea";
import { Menu } from "primereact/menu";
import { Toast } from "primereact/toast";
import React from "react";

import { InputWrapper } from "../../../components/common";
import useFormValidation from "../../../components/form/useFormValidation";
import { Dashboard } from "../../../components/layouts/dashboard";
import { formatDateTimeShort } from "../../../helpers";

const Album = () => {
    const toast = React.useRef(null);
    const actionMenu = React.useRef(null);
    const [galleryViewer, setGalleryViewer] = React.useState(false);
    const [newAlbumDialog, setNewAlbumDialog] = React.useState(false);
    const [newGalleryDialog, setNewGalleryDialog] = React.useState(false);
    const [newGalleryActionDialog, setNewGalleryActionDialog] =
        React.useState("add");
    const [currentAlbum, setCurrentAlbum] = React.useState();
    const [currentGallery, setCurrentGallery] = React.useState();
    const [allAlbumCount, setAllAlbumCount] = React.useState();
    const [allAlbum, setAllAlbum] = React.useState([]);
    const [lazyParams, setLazyParams] = React.useState({
        first: 0,
        rows: 50,
        page: 0,
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
            date: "",
        },
        {
            name: "required",
            description: "",
            date: "required",
        },
        currentAlbum ? updateAlbumForm : submitAlbumForm
    );

    function submitAlbumForm() {
        axios
            .post(`/dashboard/albums`, albumForm.state)
            .then(({ data }) => {
                albumForm.clearValues(true);
                albumForm.updateIsSubmitting(false);
                toast.current.show({
                    severity: "success",
                    summary: "Album added successfully",
                    life: 3000,
                });
                const newAlbum =
                    allAlbum.length < lazyParams.rows
                        ? [data.data, ...allAlbum]
                        : [data.data, ...[].concat(allAlbum.pop())];
                setAllAlbum(newAlbum);
            })
            .catch((err) => {
                albumForm.updateIsSubmitting(false);
                if (err["response"]) {
                    if (err.response.status === 422) {
                        albumForm.setServerErrors(err.response.data.errors);
                    } else if (err.response.status === 500) {
                        toast.current.show({
                            severity: "error",
                            summary:
                                "Ooops! Something went wrong, please refresh and try again.",
                            life: 3000,
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
        axios
            .put(`/dashboard/albums/${currentAlbum.id}`, albumForm.state)
            .then(({ data }) => {
                albumForm.updateIsSubmitting(false);
                toast.current.show({
                    severity: "success",
                    summary: "Album updated successfully",
                    life: 3000,
                });
                setAllAlbum((state) =>
                    state.map((p) => {
                        if (p.id === data.data.id) {
                            return data.data;
                        }
                        return p;
                    })
                );
                setNewAlbumDialog(false);
            })
            .catch((err) => {
                albumForm.updateIsSubmitting(false);
                if (err["response"]) {
                    if (err.response.status === 422) {
                        albumForm.setServerErrors(err.response.data.errors);
                    } else if (err.response.status === 500) {
                        toast.current.show({
                            severity: "error",
                            summary:
                                "Ooops! Something went wrong, please refresh and try again.",
                            life: 3000,
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
                axios
                    .delete(`/dashboard/albums/${id}`)
                    .then(({ data }) => {
                        toast.current.show({
                            severity: "success",
                            summary: "Album deleted successfully",
                            life: 3000,
                        });
                        setAllAlbum((state) =>
                            state.filter((p) => p.id !== id)
                        );
                    })
                    .catch((err) => {
                        if (err["response"]) {
                            if (err.response.status === 500) {
                                toast.current.show({
                                    severity: "error",
                                    summary:
                                        "Ooops! Something went wrong, please refresh and try again.",
                                    life: 3000,
                                });
                            } else {
                                console.trace(err);
                            }
                        } else {
                            console.trace(err);
                        }
                    });
            },
        });
    };

    const deleteGalleryImage = (id) => {
        axios
            .delete(`/dashboard/gallery/${id}`)
            .then(({ data }) => {
                setCurrentAlbum((state) => ({
                    ...state,
                    gallery: state.gallery.filter((g) => g.id !== id),
                }));
                setAllAlbum((state) =>
                    state.map((album) => {
                        if (album.id === currentAlbum.id) {
                            return {
                                ...album,
                                gallery: album.gallery.filter(
                                    (g) => g.id !== id
                                ),
                            };
                        }
                        return album;
                    })
                );
                toast.current.show({
                    severity: "success",
                    summary: "Image deleted successfully",
                    life: 3000,
                });
            })
            .catch((err) => {
                if (err["response"]) {
                    if (err.response.status === 413) {
                        toast.current.show({
                            severity: "error",
                            summary: "Files to large",
                            life: 3000,
                        });
                    } else if (err.response.status === 500) {
                        toast.current.show({
                            severity: "error",
                            summary:
                                "Ooops! Something went wrong, please refresh and try again.",
                            life: 3000,
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
        axios
            .delete(`/dashboard/gallery/${currentAlbum.id}/all`)
            .then(({ data }) => {
                setAllAlbum((state) =>
                    state.map((album) => {
                        if (album.id === currentAlbum.id) {
                            return {
                                ...album,
                                gallery: [],
                            };
                        }
                        return album;
                    })
                );
                toast.current.show({
                    severity: "success",
                    summary: "Image deleted successfully",
                    life: 3000,
                });
            })
            .catch((err) => {
                if (err["response"]) {
                    if (err.response.status === 413) {
                        toast.current.show({
                            severity: "error",
                            summary: "Files to large",
                            life: 3000,
                        });
                    } else if (err.response.status === 500) {
                        toast.current.show({
                            severity: "error",
                            summary:
                                "Ooops! Something went wrong, please refresh and try again.",
                            life: 3000,
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
            date: new Date(data.date),
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
            data.gallery.map((gallery) => `/uploads/gallery/${gallery.image}`)
        );
        setGalleryViewer((state) => !state);
    };

    const onGalleryUpload = (action) => {
        setNewGalleryDialog(false);
        toast.current.show({
            severity: "success",
            summary: "Success",
            detail: "Gallery uploaded successfully",
        });
    };

    const onPage = (event) => {
        setLazyParams(event);
    };
    const onSort = (event) => {
        setLazyParams(event);
    };

    const renderHeader = () => {
        return (
            <div className="table__header">
                <div className="table__header__search">
                    <span className="p-input-icon-left">
                        <i className="pi pi-search" />
                        <InputText placeholder="Search album..." />
                    </span>
                </div>
                <div className="table__header__buttons">
                    <Button
                        label="New Album"
                        type="button"
                        icon="pi pi-plus"
                        className="p-button-primary"
                        onClick={() => setNewAlbumDialog(true)}
                    />
                </div>
            </div>
        );
    };

    const dateDateBody = (row) => <span>{formatDateTimeShort(row.date)}</span>;

    const actionTemplate = (row) => {
        return (
            <div>
                <Button
                    type="button"
                    icon="pi pi-eye"
                    tooltip="View Gallery"
                    tooltipOptions={{ position: "top" }}
                    className="p-button-text p-button-secondary p-button-sm"
                    disabled={row.gallery?.length === 0}
                    onClick={() => viewGallery(row)}
                />
                <Button
                    type="button"
                    icon="pi pi-pencil"
                    tooltip="Edit Album "
                    tooltipOptions={{ position: "top" }}
                    className="p-button-text p-button-secondary p-button-sm"
                    onClick={() => setUpdateAlbumForm(row)}
                />
                <Button
                    type="button"
                    icon="pi pi-trash"
                    tooltip="Delete Album"
                    tooltipOptions={{ position: "top" }}
                    className="p-button-text p-button-danger p-button-sm"
                    onClick={(e) => deleteAlbum(e, row.id)}
                />
                <Button
                    type="button"
                    icon="pi pi-ellipsis-h"
                    tooltip="More actions"
                    tooltipOptions={{ position: "top" }}
                    className="p-button-text p-button-secondary p-button-sm"
                    onClick={(event) => {
                        setCurrentAlbum(row);
                        actionMenu.current.toggle(event);
                    }}
                    aria-controls="action_menu"
                    aria-haspopup
                />
            </div>
        );
    };

    const loadLazyData = React.useCallback(async () => {
        axios
            .get(
                `/dashboard/albums/all?offset=${lazyParams.first}&limit=${lazyParams.rows}`
            )
            .then(({ data }) => {
                if (data.status) {
                    const response = data.data;
                    setAllAlbumCount(response.count);
                    setAllAlbum(response.records);
                }
            })
            .catch((error) => {
                console.trace(`Could not fetch data: \n`, error);
            });
    }, [lazyParams]);

    React.useEffect(() => {
        loadLazyData();
    }, [lazyParams]);

    return (
        <>
            <Toast ref={toast} />
            <ConfirmPopup />
            <Dashboard page="Album">
                <Card>
                    <DataTable
                        value={allAlbum}
                        first={lazyParams.first}
                        rows={lazyParams.rows}
                        totalRecords={allAlbumCount}
                        onPage={onPage}
                        // onSort={onSort}
                        // sortField={lazyParams.sortField}
                        // sortOrder={lazyParams.sortOrder}
                        // loading={loading}
                        paginator
                        lazy
                        dataKey="id"
                        header={renderHeader}
                        className="mt-6"
                        responsiveLayout="scroll"
                        emptyMessage="No case found."
                    >
                        <Column header="Name" field="name" />
                        <Column header="Date" body={dateDateBody} />
                        <Column
                            header="Description"
                            field="description"
                            bodyStyle={{ maxWidth: "40rem" }}
                        />
                        <Column header="Actions" body={actionTemplate} />
                    </DataTable>
                </Card>
            </Dashboard>
            <Dialog
                header={currentAlbum ? "Update Album" : "Add New Album"}
                visible={newAlbumDialog}
                style={{ width: "50%" }}
                onHide={() => {
                    setNewAlbumDialog(false);
                    albumForm.clearValues();
                    setCurrentAlbum();
                }}
            >
                <form onSubmit={albumForm.handleSubmit}>
                    <div className="s__row">
                        <div className="s__col c--12">
                            <InputWrapper
                                label="Name"
                                name="name"
                                errors={albumForm.errors}
                            >
                                <InputText
                                    name="name"
                                    value={albumForm.state.name}
                                    onBlur={albumForm.handleBlur}
                                    onChange={albumForm.handleChange}
                                />
                            </InputWrapper>
                        </div>
                    </div>
                    <div className="s__row">
                        <div className="s__col c--12">
                            <InputWrapper
                                label="Description"
                                name="description"
                                errors={albumForm.errors}
                            >
                                <InputTextarea
                                    rows={5}
                                    cols={30}
                                    autoResize
                                    name="description"
                                    value={albumForm.state.description}
                                    onBlur={albumForm.handleBlur}
                                    onChange={albumForm.handleChange}
                                />
                            </InputWrapper>
                        </div>
                    </div>
                    <div className="s__row">
                        <div className="s__col c--12">
                            <InputWrapper
                                label="Date"
                                name="date"
                                errors={albumForm.errors}
                            >
                                <Calendar
                                    name="date"
                                    value={albumForm.state.date}
                                    onBlur={albumForm.handleBlur}
                                    onChange={albumForm.handleChange}
                                ></Calendar>
                            </InputWrapper>
                        </div>
                    </div>
                    <div className="flex justify-end mt-6">
                        <Button
                            type="submit"
                            label={`${currentAlbum ? "Update" : "Add"}`}
                            loading={albumForm.isSubmitting}
                            disabled={albumForm.isSubmitting}
                        />
                    </div>
                </form>
            </Dialog>
            <Dialog
                header={
                    newGalleryActionDialog === "edit"
                        ? "Edit Gallery"
                        : "Add New Gallery"
                }
                visible={newGalleryDialog}
                style={{ width: "60vw" }}
                onHide={() => {
                    setNewGalleryDialog(false);
                    setCurrentAlbum();
                }}
            >
                {newGalleryActionDialog === "edit" ? (
                    <>
                        {currentAlbum?.gallery.map((gallery) => (
                            <div
                                key={`${gallery.id}`}
                                className="flex items-center justify-between [&:not(:last-child)]:mb-[1rem]"
                            >
                                <img
                                    src={`/uploads/gallery/${gallery.image}`}
                                    alt={`${gallery.image}`}
                                    className="object-center w-[12rem] h-[6rem]"
                                />
                                <div className="flex items-center justify-center ">
                                    <FileUpload
                                        mode="basic"
                                        name="images[]"
                                        url={`/dashboard/gallery/${gallery.id}`}
                                        accept="image/*"
                                        maxFileSize={10000000}
                                        onUpload={() => {
                                            toast.current.show({
                                                severity: "success",
                                                summary: "Success",
                                                detail: "Image replaced successfully",
                                            });
                                        }}
                                        auto
                                        chooseLabel="Replace"
                                    />
                                    <Button
                                        label="Delete"
                                        icon="pi pi-times"
                                        className=" p-button-danger"
                                        style={{ marginLeft: "1rem" }}
                                        aria-label="Delete"
                                        onClick={() =>
                                            deleteGalleryImage(gallery.id)
                                        }
                                    />
                                </div>
                            </div>
                        ))}
                    </>
                ) : (
                    <FileUpload
                        multiple
                        name="images[]"
                        url={`/dashboard/gallery?album=${currentAlbum?.id}`}
                        accept="image/*"
                        maxFileSize={10000000}
                        emptyTemplate={
                            <p className="m-0">
                                Drag and drop files to here to upload.
                            </p>
                        }
                        onUpload={(e) => {
                            setNewGalleryDialog(false);
                            toast.current.show({
                                severity: "success",
                                summary: "Success",
                                detail: "Gallery uploaded successfully",
                            });
                            const data = JSON.parse(e.xhr.response);
                            setAllAlbum((state) =>
                                state.map((a) => {
                                    if (a.id === data.data.id) {
                                        return data.data;
                                    }
                                    return a;
                                })
                            );
                        }}
                        onError={(e) => {
                            if (e.xhr.status === 413) {
                                toast.current.show({
                                    severity: "error",
                                    summary: "Files to large",
                                    life: 3000,
                                });
                            } else {
                                toast.current.show({
                                    severity: "error",
                                    summary: "Oooops! somthing went wrong.",
                                    life: 3000,
                                });
                            }
                        }}
                    />
                )}
            </Dialog>
            <Menu
                popup
                ref={actionMenu}
                id="action_menu"
                model={[
                    {
                        label: "Add Gallery",
                        icon: "pi pi-image",
                        command: () => openGalleryDialog("add"),
                    },
                    {
                        label: "Edit Gallery",
                        icon: "pi pi-pencil",
                        command: () => openGalleryDialog("edit"),
                    },
                    {
                        label: "Delete Gallery",
                        icon: "pi pi-times",
                        command: () => deleteGallery(),
                    },
                ]}
            />
            <FsLightbox
                toggler={galleryViewer}
                sources={currentGallery}
                onClose={() => {
                    setCurrentGallery();
                }}
            />
        </>
    );
};

export default Album;
