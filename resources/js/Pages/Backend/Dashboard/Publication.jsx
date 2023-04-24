import axios from "axios";
import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import { Card } from "primereact/card";
import { Column } from "primereact/column";
import { confirmPopup, ConfirmPopup } from "primereact/confirmpopup";
import { DataTable } from "primereact/datatable";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputText";
import { InputTextarea } from "primereact/inputtextarea";
import { Toast } from "primereact/toast";
import React from "react";

import { InputWrapper } from "../../../components/common";
import useFormValidation from "../../../components/form/useFormValidation";
import { Dashboard } from "../../../components/layouts/dashboard";
import { formatDateTimeShort } from "../../../helpers";

const Publication = () => {
    const toast = React.useRef(null);
    const [newPublicationDialog, setNewPublicationDialog] =
        React.useState(false);
    const [currentPublication, setCurrentPublication] = React.useState();
    const [allPublicationsCount, setAllPublicationsCount] = React.useState();
    const [allPublications, setAllPublications] = React.useState([]);
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

    const publicationForm = useFormValidation(
        {
            title: "",
            pdf: null,
            image: null,
            description: "",
            published_date: "",
        },
        {
            title: "required",
            pdf: "required",
            image: "required",
            description: "",
            published_date: "required",
        },
        submitPublicationForm
    );
    const publicationUpdateForm = useFormValidation(
        {
            title: "",
            pdf: null,
            image: null,
            description: "",
            published_date: "",
        },
        {
            title: "required",
            pdf: "",
            image: "",
            description: "",
            published_date: "required",
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

        axios
            .post(`/dashboard/publications`, data, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then(({ data }) => {
                publicationForm.clearValues(true);
                publicationForm.updateIsSubmitting(false);
                toast.current.show({
                    severity: "success",
                    summary: "Publication added successfully",
                    life: 3000,
                });
                const newPubs =
                    allPublications.length < lazyParams.rows
                        ? [data.data, ...allPublications]
                        : [data.data, ...[].concat(allPublications.pop())];
                setAllPublications(newPubs);
            })
            .catch((err) => {
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
    }

    function updatePublicationForm() {
        const data = new FormData();
        data.append("title", publicationUpdateForm.state.title);
        data.append(
            "pdf",
            publicationUpdateForm.state.pdf
                ? publicationUpdateForm.state.pdf[0]
                : publicationUpdateForm.state.pdf
        );
        data.append("description", publicationUpdateForm.state.description);
        data.append(
            "published_date",
            publicationUpdateForm.state.published_date
        );
        data.append(
            "image",
            publicationUpdateForm.state.image
                ? publicationUpdateForm.state.image[0]
                : publicationUpdateForm.state.image
        );

        axios
            .post(`/dashboard/publications/${currentPublication.id}`, data, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then(({ data }) => {
                publicationUpdateForm.updateIsSubmitting(false);
                toast.current.show({
                    severity: "success",
                    summary: "Publication updated successfully",
                    life: 3000,
                });
                setAllPublications((state) =>
                    state.map((p) => {
                        if (p.id === data.data.id) {
                            return data.data;
                        }
                        return p;
                    })
                );
                setNewPublicationDialog(false);
            })
            .catch((err) => {
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
    }

    const deletePublication = (event, id) => {
        confirmPopup({
            target: event.currentTarget,
            message: "Do you want to delete this publication?",
            icon: "pi pi-trash",
            acceptClassName: "p-button-danger",
            accept: () => {
                axios
                    .delete(`/dashboard/publications/${id}`)
                    .then(({ data }) => {
                        toast.current.show({
                            severity: "success",
                            summary: "Publication deleted successfully",
                            life: 3000,
                        });
                        setAllPublications((state) =>
                            state.filter((p) => p.id !== id)
                        );
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
            },
        });
    };

    const setUpdatePublicationForm = (publication) => {
        publicationUpdateForm.setValues({
            title: publication.title,
            pdf: null,
            image: null,
            description: publication.description,
            published_date: new Date(publication.published_date),
        });
        setCurrentPublication(publication);
        setNewPublicationDialog(true);
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
                        <InputText placeholder="Search publications..." />
                    </span>
                </div>
                <div className="table__header__buttons">
                    <Button
                        label="New Publication"
                        type="button"
                        icon="pi pi-plus"
                        className="p-button-primary"
                        onClick={() => setNewPublicationDialog(true)}
                    />
                </div>
            </div>
        );
    };
    const publishedDateBody = (row) => (
        <span>{formatDateTimeShort(row.published_date)}</span>
    );
    const imageBody = (row) => (
        <div style={{ height: "6rem", overflow: "hidden" }}>
            <img
                src={`/uploads/publications/images/${row.image}`}
                alt={row.title}
                style={{ width: "12rem", height: "6rem" }}
            />
        </div>
    );
    const titleBody = (row) => (
        <a
            href={`/uploads/publications/pdf/${row.pdf}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "underline" }}
        >
            {row.title}
        </a>
    );
    const actionTemplate = (row) => {
        return (
            <div>
                <Button
                    type="button"
                    icon="pi pi-pencil"
                    tooltip="Edit Publication "
                    tooltipOptions={{ position: "top" }}
                    className="p-button-text p-button-secondary p-button-sm"
                    onClick={() => setUpdatePublicationForm(row)}
                />
                <Button
                    type="button"
                    icon="pi pi-trash"
                    tooltip="Delete Publication"
                    tooltipOptions={{ position: "top" }}
                    className="p-button-text p-button-danger p-button-sm"
                    onClick={(e) => deletePublication(e, row.id)}
                />
            </div>
        );
    };
    const loadLazyData = React.useCallback(async () => {
        axios
            .get(
                `/dashboard/publications/all?offset=${lazyParams.first}&limit=${lazyParams.rows}`
            )
            .then(({ data }) => {
                if (data.status) {
                    const response = data.data;
                    setAllPublicationsCount(response.count);
                    setAllPublications(response.records);
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
            <Dashboard page="Publications">
                <Card>
                    <DataTable
                        value={allPublications}
                        first={lazyParams.first}
                        rows={lazyParams.rows}
                        totalRecords={allPublicationsCount}
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
                        emptyMessage="No publication found."
                    >
                        <Column header="Banner" body={imageBody} />
                        <Column header="Title" body={titleBody} />
                        <Column
                            header="Description"
                            field="description"
                            bodyStyle={{ width: "40rem" }}
                        />
                        <Column
                            header="Published On"
                            body={publishedDateBody}
                        />
                        <Column header="Actions" body={actionTemplate} />
                    </DataTable>
                </Card>
            </Dashboard>
            <Dialog
                header={
                    currentPublication
                        ? "Update Publication"
                        : "Add New Publication"
                }
                visible={newPublicationDialog}
                style={{ width: "50%" }}
                onHide={() => {
                    setNewPublicationDialog(false);
                    publicationForm.clearValues();
                    publicationUpdateForm.clearValues();
                    setCurrentPublication();
                }}
            >
                {currentPublication ? (
                    <form onSubmit={publicationUpdateForm.handleSubmit}>
                        <div className="s__row">
                            <div className="s__col c--12">
                                <InputWrapper
                                    label="Title"
                                    name="title"
                                    errors={publicationUpdateForm.errors}
                                >
                                    <InputText
                                        name="title"
                                        value={
                                            publicationUpdateForm.state.title
                                        }
                                        onBlur={
                                            publicationUpdateForm.handleBlur
                                        }
                                        onChange={
                                            publicationUpdateForm.handleChange
                                        }
                                    />
                                </InputWrapper>
                            </div>
                        </div>
                        <div className="s__row">
                            <div className="s__col c--12">
                                <InputWrapper
                                    label="Description"
                                    name="description"
                                    errors={publicationUpdateForm.errors}
                                >
                                    <InputTextarea
                                        rows={5}
                                        cols={30}
                                        autoResize
                                        name="description"
                                        value={
                                            publicationUpdateForm.state
                                                .description
                                        }
                                        onBlur={
                                            publicationUpdateForm.handleBlur
                                        }
                                        onChange={
                                            publicationUpdateForm.handleChange
                                        }
                                    />
                                </InputWrapper>
                            </div>
                        </div>
                        <div className="s__row">
                            <div className="s__col c--6">
                                <InputWrapper
                                    label="Image"
                                    name="image"
                                    errors={publicationUpdateForm.errors}
                                >
                                    <InputText
                                        type="file"
                                        accept="image/*"
                                        name="image"
                                        onChange={
                                            publicationUpdateForm.handleChange
                                        }
                                    />
                                </InputWrapper>
                            </div>
                            <div className="s__col c--6">
                                <InputWrapper
                                    label="PDF File"
                                    name="pdf"
                                    errors={publicationUpdateForm.errors}
                                >
                                    <InputText
                                        type="file"
                                        accept="application/pdf"
                                        name="pdf"
                                        onChange={
                                            publicationUpdateForm.handleChange
                                        }
                                    />
                                </InputWrapper>
                            </div>
                        </div>
                        <div className="s__row">
                            <div className="s__col c--12">
                                <InputWrapper
                                    label="Published Date"
                                    name="published_date"
                                    errors={publicationUpdateForm.errors}
                                >
                                    <Calendar
                                        name="published_date"
                                        value={
                                            publicationUpdateForm.state
                                                .published_date
                                        }
                                        onBlur={
                                            publicationUpdateForm.handleBlur
                                        }
                                        onChange={
                                            publicationUpdateForm.handleChange
                                        }
                                    ></Calendar>
                                </InputWrapper>
                            </div>
                        </div>
                        <div className="flex justify-end mt-6">
                            <Button
                                type="submit"
                                label="Add"
                                loading={publicationUpdateForm.isSubmitting}
                                disabled={publicationUpdateForm.isSubmitting}
                            />
                        </div>
                    </form>
                ) : (
                    <form onSubmit={publicationForm.handleSubmit}>
                        <div className="s__row">
                            <div className="s__col c--12">
                                <InputWrapper
                                    label="Title"
                                    name="title"
                                    errors={publicationForm.errors}
                                >
                                    <InputText
                                        name="title"
                                        value={publicationForm.state.title}
                                        onBlur={publicationForm.handleBlur}
                                        onChange={publicationForm.handleChange}
                                    />
                                </InputWrapper>
                            </div>
                        </div>
                        <div className="s__row">
                            <div className="s__col c--12">
                                <InputWrapper
                                    label="Description"
                                    name="description"
                                    errors={publicationForm.errors}
                                >
                                    <InputTextarea
                                        rows={5}
                                        cols={30}
                                        autoResize
                                        name="description"
                                        value={
                                            publicationForm.state.description
                                        }
                                        onBlur={publicationForm.handleBlur}
                                        onChange={publicationForm.handleChange}
                                    />
                                </InputWrapper>
                            </div>
                        </div>
                        <div className="s__row">
                            <div className="s__col c--6">
                                <InputWrapper
                                    label="Image"
                                    name="image"
                                    errors={publicationForm.errors}
                                >
                                    <InputText
                                        type="file"
                                        accept="image/*"
                                        name="image"
                                        onChange={publicationForm.handleChange}
                                    />
                                </InputWrapper>
                            </div>
                            <div className="s__col c--6">
                                <InputWrapper
                                    label="PDF File"
                                    name="pdf"
                                    errors={publicationForm.errors}
                                >
                                    <InputText
                                        type="file"
                                        accept="application/pdf"
                                        name="pdf"
                                        onChange={publicationForm.handleChange}
                                    />
                                </InputWrapper>
                            </div>
                        </div>
                        <div className="s__row">
                            <div className="s__col c--12">
                                <InputWrapper
                                    label="Published Date"
                                    name="published_date"
                                    errors={publicationForm.errors}
                                >
                                    <Calendar
                                        name="published_date"
                                        value={
                                            publicationForm.state.published_date
                                        }
                                        onBlur={publicationForm.handleBlur}
                                        onChange={publicationForm.handleChange}
                                    ></Calendar>
                                </InputWrapper>
                            </div>
                        </div>
                        <div className="flex justify-end mt-6">
                            <Button
                                type="submit"
                                label="Add"
                                loading={publicationForm.isSubmitting}
                                disabled={publicationForm.isSubmitting}
                            />
                        </div>
                    </form>
                )}
            </Dialog>
        </>
    );
};

export default Publication;
