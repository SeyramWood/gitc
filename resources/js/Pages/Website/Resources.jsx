import { AiOutlineFilePdf, AiOutlineFileWord } from "react-icons/ai";

import { useState } from "react";

import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// Import styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

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
import data from '../../files/resourceFile';
import 'react-responsive-modal/styles.css';

function Resources() {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    // modal
    const [open, setOpen] = useState(false);
    const [currentFile, setCurrentFile] = useState();

    function opneFile(filePath) {
        setCurrentFile(filePath);
        setOpen(true);
    }

    // pdf viewer
    const getFilePluginInstance = getFilePlugin();
    const { DownloadButton } = getFilePluginInstance;
    return (

        <WebsiteLayout page="resource" >
            {/* {data.map((item, index) => (
                <h1 key={index}>
                    {item.pdf}
                   
                </h1>
            ))} */}

            <div className="bg-white">
                {/* files */}
                <div className=" sm:mx-24 py-10 mb-10">
                    {/* <div className="h-[15rem]">
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

                    </div> */}

                    <div className="grid grid-cols-2 pt-10 px-6 gap-14  pb-20">
                        <div className="drop-shadow-md hover:drop-shadow-xl">
                            <input type="checkbox" id="toggle1" className="toggle hidden" />
                            <label className="title flex font-bold bg-white p-4 cursor-pointer lg:text-2xl text-red-500" htmlFor="toggle1">
                                {/* <AiOutlineFileWord className="text-[4rem] text-center text-blue-700 " /> */}
                                <span className="pt-2">
                                    <p className="font-bold">Legislative Instruments</p>
                                </span>
                            </label>

                            <div className="content bg-white overflow-auto">
                                <div className="grid grid-cols-1 p-6 pb-20">
                                   
                                    
                                    {/* <div >
                                        <div className="px-4 sm:flex cursor-pointer ">

                                            <div className="sm:flex py-5">
                                                <AiOutlineFilePdf className="text-[4rem] text-red-700 " />
                                                <div className="pt-2">
                                                    <div className="">
                                                        <p className="">hh</p>
                                                    </div>
                                                    <div className="w-[30%] pt-2">
                                                        <button className=" px-3 text-center border rounded-lg hover:bg-red-600 hover:text-white hover:scale-110 duration-200 ease-in-out"
                                                            onClick={() => setOpen(true)}>
                                                            Read
                                                        </button>
                                                    </div>
                                                    <Modal key="index" classNames="p-20" open={open} onClose={() => setOpen(false)} center>
                                                        <div className="" >
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
                                                                            <Viewer fileUrl="images/11.pdf" plugins={[getFilePluginInstance]} defaultScale={SpecialZoomLevel.PageFit} />
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
                                    <div >
                                        <div className="px-4 sm:flex cursor-pointer ">

                                            <div className="sm:flex py-5">
                                                <AiOutlineFilePdf className="text-[4rem] text-red-700 " />
                                                <div className="pt-2">
                                                    <div className="">
                                                        <p className="">=</p>
                                                    </div>
                                                    <div className="w-[30%] pt-2">
                                                        <button className=" px-3 text-center border rounded-lg hover:bg-red-600 hover:text-white hover:scale-110 duration-200 ease-in-out"
                                                            onClick={() => setOpen2(true)}>
                                                            Read
                                                        </button>
                                                    </div>
                                                    <Modal key="index" classNames="p-20" open={open2} onClose={() => setOpen2(false)} center>
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
                                                                            <Viewer fileUrl="images/3.pdf" plugins={[getFilePluginInstance]} defaultScale={SpecialZoomLevel.PageFit} />
                                                                        </Worker>;
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Modal>
                                                </div>
                                            </div>

                                        </div>
                                    </div> */}
                                    {data.map((item, index) => (
                                        <div key={index}>
                                            <div className="px-4 sm:flex cursor-pointer ">

                                                <div className="sm:flex py-5">
                                                    <AiOutlineFilePdf className="text-[4rem] text-red-700 " />
                                                    <div className="pt-2">
                                                        <div className="lowercase">
                                                            <p className="">{item.name}</p>
                                                        </div>
                                                        <div className="w-[30%] pt-2">
                                                            <button className=" px-3 text-center border rounded-lg hover:bg-red-600 hover:text-white hover:scale-110 duration-200 ease-in-out"
                                                                onClick={() => opneFile(item.pdf)}
                                                            >
                                                                Read
                                                            </button>
                                                        </div>
                                                        <Modal key="index" classNames="mt-[40rem] " open={open}
                                                            onClose={() => setOpen(false)}
                                                        >
                                                            <div className="">
                                                                <div
                                                                    className="rpv-core__viewer mt-10 mx-auto "
                                                                    style={{
                                                                        border: 'rgba(0, 0, 0, 0.3)',
                                                                        display: 'flex',
                                                                        flexDirection: 'column',
                                                                        height: '100%',
                                                                    }}
                                                                >
                                                                    <div
                                                                        style={{
                                                                            alignItems: 'center',
                                                                            backgroundColor: 'eeeee',
                                                                            borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
                                                                            display: 'flex',
                                                                        }}
                                                                    >
                                                                        <div className="pl-2 p-1 bg-red-100">
                                                                            <DownloadButton />
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        style={{
                                                                            flex: 1,
                                                                            overflow: 'hidden',
                                                                        }}
                                                                    >
                                                                        <div className="w-[50rem] ">
                                                                            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.3.122/build/pdf.worker.min.js">
                                                                                <Viewer fileUrl={currentFile} plugins={[
                                                                                    // defaultLayoutPluginInstance,
                                                                                     getFilePluginInstance]} defaultScale={SpecialZoomLevel.PageFit} />
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
                                    ))}
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