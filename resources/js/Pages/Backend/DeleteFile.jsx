import {Dashboard} from "../../components/layouts/dashboard";
import React, { useState } from "react";
import {usePage,useForm} from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
const DeleteFile = () => {

    const { file } = usePage().props;
    const { data, setData,delete: destroy} = useForm({
        title: file.title,
        description: file.description,
        avatar: file.avatar,
    });

    const submit = (e) => {
        e.preventDefault();

        destroy(route('file.delete', file.id));
    };

return(

    <Dashboard page="Edit PDF File">
        <div className="card flex justify-content-center ml-2">
                <p className="m-0">
                    <div className="max-w-sm mx-auto px-4 py-8">
                        <h1 className="text-3xl text-slate-800 font-bold mb-6">Delete PDF File </h1>
                        {/* Form */}
                        <div className="" style={{ borderRadius: "100%"}}>
                            <embed
                                src={window.location.origin + '/uploads/' + file.avatar }
                                alt="PDF file here" style={{width: "100%",  height: "800px"}}

                            />
                        </div>
                        <form onSubmit={submit}>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium mb-1" htmlFor="title">File Title <span className="text-rose-500">*</span></label>
                                    <input id="email" className="form-input w-full" type="text"  value={data.title}
                                           handleChange={(e) => setData('title', e.target.value)}   />
                                    {/*{errors.email && <div className="text-rose-500">{errors.email}</div>}*/}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1" htmlFor="description">File Description <span className="text-rose-500">*</span></label>
                                    <input id="name" className="form-input w-full" type="text"   value={data.description}
                                           handleChange={(e) => setData('description', e.target.value)} />
                                    {/*{errors.username && <div className="text-rose-500">{errors.username}</div>}*/}
                                </div>
                                <div>
                                    <input
                                        type="file"
                                        // value={data.avatar}
                                        handleChange={(e) => setData('avatar', e.target.files[0])}
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
 export default DeleteFile;



