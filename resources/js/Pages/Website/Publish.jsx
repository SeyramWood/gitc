import { WebsiteLayout } from "../../components/layouts";
import { Link } from "@inertiajs/inertia-react";
import Paragraph from "../../components/layouts/website/Paragraph";
import HeadingPrimary from "../../components/layouts/website/HeadingPrimary";
import HeadingSecondary from "../../components/layouts/website/HeadingSecondary";
const Publish = () => {
    return (
        <WebsiteLayout page="home">
            <main className="text-lg text-grey bg-white">
                {/* Governing Board */}
                <p className="my-10 text-3xl font-bold text-center text-primary">
                    PRESS RELEASE & SPEECHES
                </p>

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
                            Our Gallery
                        </h3>
                        <p className="uppercase">Meetings, workshop, courtesy calls</p>
                    </div>
                    <div className="p-2 md:flex ">
                        <div className="md:w-[35%] mx-2 mb-4 transition duration-700 ease-in-out shadow-lg hover:scale-110">
                            <Link href="/">
                                <div className="sm:h-[20rem]">
                                    <img
                                        src="images/publish/publish.jpg"
                                        className="h-[20rem]"
                                        alt=""
                                    />
                                </div>
                                <div className="p-3 bg-slate-100">
                                    <p className="text-primary">COURTESYCALLTO
                                        GHANASTATISTICIALSERVICE
                                        </p>
                                    <p className="text-sm">
                                        1ST JUNE,2022
                                    </p>
                                </div>
                            </Link>
                        </div>
                        <div className="sm:w-[35%] mx-2 mb-4 transition duration-700 ease-in-out shadow-lg hover:scale-110">
                            <Link href="/">
                                <div className="sm:h-[20rem]">
                                    <img
                                        src="images/publish/publish1.jpg"
                                        className="h-[20rem]"
                                        alt=""
                                    />
                                </div>
                                <div className="p-3 bg-slate-100">
                                    <p className="text-primary">COURTESYCALLTO
                                        GHANAREVENUEAUTHORITY
                                        </p>
                                    <p className="text-sm">
                                        2ND JUNE,2022
                                    </p>
                                </div>
                            </Link>
                        </div>
                        <div className="sm:w-[35%] mx-2 mb-4 transition duration-700 ease-in-out shadow-lg hover:scale-110">
                            <Link href="/">
                                <div className="sm:h-[20rem]">
                                    <img
                                        src="images/publish/publish2.jpg"
                                        className="h-[20rem]"
                                        alt=""
                                    />
                                </div>
                                <div className="p-3 bg-slate-100">
                                    <p className="text-primary">ASSOCIATIONOFGHANA
                                        INDUSTRIESCOURTESYCALL
                                        TOGITC
                                        </p>
                                    <p className="text-sm">
                                        27TH MAY,2022
                                    </p>
                                </div>
                            </Link>
                        </div>

                    </div>
                    <div className="p-2 md:flex ">
                        <div className="md:w-[35%] mx-2 mb-4 transition duration-700 ease-in-out shadow-lg hover:scale-110">
                            <Link href="/">
                                <div className="sm:h-[20rem]">
                                    <img
                                        src="images/publish/publish3.jpg"
                                        className="h-[20rem]"
                                        alt=""
                                    />
                                </div>
                                <div className="p-3 bg-slate-100">
                                    <p className="text-primary">HON.DEPUTYMINISTER(TRADE)
                                        COURTESYCALLTOGITC

                                        </p>
                                    <p className="text-sm">
                                        19TH MAY,2022
                                    </p>
                                </div>
                            </Link>
                        </div>
                        <div className="sm:w-[35%] mx-2 mb-4 transition duration-700 ease-in-out shadow-lg hover:scale-110">
                            <Link href="/">
                                <div className="sm:h-[20rem]">
                                    <img
                                        src="images/publish/publish4.jpg"
                                        className="h-[20rem]"
                                        alt=""
                                    />
                                </div>
                                <div className="p-3 bg-slate-100">
                                    <p className="text-primary">TRAININGSESSION
                                        WITHBMWK

                                        </p>
                                    <p className="text-sm">
                                        19TH-29TH APRIL,2022
                                    </p>
                                </div>
                            </Link>
                        </div>
                        <div className="sm:w-[35%] mx-2 mb-4 transition duration-700 ease-in-out shadow-lg hover:scale-110">
                            <Link href="/">
                                <div className="sm:h-[20rem]">
                                    <img
                                        src="images/publish/publish5.jpg"
                                        className="h-[20rem]"
                                        alt=""
                                    />
                                </div>
                                <div className="p-3 bg-slate-100">
                                    <p className="text-primary">GITC RETREATWITH
                                        STAFF,TECHNICALCOMMITTEE ANDGOVERNINGBOARD

                                        </p>
                                    <p className="text-sm">
                                        17TH-18TH MARCH,2022
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

export default Publish;
