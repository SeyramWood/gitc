// slider
import { InertiaLink, Link } from "@inertiajs/inertia-react";
import { useKeenSlider } from "keen-slider/react";
// gallery
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";

import { WebsiteLayout } from "../../components/layouts";
import HeadingPrimary from "../../components/layouts/website/HeadingPrimary";
import Paragraph from "../../components/layouts/website/Paragraph";

import "../../../css/style.css";
import "keen-slider/keen-slider.min.css";
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
            },
            "(min-width: 1000px)": {
                slides: { perView: 3, spacing: 2 },
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

    const releases = [
        {
            main_img: "images/about/bg.jpg",
            gallery: [
                "/images/homepage/serviceOne.jpg",
                "/images/homepage/serviceTwo.jpg",
                "/images/homepage/serviceTwo.jpg",
            ],
            title: " COURTESY CALL TO GHANA STATISTICAL SERVICE",
            date: " 19th May 2022",
        },
        {
            main_img: "",
            gallery: [
                "/images/homepage/serviceTwo.jpg",
                "/images/homepage/serviceTwo.jpg",
            ],
            title: " COURTESY CALL TO GHANA Revenue Authority",
            date: "2nd June 2022",
        },
        {
            main_img: "",
            gallery: ["", "", ""],
            title: "  ASSOCIATION OF GHANA INDUSTRIES COURTESY CALL TO GITC",
            date: "27th May 2022",
        },
        {
            main_img: "",
            gallery: ["", "", ""],
            title: "HON.DEPUTY MINISTER (TRADE) COURTESY CALL TO GITC",
            date: "19th May,2022",
        },
        {
            main_img: "",
            gallery: ["", "", ""],
            title: "TRAINING SESSION WITH BMWK",
            date: "19th -29th April 2022",
        },
        {
            main_img: "",
            gallery: ["images/homepage/serviceTwo.jpg", "", ""],
            title: " GITC RETREAT WITH STAFF,TECHNICAL COMMITTEE AND GOVERNING BOARD",
            date: "17th - 18th March 2022",
        },
    ];

    return (
        <WebsiteLayout page="publication">
            <div className="bg-white ">
                <div className="text-center ">
                    <h2 className="py-16 sm:text-[3rem] text-center text-red-600">
                        PRESS RELEASES & SPEECHES
                    </h2>
                </div>

                <div className=" sm:mx-[7rem] sm:mb-28 ">
                    <div className="relative">
                        <div ref={sliderRef} className="keen-slider gap-4">
                            <div className="keen-slider__slide number-slide1 ">
                                <Link href="">
                                    <div className="relative">
                                        <img
                                            src="images/publication/pub1.jpg"
                                            className="object-cover sm:h-[20rem]"
                                            alt=""
                                        />
                                        <div className="absolute bottom-0 left-0 bg-primary h-[5rem] w-[5rem]">
                                            <div className="block text-white text-center uppercase">
                                                <div>June</div>
                                                <div>10</div>
                                                <div>2022</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-slate-100 p-3 overflow-hidden h-[60%]">
                                        <p className="uppercase  text-primary">
                                            <Link href="">
                                                GITC dismisses petition to ban iron,
                                                steels import
                                            </Link>
                                        </p>
                                        <p>
                                            The Ghana International Trade Commission
                                            has made Determinations on petitions
                                            brought before
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
                                            <div className="block text-white text-center uppercase">
                                                <div>March</div>
                                                <div>2</div>
                                                <div>2021</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-slate-100 p-3 overflow-hidden h-[60%]">
                                        <p className="uppercase text-primary">
                                            <Link href="">
                                                Interim Ghana-UK Trade Partnership
                                                Agreement
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
                                            <div className="block text-white text-center uppercase">
                                                <div>Nov</div>
                                                <div>7</div>
                                                <div>2019</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-slate-100 p-3 overflow-hidden h-[60%]">
                                        <p className="uppercase text-primary">
                                            <Link href="">
                                                Notice of Initiation and Request for
                                                Information Aluminium Coils and
                                                Circles
                                            </Link>
                                        </p>
                                        <p>
                                            Agency:Ghana InternationalTrade
                                            Commission
                                        </p>
                                    </div>
                                </Link>
                            </div>

                            <div className="keen-slider__slide number-slide4">
                                <Link href="">
                                    <div className="relative">
                                        <img
                                            src="images/publication/pub3.jpg"
                                            className="object-cover h-[20rem]"
                                            alt=""
                                        />
                                        <div className="absolute bottom-0 left-0 bg-primary h-[5rem] w-[5rem]">
                                            <div className="block text-white text-center uppercase">
                                                <div>Nov</div>
                                                <div>7</div>
                                                <div>2019</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-slate-100 p-3 overflow-hidden h-[60%]">
                                        <p className="uppercase text-primary">
                                            <Link href="">
                                                Notice of Initiation and Request for
                                                Information Aluminium Coils and
                                                Circles
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
                    </div>
                </div>

                {/* gallery */}
                <div className="">
                    <div className="text-center mb-7">
                        <h2 className="text-red-600 sm:text-[4rem]">Our Gallery</h2>
                        <p>
                            MEETINGS, WORSHSHOPS, COURTESY CALLS
                        </p>
                    </div>
                    <div className="sm:flex justify-center">
                        <div className="sm:grid grid-cols-3">
                            {/*
                         {
                            releases.map((data) => (
                            // console.log(data.gallery.img)
                            // <div className="">{data.date}</div>
                            <div className="relative sm:w-[20rem] mx-3 mb-10" >
                                <div className="bg-black overflow-hidden " onClick={() => setOpen(true)}>
                                    <img src={data.main_img} className="object-cover h-[17rem] transition duration-700 ease-in-out hover:scale-110 hover:opacity-75 bg-black/40" alt="" />
                                </div>
                                <div className="bg-black/40 insect-0 absolute"></div>
                                <Lightbox
                                    open={open}
                                    close={() => setOpen(false)}
                                    slides={[
                                        { src: "/images/homepage/serviceOne.jpg"},
                                        { src: "/images/homepage/serviceTwo.jpg"},
                                        { src: "/images/homepage/serviceThree.jpg"},
                                    ]}
                                />
                                <div className="text-center bg-slate-100 p-5  sm:h-[35%]">
                                    <Paragraph className="text-primary uppercase ">
                                        COURTESY CALL TO
                                        GHANA STATISTICAL SERVICE
                                    </Paragraph>
                                    <Paragraph>
                                        19th May 2022
                                    </Paragraph>
                                </div>
                            </div>
                        ))
                        }
                        */}
                            <div className="relative sm:w-[20rem] mx-3 mb-10">
                                <div
                                    className="bg-black overflow-hidden cursor-pointer "
                                    onClick={() => setOpen(true)}
                                >
                                    <img
                                        src="images/publish/publish.jpg"
                                        className="object-cover h-[17rem] transition duration-700 ease-in-out hover:scale-110 hover:opacity-75 bg-black/40"
                                        alt=""
                                    />
                                </div>
                                <div className="bg-black/40 insect-0 absolute"></div>
                                <Lightbox
                                    open={open}
                                    close={() => setOpen(false)}
                                    slides={[
                                        { src: "/images/publish/publish.jpg" },
                                    ]}
                                />
                                <div className="text-center bg-slate-100 p-5  sm:h-[35%]">
                                    <p className="text-primary uppercase ">
                                        COURTESY CALL TO GHANA STATISTICAL
                                        SERVICE
                                    </p>
                                    <p>19th May 2022</p>
                                </div>
                            </div>
                            <div className=" sm:w-[20rem]  mx-3 mb-10">
                                <div
                                    className="bg-black overflow-hidden cursor-pointer "
                                    onClick={() => setOpen(true)}
                                >
                                    <img
                                        src="images/publish/publish1.jpg"
                                        className="object-cover h-[17rem] transition duration-700 ease-in-out hover:scale-110 hover:opacity-75 bg-black/40"
                                        alt=""
                                    />
                                </div>
                                <Lightbox
                                    open={openOne}
                                    close={() => setOpenOne(false)}
                                    slides={[
                                        { src: "/images/publish/publish1.jpg" },
                                    ]}
                                />
                                <div className="text-center bg-slate-100 p-5 sm:h-[35%]">
                                    <p className="text-primary uppercase ">
                                        COURTESY CALL TO GHANA Revenue Authority
                                    </p>
                                    <Paragraph>2nd June 2022</Paragraph>
                                </div>
                            </div>
                            <div className=" sm:w-[20rem]  mx-3 mb-10">
                                <div
                                    className="bg-black overflow-hidden cursor-pointer "
                                    onClick={() => setOpenTwo(true)}
                                >
                                    <img
                                        src="images/publish/publish2.jpg"
                                        className="object-cover h-[17rem] transition duration-700 ease-in-out hover:scale-110 hover:opacity-75 bg-black/40"
                                        alt=""
                                    />
                                </div>
                                <Lightbox
                                    open={openTwo}
                                    close={() => setOpenTwo(false)}
                                    slides={[
                                        { src: "/images/publish/publish2.jpg" },
                                    ]}
                                />
                                <div className="text-center bg-slate-100 p-5 sm:h-[35%]">
                                    <p className="text-primary uppercase ">
                                        ASSOCIATION OF GHANA INDUSTRIES COURTESY
                                        CALL TO GITC
                                    </p>
                                    <p>27th May 2022</p>
                                </div>
                            </div>
                            <div className="sm:w-[20rem]  mx-3 mb-10">
                                <div
                                    className="bg-black overflow-hidden cursor-pointer  "
                                    onClick={() => setOpenThree(true)}
                                >
                                    <img
                                        src="images/publish/publish3.jpg"
                                        className="object-cover h-[17rem] transition duration-700 ease-in-out hover:scale-110 hover:opacity-75 bg-black/40"
                                        alt=""
                                    />
                                </div>
                                <Lightbox
                                    open={openThree}
                                    close={() => setOpenThree(false)}
                                    slides={[
                                        { src: "/images/publish/publish3.jpg" },
                                    ]}
                                />
                                <div className="text-center bg-slate-100 p-5 sm:h-[35%]">
                                    <p className="text-primary uppercase ">
                                        HON.DEPUTY MINISTER (TRADE) COURTESY
                                        CALL TO GITC
                                    </p>
                                    <p>19th May,2022</p>
                                </div>
                            </div>
                            <div className=" sm:w-[20rem]  mx-3 mb-10">
                                <div
                                    className="bg-black overflow-hidden cursor-pointer "
                                    onClick={() => setOpenFour(true)}
                                >
                                    <img
                                        src="images/publish/publish4.jpg"
                                        className="object-cover h-[17rem] transition duration-700 ease-in-out hover:scale-110 hover:opacity-75 bg-black/40"
                                        alt=""
                                    />
                                </div>
                                <Lightbox
                                    open={openFour}
                                    close={() => setOpenFour(false)}
                                    slides={[
                                        { src: "/images/publish/publish4.jpg" },
                                    ]}
                                />
                                <div className="text-center bg-slate-100 p-5  sm:h-[35%]">
                                    <p className="text-primary uppercase ">
                                        TRAINING SESSION WITH BMWK
                                    </p>
                                    <p>19th -29th April 2022</p>
                                </div>
                            </div>
                            <div className=" sm:w-[20rem]  mx-3 mb-10">
                                <div
                                    className="bg-black overflow-hidden cursor-pointer "
                                    onClick={() => setOpenFive(true)}
                                >
                                    <img
                                        src="images/publish/publish5.jpg"
                                        className="object-cover h-[17rem] transition duration-700 ease-in-out hover:scale-110 hover:opacity-75 bg-black/40"
                                        alt=""
                                    />
                                </div>
                                <Lightbox
                                    open={openFive}
                                    close={() => setOpenFive(false)}
                                    slides={[
                                        { src: "/images/publish/publish5.jpg" },
                                    ]}
                                />
                                <div className="text-center bg-slate-100 p-5 sm:h-[35%]">
                                    <p className="text-primary uppercase ">
                                        GITC RETREAT WITH STAFF,TECHNICAL
                                        COMMITTEE AND GOVERNING BOARD
                                    </p>
                                    <p>
                                        17th - 18th March 2022
                                    </p>
                                </div>
                            </div>
                        </div>
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
