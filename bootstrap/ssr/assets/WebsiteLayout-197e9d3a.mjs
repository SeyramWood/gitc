import { a as jsxs, j as jsx, F as Fragment } from "../ssr.mjs";
import React from "react";
import { SlArrowLeft, SlArrowRight, SlPaperPlane, SlCallIn, SlEnvelopeOpen, SlClock, SlLocationPin, SlArrowDown, SlMagnifier } from "react-icons/sl";
import { Link, usePage } from "@inertiajs/inertia-react";
import { g as getDateTimeShort } from "./helpers-97f56fd4.mjs";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { RxCross1 } from "react-icons/rx";
const app = "";
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
      /* @__PURE__ */ jsx("button", { onClick: () => handlePrevious(), children: /* @__PURE__ */ jsx(SlArrowLeft, { className: "hidden lg:block text-[2.5rem]" }) }),
      /* @__PURE__ */ jsx("button", { onClick: () => handleNext(), children: /* @__PURE__ */ jsx(SlArrowRight, { className: "hidden lg:block text-[2.5rem]" }) })
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
    /* @__PURE__ */ jsxs("div", { className: "carousel__container__item__wrapper__content w-[85%] mt-[0] lg:mt-[4rem]", children: [
      /* @__PURE__ */ jsx(
        "h1",
        {
          className: `text-3xl text-bold lg:text-6xl lg:text-bold mb-8 ${status === "active" ? "animate__animated animate__fadeInRightBig animate__fast-2s" : ""}`,
          children: heading
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "w-[100%] md:w-[60%]", children: /* @__PURE__ */ jsx(
        "p",
        {
          className: `text-[1.2rem] lg:text-[1.8rem] text-white font-light ${status === "active" ? "animate__animated animate__fadeInUp animate__delay-1s" : ""}`,
          children: paragraph
        }
      ) }),
      /* @__PURE__ */ jsx("section", { className: "w-[100%]  mt-16 banner__buttons", children: buttons.map((btn, index) => /* @__PURE__ */ jsx(
        Link,
        {
          href: "/story",
          as: "button",
          className: `banner__buttons__btn banner__buttons--solid ${status === "active" ? "animate__animated animate__fadeInUp animate__delay-2s" : ""}`,
          children: btn
        },
        index.toString()
      )) })
    ] })
  ] }) });
};
const footer = "";
function FooterCarousel({ images = [], duration = 1e3, axis }) {
  const [index, setIndex] = React.useState(0);
  const length = images.length;
  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
  };
  React.useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, duration);
    return () => clearInterval(interval);
  }, [index]);
  return /* @__PURE__ */ jsx("div", { className: "footer__carousel", children: images.map((image, i) => /* @__PURE__ */ jsx(
    "div",
    {
      className: `footer__carousel__item`,
      style: {
        display: axis === "y" ? "block" : "inline-block",
        transform: axis === "y" ? `translate3d(0, ${-index * 100}%, 0)` : `translate3d(${-index * 100}%, 0, 0)`
      },
      children: /* @__PURE__ */ jsx("img", { src: image, alt: "tile", srcSet: "" })
    },
    image
  )) });
}
const Banner = ({ page }) => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    page === "home" && /* @__PURE__ */ jsx(BannerHome, {}),
    page === "about" && /* @__PURE__ */ jsx(BannerAbout, {}),
    page === "service" && /* @__PURE__ */ jsx(BannerServices, {}),
    page === "resource" && /* @__PURE__ */ jsx(BannerResources, {}),
    page === "publication" && /* @__PURE__ */ jsx(Publication, {}),
    page === "gallery" && /* @__PURE__ */ jsx(BannerGalleries, {}),
    page === "contactUs" && /* @__PURE__ */ jsx(ContactUs, {}),
    page === "message" && /* @__PURE__ */ jsx(Message, {}),
    page === "story" && /* @__PURE__ */ jsx(Story, {}),
    page === "faq" && /* @__PURE__ */ jsx(Faq, {})
  ] });
};
const BannerHome = () => {
  const sliders = [
    {
      image: "/images/banner/anti-dumping.jpg",
      content: {
        h1: "Anti-Dumping",
        p: `We provide remedies to counteract the dumping of imported products onto the Ghanaian market.`
      },
      buttons: ["Learn More"]
    },
    {
      image: "/images/banner/customs-valuation.jpg",
      content: {
        h1: "Customs Valuation (Dispute Settlement)",
        //(Dispute Settlement)
        p: `We settle disputes arising from classification, valuation, or origin determination by Customs Division of Ghana Revenue Authority.`
      },
      buttons: ["Learn More"]
    },
    {
      image: "/images/banner/safeguard-measure.jpg",
      content: {
        h1: "Safeguard Measures",
        p: `We provide measures that ensure domestic producers in Ghana are not adversely  affected by the influx of imports.`
      },
      buttons: ["Learn More"]
    },
    {
      image: "/images/banner/subsidy.png",
      content: {
        h1: "Subsidies and Countervailing Measures ",
        p: `We provide measures to counteract the adverse effects of imported subsidized products.`
      },
      buttons: ["Learn More"]
    }
  ];
  return /* @__PURE__ */ jsx("section", { className: "w-full h-[var(--banner-height-sm)] md:h-[var(--banner-height-sm)] lg:h-[var(--banner-height)] overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "w-full h-full carousel-wrapper", children: /* @__PURE__ */ jsx(Carousel, { children: sliders.map((slider, index) => /* @__PURE__ */ jsx(
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
  return /* @__PURE__ */ jsx("section", { className: "banner__static about h-[var(--banner-height-sm)] md:h-[var(--banner-height-sm)] lg:h-[var(--banner-height)]", children: /* @__PURE__ */ jsxs("article", { className: "text-white banner__static__article", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-5xl lg:text-6xl text-bold", children: "About Us" }),
    /* @__PURE__ */ jsx("p", { className: "mt-8 text-[1.2rem] lg:text-3xl font-light text-white", children: "Who we are." })
  ] }) });
};
const BannerServices = () => {
  return /* @__PURE__ */ jsx("section", { className: "banner__static services h-[var(--banner-height-sm)] md:h-[var(--banner-height-sm)] lg:h-[var(--banner-height)]", children: /* @__PURE__ */ jsxs("article", { className: "text-white banner__static__article", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-6xl text-bold", children: "Our Services" }),
    /* @__PURE__ */ jsx("p", { className: "mt-8 text-3xl font-light text-white" })
  ] }) });
};
const BannerResources = () => {
  return /* @__PURE__ */ jsx("section", { className: "banner__static resources h-[var(--banner-height-sm)] md:h-[var(--banner-height-sm)] lg:h-[var(--banner-height)]", children: /* @__PURE__ */ jsxs("article", { className: "text-white banner__static__article", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-5xl lg:text-6xl text-bold", children: "Resources" }),
    /* @__PURE__ */ jsx("p", { className: "mt-8 text-3xl font-light text-white" })
  ] }) });
};
const BannerGalleries = () => {
  return /* @__PURE__ */ jsx("section", { className: "banner__static gallery h-[var(--banner-height-sm)] md:h-[var(--banner-height-sm)] lg:h-[var(--banner-height)]", children: /* @__PURE__ */ jsxs("article", { className: "text-white banner__static__article", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-5xl lg:text-7xl text-bold", children: "Gallery" }),
    /* @__PURE__ */ jsx("p", { className: "mt-8 text-3xl font-light text-white", children: "Pictures of determinations, workshops, and much more." })
  ] }) });
};
const ContactUs = () => {
  return /* @__PURE__ */ jsx("section", { className: "banner__static contact h-[var(--banner-height-sm)] md:h-[var(--banner-height-sm)] lg:h-[var(--banner-height)]", children: /* @__PURE__ */ jsxs("article", { className: "text-white banner__static__article", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-5xl lg:text-7xl text-bold", children: "Contact Us" }),
    /* @__PURE__ */ jsx("p", { className: "mt-8 text-[1.8rem] font-light text-white", children: "Connect with Us" })
  ] }) });
};
const Publication = () => {
  return /* @__PURE__ */ jsx("section", { className: "banner__static publication h-[var(--banner-height-sm)] md:h-[var(--banner-height-sm)] lg:h-[var(--banner-height)]", children: /* @__PURE__ */ jsxs("article", { className: "text-white banner__static__article", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-5xl lg:text-6xl text-bold", children: "Publications" }),
    /* @__PURE__ */ jsx("p", { className: "mt-8 text-[1.8rem] font-light text-white", children: "These include Commission reports, studies, face sheets and much more." })
  ] }) });
};
const Story = () => {
  return /* @__PURE__ */ jsx("section", { className: "banner__static story h-[var(--banner-height-sm)] md:h-[var(--banner-height-sm)] lg:h-[var(--banner-height)]", children: /* @__PURE__ */ jsx("article", { className: "text-white banner__static__article", children: /* @__PURE__ */ jsx("h1", { className: "text-5xl lg:text-6xl text-bold", children: "Our Story" }) }) });
};
const Message = () => {
  return /* @__PURE__ */ jsx("section", { className: "banner__static message h-[var(--banner-height-sm)] md:h-[var(--banner-height-sm)] lg:h-[var(--banner-height)]", children: /* @__PURE__ */ jsx("article", { className: "text-white banner__static__article", children: /* @__PURE__ */ jsx("h1", { className: "text-5xl lg:text-6xl text-bold", children: "Our Message" }) }) });
};
const Faq = () => {
  return /* @__PURE__ */ jsx("section", { className: "banner__static faq h-[var(--banner-height-sm)] md:h-[var(--banner-height-sm)] lg:h-[var(--banner-height)]", children: /* @__PURE__ */ jsxs("article", { className: "text-white banner__static__article", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-5xl lg:text-6xl text-bold", children: "Frequently Asked Question" }),
    /* @__PURE__ */ jsx("p", { className: "mt-8 text-3xl font-light text-white", children: "The most common questions about how our business works and what can be done for you." })
  ] }) });
};
const Footer = () => {
  const { footerAlbums } = usePage().props;
  const [albums, setAlbums] = React.useState([]);
  React.useEffect(() => {
    (() => {
      if (footerAlbums.length > 0) {
        setAlbums(
          (state) => footerAlbums.map((a, index) => {
            return {
              images: a.gallery.map((g) => `/uploads/gallery/${g.image}`).slice(-4),
              duration: 2e3,
              axis: index === 1 || index === 2 ? "y" : "x"
            };
          })
        );
      }
    })();
  }, [footerAlbums]);
  return /* @__PURE__ */ jsxs("footer", { className: "w-[100%] text-white", children: [
    /* @__PURE__ */ jsxs("nav", { className: "w-[100%] h-[auto] lg:h-[60vh] flex flex-col md:flex-row md:flex-wrap bg-footer px-web-s lg:px-web-l justify-start items-start py-[3rem]", children: [
      /* @__PURE__ */ jsxs("section", { className: "w-[100%] md:w-[50%] lg:w-[30%] mt-web-l pr-2", children: [
        /* @__PURE__ */ jsx("div", { className: "w-[100%] mb-web-xs md:mb-web-md", children: /* @__PURE__ */ jsx("h5", { className: "text-xl font-bold capitalize", children: "Contacts" }) }),
        /* @__PURE__ */ jsxs("ul", { className: "text-[1rem] [&>li>a]:font-thin [&>li>span]:font-thin [&>li>address>span]:font-thin", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-center mb-3 text-center", children: [
            /* @__PURE__ */ jsx("span", { className: "mr-3 opacity-60", children: /* @__PURE__ */ jsx(SlPaperPlane, {}) }),
            /* @__PURE__ */ jsxs(
              "address",
              {
                className: "pl-2 font-normal text-left font-",
                style: { fontStyle: "normal" },
                children: [
                  /* @__PURE__ */ jsx("span", { className: "text-white opacity-60", children: "P.O. Box 6297, Cantonments – Accra." }),
                  /* @__PURE__ */ jsx("br", {}),
                  /* @__PURE__ */ jsx("span", { className: "text-white opacity-60", children: "Ghana Free Zones Building" }),
                  /* @__PURE__ */ jsx("br", {}),
                  /* @__PURE__ */ jsxs("span", { className: "text-white opacity-60", children: [
                    "2",
                    /* @__PURE__ */ jsx("sup", { children: "nd" }),
                    " Floor (West wing)"
                  ] }),
                  /* @__PURE__ */ jsx("br", {}),
                  /* @__PURE__ */ jsx("span", { className: "text-white opacity-60", children: "East Cantonments" }),
                  /* @__PURE__ */ jsx("br", {}),
                  /* @__PURE__ */ jsxs("span", { className: "text-white opacity-60", children: [
                    "5",
                    /* @__PURE__ */ jsx("sup", { children: "th" }),
                    " Link Road, Accra."
                  ] })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-center mb-3 text-center", children: [
            /* @__PURE__ */ jsx("span", { className: "mr-3 opacity-60", children: /* @__PURE__ */ jsx(SlCallIn, {}) }),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "tel:+233302960298",
                className: "pl-2 opacity-60",
                children: /* @__PURE__ */ jsx("span", { children: "+233(0) 30 296 0298" })
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-center mb-3 text-center", children: [
            /* @__PURE__ */ jsx("span", { className: "mr-3 opacity-60", children: /* @__PURE__ */ jsx(SlEnvelopeOpen, {}) }),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "mailto:info@gitc.gov.gh",
                className: "pl-2 opacity-60",
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
                className: "w-[1.2rem]"
              }
            ) }),
            /* @__PURE__ */ jsx("span", { className: "pl-1 opacity-60", children: "GL-040-2630" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "w-[100%] md:w-[50%] lg:w-[20%] mt-web-l", children: [
        /* @__PURE__ */ jsx("div", { className: "w-[100%] mb-web-xs md:mb-web-md", children: /* @__PURE__ */ jsx("h5", { className: "text-xl font-bold capitalize", children: "Useful Links" }) }),
        /* @__PURE__ */ jsxs("ul", { className: "w-[100%] text-[1rem] opacity-60 [&>li>a]:font-thin", children: [
          /* @__PURE__ */ jsx("li", { className: "mb-3 text-[1rem] capitalize transform hover:text-primary", children: /* @__PURE__ */ jsx(Link, { href: "/about", children: "About us" }) }),
          /* @__PURE__ */ jsx("li", { className: "mb-3 text-[1rem] capitalize transform hover:text-primary", children: /* @__PURE__ */ jsx(Link, { href: "/about", children: "Our team" }) }),
          /* @__PURE__ */ jsx("li", { className: "mb-3 text-[1rem] capitalize transform hover:text-primary", children: /* @__PURE__ */ jsx(Link, { href: "/services", children: "Our services" }) }),
          /* @__PURE__ */ jsx("li", { className: "mb-3 text-[1rem] capitalize transform hover:text-primary", children: /* @__PURE__ */ jsx(Link, { href: "/resources", children: "Resources" }) }),
          /* @__PURE__ */ jsx("li", { className: "mb-3 text-[1rem] capitalize transform hover:text-primary", children: /* @__PURE__ */ jsx(Link, { href: "/publications", children: "Publications" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "w-[100%] md:w-[50%] lg:w-[25%] mt-web-l md:mt-web-l", children: [
        /* @__PURE__ */ jsx("div", { className: "w-[100%] mb-web-xs md:mb-web-md", children: /* @__PURE__ */ jsx("h5", { className: "text-xl font-bold capitalize", children: "External Links" }) }),
        /* @__PURE__ */ jsxs("ul", { className: "w-[100%] text-[1rem] opacity-60 [&>li>a]:font-thin", children: [
          /* @__PURE__ */ jsx("li", { className: "mb-3 text-[1rem] capitalize transform hover:text-primary", children: /* @__PURE__ */ jsx(
            "a",
            {
              href: "https://moti.gov.gh/v2",
              target: "_blank",
              rel: "noopener noreferrer",
              children: "Ministry of Trade and Industry"
            }
          ) }),
          /* @__PURE__ */ jsx("li", { className: "mb-3 text-[1rem] capitalize transform hover:text-primary", children: /* @__PURE__ */ jsx(
            "a",
            {
              href: "https://gfza.gov.gh",
              target: "_blank",
              rel: "noopener noreferrer",
              children: "Ghana Free Zones Authority"
            }
          ) }),
          /* @__PURE__ */ jsx("li", { className: "mb-3 text-[1rem] capitalize transform hover:text-primary", children: /* @__PURE__ */ jsx(
            "a",
            {
              href: "https://gra.gov.gh",
              target: "_blank",
              rel: "noopener noreferrer",
              children: "Ghana Revenue Authority"
            }
          ) }),
          /* @__PURE__ */ jsx("li", { className: "mb-3 text-[1rem] capitalize transform hover:text-primary", children: /* @__PURE__ */ jsx(
            "a",
            {
              href: "https://gsa.gov.gh",
              target: "_blank",
              rel: "noopener noreferrer",
              children: "Ghana Standards Authority"
            }
          ) }),
          /* @__PURE__ */ jsx("li", { className: "mb-3 text-[1rem] capitalize transform hover:text-primary", children: /* @__PURE__ */ jsx(
            "a",
            {
              href: "https://www.wtcaccra.com",
              target: "_blank",
              rel: "noopener noreferrer",
              children: "World Trade Center"
            }
          ) }),
          /* @__PURE__ */ jsx("li", { className: "mb-3 text-[1rem] capitalize transform hover:text-primary", children: /* @__PURE__ */ jsx(
            "a",
            {
              href: "https://www.agighana.org",
              target: "_blank",
              rel: "noopener noreferrer",
              children: "Association of Ghanaian Industries"
            }
          ) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "w-[100%] md:w-[25%] lg:w-[18%] mt-web-l md:mt-web-l", children: [
        /* @__PURE__ */ jsx("div", { className: "w-[100%] mb-web-xs md:mb-web-md", children: /* @__PURE__ */ jsx("h5", { className: "text-xl font-bold capitalize", children: "Gallery" }) }),
        /* @__PURE__ */ jsx("section", { className: "grid gap-2 grid-cols-4 md:grid-cols-2", children: albums.map((a, index) => /* @__PURE__ */ jsx(
          Link,
          {
            href: "/gallery",
            children: /* @__PURE__ */ jsx(
              FooterCarousel,
              {
                images: a.images,
                duration: a.duration,
                axis: a.axis
              }
            )
          },
          `footer_gallery_${index}`
        )) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "w-[100%] h-[5rem] bg-tertiary flex items-center text-web-xs md:text-text-[1rem]  px-web-xs lg:px-web-l", children: /* @__PURE__ */ jsxs("p", { className: "text-white opacity-60", children: [
      "©Copyright ",
      new Date().getUTCFullYear(),
      ", All Rights Reserved, Ghana International Trade Commission."
    ] }) })
  ] });
};
function Header() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("header", { className: "w-full h-[3rem] bg-white hidden md:flex justify-between items-center px-web-l text-secondary", children: [
      /* @__PURE__ */ jsxs("ul", { className: "flex self-stretch text-sm", children: [
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
    /* @__PURE__ */ jsx("section", { className: "justify-center w-full h-[10rem] md:flex z-10 hidden justify-items-center bg-white", children: /* @__PURE__ */ jsxs("div", { className: " left-0 h-[100%] items-center md:flex justify-between w-[85%]", children: [
      /* @__PURE__ */ jsx(Link, { href: "/", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: "/images/logo.png",
          alt: "",
          srcSet: "",
          className: "h-[9rem]"
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
      const isSticky = currPos.y < -350;
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
        top: isSticky ? "0" : "17rem"
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
      /* @__PURE__ */ jsx(Link, { href: "/", children: /* @__PURE__ */ jsx(
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
          /* @__PURE__ */ jsx("div", { className: "flex h-screen-sm mobile__navigation__menu__items__wrapper", children: /* @__PURE__ */ jsxs("ul", { className: "flex-column items-center justify-center h-screen-sm w-screen-sm [&>li>a, &>li>span]:opacity-70 text-md font-semibold relative", children: [
            /* @__PURE__ */ jsx("li", { className: "[&:hover>a]:opacity-100", children: /* @__PURE__ */ jsx(Link, { href: "/", children: "Home" }) }),
            /* @__PURE__ */ jsxs("li", { className: "relative hover:opacity-100", children: [
              /* @__PURE__ */ jsxs("span", { children: [
                /* @__PURE__ */ jsx("span", { children: "About Us" }),
                /* @__PURE__ */ jsx("span", { className: "ml-2 text-md text-bolder", children: /* @__PURE__ */ jsx(SlArrowDown, {}) })
              ] }),
              /* @__PURE__ */ jsxs("ul", { className: "text-white  [&>li>a]:text-md dropdown opacity-60 [&>li>a]:font-thin [&>li:hover>a]:text-primary-light", children: [
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
              /* @__PURE__ */ jsxs("ul", { className: " text-white [&>li>a]:text-md  dropdown  opacity-60 [&>li>a]:font-thin [&>li:hover>a]:text-primary-light", children: [
                /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/service/subsidy", children: "Subsidy and Counter" }) }),
                /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/service/safeguard", children: "Safeguards Measures" }) }),
                /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/service/research", children: "Research" }) }),
                /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/service/dispute", children: "Dispute Settlements" }) }),
                /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/service/dumping", children: "Anti-Dumping" }) }),
                /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/services", children: "Tariff Review" }) })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "hover:opacity-100", children: [
              /* @__PURE__ */ jsx(Link, { href: "/resources" }),
              /* @__PURE__ */ jsxs("span", { children: [
                /* @__PURE__ */ jsx("span", { children: "Resources" }),
                /* @__PURE__ */ jsx("span", { className: "ml-2 text-xl text-bolder", children: /* @__PURE__ */ jsx(SlArrowDown, {}) })
              ] }),
              /* @__PURE__ */ jsxs("ul", { className: " text-white [&>li>a]:text-md dropdown opacity-60 [&>li>a]:font-thin [&>li:hover>a]:text-primary-light", children: [
                /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/resources", children: "Legislative Instruments" }) }),
                /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/publications", children: "Publications" }) }),
                /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/cases/anti-dumping", children: "Petitions" }) })
              ] })
            ] }),
            /* @__PURE__ */ jsx("li", { className: "hover:opacity-100", children: /* @__PURE__ */ jsx(Link, { href: "/gallery", children: "Gallery" }) }),
            /* @__PURE__ */ jsx("li", { className: "hover:opacity-100", children: /* @__PURE__ */ jsx(Link, { href: "/contact", children: "Contact Us" }) })
          ] }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      "section",
      {
        className: `w-full bg-transparent absolute top-[17rem] left-0 h-[4rem] justify-center items-center hidden md:flex navigation-wrapper`,
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
                    /* @__PURE__ */ jsx("div", { className: "absolute  top-[4rem]  dropdown__wrapper", children: /* @__PURE__ */ jsxs("ul", { className: "bg-white text-tertiary min-w-[15rem] [&>li>a]:text-sm dropdown__list font-light", children: [
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
                    /* @__PURE__ */ jsx("div", { className: "absolute  top-[4rem]  dropdown__wrapper", children: /* @__PURE__ */ jsxs("ul", { className: "bg-white text-tertiary min-w-[15rem] [&>li>a]:text-sm dropdown__list font-light", children: [
                      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/service/subsidy", children: "Subsidy and Counter" }) }),
                      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/service/safeguard", children: "Safeguards Measures" }) }),
                      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/service/research", children: "Research" }) }),
                      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/service/dispute", children: "Dispute Settlements" }) }),
                      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/service/dumping", children: "Anti-Dumping" }) }),
                      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/services", children: "Tariff Review" }) })
                    ] }) })
                  ] }),
                  /* @__PURE__ */ jsxs("li", { className: "[&:hover>a]:opacity-100", children: [
                    /* @__PURE__ */ jsxs(Link, { href: "/resources", children: [
                      /* @__PURE__ */ jsx("span", { children: "Resources" }),
                      /* @__PURE__ */ jsx("span", { className: "ml-2 text-xl text-bold", children: /* @__PURE__ */ jsx(SlArrowDown, {}) })
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: "absolute  top-[4rem]  dropdown__wrapper", children: /* @__PURE__ */ jsxs("ul", { className: "bg-white text-tertiary min-w-[15rem] [&>li>a]:text-sm dropdown__list font-light", children: [
                      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/resources", children: "Legislative Instruments" }) }),
                      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/publications", children: "Publications" }) }),
                      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/cases/anti-dumping", children: "Petitions" }) })
                    ] }) })
                  ] }),
                  /* @__PURE__ */ jsx("li", { className: "[&:hover>a]:opacity-100", children: /* @__PURE__ */ jsx(Link, { href: "/gallery", children: "Gallery" }) }),
                  /* @__PURE__ */ jsx("li", { className: "[&:hover>a]:opacity-100", children: /* @__PURE__ */ jsx(Link, { href: "/contact", children: "Contact Us" }) })
                ] }),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => setSearchToggle((state) => state = !state),
                    children: /* @__PURE__ */ jsx(SlMagnifier, { className: "text-2xl font-extrabold " })
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
  const { flash } = usePage().props;
  return /* @__PURE__ */ jsxs("main", { className: "w-full", children: [
    /* @__PURE__ */ jsx(Header, {}),
    flash.message && /* @__PURE__ */ jsx("div", { className: "alert bg-green-300", children: flash.message }),
    /* @__PURE__ */ jsx(Navigation, {}),
    /* @__PURE__ */ jsx(Banner, { page }),
    /* @__PURE__ */ jsx("main", { children }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  WebsiteLayout as W
};
