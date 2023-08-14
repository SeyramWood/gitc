
// Import the main component

import { getFilePlugin } from "@react-pdf-viewer/get-file";
import React, { useState } from "react";
import { AiOutlineFilePdf } from "react-icons/ai";


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

// const pageLayout = {
//     transformSize: ({ size }) => ({
//         height: size.height + 20,
//         width: size.width + 20,
//     }),
// };

function Resources() {
    // modal
    const [open, setOpen] = useState(false);
    const [currentFile, setCurrentFile] = useState();
 
    function opneFile(filePath){
        setCurrentFile(filePath) 
    }
    // pdf viewer
    const getFilePluginInstance = getFilePlugin();

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

            </div>
        </WebsiteLayout >
    );
}

export default Resources;
