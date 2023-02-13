import { Link } from "@inertiajs/inertia-react";

import { WebsiteLayout } from "../../components/layouts";
import Paragraph from "../../components/layouts/website/Paragraph";

const About = () => {
    return (
        <WebsiteLayout page="about">
            <main className="">
                {/* Governing Board */}
                <h2 className="my-[4rem] sm:text-[4rem] text-center uppercase text-red-600">
                    Governing Board
                </h2>
                <div className="sm:px-[8rem] mb-32">
                    {/* cards container */}
                    <div class="sm:grid grid-cols-3 gap-16 sm:m-0 m-4 ">
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
                <div className="mb-32  text-black sm:mx-20">
                    <div className="pb-[2rem]  text-center ">
                        <h2 className="uppercase text-red-600 text-center sm:text-[4rem]">
                            Our Team
                        </h2>
                        <p className="text-black">Meet The Heads Of Departments</p>
                    </div>
                    <div className="p-4 gap-7 sm:flex">
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
                                    <p className="font-semibold">
                                        Linda Adomako - Kwabia
                                    </p>
                                    <p>
                                        Human Resource & Administration
                                    </p>
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
                                    <p className="font-semibold">
                                        Bernard Manu Afreh
                                    </p>
                                    <p className="text-[16px]">
                                        Planning, Research, Monitoring &
                                        Evaluation
                                    </p>
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
                                    <p className="font-semibold">
                                        Paa Kwesi Fynn
                                    </p>
                                    <p>Trade Investigation</p>
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
                                    <p className="font-semibold">
                                        Nathan Lartey
                                    </p>
                                    <p>
                                        Management Information System
                                    </p>
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
