import React,  {useState, useEffect}from "react";
import {Link, useForm} from "@inertiajs/inertia-react";
import {Dashboard} from "../../components/layouts/dashboard";
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {Button} from 'primereact/button';
import { Dialog } from 'primereact/dialog';


const Album = ({ albums })=> {

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


        const header = (
            <div className="flex flex-wrap align-items-center justify-content-between gap-2">
                <span className="text-xl text-900 font-bold">Albums</span>
                <Button icon="pi pi-refresh" rounded raised/>
            </div>
        );
        const footer = `In total there are ${albums ? albums.length : 0} albums.`;

        return (
            <Dashboard page="Albums">
                <Button className="m-3"  label="Add Album" icon="pi pi-external-link" onClick={() => setVisible(true)} />

                <div className="card">
                    <DataTable value={albums.data}   header={header} footer={footer} tableStyle={{ minWidth: '100%' }}  >
                    <Column field="name" header="Album name"  ></Column>
                    <Column field="description"  header="Description"></Column>
                    <Column   header="Action"></Column>
                </DataTable>

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
export default Album;