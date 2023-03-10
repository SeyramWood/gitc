// slider
import { Link } from "@inertiajs/inertia-react";
import { useKeenSlider } from "keen-slider/react";
// gallery
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";

import { WebsiteLayout } from "../../components/layouts";
import Paragraph from "../../components/layouts/website/Paragraph";

import "keen-slider/keen-slider.min.css";
// import "../../../css/style.css";
import "yet-another-react-lightbox/styles.css";

const Publication = () => {
    const [open, setOpen] = useState(false);
    const [openOne, setOpenOne] = useState(false);
    const [openTwo, setOpenTwo] = useState(false);
    const [openThree, setOpenThree] = useState(false);
    const [openFour, setOpenFour] = useState(false);
    const [openFive, setOpenFive] = useState(false);

    const [currentSlide, setCurrentSlide] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const [sliderRef, instanceRef] = useKeenSlider({
        breakpoints: {
            "(min-width: 400px)": {
                slides: { perView: 1, spacing: 1 },
                loop: true,
                mode: "free-snap",
            },
            "(min-width: 1000px)": {
                slides: { perView: 3, spacing: 20 },
                loop: true,
                mode: "free-snap",
            },
        },

        initial: 0,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
        created() {
            setLoaded(true);
        },
    });

    return (
        <WebsiteLayout page="publication">
            <div className="bg-white ">
                <div className="text-center pt-10">
                    <h2 className="pb-16 sm:text-[3rem] text-center text-red-600">
                        Press Releases and Speeches
                    </h2>
                </div>

                {/* publicatation */}
                <div className=" sm:px-[6rem]  ">
                    <div className="relative sm:pb-28">
                        <div ref={sliderRef} className=" keen-slider">
                            <div className="keen-slider__slide number-slide1 ">
                                <Link href="">
                                    <div className="relative">
                                        <img
                                            src="images/publication/pub1.jpg"
                                            className="object-cover sm:h-[20rem]"
                                            alt=""
                                        />
                                        <div className="absolute bottom-0 left-0 bg-primary h-[5rem] w-[5rem]">
                                            <div className="block text-center font-bold text-white uppercase">
                                                <div>June</div>
                                                <div>10</div>
                                                <div>2022</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-slate-100 p-3 overflow-hidden h-[60%]">
                                        <p className="uppercase text-primary font-bold">
                                            <Link href="">
                                                GITC dismisses petition to ban
                                                iron, steels import
                                            </Link>
                                        </p>
                                        <p>
                                            The Ghana International Trade
                                            Commission has made Determinations
                                            on petitions brought before
                                        </p>
                                    </div>
                                </Link>
                            </div>

                            <div className="keen-slider__slide number-slide2">
                                <Link href="/">
                                    <div className="relative">
                                        <img
                                            src="images/publication/pub2.jpg"
                                            className="object-cover h-[20rem]"
                                            alt=""
                                        />
                                        <div className="absolute bottom-0 left-0 bg-primary h-[5rem] w-[5rem]">
                                            <div className="block font-bold text-center text-white uppercase">
                                                <div>March</div>
                                                <div>2</div>
                                                <div>2021</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-slate-100 p-3 overflow-hidden h-[60%]">
                                        <p className="uppercase font-bold text-primary">
                                            <Link href="">
                                                Interim Ghana-UK Trade
                                                Partnership Agreement
                                            </Link>
                                        </p>
                                        <p>
                                            On 2 March 2021, the Interim Trade
                                            Partnership Agreement between the
                                            Republic of Ghana
                                        </p>
                                    </div>
                                </Link>
                            </div>

                            <div className="keen-slider__slide number-slide3">
                                <Link href="/">
                                    <div className="relative">
                                        <img
                                            src="images/publication/pub3.jpg"
                                            className="object-cover h-[20rem]"
                                            alt=""
                                        />
                                        <div className="absolute bottom-0 left-0 bg-primary h-[5rem] w-[5rem]">
                                            <div className="block font-bold text-center text-white uppercase">
                                                <div>Nov</div>
                                                <div>7</div>
                                                <div>2019</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-slate-100 p-3 overflow-hidden h-[60%]">
                                        <p className="uppercase font-bold text-primary">
                                            <Link href="">
                                                Notice of Initiation and Request
                                                for Information Aluminium Coils
                                                and Circles
                                            </Link>
                                        </p>
                                        <p>
                                            Agency:Ghana InternationalTrade
                                            Commission
                                        </p>
                                    </div>
                                </Link>
                            </div>
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
                            <div className="text-center pt-6">
                                {[
                                    ...Array(instanceRef.current.track.details.slides.length).keys(),
                                ].map((idx) => {
                                    return (
                                        <button
                                            key={idx}
                                            onClick={() => {
                                                instanceRef.current?.moveToIdx(idx)
                                            }}
                                            className={"dot" + (currentSlide === idx ? " active" : "")}
                                        ></button>
                                    )
                                })}
                            </div>
                        )}
                    </div>
                </div>

               
            </div>
        </WebsiteLayout>
    );
};

export default Publication;
function Arrow(props) {
    const disabeld = props.disabled ? " arrow--disabled" : "";
    return (
        <svg
            onClick={props.onClick}
            className={`arrow ${props.left ? "arrow--left" : "arrow--right"
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
