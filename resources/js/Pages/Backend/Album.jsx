import React,  {useState, useEffect}from "react";
import {Link, useForm} from "@inertiajs/inertia-react";
import {Dashboard} from "../../components/layouts/dashboard";

import {Button} from 'primereact/button';
import { Dialog } from 'primereact/dialog';


const Album = (props)=> {
    const {data: albums} = props.albums;
    const { data, setData, post,progress, processing, errors } = useForm({
        name: '',
        description: '',
        images: '',
    })

    function submit(e) {
        e.preventDefault()
        post('/albums')
    }

      const [visible, setVisible] = useState(false);


    return (
            <Dashboard page="Albums">
                <Button className="m-3"  label="Add Album" icon="pi pi-external-link" onClick={() => setVisible(true)} />

                <div className="card">
                    <div className="card">
                        <div className="card-body px-0 pt-0 pb-2">
                            <div className="table-responsive-xxl p-0" width="100%">
                                <table className=" table align-items-center justify-content-center mb-0 bg-slate-100" width="100%">
                                    <thead className="bg-slate-100">
                                    <tr className="" >
                                        <th className="text-uppercase  text-white text-xl font-weight-bolder opacity-7 ps-2 text-left">Name</th>
                                        <th className="text-uppercase text-white text-xl font-weight-bolder opacity-7 ps-2 text-left">Description</th>
                                        <th className="text-uppercase text-white text-xl font-weight-bolder text-center opacity-7 ps-2">Actions</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {albums.map((album, index) => (
                                        <tr key={album.id}>
                                            <td className='text-left'>
                                                <p className="text-lg capitalize text-white font-weight-bold mb-0">{album.name}</p>
                                            </td>
                                            <td className='text-left'>
                                                <p className="text-lg capitalize text-white font-weight-bold mb-0">{album.description}</p>
                                            </td>
                                            <td className="align-middle text-center" width="10%">
                                                <div>
                                                    <Link   href={`/album/${album.id}`}  className="text-green-50 capitalize mr-2 p-3  text-blue-500 cursor-pointer text-blue-300">
                                                        View
                                                    </Link >
                                                    <Link   href={`/edit/album/${album.id}`}  className="text-slate-50 capitalize mr-2 p-3  text-blue-500 cursor-pointer text-blue-300">
                                                        edit
                                                    </Link >
                                                    <Link  href={`/delete/album/${album.id}`}  className="text-red-600 capitalize mr-2 p-3   text-blue-500 cursor-pointer text-red-300">
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

                </div>
                <div className="card flex justify-content-center ml-2">

                    <Dialog header="Create Album" visible={visible} maximizable style={{ width: '50%' }} onHide={() => setVisible(false)}>
                        <p className="m-0">
                            <div className="max-w-sm mx-auto px-4 py-8">
                                <h1 className="text-3xl text-slate-800 font-bold mb-6">Create Album </h1>
                                {/* Form */}
                                <form onSubmit={submit}>
                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-medium mb-1" htmlFor="name">Album Name <span className="text-rose-500">*</span></label>
                                            <input id="name" className="form-input w-full" type="text" value={data.name} onChange={e => setData('name', e.target.value)} autoComplete="on" />
                                            {errors.name && <div className="text-rose-500">{errors.name}</div>}
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-1" htmlFor="name">Album Description <span className="text-rose-500">*</span></label>
                                            <input id="description" className="form-input w-full" type="text"  value={data.description} onChange={e => setData('description', e.target.value)}  />
                                            {errors.description && <div className="text-rose-500">{errors.description}</div>}
                                        </div>
                                        <div>
                                            <input type="file"  onChange={e => setData('images', e.target.files[0])} multiple/>
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
                                            Publish</button>
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
export default Album;