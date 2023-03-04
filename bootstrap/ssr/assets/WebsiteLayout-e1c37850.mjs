import { a as jsxs, j as jsx, F as Fragment } from "../ssr.mjs";
import React from "react";
import { SlArrowLeft, SlArrowRight, SlPaperPlane, SlCallIn, SlEnvelopeOpen, SlClock, SlLocationPin, SlArrowDown, SlMagnifier } from "react-icons/sl";
import { Link } from "@inertiajs/inertia-react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { RxCross1 } from "react-icons/rx";
const animate = "";
const banner = "";
const Carousel = ({ children }) => {
  const [index, setIndex] = React.useState(0);
  const length = children.length;
  const handlePrevious = () => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? length - 1 : newIndex);
  };
  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
  };
  React.useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 12e3);
    return () => clearInterval(interval);
  }, [index]);
  return /* @__PURE__ */ jsxs("div", { className: "carousel__container h-[inherit]", children: [
    /* @__PURE__ */ jsx(Fragment, { children: React.Children.map(children, (child, i) => {
      return React.cloneElement(child, {
        status: i === index ? "active" : "inactive"
      });
    }) }),
    /* @__PURE__ */ jsxs("div", { className: "carousel__container__controls", children: [
      /* @__PURE__ */ jsx("button", { onClick: () => handlePrevious(), children: /* @__PURE__ */ jsx(SlArrowLeft, {}) }),
      /* @__PURE__ */ jsx("button", { onClick: () => handleNext(), children: /* @__PURE__ */ jsx(SlArrowRight, {}) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "carousel__container__indicators", children: React.Children.map(children, (child, i) => /* @__PURE__ */ jsx(
      "button",
      {
        className: i === index ? "active" : "",
        onClick: () => setIndex(i)
      }
    )) })
  ] });
};
const CarouselItem = ({ src, heading, paragraph, buttons, status }) => {
  const styles = {
    animation: "growOut 18s ease-out infinite backwards",
    backgroundImage: `linear-gradient(to bottom,
            rgba(17, 17, 17, 0.775),
            rgba(17, 17, 17, 0.775)), url(${src})`
  };
  return /* @__PURE__ */ jsx("div", { className: `carousel__container__item ${status}`, children: /* @__PURE__ */ jsxs("div", { className: "carousel__container__item__wrapper", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "carousel__container__item__wrapper__image",
        style: styles
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "carousel__container__item__wrapper__content w-[85%] mt-[2rem]", children: [
      /* @__PURE__ */ jsx(
        "h1",
        {
          className: `text-8xl text-bold mb-8 ${status === "active" ? "animate__animated animate__fadeInRightBig animate__fast-2s" : ""}`,
          children: heading
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "w-[60%]", children: /* @__PURE__ */ jsx(
        "p",
        {
          className: ` text-3xl text-white font-light ${status === "active" ? "animate__animated animate__fadeInUp animate__delay-1s" : ""}`,
          children: paragraph
        }
      ) }),
      /* @__PURE__ */ jsx("section", { className: "w-[100%]  mt-14 banner__buttons", children: buttons.map((btn, index) => /* @__PURE__ */ jsx(
        "button",
        {
          className: `banner__buttons__btn banner__buttons--transparent ${status === "active" ? "animate__animated animate__fadeInUp animate__delay-2s" : ""}`,
          children: btn
        },
        index.toString()
      )) })
    ] })
  ] }) });
};
const Banner = ({ page }) => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    page === "home" && /* @__PURE__ */ jsx(BannerHome, {}),
    page === "about" && /* @__PURE__ */ jsx(BannerAbout, {}),
    page === "service" && /* @__PURE__ */ jsx(BannerServices, {}),
    page === "contactUs" && /* @__PURE__ */ jsx(ContactUs, {}),
    page === "publication" && /* @__PURE__ */ jsx(Publication, {}),
    page === "story" && /* @__PURE__ */ jsx(Story, {}),
    page === "message" && /* @__PURE__ */ jsx(Message, {}),
    page === "faq" && /* @__PURE__ */ jsx(Faq, {})
  ] });
};
const BannerHome = () => {
  const sliders = [
    {
      image: "/images/homePage/serviceTwo.jpg",
      content: {
        h1: "Subsidy & countervailing",
        p: `We provide action where imposed subsidy is specified an causes material injury to a domestic industry.`
      },
      buttons: ["Learn More"]
    },
    {
      image: "/images/homePage/storyTwo.jpg",
      content: {
        h1: "Safeguard Measures",
        p: `We provide measures that ensure domestic producers in Ghana are not adversely  affected by the influx of imports.`
      },
      buttons: ["Learn More"]
    },
    {
      image: "/images/homePage/serviceThree.jpg",
      content: {
        h1: "Anti-Dumping",
        p: `We provide actions that counteract the import dumping of goods in Ghana.`
      },
      buttons: ["Learn More"]
    }
  ];
  return /* @__PURE__ */ jsx("section", { className: "w-full h-[var(--banner-height)] overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "w-full h-full carousel-wrapper", children: /* @__PURE__ */ jsx(Carousel, { children: sliders.map((slider, index) => /* @__PURE__ */ jsx(
    CarouselItem,
    {
      src: slider.image,
      heading: slider.content.h1,
      paragraph: slider.content.p,
      buttons: slider.buttons
    },
    `slider___${index}`
  )) }) }) });
};
const BannerAbout = () => {
  return /* @__PURE__ */ jsx("section", { className: "banner__static about", children: /* @__PURE__ */ jsxs("article", { className: "text-white banner__static__article", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-7xl", children: "About Us" }),
    /* @__PURE__ */ jsx("p", { className: "mt-5 text-2xl" })
  ] }) });
};
const BannerServices = () => {
  return /* @__PURE__ */ jsx("section", { className: "banner__static about", children: /* @__PURE__ */ jsxs("article", { className: "text-white banner__static__article", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-7xl", children: "Our Services" }),
    /* @__PURE__ */ jsx("p", { className: "mt-5 text-2xl" })
  ] }) });
};
const ContactUs = () => {
  return /* @__PURE__ */ jsx("section", { className: "banner__static contact", children: /* @__PURE__ */ jsxs("article", { className: "text-white banner__static__article", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-7xl", children: "Contact Us" }),
    /* @__PURE__ */ jsx("p", { className: "mt-5 text-2xl", children: "Connect with Us" })
  ] }) });
};
const Publication = () => {
  return /* @__PURE__ */ jsx("section", { className: "banner__static publication", children: /* @__PURE__ */ jsx("article", { className: "text-white banner__static__article", children: /* @__PURE__ */ jsx("h1", { className: "text-7xl", children: "PUBLICATIONS" }) }) });
};
const Story = () => {
  return /* @__PURE__ */ jsx("section", { className: "banner__static story", children: /* @__PURE__ */ jsx("article", { className: "text-white banner__static__article", children: /* @__PURE__ */ jsx("h1", { className: "text-7xl", children: "Our Story" }) }) });
};
const Message = () => {
  return /* @__PURE__ */ jsx("section", { className: "banner__static message", children: /* @__PURE__ */ jsx("article", { className: "text-white banner__static__article", children: /* @__PURE__ */ jsx("h1", { className: "text-7xl", children: "Our Message" }) }) });
};
const Faq = () => {
  return /* @__PURE__ */ jsx("section", { className: "banner__static faq", children: /* @__PURE__ */ jsxs("article", { className: "text-white banner__static__article", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-5xl", children: "Frequently Asked Question" }),
    /* @__PURE__ */ jsx("p", { className: "mt-5 text-2xl", children: "The most common questions about how our business works and what can do for you." })
  ] }) });
};
const Footer = () => {
  return /* @__PURE__ */ jsxs("footer", { className: "w-[100%] text-white", children: [
    /* @__PURE__ */ jsxs("nav", { className: "w-[100%] h-[auto] lg:h-[60vh] flex flex-col md:flex-row md:flex-wrap bg-footer px-web-s lg:px-web-l justify-start items-start py-[3rem]", children: [
      /* @__PURE__ */ jsxs("section", { className: "w-[100%] md:w-[50%] lg:w-[30%] mt-web-l pr-2", children: [
        /* @__PURE__ */ jsx("div", { className: "w-[100%] mb-web-xs md:mb-web-l", children: /* @__PURE__ */ jsx("h5", { className: "text-xl font-bold capitalize", children: "Contacts" }) }),
        /* @__PURE__ */ jsxs("ul", { className: "text-[1rem]", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-center mb-3 text-center", children: [
            /* @__PURE__ */ jsx("span", { className: "mr-3 opacity-60", children: /* @__PURE__ */ jsx(SlPaperPlane, {}) }),
            /* @__PURE__ */ jsxs(
              "address",
              {
                className: "pl-2 font-normal text-left font-",
                style: { fontStyle: "normal" },
                children: [
                  /* @__PURE__ */ jsx("p", { className: "text-white opacity-60", children: "2nd Floor (West Wing)," }),
                  /* @__PURE__ */ jsx("p", { className: "text-white opacity-60", children: "East Cantonments near US Embassy, 5th Link Road, Accra." })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-center mb-3 text-center", children: [
            /* @__PURE__ */ jsx("span", { className: "mr-3 opacity-60", children: /* @__PURE__ */ jsx(SlCallIn, {}) }),
            /* @__PURE__ */ jsx("a", { href: "tel:+233302960298", className: "opacity-60", children: /* @__PURE__ */ jsx("span", { children: "+233(0) 30 296 0298" }) })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-center mb-3 text-center", children: [
            /* @__PURE__ */ jsx("span", { className: "mr-3 opacity-60", children: /* @__PURE__ */ jsx(SlEnvelopeOpen, {}) }),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "mailto:info@gitc.gov.gh",
                className: "opacity-60",
                children: /* @__PURE__ */ jsx("span", { children: "info@gitc.gov.gh" })
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-center mb-3 text-center", children: [
            /* @__PURE__ */ jsx("span", { className: "mr-3", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: "/images/location.png",
                alt: "icon",
                srcSet: "",
                className: "w-[1.5rem]"
              }
            ) }),
            /* @__PURE__ */ jsx("span", { className: "opacity-60", children: "GL-040-2630" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "w-[100%] md:w-[50%] lg:w-[20%] mt-web-l", children: [
        /* @__PURE__ */ jsx("div", { className: "w-[100%] mb-web-xs md:mb-web-l", children: /* @__PURE__ */ jsx("h5", { className: "text-xl font-bold capitalize", children: "Useful Links" }) }),
        /* @__PURE__ */ jsxs("ul", { className: "w-[100%] text-[1rem] opacity-60", children: [
          /* @__PURE__ */ jsx("li", { className: "mb-3 text-[1rem] capitalize transform hover:text-primary", children: /* @__PURE__ */ jsx(Link, { href: "/team", children: "About us" }) }),
          /* @__PURE__ */ jsx("li", { className: "mb-3 text-[1rem] capitalize transform hover:text-primary", children: /* @__PURE__ */ jsx(Link, { href: "/story", children: "Our team" }) }),
          /* @__PURE__ */ jsx("li", { className: "mb-3 text-[1rem] capitalize transform hover:text-primary", children: /* @__PURE__ */ jsx(Link, { href: "/services", children: "Our service" }) }),
          /* @__PURE__ */ jsx("li", { className: "mb-3 text-[1rem] capitalize transform hover:text-primary", children: /* @__PURE__ */ jsx(Link, { href: "/resources", children: "Resources" }) }),
          /* @__PURE__ */ jsx("li", { className: "mb-3 text-[1rem] capitalize transform hover:text-primary", children: /* @__PURE__ */ jsx(Link, { href: "/publications", children: "Publications" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "w-[100%] md:w-[50%] lg:w-[25%] mt-web-l md:mt-web-l", children: [
        /* @__PURE__ */ jsx("div", { className: "w-[100%] mb-web-xs md:mb-web-l", children: /* @__PURE__ */ jsx("h5", { className: "text-xl font-bold capitalize", children: "External Links" }) }),
        /* @__PURE__ */ jsxs("ul", { className: "w-[100%] text-[1rem] opacity-60", children: [
          /* @__PURE__ */ jsx("li", { className: "mb-3 text-[1rem] capitalize transform hover:text-primary", children: /* @__PURE__ */ jsx(Link, { href: "/about", children: "Ministry of Trade and Industry" }) }),
          /* @__PURE__ */ jsx("li", { className: "mb-3 text-[1rem] capitalize transform hover:text-primary", children: /* @__PURE__ */ jsx(Link, { href: "/team", children: "Ghana Free Zone Authority" }) }),
          /* @__PURE__ */ jsx("li", { className: "mb-3 text-[1rem] capitalize transform hover:text-primary", children: /* @__PURE__ */ jsx(Link, { href: "/services", children: "Ghana Revenue Authority" }) }),
          /* @__PURE__ */ jsx("li", { className: "mb-3 text-[1rem] capitalize transform hover:text-primary", children: /* @__PURE__ */ jsx(Link, { href: "/resources", children: "Ghana Standard Authority" }) }),
          /* @__PURE__ */ jsx("li", { className: "mb-3 text-[1rem] capitalize transform hover:text-primary", children: /* @__PURE__ */ jsx(Link, { href: "/publications", children: "World Trade Center" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "w-[100%] md:w-[50%] lg:w-[25%] mt-web-l md:mt-web-l", children: [
        /* @__PURE__ */ jsx("div", { className: "w-[100%] mb-web-xs md:mb-web-xl", children: /* @__PURE__ */ jsx("h5", { className: "text-xl font-bold capitalize", children: "Gallery" }) }),
        /* @__PURE__ */ jsxs("section", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
            "img",
            {
              src: "/images/footer/footer.jpg",
              alt: "",
              srcSet: ""
            }
          ) }),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
            "img",
            {
              src: "/images/footer/footer1.jpg",
              alt: "",
              srcSet: ""
            }
          ) }),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
            "img",
            {
              src: "/images/footer/footer2.jpg",
              alt: "",
              srcSet: ""
            }
          ) }),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
            "img",
            {
              src: "/images/footer/footer3.jpg",
              alt: "",
              srcSet: ""
            }
          ) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "w-[100%] h-[5rem] bg-tertiary flex items-center text-web-xs md:text-text-[1rem]  px-web-xs lg:px-web-l", children: /* @__PURE__ */ jsxs("p", { className: "text-white opacity-60", children: [
      "©Copyright ",
      new Date().getUTCFullYear(),
      ", All Rights Reserved, Ghana International Trade Commission."
    ] }) })
  ] });
};
let dateOptions = {
  weekday: "long",
  year: "numeric",
  month: "short",
  day: "numeric"
  // hour: "numeric",
  // minute: "numeric",
  // second: "numeric",
};
function formatDateTimeShort(string) {
  const date = string ? new Date(string) : void 0;
  return (date == null ? void 0 : date.toLocaleDateString("en-GH", dateOptions)) || "";
}
function getDateTimeShort() {
  return formatDateTimeShort(new Date().toJSON());
}
function Header() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("header", { className: "w-full h-[3.5rem] bg-white hidden md:flex justify-between items-center px-web-l text-secondary", children: [
      /* @__PURE__ */ jsxs("ul", { className: "flex self-stretch", children: [
        /* @__PURE__ */ jsxs("li", { className: "flex items-center pr-4 mr-5 text-center border-r-2 border-gray-100", children: [
          /* @__PURE__ */ jsx("span", { className: "mr-2", children: /* @__PURE__ */ jsx(SlClock, {}) }),
          /* @__PURE__ */ jsx("span", { className: "", children: getDateTimeShort() })
        ] }),
        /* @__PURE__ */ jsx("li", { className: "flex items-center text-center hover:text-primary", children: /* @__PURE__ */ jsxs(
          "a",
          {
            href: "tel:+233302960298",
            className: "flex items-center text-center",
            children: [
              /* @__PURE__ */ jsx("span", { className: "mr-2", children: /* @__PURE__ */ jsx(SlCallIn, {}) }),
              /* @__PURE__ */ jsx("span", { children: "+233(0) 30 296 0298" })
            ]
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxs("ul", { className: "flex self-stretch", children: [
        /* @__PURE__ */ jsx("li", { className: "pr-4 border-r-2 border-gray-100 hover:text-primary", children: /* @__PURE__ */ jsxs(
          "a",
          {
            href: "mailto:info@gitc.gov.gh",
            className: "h-[100%] flex items-center text-center",
            children: [
              /* @__PURE__ */ jsx("span", { className: "mr-2", children: /* @__PURE__ */ jsx(SlEnvelopeOpen, {}) }),
              /* @__PURE__ */ jsx("span", { children: "info@gitc.gov.gh" })
            ]
          }
        ) }),
        /* @__PURE__ */ jsxs("li", { className: "flex items-center ml-5 text-center", children: [
          /* @__PURE__ */ jsx("span", { className: "mr-2", children: /* @__PURE__ */ jsx(SlLocationPin, {}) }),
          /* @__PURE__ */ jsx("span", { children: "GL-040-2630" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "justify-center w-full h-[4.5rem] md:flex z-10 hidden justify-items-center bg-white", children: /* @__PURE__ */ jsxs("div", { className: " left-0 h-[100%] items-center md:flex justify-between w-[85%]", children: [
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
        "img",
        {
          src: "/images/logo.png",
          alt: "",
          srcSet: "",
          className: "h-[4.5rem]"
        }
      ) }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
        Link,
        {
          href: "/faq",
          as: "button",
          className: `block  py-2 w-[6rem] rounded-md text-white text-bold text-lg bg-primary`,
          children: "FAQ"
        }
      ) })
    ] }) })
  ] });
}
const navigation = "";
const Navigation = () => {
  const [searchToggle, setSearchToggle] = React.useState(false);
  const [menuToggle, setMenuToggle] = React.useState(false);
  const [headerStyle, setHeaderStyle] = React.useState({
    transition: "all 300ms ease-in"
  });
  const [navStyle, setNavStyle] = React.useState({
    transition: "all 300ms ease-in"
  });
  const toggleMobileNavigation = () => {
    setMenuToggle((state) => state = !state);
  };
  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isSticky = currPos.y < -230;
      const animateNavStyle = {
        width: isSticky ? "100%" : "85%",
        transition: `width 200ms ${isSticky ? "ease-in" : "ease-out"}`,
        transform: isSticky ? "none" : "translate(100)",
        transformOrigin: "center",
        borderRadius: `${isSticky ? "0" : ".2rem"}`,
        backgroundColor: `${isSticky ? "#F90004" : "rgba(250, 0, 4, 0.899)"}`
      };
      const shouldBeStyle = {
        position: isSticky ? "sticky" : "absolute",
        top: isSticky ? "0" : "12rem"
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
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("section", { className: "mobile__navigation sticky left-0 top-0 h-[4rem] flex md:hidden items-center justify-between w-full bg-white z-20 px-web-xs", children: [
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
        "img",
        {
          src: "/images/logo.png",
          alt: "",
          srcSet: "",
          className: "h-[3.5rem]"
        }
      ) }),
      /* @__PURE__ */ jsx(
        "button",
        {
          className: `mobile__navigation__menu ${menuToggle && "active"}`,
          onClick: () => toggleMobileNavigation(),
          children: /* @__PURE__ */ jsx("span", {})
        }
      )
    ] }),
    /* @__PURE__ */ jsxs(
      "nav",
      {
        className: `z-20 md:hidden text-white mobile__navigation__menu__items ${!menuToggle && "active"}`,
        children: [
          /* @__PURE__ */ jsx("section", { className: "mobile__navigation sticky left-0 top-0 h-[4rem] flex md:hidden items-center justify-end w-full bg-inherit z-20 px-web-xs", children: /* @__PURE__ */ jsx(
            "button",
            {
              className: `mobile__navigation__menu ${menuToggle && "active"}`,
              onClick: () => toggleMobileNavigation(),
              children: /* @__PURE__ */ jsx("span", {})
            }
          ) }),
          /* @__PURE__ */ jsxs("ul", { className: "flex-column items-center justify-start h-full [&>li>a, &>li>span]:opacity-70 text-xl font-bold relative", children: [
            /* @__PURE__ */ jsx("li", { className: "[&:hover>a]:opacity-100", children: /* @__PURE__ */ jsx(Link, { href: "/", children: "Home" }) }),
            /* @__PURE__ */ jsxs("li", { className: "relative hover:opacity-100", children: [
              /* @__PURE__ */ jsxs("span", { children: [
                /* @__PURE__ */ jsx("span", { children: "About Us" }),
                /* @__PURE__ */ jsx("span", { className: "ml-2 text-xl text-bolder", children: /* @__PURE__ */ jsx(SlArrowDown, {}) })
              ] }),
              /* @__PURE__ */ jsxs("ul", { className: " bg-white top-[3rem] text-tertiary min-w-[15rem] [&>li>a]:text-md dropdown", children: [
                /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/about", children: "Our Team" }) }),
                /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/story", children: "Our Story" }) }),
                /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/message", children: "Our Message" }) })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "hover:opacity-100", children: [
              /* @__PURE__ */ jsxs("span", { children: [
                /* @__PURE__ */ jsx("span", { children: "Our Services" }),
                /* @__PURE__ */ jsx("span", { className: "ml-2 text-xl text-bolder", children: /* @__PURE__ */ jsx(SlArrowDown, {}) })
              ] }),
              /* @__PURE__ */ jsxs("ul", { className: " bg-white top-[3rem] text-tertiary min-w-[15rem] [&>li>a]:text-md dropdown", children: [
                /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/service/subsidy", children: "Subsidy And Counter" }) }),
                /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/service/safeguard", children: "SafeGuards Measures" }) }),
                /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/service/research", children: "Research" }) }),
                /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/service/dispute", children: "Dispute Settlements" }) }),
                /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/service/dumping", children: "Anti-Dumping" }) }),
                /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/services", children: "Tariff Review" }) })
              ] })
            ] }),
            /* @__PURE__ */ jsx("li", { className: "hover:opacity-100", children: /* @__PURE__ */ jsx(Link, { href: "/resources", children: "Resources" }) }),
            /* @__PURE__ */ jsx("li", { className: "hover:opacity-100", children: /* @__PURE__ */ jsx(Link, { href: "/publications", children: "Publications" }) }),
            /* @__PURE__ */ jsx("li", { className: "hover:opacity-100", children: /* @__PURE__ */ jsx(Link, { href: "/contact", children: "Contact Us" }) })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      "section",
      {
        className: "w-full bg-transparent absolute top-[12rem] left-0 h-[4rem] justify-center items-center hidden md:flex navigation-wrapper",
        style: { ...headerStyle },
        children: [
          /* @__PURE__ */ jsxs(
            "nav",
            {
              className: "w-[85%] h-[100%] text-white md:px-web-l flex justify-between items-center rounded-sm bg-primary-light shadow-md",
              style: { ...navStyle },
              children: [
                /* @__PURE__ */ jsxs("ul", { className: "flex items-center justify-start h-full [&>li:not(:last-child)]:pr-8 [&>li>a]:opacity-85 text-lg font-bold relative navigation", children: [
                  /* @__PURE__ */ jsx("li", { className: "[&:hover>a]:opacity-100", children: /* @__PURE__ */ jsx(Link, { href: "/", children: "Home" }) }),
                  /* @__PURE__ */ jsxs("li", { className: "relative [&:hover>a]:opacity-100", children: [
                    /* @__PURE__ */ jsxs(Link, { href: "/about", children: [
                      /* @__PURE__ */ jsx("span", { children: "About Us" }),
                      /* @__PURE__ */ jsx("span", { className: "ml-2 text-xl text-bold", children: /* @__PURE__ */ jsx(SlArrowDown, {}) })
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: "absolute  top-[4rem]  dropdown__wrapper", children: /* @__PURE__ */ jsxs("ul", { className: "bg-white text-tertiary min-w-[15rem] [&>li>a]:text-sm dropdown__list", children: [
                      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/about", children: "Our Team" }) }),
                      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/story", children: "Our Story" }) }),
                      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/message", children: "Our Message" }) })
                    ] }) })
                  ] }),
                  /* @__PURE__ */ jsxs("li", { className: "[&:hover>a]:opacity-100", children: [
                    /* @__PURE__ */ jsxs(Link, { href: "/services", children: [
                      /* @__PURE__ */ jsx("span", { children: "Our Services" }),
                      /* @__PURE__ */ jsx("span", { className: "ml-2 text-xl text-bold", children: /* @__PURE__ */ jsx(SlArrowDown, {}) })
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: "absolute  top-[4rem]  dropdown__wrapper", children: /* @__PURE__ */ jsxs("ul", { className: "bg-white text-tertiary min-w-[15rem] [&>li>a]:text-sm dropdown__list", children: [
                      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/service/subsidy", children: "Subsidy And Counter" }) }),
                      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/service/safeguard", children: "SafeGuards Measures" }) }),
                      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/service/research", children: "Research" }) }),
                      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/service/dispute", children: "Dispute Settlements" }) }),
                      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/service/dumping", children: "Anti-Dumping" }) }),
                      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/services", children: "Tariff Review" }) })
                    ] }) })
                  ] }),
                  /* @__PURE__ */ jsx("li", { className: "[&:hover>a]:opacity-100", children: /* @__PURE__ */ jsx(Link, { href: "/resources", children: "Resources" }) }),
                  /* @__PURE__ */ jsx("li", { className: "[&:hover>a]:opacity-100", children: /* @__PURE__ */ jsx(Link, { href: "/publications", children: "Publications" }) }),
                  /* @__PURE__ */ jsx("li", { className: "[&:hover>a]:opacity-100", children: /* @__PURE__ */ jsx(Link, { href: "/contact", children: "Contact Us" }) })
                ] }),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => setSearchToggle((state) => state = !state),
                    children: /* @__PURE__ */ jsx(SlMagnifier, { className: "text-3xl font-extrabold " })
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            "section",
            {
              className: `search__overlay ${searchToggle && "active"}`,
              children: /* @__PURE__ */ jsxs("section", { className: "search__overlay__form", children: [
                /* @__PURE__ */ jsxs("form", { className: "border-white border-solid input__wrapper focus-within:border-none focus-within:outline-none", children: [
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "text",
                      name: "",
                      placeholder: "Search...",
                      id: "",
                      className: "border-none outline-none focus:outline-none focus:border-0 focus:ring-0"
                    }
                  ),
                  /* @__PURE__ */ jsxs("div", { className: "actions", children: [
                    /* @__PURE__ */ jsx("span", { role: "button", children: /* @__PURE__ */ jsx(SlMagnifier, {}) }),
                    /* @__PURE__ */ jsx(
                      "span",
                      {
                        role: "button",
                        onClick: () => setSearchToggle(
                          (state) => state = !state
                        ),
                        children: /* @__PURE__ */ jsx(RxCross1, {})
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsx("section", { className: "search__overlay__dropdown", children: "Nothing found for your search!" })
              ] })
            }
          )
        ]
      }
    )
  ] });
};
const WebsiteLayout = ({ children, page }) => {
  return /* @__PURE__ */ jsxs("main", { className: "w-full", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx(Navigation, {}),
    /* @__PURE__ */ jsx(Banner, { page }),
    /* @__PURE__ */ jsx("main", { children }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  WebsiteLayout as W
};
