import { Worker } from "@react-pdf-viewer/core";
// Import the main component
import { SpecialZoomLevel, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { getFilePlugin } from "@react-pdf-viewer/get-file";
import { pageNavigationPlugin } from "@react-pdf-viewer/page-navigation";
import React, { useState } from "react";
import { AiOutlineFilePdf } from "react-icons/ai";
// modal
import { Modal } from "react-responsive-modal";

import { WebsiteLayout } from "../../components/layouts";
import data from "../../files/resourceFile";

// Import styles
import "@react-pdf-viewer/core/lib/styles/index.css";
// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
// Import styles
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
// data
import "react-responsive-modal/styles.css";

// Import styles
import "@react-pdf-viewer/page-navigation/lib/styles/index.css";

const pageLayout = {
    transformSize: ({ size }) => ({
        height: size.height + 20,
        width: size.width + 20,
    }),
};

function Resources() {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    const pageNavigationPluginInstance = pageNavigationPlugin();
    // modal
    const [open, setOpen] = useState(false);
    const [currentFile, setCurrentFile] = useState();
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function opneFile(filePath) {
        setCurrentFile(filePath);
        setOpen(true);
    }
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }
    // pdf viewer
    const getFilePluginInstance = getFilePlugin();
    const { DownloadButton } = getFilePluginInstance;

    return (
        <WebsiteLayout page="resource">
            {/* {data.map((item, index) => (
                <h1 key={index}>
                    {item.pdf}

                </h1>
            ))} */}

            {/* <div>
                <Document
                    file={`http://127.0.0.1:9000/${data[0].pdf}`}
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                    <Page pageNumber={pageNumber} />
                </Document>
                <p>
                    Page {pageNumber} of {numPages}
                </p>
            </div> */}

            <div className="bg-white">
                {/* files */}
                <div className="py-10 mb-10 sm:mx-24">
                    {/* <div className="h-[15rem]">
                        <div className="" >
                            <img src="images/homePage/headings/RESOURCES.jpg" className="object-contain " alt="" />
                            <div className="-translate-y-[13rem]">
                                <div className="text-center mb-7">
                                    <h1 className=" mb-0 pb-0 text-[4rem] ">
                                        Resources
                                    </h1>
                                    <p className="pt-0 mt-0 uppercase text-black/75">Our Files</p>
                                </div>
                            </div>
                        </div>

                    </div> */}

                    <div className="grid grid-cols-2 px-6 pt-10 pb-20 gap-14">
                        <div className="drop-shadow-md hover:drop-shadow-xl">
                            <input
                                type="checkbox"
                                id="toggle1"
                                className="hidden toggle"
                            />
                            <label
                                className="flex p-4 font-bold text-red-500 bg-white cursor-pointer title lg:text-2xl"
                                htmlFor="toggle1"
                            >
                                {/* <AiOutlineFileWord className="text-[4rem] text-center text-blue-700 " /> */}
                                <span className="pt-2">
                                    <p className="font-bold">
                                        Legislative Instruments
                                    </p>
                                </span>
                            </label>

                            <div className="overflow-auto bg-white content">
                                <div className="grid grid-cols-1 p-6 pb-20">
                                    {/* <div >
                                        <div className="px-4 cursor-pointer sm:flex ">

                                            <div className="py-5 sm:flex">
                                                <AiOutlineFilePdf className="text-[4rem] text-red-700 " />
                                                <div className="pt-2">
                                                    <div className="">
                                                        <p className="">hh</p>
                                                    </div>
                                                    <div className="w-[30%] pt-2">
                                                        <button className="px-3 text-center duration-200 ease-in-out border rounded-lg hover:bg-red-600 hover:text-white hover:scale-110"
                                                            onClick={() => setOpen(true)}>
                                                            Read
                                                        </button>
                                                    </div>
                                                    <Modal key="index" classNames="p-20" open={open} onClose={() => setOpen(false)} center>
                                                        <div className="" >
                                                            <div
                                                                className="pt-20 rpv-core__viewer"
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
                                        <div className="px-4 cursor-pointer sm:flex ">

                                            <div className="py-5 sm:flex">
                                                <AiOutlineFilePdf className="text-[4rem] text-red-700 " />
                                                <div className="pt-2">
                                                    <div className="">
                                                        <p className="">=</p>
                                                    </div>
                                                    <div className="w-[30%] pt-2">
                                                        <button className="px-3 text-center duration-200 ease-in-out border rounded-lg hover:bg-red-600 hover:text-white hover:scale-110"
                                                            onClick={() => setOpen2(true)}>
                                                            Read
                                                        </button>
                                                    </div>
                                                    <Modal key="index" classNames="p-20" open={open2} onClose={() => setOpen2(false)} center>
                                                        <div className="">
                                                            <div
                                                                className="pt-20 rpv-core__viewer"
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
                                        <div
                                            className="px-1 cursor-pointer sm:flex"
                                            key={index}
                                        >
                                            <div
                                                className="py-5 sm:flex"
                                                onClick={() =>
                                                    opneFile(item.pdf)
                                                }
                                            >
                                                <AiOutlineFilePdf className="text-[4rem] text-red-700 " />
                                                <div className="pt-2">
                                                    <div className="w-full lowercase [&>p]:hover:text-primary">
                                                        <p className="">
                                                            {item.name}
                                                        </p>
                                                    </div>
                                                    {/* <div className="w-[30%] pt-2">
                                                            <button
                                                                className="px-3 text-center duration-200 ease-in-out border rounded-lg hover:bg-red-600 hover:text-white hover:scale-110"
                                                                onClick={() =>
                                                                    opneFile(
                                                                        item.pdf
                                                                    )
                                                                }
                                                            >
                                                                Read
                                                            </button>
                                                        </div> */}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    <Modal
                                        key="pdf__modal"
                                        classNames={{
                                            modal: "pdf__modal",
                                        }}
                                        open={open}
                                        onClose={() => setOpen(false)}
                                    >
                                        <div className="w-[50rem] h-[60rem] mt-10">
                                            {open && (
                                                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.3.122/build/pdf.worker.min.js">
                                                    <Viewer
                                                        fileUrl={currentFile}
                                                        plugins={[
                                                            defaultLayoutPluginInstance,
                                                            getFilePluginInstance,
                                                            pageNavigationPluginInstance,
                                                        ]}
                                                        defaultScale={
                                                            SpecialZoomLevel.PageFit
                                                        }
                                                        pageLayout={pageLayout}
                                                    />
                                                </Worker>
                                            )}
                                        </div>
                                    </Modal>
                                </div>
                            </div>
                        </div>
                        <div className="drop-shadow-md hover:drop-shadow-xl">
                            <input
                                type="checkbox"
                                id="toggle2"
                                className="hidden toggle"
                            />
                            <label
                                className="flex p-4 font-bold text-red-500 bg-white cursor-pointer title lg:text-2xl"
                                htmlFor="toggle2"
                            >
                                {/* <AiOutlineFileWord className="text-[4rem] text-center text-blue-700 " /> */}
                                <span className="pt-2">
                                    <p className="font-bold">
                                        GITC (Anti-Dumping) Regulations, 2019
                                        (L.I 2380)
                                    </p>
                                </span>
                            </label>

                            <div className="overflow-hidden bg-white content">
                                <div className="grid grid-cols-1 p-6 pb-20 gap-14">
                                    <h2 className="text-center">No files</h2>
                                </div>
                            </div>
                        </div>
                        <div className="drop-shadow-md hover:drop-shadow-xl">
                            <input
                                type="checkbox"
                                id="toggle3"
                                className="hidden toggle"
                            />
                            <label
                                className="flex p-4 font-bold text-red-500 bg-white cursor-pointer title lg:text-2xl"
                                htmlFor="toggle3"
                            >
                                {/* <AiOutlineFileWord className="text-[4rem] text-center text-blue-700 " /> */}
                                <span className="pt-2">
                                    <p className="font-bold ">
                                        GITC (Customs Valuation) (Dispute
                                        Settlement) Regulations, 2019 (L.I 2382)
                                    </p>
                                </span>
                            </label>
                            <div className="overflow-hidden bg-white content">
                                <div className="grid grid-cols-2 p-6 pb-20 gap-14">
                                    <h2 className="text-center">No files</h2>
                                </div>
                            </div>
                        </div>
                        <div className=" drop-shadow-md hover:drop-shadow-xl">
                            <input
                                type="checkbox"
                                id="toggle4"
                                className="hidden toggle"
                            />
                            <label
                                className="flex p-4 font-bold text-red-500 bg-white cursor-pointer title lg:text-2xl"
                                htmlFor="toggle4"
                            >
                                {/* <AiOutlineFileWord className="text-[4rem] text-center text-blue-700 " /> */}
                                <span className="pt-2">
                                    <p className="pr-5 font-bold">
                                        GITC (Subsidy and Countervailing
                                        Measures) Regulations, 2020 (L.I 2425)
                                    </p>
                                </span>
                            </label>
                            <div className="overflow-hidden bg-white content">
                                <div className="grid grid-cols-2 p-6 pb-20 gap-14">
                                    <h2 className="text-center">No files</h2>
                                </div>
                            </div>
                        </div>
                        <div className=" drop-shadow-md hover:drop-shadow-xl">
                            <input
                                type="checkbox"
                                id="toggle5"
                                className="hidden toggle"
                            />
                            <label
                                className="block p-4 font-bold text-red-500 bg-white cursor-pointer title lg:text-2xl"
                                htmlFor="toggle5"
                            >
                                <span className="pt-2">
                                    <p className="font-bold ">
                                        GITC (Safeguards Measures) Regulations,
                                        2020 (L.I 2426)
                                    </p>
                                </span>
                            </label>
                            <div className="overflow-hidden bg-white content">
                                <div className="grid grid-cols-2 p-6 pb-20 gap-14">
                                    <h2 className="text-center">No files</h2>
                                </div>
                            </div>
                        </div>
                        {/* <div className="px-4 duration-500 ease-in-out shadow-lg cursor-pointer sm:flex hover:scale-110">

                            <div className="py-5 sm:flex">
                                <AiOutlineFileWord className="text-[4rem] text-center text-blue-700 " />
                                <div className="pt-2">
                                    <p>Name of File</p>
                                    <div className=""> File description </div>
                                </div>
                            </div>

                        </div>
                        <div className="px-4 duration-500 ease-in-out shadow-lg cursor-pointer sm:flex hover:scale-110">

                            <div className="py-5 sm:flex">
                                <AiOutlineFileWord className="text-[4rem] text-blue-700 " />
                                <div className="pt-2">
                                    <p>Name of File</p>
                                    <div className=""> File description </div>
                                </div>
                            </div>
                        </div>
                        <div className="px-4 duration-500 ease-in-out shadow-lg cursor-pointer sm:flex hover:scale-110">

                            <div className="py-5 sm:flex">
                                <AiOutlineFilePdf className="w-[7rem] h-[4rem] text-red-700 " />
                                <div className="pt-2">
                                    <p>Name of File</p>
                                    <div className=""> File description </div>
                                </div>
                            </div>
                        </div>
                        <div className="px-4 duration-500 ease-in-out shadow-lg cursor-pointer sm:flex hover:scale-110">

                            <div className="py-5 sm:flex">
                                <AiOutlineFilePdf className="text-[4rem] text-red-700 " />
                                <div className="pt-2">
                                    <p>Name of File</p>
                                    <div className=""> File description </div>
                                </div>
                            </div>
                        </div>
                        <div className="px-4 duration-500 ease-in-out shadow-lg cursor-pointer sm:flex hover:scale-110">

                            <div className="py-5 sm:flex">
                                <AiOutlineFilePdf className="text-[4rem] text-red-700 " />
                                <div className="pt-2">
                                    <p>Name of File</p>
                                    <div className=""> File description </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex px-4 duration-500 ease-in-out shadow-lg cursor-pointer hover:scale-110">

                            <div className="py-5 sm:flex">
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
