import {Dashboard} from "../../components/layouts/dashboard";
import React, { useState } from "react";
import {usePage, useForm, Link} from "@inertiajs/inertia-react";
import {array} from "prop-types";
const AddGallary = () => {

    const { album } = usePage().props;
    const { data, setData, post, errors, progress, processing} = useForm({
        images:  array,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('album.gallaries',album.id));
    };

    return (
        <Dashboard page="Edit Albums">


            <div className="card flex justify-content-center ml-2">


                    <p className="m-0">
                        <div className="max-w-sm mx-auto px-4 py-8">
                            <h1 className="text-3xl text-slate-800 font-bold mb-6">Edit Album </h1>
                            <p className="m-0">

                                <span className="capitalize">Name: {album.name} Description: {album.description}</span>
                            </p>
                            <form onSubmit={submit}>
                                <div className="space-y-4">

                                    <div>
                                        <input type="file" onChange={e => setData('images', e.target.files[0])} multiple/>
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
                                        Add
                                    </button>
                                </div>
                            </form>
                            {/* Footer */}

                        </div>
                    </p>
            </div>
        </Dashboard>
    );
 }
 export default AddGallary;



