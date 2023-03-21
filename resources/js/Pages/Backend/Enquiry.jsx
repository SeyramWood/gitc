import { useForm } from "@inertiajs/inertia-react";
import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Dialog } from "primereact/dialog";
import React, { useState } from "react";
import { Dashboard } from "../../components/layouts/dashboard";

const Enquiry = ({contacts}) => {
    return (
        <Dashboard page="Enquiries">
            <div className="card ">
                <div className="card-body px-0 pt-0 pb-2">
                    <div className="table-responsive-xxl p-0" width="100%">
                        <table className=" table align-items-center justify-content-center mb-0 bg-slate-100" width="100%">
                            <thead className="bg-slate-100">
                            <tr className="" >

                                <th className="text-uppercase text-white text-xl font-weight-bolder opacity-7 ps-2 text-left">Name</th>
                                <th className="text-uppercase  text-white text-xl font-weight-bolder opacity-7 ps-2 text-left">Phone</th>
                                <th className="text-uppercase text-white text-xl font-weight-bolder opacity-7 ps-2 text-left">Email</th>
                                <th className="text-uppercase text-white text-xl font-weight-bolder opacity-7 ps-2 text-left">Industry</th>
                                <th className="text-uppercase text-white text-xl font-weight-bolder opacity-7 ps-2 text-left">Subject</th>
                                <th className="text-uppercase text-white text-xl font-weight-bolder opacity-7 ps-2 text-left">message</th>
                                <th className="text-uppercase text-white text-xl font-weight-bolder text-center opacity-7 ps-2">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {contacts.map((contact) => (
                                <tr key={contact.id}>
                                    <td className='text-left'>
                                        <p className="text-lg capitalize text-white font-weight-bold mb-0">
                                            {contact.first_name + contact.last_name} </p>
                                    </td>
                                    <td className='text-left'>
                                        <p className="text-lg capitalize text-white font-weight-bold mb-0">{contact.phone}</p>
                                    </td>
                                    <td className='text-left'>
                                        <p className="text-lg capitalize text-white font-weight-bold mb-0">{contact.email}</p>
                                    </td>
                                    <td className='text-left'>
                                        <p className="text-lg capitalize text-white font-weight-bold mb-0">{contact.industry}</p>
                                    </td>
                                    <td className='text-left'>
                                        <p className="text-lg capitalize text-white font-weight-bold mb-0">{contact.subject}</p>
                                    </td>
                                    <td className='text-left'>
                                        <p className="text-lg capitalize text-white font-weight-bold mb-0">{contact.message}</p>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Dashboard>
    );
};
export default Enquiry;
