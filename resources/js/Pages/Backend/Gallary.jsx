import React,  {useState, useEffect}from "react";
import {Link, useForm} from "@inertiajs/inertia-react";
import {Dashboard} from "../../components/layouts/dashboard";
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {Button} from 'primereact/button';
import { Dialog } from 'primereact/dialog';


const Gallary = (props)=> {
    const {data: gallaries, link, meta} = props.gallaries;
    const { data, setData, post, processing, errors } = useForm({
        images: '',
        album_id: '',
    })

    function submit(e) {
        e.preventDefault()
        post('/gallaries')
    }

      const [visible, setVisible] = useState(false);


        const header = (
            <div className="flex flex-wrap align-items-center justify-content-between gap-2">
                <span className="text-xl text-900 font-bold">Gallaries</span>
                <Button icon="pi pi-refresh" rounded raised/>
            </div>
        );
        const footer = `In total there are ${gallaries ? gallaries.length : 0} gallaries.`;

        return (
            <Dashboard page="Gallaries">
                <Button className="m-3"  label="Add To Gallary" icon="pi pi-external-link" onClick={() => setVisible(true)} />
                <div>
                    {gallaries.map((gallary, index) => (
                        <div className="card p-3 flex justify-center ] " style={{width: "20rem",float: "left" }}>

                            <div key={gallary.id} className="">
                                <div >
                                    <div className="" style={{ borderRadius: "100%"}}>
                                        <img
                                            src={window.location.origin + '/uploads/' + gallary.images }
                                            alt="Objectivity" style={{width: "25rem",  height: "100px"}}

                                        />
                                        <span>{gallary.albums}</span>
                                    </div>
                                </div>

                            </div>




                        </div>
                    ))}
                </div>

                <div className="card flex justify-content-center ml-2">

                    <Dialog header="Add To Gallary" visible={visible} maximizable style={{ width: '50%' }} onHide={() => setVisible(false)}>
                        <p className="m-0">
                            <div className="max-w-sm mx-auto px-4 py-8">
                                <h1 className="text-3xl text-slate-800 font-bold mb-6">Add New Image </h1>
                                {/* Form */}
                                <form onSubmit={submit}>
                                    <div className="space-y-4">
                                        <div>

                                            <input type="file"  onChange={e => setData('images', e.target.files[0])} multiple={true}/>

                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-1" htmlFor="album_idd"> Album <span className="text-rose-500">*</span></label>
                                            <select id="album_id" className="form-select w-full" value={data.album_id} onChange={e => setData('album', e.target.value)} >

                                                <option>Designer</option>
                                                <option>Developer</option>
                                                <option>Accountant</option>
                                            </select>
                                        </div>


                                    </div>
                                    <div className="flex items-center justify-between mt-6">
                                        <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white ml-3 whitespace-nowrap" type="submit" disabled={processing}>Upload</button>
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
export default Gallary;