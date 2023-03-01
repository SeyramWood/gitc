import React, { useEffect, useState } from "react";
import { WebsiteLayout } from "../../components/layouts";
import HeadingPrimary from "../../components/layouts/website/HeadingPrimary";
import Paragraph from "../../components/layouts/website/Paragraph";
import AOS from "aos";
import { Link } from "@inertiajs/inertia-react";
import "aos/dist/aos.css";
import ButtonOutline from "../../components/layouts/website/ButtonOutline";
import HeadingSecondary from "../../components/layouts/website/HeadingSecondary";


const AboutMessage = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <WebsiteLayout page="story">
            <div className="bg-white">

                <div className="sm:flex text-center sm:text-left p-4 pt-14 bg-faded">
                    <div className="sm:w-[20%]  sm:mx-3">
                        <h4 className="text-5xl text-red-600">
                            Our Story
                        </h4>
                    </div>
                    <div className="my-4 sm:w-[80%]  ">
                        <p className="mb-6 text-black">
                            Ghana International Trade Commission (GITC), was
                            established in September 2016 under
                            Parliamentary Act 926 to provide for the regulation
                            of Ghana’s International Trade in conformity with
                            the rules and regulations of the world trade
                            system and related matters.
                        </p>
                        <p className="mb-6 text-black">
                            The World Trade Organization (WTO) provides the forum
                            for a multilateral rule-based global system that ensure
                            fairness in global trade. Yet not all international trade is
                            rule based us some countries support their domestic
                            industries to produce and be competitive in international
                            markets.Such Support provided through subsidies may
                            make the exported products cheaper, which hurts
                            domestic industries producing similar products.
                        </p>
                        <p className="mb-6 text-black">
                            With in the frame work of the WTO countries have the
                            policy and legal space to protect their domestic industries
                            from such unfair trade practices. Many Countries in the
                            developed would have trade remedy institutions, such as
                            the GITC established with the view to provide impartial
                            investigations, adjudication and imposition of measures to
                            protect domestic industries from such harmful effects of
                            international trade.
                        </p>
                        <p className="mb-6 text-black">
                            However, in Africa the trade remedy laws and
                            Investigating authorities are in Egypt, SouthAfrica,
                            Morocco, Tunisia, Mauritius and Madagascar. In the
                            developed world, however, such institutions have existed
                            for along time such as in the United States where the U.S
                            International Trade Commission (USITC) was set up in
                            September 1916.
                        </p>
                    </div>
                </div>

                {/* values */}
                <div className="mt-32" style={{ backgroundImage: "url('images/bg.jpg')",objectFit:"cover" }}>
                    <div className="p-10 md:flex justify-center bg-white/70 ">
                        <div className="flex p-2 my-5">
                            <div className="p-3 w-[30%]">
                                <div className="sm:bg-black/5" style={{ borderRadius: "100%" }}>
                                    <img
                                        src="images/homePage/objectivity.png"
                                        alt="Objectivity"
                                        className="object-contain -translate-y-5 -translate-x-1"
                                    />
                                </div>
                            </div>
                            <div className="w-[70%] sm:pl-5">
                                <h2 className="">Objectivity</h2>
                                <p className="">
                                    To ensure equality and fairness in
                                    the application of measures affecting
                                    international trade and the use of world
                                    trade measures.
                                </p>
                            </div>
                        </div>

                        <div className="flex p-2 my-5">
                            <div className="p-3 w-[30%] ">
                                <div className="sm:bg-black/5" style={{ borderRadius: "100%" }}>
                                    <img
                                        src="images/homePage/professionalism.png"
                                        alt="professional"
                                        className="object-contain -translate-y-3 -translate-x-5"
                                    />
                                </div>
                            </div>
                            <div className="w-[70%] ">
                                <h2 className="">Professionalism</h2>

                                <p>
                                    To ensure a high level of competence and efficiency in
                                    applying
                                    international trade rules
                                    and regulations as under the World Trade Organization (WTO)
                                    provisions.
                                </p>
                            </div>
                        </div>

                        <div className="flex p-2 my-5 ">
                            <div className="p-3 w-[35%] ">
                                <div className="sm:bg-black/5" style={{ borderRadius: "100%" }}>
                                    <img
                                        src="images/homePage/integrity.png"
                                        alt="Integrity"
                                        className="object-contain -translate-y-3 -translate-x-1 "
                                    />
                                </div>
                            </div>
                            <div className="w-[65%] ">
                                <h2 className="">Integrity</h2>
                                <p>
                                    To ensure absolute neutrality and consistency in the
                                    execution of the mandate of the Commission.
                                </p>
                            </div>
                        </div>

                        <div className="flex p-2 my-5">
                            <div className="p-3 w-[30%] ">
                                <div className="sm:bg-black/5" style={{ borderRadius: "100%" }}>
                                    <img
                                        src="images/homePage/search.png"
                                        alt="Integrity"
                                        className="object-contain -translate-y-3 -translate-x-1 "
                                    />
                                </div>
                            </div>
                            <div className="w-[70%] ">
                                <h2 className="">Transparency</h2>
                                <p>
                                    To ensure that the commission operates on an
                                    open and fair terrain by providing a level playing
                                    field in its dealings with all parties.
                                </p>
                            </div>
                        </div>
                       
                    </div>
                </div>

                {/* story */}
                <div className="my-32">
                    <div className="mb-16">
                        <div className="flex flex-col-reverse justify-center sm:flex-row ">
                            <div className="text-white  bg-black sm:w-[50%]">
                                <div
                                    className="container pt-7 pb-14  sm:px-20 "
                                    data-aos="fade-up"
                                    data-aos-duration="2000"
                                >
                                    <h2 className="text-[3rem] text-white sm:pt-10 pb-6 font-bold">
                                        We ensure:
                                    </h2>
                                    <ul className="sm:text-[1.1rem] list-disc pb-5 pl-4 ">
                                        <li className="py-4">
                                            Ghana’s compliance with
                                            international trade rules and
                                            regulations;
                                        </li>
                                        <li className="py-3">
                                            Fairness, efficiency,
                                            transparency and objectivity in
                                            the application of measures
                                            affecting international trade
                                            rules and the use of world trade
                                            regulations;
                                        </li>
                                        <li className="py-3">
                                            Fair competition for persons
                                            engaged in domestic production
                                            and international trade.
                                        </li>
                                        <li className="pt-3">
                                            Protection of the domestic
                                            market from the impact of unfair
                                            trade practices in the course of
                                            international trade.
                                        </li>
                                    </ul>

                                    {/* <Link href="/story">
                                        <ButtonOutline className="sm:w-[14rem] mb-8">
                                            Read Our Story
                                        </ButtonOutline>
                                    </Link> */}
                                </div>
                            </div>
                            <div className="sm:w-[50%]">
                                <img
                                    className="sm:h-[100%] "
                                    src="images/homePage/storyTwo.jpg"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="flex justify-center flex-col  sm:flex-row">
                            <div className="sm:w-[50%]">
                                <img
                                    className=" sm:h-[100%]"
                                    src="images/about/hand.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="sm:w-[50%]">
                                <div
                                    className="bg-primary text-white px-16 py-7 sm:h-[35rem]"
                                    // data-aos="fade-up"
                                    // data-aos-duration="2000"

                                >
                                    <h4 className="text-left text-white font-bold">
                                        Mission
                                    </h4>
                                    <p className="mt-3 mb-4 text-[1.1rem] text-white">

                                        To promote Ghana’s international
                                        trade through the application of fair,
                                        efficient,transparent, and objective
                                        measures affecting international
                                        trade in conformity with World Trade Organization rules and regulations.

                                    </p>

                                    <h4 className="text-left font-bold text-white pt-6">
                                        Vission
                                    </h4>
                                    <p className=" text-[1.1rem] text-white">
                                        To become world-class fair trade regulatory agency.
                                    </p>
                                  
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </WebsiteLayout>
    );
}

export default AboutMessage;