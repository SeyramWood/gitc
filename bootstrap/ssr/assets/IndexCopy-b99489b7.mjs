import { a as jsxs, j as jsx } from "../ssr.mjs";
import { useState } from "react";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/inertia-react";
import "process";
import "http";
const Index = () => {
  let [open, setOpen] = useState(false);
  let [aboutDropDown, setAboutDropDown] = useState(false);
  let [serviceDropDown, setServiceDropDown] = useState(false);
  const slide = [
    {
      img: "https://baconmockup.com/640/303"
    },
    {
      img: "https://baconmockup.com/640/301"
    },
    {
      img: "https://baconmockup.com/640/306"
    }
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const prev = () => {
    const firstSlide = currentIndex === 0;
    const newIndex = firstSlide ? slide.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const next = () => {
    const lastSlide = currentIndex === slide.length - 1;
    const newIndex = lastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return /* @__PURE__ */ jsxs("div", { className: "", children: [
    /* @__PURE__ */ jsx("div", { className: `h-[45rem] bg-cover `, style: { backgroundImage: `url(${slide[currentIndex].img})` }, children: /* @__PURE__ */ jsxs("div", { className: "h-[45rem] bg-[rgba(0,0,0,0.5)] w-full", children: [
      /* @__PURE__ */ jsx("div", { className: " p-3 bg-white ", children: /* @__PURE__ */ jsxs("ul", { className: "flex justify-around xs:text-xs ", children: [
        /* @__PURE__ */ jsx("li", { className: "xs:flex text-center ", children: "Mon-Fri 08:00 - 17:00" }),
        /* @__PURE__ */ jsx("li", { className: "xs:flex text-center", children: "+233(0) 30 296 0298" }),
        /* @__PURE__ */ jsx("li", { className: "xs:flex text-center", children: "info@gitc.gov.gh" }),
        /* @__PURE__ */ jsx("li", { className: "xs:flex text-center", children: "GL-040-2630" })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "sm:mt-7 text-white ", children: [
        /* @__PURE__ */ jsxs("nav", { className: "flex justify-around  p-4 mx-[7rem]  xs:mx-0 xs:block bg-[rgb(225,35,28)] ", children: [
          /* @__PURE__ */ jsx("div", { className: "sm:hidden flex justify-center cursor-pointer ", onClick: () => {
            setOpen(!open);
          }, children: open ? "close" : "open" }),
          /* @__PURE__ */ jsxs("div", { className: `sm:flex list-none gap-8 ${open ? "" : "hidden"}`, children: [
            /* @__PURE__ */ jsx("li", { className: "hover:text-red-100 hover:underline cursor-pointer", children: "Home" }),
            /* @__PURE__ */ jsxs("li", { className: "hover:text-red-100 hover:underline cursor-pointer block ", onClick: () => {
              setAboutDropDown(!aboutDropDown);
            }, children: [
              "About Us",
              /* @__PURE__ */ jsxs("div", { className: `absolute text-white border p-3 mx-auto bg-red-300 ${aboutDropDown ? "" : "hidden"}`, children: [
                /* @__PURE__ */ jsx("div", { className: "", children: "item One" }),
                /* @__PURE__ */ jsx("div", { className: "", children: "item two" }),
                /* @__PURE__ */ jsx("div", { className: "", children: "item three" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "hover:text-red-100 hover:underline cursor-pointer", onClick: () => {
              setServiceDropDown(!serviceDropDown);
            }, children: [
              "Our Services",
              /* @__PURE__ */ jsxs("div", { className: `absolute text-white border p-3 bg-red-300 mx-auto  ${serviceDropDown ? "" : "hidden"}`, children: [
                /* @__PURE__ */ jsx("div", { className: "", children: "item 1" }),
                /* @__PURE__ */ jsx("div", { className: "", children: "item 2" }),
                /* @__PURE__ */ jsx("div", { className: "", children: "item 3" })
              ] })
            ] }),
            /* @__PURE__ */ jsx("li", { className: "hover:text-red-100 hover:underline cursor-pointer", children: "Resources" }),
            /* @__PURE__ */ jsx("li", { className: "hover:text-red-100 hover:underline cursor-pointer", children: "News" }),
            /* @__PURE__ */ jsx("li", { className: "hover:text-red-100 hover:underline cursor-pointer", children: "Contact us" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "px-4 md:pl-24 md:mt-[20rem] xs:text-center xs:mt-10", children: [
          /* @__PURE__ */ jsx("p", { className: "text-7xl font-bold", children: "Anti - Dumping" }),
          /* @__PURE__ */ jsx("p", { className: "text-3xl ", children: "We provide provide actions that counteract the dumping of goods in Ghana." }),
          /* @__PURE__ */ jsxs("div", { className: "mt-8", children: [
            /* @__PURE__ */ jsx("button", { className: " border p-4 mx-1 rounded-full  hover:bg-[rgb(225,35,28)] ", children: " Read More" }),
            /* @__PURE__ */ jsx("button", { className: " border p-4 mx-1 rounded-full  hover:bg-[rgb(225,35,28)] ", children: "Contact Us" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsx("img", { src: "images/left.png", onClick: prev, className: "absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 w-6 cursor-pointer ", alt: "left" }) }),
        /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsx("img", { src: "images/right.png", onClick: next, className: "absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 w-6 cursor-pointer", alt: "right" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "bg-slate-100  ", children: /* @__PURE__ */ jsxs("div", { className: "container p-12 md:flex justify-center ", children: [
      /* @__PURE__ */ jsxs("div", { className: "sm:flex my-5", children: [
        /* @__PURE__ */ jsx("div", { className: "flex p-3 w-[30%]", children: /* @__PURE__ */ jsx("img", { src: "images/target.png", alt: "Objectivity", className: "object-contain" }) }),
        /* @__PURE__ */ jsxs("div", { className: "", children: [
          /* @__PURE__ */ jsx("h1", { className: "text-[30px] text-[rgb(255,0,0)]", children: "Objectivity" }),
          /* @__PURE__ */ jsx("p", { className: " ", children: "To ensure equality and fairness in the application of measures affecting international trade and the use of world trade regulations." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "sm:flex my-5", children: [
        /* @__PURE__ */ jsx("div", { className: "flex p-3 w-[30%]", children: /* @__PURE__ */ jsx("img", { src: "images/professional.png", alt: "professional", className: "object-contain" }) }),
        /* @__PURE__ */ jsxs("div", { className: "", children: [
          /* @__PURE__ */ jsx("h1", { className: "text-[30px] text-[rgb(255,0,0)]", children: "Professionalism" }),
          /* @__PURE__ */ jsx("p", { children: "To ensure a high level of competence and efficiency in applying international trade rules and regulations as under the World Trade Organization (WTO) provisions." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "sm:flex my-5", children: [
        /* @__PURE__ */ jsx("div", { className: "flex p-3 w-[30%] ", children: /* @__PURE__ */ jsx("img", { src: "images/integrity.png", alt: "Integrity", className: "object-contain" }) }),
        /* @__PURE__ */ jsxs("div", { className: "", children: [
          /* @__PURE__ */ jsx("h1", { className: "text-[30px] text-[rgb(255,0,0)]", children: "Integrity" }),
          /* @__PURE__ */ jsx("p", { children: "To ensure absolute neutrality and consistency in the execution of the mandate of the Commission." })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "container mx-auto ", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mt-24", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-[60px] font-bold text-[rgb(255,0,0)] ", children: "Services We Provide" }),
        /* @__PURE__ */ jsx("p", { children: "COVERED IN THESE AREAS" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: " md:flex justify-center mb-16  ", children: [
        /* @__PURE__ */ jsxs("div", { className: "m-1", children: [
          /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsx("img", { src: "https://baconmockup.com/640/300", className: "w-full object-cover h-[15rem]", alt: "" }) }),
          /* @__PURE__ */ jsxs("div", { className: "", children: [
            /* @__PURE__ */ jsx("h1", { className: "text-[30px] font-bold text-[rgb(255,0,0)]", children: "Trade Remedies" }),
            /* @__PURE__ */ jsx("p", { children: "To ensure equality and fairness in the application of measures affecting international trade and the use of world trade regulations." }),
            /* @__PURE__ */ jsx("p", { className: "hover:text-red-500", children: "Read More" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "m-1", children: [
          /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsx("img", { src: "https://baconmockup.com/640/300", className: "w-full object-cover h-[15rem]", alt: "" }) }),
          /* @__PURE__ */ jsxs("div", { className: "", children: [
            /* @__PURE__ */ jsx("h1", { className: "text-[30px] font-bold text-[rgb(255,0,0)]", children: "Dispute Settlement" }),
            /* @__PURE__ */ jsx("p", { children: "To ensure equality and fairness in the application of measures affecting international trade and the use of world trade regulations." }),
            /* @__PURE__ */ jsx("p", { className: "hover:text-red-500", children: "Read More" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "m-1", children: [
          /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsx("img", { src: "https://baconmockup.com/640/300", className: "w-full object-cover h-[15rem]", alt: "" }) }),
          /* @__PURE__ */ jsxs("div", { className: "", children: [
            /* @__PURE__ */ jsx("h1", { className: "text-[30px] font-bold text-[rgb(255,0,0)]", children: "Tarrif Review" }),
            /* @__PURE__ */ jsx("p", { children: "To ensure equality and fairness in the application of measures affecting international trade and the use of world trade regulations." }),
            /* @__PURE__ */ jsx("p", { className: "hover:text-red-500", children: "Read More" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "m-1", children: [
          /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsx("img", { src: "https://baconmockup.com/640/300", className: "w-full object-cover h-[15rem]", alt: "" }) }),
          /* @__PURE__ */ jsxs("div", { className: "", children: [
            /* @__PURE__ */ jsx("h1", { className: "text-[30px] font-bold text-[rgb(255,0,0)]", children: "Research" }),
            /* @__PURE__ */ jsx("p", { children: "To ensure equality and fairness in the application of measures affecting international trade and the use of world trade regulations." }),
            /* @__PURE__ */ jsx("p", { className: "hover:text-red-500", children: "Read More" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("button", { className: "block border p-4 rounded-full mx-auto w-[30%] hover:bg-[rgb(255,35,34)]", children: " View More" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-11", children: /* @__PURE__ */ jsxs("div", { className: "mb-16", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:flex justify-center", children: [
        /* @__PURE__ */ jsx("div", { className: "border h-[35rem]  ", children: /* @__PURE__ */ jsx("img", { className: "w-[80rem] h-[35rem]", src: "https://baconmockup.com/640/303", alt: "" }) }),
        /* @__PURE__ */ jsx("div", { className: "border ", children: /* @__PURE__ */ jsxs("div", { className: "container p-4  ", children: [
          /* @__PURE__ */ jsx("p", { className: "sm:text-[25px]", children: "DID YOU KNOW THAT" }),
          /* @__PURE__ */ jsx("p", { className: "sm:text-[35px] font-bold text-[rgb(255,35,24)] my-5", children: "GITC is among seven trade remedy institutions and investigating authorities in Africa." }),
          /* @__PURE__ */ jsx("p", { className: "sm:text-[25px] mb-5", children: "These other African countries are: Egypt,South Africa, Morocco, Tunisia,Mauritius, and Madagascar. These other African countries are: Egypt,South Africa, Morocco, Tunisia,Mauritius, and Madagascar." }),
          /* @__PURE__ */ jsx("button", { className: "block border-[rgb(255,35,24)] border p-4 mt-3 rounded-full mx-auto hover:border-2", children: "Read Our Story" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "md:flex justify-center", children: [
        /* @__PURE__ */ jsx("div", { className: "border text-white bg-[rgb(255,35,25)] sm:w-[50%]", children: /* @__PURE__ */ jsxs("div", { className: "container p-4   text-center", children: [
          /* @__PURE__ */ jsx("h1", { className: "text-[3rem]", children: "We ensure:" }),
          /* @__PURE__ */ jsxs("div", { className: "sm:text-[1.3rem]", children: [
            /* @__PURE__ */ jsx("p", { className: "py-4", children: "(a)Ghana’s compliance with international trade rules and regulations;" }),
            /* @__PURE__ */ jsx("p", { className: "py-3", children: "(b)Fairness, efficiency, transparency and objectivity in the application of measures affecting international trade rules and the use of world trade regulations;" }),
            /* @__PURE__ */ jsx("p", { className: "py-3", children: "(c)Fair ompetition for persons engaged in domestic production and international trade." }),
            /* @__PURE__ */ jsx("p", { className: "pt-3", children: "(d)Protection of the domestic market from the impact of unfair trade practices in the course of international trade." })
          ] }),
          /* @__PURE__ */ jsx("button", { className: "block border-white border p-4 mt-3 rounded-full mx-auto hover:border-2", children: "Read Our Story" })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "border h-[35rem] sm:w-[50%] ", children: /* @__PURE__ */ jsx("img", { className: "w-[80rem] h-[35rem]", src: "https://baconmockup.com/640/303", alt: "" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "bg-gray-100 py-16 px-2", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-center gap-1 h-10rem]", children: [
      /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsx("img", { src: "https://baconmockup.com/640/300", className: "w-full object-cover h-[10rem]", alt: "" }) }),
      /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsx("img", { src: "https://baconmockup.com/640/300", className: "w-full object-cover h-[10rem]", alt: "" }) }),
      /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsx("img", { src: "https://baconmockup.com/640/300", className: "w-full object-cover h-[10rem]", alt: "" }) }),
      /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsx("img", { src: "https://baconmockup.com/640/300", className: "w-full object-cover h-[10rem]", alt: "" }) }),
      /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsx("img", { src: "https://baconmockup.com/640/300", className: "w-full object-cover h-[10rem]", alt: "" }) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "mt-[5rem]", children: /* @__PURE__ */ jsx("div", { className: "mb-16", children: /* @__PURE__ */ jsxs("div", { className: "md:flex justify-center", children: [
      /* @__PURE__ */ jsx("div", { className: "border  ", children: /* @__PURE__ */ jsx("img", { className: "w-[80rem] h-[40rem]", src: "https://baconmockup.com/640/303", alt: "" }) }),
      /* @__PURE__ */ jsx("div", { className: "border h-[40rem]  ", children: /* @__PURE__ */ jsxs("div", { className: "container p-4 border ", children: [
        /* @__PURE__ */ jsx("img", { src: "images/quote.png", alt: "quote", className: "w-[20%] xs:hidden" }),
        /* @__PURE__ */ jsx("p", { className: "pl-4 sm:text-[2rem] ", children: "The bane of development in developing countries as against developed countries is the lack of industrialization in the former. The inability of developing counties......." }),
        /* @__PURE__ */ jsx("h1", { className: "pl-5 text-6  ", children: "Read More " }),
        /* @__PURE__ */ jsxs("div", { className: "pl-5 ", children: [
          /* @__PURE__ */ jsx("h1", { className: "text-[30px] font-bold text-[rgba(255,23,025)]", children: "Frank Agyakum" }),
          /* @__PURE__ */ jsx("p", { className: "", children: "Executive Secretary" })
        ] })
      ] }) })
    ] }) }) }),
    /* @__PURE__ */ jsxs("div", { className: "md:flex w-full  text-center px-4", children: [
      /* @__PURE__ */ jsx("div", { className: "sm:w-[50%] ", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-[3rem] font-bold text-[rgb(255,35,25)]", children: "Connect with us" }),
        /* @__PURE__ */ jsx("p", { className: "text-[1.3rem]", children: "Please fill out the form and press the submit button. We will get back to you with 1-2 business days." })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "sm:w-[50%]  ", children: /* @__PURE__ */ jsx("div", { className: "container ", children: /* @__PURE__ */ jsxs("form", { action: "", className: "", children: [
        /* @__PURE__ */ jsxs("div", { className: "", children: [
          /* @__PURE__ */ jsx("input", { className: "m-3 bg-gray-100", placeholder: "Full Name *", required: "required", type: "text" }),
          /* @__PURE__ */ jsx("input", { className: "m-3 bg-gray-100", placeholder: "Email *", required: "required", type: "Email" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "", children: [
          /* @__PURE__ */ jsx("input", { className: "m-3 bg-gray-100", placeholder: "Subject *", required: "required", type: "text" }),
          /* @__PURE__ */ jsx("input", { className: "m-3 bg-gray-100", placeholder: "Phone Number", type: "text" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsx("textarea", { className: "sm:w-[70%] bg-gray-100", rows: "4", placeholder: "Message", required: "required", name: "" }) }),
        /* @__PURE__ */ jsx("button", { className: "border rounded-full px-3 py-2 hover:bg-[rgba(255,34,25)] hover:text-white my-6", children: "Submit Now" })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "bg-black px-12 py-12", children: /* @__PURE__ */ jsxs("div", { className: "sm:flex  justify-around gap-9 sm:gap-3 text-white", children: [
      /* @__PURE__ */ jsxs("ul", { children: [
        /* @__PURE__ */ jsx("p", { className: "mb-4", children: "Contact Information" }),
        /* @__PURE__ */ jsx("li", { children: "2nd Floor (West Wing)," }),
        /* @__PURE__ */ jsx("li", { children: "5th Link Road,East Cantonment" }),
        /* @__PURE__ */ jsx("li", { children: "near US Embassy, Accra" }),
        /* @__PURE__ */ jsx("li", { className: "py-4", children: "+233 030 296 0298" }),
        /* @__PURE__ */ jsx("li", { className: "py-4", children: "info@gitc.gov.gh" }),
        /* @__PURE__ */ jsx("li", { className: "py-4", children: "GL - 040 - 2630" })
      ] }),
      /* @__PURE__ */ jsxs("ul", { className: "", children: [
        /* @__PURE__ */ jsx("p", { className: "mb-4", children: "Useful Links" }),
        /* @__PURE__ */ jsx("li", { className: "py-2", children: "About Us" }),
        /* @__PURE__ */ jsx("li", { className: "py-2", children: "Our Team" }),
        /* @__PURE__ */ jsx("li", { className: "py-2", children: "Our Services" }),
        /* @__PURE__ */ jsx("li", { className: "py-2", children: "Resources" }),
        /* @__PURE__ */ jsx("li", { className: "py-2", children: "News" })
      ] }),
      /* @__PURE__ */ jsxs("ul", { children: [
        /* @__PURE__ */ jsx("p", { className: "mb-4", children: "External Links" }),
        /* @__PURE__ */ jsx("li", { className: "py-2", children: "Ministry of Trade and Industry" }),
        /* @__PURE__ */ jsx("li", { className: "py-2", children: "Ghana Free Zones Authority" }),
        /* @__PURE__ */ jsx("li", { className: "py-2", children: "Ghana Revenue Authority" }),
        /* @__PURE__ */ jsx("li", { className: "py-2", children: "Ghana Standards Authority " }),
        /* @__PURE__ */ jsx("li", { className: "py-2", children: "World Trade Organization " })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "", children: [
        /* @__PURE__ */ jsx("p", { className: "mb-4", children: "Gallery" }),
        /* @__PURE__ */ jsxs("div", { className: "", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex gap-2 mb-2", children: [
            /* @__PURE__ */ jsx("div", { className: "w-[50] border bg-red-100", children: "1" }),
            /* @__PURE__ */ jsx("div", { className: "w-[50] border bg-red-100", children: "2" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx("div", { className: "w-[50] border bg-red-100", children: "1" }),
            /* @__PURE__ */ jsx("div", { className: "w-[50] border bg-red-100", children: "2" })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "w-full bg-[rgba(0,0,0,0.8)]", children: /* @__PURE__ */ jsx("h1", { className: "py-8 text-white  pl-5 ", children: "© Copyright 2022, All Right Reserved, Ghana International Trade Commission" }) })
  ] });
};
export {
  Index as default
};
