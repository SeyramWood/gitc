import { WebsiteLayout } from "../../components/layouts";
import { Link } from "@inertiajs/inertia-react";

const About = () => {
    return (
        <WebsiteLayout page="about">
            <main className="text-lg text-grey">
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
                                    src="images/homePage/serviceOne.jpg"
                                    className=" object-cover h-[17rem] hover:opacity-75   bg-black/20"
                                    alt=""
                                />
                            </div>
                            <div className="p-3 bg-slate-100">
                                <p className="text-[1.3rem] text-[rgb(255,35,24)] cursor-pointer">
                                    Personality Name
                                </p>
                                <p className="mt-2">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Deserunt, officia cumque
                                    ratione incidunt ipsa dolor neque
                                </p>
                            </div>
                        </div>
                        <div className="transition duration-700 ease-in-out shadow-lg hover:scale-110">
                            <div className="bg-black cursor-pointer">
                                <img
                                    src="images/homePage/serviceOne.jpg"
                                    className=" object-cover h-[17rem] hover:opacity-75   bg-black/20"
                                    alt=""
                                />
                            </div>
                            <div className="p-3 bg-slate-100">
                                <p className="text-[1.3rem] text-[rgb(255,35,24)] cursor-pointer">
                                    Personality Name
                                </p>
                                <p className="mt-2">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Deserunt, officia cumque
                                    ratione incidunt ipsa dolor neque
                                </p>
                            </div>
                        </div>
                        <div className="transition duration-700 ease-in-out shadow-lg hover:scale-110">
                            <div className="bg-black cursor-pointer">
                                <img
                                    src="images/homePage/serviceOne.jpg"
                                    className=" object-cover h-[17rem] hover:opacity-75   bg-black/20"
                                    alt=""
                                />
                            </div>
                            <div className="p-3 bg-slate-100">
                                <p className="text-[1.3rem] text-[rgb(255,35,24)] cursor-pointer">
                                    Personality Name
                                </p>
                                <p className="mt-2">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Deserunt, officia cumque
                                    ratione incidunt ipsa dolor neque
                                </p>
                            </div>
                        </div>
                        <div className="transition duration-700 ease-in-out shadow-lg hover:scale-110">
                            <div className="bg-black cursor-pointer">
                                <img
                                    src="images/homePage/serviceOne.jpg"
                                    className=" object-cover h-[17rem] hover:opacity-75   bg-black/20"
                                    alt=""
                                />
                            </div>
                            <div className="p-3 bg-slate-100">
                                <p className="text-[1.3rem] text-[rgb(255,35,24)] cursor-pointer">
                                    Personality Name
                                </p>
                                <p className="mt-2">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Deserunt, officia cumque
                                    ratione incidunt ipsa dolor neque
                                </p>
                            </div>
                        </div>
                        <div className="transition duration-700 ease-in-out shadow-lg hover:scale-110">
                            <div className="bg-black cursor-pointer">
                                <img
                                    src="images/homePage/serviceOne.jpg"
                                    className=" object-cover h-[17rem] hover:opacity-75   bg-black/20"
                                    alt=""
                                />
                            </div>
                            <div className="p-3 bg-slate-100">
                                <p className="text-[1.3rem] text-[rgb(255,35,24)] cursor-pointer">
                                    Personality Name
                                </p>
                                <p className="mt-2">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Deserunt, officia cumque
                                    ratione incidunt ipsa dolor neque
                                </p>
                            </div>
                        </div>
                        <div className="transition duration-700 ease-in-out shadow-lg hover:scale-110">
                            <div className="bg-black cursor-pointer">
                                <img
                                    src="images/homePage/serviceOne.jpg"
                                    className=" object-cover h-[17rem] hover:opacity-75   bg-black/20"
                                    alt=""
                                />
                            </div>
                            <div className="p-3 bg-slate-100">
                                <p className="text-[1.3rem] text-[rgb(255,35,24)] cursor-pointer">
                                    Personality Name
                                </p>
                                <p className="mt-2">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Deserunt, officia cumque
                                    ratione incidunt ipsa dolor neque
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
                        <p className="">Meet The Head Of Departments</p>
                    </div>
                    <div className="p-2 sm:flex">
                        <div className="sm:w-[25%] mx-2 mb-4">
                            <Link href="/">
                                <div className="sm:h-[15rem]">
                                    <img
                                        src="images/homePage/serviceOne.jpg"
                                        className="h-[15rem]"
                                        alt=""
                                    />
                                </div>
                                <div className="p-3 bg-slate-100">
                                    <p>Head</p>
                                    <p>
                                        Lorem ipsum dolor, sit amet consectetur
                                        adipisicing elit. Doloribus ratione rem
                                        dolor dolorem ipsam !
                                    </p>
                                </div>
                            </Link>
                        </div>
                        <div className="sm:w-[25%] mx-2 mb-4">
                            <Link href="/">
                                <div className="sm:h-[15rem]">
                                    <img
                                        src="images/homePage/serviceOne.jpg"
                                        className="h-[15rem]"
                                        alt=""
                                    />
                                </div>
                                <div className="p-3 bg-slate-100">
                                    <p>Head</p>
                                    <p>
                                        Lorem ipsum dolor, sit amet consectetur
                                        adipisicing elit. Doloribus ratione rem
                                        dolor dolorem ipsam !
                                    </p>
                                </div>
                            </Link>
                        </div>
                        <div className="sm:w-[25%] mx-2 mb-4">
                            <Link href="/">
                                <div className="sm:h-[15rem]">
                                    <img
                                        src="images/homePage/serviceOne.jpg"
                                        className="h-[15rem]"
                                        alt=""
                                    />
                                </div>
                                <div className="p-3 bg-slate-100">
                                    <p>Head</p>
                                    <p>
                                        Lorem ipsum dolor, sit amet consectetur
                                        adipisicing elit. Doloribus ratione rem
                                        dolor dolorem ipsam !
                                    </p>
                                </div>
                            </Link>
                        </div>
                        <div className="sm:w-[25%] mx-2 mb-4">
                            <Link href="/">
                                <div className="sm:h-[15rem]">
                                    <img
                                        src="images/homePage/serviceOne.jpg"
                                        className="h-[15rem]"
                                        alt=""
                                    />
                                </div>
                                <div className="p-3 bg-slate-100">
                                    <p>Head</p>
                                    <p>
                                        Lorem ipsum dolor, sit amet consectetur
                                        adipisicing elit. Doloribus ratione rem
                                        dolor dolorem ipsam !
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
