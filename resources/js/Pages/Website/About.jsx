import { WebsiteLayout } from "../../components/layouts";
import { Link } from "@inertiajs/inertia-react";
import Paragraph from "../../components/layouts/website/Paragraph";

const About = () => {
    return (
        <WebsiteLayout page="about">
            <main className="text-lg text-grey bg-white">
                {/* Governing Board */}
                <p className="my-10 text-5xl font-bold text-center text-primary">
                    Governing Board
                </p>
                <div className="sm:px-[4rem] mb-32">
                    {/* cards container */}
                    <div class="sm:grid grid-cols-3 sm:gap-10 mt-3 ">
                        <div className="transition duration-700 ease-in-out shadow-lg hover:scale-110">
                            <div className="bg-black cursor-pointer">
                                <img
                                    src="images/about/our_team/Dr. Nana Adu Gyamfi.jpg"
                                    className="sm:w-[24rem] h-[23rem] hover:opacity-75 bg-black/20"
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
                                    className="sm:w-[24rem] h-[23rem] hover:opacity-75 bg-black/20"
                                    alt=""
                                />
                            </div>
                            <div className="p-3 bg-slate-100">
                                <Paragraph className="text-primary cursor-pointer">
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
                                    className="sm:w-[24rem] h-[23rem] hover:opacity-75 bg-black/20"
                                    alt=""
                                />
                            </div>
                            <div className="p-3 bg-slate-100">
                                <Paragraph className="text-primary cursor-pointer">
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
                                    className="sm:w-[24rem] h-[23rem] hover:opacity-75 bg-black/20"
                                    alt=""
                                />
                            </div>
                            <div className="p-3 bg-slate-100">
                                <Paragraph className="text-primary cursor-pointer">
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
                                    className="sm:w-[24rem] h-[23rem] hover:opacity-75 bg-black/20"
                                    alt=""
                                />
                            </div>
                            <div className="p-3 bg-slate-100">
                                <Paragraph className="text-primary cursor-pointer">
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
                                    className="sm:w-[24rem] h-[23rem] hover:opacity-75 bg-black/20"
                                    alt=""
                                />
                            </div>
                            <div className="p-3 bg-slate-100">
                                <p className="text-[1.3rem] text-[rgb(255,35,24)] cursor-pointer">
                                    Personality Name
                                </p>
                                <p className="mt-2">
                                    Lorem ipsum
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* values */}
                <div
                    class="mb-32"
                    style={{ backgroundImage: "url('images/about/bg.jpg')" }}
                >
                    <div className="p-12 md:flex justify-center bg-[rgba(255,34,24,0.51)] text-white">
                        <div className="my-5 sm:flex">
                            <div className="flex p-3 xs:w-[30%] sm:w-[80%] ">
                                <img
                                    src="images/homePage/objectivity.png"
                                    alt="Objectivity"
                                    className="object-contain"
                                />
                            </div>
                            <div className="">
                                <h1 className="text-[30px] text-white">
                                    Objectivity
                                </h1>
                                <p className="">
                                    To ensure equality and fairness in the
                                    application of measures affecting
                                    international trade and the use of world
                                    trade regulations.
                                </p>
                            </div>
                        </div>

                        <div className="my-5 sm:flex">
                            <div className="flex p-3 xs:w-[30%] sm:w-[80%] ">
                                <img
                                    src="images/homePage/professionalism.png"
                                    alt="professional"
                                    className="object-contain"
                                />
                            </div>
                            <div className="">
                                <h1 className="text-[30px] text-white">
                                    Professionalism
                                </h1>
                                <p>
                                    To ensure a high level of competence and
                                    efficiency in applying international trade
                                    rules and regulations as under the World
                                    Trade Organization (WTO) provisions.
                                </p>
                            </div>
                        </div>
                        <div className="my-5 sm:flex">
                            <div className="flex p-3 xs:w-[30%] sm:w-[80%] ">
                                <img
                                    src="images/homePage/integrity.png"
                                    alt="Integrity"
                                    className="object-contain"
                                />
                            </div>
                            <div className="">
                                <h1 className="text-[30px] text-white">
                                    Integrity
                                </h1>
                                <p>
                                    To ensure absolute neutrality and
                                    consistency in the execution of the mandate
                                    of the Commission.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* team */}
                <div className="mb-32 text-black sm:mx-7">
                    <div className="pb-10 text-center ">
                        <h3 className="text-5xl font-bold text-primary ">
                            Our Team
                        </h3>
                        <p className="">
                            Meet The Head Of Departments
                        </p>
                    </div>
                    <div className="p-2 sm:flex">
                        <div className="sm:w-[25%] mx-2 mb-4">
                            <Link href="/">
                                <div className="sm:h-[15rem]">
                                    <img
                                        src="images/about/our_team/LINDA ADOMAKO - KWABIA.jpg"
                                        className="sm:w-[20rem] h-[15rem]"
                                        alt=""
                                    />
                                </div>
                                <div className="p-3 text-center bg-slate-100">
                                    <Paragraph className="text-primary">
                                        Linda Adomako - Kwabia

                                    </Paragraph>
                                    <Paragraph>
                                        Human Resource & Administration
                                    </Paragraph>
                                </div>
                            </Link>
                        </div>
                        <div className="sm:w-[25%] mx-2 mb-4">
                            <Link href="/">
                                <div className="sm:h-[15rem]">
                                    <img
                                        src="images/about/our_team/BERNARD MANU AFREH.jpg"
                                        className="sm:w-[20rem] h-[15rem]"
                                        alt=""
                                    />
                                </div>
                                <div className="p-3 text-center bg-slate-100">
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
                        <div className="sm:w-[25%] mx-2 mb-4">
                            <Link href="/">
                                <div className="sm:h-[15rem]">
                                    <img
                                        src="images/about/our_team/PAA KWESI FYNN.jpg"
                                        className="sm:w-[20rem] h-[15rem]"
                                        alt=""
                                    />
                                </div>
                                <div className="p-3 text-center bg-slate-100">
                                    <Paragraph className="text-primary">
                                        Paa Kwesi Fynn
                                    </Paragraph>
                                    <Paragraph>
                                        Trade Investigation
                                    </Paragraph>
                                </div>
                            </Link>
                        </div>
                        <div className="sm:w-[25%] mx-2 mb-4">
                            <Link href="/">
                                <div className="sm:h-[15rem]">
                                    <img
                                        src="images/about/our_team/NATHAN LARTEY.jpg"
                                        className="sm:w-[20rem] h-[15rem]"
                                        alt=""
                                    />
                                </div>
                                <div className="p-3 text-center bg-slate-100">
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
