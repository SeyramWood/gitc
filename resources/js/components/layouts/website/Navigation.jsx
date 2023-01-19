import React from "react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { Link } from "@inertiajs/inertia-react";
import { SlArrowDown, SlMagnifier } from "react-icons/sl";
import { RxCross1 } from "react-icons/rx";
import "../../../../css/navigation.scss";

const Navigation = () => {
    const [headerStyle, setHeaderStyle] = React.useState({
        transition: "all 300ms ease-in",
    });
    const [navStyle, setNavStyle] = React.useState({
        transition: "all 300ms ease-in",
    });

    useScrollPosition(
        ({ prevPos, currPos }) => {
            const isSticky = currPos.y < -230;

            const animateNavStyle = {
                width: isSticky ? "100%" : "93%",
                transition: `all 300ms ${isSticky ? "ease-in" : "ease-out"}`,
                transform: isSticky ? "none" : "translate(100)",
                transformOrigin: "center",
                borderRadius: `${isSticky ? "0" : ".2rem"}`,
                backgroundColor: `${
                    isSticky ? "#F9443E" : "rgba(249, 68, 62, 0.637)"
                }`,
            };
            const shouldBeStyle = {
                position: isSticky ? "sticky" : "absolute",
                top: isSticky ? "0" : "16rem",
            };
            if (JSON.stringify(shouldBeStyle) === JSON.stringify(headerStyle)) {
                return;
            }
            if (JSON.stringify(animateNavStyle) === JSON.stringify(navStyle)) {
                return;
            }
            setHeaderStyle(shouldBeStyle);
            setNavStyle(animateNavStyle);
        },
        [headerStyle, navStyle]
    );

    return (
        <>
            <section className="absolute left-0 h-[4rem] items-center justify-between w-full bg-transparent top-[7.5rem] md:px-web-l md:flex z-10">
                <div>
                    <img
                        src="/images/logo.png"
                        alt=""
                        srcSet=""
                        className="h-[6rem]"
                    />
                </div>
                <div>
                    <Link href="/" as="button">
                        FAQ
                    </Link>
                </div>
            </section>
            <section
                className="w-full bg-transparent absolute top-[16rem] left-0 h-[4rem] flex justify-center items-center z-10"
                style={{ ...headerStyle }}
            >
                <nav
                    className="w-[93%] h-[100%] text-white md:px-web-l flex justify-between items-center rounded-sm bg-primary-light"
                    style={{ ...navStyle }}
                >
                    <ul className="flex items-center justify-start h-full [&>li:not(:last-child)]:pr-8 [&>li>a]:opacity-70 text-xl font-bold relative navigation">
                        <li className="[&:hover>a]:opacity-100">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="relative hover:opacity-100">
                            <Link href="/about">
                                <span>About Us</span>
                                <span className="ml-2 text-xl text-bolder">
                                    <SlArrowDown />
                                </span>
                            </Link>
                            <ul className="absolute bg-white top-[3rem] text-tertiary min-w-[15rem] [&>li>a]:text-sm dropdown">
                                <li>
                                    <Link href="/">
                                        Dropdown Dropdown Dropdown
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">Dropdown</Link>
                                </li>
                                <li>
                                    <Link href="/">Dropdown</Link>
                                </li>
                                <li>
                                    <Link href="/">Dropdown</Link>
                                </li>
                                <li>
                                    <Link href="/">Dropdown</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="hover:opacity-100">
                            <Link href="/services">
                                <span>Our Services</span>
                                <span className="ml-2 text-xl text-bolder">
                                    <SlArrowDown />
                                </span>
                            </Link>
                            <ul className="absolute bg-white top-[3rem] text-tertiary min-w-[15rem] [&>li>a]:text-sm dropdown">
                                <li>
                                    <Link href="/">
                                        Dropdown Dropdown Dropdown
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">Dropdown</Link>
                                </li>
                                <li>
                                    <Link href="/">Dropdown</Link>
                                </li>
                                <li>
                                    <Link href="/">Dropdown</Link>
                                </li>
                                <li>
                                    <Link href="/">Dropdown</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="hover:opacity-100">
                            <Link href="/resources">Resources</Link>
                        </li>
                        <li className="hover:opacity-100">
                            <Link href="/news">News</Link>
                        </li>
                        <li className="hover:opacity-100">
                            <Link href="/contact">Contact Us</Link>
                        </li>
                    </ul>
                    <button type="button">
                        <SlMagnifier className="text-3xl font-extrabold " />
                    </button>
                </nav>

                <section className="search__overlay">
                    <section className="search__overlay__form">
                        <form action="">
                            <div className="border-white border-solid input__wrapper focus-within:border-none focus-within:outline-none">
                                <input
                                    type="text"
                                    name=""
                                    placeholder="Search..."
                                    id=""
                                    className="border-none outline-none focus:outline-none focus:border-0 focus:ring-0"
                                />
                                <div className="actions">
                                    <button type="button">
                                        <SlMagnifier />
                                    </button>
                                    <button type="button">
                                        <RxCross1 />
                                    </button>
                                </div>
                            </div>
                        </form>
                    </section>
                </section>
            </section>
        </>
    );
};

export default Navigation;
