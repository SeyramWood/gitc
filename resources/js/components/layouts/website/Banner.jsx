import React from "react";

import { Carousel, CarouselItem } from "../../carousel";

import "../../../../css/banner.scss";

const Banner = ({ page }) => {
    return (
        <>
            {page === "home" && <BannerHome />}
            {page === "about" && <BannerAbout />}
            {page === "service" && <BannerServices />}
            {page === "resource" && <BannerResources />}
            {page === "publication" && <Publication />}
            {page === "gallery" && <BannerGalleries />}
            {page === "contactUs" && <ContactUs />}
            {page === "message" && <Message />}
            {page === "story" && <Story />}
            {page === "faq" && <Faq />}
        </>
    );
};

export default Banner;

const BannerHome = () => {
    const sliders = [
        {
            image: "/images/banner/anti-dumping.jpg",
            content: {
                h1: "Anti-Dumping",
                p: `We provide remedies to counteract the dumping of imported products into Ghana.`,
            },
            buttons: ["Learn More"],
        },
        {
            image: "/images/banner/customs-valuation.jpg",
            content: {
                h1: "Customs Valuation", //(Dispute Settlement)
                p: `We settle disputes arising from classification, valuation, or origin determination by Customs Division of Ghana Revenue Authority.`,
            },
            buttons: ["Learn More"],
        },
        {
            image: "/images/banner/safeguard-measure.jpg",
            content: {
                h1: "Safeguard Measures",
                p: `We provide measures that ensure domestic producers in Ghana are not adversely  affected by the influx of imports.`,
            },
            buttons: ["Learn More"],
        },
        {
            image: "/images/banner/subsidy.png",
            content: {
                h1: "Subsidy & Countervailing",
                p: `We provide measures to counteract the adverse effect of imported subsidized Products.`,
            },
            buttons: ["Learn More"],
        },
    ];

    return (
        <section className="w-full h-[var(--banner-height-sm)] md:h-[var(--banner-height-sm)] lg:h-[var(--banner-height)] overflow-hidden">
            <div className="w-full h-full carousel-wrapper">
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
        <section className="banner__static about h-[var(--banner-height-sm)] md:h-[var(--banner-height-sm)] lg:h-[var(--banner-height)]">
            <article className="text-white banner__static__article">
                <h1 className="text-5xl lg:text-7xl text-bold">About Us</h1>
                {/* <p className="mt-8 text-[1.2rem] lg:text-3xl font-light text-white"></p> */}
            </article>
        </section>
    );
};
const BannerServices = () => {
    return (
        <section className="banner__static services h-[var(--banner-height-sm)] md:h-[var(--banner-height-sm)] lg:h-[var(--banner-height)]">
            <article className="text-white banner__static__article">
                <h1 className="text-7xl text-bold">Our Services</h1>
                <p className="mt-8 text-3xl font-light text-white"></p>
            </article>
        </section>
    );
};
const BannerResources = () => {
    return (
        <section className="banner__static resources h-[var(--banner-height-sm)] md:h-[var(--banner-height-sm)] lg:h-[var(--banner-height)]">
            <article className="text-white banner__static__article">
                <h1 className="text-5xl lg:text-7xl text-bold">Resources</h1>
                <p className="mt-8 text-3xl font-light text-white"></p>
            </article>
        </section>
    );
};

const BannerGalleries = () => {
    return (
        <section className="banner__static gallery h-[var(--banner-height-sm)] md:h-[var(--banner-height-sm)] lg:h-[var(--banner-height)]">
            <article className="text-white banner__static__article">
                <h1 className="text-5xl lg:text-7xl text-bold">Gallery</h1>
                <p className="mt-8 text-3xl font-light text-white"></p>
            </article>
        </section>
    );
};

const ContactUs = () => {
    return (
        <section className="banner__static contact h-[var(--banner-height-sm)] md:h-[var(--banner-height-sm)] lg:h-[var(--banner-height)]">
            <article className="text-white banner__static__article">
                <h1 className="text-5xl lg:text-7xl text-bold">Contact Us</h1>
                <p className="mt-8 text-3xl font-light text-white">
                    Connect with Us
                </p>
            </article>
        </section>
    );
};

const Publication = () => {
    return (
        <section className="banner__static publication h-[var(--banner-height-sm)] md:h-[var(--banner-height-sm)] lg:h-[var(--banner-height)]">
            <article className="text-white banner__static__article">
                <h1 className="text-5xl lg:text-7xl text-bold">Publications</h1>
            </article>
        </section>
    );
};

const Story = () => {
    return (
        <section className="banner__static story h-[var(--banner-height-sm)] md:h-[var(--banner-height-sm)] lg:h-[var(--banner-height)]">
            <article className="text-white banner__static__article">
                <h1 className="text-5xl lg:text-7xl text-bold">Our Story</h1>
            </article>
        </section>
    );
};
const Message = () => {
    return (
        <section className="banner__static message h-[var(--banner-height-sm)] md:h-[var(--banner-height-sm)] lg:h-[var(--banner-height)]">
            <article className="text-white banner__static__article">
                <h1 className="text-5xl lg:text-7xl text-bold">Our Message</h1>
            </article>
        </section>
    );
};
const Faq = () => {
    return (
        <section className="banner__static faq h-[var(--banner-height-sm)] md:h-[var(--banner-height-sm)] lg:h-[var(--banner-height)]">
            <article className="text-white banner__static__article">
                <h1 className="text-5xl lg:text-7xl text-bold">
                    Frequently Asked Question
                </h1>
                <p className="mt-8 text-3xl font-light text-white">
                    The most common questions about how our business works and
                    what can do for you.
                </p>
            </article>
        </section>
    );
};
