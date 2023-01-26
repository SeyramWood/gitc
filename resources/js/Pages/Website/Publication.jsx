import HeadingPrimary from "../../components/layouts/website/HeadingPrimary";
import Paragraph from "../../components/layouts/website/Paragraph";

// gallery 
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useState } from "react";
// slider


const Publication = () => {

    const [open, setOpen] = useState(false);
    const [openOne, setOpenOne] = useState(false);
    const [openTwo, setOpenTwo] = useState(false);
    const [openThree, setOpenThree] = useState(false);
    const [openFour, setOpenFour] = useState(false);
    const [openFive, setOpenFive] = useState(false);
    return (
        <div className="bg-white">
            {/* Press */}
            <div className="sm:flex justify-center mb-24 pt-14">
                <div className=" sm:w-[15rem] mx-3 mb-10" >
                    <div className="">
                        <img src="images/about/bg.jpg" className="object-cover h-[17rem]" alt="" />
                    </div>
                    <div className="">
                        <Paragraph>
                            Text here
                        </Paragraph>
                    </div>
                </div>
                <div className=" sm:w-[15rem] mx-3 mb-10" >
                    <div className="">
                        <img src="images/about/bg.jpg" className="object-cover h-[17rem]" alt="" />
                    </div>
                    <div className="">
                        <Paragraph>
                            Text here
                        </Paragraph>
                    </div>
                </div>
                <div className=" sm:w-[15rem] mx-3 mb-10" >
                    <div className="">
                        <img src="images/about/bg.jpg" className="object-cover h-[17rem]" alt="" />
                    </div>
                    <div className="">
                        <Paragraph>
                            Text here
                        </Paragraph>
                    </div>
                </div>
                <div className=" sm:w-[15rem] mx-3 mb-10" >
                    <div className="">
                        <img src="images/about/bg.jpg" className="object-cover h-[17rem]" alt="" />
                    </div>
                    <div className="">
                        <Paragraph>
                            Text here
                        </Paragraph>
                    </div>
                </div>
            </div>

            {/* gallery */}
            <div className="">
                <div className="text-center mb-7">
                    <HeadingPrimary>
                        Our Gallery
                    </HeadingPrimary>
                    <Paragraph>
                        MEETINGS, WORSHSHOPS, COURTESY CALLS
                    </Paragraph>
                </div>
                <div className="sm:flex justify-center">
                    <div class="sm:grid grid-cols-3">
                        <div className=" sm:w-[20rem] mx-3 mb-10" >
                            <div className="bg-black overflow-hidden" onClick={() => setOpen(true)}>
                                <img src="images/about/bg.jpg" className="object-cover h-[17rem] transition duration-700 ease-in-out hover:scale-110 hover:opacity-75 bg-black/40" alt="" />
                            </div>
                            <Lightbox
                                open={open}
                                close={() => setOpen(false)}
                                slides={[
                                    { src: "/images/homepage/serviceOne.jpg" },
                                    { src: "/images/homepage/serviceTwo.jpg" },
                                    { src: "/images/homepage/serviceThree.jpg" },
                                ]}
                            />
                            <div className="">
                                <Paragraph>
                                    Text here
                                </Paragraph>
                            </div>
                        </div>
                        <div className=" sm:w-[20rem]  mx-3 mb-10" >
                            <div className="bg-black overflow-hidden" onClick={() => setOpen(true)}>
                                <img src="images/about/bg.jpg" className="object-cover h-[17rem] transition duration-700 ease-in-out hover:scale-110 hover:opacity-75 bg-black/40" alt="" />
                            </div>
                            <Lightbox
                                open={openOne}
                                close={() => setOpenOne(false)}
                                slides={[
                                    { src: "/images/homepage/sponsorOne.jpg" },
                                    { src: "/images/homepage/serviceTwo.jpg" },
                                    { src: "/images/homepage/serviceThree.jpg" },
                                ]}
                            />
                            <div className="">
                                <Paragraph>
                                    Text here
                                </Paragraph>
                            </div>
                        </div>
                        <div className=" sm:w-[20rem]  mx-3 mb-10" >
                            <div className="" onClick={() => setOpenTwo(true)}>
                                <img src="images/about/bg.jpg" className="object-cover h-[17rem]" alt="" />
                            </div>
                            <Lightbox
                                open={openTwo}
                                close={() => setOpenTwo(false)}
                                slides={[
                                    { src: "/images/homepage/sponsorOne.jpg" },
                                    { src: "/images/homepage/serviceTwo.jpg" },
                                    { src: "/images/homepage/serviceThree.jpg" },
                                ]}
                            />
                            <div className="">
                                <Paragraph>
                                    Text here
                                </Paragraph>
                            </div>
                        </div>
                        <div className="sm:w-[20rem]  mx-3 mb-10" >
                            <div className="" onClick={() => setOpenThree(true)}>
                                <img src="images/about/bg.jpg" className="object-cover h-[17rem]" alt="" />
                            </div>
                            <Lightbox
                                open={openThree}
                                close={() => setOpenThree(false)}
                                slides={[
                                    { src: "/images/homepage/sponsorOne.jpg" },
                                    { src: "/images/homepage/serviceTwo.jpg" },
                                    { src: "/images/homepage/serviceThree.jpg" },
                                ]}
                            />
                            <div className="">
                                <Paragraph>
                                    Text here
                                </Paragraph>
                            </div>
                        </div>
                        <div className=" sm:w-[20rem]  mx-3 mb-10" >
                            <div className="" onClick={() => setOpenFour(true)}>
                                <img src="images/about/bg.jpg" className="object-cover h-[17rem]" alt="" />
                            </div>
                            <Lightbox
                                open={openFour}
                                close={() => setOpenFour(false)}
                                slides={[
                                    { src: "/images/homepage/sponsorOne.jpg" },
                                    { src: "/images/homepage/serviceTwo.jpg" },
                                    { src: "/images/homepage/serviceThree.jpg" },
                                ]}
                            />
                            <div className="">
                                <Paragraph>
                                    Text here
                                </Paragraph>
                            </div>
                        </div>
                        <div className=" sm:w-[20rem]  mx-3 mb-10" >
                            <div className="" onClick={() => setOpenFive(true)}>
                                <img src="images/about/bg.jpg" className="object-cover h-[17rem]" alt="" />
                            </div>
                            <Lightbox
                                open={openFive}
                                close={() => setOpenFive(false)}
                                slides={[
                                    { src: "/images/homepage/sponsorOne.jpg" },
                                    { src: "/images/homepage/serviceTwo.jpg" },
                                    { src: "/images/homepage/serviceThree.jpg" },
                                ]}
                            />
                            <div className="">
                                <Paragraph>
                                    Text here
                                </Paragraph>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Publication;