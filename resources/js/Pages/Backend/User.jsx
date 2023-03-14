import React,  {useState, useEffect}from "react";
import {Link, useForm} from "@inertiajs/inertia-react";
import {Dashboard} from "../../components/layouts/dashboard";
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {Button} from 'primereact/button';
import { Dialog } from 'primereact/dialog';


const User = ({ users })=> {

    const { data, setData, post, processing, errors } = useForm({
        username: '',
        password: '',
        email: '',
        contact: '',
    })

    function submit(e) {
        e.preventDefault()
        post('/users')
    }

      const [visible, setVisible] = useState(false);


        const header = (
            <div className="flex flex-wrap align-items-center justify-content-between gap-2">
                <span className="text-xl text-900 font-bold">Users</span>
                <Button icon="pi pi-refresh" rounded raised/>
            </div>
        );
        const footer = `In total there are ${users ? users.length : 0} users.`;

        return (
            <Dashboard page="Users">
                <Button className="m-3"  label="Add User" icon="pi pi-external-link" onClick={() => setVisible(true)} />

                <div className="card">
                    <DataTable  value={users} header={header} footer={footer} tableStyle={{ minWidth: '100%' }}  >
                    <Column field="username" header="User name"  ></Column>
                    <Column field="email"  header="User email"></Column>
                    <Column field="contact"   header="User contact"></Column>
                    <Column field="role"  header="User role"></Column>
                    <Column   header="Action"></Column>
                </DataTable>

                </div>
                <div className="card flex justify-content-center ml-2">

                    <Dialog header="Add User" visible={visible} maximizable style={{ width: '50%' }} onHide={() => setVisible(false)}>
                        <p className="m-0">
                            <div className="max-w-sm mx-auto px-4 py-8">
                                <h1 className="text-3xl text-slate-800 font-bold mb-6">Create user  Account </h1>
                                {/* Form */}
                                <form onSubmit={submit}>
                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-medium mb-1" htmlFor="email">Email Address <span className="text-rose-500">*</span></label>
                                            <input id="email" className="form-input w-full" type="email" value={data.email} onChange={e => setData('email', e.target.value)} autoComplete="on" />
                                            {errors.email && <div className="text-rose-500">{errors.email}</div>}
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-1" htmlFor="name">User Name <span className="text-rose-500">*</span></label>
                                            <input id="name" className="form-input w-full" type="text"  value={data.username} onChange={e => setData('username', e.target.value)} autoComplete="on" />
                                            {errors.username && <div className="text-rose-500">{errors.username}</div>}
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-1" htmlFor="role"> Role <span className="text-rose-500">*</span></label>
                                            <select id="role" className="form-select w-full" value={data.role} onChange={e => setData('role', e.target.value)} >

                                                <option>Designer</option>
                                                <option>Developer</option>
                                                <option>Accountant</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-1" htmlFor="password">Password</label>
                                            <input id="password" className="form-input w-full" type="password" value={data.password} onChange={e => setData('password', e.target.value)} autoComplete="on" />
                                            {errors.password && <div>{errors.password}</div>}
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-1" htmlFor="number">Contact</label>
                                            <input id="contact" className="form-input w-full" type="number" value={data.contact} onChange={e => setData('contact', e.target.value)} autoComplete="on" />
                                            {errors.contact && <div>{errors.contact}</div>}
                                        </div>

                                    </div>
                                    <div className="flex items-center justify-between mt-6">
                                        <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white ml-3 whitespace-nowrap" type="submit" disabled={processing}>Sign Up</button>
                                    </div>
                                </form>
                                {/* Footer */}

                            </div>
                        </p>
                    </Dialog>
                </div>
            </Dashboard>
        );

}
export default User;