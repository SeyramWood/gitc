import { Link } from "@inertiajs/inertia-react";
import React from "react";
import { SlCallIn, SlEnvelopeOpen, SlPaperPlane } from "react-icons/sl";
import { FooterCarousel } from "../../carousel";

const Footer = () => {
    return (
        <footer className="w-[100%] text-white">
            <nav className="w-[100%] h-[auto] lg:h-[60vh] flex flex-col md:flex-row md:flex-wrap bg-footer px-web-s lg:px-web-l justify-start items-start py-[3rem]">
                <section className="w-[100%] md:w-[50%] lg:w-[30%] mt-web-l pr-2">
                    {/* <div className="w-[100%] mb-web-xs md:mb-web-l md:mt-[-4rem]">
                        <a href="/">
                            <img
                                src="images/logo.png"
                                alt=""
                                srcSet=""
                                className="w-[8rem] mt-9"
                            />
                        </a>
                    </div> */}
                    <div className="w-[100%] mb-web-xs md:mb-web-md">
                        <h5 className="text-xl font-bold capitalize">
                            Contacts
                        </h5>
                    </div>

                    <ul className="text-[1rem] [&>li>a]:font-thin [&>li>span]:font-thin [&>li>address>span]:font-thin">
                        <li className="flex items-center mb-3 text-center">
                            <span className="mr-3 opacity-60">
                                <SlPaperPlane />
                            </span>
                            <address
                                className="pl-2 font-normal text-left font-"
                                style={{ fontStyle: "normal" }}
                            >
                                <span className="text-white opacity-60">
                                    2nd Floor (West Wing),
                                </span>
                                <br />
                                <span className="text-white opacity-60">
                                    East Cantonments near US Embassy,
                                </span>
                                <br />
                                <span className="text-white opacity-60">
                                    5th Link Road, Accra.
                                </span>

                                {/* <p className="text-white opacity-60"></p> */}
                            </address>
                        </li>
                        <li className="flex items-center mb-3 text-center">
                            <span className="mr-3 opacity-60">
                                <SlCallIn />
                            </span>
                            <a
                                href="tel:+233302960298"
                                className="pl-2 opacity-60"
                            >
                                <span>+233(0) 30 296 0298</span>
                            </a>
                        </li>
                        <li className="flex items-center mb-3 text-center">
                            <span className="mr-3 opacity-60">
                                <SlEnvelopeOpen />
                            </span>
                            <a
                                href="mailto:info@gitc.gov.gh"
                                className="pl-2 opacity-60"
                            >
                                <span>info@gitc.gov.gh</span>
                            </a>
                        </li>
                        <li className="flex items-center mb-3 text-center">
                            <span className="mr-3">
                                {/* <SlLocationPin /> */}
                                <img
                                    src="/images/location.png"
                                    alt="icon"
                                    srcSet=""
                                    className="w-[1.2rem]"
                                />
                            </span>
                            <span className="pl-1 opacity-60">GL-040-2630</span>
                        </li>
                    </ul>
                </section>
                <section className="w-[100%] md:w-[50%] lg:w-[20%] mt-web-l">
                    <div className="w-[100%] mb-web-xs md:mb-web-md">
                        <h5 className="text-xl font-bold capitalize">
                            Useful Links
                        </h5>
                    </div>
                    <ul className="w-[100%] text-[1rem] opacity-60 [&>li>a]:font-thin">
                        <li className="mb-3 text-[1rem] capitalize transform hover:text-primary">
                            <Link href="/about">About us</Link>
                        </li>
                        <li className="mb-3 text-[1rem] capitalize transform hover:text-primary">
                            <Link href="/about">Our team</Link>
                        </li>
                        <li className="mb-3 text-[1rem] capitalize transform hover:text-primary">
                            <Link href="/services">Our service</Link>
                        </li>
                        <li className="mb-3 text-[1rem] capitalize transform hover:text-primary">
                            <Link href="/resources">Resources</Link>
                        </li>
                        <li className="mb-3 text-[1rem] capitalize transform hover:text-primary">
                            <Link href="/publications">Publications</Link>
                        </li>
                    </ul>
                </section>
                <section className="w-[100%] md:w-[50%] lg:w-[25%] mt-web-l md:mt-web-l">
                    <div className="w-[100%] mb-web-xs md:mb-web-md">
                        <h5 className="text-xl font-bold capitalize">
                            External Links
                        </h5>
                    </div>

                    <ul className="w-[100%] text-[1rem] opacity-60 [&>li>a]:font-thin">
                        <li className="mb-3 text-[1rem] capitalize transform hover:text-primary">
                            <a
                                href="https://moti.gov.gh/v2"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Ministry of Trade and Industry
                            </a>
                        </li>
                        <li className="mb-3 text-[1rem] capitalize transform hover:text-primary">
                            <a
                                href="https://gfza.gov.gh"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Ghana Free Zone Authority
                            </a>
                        </li>
                        <li className="mb-3 text-[1rem] capitalize transform hover:text-primary">
                            <a
                                href="https://gra.gov.gh"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Ghana Revenue Authority
                            </a>
                        </li>
                        <li className="mb-3 text-[1rem] capitalize transform hover:text-primary">
                            <a
                                href="https://gsa.gov.gh"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Ghana Standard Authority
                            </a>
                        </li>
                        <li className="mb-3 text-[1rem] capitalize transform hover:text-primary">
                            <a
                                href="https://www.wtcaccra.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                World Trade Center
                            </a>
                        </li>
                    </ul>
                </section>
                <section className="w-[100%] md:w-[50%] lg:w-[25%] mt-web-l md:mt-web-l">
                    <div className="w-[100%] mb-web-xs md:mb-web-md">
                        <h5 className="text-xl font-bold capitalize">
                            Gallery
                        </h5>
                    </div>

                    <section className="grid grid-cols-2 gap-2">
                        <Link href="/gallery">
                            <FooterCarousel
                                images={[
                                    "/images/footer/footer2.jpg",
                                    "/images/footer/footer1.jpg",
                                    "/images/footer/footer.jpg",
                                ]}
                                duration={2000}
                            />
                        </Link>
                        <Link href="/gallery">
                            <FooterCarousel
                                images={[
                                    "/images/footer/footer3.jpg",
                                    "/images/footer/footer2.jpg",
                                    "/images/footer/footer1.jpg",
                                    "/images/footer/footer.jpg",
                                ]}
                                duration={2000}
                                axis="y"
                            />
                        </Link>
                        <Link href="/gallery">
                            <FooterCarousel
                                images={[
                                    "/images/footer/footer2.jpg",
                                    "/images/footer/footer1.jpg",
                                    "/images/footer/footer3.jpg",
                                    "/images/footer/footer.jpg",
                                ]}
                                duration={2000}
                                axis="y"
                            />
                        </Link>
                        <Link href="/gallery">
                            <FooterCarousel
                                images={[
                                    "/images/footer/footer2.jpg",
                                    "/images/footer/footer1.jpg",
                                    "/images/footer/footer.jpg",
                                    "/images/footer/footer3.jpg",
                                ]}
                                duration={2000}
                            />
                        </Link>
                    </section>
                </section>
            </nav>

            <section className="w-[100%] h-[5rem] bg-tertiary flex items-center text-web-xs md:text-text-[1rem]  px-web-xs lg:px-web-l">
                <p className="text-white opacity-60">
                    &copy;Copyright {new Date().getUTCFullYear()}, All Rights
                    Reserved, Ghana International Trade Commission.
                </p>
            </section>
        </footer>
    );
};

export default Footer;
