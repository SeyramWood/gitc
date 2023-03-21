import {Dashboard} from "../../components/layouts/dashboard";
import React, { useState } from "react";
import {useForm, usePage} from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
const EditFile = () => {

    const { id, title, description, avatar } = usePage().props
    const [values, setValues] = useState({id,title, description, avatar});
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
        data.append("title", values.title);
        data.append("description", values.description);
        data.append("avatar", values.avatar);
        data.append("_method", "PATCH");
        Inertia.post('/files/'+values.id, data);
    }

return(

    <Dashboard page="Edit PDF File">
        <div className="card flex justify-content-center ml-2">
                <p className="m-0">
                    <div className="max-w-sm mx-auto px-4 py-8">
                        <h1 className="text-3xl text-slate-800 font-bold mb-6">Edit PDF File  Account </h1>
                        {/* Form */}
                        <form onSubmit={handleSubmit}>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium mb-1" htmlFor="title">File Title <span className="text-rose-500">*</span></label>
                                    <input id="email" className="form-input w-full" type="text" value={values.title} onChange={handleChange}  />
                                    {/*{errors.email && <div className="text-rose-500">{errors.email}</div>}*/}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1" htmlFor="description">File Description <span className="text-rose-500">*</span></label>
                                    <input id="name" className="form-input w-full" type="text"  value={values.description} onChange={handleChange}  />
                                    {/*{errors.username && <div className="text-rose-500">{errors.username}</div>}*/}
                                </div>
                                <div>
                                    <input
                                        type="file"
                                        onChange={handleChange}
                                    />
                                </div>

                            </div>
                            <div className="flex items-center justify-between mt-6">
                                <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white ml-3 whitespace-nowrap" type="submit" >Sign Up</button>
                            </div>
                        </form>
                        {/* Footer */}

                    </div>
                </p>

        </div>

    </Dashboard>
)
 }
 export default EditFile;



