import React from "react";
import { SlCallIn, SlEnvelopeOpen, SlLocationPin } from "react-icons/sl";
import "keen-slider/keen-slider.min.css";
import "../../../../css/banner.css";
import { useKeenSlider } from "keen-slider/react";

const Banner = ({ page }) => {
    return (
        <section className="w-full">
            <header className="w-full h-[5rem] bg-white hidden md:flex justify-between items-center text-xl px-web-l text-tertiary">
                <ul className="flex self-stretch">
                    <li className="flex items-center pr-4 mr-5 text-center border-r-2 border-gray-100">
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

    const animation = { duration: 10000, easing: (t) => t };
    const images = [
        "https://images.unsplash.com/photo-1590004953392-5aba2e72269a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
        "https://images.unsplash.com/photo-1590004845575-cc18b13d1d0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
        "https://images.unsplash.com/photo-1590004987778-bece5c9adab6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
        "https://images.unsplash.com/photo-1590005176489-db2e714711fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
    ];
    const [sliderRef, instanceRef] = useKeenSlider({
        // initial: 0,
        slides: 4,
        loop: true,
        renderMode: "performance",
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
        created(s) {
            s.moveToIdx(3, true, animation);
            setLoaded(true);
        },
        updated(s) {
            s.moveToIdx(s.track.details.abs + 3, true, animation);
        },
        animationEnded(s) {
            s.moveToIdx(s.track.details.abs + 3, true, animation);
        },
        detailsChanged(s) {
            const new_opacities = s.track.details.slides.map((slide) => {
                console.log("====================================");
                console.log("slide.portion", slide.portion);
                console.log("====================================");
                return slide.portion;
            });
            setOpacities(new_opacities);
        },
    });

    return (
        <section className="w-full h-screen overflow-hidden bg-tertiary">
            <div className="h-full navigation-wrapper">
                <div ref={sliderRef} className="h-full fader">
                    {images.map((src, idx) => (
                        <div
                            key={idx}
                            className="fader__slide"
                            style={{ opacity: opacities[idx], scale: 1.3 }}
                        >
                            <img src={src} />
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
            </div>
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
