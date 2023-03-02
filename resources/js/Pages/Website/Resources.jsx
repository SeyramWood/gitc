import { AiOutlineFilePdf, AiOutlineFileWord } from "react-icons/ai";

import { WebsiteLayout } from "../../components/layouts";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";


function Resources() {
    const [open, setOpen] = useState(false);
    const [openOne, setOpenOne] = useState(false);
    const [openTwo, setOpenTwo] = useState(false);
    const [openThree, setOpenThree] = useState(false);
    const [openFour, setOpenFour] = useState(false);
    const [openFive, setOpenFive] = useState(false);
    return (
        <WebsiteLayout page="service" >
            <div className="bg-white">
                {/* files */}
                <div className=" sm:mx-24 py-10 mb-10">
                    <div className="text-center mb-7">
                        <h2 className="text-red-600 mb-0 pb-0 sm:text-[4rem] ">
                            Resources
                        </h2>
                        <p className="pt-0 mt-0 uppercase">Our Files</p>
                    </div>
                    <div className="grid grid-cols-2 p-6 gap-14  pb-20">
                        <div className="px-4 sm:flex shadow-lg cursor-pointer duration-500 ease-in-out hover:scale-110">

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
                        </div>


                    </div>
                </div>

                <div className="">
                    {/* gallery */}
                    <div className="">
                        <div className="text-center mb-7">
                            <h2 className="text-red-600 pb-0 mb-0 sm:text-[4rem]">
                                Our Gallery
                            </h2>
                            <p>MEETINGS, WORSHSHOPS, COURTESY CALLS</p>
                        </div>
                        <div className="justify-center sm:flex">
                            <div className="grid-cols-3 sm:grid">
                                {/*
                         {
                            releases.map((data) => (
                            // console.log(data.gallery.img)
                            // <div className="">{data.date}</div>
                            <div className="relative sm:w-[20rem] mx-3 mb-10" >
                                <div className="overflow-hidden bg-black " onClick={() => setOpen(true)}>
                                    <img src={data.main_img} className="object-cover h-[17rem] transition duration-700 ease-in-out hover:scale-110 hover:opacity-75 bg-black/40" alt="" />
                                </div>
                                <div className="absolute bg-black/40 insect-0"></div>
                                <Lightbox
                                    open={open}
                                    close={() => setOpen(false)}
                                    slides={[
                                        { src: "/images/homepage/serviceOne.jpg"},
                                        { src: "/images/homepage/serviceTwo.jpg"},
                                        { src: "/images/homepage/serviceThree.jpg"},
                                    ]}
                                />
                                <div className="text-center bg-slate-100 p-5  sm:h-[35%]">
                                    <Paragraph className="uppercase text-primary ">
                                        COURTESY CALL TO
                                        GHANA STATISTICAL SERVICE
                                    </Paragraph>
                                    <Paragraph>
                                        19th May 2022
                                    </Paragraph>
                                </div>
                            </div>
                        ))
                        }
                        */}
                                <div className="relative sm:w-[20rem] mx-3 mb-10">
                                    <div
                                        className="overflow-hidden bg-black cursor-pointer "
                                        onClick={() => setOpen(true)}
                                    >
                                        <img
                                            src="images/publish/publish.jpg"
                                            className="object-cover h-[17rem] transition duration-700 ease-in-out hover:scale-110 hover:opacity-75 bg-black/40"
                                            alt=""
                                        />
                                    </div>
                                    <div className="absolute bg-black/40 insect-0"></div>
                                    <Lightbox
                                        open={open}
                                        close={() => setOpen(false)}
                                        slides={[
                                            { src: "/images/publish/publish.jpg" },
                                        ]}
                                    />
                                    <div className="text-center bg-slate-100 p-5  sm:h-[35%]">
                                        <p className="uppercase text-primary ">
                                            COURTESY CALL TO GHANA STATISTICAL
                                            SERVICE
                                        </p>
                                        <p>19th May 2022</p>
                                    </div>
                                </div>
                                <div className=" sm:w-[20rem]  mx-3 mb-10">
                                    <div
                                        className="overflow-hidden bg-black cursor-pointer "
                                        onClick={() => setOpen(true)}
                                    >
                                        <img
                                            src="images/publish/publish1.jpg"
                                            className="object-cover h-[17rem] transition duration-700 ease-in-out hover:scale-110 hover:opacity-75 bg-black/40"
                                            alt=""
                                        />
                                    </div>
                                    <Lightbox
                                        open={openOne}
                                        close={() => setOpenOne(false)}
                                        slides={[
                                            { src: "/images/publish/publish1.jpg" },
                                        ]}
                                    />
                                    <div className="text-center bg-slate-100 p-5 sm:h-[35%]">
                                        <p className="uppercase text-primary ">
                                            COURTESY CALL TO GHANA Revenue Authority
                                        </p>
                                        <p>2nd June 2022</p>
                                    </div>
                                </div>
                                <div className=" sm:w-[20rem]  mx-3 mb-10">
                                    <div
                                        className="overflow-hidden bg-black cursor-pointer "
                                        onClick={() => setOpenTwo(true)}
                                    >
                                        <img
                                            src="images/publish/publish2.jpg"
                                            className="object-cover h-[17rem] transition duration-700 ease-in-out hover:scale-110 hover:opacity-75 bg-black/40"
                                            alt=""
                                        />
                                    </div>
                                    <Lightbox
                                        open={openTwo}
                                        close={() => setOpenTwo(false)}
                                        slides={[
                                            { src: "/images/publish/publish2.jpg" },
                                        ]}
                                    />
                                    <div className="text-center bg-slate-100 p-5 sm:h-[35%]">
                                        <p className="uppercase text-primary ">
                                            ASSOCIATION OF GHANA INDUSTRIES COURTESY
                                            CALL TO GITC
                                        </p>
                                        <p>27th May 2022</p>
                                    </div>
                                </div>
                                <div className="sm:w-[20rem]  mx-3 mb-10">
                                    <div
                                        className="overflow-hidden bg-black cursor-pointer "
                                        onClick={() => setOpenThree(true)}
                                    >
                                        <img
                                            src="images/publish/publish3.jpg"
                                            className="object-cover h-[17rem] transition duration-700 ease-in-out hover:scale-110 hover:opacity-75 bg-black/40"
                                            alt=""
                                        />
                                    </div>
                                    <Lightbox
                                        open={openThree}
                                        close={() => setOpenThree(false)}
                                        slides={[
                                            { src: "/images/publish/publish3.jpg" },
                                        ]}
                                    />
                                    <div className="text-center bg-slate-100 p-5 sm:h-[35%]">
                                        <p className="uppercase text-primary ">
                                            HON.DEPUTY MINISTER (TRADE) COURTESY
                                            CALL TO GITC
                                        </p>
                                        <p>19th May,2022</p>
                                    </div>
                                </div>
                                <div className=" sm:w-[20rem]  mx-3 mb-10">
                                    <div
                                        className="overflow-hidden bg-black cursor-pointer "
                                        onClick={() => setOpenFour(true)}
                                    >
                                        <img
                                            src="images/publish/publish4.jpg"
                                            className="object-cover h-[17rem] transition duration-700 ease-in-out hover:scale-110 hover:opacity-75 bg-black/40"
                                            alt=""
                                        />
                                    </div>
                                    <Lightbox
                                        open={openFour}
                                        close={() => setOpenFour(false)}
                                        slides={[
                                            { src: "/images/publish/publish4.jpg" },
                                        ]}
                                    />
                                    <div className="text-center bg-slate-100 p-5  sm:h-[35%]">
                                        <p className="uppercase text-primary ">
                                            TRAINING SESSION WITH BMWK
                                        </p>
                                        <p>19th -29th April 2022</p>
                                    </div>
                                </div>
                                <div className=" sm:w-[20rem]  mx-3 mb-10">
                                    <div
                                        className="overflow-hidden bg-black cursor-pointer "
                                        onClick={() => setOpenFive(true)}
                                    >
                                        <img
                                            src="images/publish/publish5.jpg"
                                            className="object-cover h-[17rem] transition duration-700 ease-in-out hover:scale-110 hover:opacity-75 bg-black/40"
                                            alt=""
                                        />
                                    </div>
                                    <Lightbox
                                        open={openFive}
                                        close={() => setOpenFive(false)}
                                        slides={[
                                            { src: "/images/publish/publish5.jpg" },
                                        ]}
                                    />
                                    <div className="text-center bg-slate-100 p-5 sm:h-[35%]">
                                        <p className="uppercase text-primary ">
                                            GITC RETREAT WITH STAFF,TECHNICAL
                                            COMMITTEE AND GOVERNING BOARD
                                        </p>
                                        <p>17th - 18th March 2022</p>
                                    </div>
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