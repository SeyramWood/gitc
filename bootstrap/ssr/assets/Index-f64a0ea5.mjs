import { j as jsx, a as jsxs } from "../ssr.mjs";
import { useForm, Link } from "@inertiajs/inertia-react";
import AOS from "aos";
import axios from "axios";
import { useKeenSlider } from "keen-slider/react.js";
import { useEffect, useState } from "react";
import { u as useFormValidation } from "./useFormValidation-8a20563f.mjs";
import { W as WebsiteLayout } from "./WebsiteLayout-197e9d3a.mjs";
import { B as Button } from "./Button-1ba643b5.mjs";
/* empty css               *//* empty css                           */import "react/jsx-runtime";
import "react-dom/server";
import "process";
import "http";
import "react-icons/sl";
import "./helpers-97f56fd4.mjs";
import "@n8tb1t/use-scroll-position";
import "react-icons/rx";
const ButtonOutline = (props) => {
  return /* @__PURE__ */ jsx("button", { className: `block p-4 border rounded-full  ${props.className}`, children: props.children });
};
const animation = { duration: 4e4, easing: (t) => t };
const Index = () => {
  useForm({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    industry: ""
  });
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
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState(" ");
  const newsLetter = useFormValidation(
    {
      email: ""
    },
    {
      email: "required|email"
    },
    submitEmail
  );
  function submitEmail() {
    axios.post(`http://127.0.0.1:8000`, newsLetter.state).then(
      newsLetter.clearValues(true),
      console.log(newsLetter.state),
      setSuccess(true)
    ).catch(
      (error) => {
        if (error["response"]) {
          setErrorMessage(newsLetter.setServerErrors(error.response.data.errors));
        }
      }
    );
  }
  return /* @__PURE__ */ jsx(WebsiteLayout, { page: "home", children: /* @__PURE__ */ jsxs("div", { className: "text-lg bg-white ", children: [
    /* @__PURE__ */ jsx("div", { className: "px-2 mb-32 sm:py-10 bg-faded ", children: /* @__PURE__ */ jsxs("div", { className: "", "data-aos": "fade-up", "data-aos-duration": "2000", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-center text-[3rem] sm:text-[5rem] pt-8 sm:pb-7 pb-4 text-grey/40", children: "Our Core Values" }),
      /* @__PURE__ */ jsxs("div", { className: "justify-center w-[100%] gap-3 pb-4 md:flex", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex p-2 my-5 ", children: [
          /* @__PURE__ */ jsx("div", { className: "p-3 w-[30%]", children: /* @__PURE__ */ jsx(
            "div",
            {
              className: "sm:bg-black/5",
              style: { borderRadius: "100%" },
              children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: "images/homePage/objectivity.png",
                  alt: "Objectivity",
                  className: "object-contain -translate-x-1 -translate-y-5"
                }
              )
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "w-[70%] sm:pl-2", children: [
            /* @__PURE__ */ jsx("h2", { className: "", children: "Objectivity" }),
            /* @__PURE__ */ jsx("p", { className: "", children: "To ensure equality and fairness in the application of measures affecting international trade and the use of world trade measures." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex p-2 my-5 ", children: [
          /* @__PURE__ */ jsx("div", { className: "p-3 w-[30%] ", children: /* @__PURE__ */ jsx(
            "div",
            {
              className: "sm:bg-black/5",
              style: { borderRadius: "100%" },
              children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: "images/homePage/professionalism.png",
                  alt: "professional",
                  className: "object-contain -translate-x-1 -translate-y-5"
                }
              )
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "w-[70%] sm:pl-2", children: [
            /* @__PURE__ */ jsx("h2", { className: "", children: "Professionalism" }),
            /* @__PURE__ */ jsx("p", { className: "", children: "To ensure a high level of competence and efficiency in applying international trade rules and regulations as under the World Trade Organization provisions." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex p-2 my-5 ", children: [
          /* @__PURE__ */ jsx("div", { className: "p-3 w-[30%] sm:pl-1", children: /* @__PURE__ */ jsx(
            "div",
            {
              className: "sm:bg-black/5",
              style: { borderRadius: "100%" },
              children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: "images/homePage/integrity.png",
                  alt: "Integrity",
                  className: "object-contain -translate-x-1 -translate-y-5 "
                }
              )
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "w-[70%] ", children: [
            /* @__PURE__ */ jsx("h2", { className: "", children: "Integrity" }),
            /* @__PURE__ */ jsx("p", { className: "", children: "To ensure absolute neutrality and consistency in the execution of the mandate of the Commission." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex p-2 my-5 ", children: [
          /* @__PURE__ */ jsx("div", { className: "p-3 w-[30%] ", children: /* @__PURE__ */ jsx(
            "div",
            {
              className: "sm:bg-black/5",
              style: { borderRadius: "100%" },
              children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: "images/homePage/search.png",
                  alt: "Integrity",
                  className: "object-contain -translate-x-1 -translate-y-5 "
                }
              )
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "w-[70%] ", children: [
            /* @__PURE__ */ jsx("h2", { className: "", children: "Transparency" }),
            /* @__PURE__ */ jsx("p", { children: "To ensure that the Commission operates an open and fair terrain by providing a level playing field in its dealings with all parties." })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "px-2 overflow-hidden sm:px-16", children: /* @__PURE__ */ jsxs("div", { className: "pb-32 ", children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "sm:h-[17rem] h-[2rem] w-full ",
          style: {
            backgroundImage: "url('images/homePage/headings/SERVICES.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundPositionX: "center",
            backgroundAttachment: "fixed"
          },
          "data-aos": "fade-up",
          "data-aos-anchor-placement": "center-bottom",
          "data-aos-duration": "400",
          children: /* @__PURE__ */ jsx("div", { className: "translate-y-[7rem] ", children: /* @__PURE__ */ jsx("h1", { className: "text-center  text-primary", children: "Services" }) })
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "justify-center gap-6 md:flex sm:mt-13 ", children: [
        /* @__PURE__ */ jsxs("div", { className: "sm:w-[25%]", children: [
          /* @__PURE__ */ jsxs("div", { className: "h-[45%] relative", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute opacity-0 transition duration-700 ease-in-out hover:opacity-100 hover:bg-black/70 h-[15rem] w-[100%] cursor-pointer", children: /* @__PURE__ */ jsx("div", { className: "text-center translate-y-[6rem]", children: /* @__PURE__ */ jsx(Link, { href: "/services", className: "text-white", children: "View More" }) }) }),
            /* @__PURE__ */ jsx(
              "img",
              {
                src: "images/homePage/serviceOne.jpg",
                className: "w-full object-cover h-[15rem] "
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "my-2 ", children: [
            /* @__PURE__ */ jsx("h2", { className: "py-5", children: "Trade Remedies" }),
            /* @__PURE__ */ jsx("p", { className: "mb-3", children: "To provide actions that safeguard domestic manufacturers / industries against unfair trade practices such as dumping, subsidization, and the sudden, sharp, and significant influx of imported products onto the local market." }),
            /* @__PURE__ */ jsx(
              Link,
              {
                href: "/services",
                className: "text-primary hover:text-red-300",
                children: "Read More . . ."
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "sm:w-[25%]  ",
            "data-aos": "fade-up",
            "data-aos-anchor-placement": "center-bottom",
            "data-aos-duration": "2000",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "h-[45%] relative", children: [
                /* @__PURE__ */ jsx("div", { className: "absolute opacity-0 transition duration-700 ease-in-out hover:opacity-100 hover:bg-black/70 h-[15rem] w-[100%] cursor-pointer", children: /* @__PURE__ */ jsx("div", { className: "text-center translate-y-[6rem]", children: /* @__PURE__ */ jsx(Link, { href: "/service/tariff", className: "text-white", children: "View More" }) }) }),
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: "images/homePage/serviceThree.jpg",
                    className: "w-full object-cover h-[15rem] "
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "my-2 ", children: [
                /* @__PURE__ */ jsx("h2", { className: "py-5", children: "Tarrif Review" }),
                /* @__PURE__ */ jsx("p", { className: "mb-3", children: "To provide a domestic manufacturing/industry review of customs duty that adversely affects the production and competitiveness of the local product in relation to imported goods." }),
                /* @__PURE__ */ jsx(
                  Link,
                  {
                    href: "/service/tariff",
                    className: "text-primary hover:text-red-300 sm:pl-1",
                    children: "Read More . . ."
                  }
                )
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "sm:w-[25%] ",
            "data-aos": "fade-up",
            "data-aos-anchor-placement": "center-bottom",
            "data-aos-duration": "1000",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "h-[45%] relative", children: [
                /* @__PURE__ */ jsx("div", { className: "absolute opacity-0 transition duration-700 ease-in-out hover:opacity-100 hover:bg-black/70 h-[15rem] w-[100%] cursor-pointer", children: /* @__PURE__ */ jsx("div", { className: "text-center translate-y-[6rem]", children: /* @__PURE__ */ jsx(Link, { href: "/service/dispute", className: "text-white", children: "View More" }) }) }),
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: "images/homePage/serviceTwo.jpg",
                    className: "w-full object-cover h-[15rem] "
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "my-2 ", children: [
                /* @__PURE__ */ jsx("h2", { className: "py-5 ", children: "Dispute Settlement" }),
                /* @__PURE__ */ jsx("p", { className: "mb-3", children: "To resolve disputes between importers and the Customs Division of the Ghana Revenue Authority in respect of the classification and valuation of products that are imported." }),
                /* @__PURE__ */ jsx(
                  Link,
                  {
                    href: "/service/dispute",
                    className: "text-primary hover:text-red-300",
                    children: "Read More . . ."
                  }
                )
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "sm:w-[25%] ",
            "data-aos": "fade-up",
            "data-aos-anchor-placement": "center-bottom",
            "data-aos-duration": "3000",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "h-[45%] relative", children: [
                /* @__PURE__ */ jsx("div", { className: "absolute opacity-0 transition duration-700 ease-in-out hover:opacity-100 hover:bg-black/70 h-[15rem] w-[100%] cursor-pointer", children: /* @__PURE__ */ jsx("div", { className: "text-center translate-y-[6rem]", children: /* @__PURE__ */ jsx(Link, { href: "/service/research", className: "text-white", children: "View More" }) }) }),
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: "images/homePage/serviceFour.jpg",
                    className: "w-full object-cover h-[15rem] "
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "my-2 ", children: [
                /* @__PURE__ */ jsx("h2", { className: "py-4", children: "Research" }),
                /* @__PURE__ */ jsx("p", { className: "mb-3", children: "To undertake studies on policies relating to trade and industry and recommend findings to the Minister for Trade and Industry." }),
                /* @__PURE__ */ jsx(
                  Link,
                  {
                    href: "/service/research",
                    className: "text-primary hover:text-red-300",
                    children: "Read More . . ."
                  }
                )
              ] })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsx(Link, { href: "/services", className: "", children: /* @__PURE__ */ jsx(Button, { className: "mt-14 ", children: " View More " }) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "overflow-hidden sm:px-16 ", children: /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsxs("div", { className: "", children: [
      /* @__PURE__ */ jsxs("div", { className: "justify-center block bg-black sm:flex", children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "sm:w-[50%]  opacity-60",
            style: {
              backgroundImage: "url('images/homePage/storyOne.jpg')",
              backgroundAttachment: "fixed",
              backgroundSize: "cover"
            }
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "bg-white sm:w-[50%] ", children: /* @__PURE__ */ jsxs(
          "div",
          {
            className: "container  px-4 pt-6 sm:pt-20 sm:px-20",
            "data-aos": "fade-left",
            "data-aos-duration": "2000",
            children: [
              /* @__PURE__ */ jsx("p", { className: "text-red-700 sm:text-left sm:text-2lx", children: "DID YOU KNOW THAT" }),
              /* @__PURE__ */ jsx("h2", { className: "font-bold text-red-600 sm:text-left sm:text-3xl", children: "GITC is among seven trade remedy institutions and investigating authorities in Africa." }),
              /* @__PURE__ */ jsx("p", { className: "mb-5 sm:text-left", children: "These other African countries are: Egypt, South Africa, Morocco, Tunisia, Mauritius, and Madagascar." }),
              /* @__PURE__ */ jsx("div", { className: "pb-4", children: /* @__PURE__ */ jsx(Link, { href: "/story", children: /* @__PURE__ */ jsx(ButtonOutline, { className: "sm:w-[14rem] bg-primary my-14 border-primary/40 text-white hover:bg-red-400/80 hover:text-white", children: "Read Our Story" }) }) })
            ]
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col-reverse justify-center bg-black sm:flex sm:flex-row ", children: [
        /* @__PURE__ */ jsx("div", { className: "text-white sm:w-[50%] bg-red-700", children: /* @__PURE__ */ jsxs(
          "div",
          {
            className: "container px-4 py-14 sm:px-10",
            "data-aos": "fade-right",
            "data-aos-duration": "2000",
            children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: "images/quote.png",
                  alt: "quote",
                  className: "w-[8%]  xs:hidden"
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "pl-8", children: [
                /* @__PURE__ */ jsx("h2", { className: " mt-0 pt-2 my-6 font-bold text-white sm:text-3xl", children: "The bane of development in developing countries as against developed countries is the lack of industrialization in the former. The inability of developing counties ..." }),
                /* @__PURE__ */ jsx(Link, { href: "/story", children: /* @__PURE__ */ jsx(ButtonOutline, { className: "sm:w-[14rem] my-6 bg-white text-primary border-white/40 hover:bg-red-100/40 hover:text-white ", children: "Read More" }) }),
                /* @__PURE__ */ jsxs("div", { className: "", children: [
                  /* @__PURE__ */ jsx("h1", { className: "text-2xl sm:pt-1 text-white", children: "Frank Agyekum" }),
                  /* @__PURE__ */ jsx("p", { className: "font-light text-white", children: "Executive Secretary" })
                ] })
              ] })
            ]
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "sm:w-[50%]", children: /* @__PURE__ */ jsx(
          "img",
          {
            className: "sm:h-[100%] ",
            src: "/images/homePage/Min.jpg",
            alt: ""
          }
        ) })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("div", { className: "py-10 mt-20 mb-20 bg-gray-100", children: /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsx("div", { className: "flex justify-center gap-1 h-10rem]", children: /* @__PURE__ */ jsxs("div", { ref: sliderRef, className: "keen-slider", children: [
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
    ] }) }) }) }),
    /* @__PURE__ */ jsx("div", { className: "w-full px-2 pb-16 justify-content-center text-center", children: /* @__PURE__ */ jsx("div", { className: "flex pb-4", children: /* @__PURE__ */ jsx("div", { className: "mx-auto px-3 ", children: /* @__PURE__ */ jsxs("div", { className: " bg-slate-200 rounded shadow-xl", children: [
      /* @__PURE__ */ jsxs("div", { className: "pt-10 px-10 pb-7", children: [
        /* @__PURE__ */ jsx("p", { className: "sm:text-[3rem] text-[1.8rem]", children: "Join our newsletters" }),
        /* @__PURE__ */ jsx("p", { className: "pt-5", children: "Subscribe to get access to more news and updates" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "pb-16", children: /* @__PURE__ */ jsx("form", { onSubmit: newsLetter.handleSubmit, className: "sm:w-[40rem]", children: success ? /* @__PURE__ */ jsx("p", { className: "text-[18px] text-red-600 ", children: "Thank you for subscribing to our newsletters" }) : /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "px-16 text-center ", children: /* @__PURE__ */ jsxs("p", { className: "text-left text-[13px] text-red-600 ", children: [
          newsLetter.errors.email,
          errorMessage
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "px-16 text-center flex", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "email",
              className: "rounded w-full focus:ring mr-2 focus:ring-primary/20 border-none",
              onBlur: newsLetter.handleBlur,
              value: newsLetter.state.email,
              name: "email",
              onChange: newsLetter.handleChange,
              placeholder: "Enter Your Email"
            }
          ),
          /* @__PURE__ */ jsx("button", { type: "submit", className: "py-2 sm:px-3 px-2 rounded border text-white bg-red-500 hover:bg-red-400 hover:text-white ", children: "Subscribe" })
        ] })
      ] }) }) })
    ] }) }) }) })
  ] }) });
};
export {
  Index as default
};
