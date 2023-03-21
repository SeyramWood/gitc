import {Dashboard} from "../../components/layouts/dashboard";
import React, { useState } from "react";
import {usePage} from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
const ViewUser = () => {

    const { id, username, contact, email,image,last_name,first_name } = usePage().props
    const [values] = useState({id, username, contact, email, image, last_name, first_name });
    // console.log(values);


return(

    <Dashboard page="View User Information">
        <div className="card flex justify-content-center ml-2">
                <p className="m-0">
                    <div className="max-w-lg mx-auto px-4 py-8">
                        <h1 className="text-3xl text-slate-800 font-bold mb-6">  User Details Information </h1>
                        {/* Form */}
                        <form >
                            <div className="space-y-4">
                                <div>
                                    <div className="" style={{ borderRadius: "100%"}}>
                                        <img
                                           src={window.location.origin + '/uploads/' + values.photo }
                                            alt="User Profile Image" style={{width: "25rem",  height: "100px"}}

                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1" htmlFor="email">Email Address <span className="text-rose-500">*</span></label>
                                    <input id="email" className="form-input w-full" type="email" value={values.email}  readOnly />
                                    {/*{errors.email && <div className="text-rose-500">{errors.email}</div>}*/}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1" htmlFor="name">User Name <span className="text-rose-500">*</span></label>
                                    <input id="name" className="form-input w-full" type="text"  value={values.username}  readOnly />
                                    {/*{errors.username && <div className="text-rose-500">{errors.username}</div>}*/}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1" htmlFor="number">Contact</label>
                                    <input id="contact" className="form-input w-full" type="number" value={values.contact} readOnly />
                                    {/*{errors.contact && <div>{errors.contact}</div>}*/}
                                </div>  <div>
                                    <label className="block text-sm font-medium mb-1" htmlFor="number"> Full Name</label>
                                    <input id="contact" className="form-input w-full capitalize" type="text" value={values.first_name+'   '+values.last_name}  readOnly />
                                    {/*{errors.contact && <div>{errors.contact}</div>}*/}
                                </div>

                            </div>

                        </form>
                        {/* Footer */}

                    </div>
                </p>

        </div>

    </Dashboard>
)
 }
 export default ViewUser;



