import { j as jsx, a as jsxs } from "../ssr.mjs";
import { Link } from "@inertiajs/inertia-react";
import AOS from "aos";
import { useKeenSlider } from "keen-slider/react.js";
import { useEffect, useState } from "react";
import { W as WebsiteLayout } from "./WebsiteLayout-d376d318.mjs";
import { B as Button } from "./Button-d464bc07.mjs";
import { B as ButtonOutline } from "./ButtonOutline-5a2728b7.mjs";
import { H as HeadingSecondary } from "./HeadingSecondary-b4f9f193.mjs";
import { P as Paragraph } from "./Paragraph-8ec8d723.mjs";
/* empty css                           */import "react/jsx-runtime";
import "react-dom/server";
import "process";
import "http";
import "react-icons/sl";
import "react-multi-carousel";
import "@n8tb1t/use-scroll-position";
import "react-icons/rx";
const animation = { duration: 4e4, easing: (t) => t };
const Index = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  useState(false);
  useState(false);
  useState(false);
  useState(0);
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3
    },
    loop: true,
    renderMode: "performance",
    drag: true,
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    }
  });
  return /* @__PURE__ */ jsx(WebsiteLayout, { page: "home", children: /* @__PURE__ */ jsxs("div", { className: "text-lg bg-white text-grey", children: [
    /* @__PURE__ */ jsx("div", { className: "mb-32 bg-slate-100 ", children: /* @__PURE__ */ jsxs(
      "div",
      {
        className: "justify-center gap-3 pb-4 md:flex",
        "data-aos": "fade-up",
        "data-aos-duration": "2000",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex p-2 my-5", children: [
            /* @__PURE__ */ jsx("div", { className: "p-3 w-[30%]", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: "images/homePage/objectivity.png",
                alt: "Objectivity",
                className: "object-contain "
              }
            ) }),
            /* @__PURE__ */ jsxs("div", { className: "w-[70%]", children: [
              /* @__PURE__ */ jsx(HeadingSecondary, { className: "font-bold ", children: "Objectivity" }),
              /* @__PURE__ */ jsx(Paragraph, { className: "", children: "To ensure equality and fairness in the application of measures affecting international trade and the use of world trade regulations." })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex p-2 my-5", children: [
            /* @__PURE__ */ jsx("div", { className: "p-3 w-[30%] ", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: "images/homePage/professionalism.png",
                alt: "professional",
                className: "object-contain"
              }
            ) }),
            /* @__PURE__ */ jsxs("div", { className: "w-[70%] ", children: [
              /* @__PURE__ */ jsx(HeadingSecondary, { className: "font-bold", children: "Professionalism" }),
              /* @__PURE__ */ jsx("p", { children: "To ensure a high level of competence and efficiency in applying international trade rules and regulations as under the World Trade Organization (WTO) provisions." })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex p-2 my-5", children: [
            /* @__PURE__ */ jsx("div", { className: "p-3 w-[30%] ", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: "images/homePage/integrity.png",
                alt: "Integrity",
                className: "object-contain "
              }
            ) }),
            /* @__PURE__ */ jsxs("div", { className: "w-[70%] ", children: [
              /* @__PURE__ */ jsx(HeadingSecondary, { className: "font-bold ", children: "Integrity" }),
              /* @__PURE__ */ jsx("p", { children: "To ensure absolute neutrality and consistency in the execution of the mandate of the Commission." })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex p-2 my-5", children: [
            /* @__PURE__ */ jsx("div", { className: "p-3 w-[30%] ", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: "images/homePage/integrity.png",
                alt: "Integrity",
                className: "object-contain "
              }
            ) }),
            /* @__PURE__ */ jsxs("div", { className: "w-[70%] ", children: [
              /* @__PURE__ */ jsx(HeadingSecondary, { className: "font-bold ", children: "Integrity" }),
              /* @__PURE__ */ jsx("p", { children: "To ensure absolute neutrality and consistency in the execution of the mandate of the Commission." })
            ] })
          ] })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "mb-32 ", children: [
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: "justify-center md:flex",
          "data-aos": "fade-up",
          "data-aos-duration": "2000",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "sm:w-[25%]", children: [
              /* @__PURE__ */ jsxs("div", { className: "h-[45%] relative", children: [
                /* @__PURE__ */ jsx("div", { className: "absolute opacity-0 transition duration-700 ease-in-out hover:opacity-100 hover:bg-black/70 h-[15rem] w-[100%] cursor-pointer", children: /* @__PURE__ */ jsx("div", { className: "text-center translate-y-[6rem]", children: /* @__PURE__ */ jsx(
                  Link,
                  {
                    href: "/service/subsidy",
                    className: "text-white",
                    children: "View More"
                  }
                ) }) }),
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: "images/homePage/serviceOne.jpg",
                    className: "w-full object-cover h-[15rem] "
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "my-3 sm:px-8", children: [
                /* @__PURE__ */ jsx("h1", { className: "py-5 text-3xl  text-primary", children: "Trade Remedies" }),
                /* @__PURE__ */ jsx("p", { className: "mb-3", children: "To ensure equality and fairness in the application of measures affecting international trade and the use of world trade regulations." }),
                /* @__PURE__ */ jsx(
                  Link,
                  {
                    href: "/service/subsidy",
                    className: "text-primary hover:text-red-300",
                    children: "Read More"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "sm:w-[25%] ", children: [
              /* @__PURE__ */ jsxs("div", { className: "h-[45%] relative", children: [
                /* @__PURE__ */ jsx("div", { className: "absolute opacity-0 transition duration-700 ease-in-out hover:opacity-100 hover:bg-black/70 h-[15rem] w-[100%] cursor-pointer", children: /* @__PURE__ */ jsx("div", { className: "text-center translate-y-[6rem]", children: /* @__PURE__ */ jsx(
                  Link,
                  {
                    href: "/service/dumping",
                    className: "text-white",
                    children: "View More"
                  }
                ) }) }),
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: "images/homePage/serviceTwo.jpg",
                    className: "w-full object-cover h-[15rem] "
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "my-3 sm:px-8", children: [
                /* @__PURE__ */ jsx("h1", { className: "py-5 text-3xl text-primary ", children: "Dispute Settlement" }),
                /* @__PURE__ */ jsx("p", { className: "mb-3", children: "Providing actions to resolve issues arising out of a member-state violating the rules and regulationso f the World Trade Organization." }),
                /* @__PURE__ */ jsx(
                  Link,
                  {
                    href: "/service/dumping",
                    className: "text-primary hover:text-red-300",
                    children: "Read More"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "sm:w-[25%]  ", children: [
              /* @__PURE__ */ jsxs("div", { className: "h-[45%] relative", children: [
                /* @__PURE__ */ jsx("div", { className: "absolute opacity-0 transition duration-700 ease-in-out hover:opacity-100 hover:bg-black/70 h-[15rem] w-[100%] cursor-pointer", children: /* @__PURE__ */ jsx("div", { className: "text-center translate-y-[6rem]", children: /* @__PURE__ */ jsx(
                  Link,
                  {
                    href: "/services",
                    className: "text-white",
                    children: "View More"
                  }
                ) }) }),
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: "images/homePage/serviceThree.jpg",
                    className: "w-full object-cover h-[15rem] "
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "my-3 sm:px-8", children: [
                /* @__PURE__ */ jsx("h1", { className: "py-4 text-3xl text-primary", children: "Tarrif Review" }),
                /* @__PURE__ */ jsx("p", { className: "mb-3", children: "Providing a review of customs duty that affects the production and competitiveness of goods in relation to the domestic producer or domestic industry" }),
                /* @__PURE__ */ jsx(
                  Link,
                  {
                    href: "/services",
                    className: "text-primary hover:text-red-300 sm:pl-1",
                    children: "Read More"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "sm:w-[25%] ", children: [
              /* @__PURE__ */ jsxs("div", { className: "h-[45%] relative", children: [
                /* @__PURE__ */ jsx("div", { className: "absolute opacity-0 transition duration-700 ease-in-out hover:opacity-100 hover:bg-black/70 h-[15rem] w-[100%] cursor-pointer", children: /* @__PURE__ */ jsx("div", { className: "text-center translate-y-[6rem]", children: /* @__PURE__ */ jsx(
                  Link,
                  {
                    href: "/service/research",
                    className: "text-white",
                    children: "View More"
                  }
                ) }) }),
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: "images/homePage/serviceFour.jpg",
                    className: "w-full object-cover h-[15rem] "
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "my-3 sm:px-8", children: [
                /* @__PURE__ */ jsx("h1", { className: "py-4 text-3xl text-primary", children: "Research" }),
                /* @__PURE__ */ jsx("p", { className: "mb-3", children: "The Commission is to study, identify, and recommend to the Minister of Trade and Industry tariff levels for specific sectors of the economy with due regard to the effective rate of protection." }),
                /* @__PURE__ */ jsx(
                  Link,
                  {
                    href: "/service/research",
                    className: "text-primary hover:text-red-300",
                    children: "Read More"
                  }
                )
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsx(Link, { href: "/service", children: /* @__PURE__ */ jsx(Button, { children: " View More " }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mb-32", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto mb-16", children: [
      /* @__PURE__ */ jsxs("div", { className: "justify-center sm:flex", children: [
        /* @__PURE__ */ jsx("div", { className: "sm:h-[35rem]  ", children: /* @__PURE__ */ jsx(
          "img",
          {
            className: "sm:w-[80rem] sm:h-[35rem]",
            src: "images/homePage/storyOne.jpg",
            alt: ""
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsxs(
          "div",
          {
            className: "container sm:pt-12 sm:px-16",
            "data-aos": "fade-up",
            "data-aos-duration": "2000",
            children: [
              /* @__PURE__ */ jsx("p", { className: "text-center sm:text-left sm:text-3lx", children: "DID YOU KNOW THAT" }),
              /* @__PURE__ */ jsx("p", { className: "my-5 font-bold text-center sm:text-left sm:text-3xl text-primary", children: "GITC is among seven trade remedy institutions and investigating authorities in Africa." }),
              /* @__PURE__ */ jsx("p", { className: "mb-5 text-center sm:mb-14 sm:text-left sm:text-2xl", children: "These other African countries are: Egypt, South Africa, Morocco, Tunisia, Mauritius, and Madagascar. These other African countries are: Egypt,South Africa, Morocco, Tunisia, Mauritius, and Madagascar." }),
              /* @__PURE__ */ jsx(Link, { hre: "/story", children: /* @__PURE__ */ jsx(ButtonOutline, { className: "block p-4 mx-auto border rounded-full border-primary hover:border-2", children: "Read Our Story" }) })
            ]
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col-reverse justify-center sm:flex sm:flex-row ", children: [
        /* @__PURE__ */ jsx("div", { className: "text-white bg-primary", children: /* @__PURE__ */ jsxs(
          "div",
          {
            className: "container sm:px-16 ",
            "data-aos": "fade-up",
            "data-aos-duration": "2000",
            children: [
              /* @__PURE__ */ jsx("h1", { className: "text-[3rem] sm:pt-10 pb-6 font-bold", children: "We ensure:" }),
              /* @__PURE__ */ jsxs("ul", { className: "sm:text-[1.3rem] list-disc ", children: [
                /* @__PURE__ */ jsx("li", { className: "py-4", children: "Ghana’s compliance with international trade rules and regulations;" }),
                /* @__PURE__ */ jsx("li", { className: "py-3", children: "Fairness, efficiency, transparency and objectivity in the application of measures affecting international trade rules and the use of world trade regulations;" }),
                /* @__PURE__ */ jsx("li", { className: "py-3", children: "Fair ompetition for persons engaged in domestic production and international trade." }),
                /* @__PURE__ */ jsx("li", { className: "pt-3", children: "Protection of the domestic market from the impact of unfair trade practices in the course of international trade." })
              ] }),
              /* @__PURE__ */ jsx(Link, { href: "/story", children: /* @__PURE__ */ jsx(ButtonOutline, { className: "block p-4 mx-auto mt-3 border border-white rounded-full hover:border-2", children: "Read Our Story" }) })
            ]
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "sm:h-[35rem] ", children: /* @__PURE__ */ jsx(
          "img",
          {
            className: "sm:w-[80rem] sm:h-[35rem]",
            src: "images/homePage/storyTwo.jpg",
            alt: ""
          }
        ) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "px-2 mb-32 bg-gray-100", children: /* @__PURE__ */ jsx("div", { className: "flex justify-center gap-1 h-10rem]", children: /* @__PURE__ */ jsxs("div", { ref: sliderRef, className: "keen-slider", children: [
      /* @__PURE__ */ jsx("div", { className: "keen-slider__slide number-slide1", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: "images/homePage/sponsorTwo.png",
          className: "w-full object-contain h-[10rem]",
          alt: ""
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "keen-slider__slide number-slide2", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: "images/homePage/sponsorThree.png",
          className: "w-full object-contain h-[10rem]",
          alt: ""
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "keen-slider__slide number-slide3", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: "images/homePage/sponsorFour.png",
          className: "w-full object-contain h-[10rem]",
          alt: ""
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "keen-slider__slide number-slide4", children: /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: "images/homePage/sponsorFive.png",
          className: "w-full object-contain h-[10rem]",
          alt: ""
        }
      ) }) })
    ] }) }) }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "block mb-32 shadow-lg sm:mx-24",
        "data-aos": "fade-up",
        "data-aos-duration": "2000",
        children: /* @__PURE__ */ jsxs("div", { className: "justify-center sm:flex sm:w-[100%]", children: [
          /* @__PURE__ */ jsx("div", { className: "sm:w-[50%] ", children: /* @__PURE__ */ jsx(
            "img",
            {
              className: "object-fill ",
              src: "/images/about/our_team/Mr. Frank Agyekum.jpg",
              alt: ""
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "sm:w-[50%] sm:px-8", children: /* @__PURE__ */ jsxs("div", { className: "container sm:pt-32", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: "images/quote.png",
                alt: "quote",
                className: "w-[14%] pl-5 xs:hidden"
              }
            ),
            /* @__PURE__ */ jsx("p", { className: "pl-4 my-6 font-bold text-black sm:text-4xl", children: "The bane of development in developing countries as against developed countries is the lack of industrialization in the former. The inability of developing counties ..." }),
            /* @__PURE__ */ jsx("h1", { className: "pl-5 text-red-400 cursor-pointer hover:text-red-300 ", children: "Read More" }),
            /* @__PURE__ */ jsxs("div", { className: "pl-5 ", children: [
              /* @__PURE__ */ jsx("h1", { className: "pt-8 text-2xl text-primary", children: "Frank Agyakum" }),
              /* @__PURE__ */ jsx("p", { className: "pt-1 font-light text-primary", children: "Executive Secretary" })
            ] })
          ] }) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "w-full px-2 text-center md:flex", children: [
      /* @__PURE__ */ jsx("div", { className: "md:w-[50%] ", children: /* @__PURE__ */ jsxs("div", { className: "pt-10 mx-auto", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold text-primary", children: "Connect with us" }),
        /* @__PURE__ */ jsx("p", { className: "text-[1.3rem] sm:pl-[5rem]", children: "Please fill out the form and press the submit button. We will get back to you with 1-2 business days." })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "md:w-[50%]  ", children: /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsxs("form", { action: "", className: "", children: [
        /* @__PURE__ */ jsxs("div", { className: "", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              className: "m-3 bg-gray-100 border-none focus:outline-none focus:ring focus:ring-primary/20",
              placeholder: "Full Name *",
              required: "required",
              type: "text"
            }
          ),
          /* @__PURE__ */ jsx(
            "input",
            {
              className: "m-3 bg-gray-100 border-none focus:outline-none focus:ring focus:ring-primary/20",
              placeholder: "Email *",
              required: "required",
              type: "Email"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              className: "m-3 bg-gray-100 border-none focus:outline-none focus:ring focus:ring-primary/20",
              placeholder: "Subject *",
              required: "required",
              type: "text"
            }
          ),
          /* @__PURE__ */ jsx(
            "input",
            {
              className: "m-3 bg-gray-100 border-none focus:outline-none focus:ring focus:ring-primary/20",
              placeholder: "Phone Number",
              type: "text"
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          "textarea",
          {
            className: "sm:w-[70%] border-none bg-gray-100  focus:outline-none focus:ring focus:ring-primary/20",
            rows: "4",
            placeholder: "Message",
            required: "required",
            name: ""
          }
        ),
        /* @__PURE__ */ jsx(Button, { className: "mt-[2rem] mb-[3rem]", children: "Submit" })
      ] }) }) })
    ] })
  ] }) });
};
export {
  Index as default
};
