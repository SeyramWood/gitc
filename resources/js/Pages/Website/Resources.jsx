import { Worker } from "@react-pdf-viewer/core";
// Import the main component
import { SpecialZoomLevel, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { getFilePlugin } from "@react-pdf-viewer/get-file";
import { pageNavigationPlugin } from "@react-pdf-viewer/page-navigation";
import React, { useState } from "react";
import { AiOutlineFilePdf, AiOutlineLink } from "react-icons/ai";


import { WebsiteLayout } from "../../components/layouts";
import data from "../../../../public/pdfFiles/files/resourceFile";

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
                <div className="grid w-[60%] sm:grid-cols-2 gap-16 mx-auto ">
                    {data.map((item, index) => (
                        <div
                            className="hover:scale-110 transition duration-500 ease-in-out py-10 hover:bg-red-100/10 rounded-md hover:shadow-lg hover:border   cursor-pointer "
                            key={index}
                            onClick={() => opneFile(item.pdf)}
                        >

                            <div className="mx-auto ">
                                <a href={currentFile} target="_blank" >

                                <AiOutlineFilePdf className="text-[8rem] w-[100%] text-center text-red-700 " />
                                <p className="text-center px-4 text-[13px] sm:text-[1rem]">
                                    {item.name}
                                </p>
                                </a>
                            </div>
                           
                        </div>
                    ))}
                </div>
                {/* <div className="grid grid-cols-5 gap-5 mx-auto px-10">
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
                </div> */}
            </div>
        </WebsiteLayout >
    );
}

export default Resources;
