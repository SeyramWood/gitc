import React, { useState } from "react";
import { WebsiteLayout } from "../../components/layouts";
// files
// modal
import { Modal } from "react-responsive-modal";
// pdf reader
import { Worker } from "@react-pdf-viewer/core";
// Import the main component
import { SpecialZoomLevel, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { getFilePlugin } from "@react-pdf-viewer/get-file";
import { pageNavigationPlugin } from "@react-pdf-viewer/page-navigation";
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
import { Link } from "@inertiajs/inertia-react";
import "@react-pdf-viewer/page-navigation/lib/styles/index.css";
import CasesNav from "../../components/layouts/website/CasesNav";

const pageLayout = {
    transformSize: ({ size }) => ({
        height: size.height + 20,
        width: size.width + 20,
    }),
};

function CustomsFiles({ cases }) {
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
                                defaultScale={SpecialZoomLevel.PageFit}
                                pageLayout={pageLayout}
                            />
                        </Worker>
                    )}
                </div>
            </Modal>
            <div className="w-[100%]   bg-white">
                <div className="px-10 py-16 sm:flex">
                    <div className="sm:w-[40%] sm:block hidden">
                        <CasesNav />
                    </div>
                    <div className=" sm:w-[60%]">
                        <p className="pb-12">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Id, suscipit reiciendis porro laborum
                            inventore beatae pariatur ex omnis? Voluptatem
                            consequatur reprehenderit harum enim blanditiis!
                            Eligendi in laborum tempora eius doloremque?
                        </p>

                        <div className="border">
                            <table className="table-auto w-[100%] ">
                                <thead className="text-left bg-red-100/30">
                                    <tr className="border-b">
                                        <th className="p-3 text-sm">
                                            Investigation #
                                        </th>
                                        <th className="p-3 text-sm">Title</th>
                                        <th className="p-3 text-sm">
                                            Description
                                        </th>
                                        <th className="p-3 text-sm whitespace-nowrap">
                                            Date Issued
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cases.data.length > 0 ? (
                                        cases.data.map((item, index) => (
                                            <tr
                                                className="border-b"
                                                key={index}
                                            >
                                                <td className="p-3">
                                                    {item.investigation_number}
                                                </td>
                                                <td className="p-3">
                                                    <span
                                                        onClick={() =>
                                                            opneFile(
                                                                `/uploads/cases/${item.pdf}`
                                                            )
                                                        }
                                                        className="p-3 cursor-pointer hover:text-primary/60"
                                                    >
                                                        {item.title}
                                                    </span>
                                                </td>
                                                <td className="p-3 w-[20rem]">
                                                    {item.description}
                                                </td>
                                                <td className="p-3 w-[5rem]">
                                                    {new Date(
                                                        item.issued_date
                                                    ).getFullYear()}
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td className="p-3">
                                                No case found!
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                        <div className="flex gap-2 pt-[2rem] justify-center">
                            <>
                                {cases?.links.map((link, index) =>
                                    link.url ? (
                                        <Link
                                            preserveScroll
                                            href={`${link.url}`}
                                            className={`${
                                            link.active
                                                && "bg-red-400 text-white "
                                        } px-4 py-2 text-gray-500 bg-gray-300 rounded-md hover:bg-red-400 hover:text-white `}
                                            key={index}
                                            as="button"
                                            type="button"
                                        >
                                            <span
                                                dangerouslySetInnerHTML={{
                                                    __html: link.label,
                                                }}
                                            ></span>
                                        </Link>
                                    ) : (
                                        <Link
                                            preserveScroll
                                            href={`${link.url}`}
                                            className={`${
                                            link.active
                                                && "bg-red-400 text-white "
                                        } px-4 py-2 text-gray-500 bg-gray-300 rounded-md hover:bg-red-400 hover:text-white `}
                                            key={index}
                                            disabled
                                            as="button"
                                            type="button"
                                        >
                                            <span
                                                dangerouslySetInnerHTML={{
                                                    __html: link.label,
                                                }}
                                            ></span>
                                        </Link>
                                    )
                                )}
                            </>
                        </div>
                    </div>
                </div>
            </div>
        </WebsiteLayout>
    );
}

export default CustomsFiles;
