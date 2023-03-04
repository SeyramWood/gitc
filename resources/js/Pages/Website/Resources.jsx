import { AiOutlineFilePdf, AiOutlineFileWord } from "react-icons/ai";

import { useState } from "react";

import { WebsiteLayout } from "../../components/layouts";
import { Worker } from '@react-pdf-viewer/core';

// Import the main component
import { Viewer, SpecialZoomLevel } from '@react-pdf-viewer/core';

// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import { getFilePlugin } from '@react-pdf-viewer/get-file';

// modal
import { Modal } from 'react-responsive-modal';

// data
import data from './file';
import 'react-responsive-modal/styles.css';

function Resources() {
    // modal
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);


    // pdf viewer
    const getFilePluginInstance = getFilePlugin();
    const { DownloadButton } = getFilePluginInstance;
    return (

        <WebsiteLayout page="service" >
            {data.map((item, index) => (
                <h1 key={index}>
                    {/* {item.nameFirst} */}
                </h1>
            ))}

            <div className="bg-white">
                {/* files */}
                <div className=" sm:mx-24 py-10 mb-10">
                    <div className="h-[15rem]">
                        <div className=" " >
                            <img src="images/homePage/headings/RESOURCES.jpg" className=" object-contain" alt="" />
                            <div className="-translate-y-[13rem]">
                                <div className="text-center mb-7">
                                    <h1 className=" mb-0 pb-0 text-[4rem] ">
                                        Resources
                                    </h1>
                                    <p className="pt-0 mt-0 text-black/75 uppercase">Our Files</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="grid grid-cols-2 p-6 gap-14  pb-20">
                        <div className="drop-shadow-md hover:drop-shadow-xl">
                            <input type="checkbox" id="toggle1" className="toggle hidden" />
                            <label className="title flex font-bold bg-white p-4 cursor-pointer lg:text-2xl text-red-500" htmlFor="toggle1">
                                {/* <AiOutlineFileWord className="text-[4rem] text-center text-blue-700 " /> */}
                                <span className="pt-2">
                                    <p className="font-bold">Legislative Instruments</p>
                                </span>
                            </label>

                            <div className="content bg-white overflow-hidden">
                                <div className="grid grid-cols-1 p-6 gap-5  pb-20">
                                    <div className="px-4 sm:flex ">

                                        <div className="sm:flex py-5">
                                            <AiOutlineFilePdf className="text-[4rem] text-red-700 " />
                                            <div className="pt-2">
                                                <p>Name of File</p>
                                                <button className="button rounded-lg border px-2 cursor-pointer duration-500 ease-in-out hover:scale-110" onClick={() => setOpen1(true)}>
                                                    Read
                                                </button>
                                                <Modal classNames="p-20" open={open1} onClose={() => setOpen1(false)} center>
                                                    <div className="">
                                                        <div
                                                            className="rpv-core__viewer pt-20"
                                                            style={{
                                                                border: '1px solid rgba(0, 0, 0, 0.3)',
                                                                display: 'flex',
                                                                flexDirection: 'column',
                                                                height: '100%',
                                                            }}
                                                        >
                                                            <div
                                                                style={{
                                                                    alignItems: 'center',
                                                                    backgroundColor: '#eeeeee',
                                                                    borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
                                                                    display: 'flex',
                                                                    padding: '4px',
                                                                }}
                                                            >
                                                                <DownloadButton />
                                                            </div>
                                                            <div
                                                                style={{
                                                                    flex: 1,
                                                                    overflow: 'hidden',
                                                                }}
                                                            >
                                                                <div className="w-[40rem] ">
                                                                    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.3.122/build/pdf.worker.min.js">
                                                                        <Viewer fileUrl="images\3.pdf" plugins={[getFilePluginInstance]} defaultScale={SpecialZoomLevel.PageFit} />
                                                                    </Worker>;
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Modal>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="px-4 sm:flex cursor-pointer ">

                                        <div className="sm:flex py-5">
                                            <AiOutlineFilePdf className="text-[4rem] text-red-700 " />
                                            <div className="pt-2">
                                                <p>Name of File</p>
                                                <button className="button rounded-lg border px-2 cursor-pointer duration-500 ease-in-out hover:scale-110" onClick={() => setOpen1(true)}>
                                                    Read
                                                </button>
                                                <Modal classNames="p-20" open={open1} onClose={() => setOpen1(false)} center>
                                                    <div className="">
                                                        <div
                                                            className="rpv-core__viewer pt-20"
                                                            style={{
                                                                border: '1px solid rgba(0, 0, 0, 0.3)',
                                                                display: 'flex',
                                                                flexDirection: 'column',
                                                                height: '100%',
                                                            }}
                                                        >
                                                            <div
                                                                style={{
                                                                    alignItems: 'center',
                                                                    backgroundColor: '#eeeeee',
                                                                    borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
                                                                    display: 'flex',
                                                                    padding: '4px',
                                                                }}
                                                            >
                                                                <DownloadButton />
                                                            </div>
                                                            <div
                                                                style={{
                                                                    flex: 1,
                                                                    overflow: 'hidden',
                                                                }}
                                                            >
                                                                <div className="w-[40rem] ">
                                                                    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.3.122/build/pdf.worker.min.js">
                                                                        <Viewer fileUrl="images\11.pdf" plugins={[getFilePluginInstance]} defaultScale={SpecialZoomLevel.PageFit} />
                                                                    </Worker>;
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Modal>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="drop-shadow-md hover:drop-shadow-xl">
                            <input type="checkbox" id="toggle2" className="toggle hidden" />
                            <label className="title flex font-bold bg-white p-4 cursor-pointer lg:text-2xl text-red-500" htmlFor="toggle2">
                                {/* <AiOutlineFileWord className="text-[4rem] text-center text-blue-700 " /> */}
                                <span className="pt-2">
                                    <p className="font-bold">GITC (Anti-Dumping) Regulations, 2019 (L.I 2380)</p>
                                </span>
                            </label>

                            <div className="content bg-white overflow-hidden">
                                <div className="grid grid-cols-1 p-6 gap-14  pb-20">
                                    <h2 className="text-center">No files</h2>
                                </div>
                            </div>
                        </div>
                        <div className="drop-shadow-md hover:drop-shadow-xl">
                            <input type="checkbox" id="toggle3" className="toggle hidden" />
                            <label className="title flex font-bold bg-white p-4 cursor-pointer lg:text-2xl text-red-500" htmlFor="toggle3">
                                {/* <AiOutlineFileWord className="text-[4rem] text-center text-blue-700 " /> */}
                                <span className="pt-2">
                                    <p className="font-bold ">GITC (Customs Valuation) (Dispute Settlement) Regulations, 2019 (L.I 2382)</p>
                                </span>
                            </label>
                            <div className="content bg-white overflow-hidden">
                                <div className="grid grid-cols-2 p-6 gap-14  pb-20">
                                    <h2 className="text-center">No files</h2>
                                </div>
                            </div>
                        </div>
                        <div className=" drop-shadow-md hover:drop-shadow-xl">
                            <input type="checkbox" id="toggle4" className="toggle hidden" />
                            <label className="title flex font-bold bg-white p-4 cursor-pointer lg:text-2xl text-red-500" htmlFor="toggle4">
                                {/* <AiOutlineFileWord className="text-[4rem] text-center text-blue-700 " /> */}
                                <span className="pt-2">
                                    <p className="font-bold pr-5">GITC (Subsidy and Countervailing Measures) Regulations, 2020 (L.I 2425)</p>
                                </span>
                            </label>
                            <div className="content bg-white overflow-hidden">
                                <div className="grid grid-cols-2 p-6 gap-14  pb-20">
                                    <h2 className="text-center">No files</h2>
                                </div>
                            </div>
                        </div>
                        <div className=" drop-shadow-md hover:drop-shadow-xl">
                            <input type="checkbox" id="toggle5" className="toggle hidden" />
                            <label className="title block font-bold bg-white p-4 cursor-pointer lg:text-2xl text-red-500" htmlFor="toggle5">
                                <span className="pt-2">
                                    <p className="font-bold ">GITC (Safeguards Measures) Regulations, 2020 (L.I 2426)</p>
                                </span>
                            </label>
                            <div className="content bg-white overflow-hidden">
                                <div className="grid grid-cols-2 p-6 gap-14  pb-20">
                                    <h2 className="text-center">No files</h2>
                                </div>
                            </div>
                        </div>
                        {/* <div className="px-4 sm:flex shadow-lg cursor-pointer duration-500 ease-in-out hover:scale-110">

                            <div className="sm:flex py-5">
                                <AiOutlineFileWord className="text-[4rem] text-center text-blue-700 " />
                                <div className="pt-2">
                                    <p>Name of File</p>
                                    <div className=""> File description </div>
                                </div>
                            </div>

                        </div>
                        <div className="px-4 sm:flex shadow-lg cursor-pointer duration-500 ease-in-out hover:scale-110">

                            <div className="sm:flex py-5">
                                <AiOutlineFileWord className="text-[4rem] text-blue-700 " />
                                <div className="pt-2">
                                    <p>Name of File</p>
                                    <div className=""> File description </div>
                                </div>
                            </div>
                        </div>
                        <div className="px-4 sm:flex shadow-lg cursor-pointer duration-500 ease-in-out hover:scale-110">

                            <div className="sm:flex py-5">
                                <AiOutlineFilePdf className="w-[7rem] h-[4rem] text-red-700 " />
                                <div className="pt-2">
                                    <p>Name of File</p>
                                    <div className=""> File description </div>
                                </div>
                            </div>
                        </div>
                        <div className="px-4 sm:flex shadow-lg cursor-pointer duration-500 ease-in-out hover:scale-110">

                            <div className="sm:flex py-5">
                                <AiOutlineFilePdf className="text-[4rem] text-red-700 " />
                                <div className="pt-2">
                                    <p>Name of File</p>
                                    <div className=""> File description </div>
                                </div>
                            </div>
                        </div>
                        <div className="px-4 sm:flex shadow-lg cursor-pointer duration-500 ease-in-out hover:scale-110">

                            <div className="sm:flex py-5">
                                <AiOutlineFilePdf className="text-[4rem] text-red-700 " />
                                <div className="pt-2">
                                    <p>Name of File</p>
                                    <div className=""> File description </div>
                                </div>
                            </div>
                        </div>
                        <div className="px-4 flex shadow-lg cursor-pointer duration-500 ease-in-out hover:scale-110">

                            <div className="sm:flex py-5">
                                <AiOutlineFilePdf className="text-[4rem] text-red-700 " />
                                <div className="pt-2">
                                    <p>Name of File</p>
                                    <div className=""> File description </div>
                                </div>
                            </div>
                        </div> */}


                    </div>
                </div>
            </div>

        </WebsiteLayout>
    );
}

export default Resources;