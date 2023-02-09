import { Link } from "@inertiajs/inertia-react";
import AOS from "aos";
import { useKeenSlider } from "keen-slider/react";
import React, { useEffect, useState } from "react";

import { WebsiteLayout } from "../../components/layouts";
import Button from "../../components/layouts/website/Button";
import ButtonOutline from "../../components/layouts/website/ButtonOutline";
import HeadingSecondary from "../../components/layouts/website/HeadingSecondary";
import Paragraph from "../../components/layouts/website/Paragraph";

import "aos/dist/aos.css";
import "keen-slider/keen-slider.min.css";

const animation = { duration: 40000, easing: (t) => t };

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
            s.moveToIdx(5, true, animation);
        },
        updated(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation);
        },
        animationEnded(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation);
        },
    });

    return (
        <WebsiteLayout page="home">
            <div className="text-lg bg-white text-grey">
                {/* values section */}
                <div className="mb-32 sm:p-10 bg-faded ">
                    <div
                        className="justify-center gap-3 pb-4 md:flex"
                        data-aos="fade-up"
                        data-aos-duration="2000"
                    >
                        <div className="flex p-2 my-5">
                            <div className="p-3 w-[30%]">
                                <img
                                    src="images/homePage/objectivity.png"
                                    alt="Objectivity"
                                    className="object-contain "
                                />
                            </div>
                            <div className="w-[70%] sm:pl-5">
                                <h2 className=" ">
                                    Objectivity
                                </h2>
                                <p className="">
                                    To ensure equality and fairness in the
                                    application of measures affecting
                                    international trade and the use of world
                                    trade regulations.
                                </p>
                            </div>
                        </div>

                        <div className="flex p-2 my-5">
                            <div className="p-3 w-[30%] ">
                                <img
                                    src="images/homePage/professionalism.png"
                                    alt="professional"
                                    className="object-contain"
                                />
                            </div>
                            <div className="w-[70%] ">
                                <h2 className="">
                                    Professionalism
                                </h2>

                                <p>
                                    To ensure a high level of competence and
                                    efficiency in applying international trade
                                    rules and regulations as under the World
                                    Trade Organization (WTO) provisions.
                                </p>
                            </div>
                        </div>

                        <div className="flex p-2 my-5">
                            <div className="p-3 w-[30%] ">
                                <img
                                    src="images/homePage/integrity.png"
                                    alt="Integrity"
                                    className="object-contain "
                                />
                            </div>
                            <div className="w-[70%] ">
                                <h2 className=" ">
                                    Integrity
                                </h2>
                                <p>
                                    To ensure absolute neutrality and
                                    consistency in the execution of the mandate
                                    of the Commission.
                                </p>
                            </div>
                        </div>

                        <div className="flex p-2 my-5">
                            <div className="p-3 w-[30%] ">
                                <img
                                    src="images/homePage/integrity.png"
                                    alt="Integrity"
                                    className="object-contain "
                                />
                            </div>
                            <div className="w-[70%] ">
                                <h2 className="font-bold ">
                                    Integrity
                                </h2>
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
                <div className="pb-28  ">
                    <div
                        className="justify-center md:flex"

                    >
                        <div className="sm:w-[25%]" data-aos="fade-up"
                            data-aos-anchor-placement="center-bottom" data-aos-duration="700">
                            <div className="h-[45%] relative">
                                <div className="absolute opacity-0 transition duration-700 ease-in-out hover:opacity-100 hover:bg-black/70 h-[15rem] w-[100%] cursor-pointer">
                                    <div className="text-center translate-y-[6rem]">
                                        <Link
                                            href="/services"
                                            className="text-white"
                                        >
                                            View More
                                        </Link>
                                    </div>
                                </div>
                                <img
                                    src="images/homePage/serviceOne.jpg"
                                    className="w-full object-cover h-[15rem] "
                                />
                            </div>

                            <div className="my-3 sm:px-8">
                                <h2 className="py-5">
                                    Trade Remedies
                                </h2>
                                <p className="mb-3">
                                    To ensure equality and fairness in the
                                    application of measures affecting
                                    international trade and the use of world
                                    trade regulations.
                                </p>
                                <Link
                                    href="/services"
                                    className="text-primary hover:text-red-300"
                                >
                                    Read More . . .
                                </Link>
                            </div>
                        </div>
                        <div className="sm:w-[25%] " data-aos="fade-up"
                            data-aos-anchor-placement="center-bottom" data-aos-duration="1000">
                            <div className="h-[45%] relative">
                                <div className="absolute opacity-0 transition duration-700 ease-in-out hover:opacity-100 hover:bg-black/70 h-[15rem] w-[100%] cursor-pointer">
                                    <div className="text-center translate-y-[6rem]">
                                        <Link
                                            href="/service/dispute"
                                            className="text-white"
                                        >
                                            View More
                                        </Link>
                                    </div>
                                </div>
                                <img
                                    src="images/homePage/serviceTwo.jpg"
                                    className="w-full object-cover h-[15rem] "
                                />
                            </div>
                            <div className="my-3 sm:px-8">
                                <h2 className="py-5 ">
                                    Dispute Settlement
                                </h2>
                                <p className="mb-3">
                                    Providing actions to resolve issues arising
                                    out of a member-state violating the rules
                                    and regulationso f the World Trade
                                    Organization.
                                </p>
                                <Link
                                    href="/service/dispute"
                                    className="text-primary hover:text-red-300"
                                >
                                    Read More  . . .
                                </Link>
                            </div>
                        </div>
                        <div className="sm:w-[25%]  " data-aos="fade-up"
                            data-aos-anchor-placement="center-bottom" data-aos-duration="2000">
                            <div className="h-[45%] relative">
                                <div className="absolute opacity-0 transition duration-700 ease-in-out hover:opacity-100 hover:bg-black/70 h-[15rem] w-[100%] cursor-pointer">
                                    <div className="text-center translate-y-[6rem]">
                                        <Link
                                            href="/services"
                                            className="text-white"
                                        >
                                            View More
                                        </Link>
                                    </div>
                                </div>
                                <img
                                    src="images/homePage/serviceThree.jpg"
                                    className="w-full object-cover h-[15rem] "
                                />
                            </div>
                            <div className="my-3 sm:px-8">
                                <h2 className="py-5">
                                    Tarrif Review
                                </h2>
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
                                    Read More . . .
                                </Link>
                            </div>
                        </div>
                        <div className="sm:w-[25%] " data-aos="fade-up"
                            data-aos-anchor-placement="center-bottom" data-aos-duration="3000">
                            <div className="h-[45%] relative">
                                <div className="absolute opacity-0 transition duration-700 ease-in-out hover:opacity-100 hover:bg-black/70 h-[15rem] w-[100%] cursor-pointer">
                                    <div className="text-center translate-y-[6rem]">
                                        <Link
                                            href="/service/research"
                                            className="text-white"
                                        >
                                            View More
                                        </Link>
                                    </div>
                                </div>
                                <img
                                    src="images/homePage/serviceFour.jpg"
                                    className="w-full object-cover h-[15rem] "
                                />
                            </div>
                            <div className="my-3 sm:px-8">
                                <h2 className="py-4">
                                    Research
                                </h2>
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
                                    Read More . . .
                                </Link>
                            </div>
                        </div>
                    </div>
                    <Link href="/service" className="">
                        <Button className="mt-8"> View More </Button>
                    </Link>
                </div>

                {/* story section*/}
                <div className="">
                    <div className="px-9 shadow-2xl">
                        <div className="mx-auto ">
                            <div className="justify-center sm:flex bg-black">
                                <div className="sm:w-[80rem] opacity-60" style={{ backgroundImage: "url('images/homePage/storyOne.jpg')", backgroundAttachment: "fixed", backgroundSize: "cover" }}>
                                    {/* <div className="sm:h-[35rem] bg-red-700" >

                                    <img
                                        className="sm:w-[80rem] sm:h-[35rem] opacity-90"
                                        src="images/homePage/storyOne.jpg"
                                        alt=""
                                        style={{}}
                                    /> */}
                                </div>
                                <div className="bg-white">
                                    <div
                                        className="container sm:pt-12 sm:px-20"
                                        data-aos="fade-left"
                                        data-aos-duration="2000"
                                    >
                                        <p className="text-center text-red-700 sm:text-left sm:text-2lx">
                                            DID YOU KNOW THAT
                                        </p>
                                        <h2 className="my-5 font-bold text-center sm:text-left sm:text-3xl text-red-600">
                                            GITC is among seven trade remedy
                                            institutions and investigating
                                            authorities in Africa.
                                        </h2>
                                        <p className="mb-5 text-center sm:mb-14 sm:text-left text-red-400">
                                            These other African countries are:
                                            Egypt, South Africa, Morocco, Tunisia,
                                            Mauritius, and Madagascar. These other
                                            African countries are: Egypt,South
                                            Africa, Morocco, Tunisia, Mauritius, and
                                            Madagascar.
                                        </p>

                                        <Link hre="/story">
                                            <ButtonOutline className="sm:w-[14rem] mb-7">
                                                Read Our Story
                                            </ButtonOutline>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="flex bg-black flex-col-reverse justify-center sm:flex sm:flex-row ">
                                <div className="text-white bg-red-700">
                                    <div
                                        className="container sm:px-20 "
                                        data-aos="fade-right"
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
                                                Fairness, efficiency, transparency
                                                and objectivity in the application
                                                of measures affecting international
                                                trade rules and the use of world
                                                trade regulations;
                                            </li>
                                            <li className="py-3">
                                                Fair competition for persons engaged
                                                in domestic production and
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
                                            <ButtonOutline className="sm:w-[14rem] mb-7">
                                                Read Our Story
                                            </ButtonOutline>
                                        </Link>
                                    </div>
                                </div>

                                <div className="sm:w-[80rem] opacity-60" style={{ backgroundImage: "url('images/homePage/storyTwo.jpg')", backgroundAttachment: "fixed", objectFit: "fill", backgroundRepeat: "round" }}>
                                    {/* <div className="sm:h-[35rem] ">
                                        <img
                                            className="sm:w-[80rem] sm:h-[35rem]"
                                            src="images/homePage/storyTwo.jpg"
                                            alt=""
                                        /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* partners section */}
                <div className="py-10 mb-1 bg-gray-100">
                    <div className="">
                        <div className="flex justify-center gap-1 h-10rem]">
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
                </div>

                {/* Minister */}
                <div className=" pb-24">
                    <div
                        className="block shadow-lg sm:mx-24"
                        data-aos="fade-up"
                        data-aos-duration="2000"
                    >
                        <div className="justify-center  sm:flex sm:w-[100%]">
                            <div className="sm:w-[50%] ">
                                {/* <HeadingPrimary>	&quot;</HeadingPrimary> */}
                                <img
                                    className="object-fill "
                                    src="/images/about/our_team/Mr. Frank Agyekum.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="sm:w-[50%] bg-white sm:px-8">
                                <div className="container sm:pt-32">
                                    <img
                                        src="images/quote.png"
                                        alt="quote"
                                        className="w-[14%] pl-5 xs:hidden"
                                    />
                                    <p className="pl-4 my-6 font-bold text-black sm:text-[1.8rem]">
                                        The bane of development in developing
                                        countries as against developed countries is
                                        the lack of industrialization in the former.
                                        The inability of developing counties ...
                                    </p>
                                    <h2 className="pl-5 text-red-400 cursor-pointer hover:text-red-300 ">
                                        Read More
                                    </h2>
                                    <div className="pl-5 ">
                                        <h1 className="pt-8 text-2xl text-primary">
                                            Frank Agyakum
                                        </h1>
                                        <p className="pt-1 font-light text-primary">
                                            Executive Secretary
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* contact section*/}
                <div className="w-full px-2  text-center md:flex">
                    <div className="md:w-[50%] px-5 ">
                        <div className="pt-10 mx-auto ">
                            <h4 className="font-bold text-red-600 custom">
                                Connect with us
                            </h4>
                            <p className="text-[1.3rem]  pt-8">
                                Please fill out the form and press the submit
                                button. We will get back to you with 1-2
                                business days.
                            </p>
                        </div>
                    </div>
                    <div className="md:w-[50%]  ">
                        <div className="">
                            <form action="" className="px-3">
                                <div className="grid grid-cols-2">
                                    {/* <div className=""> */}
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
                                    {/* </div> */}
                                    {/* <div className=""> */}
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
                                    {/* </div> */}
                                    {/* <div className="pt-2 m-3"> */}
                                </div>
                                <div className="px-3 mx-auto">

                                    <textarea
                                        className="w-full border-none bg-gray-100  focus:outline-none focus:ring focus:ring-primary/20 "
                                        rows="4"
                                        placeholder="Message"
                                        required="required"
                                        name=""
                                    />
                                </div>
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
