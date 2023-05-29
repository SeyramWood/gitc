import axios from "axios";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Column } from "primereact/column";
import { confirmPopup, ConfirmPopup } from "primereact/confirmpopup";
import { DataTable } from "primereact/datatable";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputText";
import { Toast } from "primereact/toast";
import React from "react";

import { InputWrapper } from "../../../components/common";
import useFormValidation from "../../../components/form/useFormValidation";
import { Dashboard } from "../../../components/layouts/dashboard";

const Users = () => {
    const toast = React.useRef(null);
    const [newUserDialog, setNewUserDialog] = React.useState(false);
    const [currentUser, setCurrentUser] = React.useState();
    const [allUsersCount, setAllUsersCount] = React.useState();
    const [allUsers, setAllUsers] = React.useState([]);
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

    const userForm = useFormValidation(
        {
            name: "",
            email: "",
            password: "",
        },
        {
            name: "required|string",
            email: "required|email",
            password: "required|string|min:8",
        },
        submitUserForm
    );

    const userUpdateForm = useFormValidation(
        {
            name: "",
            email: "",
        },
        {
            name: "required|string",
            email: "required|email",
        },
        updateUserForm
    );

    function submitUserForm() {
        axios
            .post(`/dashboard/users`, userForm.state)
            .then(({ data }) => {
                userForm.clearValues(true);
                userForm.updateIsSubmitting(false);
                toast.current.show({
                    severity: "success",
                    summary: "Users added successfully",
                    life: 3000,
                });
                const newUsers =
                    allUsers.length < lazyParams.rows
                        ? [data.data, ...allUsers]
                        : [data.data, ...[].concat(allUsers.pop())];
                setAllUsers(newUsers);
            })
            .catch((err) => {
                userForm.updateIsSubmitting(false);
                if (err["response"]) {
                    if (err.response.status === 422) {
                        userForm.setServerErrors(err.esponse.data.errors);
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

    function updateUserForm() {
        axios
            .put(`/dashboard/users/${currentUser.id}`, userUpdateForm.state)
            .then(({ data }) => {
                userUpdateForm.updateIsSubmitting(false);
                toast.current.show({
                    severity: "success",
                    summary: "User updated successfully",
                    life: 3000,
                });
                setAllUsers((state) =>
                    state.map((user) => {
                        if (user.id === data.data.id) {
                            return data.data;
                        }
                        return user;
                    })
                );
                setNewUserDialog(false);
            })
            .catch((err) => {
                userUpdateForm.updateIsSubmitting(false);
                if (err["response"]) {
                    if (err.response.status === 422) {
                        userUpdateForm.setServerErrors(
                            err.response.data.errors
                        );
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

    const deleteUser = (event, id) => {
        confirmPopup({
            target: event.currentTarget,
            message: "Do you want to delete this user?",
            icon: "pi pi-trash",
            acceptClassName: "p-button-danger",
            accept: () => {
                axios
                    .delete(`/dashboard/users/${id}`)
                    .then(({ data }) => {
                        toast.current.show({
                            severity: "success",
                            summary: "User deleted successfully",
                            life: 3000,
                        });
                        setAllUsers((state) =>
                            state.filter((user) => user.id !== id)
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

    const setUpdateUserForm = (data) => {
        userUpdateForm.setValues({
            name: data.name,
            email: data.email,
        });
        setCurrentUser(data);
        setNewUserDialog(true);
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
                        <InputText placeholder="Search users..." />
                    </span>
                </div>
                <div className="table__header__buttons">
                    <Button
                        label="New User"
                        type="button"
                        icon="pi pi-plus"
                        className="p-button-primary"
                        onClick={() => setNewUserDialog(true)}
                    />
                </div>
            </div>
        );
    };

    const actionTemplate = (row) => {
        return (
            <div>
                <Button
                    type="button"
                    icon="pi pi-pencil"
                    tooltip="Edit User"
                    tooltipOptions={{ position: "top" }}
                    className="p-button-text p-button-secondary p-button-sm"
                    onClick={() => setUpdateUserForm(row)}
                />
                <Button
                    type="button"
                    icon="pi pi-trash"
                    tooltip="Delete User"
                    tooltipOptions={{ position: "top" }}
                    className="p-button-text p-button-danger p-button-sm"
                    onClick={(e) => deleteUser(e, row.id)}
                />
            </div>
        );
    };
    const loadLazyData = React.useCallback(async () => {
        axios
            .get(
                `/dashboard/users/all?offset=${lazyParams.first}&limit=${lazyParams.rows}`
            )
            .then(({ data }) => {
                if (data.status) {
                    const response = data.data;
                    setAllUsersCount(response.count);
                    setAllUsers(response.records);
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
            <Dashboard page="Users">
                <Card>
                    <DataTable
                        value={allUsers}
                        first={lazyParams.first}
                        rows={lazyParams.rows}
                        totalRecords={allUsersCount}
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
                        emptyMessage="No user found."
                    >
                        <Column header="Name" field="name" />
                        <Column header="Email" field="email" />
                        <Column header="Actions" body={actionTemplate} />
                    </DataTable>
                </Card>
            </Dashboard>
            <Dialog
                header={currentUser ? "Update User" : "Add New User"}
                visible={newUserDialog}
                style={{ width: "50%" }}
                onHide={() => {
                    setNewUserDialog(false);
                    userForm.clearValues();
                    userUpdateForm.clearValues();
                    setCurrentUser();
                }}
            >
                {currentUser ? (
                    <form onSubmit={userUpdateForm.handleSubmit}>
                        <div className="s__row">
                            <div className="s__col c--12">
                                <InputWrapper
                                    label="Name"
                                    name="name"
                                    errors={userUpdateForm.errors}
                                >
                                    <InputText
                                        name="name"
                                        value={userUpdateForm.state.name}
                                        onBlur={userUpdateForm.handleBlur}
                                        onChange={userUpdateForm.handleChange}
                                    />
                                </InputWrapper>
                            </div>
                        </div>
                        <div className="s__row">
                            <div className="s__col c--12">
                                <InputWrapper
                                    label="Email"
                                    name="email"
                                    errors={userUpdateForm.errors}
                                >
                                    <InputText
                                        type="email"
                                        name="email"
                                        value={userUpdateForm.state.email}
                                        onBlur={userUpdateForm.handleBlur}
                                        onChange={userUpdateForm.handleChange}
                                    />
                                </InputWrapper>
                            </div>
                        </div>
                        <div className="flex justify-end mt-6">
                            <Button
                                type="submit"
                                label="Update"
                                loading={userForm.isSubmitting}
                                disabled={userForm.isSubmitting}
                            />
                        </div>
                    </form>
                ) : (
                    <form onSubmit={userForm.handleSubmit}>
                        <div className="s__row">
                            <div className="s__col c--12">
                                <InputWrapper
                                    label="Name"
                                    name="name"
                                    errors={userForm.errors}
                                >
                                    <InputText
                                        name="name"
                                        value={userForm.state.name}
                                        onBlur={userForm.handleBlur}
                                        onChange={userForm.handleChange}
                                    />
                                </InputWrapper>
                            </div>
                        </div>
                        <div className="s__row">
                            <div className="s__col c--12">
                                <InputWrapper
                                    label="Email"
                                    name="email"
                                    errors={userForm.errors}
                                >
                                    <InputText
                                        type="email"
                                        name="email"
                                        value={userForm.state.email}
                                        onBlur={userForm.handleBlur}
                                        onChange={userForm.handleChange}
                                    />
                                </InputWrapper>
                            </div>
                        </div>
                        <div className="s__row">
                            <div className="s__col c--12">
                                <InputWrapper
                                    label="Password"
                                    name="password"
                                    errors={userForm.errors}
                                >
                                    <InputText
                                        type="password"
                                        name="password"
                                        value={userForm.state.password}
                                        onBlur={userForm.handleBlur}
                                        onChange={userForm.handleChange}
                                    />
                                </InputWrapper>
                            </div>
                        </div>

                        <div className="flex justify-end mt-6">
                            <Button
                                type="submit"
                                label="Add"
                                loading={userForm.isSubmitting}
                                disabled={userForm.isSubmitting}
                            />
                        </div>
                    </form>
                )}
            </Dialog>
        </>
    );
};

export default Users;
