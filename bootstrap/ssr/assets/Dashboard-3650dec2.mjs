import { j as jsx, a as jsxs, F as Fragment } from "../ssr.mjs";
import PrimeReact from "primereact/api";
import "./theme-fbe202b3.mjs";
import "@inertiajs/inertia";
import { usePage, Link } from "@inertiajs/inertia-react";
import { Avatar } from "primereact/avatar";
import { Badge } from "primereact/badge";
import React, { useState } from "react";
PrimeReact.ripple = true;
PrimeReact.inputStyle = "filled";
PrimeReact.autoZIndex = true;
PrimeReact.zIndex = {
  modal: 99999,
  // dialog, sidebar
  overlay: 1e3,
  // dropdown, overlaypanel
  menu: 1e3,
  // overlay menus
  tooltip: 1100,
  // tooltip
  toast: 1200
  // toast
};
const links = [
  {
    label: "Dashboard",
    link: "/dashboard",
    icon: "home"
  },
  {
    label: "Publications",
    link: "/dashboard/publications",
    icon: "globe"
  },
  {
    label: "Cases",
    link: "/dashboard/cases",
    icon: "file"
  },
  {
    label: "Albums",
    link: "/dashboard/albums",
    icon: "images"
  },
  {
    label: "Enquiries",
    icon: "verified",
    dropdown: [
      {
        label: "View Enquiries",
        link: "/dashboard/enquiries"
      }
    ]
  },
  {
    label: "Users",
    icon: "user-plus",
    dropdown: [
      {
        label: "View Users",
        link: "/dashboard/users"
      }
    ]
  }
];
const Dashboard = ({ page, children }) => {
  const [newNotifications, setNewNotifications] = useState([]);
  const [unreadNotifications, setUnreadNotifications] = useState();
  const [asideNav, setAsideNav] = useState(false);
  const [asideNavSize, setAsideNavSize] = useState("main");
  const { flash, authUser } = usePage().props;
  const toggleAside = () => {
    setAsideNav((state) => state = !state);
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
      let asideNavSize2 = localStorage.getItem("asideNav");
      if (asideNavSize2) {
        setAsideNavSize(asideNavSize2);
      } else {
        localStorage.setItem("asideNav", "main");
      }
      const el = document.querySelector(".asinyo__dashboard__aside__nav");
      asideNavSize2 === "small" ? el.classList.remove("position") : el.classList.add("position");
    })();
  }, [asideNav]);
  if (!asideNavSize) {
    return /* @__PURE__ */ jsx("p", { children: "loading" });
  }
  return /* @__PURE__ */ jsxs("div", { className: "asinyo__dashboard", children: [
    /* @__PURE__ */ jsxs(
      "aside",
      {
        className: `asinyo__dashboard__aside ${asideNavSize === "small" && "active"}`,
        children: [
          /* @__PURE__ */ jsxs("div", { className: "asinyo__dashboard__aside__brand", children: [
            /* @__PURE__ */ jsx(
              "span",
              {
                className: `asinyo__dashboard__aside__brand__logo ${asideNavSize === "main" && "main"}`,
                children: /* @__PURE__ */ jsx("img", { src: "/images/logo.png", alt: "logo large" })
              }
            ),
            /* @__PURE__ */ jsx(
              "span",
              {
                className: `asinyo__dashboard__aside__brand__logo ${asideNavSize === "small" && "small"}`,
                children: /* @__PURE__ */ jsx("img", { src: "/images/logo.png", alt: "logo small" })
              }
            )
          ] }),
          /* @__PURE__ */ jsx("nav", { className: "asinyo__dashboard__aside__nav", children: /* @__PURE__ */ jsx("ul", { className: "asinyo__dashboard__aside__nav__lists", children: links.map((obj) => /* @__PURE__ */ jsx(
            "li",
            {
              className: `asinyo__dashboard__aside__nav__lists__list ${(location.pathname === obj.link || obj.hasOwnProperty("dropdown") && obj.dropdown.map((d) => d.link).includes(
                location.pathname
              )) && "link-active"}`,
              children: obj.hasOwnProperty("dropdown") ? /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsxs(
                  "div",
                  {
                    className: `link__wrapper ${obj.dropdown.map((d) => d.link).includes(
                      location.pathname
                    ) && "active"}`,
                    onClick: navClicked,
                    children: [
                      /* @__PURE__ */ jsxs("div", { className: "label", children: [
                        /* @__PURE__ */ jsx("div", { className: "icon__mini", children: /* @__PURE__ */ jsx(
                          "i",
                          {
                            className: `pi pi-${obj.icon}`
                          }
                        ) }),
                        /* @__PURE__ */ jsx("span", { children: obj.label })
                      ] }),
                      /* @__PURE__ */ jsx("div", { className: "icon__right" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsx("div", { className: "nav-dropdown", children: /* @__PURE__ */ jsx("ul", { children: obj.dropdown.map(
                  (dropdown) => /* @__PURE__ */ jsx(
                    "li",
                    {
                      className: `${location.pathname === dropdown.link && "dropdown-active"}`,
                      children: /* @__PURE__ */ jsx(
                        Link,
                        {
                          href: dropdown.link,
                          children: dropdown.label
                        }
                      )
                    },
                    dropdown.label
                  )
                ) }) })
              ] }) : /* @__PURE__ */ jsx(
                Link,
                {
                  href: obj.link,
                  className: "link__wrapper",
                  children: /* @__PURE__ */ jsxs("div", { className: "label", children: [
                    /* @__PURE__ */ jsx("div", { className: "icon__mini", children: /* @__PURE__ */ jsx(
                      "i",
                      {
                        className: `pi pi-${obj.icon}`
                      }
                    ) }),
                    /* @__PURE__ */ jsx("span", { children: obj.label })
                  ] })
                }
              )
            },
            obj.label
          )) }) }),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "asinyo__dashboard__aside__toggle__icon",
              role: "button",
              onClick: () => toggleAside(),
              children: /* @__PURE__ */ jsx("i", { className: "pi pi-chevron-left" })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxs("main", { className: "asinyo__dashboard__main", children: [
      /* @__PURE__ */ jsxs("header", { className: "asinyo__dashboard__main__header", children: [
        /* @__PURE__ */ jsx("div", { className: "asinyo__dashboard__main__header__left", children: "Search..." }),
        /* @__PURE__ */ jsxs("ul", { className: "asinyo__dashboard__main__header__right", children: [
          /* @__PURE__ */ jsxs("li", { className: "asinyo__dashboard__main__header__right__list", children: [
            /* @__PURE__ */ jsx("div", { className: "label", children: /* @__PURE__ */ jsx(
              "i",
              {
                className: "pi pi-bell p-text-secondary p-overlay-badge",
                style: { fontSize: "1.5rem" },
                children: unreadNotifications ? /* @__PURE__ */ jsx(
                  Badge,
                  {
                    value: unreadNotifications <= 9 ? unreadNotifications : "9+"
                  }
                ) : ""
              }
            ) }),
            /* @__PURE__ */ jsx("div", { className: "dropdown", children: /* @__PURE__ */ jsxs("div", { className: "dropdown__content", children: [
              /* @__PURE__ */ jsx("h4", { className: "dropdown__content__title", children: "Notifications" }),
              newNotifications.length > 0 ? /* @__PURE__ */ jsx("ul", { className: "dropdown__content__notification", children: newNotifications.map((n) => {
                var _a;
                return /* @__PURE__ */ jsxs(
                  "li",
                  {
                    className: `${((_a = n.adminRead) == null ? void 0 : _a.map((r) => r.id).includes(
                      85899345932
                    )) ? "" : "unread"}`,
                    children: [
                      /* @__PURE__ */ jsx("div", { className: "avatar", children: /* @__PURE__ */ jsx(
                        Avatar,
                        {
                          label: (() => {
                            const ac = n.activity.split(
                              " "
                            );
                            if (ac.length > 1) {
                              return ac[0][0].toUpperCase() + ac[1][0].toUpperCase();
                            }
                            return ac[0][0].toUpperCase();
                          })(),
                          size: "large",
                          style: {
                            color: "#000000",
                            fontSize: "1rem"
                          },
                          shape: "circle"
                        }
                      ) }),
                      /* @__PURE__ */ jsxs("article", { className: "article", children: [
                        /* @__PURE__ */ jsx("h5", { children: n.activity }),
                        /* @__PURE__ */ jsx("p", { children: n.description }),
                        /* @__PURE__ */ jsxs("p", { className: "date", children: [
                          /* @__PURE__ */ jsx("i", { className: "pi pi-clock" }),
                          /* @__PURE__ */ jsx("span", { children: formatDateTimeShort(
                            n.created_at
                          ) })
                        ] })
                      ] })
                    ]
                  },
                  n.id.toString()
                );
              }) }) : /* @__PURE__ */ jsx("div", { className: "dropdown__content__no__notifications", children: /* @__PURE__ */ jsx("span", { children: "No notification found." }) }),
              /* @__PURE__ */ jsx("div", { className: "dropdown__content__view__all", children: /* @__PURE__ */ jsx(
                Link,
                {
                  href: "/dashboard/notifications",
                  className: "",
                  children: /* @__PURE__ */ jsx("span", { children: "View All" })
                }
              ) })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "asinyo__dashboard__main__header__right__list", children: [
            /* @__PURE__ */ jsxs("div", { className: "label", children: [
              /* @__PURE__ */ jsx(
                Avatar,
                {
                  icon: "pi pi-user",
                  size: "large",
                  style: { color: "#ffffff" },
                  shape: "circle"
                }
              ),
              /* @__PURE__ */ jsx("span", { children: authUser == null ? void 0 : authUser.name.split(" ")[0] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "dropdown", children: /* @__PURE__ */ jsx("div", { className: "dropdown__content", children: /* @__PURE__ */ jsxs("ul", { className: "dropdown__content__profile", children: [
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/profile", children: /* @__PURE__ */ jsxs("span", { children: [
                /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx("i", { className: "pi pi-user" }) }),
                /* @__PURE__ */ jsx("span", { children: "Profile" })
              ] }) }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/preferences", children: /* @__PURE__ */ jsxs("span", { children: [
                /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx("i", { className: "pi pi-cog" }) }),
                /* @__PURE__ */ jsx("span", { children: "Preferences" })
              ] }) }) }),
              /* @__PURE__ */ jsx("div", { className: "separator" }),
              /* @__PURE__ */ jsx("li", { className: "profile", children: /* @__PURE__ */ jsxs(
                Link,
                {
                  type: "button",
                  as: "button",
                  replace: true,
                  method: "POST",
                  href: `/auth/logout`,
                  children: [
                    /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx("i", { className: "pi pi-sign-out" }) }),
                    /* @__PURE__ */ jsx("span", { children: "Sign Out" })
                  ]
                }
              ) })
            ] }) }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "asinyo__dashboard__main__content", children: [
        page && /* @__PURE__ */ jsxs("div", { className: "asinyo__dashboard__main__content__page--title", children: [
          flash.message && /* @__PURE__ */ jsx("div", { className: "bg-green-300 alert", children: flash.message }),
          /* @__PURE__ */ jsx("h4", { children: page })
        ] }),
        children
      ] }),
      /* @__PURE__ */ jsx("footer", { className: "footer", children: /* @__PURE__ */ jsx("div", { className: "asinyo__footer__copyright", children: /* @__PURE__ */ jsxs("strong", { children: [
        "©",
        new Date().getUTCFullYear(),
        " Ghana International Trade Commission. All Rights Reserved"
      ] }) }) })
    ] })
  ] });
};
export {
  Dashboard as D
};
