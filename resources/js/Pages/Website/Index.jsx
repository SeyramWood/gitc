import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { WebsiteLayout } from "../../components/layouts";

const Index = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    let [open, setOpen] = useState(false);

    // dropdowns
    let [aboutDropDown, setAboutDropDown] = useState(false);
    let [serviceDropDown, setServiceDropDown] = useState(false);

    // slide images
    const slide = [
        {
            img: "https://baconmockup.com/640/303",
        },
        {
            img: "https://baconmockup.com/640/301",
        },
        {
            img: "https://baconmockup.com/640/306",
        },
    ];

    // navigation functions
    const [currentIndex, setCurrentIndex] = useState(0);
    const prev = () => {
        const firstSlide = currentIndex === 0;
        const newIndex = firstSlide ? slide.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };
    const next = () => {
        const lastSlide = currentIndex === slide.length - 1;
        const newIndex = lastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <WebsiteLayout page="home">
            {/* values section */}
            <div className="bg-slate-100">
                <div
                    className="container justify-center p-12 md:flex"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                >
                    <div className="my-5 sm:flex">
                        <div className="flex p-3 xs:w-[30%] sm:w-[80%] ">
                            <img
                                src="images/homePage/objectivity.png"
                                alt="Objectivity"
                                className="object-contain"
                            />
                        </div>
                        <div className="">
                            <h1 className="text-[30px] text-[rgb(255,0,0)]">
                                Objectivity
                            </h1>
                            <p className="">
                                To ensure equality and fairness in the
                                application of measures affecting international
                                trade and the use of world trade regulations.
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
                            <h1 className="text-[30px] text-[rgb(255,0,0)]">
                                Professionalism
                            </h1>
                            <p>
                                To ensure a high level of competence and
                                efficiency in applying international trade rules
                                and regulations as under the World Trade
                                Organization (WTO) provisions.
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
                            <h1 className="text-[30px] text-[rgb(255,0,0)]">
                                Integrity
                            </h1>
                            <p>
                                To ensure absolute neutrality and consistency in
                                the execution of the mandate of the Commission.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* services section*/}
            <div className="container mx-auto ">
                <div className="mt-24 text-center">
                    <h3 className="text-[60px] xs:text-[30px] font-bold text-[rgb(255,0,0)] ">
                        Services We Provide
                    </h3>
                    <p className="mb-12">COVERED IN THESE AREAS</p>
                </div>

                <div
                    className="justify-center mb-16 md:flex"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                >
                    <div className="sm:w-[25%]">
                        <div className="">
                            <img
                                src="images/homePage/serviceOne.jpg"
                                className="w-full object-cover h-[15rem]"
                                alt=""
                            />
                        </div>
                        <div className="my-9">
                            <h1 className="text-[30px] font-bold text-[rgb(255,0,0)]">
                                Trade Remedies
                            </h1>
                            <p className="text-[16px]">
                                To ensure equality and fairness in the
                                application of measures affecting international
                                trade and the use of world trade regulations.
                            </p>
                            <p className="pt-4 text-red-600 hover:text-red-300">
                                Read More
                            </p>
                        </div>
                    </div>
                    <div className="sm:w-[25%] ">
                        <div className="">
                            <img
                                src="images/homePage/serviceTwo.jpg"
                                className="w-full object-cover h-[15rem]"
                                alt=""
                            />
                        </div>
                        <div className="my-9 ">
                            <h1 className="text-[30px] font-bold text-[rgb(255,0,0)]">
                                Dispute Settlement
                            </h1>
                            <p className="text-[16px]">
                                Providing actions to resolve issues arising out
                                of a member-state violating the rules and
                                regulationso f the World Trade Organization.
                            </p>
                            <p className="pt-4 text-red-600 hover:text-red-300">
                                Read More
                            </p>
                        </div>
                    </div>
                    <div className="sm:w-[25%]  ">
                        <div className="">
                            <img
                                src="images/homePage/serviceThree.jpg"
                                className="w-full object-cover h-[15rem]"
                                alt=""
                            />
                        </div>
                        <div className="my-9">
                            <h1 className="text-[30px] font-bold text-[rgb(255,0,0)]">
                                Tarrif Review
                            </h1>
                            <p className="text-[16px]">
                                Providing a review of customs duty that affects
                                the production and competitiveness of goods in
                                relation to the domestic producer or domestic
                                industry
                            </p>
                            <p className="pt-4 text-red-600 hover:text-red-300">
                                Read More
                            </p>
                        </div>
                    </div>
                    <div className="sm:w-[25%] ">
                        <div className="">
                            <img
                                src="images/homePage/serviceFour.jpg"
                                className="w-full object-cover h-[15rem]"
                                alt=""
                            />
                        </div>
                        <div className="my-9">
                            <h1 className="text-[30px] font-bold text-[rgb(255,0,0)]">
                                Research
                            </h1>
                            <p className="text-[16px]">
                                The Commission is to study, identify, and
                                recommend to the Minister of Trade and Industry
                                tariff levels for specific sectors of the
                                economy with due regard to the effective rate of
                                protection.
                            </p>
                            <p className="pt-4 text-red-600 hover:text-red-300">
                                Read More
                            </p>
                        </div>
                    </div>
                </div>

                <button className="block border p-4 rounded-full mx-auto hover:text-white hover:bg-[rgb(255,35,34)]">
                    {" "}
                    View More
                </button>
            </div>

            {/* story section*/}
            <div className="mt-11">
                <div className="mb-16">
                    <div className="justify-center md:flex">
                        <div className=" h-[35rem]  ">
                            <img
                                className="w-[80rem] h-[35rem]"
                                src="images/homePage/storyOne.jpg"
                                alt=""
                            />
                        </div>
                        <div className="">
                            <div
                                className="container p-4 "
                                data-aos="fade-up"
                                data-aos-duration="2000"
                            >
                                <p className="sm:text-[25px]">
                                    DID YOU KNOW THAT
                                </p>
                                <p className="sm:text-[30px] font-bold text-[rgb(255,35,24)] my-5">
                                    GITC is among seven trade remedy
                                    institutions and investigating authorities
                                    in Africa.
                                </p>
                                <p className="sm:text-[1.2rem] mb-5">
                                    These other African countries are:
                                    Egypt,South Africa, Morocco,
                                    Tunisia,Mauritius, and Madagascar. These
                                    other African countries are: Egypt,South
                                    Africa, Morocco, Tunisia,Mauritius, and
                                    Madagascar.
                                </p>
                                <button className="block border-[rgb(255,35,24)] border p-4 mt-3 rounded-full mx-auto hover:border-2">
                                    Read Our Story
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="justify-center md:flex xs:flex-col-reverse ">
                        <div className=" text-white bg-[rgb(255,35,25)]">
                            <div
                                className="container p-4 text-center"
                                data-aos="fade-up"
                                data-aos-duration="2000"
                            >
                                <h1 className="text-[3rem]">We ensure:</h1>
                                <div className="sm:text-[1.3rem]">
                                    <p className="py-4">
                                        (a)Ghana’s compliance with international
                                        trade rules and regulations;
                                    </p>
                                    <p className="py-3">
                                        (b)Fairness, efficiency, transparency
                                        and objectivity in the application of
                                        measures affecting international trade
                                        rules and the use of world trade
                                        regulations;
                                    </p>
                                    <p className="py-3">
                                        (c)Fair ompetition for persons engaged
                                        in domestic production and international
                                        trade.
                                    </p>
                                    <p className="pt-3">
                                        (d)Protection of the domestic market
                                        from the impact of unfair trade
                                        practices in the course of international
                                        trade.
                                    </p>
                                </div>
                                <button className="block p-4 mx-auto mt-3 border border-white rounded-full hover:border-2">
                                    Read Our Story
                                </button>
                            </div>
                        </div>
                        <div className="h-[35rem] ">
                            <img
                                className="w-[80rem] h-[35rem]"
                                src="images/homePage/storyTwo.jpg"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* partners section */}
            <div className="px-2 py-16 bg-gray-100">
                <div
                    className="flex justify-center gap-1 h-10rem]"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                >
                    {/* <div className="">
                        <img src="images/homePage/sponsorOne.jpg" className="w-full object-contain h-[10rem]" alt="" />
                    </div> */}
                    <div className="">
                        <img
                            src="images/homePage/sponsorTwo.png"
                            className="w-full object-contain h-[10rem]"
                            alt=""
                        />
                    </div>
                    <div className="">
                        <img
                            src="images/homePage/sponsorThree.png"
                            className="w-full object-contain h-[10rem]"
                            alt=""
                        />
                    </div>
                    <div className="">
                        <img
                            src="images/homePage/sponsorFour.png"
                            className="w-full object-contain h-[10rem]"
                            alt=""
                        />
                    </div>
                    <div className="">
                        <img
                            src="images/homePage/sponsorFive.png"
                            className="w-full object-contain h-[10rem]"
                            alt=""
                        />
                    </div>
                </div>
            </div>

            {/* Minister */}
            <div className="mt-[5rem]">
                <div className="mb-16">
                    <div className="justify-center md:flex">
                        <div className="border ">
                            <img
                                className="w-[80rem] sm:h-[25rem]"
                                src="https://baconmockup.com/640/303"
                                alt=""
                                data-aos="zoom-in-down"
                                data-aos-duration="300"
                            />
                        </div>
                        <div className="">
                            <div
                                className="container py-4"
                                data-aos="zoom-in-down"
                                data-aos-duration="500"
                            >
                                <img
                                    src="images/quote.png"
                                    alt="quote"
                                    className="w-[8%] pl-5 xs:hidden"
                                />
                                <p className="pl-4 sm:text-[1.8rem] my-2">
                                    The bane of development in developing
                                    countries as against developed countries is
                                    the lack of industrialization in the former.
                                    The inability of developing counties.......
                                </p>
                                <h1 className="pl-5 my-5 text-6 ">
                                    Read More{" "}
                                </h1>
                                <div className="pl-5 ">
                                    <h1 className="text-[30px] font-bold text-[rgba(255,23,025)]">
                                        Frank Agyakum
                                    </h1>
                                    <p className="">Executive Secretary</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* contact section*/}
            <div className="w-full px-4 text-center md:flex">
                <div className="md:w-[50%] ">
                    <div className="container mx-auto">
                        <h1 className="text-[3rem] font-bold text-[rgb(255,35,25)]">
                            Connect with us
                        </h1>
                        <p className="text-[1.3rem]">
                            Please fill out the form and press the submit
                            button. We will get back to you with 1-2 business
                            days.
                        </p>
                    </div>
                </div>
                <div className="md:w-[50%]  ">
                    <div className="container ">
                        <form action="" className="">
                            <div className="">
                                <input
                                    className="m-3 bg-gray-100"
                                    placeholder="Full Name *"
                                    required="required"
                                    type="text"
                                />
                                <input
                                    className="m-3 bg-gray-100"
                                    placeholder="Email *"
                                    required="required"
                                    type="Email"
                                />
                            </div>
                            <div className="">
                                <input
                                    className="m-3 bg-gray-100"
                                    placeholder="Subject *"
                                    required="required"
                                    type="text"
                                />
                                <input
                                    className="m-3 bg-gray-100"
                                    placeholder="Phone Number"
                                    type="text"
                                />
                            </div>
                            <div className="">
                                {/* <textarea name="" id="" cols="30" rows="10"></textarea> */}
                                <textarea
                                    className="sm:w-[70%] bg-gray-100"
                                    rows="4"
                                    placeholder="Message"
                                    required="required"
                                    name=""
                                ></textarea>
                            </div>

                            <button className="border rounded-full px-3 py-2 hover:bg-[rgba(255,34,25)] hover:text-white my-6">
                                Submit Now
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </WebsiteLayout>
    );
};

// import React, { useState } from "react";
// import { WebsiteLayout } from "../../components/layouts";

// const Index = () => {
//     return (
//         <WebsiteLayout page="home">
//             <h1>Home Page</h1>
//         </WebsiteLayout>
//     );
// };

export default Index;
