import { Link } from "@inertiajs/inertia-react";
import React from "react";
import {
    SlCallIn,
    SlClock,
    SlEnvelopeOpen,
    SlLocationPin,
} from "react-icons/sl";
import { getDateTimeShort } from "../../../helpers";

function Header() {
    return (
        <>
            <header className="w-full h-[3.5rem] bg-white hidden md:flex justify-between items-center px-web-l text-secondary">
                <ul className="flex self-stretch">
                    <li className="flex items-center pr-4 mr-5 text-center border-r-2 border-gray-100">
                        <span className="mr-2">
                            <SlClock />
                        </span>
                        <span className="">{getDateTimeShort()}</span>
                        {/* <span className="">Mon-Fri 08:00 - 17:00</span> */}
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
            <section className="justify-center w-full h-[4.5rem] md:flex z-10 hidden justify-items-center bg-white">
                <div className=" left-0 h-[100%] items-center md:flex justify-between w-[85%]">
                    <div>
                        <img
                            src="/images/logo.png"
                            alt=""
                            srcSet=""
                            className="h-[4.5rem]"
                        />
                    </div>
                    <div>
                        <Link
                            href="/faq"
                            as="button"
                            className={`block  py-2 w-[6rem] rounded-md text-white text-bold text-lg bg-primary`}
                        >
                            FAQ
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Header;
