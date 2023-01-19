import React from "react";
import {
    SlClock,
    SlCallIn,
    SlEnvelopeOpen,
    SlLocationPin,
} from "react-icons/sl";
import "keen-slider/keen-slider.min.css";
import "../../../../css/banner.scss";
import { useKeenSlider } from "keen-slider/react";

const Banner = ({ page }) => {
    return (
        <section className="w-full">
            <header className="w-full h-[4rem] bg-white hidden md:flex justify-between items-center text-xl px-web-l text-primary">
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
        </section>
    );
};

export default Banner;

const BannerHome = () => {
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const [opacities, setOpacities] = React.useState([]);
    const [loaded, setLoaded] = React.useState(false);

    const animation = { duration: 16000, easing: (t) => t };
    const sliders = [
        {
            image: "/images/homePage/serviceTwo.jpg",
            content: {
                h1: "Subsidy and countervailing",
                p: `We provide action where imposed subsidy is specified an causes material injury to a domestic industry.`,
            },
        },
        {
            image: "/images/homePage/storyTwo.jpg",
            content: {
                h1: "Safeguard Measures",
                p: `We provide measures that ensure domestic producers in Ghana are not adversely  affected by the influx of imports.`,
            },
        },
        {
            image: "/images/homePage/serviceThree.jpg",
            content: {
                h1: "Anti-Dumping",
                p: `We provide actions that counteract the import dumping of goods in Ghana.`,
            },
        },
    ];
    const [sliderRef, instanceRef] = useKeenSlider({
        // initial: 0,
        slides: sliders.length,
        loop: true,
        renderMode: "performance",
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
        created(s) {
            s.moveToIdx(sliders.length - 1, true, animation);
            setLoaded(true);
        },
        updated(s) {
            s.moveToIdx(
                s.track.details.abs + (sliders.length - 1),
                true,
                animation
            );
        },
        animationEnded(s) {
            s.moveToIdx(
                s.track.details.abs + (sliders.length - 1),
                true,
                animation
            );
        },
        detailsChanged(s) {
            const new_opacities = s.track.details.slides.map(
                (slide) => slide.portion
            );
            setOpacities(new_opacities);
        },
    });

    return (
        <section className="w-full h-screen overflow-hidden bg-tertiary">
            {/* <div className="h-full navigation-wrapper">
                <div ref={sliderRef} className="h-full fader">
                    {sliders.map((item, idx) => (
                        <div
                            key={idx}
                            className="fader__slide"
                            style={{ opacity: opacities[idx] }}
                        >
                            <img src={item.image} />
                            <div className="z-10 overlay">
                                <section className="text-white mx-web-2xl mt-web-s px-web-s overlay__article">
                                    <article className="w-[65%]">
                                        <h1 className="text-7xl">
                                            {item.content.h1}
                                        </h1>
                                        <p className="mt-5 text-2xl">
                                            {item.content.p}
                                        </p>
                                    </article>
                                </section>
                            </div>
                        </div>
                    ))}
                </div>
                {loaded && instanceRef.current && (
                    <>
                        <Arrow
                            left
                            onClick={(e) =>
                                e.stopPropagation() ||
                                instanceRef.current?.prev()
                            }
                            disabled={currentSlide === 0}
                        />

                        <Arrow
                            onClick={(e) =>
                                e.stopPropagation() ||
                                instanceRef.current?.next()
                            }
                            disabled={
                                currentSlide ===
                                instanceRef.current.track.details.slides
                                    .length -
                                    1
                            }
                        />
                    </>
                )}

                {loaded && instanceRef.current && (
                    <div className="dots">
                        {[
                            ...Array(
                                instanceRef.current.track.details.slides.length
                            ).keys(),
                        ].map((idx) => {
                            return (
                                <button
                                    key={idx}
                                    onClick={() => {
                                        instanceRef.current?.moveToIdx(idx);
                                    }}
                                    className={
                                        "dot" +
                                        (currentSlide === idx ? " active" : "")
                                    }
                                ></button>
                            );
                        })}
                    </div>
                )}
            </div> */}
        </section>
    );
};

function Arrow(props) {
    const disabeld = props.disabled ? " arrow--disabled" : "";
    return (
        <svg
            onClick={props.onClick}
            className={`arrow ${
                props.left ? "arrow--left" : "arrow--right"
            } ${disabeld}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            {props.left && (
                <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
            )}
            {!props.left && (
                <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
            )}
        </svg>
    );
}
