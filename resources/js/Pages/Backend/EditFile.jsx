import {Dashboard} from "../../components/layouts/dashboard";
import React, { useState } from "react";
import {usePage,useForm} from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
const EditFile = () => {

    const { file } = usePage().props;
    const { data, setData, post, errors, progress, processing} = useForm({
        title: file.title,
        description: file.description,
        pdf: '',
        image: '',
        published_date: file.published_date,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('file.update', file.id));
    };

return(

    <Dashboard page="Edit Publication">
        <div className="card flex justify-content-center ml-2">
                <p className="m-0">
                    <div className="max-w-sm mx-auto px-4 py-8">
                        <h1 className="text-3xl text-slate-800 font-bold mb-6">Edit Publication </h1>
                        {/* Form */}
                        <form onSubmit={submit}>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium mb-1" htmlFor="title">File Title <span className="text-rose-500">*</span></label>
                                    <input id="email" className="form-input w-full" type="text"  value={data.title}
                                           onChange={(e) => setData('title', e.target.value)}  autoComplete="title" />
                                    {/*{errors.email && <div className="text-rose-500">{errors.email}</div>}*/}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1" htmlFor="description">File Description <span className="text-rose-500">*</span></label>
                                    <input id="name" className="form-input w-full" type="text"   value={data.description}
                                           onChange={(e) => setData('description', e.target.value)} />
                                    {/*{errors.username && <div className="text-rose-500">{errors.username}</div>}*/}
                                </div>
                                <div>
                                    <label
                                        className="block mb-1 text-sm font-medium"
                                        htmlFor="Date Published"
                                    >
                                        Published On {" "}
                                        <span className="text-rose-500">
                                                *
                                            </span>
                                    </label>
                                    <input
                                        id="published_date"
                                        className="w-full form-input"
                                        type="text"
                                        placeholder="Date: YY-M-D"
                                        value={data.published_date}
                                        onChange={(e) =>
                                            setData(
                                                "published_date",
                                                e.target.value
                                            )
                                        }
                                    />

                                </div>
                                <div>
                                    <label
                                        className="block mb-1 text-sm font-medium"
                                        htmlFor="image"
                                    >
                                        Image {" "}
                                        <span className="text-rose-500">
                                                *
                                            </span>
                                    </label>
                                    <input
                                        type="file"
                                        onChange={(e) =>
                                            setData(
                                                "image",
                                                e.target.files[0]
                                            )
                                        }
                                    />
                                </div>
                                <div>
                                    <label
                                        className="block mb-1 text-sm font-medium"
                                        htmlFor="pdf"
                                    >
                                        PDF File {" "}
                                        <span className="text-rose-500">
                                                *
                                            </span>
                                    </label>
                                    <input
                                        type="file"
                                        onChange={(e) =>
                                            setData(
                                                "pdf",
                                                e.target.files[0]
                                            )
                                        }
                                    />
                                </div>

                            </div>

                            {progress && (
                                <progress
                                    value={progress.percentage}
                                    max="100"
                                >
                                    {progress.percentage}%
                                </progress>
                            )}
                            <div className="flex items-center justify-between mt-6">
                                <button className="btn bg-indigo-500 hover:bg-indigo-600
                                text-white ml-3 whitespace-nowrap" type="submit"
                                        disabled={processing}
                                >
                                    Update
                                </button>
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



