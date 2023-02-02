import { Link } from "@inertiajs/inertia-react";

import { WebsiteLayout } from "../../components/layouts";
import Paragraph from "../../components/layouts/website/Paragraph";

const About = () => {
    return (
        <WebsiteLayout page="about">
            <main className="text-lg text-grey">
                {/* Governing Board */}
                <p className="my-[6rem] text-5xl font-bold text-center text-primary">
                    Governing Board
                </p>
                <div className="sm:px-[8rem] mb-32">
                    {/* cards container */}
                    <div class="sm:grid grid-cols-3 gap-8 sm:m-0 m-4 ">
                        <div className="transition duration-700 ease-in-out shadow-lg hover:scale-110">
                            <div className="bg-black cursor-pointer">
                                <img
                                    src="images/about/our_team/Dr. Nana Adu Gyamfi.jpg"
                                    className="w-full h-[20rem] hover:opacity-75 bg-black/20"
                                    alt=""
                                />
                            </div>
                            <div className="p-3 bg-slate-100">
                                <Paragraph className="text-primary">
                                    Dr. Edmumd Prempeh
                                </Paragraph>
                                <Paragraph className="mt-2">
                                    Chairman, Board
                                </Paragraph>
                            </div>
                        </div>
                        <div className="transition duration-700 ease-in-out shadow-lg hover:scale-110">
                            <div className="bg-black cursor-pointer">
                                <img
                                    src="images/about/our_team/Mr. Philip Jude Mensah_ALT.jpg"
                                    className="w-full h-[20rem] hover:opacity-75 bg-black/20"
                                    alt=""
                                />
                            </div>
                            <div className="p-3 bg-slate-100">
                                <Paragraph className="cursor-pointer text-primary">
                                    Mr. Philip Mensah
                                </Paragraph>
                                <Paragraph className="mt-2">
                                    Member, Board
                                </Paragraph>
                            </div>
                        </div>
                        <div className="transition duration-700 ease-in-out shadow-lg hover:scale-110">
                            <div className="bg-black cursor-pointer">
                                <img
                                    src="images/about/our_team/Mr. Arnold Okai.jpg"
                                    className="w-full h-[20rem] hover:opacity-75 bg-black/20"
                                    alt=""
                                />
                            </div>
                            <div className="p-3 bg-slate-100">
                                <Paragraph className="cursor-pointer text-primary">
                                    Mr. Arnold Tetteh Okai
                                </Paragraph>
                                <Paragraph className="mt-2">
                                    Member, Board
                                </Paragraph>
                            </div>
                        </div>
                        <div className="transition duration-700 ease-in-out shadow-lg hover:scale-110">
                            <div className="bg-black cursor-pointer">
                                <img
                                    src="images/about/our_team/Ms. Sophia Kokor.jpg"
                                    className="w-full h-[20rem] hover:opacity-75 bg-black/20"
                                    alt=""
                                />
                            </div>
                            <div className="p-3 bg-slate-100">
                                <Paragraph className="cursor-pointer text-primary">
                                    Ms. Sophia Kokor
                                </Paragraph>
                                <Paragraph className="mt-2">
                                    Member, Board
                                </Paragraph>
                            </div>
                        </div>
                        <div className="transition duration-700 ease-in-out shadow-lg hover:scale-110">
                            <div className="bg-black cursor-pointer">
                                <img
                                    src="images/about/our_team/Mr. Frank Agyekum.jpg"
                                    className="w-full h-[20rem] hover:opacity-75 bg-black/20"
                                    alt=""
                                />
                            </div>
                            <div className="p-3 bg-slate-100">
                                <Paragraph className="cursor-pointer text-primary">
                                    Mr. Frank Agyekum
                                </Paragraph>
                                <Paragraph className="mt-2">
                                    Executive Secretary
                                </Paragraph>
                            </div>
                        </div>
                        <div className="transition duration-700 ease-in-out shadow-lg hover:scale-110">
                            <div className="bg-black cursor-pointer">
                                <img
                                    src="images/about/our_team/Mr. Arnold Okai.jpg"
                                    className="w-full h-[20rem] hover:opacity-75 bg-black/20"
                                    alt=""
                                />
                            </div>
                            <div className="p-3 bg-slate-100">
                                <p className="text-[1.3rem] text-[rgb(255,35,24)] cursor-pointer">
                                    Personality Name
                                </p>
                                <p className="mt-2">Lorem ipsum</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* team */}
                <div className="mb-32 text-black sm:mx-20">
                    <div className="pb-[6rem] text-center ">
                        <h3 className="text-5xl font-bold text-primary ">
                            Our Team
                        </h3>
                        <p className="">Meet The Head Of Departments</p>
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
