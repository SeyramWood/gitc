import React from "react";
import {
    SlCallIn,
    SlClock,
    SlEnvelopeOpen,
    SlLocationPin,
} from "react-icons/sl";
// import "keen-slider/keen-slider.min.css";
// import { useKeenSlider } from "keen-slider/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "animate.css";
import "../../../../css/banner.scss";

const Banner = ({ page }) => {
    return (
        <section className="w-full">
            <header className="w-full h-[4rem] bg-white hidden md:flex justify-between items-center text-lg px-web-l text-secondary">
                <ul className="flex self-stretch">
                    <li className="flex items-center pr-4 mr-5 text-center border-r-2 border-gray-100">
                        <span className="mr-2">
                            <SlClock />
                        </span>
                        <span className="">Mon-Fri 08:00 - 17:00</span>
                    </li>
                    <li className="flex items-center text-center hover:text-primary">
                        <a
                            href="tel:+233302960298"
                            className="flex items-center text-center"
                        >
                            <span className="mr-2">
                                <SlCallIn />
                            </span>
                            <span>+233(0) 30 296 0298</span>
                        </a>
                    </li>
                </ul>
                <ul className="flex self-stretch">
                    <li className="pr-4 border-r-2 border-gray-100 hover:text-primary">
                        <a
                            href="mailto:info@gitc.gov.gh"
                            className="h-[100%] flex items-center text-center"
                        >
                            <span className="mr-2">
                                <SlEnvelopeOpen />
                            </span>
                            <span>info@gitc.gov.gh</span>
                        </a>
                    </li>
                    <li className="flex items-center ml-5 text-center">
                        <span className="mr-2">
                            <SlLocationPin />
                        </span>
                        <span>GL-040-2630</span>
                    </li>
                </ul>
            </header>
            {page === "home" && <BannerHome />}
            {page === "about" && <BannerAbout />}
            {page === "service" && <BannerServices />}
        </section>
    );
};

export default Banner;

const BannerHome = () => {
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const [opacities, setOpacities] = React.useState([]);
    const [loaded, setLoaded] = React.useState(false);

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    const sliders = [
        {
            image: "/images/homePage/serviceTwo.jpg",
            content: {
                h1: "Subsidy and countervailing",
                p: `We provide action where imposed subsidy is specified an causes material injury to a domestic industry.`,
            },
            buttons: [
                <button className="banner__buttons__btn banner__buttons--transparent">
                    Learn More
                </button>,
                <button className="banner__buttons__btn banner__buttons--solid">
                    Contact Us
                </button>,
            ],
        },
        {
            image: "/images/homePage/storyTwo.jpg",
            content: {
                h1: "Safeguard Measures",
                p: `We provide measures that ensure domestic producers in Ghana are not adversely  affected by the influx of imports.`,
            },
            buttons: [
                <button className="banner__buttons__btn banner__buttons--solid">
                    Contact Us
                </button>,
            ],
        },
        {
            image: "/images/homePage/serviceThree.jpg",
            content: {
                h1: "Anti-Dumping",
                p: `We provide actions that counteract the import dumping of goods in Ghana.`,
            },
            buttons: [
                <button className="banner__buttons__btn banner__buttons--solid">
                    Contact Us
                </button>,
            ],
        },
    ];

    return (
        <section className="w-full h-[calc(100vh + 4rem)] overflow-hidden">
            <div className="h-full carousel-wrapper">
                <Carousel
                    swipeable={false}
                    draggable={false}
                    showDots={true}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={12000}
                    keyBoardControl={true}
                    customTransition="all .3s ease-in"
                    // transitionDuration={500}
                    containerClass="carousel--container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    dotListClass="custom-dot-list-style"
                    itemClass=""
                    responsive={responsive}
                >
                    {sliders.map((item, idx) => (
                        <div key={idx} className="carousel--item">
                            <div className="carousel--item--image">
                                <img src={item.image} />
                            </div>
                            <div className="overlay">
                                <section className="text-white mx-web-2xl mt-web-s px-web-s overlay__article">
                                    <article className="w-[100%] px-web-xl">
                                        <h1 className="text-9xl text-bold">
                                            {item.content.h1}
                                        </h1>
                                        <div className="w-[60%]">
                                            <p className="mt-5 text-xl">
                                                {item.content.p}
                                            </p>
                                        </div>
                                    </article>
                                    <section className="w-[100%] px-web-xl mt-12 banner__buttons">
                                        {item.buttons.map((btn) => btn)}
                                    </section>
                                </section>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
        </section>
    );
};

const BannerAbout = () => {
    return (
        <section className="banner__static about">
            <article className="text-white banner__static__article">
                <h1 className="text-7xl">About Us</h1>
                <p className="mt-5 text-2xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
            </article>
        </section>
    );
};
const BannerServices = () => {
    return (
        <section className="banner__static about">
            <article className="text-white banner__static__article">
                <h1 className="text-7xl">Our Services</h1>
                <p className="mt-5 text-2xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
            </article>
        </section>
    );
};
