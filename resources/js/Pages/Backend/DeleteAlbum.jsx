import {Dashboard} from "../../components/layouts/dashboard";
import React, { useState } from "react";
import {usePage, useForm, Link} from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import {Button} from "primereact/button";
import {Dialog} from "primereact/dialog";
const DeleteAlbum = () => {

    const { album } = usePage().props;
    const { data,  delete: destroy, progress, processing} = useForm({
        name: album.name,
        description: album.description,
        images: '',
    });

    const submit = (e) => {
        e.preventDefault();
        destroy(route('album.delete', album.id));
    };



    return (
        <Dashboard page="Delete Album">


            <div className="card flex justify-content-center ml-2">


                    <p className="m-0">
                        <div className="max-w-sm mx-auto px-4 py-8">
                            <h1 className="text-3xl text-slate-800 font-bold mb-6">Delete Album </h1>
                            {/* Form */}
                            <form onSubmit={submit}>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium mb-1" htmlFor="name">Album Name <span className="text-rose-500">*</span></label>
                                        <input id="name" className="form-input w-full" type="text" value={data.name} readOnly />

                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1" htmlFor="name">Album Description <span className="text-rose-500">*</span></label>
                                        <input id="description" className="form-input w-full" type="text"  value={data.description} readOnly />

                                    </div>
                                </div>

                                {progress && (
                                    <progress value={progress.percentage} max="100">
                                        {progress.percentage}%
                                    </progress>
                                )}
                                <div className="flex items-center justify-between mt-6">
                                    <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white ml-3
                                     whitespace-nowrap" type="submit"
                                            disabled={processing}
                                    >
                                        Delete</button>
                                </div>
                            </form>
                            {/* Footer */}

                        </div>
                    </p>
            </div>
        </Dashboard>
    );
 }
 export default DeleteAlbum;



