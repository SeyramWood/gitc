import { Link, useForm } from "@inertiajs/inertia-react";
import AOS from "aos";
import "aos/dist/aos.css";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import React, { useEffect, useState } from "react";

import { WebsiteLayout } from "../../components/layouts";
import Button from "../../components/layouts/website/Button";
import ButtonOutline from "../../components/layouts/website/ButtonOutline";
import axios from "axios";

import useFormValidation from "../../components/form/useFormValidation";

const animation = { duration: 40000, easing: (t) => t };

const Index = () => {


    const { data, setData, post, progress, processing, reset, errors } = useForm({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        industry: "",
    });

    function submit(e) {
        e.preventDefault();
        post(route("contact.store"), {
            data,
            onSuccess: () => {
                reset();
            },
        });
    }

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
    // old newsletter
    // const [emailInput, setEmailInput] = useState("");
    const [success, setSuccess] = useState(false)
    const [errorMessage, setErrorMessage] = useState(" ")


    // newsletter function
    const newsLetter = useFormValidation(
        {
            email: "",
        },
        {
            email: "required|email",
        },
        submitEmail
    )

    function submitEmail() {

        axios.post(`http://127.0.0.1:8000`, newsLetter.state)
            .then(
                newsLetter.clearValues(true),
                console.log(newsLetter.state),
                setSuccess(true)
            ).catch((error) => {
                if (error["response"]) {
                    newsLetter.setServerErrors(error.response.data.errors)
                } else if (error.response.status === Range(400, 499)) {
                    setErrorMessage("Ooops! Something went wrong, please refresh and try again.")
                }
            }
            )


    }
    // end of letter

    return (
        <WebsiteLayout page="home">

            <div className="text-lg bg-white ">
                {/* values section */}
                <div className="px-2 mb-32 sm:py-10 bg-faded ">
                    <div className="" data-aos="fade-up" data-aos-duration="2000">
                        <h1 className="text-center text-[3rem] sm:text-[5rem] pt-8 sm:pb-7 pb-4 text-grey/40">
                            Our Core Values
                        </h1>
                        <div className="justify-center w-[100%] gap-3 pb-4 md:flex">
                            <div className="flex p-2 my-5 ">
                                <div className="p-3 w-[30%]">
                                    <div
                                        className="sm:bg-black/5"
                                        style={{ borderRadius: "100%" }}
                                    >
                                        <img
                                            src="images/homePage/objectivity.png"
                                            alt="Objectivity"
                                            className="object-contain -translate-x-1 -translate-y-5"
                                        />
                                    </div>
                                </div>
                                <div className="w-[70%] sm:pl-2">
                                    <h2 className="">Objectivity</h2>
                                    <p className="">
                                        To ensure equality and fairness in the application of
                                        measures affecting international trade and the use of world
                                        trade measures.
                                    </p>
                                </div>
                            </div>

                            <div className="flex p-2 my-5 ">
                                <div className="p-3 w-[30%] ">
                                    <div
                                        className="sm:bg-black/5"
                                        style={{ borderRadius: "100%" }}
                                    >
                                        <img
                                            // src="images/homePage/objectivity.png"
                                            src="images/homePage/professionalism.png"
                                            alt="professional"
                                            className="object-contain -translate-x-1 -translate-y-5"
                                        />
                                    </div>
                                </div>
                                <div className="w-[70%] sm:pl-2">
                                    <h2 className="">Professionalism</h2>

                                    <p className="">
                                        To ensure a high level of competence and efficiency in
                                        applying international trade rules and regulations as under
                                        the World Trade Organization provisions.
                                    </p>
                                </div>
                            </div>

                            <div className="flex p-2 my-5 ">
                                <div className="p-3 w-[30%] sm:pl-1">
                                    <div
                                        className="sm:bg-black/5"
                                        style={{ borderRadius: "100%" }}
                                    >
                                        <img
                                            // src="images/homePage/objectivity.png"
                                            src="images/homePage/integrity.png"
                                            alt="Integrity"
                                            className="object-contain -translate-x-1 -translate-y-5 "
                                        />
                                    </div>
                                </div>
                                <div className="w-[70%] ">
                                    <h2 className="">Integrity</h2>
                                    <p className="">
                                        To ensure absolute neutrality and consistency in the
                                        execution of the mandate of the Commission.
                                    </p>
                                </div>
                            </div>

                            <div className="flex p-2 my-5 ">
                                <div className="p-3 w-[30%] ">
                                    <div
                                        className="sm:bg-black/5"
                                        style={{ borderRadius: "100%" }}
                                    >
                                        {/* <BiSearchAlt className="w-[7rem] h-[7rem] text-black" /> */}
                                        <img
                                            src="images/homePage/search.png"
                                            alt="Integrity"
                                            className="object-contain -translate-x-1 -translate-y-5 "
                                        />
                                    </div>
                                </div>
                                <div className="w-[70%] ">
                                    <h2 className="">Transparency</h2>
                                    <p>
                                        To ensure that the Commission operates an open and fair
                                        terrain by providing a level playing field in its dealings
                                        with all parties.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* services section*/}
                <div className="px-2 overflow-hidden sm:px-16">
                    <div className="pb-32 ">
                        <div
                            className="sm:h-[17rem] h-[2rem] w-full "
                            style={{
                                backgroundImage: "url('images/homePage/headings/SERVICES.jpg')",
                                backgroundRepeat: "no-repeat",
                                backgroundPositionX: "center",
                                backgroundAttachment: "fixed",
                            }}
                            data-aos="fade-up"
                            data-aos-anchor-placement="center-bottom"
                            data-aos-duration="400"
                        >
                            <div className="translate-y-[7rem] ">
                                <h1 className="text-center  text-primary">
                                    Services
                                </h1>
                            </div>

                        </div>

                        <div className="justify-center gap-6 md:flex sm:mt-13 ">
                            <div className="sm:w-[25%]">
                                <div className="h-[45%] relative">
                                    <div className="absolute opacity-0 transition duration-700 ease-in-out hover:opacity-100 hover:bg-black/70 h-[15rem] w-[100%] cursor-pointer">
                                        <div className="text-center translate-y-[6rem]">
                                            <Link href="/services" className="text-white">
                                                View More
                                            </Link>
                                        </div>
                                    </div>
                                    <img
                                        src="images/homePage/serviceOne.jpg"
                                        className="w-full object-cover h-[15rem] "
                                    />
                                </div>

                                <div className="my-2 ">
                                    <h2 className="py-5">Trade Remedies</h2>
                                    <p className="mb-3">
                                        To provide actions that safeguard domestic manufacturers / industries
                                        against unfair trade practices such as dumping, subsidization,
                                        and the sudden, sharp, and significant influx of imported products
                                        onto the local market.
                                    </p>
                                    <Link
                                        href="/services"
                                        className="text-primary hover:text-red-300"
                                    >
                                        Read More . . .
                                    </Link>
                                </div>
                            </div>
                            <div
                                className="sm:w-[25%]  "
                                data-aos="fade-up"
                                data-aos-anchor-placement="center-bottom"
                                data-aos-duration="2000"
                            >
                                <div className="h-[45%] relative">
                                    <div className="absolute opacity-0 transition duration-700 ease-in-out hover:opacity-100 hover:bg-black/70 h-[15rem] w-[100%] cursor-pointer">
                                        <div className="text-center translate-y-[6rem]">
                                            <Link href="/service/tariff" className="text-white">
                                                View More
                                            </Link>
                                        </div>
                                    </div>
                                    <img
                                        src="images/homePage/serviceThree.jpg"
                                        className="w-full object-cover h-[15rem] "
                                    />
                                </div>
                                <div className="my-2 ">
                                    <h2 className="py-5">Tarrif Review</h2>
                                    <p className="mb-3">
                                        To provide a domestic manufacturing/industry review of
                                        customs duty that adversely affects the production and
                                        competitiveness of the local product in relation to imported
                                        goods.
                                    </p>
                                    <Link
                                        href="/service/tariff"
                                        className="text-primary hover:text-red-300 sm:pl-1"
                                    >
                                        Read More . . .
                                    </Link>
                                </div>
                            </div>
                            <div
                                className="sm:w-[25%] "
                                data-aos="fade-up"
                                data-aos-anchor-placement="center-bottom"
                                data-aos-duration="1000"
                            >
                                <div className="h-[45%] relative">
                                    <div className="absolute opacity-0 transition duration-700 ease-in-out hover:opacity-100 hover:bg-black/70 h-[15rem] w-[100%] cursor-pointer">
                                        <div className="text-center translate-y-[6rem]">
                                            <Link href="/service/dispute" className="text-white">
                                                View More
                                            </Link>
                                        </div>
                                    </div>
                                    <img
                                        src="images/homePage/serviceTwo.jpg"
                                        className="w-full object-cover h-[15rem] "
                                    />
                                </div>
                                <div className="my-2 ">
                                    <h2 className="py-5 ">Dispute Settlement</h2>
                                    <p className="mb-3">
                                        To resolve disputes between importers and the Customs
                                        Division of the Ghana Revenue Authority in respect of the
                                        classification and valuation of products that are imported.
                                    </p>
                                    <Link
                                        href="/service/dispute"
                                        className="text-primary hover:text-red-300"
                                    >
                                        Read More . . .
                                    </Link>
                                </div>
                            </div>

                            <div
                                className="sm:w-[25%] "
                                data-aos="fade-up"
                                data-aos-anchor-placement="center-bottom"
                                data-aos-duration="3000"
                            >
                                <div className="h-[45%] relative">
                                    <div className="absolute opacity-0 transition duration-700 ease-in-out hover:opacity-100 hover:bg-black/70 h-[15rem] w-[100%] cursor-pointer">
                                        <div className="text-center translate-y-[6rem]">
                                            <Link href="/service/research" className="text-white">
                                                View More
                                            </Link>
                                        </div>
                                    </div>
                                    <img
                                        src="images/homePage/serviceFour.jpg"
                                        className="w-full object-cover h-[15rem] "
                                    />
                                </div>
                                <div className="my-2 ">
                                    <h2 className="py-4">Research</h2>
                                    <p className="mb-3">
                                        To undertake studies on policies relating to trade and
                                        industry and recommend findings to the Minister for Trade
                                        and Industry.
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
                        <Link href="/services" className="">
                            <Button className="mt-14 "> View More </Button>
                        </Link>
                    </div>
                </div>

                {/* story section*/}
                <div className="overflow-hidden sm:px-16 ">
                    <div className="">
                        <div className="">
                            <div className="justify-center block bg-black sm:flex">
                                <div
                                    className="sm:w-[50%]  opacity-60"
                                    style={{
                                        backgroundImage: "url('images/homePage/storyOne.jpg')",
                                        backgroundAttachment: "fixed",
                                        backgroundSize: "cover",
                                    }}
                                >
                                    {/* <div className="sm:h-[35rem] bg-red-700" >
                   */}
                                    {/* <img
                                        className="sm:hidden opacity-90"
                                        src="images/homePage/storyOne.jpg"
                                        alt=""
                                        style={{}}
                                    />  */}
                                </div>
                                <div className="bg-white sm:w-[50%] ">
                                    <div
                                        className="container  px-4 pt-6 sm:pt-20 sm:px-20"
                                        data-aos="fade-left"
                                        data-aos-duration="2000"
                                    >
                                        <p className="text-red-700 sm:text-left sm:text-2lx">
                                            DID YOU KNOW THAT
                                        </p>
                                        <h2 className="font-bold text-red-600 sm:text-left sm:text-3xl">
                                            GITC is among seven trade remedy institutions and
                                            investigating authorities in Africa.
                                        </h2>
                                        <p className="mb-5 sm:text-left">
                                            These other African countries are: Egypt, South Africa,
                                            Morocco, Tunisia, Mauritius, and Madagascar.
                                        </p>
                                        <div className="pb-4">
                                            <Link href="/story">
                                                <ButtonOutline className="sm:w-[14rem] bg-primary my-14 border-primary/40 text-white hover:bg-red-400/80 hover:text-white">
                                                    Read Our Story
                                                </ButtonOutline>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col-reverse justify-center bg-black sm:flex sm:flex-row ">
                                <div className="text-white sm:w-[50%] bg-red-700">
                                    <div
                                        className="container px-4 py-14 sm:px-10"
                                        data-aos="fade-right"
                                        data-aos-duration="2000"
                                    >
                                        <img
                                            src="images/quote2.png"
                                            alt="quote"
                                            className="w-[8%]  xs:hidden"
                                        />
                                        <div className="pl-8">

                                            <h2 className=" mt-0 pt-2 my-6 font-bold text-white sm:text-3xl">
                                                The bane of development in developing countries as against
                                                developed countries is the lack of industrialization in
                                                the former. The inability of developing counties ...
                                            </h2>

                                            <Link href="/story">
                                                <ButtonOutline className="sm:w-[14rem] my-6 bg-white text-primary border-white/40 hover:bg-red-100/40 hover:text-white ">
                                                    Read More
                                                </ButtonOutline>
                                            </Link>

                                            <div className="">
                                                <h1 className="text-2xl sm:pt-1 text-white">
                                                    Frank Agyekum
                                                </h1>
                                                <p className="font-light text-white">
                                                    Executive Secretary
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <div
                                    className="sm:w-[80rem] sm:h-[40rem] h-52  opacity-60"
                                    style={{
                                        backgroundImage:
                                            "url('/images/homePage/Min.jpg')",
                                        backgroundAttachment: "fixed",
                                        objectFit: "fill",
                                        backgroundRepeat: "round",
                                    }}
                                > */}
                                <div className="sm:w-[50%]">
                                    <img
                                        className="sm:h-[100%] "
                                        src="/images/homePage/Min.jpg"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* partners section */}
                <div className="py-10 mt-20 mb-20 bg-gray-100">
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

                            </div>

                        </div>
                    </div>
                </div>

                {/* newsletters section*/}
                <div className="w-full px-2 pb-16 justify-content-center text-center">
                    <div className="flex pb-4">
                        <div className="mx-auto px-3 ">
                            <div className=" bg-slate-200 rounded shadow-xl">
                                <div className="pt-10 px-10 pb-7">
                                    <p className="sm:text-[3rem] text-[1.8rem]">Join our newsletters</p>
                                    <p className="pt-5">Subscribe to get access to more news and updates</p>
                                </div>

                                <div className="pb-16">
                                    {/* <form onSubmit={submitEmail} className="sm:w-[40rem]" >
                                        <input
                                            onBlur={newsLetter.handleBlur}
                                            required="required"
                                            type="email"
                                            value={newsLetter.state.email}
                                            name="email"
                                            onChange={newsLetter.handleChange}
                                            placeholder="enter your email" />
                                        <button type="submit" className="p-1 border-red-200 bg-white m-3">Subscribe</button>
                                    </form> */}
                                    <form onSubmit={newsLetter.handleSubmit} className="sm:w-[40rem]">
                                        {success ?
                                            <p className="text-[18px] text-red-600 ">
                                                Thank you for subscribing to our newsletters
                                            </p>
                                            :
                                            <div>
                                                <div className="px-16 text-center ">
                                                    <p className="text-left text-[13px] text-red-600 ">
                                                        {newsLetter.errors.email}

                                                        {errorMessage}
                                                    </p>
                                                </div>
                                                <div className="px-16 text-center flex">
                                                    <input type="email"
                                                        className="rounded w-full focus:ring mr-2 focus:ring-primary/20 border-none"
                                                        onBlur={newsLetter.handleBlur}
                                                        value={newsLetter.state.email}
                                                        name="email"
                                                        onChange={newsLetter.handleChange}
                                                        placeholder="Enter Your Email"
                                                    />


                                                    {/* <p className="bg-red-200/80 rounded m-4 text-center text-red-600">
                                                        You have subscribed to our daily newsletters !!
                                                    </p> */}

                                                    <button type="submit" className="py-2 sm:px-3 px-2 rounded border text-white bg-red-500 hover:bg-red-400 hover:text-white ">Subscribe</button>

                                                </div>
                                            </div>
                                        }

                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </WebsiteLayout>
    );
};

export default Index;
