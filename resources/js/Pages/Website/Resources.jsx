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
            <div className="bg-white py-16  overflow-hidden">
                <div className="grid sm:grid-cols-5 gap-5 mx-auto p-16">
                    {data.map((item, index) => (
                        <div
                            className="border sm:my-0 my-3 cursor-pointer hover:bg-red-100/30"
                            key={index}
                            onClick={() => opneFile(item.pdf)}
                        >
                            <div className="mx-auto ">
                                <AiOutlineFilePdf className="text-[10rem] w-[100%] text-red-700 " />
                                <p className="lowercase text-center px-5 ">
                                    {item.name}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-5 gap-5 mx-auto px-10">
                    <Modal
                        key="pdf__modal"
                        classNames={{
                            modal: "pdf__modal",
                        }}
                        open={open}
                        onClose={() => setOpen(false)}
                    >
                        <div className="sm:w-[50rem] sm:h-[60rem] w-[19rem] h-[30rem]  mt-10">
                            {open && (
                                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.3.122/build/pdf.worker.min.js">
                                    <Viewer
                                        fileUrl={currentFile}
                                        plugins={[
                                            defaultLayoutPluginInstance,
                                            getFilePluginInstance,
                                            pageNavigationPluginInstance,
                                        ]}
                                        defaultScale={SpecialZoomLevel.PageFit}
                                        pageLayout={pageLayout}
                                    />
                                </Worker>
                            )}
                        </div>
                    </Modal>
                </div>
            </div>
        </WebsiteLayout>
    );
}

export default Resources;
