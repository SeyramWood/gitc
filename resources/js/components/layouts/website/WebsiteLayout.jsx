import "animate.css";
import React from "react";
import { Carousel, CarouselItem } from "../../carousel";

const WebsiteLayout = ({ children, page }) => {
    const sliders = [
        {
            image: "/images/homePage/serviceTwo.jpg",
            content: {
                h1: "Subsidy & countervailing",
                p: `We provide action where imposed subsidy is specified an causes material injury to a domestic industry.`,
            },
            buttons: [
                <button className="banner__buttons__btn banner__buttons--transparent animate__animated animate__fadeInUp animate__delay-2s">
                    Learn More
                </button>,
                <button className="banner__buttons__btn banner__buttons--solid animate__animated animate__fadeInUp animate__delay-2s">
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
                <button className="banner__buttons__btn banner__buttons--solid animate__animated animate__fadeInUp animate__delay-2s">
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
                <button className="banner__buttons__btn banner__buttons--solid animate__animated animate__fadeInUp animate__delay-2s">
                    Contact Us
                </button>,
            ],
        },
    ];
    return (
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
    );
};

{
    /* <main className="w-full">
<Navigation />
<Banner page={page} />
<main>{children}</main>
<Footer />
</main> */
}

export default WebsiteLayout;
