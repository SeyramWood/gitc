import React from "react";
import {
    SlCallIn,
    SlClock,
    SlEnvelopeOpen,
    SlLocationPin,
} from "react-icons/sl";
import "../../../../css/banner.scss";
import "../../../../css/main.css";
import { Carousel, CarouselItem } from "../../Carousel";

const Banner = ({ page }) => {
    return (
        <section className="w-full">
            <header className="w-full h-[4rem] bg-white hidden md:flex justify-between items-center px-web-l text-secondary">
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
            {page === "contactUs" && <ContactUs />}
            {page === "publication" && <Publication />}
            {page === "story" && <Story />}
            {page === "message" && <Message />}
            {page === "faq" && <Faq />}
        </section>
    );
};

export default Banner;

const BannerHome = () => {
    const sliders = [
        {
            image: "/images/homePage/serviceTwo.jpg",
            content: {
                h1: "Subsidy & countervailing",
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
        <section className="w-full h-[calc(100vh)] overflow-hidden">
            <div className="h-full carousel-wrapper">
                <Carousel>
                    {sliders.map((slider, index) => (
                        <CarouselItem
                            key={`slider___${index}`}
                            src={slider.image}
                            heading={slider.content.h1}
                            paragraph={slider.content.p}
                            buttons={slider.buttons}
                        />
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
                <p className="mt-5 text-2xl"></p>
            </article>
        </section>
    );
};
const BannerServices = () => {
    return (
        <section className="banner__static about">
            <article className="text-white banner__static__article">
                <h1 className="text-7xl">Our Services</h1>
                <p className="mt-5 text-2xl"></p>
            </article>
        </section>
    );
};

const ContactUs = () => {
    return (
        <section className="banner__static contact">
            <article className="text-white banner__static__article">
                <h1 className="text-7xl">Contact Us</h1>
                <p className="mt-5 text-2xl">Connect with Us</p>
            </article>
        </section>
    );
};
const Publication = () => {
    return (
        <section className="banner__static publication">
            <article className="text-white banner__static__article">
                <h1 className="text-7xl">PUBLICATIONS</h1>
            </article>
        </section>
    );
};

const Story = () => {
    return (
        <section className="banner__static story">
            <article className="text-white banner__static__article">
                <h1 className="text-7xl">Our Story</h1>
            </article>
        </section>
    );
};
const Message = () => {
    return (
        <section className="banner__static message">
            <article className="text-white banner__static__article">
                <h1 className="text-7xl">Our Message</h1>
            </article>
        </section>
    );
};
const Faq = () => {
    return (
        <section className="banner__static faq">
            <article className="text-white banner__static__article">
                <h1 className="text-5xl">Frequently Asked Question</h1>
                <p className="mt-5 text-2xl">
                    The most common questions about how our business works and
                    what can do for you.
                </p>
            </article>
        </section>
    );
};
