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
            <div className="sm:flex text-center sm:text-left p-4 mt-6 mb-32 bg-slate-300">
                <div className="sm:w-[20%] sm:mt-7 sm:mx-3">
                    <HeadingPrimary className="text-black ">
                        Our Story
                    </HeadingPrimary>
                </div>
                <div className="my-4 sm:w-[80%]  ">
                    <Paragraph className="mb-6 text-black">
                        Ghana International Trade Commission (GITC), was
                        established in September 2016 under
                        Parliamentary Act 926 to provide for the regulation
                        of Ghana’s International Trade inconformity with
                        the rules and regulations of the world trade
                        system and related matters.
                    </Paragraph>
                    <Paragraph className="mb-6 text-black">
                        The World Trade Organization (WTO) provides the forum
                        for a multilateral rule-based global system that ensure
                        fairness in global trade. Yet not all international trade is
                        rule based us some countries support their domestic
                        industries to produce and be competitive in international
                        markets.Such Support provided through subsidies may
                        make the exported products cheaper, which hurts
                        domestic industries producing similar products.
                    </Paragraph>
                    <Paragraph className="mb-6 text-black">
                        With in the frame work of the WTO countries have the
                        policy and legal space to protect their domestic industries
                        from such unfair trade practices. Many Countries in the
                        developed would have trade remedy institutions, such as
                        the GITC established with the view to provide impartial
                        investigations, adjudication and imposition of measures to
                        protect domestic industries from such harmful effects of
                        international trade.
                    </Paragraph>
                    <Paragraph className="mb-6 text-black">
                        However, in Africa the trade remedy laws and
                        Investigating authorities are in Egypt, SouthAfrica,
                        Morocco, Tunisia, Mauritius and Madagascar. In the
                        developed world, however, such institutions have existed
                        for along time such as in the United States where the U.S
                        International Trade Commission (USITC) was set up in
                        September 1916.
                    </Paragraph>
                </div>
            </div>
            {/* values */}
            <div className="mb-32" style={{ backgroundImage: "url('images/about/bg.jpg')" }}>
                <div className="p-12 md:flex justify-center bg-[rgba(10,10,10,0.51)] text-white">
                    <div className="my-5 sm:flex">
                        <div className="flex p-3 sm:w-[80%] w-[40%] ">
                            <img
                                src="images/homePage/objectivity.png"
                                alt="Objectivity"
                                className="object-contain"
                            />
                        </div>
                        <div className="">
                            
                            <HeadingSecondary className="text-white">
                                Objectivity
                            </HeadingSecondary>
                            <Paragraph className="text-white" >
                                To ensure equality and fairness in the
                                application of measures affecting
                                international trade and the use of world
                                trade regulations.
                            </Paragraph>
                        </div>
                    </div>

                    <div className="my-5 sm:flex">
                        <div className="flex p-3 w-[40%] sm:w-[80%] ">
                            <img
                                src="images/homePage/professionalism.png"
                                alt="professional"
                                className="object-contain"
                            />
                        </div>
                        <div className="">
                            <h1 className="my-4 text-3xl text-white">
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
                        <div className="flex p-3 w-[40%] sm:w-[80%] ">
                            <img
                                src="images/homePage/integrity.png"
                                alt="Integrity"
                                className="object-contain"
                            />
                        </div>
                        <div className="">
                            <h1 className="my-4 text-3xltext-white">
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
            {/* story */}
            <div className="mb-32">
                <div className="mb-16">
                    <div className="flex flex-col-reverse justify-center sm:flex-row ">
                        <div className="text-white  bg-black sm:w-[50%]">
                            <div
                                className="px-6 py-12 text-center"
                                data-aos="fade-up"
                                data-aos-duration="2000"
                            >
                                <h1 className="text-[3rem]">We ensure:</h1>
                                <div className="sm:text-[1.3rem]">
                                    <p className="py-4">
                                        (a)Ghana’s compliance with
                                        international trade rules and
                                        regulations;
                                    </p>
                                    <p className="py-3">
                                        (b)Fairness, efficiency,
                                        transparency and objectivity in the
                                        application of measures affecting
                                        international trade rules and the
                                        use of world trade regulations;
                                    </p>
                                    <p className="py-3">
                                        (c)Fair ompetition for persons
                                        engaged in domestic production and
                                        international trade.
                                    </p>
                                    <p className="pt-3">
                                        (d)Protection of the domestic market
                                        from the impact of unfair trade
                                        practices in the course of
                                        international trade.
                                    </p>
                                </div>
                                <Link href="/">
                                    <ButtonOutline className="block p-4 mx-auto mt-3 border border-white rounded-full hover:border-2">
                                        Read Our Story
                                    </ButtonOutline>
                                </Link>
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
                                src="images/homePage/storyOne.jpg"
                                alt=""
                            />
                        </div>
                        <div className="sm:w-[50%]">
                            <div
                                className="bg-primary text-white px-6 py-12 sm:h-[35rem]"
                                data-aos="fade-up"
                                data-aos-duration="2000"

                            >
                                <p className="text-center text-5xl font-bold">
                                    {/*DID YOU KNOW THAT*/}
                                    Mission
                                </p>
                                <p className="my-5 font-bold text-center sm:text-2xl text-white">

                                    To promote Ghana’s international
                                    trade through the application of fair,
                                    efficient,transparent, and objective
                                    measures affecting international
                                    trade in conformity with World Trade Organization rules and regulations.


                                    {/*GITC is among seven trade remedy*/}
                                    {/*institutions and investigating*/}
                                    {/*authorities in Africa.*/}
                                </p>

                                <p className="text-center text-5xl font-bold">
                                    {/*DID YOU KNOW THAT*/}
                                    Vission
                                </p>
                                <p className="mb-5 text-center sm:mb-14 sm:text-lg">

                                    To become world-class fair trade regulatory agency.

                                    {/*These other African countries are:*/}
                                    {/*Egypt,South Africa, Morocco,*/}
                                    {/*Tunisia,Mauritius, and Madagascar. These*/}
                                    {/*other African countries are: Egypt,South*/}
                                    {/*Africa, Morocco, Tunisia,Mauritius, and*/}
                                    {/*Madagascar.*/}
                                </p>
                                <Link href="/">
                                    <ButtonOutline className="block p-4 mx-auto mt-3 border border-white rounded-full hover:border-2">
                                        Read Our Story
                                    </ButtonOutline>
                                </Link>
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