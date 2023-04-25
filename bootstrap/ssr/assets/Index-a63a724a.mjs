import { j as jsx, a as jsxs } from "../ssr.mjs";
import { useForm, Link } from "@inertiajs/inertia-react";
import AOS from "aos";
import { useKeenSlider } from "keen-slider/react.js";
import { useEffect, useState } from "react";
import { W as WebsiteLayout } from "./WebsiteLayout-bb3a7897.mjs";
import { B as Button } from "./Button-1ba643b5.mjs";
/* empty css               *//* empty css                           */import "react/jsx-runtime";
import "react-dom/server";
import "process";
import "http";
import "react-icons/sl";
import "./helpers-bf0c6e44.mjs";
import "@n8tb1t/use-scroll-position";
import "react-icons/rx";
const ButtonOutline = (props) => {
  return /* @__PURE__ */ jsx("button", { className: `block p-4 border rounded-full  ${props.className}`, children: props.children });
};
const animation = { duration: 4e4, easing: (t) => t };
const Index = () => {
  const { data, setData, post, progress, processing, reset, errors } = useForm({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    industry: ""
  });
  function submit(e) {
    e.preventDefault();
    post(route("contact.store"), {
      data,
      onSuccess: () => {
        reset();
      }
    });
  }
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
  return /* @__PURE__ */ jsx(WebsiteLayout, { page: "home", children: /* @__PURE__ */ jsxs("div", { className: "text-lg bg-white ", children: [
    /* @__PURE__ */ jsx("div", { className: "px-2 mb-32 sm:py-10 bg-faded ", children: /* @__PURE__ */ jsxs(
      "div",
      {
        className: "justify-center w-[100%] gap-3 pb-4 md:flex",
        "data-aos": "fade-up",
        "data-aos-duration": "2000",
        children: [
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
              /* @__PURE__ */ jsx("p", { children: "To ensure that the commission operates on an open and fair terrain by providing a level playing field in its dealings with all parties." })
            ] })
          ] })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: "px-2 overflow-hidden  sm:px-16", children: /* @__PURE__ */ jsxs("div", { className: "pb-32 ", children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "sm:h-[17rem] h-[2rem] w-full",
          style: {
            backgroundImage: "url('images/homePage/headings/SERVICES.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundPositionX: "center",
            backgroundAttachment: "fixed"
          },
          "data-aos": "fade-up",
          "data-aos-anchor-placement": "center-bottom",
          "data-aos-duration": "400",
          children: /* @__PURE__ */ jsx("h1", { className: "text-center translate-y-[7rem] text-primary", children: "Services" })
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "justify-center gap-6 md:flex sm:mt-13 ", children: [
        /* @__PURE__ */ jsxs("div", { className: "sm:w-[25%]", children: [
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
                src: "images/homePage/serviceOne.jpg",
                className: "w-full object-cover h-[15rem] "
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "my-2 ", children: [
            /* @__PURE__ */ jsx("h2", { className: "py-5", children: "Trade Remedies" }),
            /* @__PURE__ */ jsx("p", { className: "mb-3", children: "To ensure equality and fairness in the application of measures affecting international trade and the use of world trade regulations." }),
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
            className: "sm:w-[25%] ",
            "data-aos": "fade-up",
            "data-aos-anchor-placement": "center-bottom",
            "data-aos-duration": "1000",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "h-[45%] relative", children: [
                /* @__PURE__ */ jsx("div", { className: "absolute opacity-0 transition duration-700 ease-in-out hover:opacity-100 hover:bg-black/70 h-[15rem] w-[100%] cursor-pointer", children: /* @__PURE__ */ jsx("div", { className: "text-center translate-y-[6rem]", children: /* @__PURE__ */ jsx(
                  Link,
                  {
                    href: "/service/dispute",
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
              /* @__PURE__ */ jsxs("div", { className: "my-2 ", children: [
                /* @__PURE__ */ jsx("h2", { className: "py-5 ", children: "Dispute Settlement" }),
                /* @__PURE__ */ jsx("p", { className: "mb-3", children: "Providing actions to resolve issues arising out of a member-state violating the rules and regulationso f the World Trade Organization." }),
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
            className: "sm:w-[25%]  ",
            "data-aos": "fade-up",
            "data-aos-anchor-placement": "center-bottom",
            "data-aos-duration": "2000",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "h-[45%] relative", children: [
                /* @__PURE__ */ jsx("div", { className: "absolute opacity-0 transition duration-700 ease-in-out hover:opacity-100 hover:bg-black/70 h-[15rem] w-[100%] cursor-pointer", children: /* @__PURE__ */ jsx("div", { className: "text-center translate-y-[6rem]", children: /* @__PURE__ */ jsx(
                  Link,
                  {
                    href: "/service/tariff",
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
              /* @__PURE__ */ jsxs("div", { className: "my-2 ", children: [
                /* @__PURE__ */ jsx("h2", { className: "py-5", children: "Tarrif Review" }),
                /* @__PURE__ */ jsx("p", { className: "mb-3", children: "Providing a review of customs duty that affects the production and competitiveness of goods in relation to the domestic producer or domestic industry" }),
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
            "data-aos-duration": "3000",
            children: [
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
              /* @__PURE__ */ jsxs("div", { className: "my-2 ", children: [
                /* @__PURE__ */ jsx("h2", { className: "py-4", children: "Research" }),
                /* @__PURE__ */ jsx("p", { className: "mb-3", children: "The Commission is to study, identify, and recommend to the Minister of Trade and Industry tariff levels for specific sectors of the economy with due regard to the effective rate of protection." }),
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
    /* @__PURE__ */ jsx("div", { className: "overflow-hidden sm:px-20 ", children: /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsxs("div", { className: "", children: [
      /* @__PURE__ */ jsxs("div", { className: "justify-center block bg-black sm:flex", children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "sm:w-[80rem] sm:h-[32rem] h-52 opacity-60",
            style: {
              backgroundImage: "url('images/homePage/storyOne.jpg')",
              backgroundAttachment: "fixed",
              backgroundSize: "cover"
            }
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "bg-white ", children: /* @__PURE__ */ jsxs(
          "div",
          {
            className: "container px-4 pt-6 sm:pt-12 sm:px-20",
            "data-aos": "fade-left",
            "data-aos-duration": "2000",
            children: [
              /* @__PURE__ */ jsx("p", { className: "text-red-700 sm:text-left sm:text-2lx", children: "DID YOU KNOW THAT" }),
              /* @__PURE__ */ jsx("h2", { className: "font-bold text-red-600 sm:text-left sm:text-3xl", children: "GITC is among seven trade remedy institutions and investigating authorities in Africa." }),
              /* @__PURE__ */ jsx("p", { className: "mb-5 sm:text-left", children: "These other African countries are: Egypt, South Africa, Morocco, Tunisia, Mauritius, and Madagascar. These other African countries are: Egypt,South Africa, Morocco, Tunisia, Mauritius, and Madagascar." }),
              /* @__PURE__ */ jsx("div", { className: "px-4", children: /* @__PURE__ */ jsx(Link, { href: "/story", children: /* @__PURE__ */ jsx(ButtonOutline, { className: "sm:w-[14rem] bg-primary my-12 border-primary/40 text-white hover:bg-red-400/80 hover:text-white", children: "Read Our Story" }) }) })
            ]
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col-reverse justify-center bg-black sm:flex sm:flex-row ", children: [
        /* @__PURE__ */ jsx("div", { className: "text-white bg-red-700", children: /* @__PURE__ */ jsxs(
          "div",
          {
            className: "container px-4 pt-4 sm:px-20 ",
            "data-aos": "fade-right",
            "data-aos-duration": "2000",
            children: [
              /* @__PURE__ */ jsx("h2", { className: "text-[3rem] text-white sm:pt-10 pb-6 font-bold", children: "We ensure:" }),
              /* @__PURE__ */ jsxs("ul", { className: "sm:text-[1.1rem] list-disc px-4 sm:pl-4 ", children: [
                /* @__PURE__ */ jsx("li", { className: "py-4", children: "Ghana’s compliance with international trade rules and regulations;" }),
                /* @__PURE__ */ jsx("li", { className: "py-3", children: "Fairness, efficiency, transparency and objectivity in the application of measures affecting international trade rules and the use of world trade regulations;" }),
                /* @__PURE__ */ jsx("li", { className: "py-3", children: "Fair competition for persons engaged in domestic production and international trade." }),
                /* @__PURE__ */ jsx("li", { className: "pt-3", children: "Protection of the domestic market from the impact of unfair trade practices in the course of international trade." })
              ] }),
              /* @__PURE__ */ jsx(Link, { href: "/story", children: /* @__PURE__ */ jsx(ButtonOutline, { className: "sm:w-[14rem] my-12 bg-white text-primary border-white/40 hover:bg-red-100/40 hover:text-white ", children: "Read Our Story" }) })
            ]
          }
        ) }),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "sm:w-[80rem] sm:h-[40rem] h-52  opacity-60",
            style: {
              backgroundImage: "url('images/homePage/storyTwo.jpg')",
              backgroundAttachment: "fixed",
              objectFit: "fill",
              backgroundRepeat: "round"
            }
          }
        )
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
    /* @__PURE__ */ jsx("div", { className: "pb-24 ", children: /* @__PURE__ */ jsx(
      "div",
      {
        className: "block shadow-lg sm:mx-24",
        "data-aos": "fade-up",
        "data-aos-duration": "2000",
        children: /* @__PURE__ */ jsxs("div", { className: "justify-center sm:flex  sm:w-[100%]", children: [
          /* @__PURE__ */ jsx("div", { className: "sm:w-[50%] ", children: /* @__PURE__ */ jsx(
            "img",
            {
              className: "",
              src: "/images/homePage/Min.jpg",
              alt: ""
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "sm:w-[50%] bg-white sm:px-8", children: /* @__PURE__ */ jsxs("div", { className: "container sm:pt-14", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: "images/quote.png",
                alt: "quote",
                className: "w-[14%] pl-5 xs:hidden"
              }
            ),
            /* @__PURE__ */ jsx("p", { className: "pl-4 my-6 font-bold text-black sm:text-[1.8rem]", children: "The bane of development in developing countries as against developed countries is the lack of industrialization in the former. The inability of developing counties ..." }),
            /* @__PURE__ */ jsx("h2", { className: "pl-5 text-red-500 cursor-pointer hover:text-red-300 ", children: "Read More" }),
            /* @__PURE__ */ jsxs("div", { className: "pl-5 ", children: [
              /* @__PURE__ */ jsx("h1", { className: "text-2xl sm:pt-8 text-primary", children: "Frank Agyekum" }),
              /* @__PURE__ */ jsx("p", { className: "py-1 font-light text-primary", children: "Executive Secretary" })
            ] })
          ] }) })
        ] })
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "w-full px-2 text-center md:flex", children: [
      /* @__PURE__ */ jsx("div", { className: "md:w-[50%] px-5 ", children: /* @__PURE__ */ jsx("div", { className: "sm:px-16", children: /* @__PURE__ */ jsxs("div", { className: "pt-10 mx-auto ", children: [
        /* @__PURE__ */ jsx("h4", { className: "font-bold text-red-600 custom ", children: "Connect with us" }),
        /* @__PURE__ */ jsx("p", { className: "text-[1.3rem] pt-8", children: "Please fill out the form and press the submit button. We will get back to you with 1-2 business days." })
      ] }) }) }),
      /* @__PURE__ */ jsx("div", { className: "md:w-[50%]  ", children: /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "px-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              className: "m-3 bg-gray-100 border-none focus:outline-none focus:ring focus:ring-primary/20",
              placeholder: "First Name *",
              required: "required",
              type: "text",
              value: data.first_name,
              onChange: (e) => setData(
                "first_name",
                e.target.value
              )
            }
          ),
          /* @__PURE__ */ jsx(
            "input",
            {
              className: "m-3 bg-gray-100 border-none focus:outline-none focus:ring focus:ring-primary/20",
              placeholder: "Last Name *",
              required: "required",
              type: "text",
              value: data.last_name,
              onChange: (e) => setData("last_name", e.target.value)
            }
          ),
          /* @__PURE__ */ jsx(
            "input",
            {
              className: "m-3 bg-gray-100 border-none focus:outline-none focus:ring focus:ring-primary/20",
              placeholder: "Email *",
              required: "required",
              type: "Email",
              value: data.email,
              onChange: (e) => setData("email", e.target.value)
            }
          ),
          /* @__PURE__ */ jsx(
            "input",
            {
              className: "m-3 bg-gray-100 border-none focus:outline-none focus:ring focus:ring-primary/20",
              placeholder: "Subject *",
              required: "required",
              type: "text",
              value: data.subject,
              onChange: (e) => setData("subject", e.target.value)
            }
          ),
          /* @__PURE__ */ jsx(
            "input",
            {
              className: "m-3 bg-gray-100 border-none focus:outline-none focus:ring focus:ring-primary/20",
              placeholder: "Phone Number",
              type: "text",
              value: data.phone,
              onChange: (e) => setData("phone", e.target.value)
            }
          ),
          /* @__PURE__ */ jsx(
            "input",
            {
              className: "m-3 bg-gray-100 border-none focus:outline-none focus:ring focus:ring-primary/20",
              placeholder: "Industry",
              type: "text",
              value: data.industry,
              onChange: (e) => setData("industry", e.target.value)
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "px-3 mx-auto", children: /* @__PURE__ */ jsx(
          "textarea",
          {
            className: "w-full bg-gray-100 border-none focus:outline-none focus:ring focus:ring-primary/20 ",
            rows: "4",
            placeholder: "Message",
            required: "required",
            name: "",
            value: data.message,
            onChange: (e) => setData("message", e.target.value)
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
          progress && /* @__PURE__ */ jsxs(
            "progress",
            {
              value: progress.percentage,
              max: "100",
              children: [
                progress.percentage,
                "%"
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              className: `block border p-4 sm:w-[20rem] rounded-full mx-auto
         text-white bg-[rgb(255,35,34)] hover:scale-110 transition ease-in-out`,
              type: "submit",
              disabled: processing,
              children: "Submit Now"
            }
          )
        ] })
      ] }) }) })
    ] })
  ] }) });
};
export {
  Index as default
};
