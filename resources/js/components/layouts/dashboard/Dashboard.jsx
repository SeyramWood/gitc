import { Avatar } from "primereact/avatar";
import { Badge } from "primereact/badge";
import React, { useState } from "react";

import { Link } from "@inertiajs/inertia-react";
import "../../../../css/dashboard/app.scss";

const links = [
    {
        label: "Dashboard",
        link: "/dashboard",
        icon: "home",
    },
    {
        label: "Orders",
        link: "/dashboard/orders",
        icon: "cart-plus",
    },
    {
        label: "Customers",
        link: "/dashboard/customers",
        icon: "shopping-bag",
    },
    {
        label: "Agents",
        link: "/dashboard/agents",
        icon: "id-card",
    },
    {
        label: "Merchants",
        icon: "verified",
        dropdown: [
            {
                label: "View Merchants",
                link: "/dashboard/merchants",
            },
            {
                label: "Storefronts",
                link: "/dashboard/merchants/storefronts",
            },
        ],
    },
    {
        label: "Products",
        icon: "gift",
        dropdown: [
            {
                label: "View Products",
                link: "/dashboard/products",
            },
            {
                label: "Categories",
                link: "/dashboard/products/categories",
            },
        ],
    },
    {
        label: "Users",
        icon: "user-plus",
        dropdown: [
            {
                label: "View Users",
                link: "/dashboard/users",
            },
            {
                label: "Roles & Permissions",
                link: "/dashboard/users/roles-and-permissions",
            },
        ],
    },
];

