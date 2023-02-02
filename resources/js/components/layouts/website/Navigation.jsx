import React from "react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { Link } from "@inertiajs/inertia-react";
import { SlArrowDown, SlMagnifier, SlMenu } from "react-icons/sl";
import { RxCross1 } from "react-icons/rx";
import "../../../../css/navigation.scss";

const Navigation = () => {
    const [searchToggle, setSearchToggle] = React.useState(false);
    const [menuToggle, setMenuToggle] = React.useState(false);
    const [headerStyle, setHeaderStyle] = React.useState({
        transition: "all 300ms ease-in",
    });
    const [navStyle, setNavStyle] = React.useState({
        transition: "all 300ms ease-in",
    });

    const toggleMobileNavigation = () => {
        setMenuToggle((state) => (state = !state));
    };

    useScrollPosition(
        ({ prevPos, currPos }) => {
            const isSticky = currPos.y < -230;

            const animateNavStyle = {
                width: isSticky ? "100%" : "93%",
                transition: `width 200ms ${isSticky ? "ease-in" : "ease-out"}`,
                transform: isSticky ? "none" : "translate(100)",
                transformOrigin: "center",
                borderRadius: `${isSticky ? "0" : ".2rem"}`,
                backgroundColor: `${
                    isSticky ? "#F9443E" : "rgba(249, 68, 62, 0.637)"
                }`,
            };
            const shouldBeStyle = {
                position: isSticky ? "sticky" : "absolute",
                top: isSticky ? "0" : "14rem",
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
            <section className="mobile__navigation sticky left-0 top-0 h-[4rem] flex md:hidden items-center justify-between w-full bg-white z-20 px-web-xs">
                <div>
                    <img
                        src="/images/logo.png"
                        alt=""
                        srcSet=""
                        className="h-[3.5rem]"
                    />
                </div>
                <button
                    className={`mobile__navigation__menu ${
                        menuToggle && "active"
                    }`}
                    onClick={() => toggleMobileNavigation()}
                >
                    <span></span>
                </button>
            </section>
            <nav
                className={`z-20 md:hidden text-white mobile__navigation__menu__items ${
                    !menuToggle && "active"
                }`}
            >
                <section className="mobile__navigation sticky left-0 top-0 h-[4rem] flex md:hidden items-center justify-end w-full bg-inherit z-20 px-web-xs">
                    <button
                        className={`mobile__navigation__menu ${
                            menuToggle && "active"
                        }`}
                        onClick={() => toggleMobileNavigation()}
                    >
                        <span></span>
                    </button>
                </section>

                <ul className="flex-column items-center justify-start h-full [&>li>a, &>li>span]:opacity-70 text-xl font-bold relative">
                    <li className="[&:hover>a]:opacity-100">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="relative hover:opacity-100">
                        <span>
                            <span>About Us</span>
                            <span className="ml-2 text-xl text-bolder">
                                <SlArrowDown />
                            </span>
                        </span>
                        <ul className=" bg-white top-[3rem] text-tertiary min-w-[15rem] [&>li>a]:text-sm dropdown">
                            <li>
                                <Link href="/">Dropdown Dropdown Dropdown</Link>
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
                        <span>
                            <span>Our Services</span>
                            <span className="ml-2 text-xl text-bolder">
                                <SlArrowDown />
                            </span>
                        </span>
                        <ul className=" bg-white top-[3rem] text-tertiary min-w-[15rem] [&>li>a]:text-sm dropdown">
                            <li>
                                <Link href="/">Dropdown Dropdown Dropdown</Link>
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
            </nav>
            <section className="absolute left-0 h-[4rem] items-center justify-between w-full bg-transparent top-[5.5rem] md:px-web-l z-10 hidden md:flex">
                <div>
                    <img
                        src="/images/logo.png"
                        alt=""
                        srcSet=""
                        className="h-[6rem]"
                    />
                </div>
                <div>
                    <Link
                        href="/"
                        as="button"
                        className={`block  py-2 w-[6rem] rounded-md text-white text-bold text-lg bg-primary`}
                    >
                        FAQ
                    </Link>
                </div>
            </section>
            <section
                className="w-full bg-transparent absolute top-[14rem] left-0 h-[4rem] justify-center items-center hidden md:flex navigation-wrapper"
                style={{ ...headerStyle }}
            >
                <nav
                    className="w-[93%] h-[100%] text-white md:px-web-l flex justify-between items-center rounded-sm bg-primary-light shadow-md"
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
                    <button
                        type="button"
                        onClick={() =>
                            setSearchToggle((state) => (state = !state))
                        }
                    >
                        <SlMagnifier className="text-3xl font-extrabold " />
                    </button>
                </nav>

                <section
                    className={`search__overlay ${searchToggle && "active"}`}
                >
                    <section className="search__overlay__form">
                        <form className="border-white border-solid input__wrapper focus-within:border-none focus-within:outline-none">
                            <input
                                type="text"
                                name=""
                                placeholder="Search..."
                                id=""
                                className="border-none outline-none focus:outline-none focus:border-0 focus:ring-0"
                            />
                            <div className="actions">
                                <span role="button">
                                    <SlMagnifier />
                                </span>
                                <span
                                    role="button"
                                    onClick={() =>
                                        setSearchToggle(
                                            (state) => (state = !state)
                                        )
                                    }
                                >
                                    <RxCross1 />
                                </span>
                            </div>
                        </form>
                        <section className="search__overlay__dropdown">
                            dropdown dropdown dropdown dropdown dropdown
                            dropdown dropdown dropdown dropdown dropdown
                            dropdown dropdown dropdown dropdown dropdown
                            dropdown dropdown dropdown dropdown dropdown
                            dropdown dropdown dropdowndropdown dropdown dropdown
                            dropdown dropdown dropdown dropdown dropdown
                            dropdown dropdown dropdown dropdown dropdown
                            dropdown dropdown dropdown dropdown dropdown
                            dropdown dropdown dropdown dropdown dropdowndropdown
                            dropdown dropdown dropdown dropdown dropdown
                            dropdown dropdown dropdown dropdown dropdown
                            dropdown dropdown dropdown dropdown dropdown
                            dropdown dropdown dropdown dropdown dropdown
                            dropdown dropdowndropdown dropdown dropdown dropdown
                            dropdown dropdown dropdown dropdown dropdown
                            dropdown dropdown dropdown dropdown dropdown
                            dropdown dropdown dropdown dropdown dropdown
                            dropdown dropdown dropdown dropdowndropdown dropdown
                            dropdown dropdown dropdown dropdown dropdown
                            dropdown dropdown dropdown dropdown dropdown
                            dropdown dropdown dropdown dropdown dropdown
                            dropdown dropdown dropdown dropdown dropdown
                            dropdowndropdown dropdown dropdown dropdown dropdown
                            dropdown dropdown dropdown dropdown dropdown
                            dropdown dropdown dropdown dropdown dropdown
                            dropdown dropdown dropdown dropdown dropdown
                            dropdown dropdown dropdowndropdown dropdown dropdown
                            dropdown dropdown dropdown dropdown dropdown
                            dropdown dropdown dropdown dropdown dropdown
                            dropdown dropdown dropdown dropdown dropdown
                            dropdown dropdown dropdown dropdown dropdowndropdown
                            dropdown dropdown dropdown dropdown dropdown
                            dropdown dropdown dropdown dropdown dropdown
                            dropdown dropdown dropdown dropdown dropdown
                            dropdown dropdown dropdown dropdown dropdown
                            dropdown dropdowndropdown dropdown dropdown dropdown
                            dropdown dropdown dropdown dropdown dropdown
                            dropdown dropdown dropdown dropdown dropdown
                            dropdown dropdown dropdown dropdown dropdown
                            dropdown dropdown dropdown dropdowndropdown dropdown
                            dropdown dropdown dropdown dropdown dropdown
                            dropdown dropdown dropdown dropdown dropdown
                            dropdown dropdown dropdown dropdown dropdown
                            dropdown dropdown dropdown dropdown dropdown
                            dropdown
                        </section>
                    </section>
                </section>
            </section>
        </>
    );
};

export default Navigation;
