import React from "react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { Link } from "@inertiajs/inertia-react";
import { SlMagnifier } from "react-icons/sl";

const Navigation = () => {
    const [headerStyle, setHeaderStyle] = React.useState({
        transition: "all 200ms ease-in",
    });
    const [navStyle, setNavStyle] = React.useState({
        transition: "all 200ms ease-in",
    });

    useScrollPosition(
        ({ prevPos, currPos }) => {
            const isVisible = currPos.y <= -250;

            const animateNavStyle = {
                width: isVisible ? "100%" : "93%",
                transition: `all 300ms ${isVisible ? "ease-in" : "ease-out"}`,
                transform: isVisible ? "none" : "translate(100)",
                transformOrigin: "center",
                borderRadius: `${isVisible ? "0" : ".2rem"}`,
            };
            const shouldBeStyle = {
                position: isVisible ? "sticky" : "absolute",
                top: isVisible ? "0" : "18rem",
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
            <section className="absolute left-0 h-[5rem] items-center justify-between w-full bg-transparent top-[9rem] md:px-web-l md:flex z-10">
                <div>
                    <img
                        src="/images/logo.png"
                        alt=""
                        srcSet=""
                        className="h-[8rem]"
                    />
                </div>
                <div>
                    <Link href="/" as="button">
                        FAQ
                    </Link>
                </div>
            </section>
            <section
                className="w-full bg-transparent absolute top-[18rem] left-0 h-[6rem] flex justify-center items-center z-10"
                style={{ ...headerStyle }}
            >
                <nav
                    className="w-[93%] h-[100%] bg-primary text-white md:px-web-l flex justify-between items-center rounded-sm"
                    style={{ ...navStyle }}
                >
                    <ul className="flex items-center justify-start h-full [&>li:not(:last-child)]:pr-8 [&>li]:opacity-80 text-xl font-bold">
                        <li className="hover:opacity-100">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="hover:opacity-100">
                            <Link href="/about">About Us</Link>
                        </li>
                        <li className="hover:opacity-100">
                            <Link href="/services">Our Services</Link>
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
                    <section>
                        <SlMagnifier className="text-3xl font-extrabold " />
                    </section>
                </nav>
            </section>
        </>
    );
};

export default Navigation;
