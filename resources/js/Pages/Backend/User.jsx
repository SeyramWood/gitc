import React,  {useState, useEffect}from "react";
import {Link, useForm} from "@inertiajs/inertia-react";
import {Dashboard} from "../../components/layouts/dashboard";
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {Button} from 'primereact/button';
import { Dialog } from 'primereact/dialog';



const User = ({users})=> {

    const { data, setData,reset, get, post, processing, errors } = useForm({
        username: '',
        password: '',
        email: '',
        contact: '',
    })

    function submit(e) {
        e.preventDefault()
        post('/users')
        onSuccess: () => {
            reset()
        }
    }




      const [visible, setAddVisible] = useState(false);



        return (
            <Dashboard page="Users">
                <Button className="m-3"  label="Add User" icon="pi pi-external-link" onClick={() => setAddVisible(true)} />

                <div className="card">
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
                                {users.map((user, index) => (
                                    <tr key={user.id}>
                                        <td className='text-left'>
                                            <p className="text-lg capitalize text-white font-weight-bold mb-0">{user.username}</p>
                                        </td>
                                        <td className='text-left'>
                                            <p className="text-lg capitalize text-white font-weight-bold mb-0">{user.email}</p>
                                        </td>
                                        <td className='text-left'>
                                            <p className="text-lg capitalize text-white font-weight-bold mb-0">{user.contact}</p>
                                        </td>
                                        <td className="align-middle text-center" width="10%">
                                                <div>
                                                        <Link   href={`/view/users/${user.id}`}  className="text-green-50 capitalize mr-2 p-3  text-blue-500 cursor-pointer text-blue-300">
                                                            View
                                                        </Link >
                                                    <Link   href={`/edit/users/${user.id}`}  className="text-slate-50 capitalize mr-2 p-3  text-blue-500 cursor-pointer text-blue-300">
                                                            edit
                                                        </Link >
                                                    <Link  href={`/delete/users/${user.id}`}  className="text-red-600 capitalize mr-2 p-3   text-blue-500 cursor-pointer text-red-300">
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
                <div className="card flex justify-content-center ml-2">

                    <Dialog header="Add User" visible={visible} maximizable style={{ width: '50%' }} onHide={() => setAddVisible(false)}>
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