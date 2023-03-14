import { Link } from "@inertiajs/inertia-react";
import { WebsiteLayout } from "../../components/layouts";
import { useState } from "react";
// files
import measuresPdf from "../../files/customsFiles";
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
import "@react-pdf-viewer/page-navigation/lib/styles/index.css";
import CasesNav from "../../components/layouts/website/CasesNav";

const pageLayout = {
    transformSize: ({ size }) => ({
        height: size.height + 20,
        width: size.width + 20,
    }),
};

function MeasuresFiles() {
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

            <div className="w-[100%]   bg-white">
                <div className="flex px-10 py-16 ">
                    <div className="w-[40%]">
                        <CasesNav />
                    </div>
                    <div className=" w-[60%]">
                        <p className="pb-12">
                            Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Id, suscipit reiciendis porro laborum
                            inventore beatae pariatur ex omnis? Voluptatem consequatur reprehenderit harum enim blanditiis! Eligendi in
                            laborum tempora eius doloremque?
                        </p>
                        <div className="border">
                            <table className="table-fixed  w-[100%] ">
                                <thead className="text-left bg-red-100/30 ">
                                    <tr className="border-b">
                                        <th className="p-3">Investitation No</th>
                                        <th className="p-3">Title</th>
                                        <th className="p-3">Date Issued</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {measuresPdf.map((item, index) => (
                                        <tr className="border-b" key={index}>
                                            <td className="p-3 hover:text-primary/60 cursor-pointer"
                                                onClick={() => opneFile(item.pdfPath)}
                                            >{item.name}
                                            </td>
                                            <td className="p-3">Malcolm Lockyer</td>
                                            <td className="p-3">1961</td>
                                        </tr>

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

                                </tbody>
                            </table>
                        </div>
                        <div class="flex  gap-2 pt-3 justify-center">
                            <a href="#" class="px-4 py-2 text-gray-500 bg-gray-300 rounded-md hover:bg-red-400 hover:text-white">
                                Previous
                            </a>

                            <a href="#" class="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-red-400 hover:text-white">
                                1
                            </a>
                            <a href="#" class="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-red-400 hover:text-white">
                                2
                            </a>
                            <a href="#" class="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-red-400 hover:text-white">
                                3
                            </a>
                            <a href="#" class="px-4 py-2 font-bold text-gray-500 bg-gray-300 rounded-md hover:bg-red-400 hover:text-white">
                                Next
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </WebsiteLayout>
    );
}

export default MeasuresFiles;