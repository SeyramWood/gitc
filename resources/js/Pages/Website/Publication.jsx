// slider
import { useKeenSlider } from "keen-slider/react";
// gallery
import React, { useState } from "react";

import { WebsiteLayout } from "../../components/layouts";

import "keen-slider/keen-slider.min.css";
// import "../../../css/style.css";
import "yet-another-react-lightbox/styles.css";

// pdf
import { Worker } from "@react-pdf-viewer/core";
// Import the main component
import { SpecialZoomLevel, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { getFilePlugin } from "@react-pdf-viewer/get-file";
import { pageNavigationPlugin } from "@react-pdf-viewer/page-navigation";
// import React, { useState } from "react";
// modal
import { Modal } from "react-responsive-modal";

// import { WebsiteLayout } from "../../components/layouts";

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

const pageLayout = {
    transformSize: ({ size }) => ({
        height: size.height + 20,
        width: size.width + 20,
    }),
};
// end pdf

const month = {
    0: "JAN",
    1: "FEB",
    2: "MAR",
    3: "APR",
    4: "MAY",
    5: "JUN",
    6: "JUL",
    7: "AUG",
    8: "SEP",
    9: "OCT",
    10: "NOV",
    11: "DEC",
};

const Publication = ({ publications }) => {
    //
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
    //

    const [currentSlide, setCurrentSlide] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const [sliderRef, instanceRef] = useKeenSlider({
        breakpoints: {
            "(min-width: 400px)": {
                slides: { perView: 1, spacing: 1 },
                loop: true,
                mode: "free-snap",
            },
            "(min-width: 1000px)": {
                slides: { perView: 3, spacing: 20 },
                loop: true,
                mode: "free-snap",
            },
        },

        initial: 0,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
        created() {
            setLoaded(true);
        },
    });

    return (
        <WebsiteLayout page="publication">
            <Modal
                key="pdf__modal"
                classNames={{
                    modal: "pdf__modal",
                }}
                open={open}
                onClose={() => setOpen(false)}
            >
                <div className="sm:w-[50rem] sm:h-[60rem] w-[19rem] h-[30rem]">
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
            <div className="overflow-hidden bg-white">
                <div className="pt-10 text-center">
                    <h2 className="sm:pb-16 pb-5 sm:text-[3rem] text-[2rem] text-center text-red-600">
                        Press Releases and Speeches
                    </h2>
                </div>

                {/* publicatation */}
                <div className=" sm:px-[6rem]  ">
                    <div className="relative sm:pb-28">
                        <div className="grid gap-6 sm:grid-cols-3">
                            {publications.data.map((item, index) => (
                                <div className="" key={index}>
                                    <div
                                        className="cursor-pointer"
                                        onClick={() =>
                                            opneFile(
                                                `/uploads/publications/pdf/${item.pdf}`
                                            )
                                        }
                                    >
                                        <div className="relative">
                                            <img
                                                src={`/uploads/publications/images/${item.image}`}
                                                className="object-cover sm:h-[20rem]"
                                                alt={item.title}
                                            />
                                            <div className="absolute bottom-0 left-0 bg-primary h-[5rem] w-[5rem]">
                                                <div className="block font-bold text-center text-white uppercase">
                                                    <div>
                                                        {
                                                            month[
                                                                new Date(
                                                                    item.published_date
                                                                ).getMonth()
                                                            ]
                                                        }
                                                    </div>
                                                    <div>
                                                        {new Date(
                                                            item.published_date
                                                        ).getDate()}
                                                    </div>
                                                    <div>
                                                        {new Date(
                                                            item.published_date
                                                        ).getFullYear()}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-slate-100 p-3 overflow-hidden h-[60%]">
                                            <p className="font-bold uppercase text-primary">
                                                {item.title}
                                            </p>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex gap-2 pt-[2rem] justify-center">
                            <>
                                {publications?.links.map((link, index) =>
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
};

export default Publication;
// function Arrow(props) {
//     const disabeld = props.disabled ? " arrow--disabled" : "";
//     return (
//         <svg
//             onClick={props.onClick}
//             className={`arrow ${props.left ? "arrow--left" : "arrow--right"
//                 } ${disabeld}`}
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 24 24"
//         >
//             {props.left && (
//                 <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
//             )}
//             {!props.left && (
//                 <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
//             )}
//         </svg>
//     );
// }
