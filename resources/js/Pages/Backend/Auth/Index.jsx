import { Inertia } from "@inertiajs/inertia";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputText";
import React from "react";

import { InputWrapper } from "../../../components/common";
import useFormValidation from "../../../components/form/useFormValidation";

import "../../../../css/dashboard/app.scss";

const Login = () => {
    const userForm = useFormValidation(
        {
            email: "",
            password: "",
        },
        {
            email: "required|email",
            password: "required|string|min:8",
        },
        submitUserForm
    );

    function submitUserForm() {
        Inertia.post("/auth/login", userForm.state, {
            onError: (errors) => {
                userForm.updateIsSubmitting(false);
                userForm.setServerErrors({
                    email: errors.email,
                    password: "",
                });
            },
            onSuccess: (page) => {
                // console.log(page);
            },
        });
    }

    return (
        <main className="flex items-center justify-center w-full h-screen bg-zinc-600">
            <div className="w-[40%]">
                <Card>
                    <div className="my-5 ">
                        <div className="flex flex-col items-center justify-start ">
                            <img
                                src="/images/logo.png"
                                alt=""
                                className=" object-center w-[8rem] h-[8rem]"
                            />
                            <h5 className="mt-1 leading-4 text-start">
                                WELCOME BACK
                            </h5>
                        </div>
                        <form onSubmit={userForm.handleSubmit} className="mt-3">
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

                            <div className="flex justify-start">
                                <Button
                                    type="submit"
                                    label="Login"
                                    loading={userForm.isSubmitting}
                                    disabled={userForm.isSubmitting}
                                />
                            </div>
                        </form>
                    </div>
                </Card>
            </div>
        </main>
    );
};

export default Login;
