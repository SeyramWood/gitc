import axios from "axios";
import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import { Card } from "primereact/card";
import { Column } from "primereact/column";
import { confirmPopup, ConfirmPopup } from "primereact/confirmpopup";
import { DataTable } from "primereact/datatable";
import { Dialog } from "primereact/dialog";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputText";
import { InputTextarea } from "primereact/inputtextarea";
import { Toast } from "primereact/toast";
import React from "react";

import { InputWrapper } from "../../../components/common";
import useFormValidation from "../../../components/form/useFormValidation";
import { Dashboard } from "../../../components/layouts/dashboard";
import { formatDateTimeShort } from "../../../helpers";

const Cases = ({ categories }) => {
    const toast = React.useRef(null);
    const [newCaseDialog, setNewCaseDialog] = React.useState(false);
    const [currentCase, setCurrentCase] = React.useState();
    const [allCategories, setAllCategories] = React.useState(categories);
    const [allCasesCount, setAllCasesCount] = React.useState();
    const [allCases, setAllCases] = React.useState([]);
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

    const caseForm = useFormValidation(
        {
            category: "",
            investigation_number: "",
            title: "",
            pdf: null,
            description: "",
            issued_date: "",
        },
        {
            category: "required|numeric",
            investigation_number: "required",
            title: "required",
            pdf: "required",
            description: "",
            issued_date: "required",
        },
        submitCaseForm
    );

    const caseUpdateForm = useFormValidation(
        {
            category: "",
            investigation_number: "",
            title: "",
            pdf: null,
            description: "",
            issued_date: "",
        },
        {
            category: "required|numeric",
            investigation_number: "",
            title: "required",
            pdf: "",
            description: "",
            issued_date: "required",
        },
        updateCaseForm
    );

    function submitCaseForm() {
        const data = new FormData();
        data.append("category", caseForm.state.category);
        data.append("title", caseForm.state.title);
        data.append("pdf", caseForm.state.pdf[0]);
        data.append("description", caseForm.state.description);
        data.append(
            "issued_date",
            caseForm.state.issued_date
                .toISOString()
                .slice(0, 19)
                .replace("T", " ")
        );
        data.append(
            "investigation_number",
            caseForm.state.investigation_number
        );

        axios
            .post(`/dashboard/cases`, data, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then(({ data }) => {
                caseForm.clearValues(true);
                caseForm.updateIsSubmitting(false);
                toast.current.show({
                    severity: "success",
                    summary: "Case added successfully",
                    life: 3000,
                });
                const newPubs =
                    allCases.length < lazyParams.rows
                        ? [data.data, ...allCases]
                        : [data.data, ...[].concat(allCases.pop())];
                setAllCases(newPubs);
            })
            .catch((err) => {
                caseForm.updateIsSubmitting(false);
                if (err["response"]) {
                    if (err.response.status === 422) {
                        caseForm.setServerErrors(err.response.data.errors);
                    } else if (err.response.status === 413) {
                        toast.current.show({
                            severity: "error",
                            summary: "File to large",
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

    function updateCaseForm() {
        const data = new FormData();
        data.append("category", caseUpdateForm.state.category);
        data.append("title", caseUpdateForm.state.title);
        data.append(
            "investigation_number",
            caseUpdateForm.state.investigation_number
        );
        data.append(
            "pdf",
            caseUpdateForm.state.pdf
                ? caseUpdateForm.state.pdf[0]
                : caseUpdateForm.state.pdf
        );
        data.append("description", caseUpdateForm.state.description);
        data.append(
            "issued_date",
            caseUpdateForm.state.issued_date
                .toISOString()
                .slice(0, 19)
                .replace("T", " ")
        );

        axios
            .post(`/dashboard/cases/${currentCase.id}`, data, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then(({ data }) => {
                caseUpdateForm.updateIsSubmitting(false);
                toast.current.show({
                    severity: "success",
                    summary: "Case updated successfully",
                    life: 3000,
                });
                setAllCases((state) =>
                    state.map((p) => {
                        if (p.id === data.data.id) {
                            return data.data;
                        }
                        return p;
                    })
                );
                setNewCaseDialog(false);
            })
            .catch((err) => {
                caseUpdateForm.updateIsSubmitting(false);
                if (err["response"]) {
                    if (err.response.status === 422) {
                        caseUpdateForm.setServerErrors(
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

    const deleteCase = (event, id) => {
        confirmPopup({
            target: event.currentTarget,
            message: "Do you want to delete this case?",
            icon: "pi pi-trash",
            acceptClassName: "p-button-danger",
            accept: () => {
                axios
                    .delete(`/dashboard/cases/${id}`)
                    .then(({ data }) => {
                        toast.current.show({
                            severity: "success",
                            summary: "Case deleted successfully",
                            life: 3000,
                        });
                        setAllCases((state) =>
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

    const setUpdateCaseForm = (data) => {
        caseUpdateForm.setValues({
            category: data.case_category_id,
            investigation_number: data.investigation_number,
            title: data.title,
            pdf: null,
            description: data.description,
            issued_date: new Date(data.issued_date),
        });
        setCurrentCase(data);
        setNewCaseDialog(true);
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
                        <InputText placeholder="Search cases..." />
                    </span>
                </div>
                <div className="table__header__buttons">
                    <Button
                        label="New Case"
                        type="button"
                        icon="pi pi-plus"
                        className="p-button-primary"
                        onClick={() => setNewCaseDialog(true)}
                    />
                </div>
            </div>
        );
    };
    const issuedDateBody = (row) => (
        <span>{formatDateTimeShort(row.issued_date)}</span>
    );
    const titleBody = (row) => (
        <a
            href={`/uploads/cases/${row.pdf}`}
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
                    tooltip="Edit Case "
                    tooltipOptions={{ position: "top" }}
                    className="p-button-text p-button-secondary p-button-sm"
                    onClick={() => setUpdateCaseForm(row)}
                />
                <Button
                    type="button"
                    icon="pi pi-trash"
                    tooltip="Delete Case"
                    tooltipOptions={{ position: "top" }}
                    className="p-button-text p-button-danger p-button-sm"
                    onClick={(e) => deleteCase(e, row.id)}
                />
            </div>
        );
    };
    const loadLazyData = React.useCallback(async () => {
        axios
            .get(
                `/dashboard/cases/all?offset=${lazyParams.first}&limit=${lazyParams.rows}`
            )
            .then(({ data }) => {
                if (data.status) {
                    const response = data.data;
                    setAllCasesCount(response.count);
                    setAllCases(response.records);
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
            <Dashboard page="Cases">
                <Card>
                    <DataTable
                        value={allCases}
                        first={lazyParams.first}
                        rows={lazyParams.rows}
                        totalRecords={allCasesCount}
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
                        <Column
                            header="Investigation #"
                            field="investigation_number"
                        />
                        <Column header="Title" body={titleBody} />
                        <Column
                            header="Description"
                            field="description"
                            bodyStyle={{ width: "40rem" }}
                        />
                        <Column header="Issued On" body={issuedDateBody} />
                        <Column header="Actions" body={actionTemplate} />
                    </DataTable>
                </Card>
            </Dashboard>
            <Dialog
                header={currentCase ? "Update Case" : "Add New Case"}
                visible={newCaseDialog}
                style={{ width: "50%" }}
                onHide={() => {
                    setNewCaseDialog(false);
                    caseForm.clearValues();
                    caseUpdateForm.clearValues();
                    setCurrentCase();
                }}
            >
                {currentCase ? (
                    <form onSubmit={caseUpdateForm.handleSubmit}>
                        <div className="s__row">
                            <div className="s__col c--12">
                                <InputWrapper
                                    label="Category"
                                    name="category"
                                    errors={caseUpdateForm.errors}
                                >
                                    <Dropdown
                                        value={caseUpdateForm.state.category}
                                        name="category"
                                        options={
                                            allCategories?.map((cat) => ({
                                                name: cat.name,
                                                value: cat.id,
                                            })) || []
                                        }
                                        onChange={caseUpdateForm.handleChange}
                                        onBlur={caseUpdateForm.handleBlur}
                                        optionLabel="name"
                                        optionValue="value"
                                        filter
                                        showClear
                                        filterBy="name"
                                        placeholder="Select a category"
                                    />
                                </InputWrapper>
                            </div>
                        </div>
                        <div className="s__row">
                            <div className="s__col c--12">
                                <InputWrapper
                                    label="Investigation #"
                                    name="investigation_number"
                                    errors={caseUpdateForm.errors}
                                >
                                    <InputText
                                        name="investigation_number"
                                        value={
                                            caseUpdateForm.state
                                                .investigation_number
                                        }
                                        onBlur={caseUpdateForm.handleBlur}
                                        onChange={caseUpdateForm.handleChange}
                                    />
                                </InputWrapper>
                            </div>
                        </div>
                        <div className="s__row">
                            <div className="s__col c--12">
                                <InputWrapper
                                    label="Title"
                                    name="title"
                                    errors={caseUpdateForm.errors}
                                >
                                    <InputText
                                        name="title"
                                        value={caseUpdateForm.state.title}
                                        onBlur={caseUpdateForm.handleBlur}
                                        onChange={caseUpdateForm.handleChange}
                                    />
                                </InputWrapper>
                            </div>
                        </div>
                        <div className="s__row">
                            <div className="s__col c--12">
                                <InputWrapper
                                    label="Description"
                                    name="description"
                                    errors={caseUpdateForm.errors}
                                >
                                    <InputTextarea
                                        rows={5}
                                        cols={30}
                                        autoResize
                                        name="description"
                                        value={caseUpdateForm.state.description}
                                        onBlur={caseUpdateForm.handleBlur}
                                        onChange={caseUpdateForm.handleChange}
                                    />
                                </InputWrapper>
                            </div>
                        </div>
                        <div className="s__row">
                            <div className="s__col c--12">
                                <InputWrapper
                                    label="Case File"
                                    name="pdf"
                                    errors={caseUpdateForm.errors}
                                >
                                    <InputText
                                        type="file"
                                        accept="application/pdf"
                                        name="pdf"
                                        onChange={caseUpdateForm.handleChange}
                                    />
                                </InputWrapper>
                            </div>
                        </div>
                        <div className="s__row">
                            <div className="s__col c--12">
                                <InputWrapper
                                    label="Issued Date"
                                    name="issued_date"
                                    errors={caseUpdateForm.errors}
                                >
                                    <Calendar
                                        name="issued_date"
                                        value={caseUpdateForm.state.issued_date}
                                        onBlur={caseUpdateForm.handleBlur}
                                        onChange={caseUpdateForm.handleChange}
                                    ></Calendar>
                                </InputWrapper>
                            </div>
                        </div>
                        <div className="flex justify-end mt-6">
                            <Button
                                type="submit"
                                label="Update"
                                loading={caseUpdateForm.isSubmitting}
                                disabled={caseUpdateForm.isSubmitting}
                            />
                        </div>
                    </form>
                ) : (
                    <form onSubmit={caseForm.handleSubmit}>
                        <div className="s__row">
                            <div className="s__col c--12">
                                <InputWrapper
                                    label="Category"
                                    name="category"
                                    errors={caseForm.errors}
                                >
                                    <Dropdown
                                        value={caseForm.state.category}
                                        name="category"
                                        options={
                                            allCategories?.map((cat) => ({
                                                name: cat.name,
                                                value: cat.id,
                                            })) || []
                                        }
                                        onChange={caseForm.handleChange}
                                        onBlur={caseForm.handleBlur}
                                        optionLabel="name"
                                        optionValue="value"
                                        filter
                                        showClear
                                        filterBy="name"
                                        placeholder="Select a category"
                                    />
                                </InputWrapper>
                            </div>
                        </div>
                        <div className="s__row">
                            <div className="s__col c--12">
                                <InputWrapper
                                    label="Investigation #"
                                    name="investigation_number"
                                    errors={caseForm.errors}
                                >
                                    <InputText
                                        name="investigation_number"
                                        value={
                                            caseForm.state.investigation_number
                                        }
                                        onBlur={caseForm.handleBlur}
                                        onChange={caseForm.handleChange}
                                    />
                                </InputWrapper>
                            </div>
                        </div>
                        <div className="s__row">
                            <div className="s__col c--12">
                                <InputWrapper
                                    label="Title"
                                    name="title"
                                    errors={caseForm.errors}
                                >
                                    <InputText
                                        name="title"
                                        value={caseForm.state.title}
                                        onBlur={caseForm.handleBlur}
                                        onChange={caseForm.handleChange}
                                    />
                                </InputWrapper>
                            </div>
                        </div>
                        <div className="s__row">
                            <div className="s__col c--12">
                                <InputWrapper
                                    label="Description"
                                    name="description"
                                    errors={caseForm.errors}
                                >
                                    <InputTextarea
                                        rows={5}
                                        cols={30}
                                        autoResize
                                        name="description"
                                        value={caseForm.state.description}
                                        onBlur={caseForm.handleBlur}
                                        onChange={caseForm.handleChange}
                                    />
                                </InputWrapper>
                            </div>
                        </div>
                        <div className="s__row">
                            <div className="s__col c--12">
                                <InputWrapper
                                    label="Case File"
                                    name="pdf"
                                    errors={caseForm.errors}
                                >
                                    <InputText
                                        type="file"
                                        accept="application/pdf"
                                        name="pdf"
                                        onChange={caseForm.handleChange}
                                    />
                                </InputWrapper>
                            </div>
                        </div>
                        <div className="s__row">
                            <div className="s__col c--12">
                                <InputWrapper
                                    label="Issued Date"
                                    name="issued_date"
                                    errors={caseForm.errors}
                                >
                                    <Calendar
                                        name="issued_date"
                                        value={caseForm.state.issued_date}
                                        onBlur={caseForm.handleBlur}
                                        onChange={caseForm.handleChange}
                                    ></Calendar>
                                </InputWrapper>
                            </div>
                        </div>
                        <div className="flex justify-end mt-6">
                            <Button
                                type="submit"
                                label="Add"
                                loading={caseForm.isSubmitting}
                                disabled={caseForm.isSubmitting}
                            />
                        </div>
                    </form>
                )}
            </Dialog>
        </>
    );
};

export default Cases;
