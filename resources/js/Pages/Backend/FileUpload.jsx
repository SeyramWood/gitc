import React,  {useState, useEffect}from "react";
import {Link, useForm} from "@inertiajs/inertia-react";
import {Dashboard} from "../../components/layouts/dashboard";
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {Button} from 'primereact/button';
import { Dialog } from 'primereact/dialog';


const FileUpload = ({ files })=> {

  const [visible, setVisible] = useState(false);
  const { data, setData, post, progress , processing, errors } = useForm({
    title: '',
    avatar: '',
    description: '',
  })

  function submit(e) {
    e.preventDefault()
    post('/files')
  }


  const header = (
      <div className="flex flex-wrap align-items-center justify-content-between gap-2">
        <span className="text-xl text-900 font-bold">PDF Files</span>
        <Button icon="pi pi-refresh" rounded raised/>
      </div>
  );
  const footer = `In total there are ${files ? files.length : 0} PDF Files.`;

  return (
      <Dashboard page="FileUploads">
        <Button className="m-3"  label="Add PDF File" icon="pi pi-external-link" onClick={() => setVisible(true)} />

        <div className="card">
          <DataTable value={files}  header={header} footer={footer} tableStyle={{ minWidth: '100%' }}  >
            <Column field="title" header="File Title"  ></Column>
            <Column field="description"  header="File Description"></Column>
            {/*<Column field="file"   header="User files"></Column>*/}
            <Column   header="Action"></Column>
          </DataTable>

        </div>
        <div className="card flex justify-content-center ml-2">

          <Dialog header="Add PDF File" visible={visible} maximizable style={{ width: '50%' }} onHide={() => setVisible(false)}>
            <p className="m-0">
              <div className="max-w-sm mx-auto px-4 py-8">
                <h1 className="text-3xl text-slate-800 font-bold mb-6">Create user  Account </h1>
                {/* Form */}
                <form onSubmit={submit} enctype="multipart/form-data">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1" htmlFor="title">File Title <span className="text-rose-500">*</span></label>
                      <input id="text" className="form-input w-full" type="text" value={data.title} onChange={e => setData('title', e.target.value)} />
                      {errors.title && <div className="text-rose-500">{errors.title}</div>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1" htmlFor="description">File Description <span className="text-rose-500">*</span></label>
                      <input id="description" className="form-input w-full" type="text" value={data.description} onChange={e => setData('description', e.target.value)} />
                      {/*{errors.description && <div className="text-rose-500">{errors.description}</div>}*/}
                    </div>
                    <div>

                      <input type="file"  onChange={e => setData('avatar', e.target.files[0])} />

                    </div>

                  </div>
                  {progress && (
                      <progress value={progress.percentage} max="100">
                        {progress.percentage}%
                      </progress>
                  )}
                  <div className="flex items-center justify-between mt-6">
                    <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white ml-3 whitespace-nowrap" type="submit" disabled={processing}>Upload File</button>
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
export default FileUpload;