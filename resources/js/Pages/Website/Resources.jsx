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
       

            <div className="bg-white">
                {/* files */}
                <div className="py-10 pb-10 sm:mx-24">
          
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
                                <span className="pt-2">
                                    <p className="font-bold">
                                        Legislative Instruments
                                    </p>
                                </span>
                            </label>

                            <div className="overflow-auto bg-white content">
                                <div className="grid grid-cols-1 p-6 pb-20">

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
                       
                    </div>
                </div>
            </div>
        </WebsiteLayout>
    );
}

export default Resources;