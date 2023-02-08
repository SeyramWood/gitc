import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { WebsiteLayout } from "../../components/layouts";
import { Link } from "@inertiajs/inertia-react";
import Button from "../../components/layouts/website/Button";
import ButtonOutline from "../../components/layouts/website/ButtonOutline";
import Paragraph from "../../components/layouts/website/Paragraph";
import HeadingPrimary from "../../components/layouts/website/HeadingPrimary";
import HeadingSecondary from "../../components/layouts/website/HeadingSecondary";

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

const animation = { duration: 40000, easing: (t) => t }

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

    // sponsors animate
    const [sliderRef] = useKeenSlider({
        slides: {
            perView: 3,
        },
        loop: true,
        renderMode: "performance",
        drag: true,
        created(s) {
            s.moveToIdx(5, true, animation)
        },
        updated(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation)
        },
        animationEnded(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation)
        },
    })

    return (
        <WebsiteLayout page="home">
            <div className="text-lg text-grey bg-white">
                {/* values section */}
                <div className="mb-32 bg-slate-100 ">
                    <div
                        className="justify-center gap-3 pb-4 md:flex"
                        data-aos="fade-up"
                        data-aos-duration="2000"
                    >
                        <div className="my-5 flex p-2">
                            <div className="p-3 w-[30%]">
                                <img
                                    src="images/homePage/objectivity.png"
                                    alt="Objectivity"
                                    className="object-contain "
                                />
                            </div>
                            <div className="w-[70%]">
                                <HeadingSecondary className="font-bold ">
                                    Objectivity
                                </HeadingSecondary>
                                <Paragraph className="" >
                                    To ensure equality and fairness in the
                                    application of measures affecting
                                    international trade and the use of world
                                    trade regulations.
                                </Paragraph>
                            </div>
                        </div>

                        <div className="my-5 flex p-2">
                            <div className="p-3 w-[30%] ">
                                <img
                                    src="images/homePage/professionalism.png"
                                    alt="professional"
                                    className="object-contain"
                                />
                            </div>
                            <div className="w-[70%] ">
                                <HeadingSecondary className="font-bold">
                                    Professionalism
                                </HeadingSecondary>

                                <p>
                                    To ensure a high level of competence and
                                    efficiency in applying international trade
                                    rules and regulations as under the World
                                    Trade Organization (WTO) provisions.
                                </p>
                            </div>
                        </div>

                        <div className="my-5 flex p-2">
                            <div className="p-3 w-[30%] ">
                                <img
                                    src="images/homePage/integrity.png"
                                    alt="Integrity"
                                    className="object-contain "
                                />
                            </div>
                            <div className="w-[70%] ">
                                <HeadingSecondary className="font-bold ">
                                    Integrity
                                </HeadingSecondary>
                                <p>
                                    To ensure absolute neutrality and
                                    consistency in the execution of the mandate
                                    of the Commission.
                                </p>
                            </div>

                        </div>

                        <div className="my-5 flex p-2">
                            <div className="p-3 w-[30%] ">
                                <img
                                    src="images/homePage/integrity.png"
                                    alt="Integrity"
                                    className="object-contain "
                                />
                            </div>
                            <div className="w-[70%] ">
                                <HeadingSecondary className="font-bold ">
                                    Integrity
                                </HeadingSecondary>
                                <p>
                                    To ensure absolute neutrality and
                                    consistency in the execution of the mandate
                                    of the Commission.
                                </p>
                            </div>

                        </div>

                    </div>
                </div>

                {/* services section*/}
                <div className=" mb-32 ">
                    <div className="pb-10 text-center relative">
                        <HeadingPrimary className="underline" >
                            Services We Provide
                        </HeadingPrimary>
                        <Paragraph className="pt-3 font-bold">
                            COVERED IN THESE AREAS
                        </Paragraph>
                        {/*<div className="-z-10 text-[grey] uppercase text-[15rem] absolute z-10 mx-auto">services</div>*/}
                    </div>
                    <div
                        className="justify-center md:flex"
                        data-aos="fade-up"
                        data-aos-duration="2000"
                    >
                        <div className="sm:w-[25%]" >
                            <div className="h-[45%] relative" >
                                <div className="absolute opacity-0 transition duration-700 ease-in-out hover:opacity-100 hover:bg-black/70 h-[15rem] w-[100%] cursor-pointer">
                                    <div className="text-center translate-y-[6rem]">
                                        <Link href="/service/subsidy" className="text-white">View More</Link>
                                    </div>

                                </div>
                                <img src="images/homePage/serviceOne.jpg"
                                    className="w-full object-cover h-[15rem] "
                                />
                            </div>

                            <div className="my-3  sm:px-8">
                                <h1 className=" py-5 text-3xl text-primary">
                                    Trade Remedies
                                </h1>
                                <p className="mb-3 ">
                                    To ensure equality and fairness in the
                                    application of measures affecting
                                    international trade and the use of world
                                    trade regulations.
                                </p>
                                <Link
                                    href="/service/subsidy"
                                    className="text-primary hover:text-red-300"
                                >
                                    Read More
                                </Link>
                            </div>
                        </div>
                        <div className="sm:w-[25%] ">
                            <div className="h-[45%] relative" >
                                <div className="absolute opacity-0 transition duration-700 ease-in-out hover:opacity-100 hover:bg-black/70 h-[15rem] w-[100%] cursor-pointer">
                                    <div className="text-center translate-y-[6rem]">
                                        <Link href="/service/dumping" className="text-white">View More</Link>
                                    </div>
                                </div>
                                <img src="images/homePage/serviceTwo.jpg"
                                    className="w-full object-cover h-[15rem] "
                                />
                            </div>
                            <div className="my-3 sm:px-8">
                                <h1 className="text-3xl text-primary py-5 ">
                                    Dispute Settlement
                                </h1>
                                <p className="mb-3">
                                    Providing actions to resolve issues arising
                                    out of a member-state violating the rules
                                    and regulationso f the World Trade
                                    Organization.
                                </p>
                                <Link
                                    href="/service/dumping"
                                    className="text-primary hover:text-red-300"
                                >
                                    Read More
                                </Link>
                            </div>
                        </div>
                        <div className="sm:w-[25%]  ">
                            <div className="h-[45%] relative" >
                                <div className="absolute opacity-0 transition duration-700 ease-in-out hover:opacity-100 hover:bg-black/70 h-[15rem] w-[100%] cursor-pointer">
                                    <div className="text-center translate-y-[6rem]">
                                        <Link href="/services" className="text-white">View More</Link>
                                    </div>
                                </div>
                                <img src="images/homePage/serviceThree.jpg"
                                    className="w-full object-cover h-[15rem] "
                                />
                            </div>
                            <div className="my-3 sm:px-8">
                                <h1 className="text-3xl py-4 text-primary">
                                    Tarrif Review
                                </h1>
                                <p className="mb-3">
                                    Providing a review of customs duty that
                                    affects the production and competitiveness
                                    of goods in relation to the domestic
                                    producer or domestic industry
                                </p>
                                <Link
                                    href="/services"
                                    className="text-primary hover:text-red-300 sm:pl-1"
                                >
                                    Read More
                                </Link>
                            </div>
                        </div>
                        <div className="sm:w-[25%] ">
                            <div className="h-[45%] relative" >
                                <div className="absolute opacity-0 transition duration-700 ease-in-out hover:opacity-100 hover:bg-black/70 h-[15rem] w-[100%] cursor-pointer">
                                    <div className="text-center translate-y-[6rem]">
                                        <Link href="/service/research" className="text-white">View More</Link>
                                    </div>
                                </div>
                                <img src="images/homePage/serviceFour.jpg"
                                    className="w-full object-cover h-[15rem] "
                                />
                            </div>
                            <div className="my-3 sm:px-8">
                                <h1 className="text-3xl py-4 text-primary">
                                    Research
                                </h1>
                                <p className="mb-3">
                                    The Commission is to study, identify, and
                                    recommend to the Minister of Trade and
                                    Industry tariff levels for specific sectors
                                    of the economy with due regard to the
                                    effective rate of protection.
                                </p>
                                <Link
                                    href="/service/research"
                                    className="text-primary hover:text-red-300"
                                >
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </div>
                    <Link href="/service">
                        <Button> View More </Button>
                    </Link>
                </div>

                {/* story section*/}
                <div className="mb-32">
                    <div className="mb-16  mx-auto">
                        <div className="justify-center sm:flex">
                            <div className="sm:h-[35rem]  ">
                                <img
                                    className="sm:w-[80rem] sm:h-[35rem]"
                                    src="images/homePage/storyOne.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="">
                                <div
                                    className="container sm:pt-12 sm:px-16"
                                    data-aos="fade-up"
                                    data-aos-duration="2000"
                                >
                                    <p className="text-center sm:text-left sm:text-3lx">
                                        DID YOU KNOW THAT
                                    </p>
                                    <p className="my-5 font-bold text-center sm:text-left sm:text-3xl text-primary">
                                        GITC is among seven trade remedy
                                        institutions and investigating
                                        authorities in Africa.
                                    </p>
                                    <p className="mb-5 text-center sm:mb-14 sm:text-left sm:text-2xl">
                                        These other African countries are:
                                        Egypt, South Africa, Morocco,
                                        Tunisia, Mauritius, and Madagascar. These
                                        other African countries are: Egypt,South
                                        Africa, Morocco, Tunisia, Mauritius, and
                                        Madagascar.
                                    </p>


                                    {/*<Link hre="/">*/}
                                        {/*<ButtonOutline className="block p-4  border rounded-full border-primary hover:border-2">*/}

                                    <Link hre="/story">
                                        <ButtonOutline className="block p-4 mx-auto border rounded-full border-primary hover:border-2">

                                            Read Our Story
                                        </ButtonOutline>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col-reverse justify-center sm:flex sm:flex-row ">
                            <div className="text-white  bg-primary">
                                <div
                                    className="container sm:px-16  "
                                    data-aos="fade-up"
                                    data-aos-duration="2000"
                                >
                                    <h1 className="text-[3rem] sm:pt-10 pb-6 font-bold">We ensure:</h1>
                                    <ul className="sm:text-[1.3rem] list-disc ">
                                        <li className="py-4">
                                            Ghana’s compliance with
                                            international trade rules and
                                            regulations;
                                        </li>
                                        <li className="py-3">
                                            Fairness, efficiency,
                                            transparency and objectivity in the
                                            application of measures affecting
                                            international trade rules and the
                                            use of world trade regulations;
                                        </li>
                                        <li className="py-3">
                                            Fair ompetition for persons
                                            engaged in domestic production and
                                            international trade.
                                        </li>
                                        <li className="pt-3">
                                            Protection of the domestic market
                                            from the impact of unfair trade
                                            practices in the course of
                                            international trade.

                                        </li>
                                    </ul>

                                    <Link href="/story">
                                        <ButtonOutline className="block p-4 mx-auto mt-3 border border-white rounded-full hover:border-2 mb-7">
                                            Read Our Story
                                        </ButtonOutline>
                                    </Link>
                                </div>
                            </div>
                            <div className="sm:h-[35rem] ">
                                <img
                                    className="sm:w-[80rem] sm:h-[40rem]"
                                    src="images/homePage/storyTwo.jpg"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* partners section */}
                <div className="px-2 mb-32 bg-gray-100" >
                    <div
                        className="flex justify-center gap-1 h-10rem]"

                    >
                        <div ref={sliderRef} className="keen-slider">
                            <div className="keen-slider__slide number-slide1">
                                <img
                                    src="images/homePage/sponsorTwo.png"
                                    className="w-full object-contain h-[10rem]"
                                    alt=""
                                />
                            </div>
                            <div className="keen-slider__slide number-slide2">
                                <img
                                    src="images/homePage/sponsorThree.png"
                                    className="w-full object-contain h-[10rem]"
                                    alt=""
                                />
                            </div>
                            <div className="keen-slider__slide number-slide3">
                                <img
                                    src="images/homePage/sponsorFour.png"
                                    className="w-full object-contain h-[10rem]"
                                    alt=""
                                />
                            </div>
                            <div className="keen-slider__slide number-slide4">
                                <div className="">
                                    <img
                                        src="images/homePage/sponsorFive.png"
                                        className="w-full object-contain h-[10rem]"
                                        alt=""
                                    />
                                </div>
                            </div>
                            {/* <div className="keen-slider__slide number-slide5">5</div>
                            <div className="keen-slider__slide number-slide6">6</div> */}
                        </div>
                        {/* <div className="">
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
                        </div> */}
                    </div>
                </div>

                {/* Minister */}
                <div
                    className="block sm:mx-24 mb-32 shadow-lg"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                >
                    <div className="justify-center sm:flex sm:w-[100%]">
                        <div className="sm:w-[50%] ">
                            {/* <HeadingPrimary>	&quot;</HeadingPrimary> */}
                            <img
                                className="object-fill  "
                                src="/images/about/our_team/Mr. Frank Agyekum.jpg"
                                alt=""
                            />
                        </div>
                        <div className="sm:w-[50%] sm:px-8">
                            <div className="container sm:pt-32">
                                <img
                                    src="images/quote.png"
                                    alt="quote"
                                    className="w-[14%] pl-5 xs:hidden"
                                />
                                <p className="pl-4 my-6 font-bold text-black sm:text-4xl">
                                    The bane of development in developing
                                    countries as against developed countries is
                                    the lack of industrialization in the former.
                                    The inability of developing counties ...
                                </p>
                                <h1 className="pl-5 text-red-400 cursor-pointer hover:text-red-300 ">
                                    Read More
                                </h1>
                                <div className="pl-5 ">
                                    <h1 className="pt-8 text-2xl text-primary">
                                        Frank Agyakum
                                    </h1>
                                    <p className="pt-1 font-light  text-primary">
                                        Executive Secretary
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* contact section*/}
                <div className="w-full px-2 text-center md:flex">
                    <div className="md:w-[50%] ">
                        <div className="mx-auto pt-10">
                            <h1 className="text-3xl font-bold text-primary">
                                Connect with us
                            </h1>
                            <p className="text-[1.3rem] sm:pl-[5rem]">
                                Please fill out the form and press the submit
                                button. We will get back to you with 1-2
                                business days.
                            </p>
                        </div>
                    </div>
                    <div className="md:w-[50%]  ">
                        <div className="">
                            <form action="" className="">
                                <div className="">
                                    <input
                                        className="m-3 bg-gray-100 border-none focus:outline-none focus:ring focus:ring-primary/20"
                                        placeholder="Full Name *"
                                        required="required"
                                        type="text"
                                    />
                                    <input
                                        className="m-3 bg-gray-100 border-none focus:outline-none focus:ring focus:ring-primary/20"
                                        placeholder="Email *"
                                        required="required"
                                        type="Email"
                                    />
                                </div>
                                <div className="">
                                    <input
                                        className="m-3 bg-gray-100 border-none focus:outline-none focus:ring focus:ring-primary/20"
                                        placeholder="Subject *"
                                        required="required"
                                        type="text"
                                    />
                                    <input
                                        className="m-3 bg-gray-100 border-none focus:outline-none focus:ring focus:ring-primary/20"
                                        placeholder="Phone Number"
                                        type="text"
                                    />
                                </div>
                                {/* <div className="pt-2 m-3"> */}
                                <textarea
                                    className="sm:w-[70%] border-none bg-gray-100  focus:outline-none focus:ring focus:ring-primary/20"
                                    rows="4"
                                    placeholder="Message"
                                    required="required"
                                    name=""
                                />
                                {/* </div> */}

                                <Button className="mt-[2rem] mb-[3rem]">
                                    Submit
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </WebsiteLayout>
    );
};

export default Index;
