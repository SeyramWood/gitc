import HeadingPrimary from "../../components/layouts/website/HeadingPrimary";
import Paragraph from "../../components/layouts/website/Paragraph";

// gallery 
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useState } from "react";

// slider
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "../../../css/style.css"
import { Link } from "@inertiajs/inertia-react";

const Publication = () => {

    const [open, setOpen] = useState(false);
    const [openOne, setOpenOne] = useState(false);
    const [openTwo, setOpenTwo] = useState(false);
    const [openThree, setOpenThree] = useState(false);
    const [openFour, setOpenFour] = useState(false);
    const [openFive, setOpenFive] = useState(false);

    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider({
        breakpoints: {
            "(min-width: 400px)": {
                slides: { perView: 1, spacing: 1 },
            },
            "(min-width: 1000px)": {
                slides: { perView: 3, spacing: 2 },
            },
        },

        initial: 0,
        slideChanged(slider) { setCurrentSlide(slider.track.details.rel) },
        created() { setLoaded(true) },

    })

    const releases = [
        {
            title: '',
            img: '',
            content: '',
        }
    ]

    return (
        <div className="bg-white">

            <div className=" sm:mx-[10rem] sm:mb-28">
                <div className="navigation-wrapper  ">
                    <div ref={sliderRef} className="keen-slider ">

                        <div className="keen-slider__slide number-slide1 " >
                            <div className="relative">
                                <img src="images/publication/pub1.jpg" className="object-cover sm:h-[20rem]" alt="" />
                                <div className="absolute bottom-0 left-0 bg-primary h-[5rem] w-[5rem]">
                                    <div className="block text-white text-center uppercase">
                                        <div>June</div>
                                        <div>10</div>
                                        <div>2022</div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-slate-100 p-3">
                                <Paragraph className="uppercase font-sm text-primary">
                                    <Link href="">
                                        GITC dismisses
                                        petition to ban
                                        iron, steels import
                                    </Link>
                                </Paragraph>
                                <Paragraph >
                                    The Ghana
                                    International Trade
                                    Commission has made
                                    Determinations on
                                    petitions brought before
                                </Paragraph>
                            </div>
                        </div>

                        <div className="keen-slider__slide number-slide2" >
                            <div className="relative">
                                <img src="images/publication/pub2.jpg" className="object-cover h-[20rem]" alt="" />
                                <div className="absolute bottom-0 left-0 bg-primary h-[5rem] w-[5rem]">
                                    <div className="block text-white text-center uppercase">
                                        <div>March</div>
                                        <div>2</div>
                                        <div>2021</div>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <div className="bg-slate-100 p-3">
                                    <Paragraph className="uppercase font-sm text-primary">
                                        <Link href="">
                                            Interim Ghana-UK
                                            Trade Partnership
                                            Agreement
                                        </Link>
                                    </Paragraph>
                                    <Paragraph >
                                        On 2 March 2021, the
                                        Interim Trade
                                        Partnership Agreement
                                        between the Republic
                                        of Ghana
                                    </Paragraph>
                                </div>
                            </div>
                        </div>

                        <div className="keen-slider__slide number-slide3" >
                            <div className="relative">
                                <img src="images/publication/pub3.jpg" className="object-cover h-[20rem]" alt="" />
                                <div className="absolute bottom-0 left-0 bg-primary h-[5rem] w-[5rem]">
                                    <div className="block text-white text-center uppercase">
                                        <div>Nov</div>
                                        <div>7</div>
                                        <div>2019</div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-slate-100 p-3">
                                <Paragraph className="uppercase font-sm text-primary">
                                    <Link href="">
                                        Notice of Initiation
                                        and Request for
                                        Information
                                        Aluminium Coils
                                        and Circles
                                    </Link>
                                </Paragraph>
                                <Paragraph >
                                    Agency:Ghana
                                    InternationalTrade
                                    Commission
                                </Paragraph>
                            </div>
                        </div>

                        <div className="keen-slider__slide number-slide4" >
                            <div className="">
                                <img src="images/about/bg.jpg" className="object-cover h-[17rem]" alt="" />
                            </div>
                            <div className="">
                                <Paragraph>
                                    Text here
                                </Paragraph>
                            </div>
                        </div>

                        <div className="keen-slider__slide number-slide5" >
                            <div className="">
                                <img src="images/about/bg.jpg" className="object-cover h-[17rem]" alt="" />
                            </div>
                            <div className="">
                                <Paragraph>
                                    Text here
                                </Paragraph>
                            </div>
                        </div>

                        <div className="keen-slider__slide number-slide6" >
                            <div className="">
                                <img src="images/about/bg.jpg" className="object-cover h-[17rem]" alt="" />
                            </div>
                            <div className="">
                                <Paragraph>
                                    Text here
                                </Paragraph>
                            </div>
                        </div>

                    </div>
                    {loaded && instanceRef.current && (
                        <>
                            <Arrow
                                left
                                onClick={(e) =>
                                    e.stopPropagation() || instanceRef.current?.prev()
                                }
                                disabled={currentSlide === 0}
                            />

                            <Arrow
                                onClick={(e) =>
                                    e.stopPropagation() || instanceRef.current?.next()
                                }
                                disabled={
                                    currentSlide ===
                                    instanceRef.current.track.details.slides.length - 1
                                }
                            />
                        </>
                    )}
                </div>
            </div>

            {/* gallery */}
            <div className="">
                <div className="text-center mb-7">
                    <HeadingPrimary>
                        Our Gallery
                    </HeadingPrimary>
                    <Paragraph>
                        MEETINGS, WORSHSHOPS, COURTESY CALLS
                    </Paragraph>
                </div>
                <div className="sm:flex justify-center">
                    <div class="sm:grid grid-cols-3">
                        <div className="relative sm:w-[20rem] mx-3 mb-10" >
                            <div className="bg-black overflow-hidden " onClick={() => setOpen(true)}>
                                <img src="images/about/bg.jpg" className="object-cover h-[17rem] transition duration-700 ease-in-out hover:scale-110 hover:opacity-75 bg-black/40" alt="" />
                            </div>
                            <div className="bg-black/40 insect-0 absolute"></div>
                            <Lightbox
                                open={open}
                                close={() => setOpen(false)}
                                slides={[
                                    { src: "/images/homepage/serviceOne.jpg" },
                                    { src: "/images/homepage/serviceTwo.jpg" },
                                    { src: "/images/homepage/serviceThree.jpg" },
                                ]}
                            />
                            <div className="text-center bg-slate-100 p-5">
                                <Paragraph className="text-primary uppercase ">
                                    COURTESY CALL TO
                                    GHANA STATISTICAL SERVICE
                                </Paragraph>
                                <Paragraph>
                                    19th May 2022
                                </Paragraph>
                            </div>
                        </div>
                        <div className=" sm:w-[20rem]  mx-3 mb-10" >
                            <div className="bg-black overflow-hidden" onClick={() => setOpen(true)}>
                                <img src="images/about/bg.jpg" className="object-cover h-[17rem] transition duration-700 ease-in-out hover:scale-110 hover:opacity-75 bg-black/40" alt="" />
                            </div>
                            <Lightbox
                                open={openOne}
                                close={() => setOpenOne(false)}
                                slides={[
                                    { src: "/images/homepage/sponsorOne.jpg" },
                                    { src: "/images/homepage/serviceTwo.jpg" },
                                    { src: "/images/homepage/serviceThree.jpg" },
                                ]}
                            />
                            <div className="text-center bg-slate-100 p-5">
                                <Paragraph className="text-primary uppercase ">
                                    COURTESY CALL TO
                                    GHANA Revenue Authority
                                </Paragraph>
                                <Paragraph>
                                    2nd June 2022
                                </Paragraph>
                            </div>
                        </div>
                        <div className=" sm:w-[20rem]  mx-3 mb-10" >
                            <div className="" onClick={() => setOpenTwo(true)}>
                                <img src="images/about/bg.jpg" className="object-cover h-[17rem]" alt="" />
                            </div>
                            <Lightbox
                                open={openTwo}
                                close={() => setOpenTwo(false)}
                                slides={[
                                    { src: "/images/homepage/sponsorOne.jpg" },
                                    { src: "/images/homepage/serviceTwo.jpg" },
                                    { src: "/images/homepage/serviceThree.jpg" },
                                ]}
                            />
                            <div className="text-center bg-slate-100 p-5">
                                <Paragraph className="text-primary uppercase ">
                                    ASSOCIATION OF GHANA
                                    INDUSTRIES COURTESY CALL
                                    TO GITC

                                </Paragraph>
                                <Paragraph>
                                    27th May 2022
                                </Paragraph>
                            </div>
                        </div>
                        <div className="sm:w-[20rem]  mx-3 mb-10" >
                            <div className="" onClick={() => setOpenThree(true)}>
                                <img src="images/about/bg.jpg" className="object-cover h-[17rem]" alt="" />
                            </div>
                            <Lightbox
                                open={openThree}
                                close={() => setOpenThree(false)}
                                slides={[
                                    { src: "/images/homepage/sponsorOne.jpg" },
                                    { src: "/images/homepage/serviceTwo.jpg" },
                                    { src: "/images/homepage/serviceThree.jpg" },
                                ]}
                            />
                            <div className="text-center bg-slate-100 p-5">
                                <Paragraph className="text-primary uppercase ">
                                    HON.DEPUTY MINISTER (TRADE)
                                    COURTESY CALL TO GITC

                                </Paragraph>
                                <Paragraph>
                                    19th May,2022
                                </Paragraph>
                            </div>
                        </div>
                        <div className=" sm:w-[20rem]  mx-3 mb-10" >
                            <div className="" onClick={() => setOpenFour(true)}>
                                <img src="images/about/bg.jpg" className="object-cover h-[17rem]" alt="" />
                            </div>
                            <Lightbox
                                open={openFour}
                                close={() => setOpenFour(false)}
                                slides={[
                                    { src: "/images/homepage/sponsorOne.jpg" },
                                    { src: "/images/homepage/serviceTwo.jpg" },
                                    { src: "/images/homepage/serviceThree.jpg" },
                                ]}
                            />
                            <div className="text-center bg-slate-100 p-5">
                                <Paragraph className="text-primary uppercase ">
                                    TRAINING SESSION
                                    WITH BMWK
                                </Paragraph>
                                <Paragraph>
                                    19th -29th April 2022
                                </Paragraph>
                            </div>
                        </div>
                        <div className=" sm:w-[20rem]  mx-3 mb-10" >
                            <div className="" onClick={() => setOpenFive(true)}>
                                <img src="images/about/bg.jpg" className="object-cover h-[17rem]" alt="" />
                            </div>
                            <Lightbox
                                open={openFive}
                                close={() => setOpenFive(false)}
                                slides={[
                                    { src: "/images/homepage/sponsorOne.jpg" },
                                    { src: "/images/homepage/serviceTwo.jpg" },
                                    { src: "/images/homepage/serviceThree.jpg" },
                                ]}
                            />
                            <div className="text-center bg-slate-100 p-5">
                                <Paragraph className="text-primary uppercase ">
                                    GITC RETREAT WITH
                                    STAFF,TECHNICAL COMMITTEE AND GOVERNING BOARD
                                </Paragraph>
                                <Paragraph>
                                    17th - 18th March 2022
                                </Paragraph>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Publication;
function Arrow(props) {
    const disabeld = props.disabled ? " arrow--disabled" : ""
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
    )
}