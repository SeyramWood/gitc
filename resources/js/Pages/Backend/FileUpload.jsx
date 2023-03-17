import { useForm } from "@inertiajs/inertia-react";
import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Dialog } from "primereact/dialog";
import React, { useState } from "react";
import { Dashboard } from "../../components/layouts/dashboard";

const FileUpload = ( props ) => {
    const {data: files, link, meta} = props.files;
    const [visible, setVisible] = useState(false);
    const { data, setData, post, progress, processing, errors } = useForm({
        title: "",
        avatar: "",
        description: "",
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
                label="Add PDF File"
                icon="pi pi-external-link"
                onClick={() => setVisible(true)}
            />

            <div className="card ">
                <div className="card-body px-0 pt-0 pb-2">
                    <div className="table-responsive-xxl p-0" width="100%">
                        <table className=" table align-items-center justify-content-center mb-0 bg-slate-100" width="100%">
                            <thead className="bg-slate-100">
                            <tr className="" >

                                <th className="text-uppercase text-white text-xl font-weight-bolder opacity-7 ps-2 text-left">File</th>
                                <th className="text-uppercase  text-white text-xl font-weight-bolder opacity-7 ps-2 text-left">Name</th>
                                <th className="text-uppercase text-white text-xl font-weight-bolder opacity-7 ps-2 text-left">Description</th>
                                <th className="text-uppercase text-white text-xl font-weight-bolder text-center opacity-7 ps-2">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {files.map((file, index) => (
                                <tr key={file.id}>
                                    <td className='text-left'>

                                                <embed
                                                    src={window.location.origin + '/uploads/' + file.file }
                                                    alt="Objectivity" style={{width: "25rem"}}

                                                />

                                    </td>
                                    <td className='text-left'>
                                        <p className="text-lg capitalize text-white font-weight-bold mb-0">{file.title}</p>
                                    </td>
                                    <td className='text-left'>
                                        <p className="text-lg capitalize text-white font-weight-bold mb-0">{file.description}</p>
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
                    header="Add PDF File"
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
                                            File Title{" "}
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
                                            File Description{" "}
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
                                        {/*{errors.description && <div className="text-rose-500">{errors.description}</div>}*/}
                                    </div>
                                    <div>
                                        <input
                                            type="file"
                                            onChange={(e) =>
                                                setData(
                                                    "avatar",
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
                                        Upload File
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
