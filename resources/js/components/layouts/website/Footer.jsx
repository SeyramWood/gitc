import { Link } from "@inertiajs/inertia-react";
import React from "react";
import { SlCallIn, SlEnvelopeOpen, SlPaperPlane } from "react-icons/sl";

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
                    <div className="w-[100%] mb-web-xs md:mb-web-l">
                        <h5 className="text-xl font-bold capitalize">
                            Contacts
                        </h5>
                    </div>

                    <ul className="text-[1rem]">
                        <li className="flex items-center mb-3 text-center">
                            <span className="mr-3 opacity-60">
                                <SlPaperPlane />
                            </span>
                            <address
                                className="pl-2 font-normal text-left font-"
                                style={{ fontStyle: "normal" }}
                            >
                                <p className="text-white opacity-60">
                                    2nd Floor (West Wing),
                                </p>
                                <p className="text-white opacity-60">
                                    East Cantonments near US Embassy, 5th Link
                                    Road, Accra.
                                </p>

                                {/* <p className="text-white opacity-60"></p> */}
                            </address>
                        </li>
                        <li className="flex items-center mb-3 text-center">
                            <span className="mr-3 opacity-60">
                                <SlCallIn />
                            </span>
                            <a href="tel:+233302960298" className="opacity-60">
                                <span>+233(0) 30 296 0298</span>
                            </a>
                        </li>
                        <li className="flex items-center mb-3 text-center">
                            <span className="mr-3 opacity-60">
                                <SlEnvelopeOpen />
                            </span>
                            <a
                                href="mailto:info@gitc.gov.gh"
                                className="opacity-60"
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
                                    className="w-[1.5rem]"
                                />
                            </span>
                            <span className="opacity-60">GL-040-2630</span>
                        </li>
                    </ul>
                </section>
                <section className="w-[100%] md:w-[50%] lg:w-[20%] mt-web-l">
                    <div className="w-[100%] mb-web-xs md:mb-web-l">
                        <h5 className="text-xl font-bold capitalize">
                            Useful Links
                        </h5>
                    </div>
                    <ul className="w-[100%] text-[1rem] opacity-60">
                        <li className="mb-3 text-[1rem] capitalize transform hover:text-primary">
                            <Link href="/team">About us</Link>
                        </li>
                        <li className="mb-3 text-[1rem] capitalize transform hover:text-primary">
                            <Link href="/story">Our team</Link>
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
                    <div className="w-[100%] mb-web-xs md:mb-web-l">
                        <h5 className="text-xl font-bold capitalize">
                            External Links
                        </h5>
                    </div>

                    <ul className="w-[100%] text-[1rem] opacity-60">
                        <li className="mb-3 text-[1rem] capitalize transform hover:text-primary">
                            <Link href="/about">
                                Ministry of Trade and Industry
                            </Link>
                        </li>
                        <li className="mb-3 text-[1rem] capitalize transform hover:text-primary">
                            <Link href="/team">Ghana Free Zone Authority</Link>
                        </li>
                        <li className="mb-3 text-[1rem] capitalize transform hover:text-primary">
                            <Link href="/services">
                                Ghana Revenue Authority
                            </Link>
                        </li>
                        <li className="mb-3 text-[1rem] capitalize transform hover:text-primary">
                            <Link href="/resources">
                                Ghana Standard Authority
                            </Link>
                        </li>
                        <li className="mb-3 text-[1rem] capitalize transform hover:text-primary">
                            <Link href="/publications">World Trade Center</Link>
                        </li>
                    </ul>
                </section>
                <section className="w-[100%] md:w-[50%] lg:w-[25%] mt-web-l md:mt-web-l">
                    <div className="w-[100%] mb-web-xs md:mb-web-xl">
                        <h5 className="text-xl font-bold capitalize">
                            Gallery
                        </h5>
                    </div>

                    <section className="grid grid-cols-2 gap-4">
                        <div>
                            <img
                                src="/images/footer/footer.jpg"
                                alt=""
                                srcSet=""
                            />
                        </div>
                        <div>
                            <img
                                src="/images/footer/footer1.jpg"
                                alt=""
                                srcSet=""
                            />
                        </div>
                        <div>
                            <img
                                src="/images/footer/footer2.jpg"
                                alt=""
                                srcSet=""
                            />
                        </div>
                        <div>
                            <img
                                src="/images/footer/footer3.jpg"
                                alt=""
                                srcSet=""
                            />
                        </div>
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
