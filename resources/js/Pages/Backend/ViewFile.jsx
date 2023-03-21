import {Dashboard} from "../../components/layouts/dashboard";
import React, { useState } from "react";
import {usePage} from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
const ViewFile = () => {

    const { id, title,description,file } = usePage().props
    const [values] = useState({id, title,description,file });
    // console.log(values);


return(

    <Dashboard page="View File Information">

        <div className="card flex justify-content-center ml-2">
                <p className="m-0">
                    <div className="max-w-lg mx-auto px-4 py-8">
                        <h1 className="text-3xl text-slate-800 font-bold mb-6">  User Details Information </h1>
                        {/* Form */}
                        <form >
                            <div className="space-y-4">

                                <div>
                                    <label className="block text-sm font-medium mb-1" htmlFor="email">Title <span className="text-rose-500">*</span></label>
                                    <input id="email" className="form-input w-full" type="email" value={values.title}  readOnly />
                                    {/*{errors.email && <div className="text-rose-500">{errors.email}</div>}*/}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1" htmlFor="name">Description <span className="text-rose-500">*</span></label>
                                    <input id="name" className="form-input w-full" type="text"  value={values.description}  readOnly />
                                    {/*{errors.username && <div className="text-rose-500">{errors.username}</div>}*/}
                                </div>


                            </div>
                        </form>
                        {/* Footer */}

                    </div>
                </p>

        </div>
        <div>
            <div className="" style={{ borderRadius: "100%"}}>
                <embed
                    src={window.location.origin + '/uploads/' + values.file }
                    alt="PDF file here" style={{width: "100%",  height: "800px"}}

                />
            </div>
        </div>

    </Dashboard>
)
 }
 export default ViewFile;



