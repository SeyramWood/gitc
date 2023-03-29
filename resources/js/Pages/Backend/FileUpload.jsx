import {Link, useForm} from "@inertiajs/inertia-react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import React, { useState } from "react";
import { Dashboard } from "../../components/layouts/dashboard";

const FileUpload = ( props ) => {
    const {data: files} = props.files;
    const [visible, setVisible] = useState(false);
    const { data, setData, post, progress, processing, errors } = useForm({
        title: "",
        pdf: "",
        image: "",
        description: "",
        published_date: "",
    });
    function submit(e) {
        e.preventDefault();
        post("/files");
    }

    const header = (
        <div className="flex flex-wrap gap-2 align-items-center justify-content-between">
            <span className="text-xl font-bold text-900">PDF Files</span>
            <Button icon="pi pi-refresh" rounded raised />
        </div>
    );
    const footer = `In total there are ${files ? files.length : 0} PDF Files.`;

    return (
        <Dashboard page="FileUploads">
            <Button
                className="m-3"
                label="Add Publications"
                icon="pi pi-external-link"
                onClick={() => setVisible(true)}
            />

            <div className="card ">
                <div className="card-body px-0 pt-0 pb-2">
                    <div className="table-responsive-xxl p-0" width="100%">
                        <table className=" table align-items-center justify-content-center mb-0 bg-slate-100" width="100%">
                            <thead className="bg-slate-100">
                            <tr className="" >

                                <th className="text-uppercase text-white text-xl font-weight-bolder opacity-7 ps-2 text-left">Image</th>
                                <th className="text-uppercase text-white text-xl font-weight-bolder opacity-7 ps-2 text-left">File</th>
                                <th className="text-uppercase  text-white text-xl font-weight-bolder opacity-7 ps-2 text-left">Title</th>
                                <th className="text-uppercase  text-white text-xl font-weight-bolder opacity-7 ps-2 text-left">Published At</th>
                                <th className="text-uppercase text-white text-xl font-weight-bolder opacity-7 ps-2 text-left">Description</th>
                                <th className="text-uppercase text-white text-xl font-weight-bolder text-center opacity-7 ps-2">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {files.map((file, index) => (
                                <tr key={file.id}>
                                    <td className='text-left'>

                                                <img
                                                    src={window.location.origin + '/uploads/' + file.image }
                                                    alt="Objectivity" style={{width: "10rem"}}

                                                />

                                    </td>
                                    <td className='text-left'>

                                                <embed
                                                    src={window.location.origin + '/uploads/' + file.pdf }
                                                    alt="Objectivity" style={{width: "10rem"}}

                                                />

                                    </td>
                                    <td className='text-left'>
                                        <p className="text-lg capitalize text-white font-weight-bold mb-0">{file.title}</p>
                                    </td>
                                    <td className='text-left'>
                                        <p className="text-lg capitalize text-white font-weight-bold mb-0">{file.published_date}</p>
                                    </td>
                                    <td className='text-left'>
                                        <p className="text-lg capitalize text-white font-weight-bold mb-0">{file.description}</p>
                                    </td>

                                    <td className="align-middle text-center" width="10%">
                                        <div>
                                            <Link   href={`/view/files/${file.id}`}  className="text-green-50 capitalize mr-2 p-3  text-blue-500 cursor-pointer text-blue-300">
                                                View
                                            </Link >
                                            <Link   href={`/edit/files/${file.id}`}  className="text-slate-50 capitalize mr-2 p-3  text-blue-500 cursor-pointer text-blue-300">
                                                edit
                                            </Link >
                                            <Link  href={`/delete/files/${file.id}`}  className="text-red-600 capitalize mr-2 p-3   text-blue-500 cursor-pointer text-red-300">
                                                <span className="capitalize"></span>  Delete
                                            </Link>
                                        </div>


                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="flex ml-2 card justify-content-center">
                <Dialog
                    header="Add Publications"
                    visible={visible}
                    maximizable
                    style={{ width: "50%" }}
                    onHide={() => setVisible(false)}
                >
                    <p className="m-0">
                        <div className="max-w-sm px-4 py-8 mx-auto">
                            <h1 className="mb-6 text-3xl font-bold text-slate-800">
                                Create user Account{" "}
                            </h1>
                            {/* Form */}
                            <form
                                onSubmit={submit}
                                enctype="multipart/form-data"
                            >
                                <div className="space-y-4">
                                    <div>
                                        <label
                                            className="block mb-1 text-sm font-medium"
                                            htmlFor="title"
                                        >
                                             Title{" "}
                                            <span className="text-rose-500">
                                                *
                                            </span>
                                        </label>
                                        <input
                                            id="text"
                                            className="w-full form-input"
                                            type="text"
                                            value={data.title}
                                            onChange={(e) =>
                                                setData("title", e.target.value)
                                            }
                                        />
                                        {errors.title && (
                                            <div className="text-rose-500">
                                                {errors.title}
                                            </div>
                                        )}
                                    </div>
                                    <div>
                                        <label
                                            className="block mb-1 text-sm font-medium"
                                            htmlFor="description"
                                        >
                                            Description{" "}
                                            <span className="text-rose-500">
                                                *
                                            </span>
                                        </label>
                                        <input
                                            id="description"
                                            className="w-full form-input"
                                            type="text"
                                            value={data.description}
                                            onChange={(e) =>
                                                setData(
                                                    "description",
                                                    e.target.value
                                                )
                                            }
                                        />

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
                                            id="description"
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
                                    <button
                                        className="ml-3 text-white bg-indigo-500 btn hover:bg-indigo-600 whitespace-nowrap"
                                        type="submit"
                                        disabled={processing}
                                    >
                                        Publish
                                    </button>
                                </div>
                            </form>
                            {/* Footer */}
                        </div>
                    </p>
                </Dialog>
            </div>
        </Dashboard>
    );
};
export default FileUpload;
