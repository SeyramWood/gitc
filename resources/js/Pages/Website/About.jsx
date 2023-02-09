import { Link } from "@inertiajs/inertia-react";

import { WebsiteLayout } from "../../components/layouts";
import Paragraph from "../../components/layouts/website/Paragraph";

const About = () => {
    return (
        <WebsiteLayout page="about">
            <main className="">
                {/* Governing Board */}
                <h4 className="my-[4rem] uppercase text-red-600">
                    Governing Board
                </h4>
                <div className="sm:px-[8rem] mb-24">
                    {/* cards container */}
                    <div class="sm:grid grid-cols-3 gap-8 sm:m-0 m-4 ">
                        <div className="shadow-lg ">
                            <div className="bg-black overflow-hidden cursor-pointer">
                                <img
                                    src="images/about/our_team/Dr. Nana Adu Gyamfi.jpg"
                                    className="w-full transition duration-700 ease-in-out h-[20rem] hover:opacity-75 bg-black/20 hover:scale-110"
                                    alt=""
                                />
                            </div>
                            <div className="p-4 cursor-pointer bg-slate-100">
                                <Link href="/">
                                    <h2 className="text-primary">
                                        Dr. Edmumd Prempeh
                                    </h2>
                                    <p className="">
                                        Chairman, Board
                                    </p>
                                </Link>
                            </div>
                        </div>
                        <div className="shadow-lg ">
                            <div className="bg-black overflow-hidden cursor-pointer">
                                <img
                                    src="images/about/our_team/Mr. Philip Jude Mensah_ALT.jpg"
                                    className="w-full transition duration-700 ease-in-out h-[20rem] hover:opacity-75 bg-black/20 hover:scale-110"
                                    alt=""
                                />
                            </div>
                            <div className="p-4 bg-slate-100">
                                <Link href="/">
                                    <h2 className="text-primary">
                                        Mr. Philip Mensah
                                    </h2>
                                    <p className="">
                                        Member, Board
                                    </p>
                                </Link>
                            </div>
                        </div>
                        <div className=" shadow-lg">
                            <div className="bg-black overflow-hidden cursor-pointer">
                                <img
                                    src="images/about/our_team/Mr. Arnold Okai.jpg"
                                    className="w-full transition duration-700 ease-in-out h-[20rem] hover:opacity-75 bg-black/20 hover:scale-110"
                                    alt=""
                                />
                            </div>
                            <div className="p-4 bg-slate-100">
                                <Link href="/">
                                    <h2 className="text-primary">
                                        Mr. Arnold Tetteh Okai
                                    </h2>
                                    <p className="">
                                        Member, Board
                                    </p>
                                </Link>
                            </div>
                        </div>
                        <div className="shadow-lg ">
                            <div className="bg-black overflow-hidden cursor-pointer">
                                <img
                                    src="images/about/our_team/Ms. Sophia Kokor.jpg"
                                    className="w-full transition duration-700 ease-in-out h-[20rem] hover:opacity-75 bg-black/20 hover:scale-110"
                                    alt=""
                                />
                            </div>
                            <div className="p-3 bg-slate-100">
                                <Link href="/">
                                    <h2 className="text-primary">
                                        Ms. Sophia Kokor
                                    </h2>
                                    <p className="">
                                        Member, Board
                                    </p>
                                </Link>
                            </div>
                        </div>
                        <div className=" shadow-lg">
                            <div className="bg-black overflow-hidden cursor-pointer">
                                <img
                                    src="images/about/our_team/Mr. Frank Agyekum.jpg"
                                    className="w-full transition duration-700 ease-in-out h-[20rem] hover:opacity-75 bg-black/20 hover:scale-110"
                                    alt=""
                                />
                            </div>
                            <div className="p-3 bg-slate-100">
                                <Link href="/">
                                    <h2 className="text-primary">
                                        Mr. Frank Agyekum
                                    </h2>
                                    <p className="">
                                        Executive Secretary
                                    </p>
                                </Link>
                            </div>
                        </div>
                        <div className="shadow-lg ">
                            <div className="bg-black overflow-hidden cursor-pointer">
                                <img
                                    src="images/about/our_team/Mr. Arnold Okai.jpg"
                                    className="w-full transition duration-700 ease-in-out h-[20rem] hover:opacity-75 bg-black/20 hover:scale-110"
                                    alt=""
                                />
                            </div>
                            <div className="p-3 bg-slate-100">
                                <Link href="/">
                                    <h2 className="text-primary">
                                        Personality Name
                                    </h2>
                                    <p className="">Lorem ipsum</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* team */}
                <div className="mb-32 text-black sm:mx-20">
                    <div className="pb-[4rem] text-center ">
                        <h4 className="uppercase text-red-600">
                            Our Team
                        </h4>
                        <p className="text-black">Meet The Head Of Departments</p>
                    </div>
                    <div className="p-4 sm:flex">
                        <div className="sm:w-[25%] mx-2 mb-4 transition duration-700 ease-in-out shadow-lg hover:scale-110">
                            <Link href="/">
                                <div className="sm:h-[15rem]">
                                    <img
                                        src="images/about/our_team/LINDA ADOMAKO - KWABIA.jpg"
                                        className="w-full h-[15rem]"
                                        alt=""
                                    />
                                </div>
                                <div className="p-3 text-center bg-slate-100 sm:h-[7rem]">
                                    <Paragraph className="text-primary">
                                        Linda Adomako - Kwabia
                                    </Paragraph>
                                    <Paragraph>
                                        Human Resource & Administration
                                    </Paragraph>
                                </div>
                            </Link>
                        </div>
                        <div className="sm:w-[25%] mx-2 mb-4 transition duration-700 ease-in-out shadow-lg hover:scale-110">
                            <Link href="/">
                                <div className="sm:h-[15rem]">
                                    <img
                                        src="images/about/our_team/BERNARD MANU AFREH.jpg"
                                        className="w-full h-[15rem]"
                                        alt=""
                                    />
                                </div>
                                <div className="p-3 text-center bg-slate-100 sm:h-[7rem]">
                                    <Paragraph className="text-primary">
                                        Bernard Manu Afreh
                                    </Paragraph>
                                    <Paragraph className="text-[14tatrpx]">
                                        Planning, Research, Monitoring &
                                        Evaluation
                                    </Paragraph>
                                </div>
                            </Link>
                        </div>
                        <div className="sm:w-[25%] mx-2 mb-4 transition duration-700 ease-in-out shadow-lg hover:scale-110">
                            <Link href="/">
                                <div className="sm:h-[15rem]">
                                    <img
                                        src="images/about/our_team/PAA KWESI FYNN.jpg"
                                        className="w-full h-[15rem]"
                                        alt=""
                                    />
                                </div>
                                <div className="p-3 text-center bg-slate-100 sm:h-[7rem]">
                                    <Paragraph className="text-primary">
                                        Paa Kwesi Fynn
                                    </Paragraph>
                                    <Paragraph>Trade Investigation</Paragraph>
                                </div>
                            </Link>
                        </div>
                        <div className="sm:w-[25%] mx-2 mb-4 transition duration-700 ease-in-out shadow-lg hover:scale-110">
                            <Link href="/">
                                <div className="sm:h-[15rem]">
                                    <img
                                        src="images/about/our_team/NATHAN LARTEY.jpg"
                                        className="w-full h-[15rem]"
                                        alt=""
                                    />
                                </div>
                                <div className="p-3 text-center bg-slate-100 sm:h-[7rem]">
                                    <Paragraph className="text-primary">
                                        Nathan Lartey
                                    </Paragraph>
                                    <Paragraph>
                                        Management Information System
                                    </Paragraph>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </WebsiteLayout>
    );
};

export default About;
