// slider
import { Link } from "@inertiajs/inertia-react";
import { useKeenSlider } from "keen-slider/react";
// gallery
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";

import { WebsiteLayout } from "../../components/layouts";
import Paragraph from "../../components/layouts/website/Paragraph";

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
import { AiOutlineFilePdf } from "react-icons/ai";
// modal
import { Modal } from "react-responsive-modal";

// import { WebsiteLayout } from "../../components/layouts";
import publications from "../../files/publicationsFiles";

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
// end pdf 

const Publication = () => {
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
            <div className="bg-white ">
                <div className="text-center pt-10">
                    <h2 className="pb-16 sm:text-[3rem] text-center text-red-600">
                        Press Releases and Speeches
                    </h2>
                </div>

                {/* publicatation */}
                <div className=" sm:px-[6rem]  ">
                    <div className="relative sm:pb-28">
                        <div className="grid sm:grid-cols-3 gap-6">
                          {publications.map((items,index)=>(
                              <div className="">
                                  <div className="cursor-pointer"  onClick={() =>
                                      opneFile(items.file)
                                  }>
                                      <div className="relative">
                                          <img
                                              src={items.image}
                                              className="object-cover sm:h-[20rem]"
                                              alt=""
                                          />
                                          <div className="absolute bottom-0 left-0 bg-primary h-[5rem] w-[5rem]">
                                              <div className="block text-center font-bold text-white uppercase">
                                                  <div>{items.month}</div>
                                                  <div>{items.day}</div>
                                                  <div>{items.year}</div>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="bg-slate-100 p-3 overflow-hidden h-[60%]">
                                          <p className="uppercase text-primary font-bold">
                                                  {items.title}
                                          </p>
                                          <p>
                                              {items.desc}
                                          </p>
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
                        {/* {loaded && instanceRef.current && (
                            <>
                                <Arrow
                                    left
                                    onClick={(e) =>
                                        e.stopPropagation() ||
                                        instanceRef.current?.prev()
                                    }
                                    disabled={currentSlide === 0}
                                />

                                <Arrow
                                    onClick={(e) =>
                                        e.stopPropagation() ||
                                        instanceRef.current?.next()
                                    }
                                    disabled={
                                        currentSlide ===
                                        instanceRef.current.track.details.slides
                                            .length -
                                        1
                                    }
                                />
                            </>
                        )}
                        {loaded && instanceRef.current && (
                            <div className="text-center pt-6">
                                {[
                                    ...Array(instanceRef.current.track.details.slides.length).keys(),
                                ].map((idx) => {
                                    return (
                                        <button
                                            key={idx}
                                            onClick={() => {
                                                instanceRef.current?.moveToIdx(idx)
                                            }}
                                            className={"dot" + (currentSlide === idx ? " active" : "")}
                                        ></button>
                                    )
                                })}
                            </div>
                        )} */}
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