const Dashboard = ({ page, children }) => {
    const [newNotifications, setNewNotifications] = useState([]);
    const [unreadNotifications, setUnreadNotifications] = useState();
    const [asideNav, setAsideNav] = useState(false);
    const [asideNavSize, setAsideNavSize] = useState("main");
    const toggleAside = () => {
        setAsideNav((state) => (state = !state));

        let newSize = asideNavSize === "main" ? "small" : "main";
        localStorage.setItem("asideNav", newSize);
    };
    const navClicked = (e) => {
        const el = e.target;
        el.classList.add("activeClick");
        setTimeout(() => {
            el.classList.remove("activeClick");
        }, 500);
        el.classList.toggle("active");
    };

    React.useEffect(() => {
        (() => {
            let asideNavSize = localStorage.getItem("asideNav");
            if (asideNavSize) {
                setAsideNavSize(asideNavSize);
            } else {
                localStorage.setItem("asideNav", "main");
            }
            const el = document.querySelector(".asinyo__dashboard__aside__nav");
            asideNavSize === "small"
                ? el.classList.remove("position")
                : el.classList.add("position");
        })();
    }, [asideNav]);

    React.useEffect(() => {
        // getNewNotifications();
        console.log(Ziggy.routes);
        console.log(route().params);
        console.log(location.pathname);
    }, []);

    if (!asideNavSize) {
        return <p>loading</p>;
    }
    return (
        <div className="asinyo__dashboard">
            <aside
                className={`asinyo__dashboard__aside ${
                    asideNavSize === "small" && "active"
                }`}
            >
                <div className="asinyo__dashboard__aside__brand">
                    <span
                        className={`asinyo__dashboard__aside__brand__logo ${
                            asideNavSize === "main" && "main"
                        }`}
                    >
                        <img src="/images/logo.png" alt="logo large" />
                    </span>
                    <span
                        className={`asinyo__dashboard__aside__brand__logo ${
                            asideNavSize === "small" && "small"
                        }`}
                    >
                        <img src="/images/logo.png" alt="logo small" />
                    </span>
                </div>
                <nav className="asinyo__dashboard__aside__nav">
                    <ul className="asinyo__dashboard__aside__nav__lists">
                        {links.map((obj) => (
                            <li
                                className={`asinyo__dashboard__aside__nav__lists__list ${
                                    (location.pathname === obj.link ||
                                        (obj.hasOwnProperty("dropdown") &&
                                            obj.dropdown
                                                .map((d) => d.link)
                                                .includes(
                                                    location.pathname
                                                ))) &&
                                    "link-active"
                                }`}
                                key={obj.label}
                            >
                                {obj.hasOwnProperty("dropdown") ? (
                                    <>
                                        <div
                                            className={`link__wrapper ${
                                                obj.dropdown
                                                    .map((d) => d.link)
                                                    .includes(
                                                        location.pathname
                                                    ) && "active"
                                            }`}
                                            onClick={navClicked}
                                        >
                                            <div className="label">
                                                <div className="icon__mini">
                                                    <i
                                                        className={`pi pi-${obj.icon}`}
                                                    ></i>
                                                </div>
                                                <span>{obj.label}</span>
                                            </div>
                                            <div className="icon__right"></div>
                                        </div>
                                        <div className="nav-dropdown">
                                            <ul>
                                                {obj.dropdown.map(
                                                    (dropdown) => (
                                                        <li
                                                            className={`${
                                                                location.pathname ===
                                                                    dropdown.link &&
                                                                "dropdown-active"
                                                            }`}
                                                            key={dropdown.label}
                                                        >
                                                            <Link
                                                                href={
                                                                    dropdown.link
                                                                }
                                                            >
                                                                {dropdown.label}
                                                            </Link>
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </div>
                                    </>
                                ) : (
                                    <Link
                                        href={obj.link}
                                        className="link__wrapper"
                                    >
                                        <div className="label">
                                            <div className="icon__mini">
                                                <i
                                                    className={`pi pi-${obj.icon}`}
                                                ></i>
                                            </div>
                                            <span>{obj.label}</span>
                                        </div>
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
                <div
                    className="asinyo__dashboard__aside__toggle__icon"
                    role="button"
                    onClick={() => toggleAside()}
                >
                    <i className="pi pi-chevron-left"></i>
                </div>
            </aside>
            <main className="asinyo__dashboard__main">
                <header className="asinyo__dashboard__main__header">
                    <div className="asinyo__dashboard__main__header__left">
                        Search...
                    </div>
                    <ul className="asinyo__dashboard__main__header__right">
                        <li className="asinyo__dashboard__main__header__right__list">
                            <div className="label">
                                <i
                                    className="pi pi-bell p-text-secondary p-overlay-badge"
                                    style={{ fontSize: "1.5rem" }}
                                >
                                    {unreadNotifications ? (
                                        <Badge
                                            value={
                                                unreadNotifications <= 9
                                                    ? unreadNotifications
                                                    : "9+"
                                            }
                                        ></Badge>
                                    ) : (
                                        ""
                                    )}
                                </i>
                            </div>
                            <div className="dropdown">
                                <div className="dropdown__content">
                                    <h4 className="dropdown__content__title">
                                        Notifications
                                    </h4>
                                    {newNotifications.length > 0 ? (
                                        <ul className="dropdown__content__notification">
                                            {newNotifications.map((n) => (
                                                <li
                                                    className={`${
                                                        n.adminRead
                                                            ?.map((r) => r.id)
                                                            .includes(
                                                                85899345932
                                                            )
                                                            ? ""
                                                            : "unread"
                                                    }`}
                                                    key={n.id.toString()}
                                                >
                                                    <div className="avatar">
                                                        {/* <Avatar
                              icon="pi pi-user"
                              size="large"
                              style={{ color: "#ffffff" }}
                              shape="circle"
                            /> */}
                                                        <Avatar
                                                            label={(() => {
                                                                const ac =
                                                                    n.activity.split(
                                                                        " "
                                                                    );
                                                                if (
                                                                    ac.length >
                                                                    1
                                                                ) {
                                                                    return (
                                                                        ac[0][0].toUpperCase() +
                                                                        ac[1][0].toUpperCase()
                                                                    );
                                                                }
                                                                return ac[0][0].toUpperCase();
                                                            })()}
                                                            size="large"
                                                            style={{
                                                                color: "#000000",
                                                                fontSize:
                                                                    "1rem",
                                                            }}
                                                            shape="circle"
                                                        />
                                                    </div>
                                                    <article className="article">
                                                        <h5>{n.activity}</h5>
                                                        <p>{n.description}</p>
                                                        <p className="date">
                                                            <i className="pi pi-clock"></i>
                                                            <span>
                                                                {formatDateTimeShort(
                                                                    n.created_at
                                                                )}
                                                            </span>
                                                        </p>
                                                    </article>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <div className="dropdown__content__no__notifications">
                                            <span>No notification found.</span>
                                        </div>
                                    )}
                                    <div className="dropdown__content__view__all">
                                        <Link
                                            href="/dashboard/notifications"
                                            className=""
                                        >
                                            <span>View All</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="asinyo__dashboard__main__header__right__list">
                            <div className="label">
                                {/* <Avatar image="images/avatar/asiyajavayant.png" className="mr-2" size="large" shape="circle" /> */}
                                <Avatar
                                    icon="pi pi-user"
                                    size="large"
                                    style={{ color: "#ffffff" }}
                                    shape="circle"
                                />
                                <span>Seyram</span>
                            </div>
                            <div className="dropdown">
                                <div className="dropdown__content">
                                    <ul className="dropdown__content__profile">
                                        <li>
                                            <Link href="/profile">
                                                <span>
                                                    <span>
                                                        <i className="pi pi-user"></i>
                                                    </span>
                                                    <span>Profile</span>
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/preferences">
                                                <span>
                                                    <span>
                                                        <i className="pi pi-cog"></i>
                                                    </span>
                                                    <span>Preferences</span>
                                                </span>
                                            </Link>
                                        </li>
                                        <div className="separator"></div>
                                        <li className="profile">
                                            <button type="button">
                                                <span>
                                                    <i className="pi pi-sign-out"></i>
                                                </span>
                                                <span>Sign Out</span>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                </header>
                <section className="asinyo__dashboard__main__content">
                    {page && (
                        <div className="asinyo__dashboard__main__content__page--title">
                            <h4>{page}</h4>
                        </div>
                    )}
                    {children}
                </section>

                <footer className="footer">
                    <div className="asinyo__footer__copyright">
                        <strong>
                            &copy;{new Date().getUTCFullYear()} Asinyo. All
                            Rights Reserved
                        </strong>
                    </div>
                </footer>
            </main>
        </div>
    );
};

export default Dashboard;
