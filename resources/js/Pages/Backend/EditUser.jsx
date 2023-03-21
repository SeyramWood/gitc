import {Dashboard} from "../../components/layouts/dashboard";
import React, { useState } from "react";
import {usePage} from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
const EditUser = () => {

    const { id, username, contact, email } = usePage().props
    const [values, setValues] = useState({id, username, contact, email});
    // console.log(values);
    function handleChange(e) {
        setValues({
            ...values,
            [e.target.id]: e.target.value
        });
    }
    function handleSubmit(e) {
        e.preventDefault();
        const data = new FormData();
        data.append("username", values.username);
        data.append("email", values.email);
        data.append("contact", values.contact);
        data.append("_method", "PATCH");
        Inertia.post('/users/'+values.id, data);
    }

return(

    <Dashboard page="Edit User Account">
        <div className="card flex justify-content-center ml-2">
                <p className="m-0">
                    <div className="max-w-sm mx-auto px-4 py-8">
                        <h1 className="text-3xl text-slate-800 font-bold mb-6">Edit user  Account </h1>
                        {/* Form */}
                        <form onSubmit={handleSubmit}>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium mb-1" htmlFor="email">Email Address <span className="text-rose-500">*</span></label>
                                    <input id="email" className="form-input w-full" type="email" value={values.email} onChange={handleChange} autoComplete="on" />
                                    {/*{errors.email && <div className="text-rose-500">{errors.email}</div>}*/}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1" htmlFor="username">User Name <span className="text-rose-500">*</span></label>
                                    <input id="name" className="form-input w-full" type="text"  value={values.username} onChange={handleChange} autoComplete="on" />
                                    {/*{errors.username && <div className="text-rose-500">{errors.username}</div>}*/}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1" htmlFor="number">Contact</label>
                                    <input id="contact" className="form-input w-full" type="number" value={values.contact} onChange={handleChange} autoComplete="on" />
                                    {/*{errors.contact && <div>{errors.contact}</div>}*/}
                                </div>

                            </div>
                            <div className="flex items-center justify-between mt-6">
                                <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white ml-3 whitespace-nowrap" type="submit" >Update</button>
                            </div>
                        </form>
                        {/* Footer */}

                    </div>
                </p>

        </div>

    </Dashboard>
)
 }
 export default EditUser;



