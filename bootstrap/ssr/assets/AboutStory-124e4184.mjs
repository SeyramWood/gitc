import { j as jsx, a as jsxs } from "../ssr.mjs";
import { useEffect } from "react";
import { W as WebsiteLayout } from "./WebsiteLayout-197e9d3a.mjs";
import AOS from "aos";
import "@inertiajs/inertia-react";
/* empty css               */import "react/jsx-runtime";
import "react-dom/server";
import "process";
import "http";
import "react-icons/sl";
import "./helpers-97f56fd4.mjs";
import "@n8tb1t/use-scroll-position";
import "react-icons/rx";
const AboutMessage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return /* @__PURE__ */ jsx(WebsiteLayout, { page: "story", children: /* @__PURE__ */ jsxs("div", { className: "bg-white", children: [
    /* @__PURE__ */ jsxs("div", { className: "sm:flex text-center sm:px-6 sm:text-left pt-14 ", children: [
      /* @__PURE__ */ jsx("div", { className: "sm:w-[20%]  ", children: /* @__PURE__ */ jsx("h4", { className: "text-5xl  text-red-600", children: "Our Story" }) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4 sm:pr-6 sm:w-[80%] px-3  ", children: [
        /* @__PURE__ */ jsx("p", { className: "mb-6 text-black", children: "Ghana is a founding member of the World Trade Organization (WTO), and having ratified the Marrakech Agreement in December 1994, it assumed all the obligations and commitments under the multilateral agreements of the Organization." }),
        /* @__PURE__ */ jsx("p", { className: "mb-6 text-black", children: "As a country which operates a liberalized trade regime under WTO regulations there was the need for a legal and institutional framework to protect its domestic trade and industry from unfair trade practices with it accompanying any unexpected surges in imports that could offset the gains to domestic trade and industry. This need culminated in the establishment of the Ghana International Trade Commission (GITC) in 2016." }),
        /* @__PURE__ */ jsx("p", { className: "mb-6 text-black", children: "Prior to the establishment of the GITC, the Minister for Trade and Industry directed the creation of the now-defunct Tariff Advisory Board (TAB) in 2009. The TAB then served as an advisory body on matters relating to trade contingency measures. Recommendations by the TAB had to be presented to the Minister who then forwarded same to Parliament for legal backing." }),
        /* @__PURE__ */ jsx("p", { className: "mb-6 text-black", children: "TAB served as precursor to the establishment of the GITC by an Act of Parliament, GITC Act 926, 2016, to regulate Ghana’s international trade architecture in conformity with the rules and regulations of the World Trade System and to provide for related matters." }),
        /* @__PURE__ */ jsx("p", { className: "mb-6 text-black", children: "TThe GITC is thus the legally competent authority in Ghana to handle and investigate issues relating to trade contingency measures. The legal framework of the Commission is consistent with the relevant provisions contained in the Agreement on the Implementation of Article VI of GATT, 1994, referred to as the Antidumping Agreement; Agreement on Subsidies and Countervailing Measures (SCM Agreement); and the Agreement on Safeguards. The Commission also provides advice to the Minister for Trade and Industry on matters relating to Ghana’s trade and industry policy." }),
        /* @__PURE__ */ jsx("p", { className: " text-black", children: "The Commission commenced operations in April 2018, when its five-member Governing Board was inaugurated by the President of the Republic. The Commission has a Secretariat with departments/divisions. The Secretariat is headed by an Executive Secretary who serves as the Secretary to a Governing Board, whose members are referred to as Commissioners." })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-32 bg-slate-300/30", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-center text-[3rem] sm:text-[4rem] pt-4 text-grey/40", children: "Our Core Values" }),
      /* @__PURE__ */ jsxs("div", { className: "px-7 pb-2 md:flex justify-center ", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex p-2 my-5", children: [
          /* @__PURE__ */ jsx("div", { className: "p-3 w-[30%]", children: /* @__PURE__ */ jsx("div", { className: "sm:bg-black/5", style: { borderRadius: "100%" }, children: /* @__PURE__ */ jsx(
            "img",
            {
              src: "images/homePage/objectivity.png",
              alt: "Objectivity",
              className: "object-contain -translate-y-5 -translate-x-1"
            }
          ) }) }),
          /* @__PURE__ */ jsxs("div", { className: "w-[70%] ", children: [
            /* @__PURE__ */ jsx("h2", { className: "", children: "Objectivity" }),
            /* @__PURE__ */ jsx("p", { className: "", children: "To ensure equality and fairness in the application of measures affecting international trade and the use of world trade measures." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex p-2 my-5", children: [
          /* @__PURE__ */ jsx("div", { className: "p-3 sm:ml-3 w-[30%] ", children: /* @__PURE__ */ jsx("div", { className: "sm:bg-black/5", style: { borderRadius: "100%" }, children: /* @__PURE__ */ jsx(
            "img",
            {
              src: "images/homePage/professionalism.png",
              alt: "professional",
              className: "object-contain -translate-y-3 -translate-x-5"
            }
          ) }) }),
          /* @__PURE__ */ jsxs("div", { className: "w-[70%] ", children: [
            /* @__PURE__ */ jsx("h2", { className: "", children: "Professionalism" }),
            /* @__PURE__ */ jsx("p", { children: "To ensure a high level of competence and efficiency in applying international trade rules and regulations as under the World Trade Organization (WTO) provisions." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex p-2 my-5 ", children: [
          /* @__PURE__ */ jsx("div", { className: "p-3 w-[30%] sm:w-[35%] ", children: /* @__PURE__ */ jsx("div", { className: "sm:bg-black/5", style: { borderRadius: "100%" }, children: /* @__PURE__ */ jsx(
            "img",
            {
              src: "images/homePage/integrity.png",
              alt: "Integrity",
              className: "object-contain -translate-y-3 -translate-x-5 "
            }
          ) }) }),
          /* @__PURE__ */ jsxs("div", { className: "w-[70%] sm:w-[65%]", children: [
            /* @__PURE__ */ jsx("h2", { className: "", children: "Integrity" }),
            /* @__PURE__ */ jsx("p", { children: "To ensure absolute neutrality and consistency in the execution of the mandate of the Commission." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex p-2 my-5", children: [
          /* @__PURE__ */ jsx("div", { className: "p-3 w-[30%] ", children: /* @__PURE__ */ jsx("div", { className: "sm:bg-black/5", style: { borderRadius: "100%" }, children: /* @__PURE__ */ jsx(
            "img",
            {
              src: "images/homePage/search.png",
              alt: "Integrity",
              className: "object-contain -translate-y-3 -translate-x-5 "
            }
          ) }) }),
          /* @__PURE__ */ jsxs("div", { className: "w-[70%] ", children: [
            /* @__PURE__ */ jsx("h2", { className: "", children: "Transparency" }),
            /* @__PURE__ */ jsx("p", { children: "To ensure that the commission operates on an open and fair terrain by providing a level playing field in its dealings with all parties." })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-32", children: /* @__PURE__ */ jsxs("div", { className: "", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col-reverse justify-center sm:flex-row ", children: [
        /* @__PURE__ */ jsx("div", { className: "text-white  bg-black sm:w-[50%]", children: /* @__PURE__ */ jsxs(
          "div",
          {
            className: "container pt-7 pb-14  sm:px-20 px-10",
            "data-aos": "fade-up",
            "data-aos-duration": "2000",
            children: [
              /* @__PURE__ */ jsx("h2", { className: "text-[3rem] text-white sm:pt-10 pb-6 font-bold", children: "We ensure:" }),
              /* @__PURE__ */ jsxs("ul", { className: "sm:text-[1.1rem] list-disc pb-5 pl-4 ", children: [
                /* @__PURE__ */ jsx("li", { className: "py-4", children: "Ghana’s compliance with international trade rules and regulations;" }),
                /* @__PURE__ */ jsx("li", { className: "py-3", children: "Fairness, efficiency, transparency and objectivity in the application of measures affecting international trade rules and the use of world trade regulations;" }),
                /* @__PURE__ */ jsx("li", { className: "py-3", children: "Fair competition for persons engaged in domestic production and international trade." }),
                /* @__PURE__ */ jsx("li", { className: "pt-3", children: "Protection of the domestic market from the impact of unfair trade practices in the course of international trade." })
              ] })
            ]
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "sm:w-[50%]", children: /* @__PURE__ */ jsx(
          "img",
          {
            className: "sm:h-[100%] ",
            src: "images/homePage/storyTwo.jpg",
            alt: ""
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex justify-center flex-col  sm:flex-row", children: [
        /* @__PURE__ */ jsx("div", { className: "sm:w-[50%]", children: /* @__PURE__ */ jsx(
          "img",
          {
            className: " sm:h-[100%]",
            src: "images/about/hand.jpg",
            alt: ""
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "sm:w-[50%]", children: /* @__PURE__ */ jsxs("div", { className: "bg-primary sm:pt-28 text-white px-16 py-7 sm:h-[35rem]", children: [
          /* @__PURE__ */ jsx("h4", { className: "text-left text-white font-bold", children: "Mission" }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 mb-4 text-[1.1rem] text-white", children: "To promote Ghana’s international trade through the application of fair, efficient,transparent, and objective measures affecting international trade in conformity with World Trade Organization rules and regulations." }),
          /* @__PURE__ */ jsx("h4", { className: "text-left font-bold text-white pt-6", children: "Vision" }),
          /* @__PURE__ */ jsx("p", { className: " text-[1.1rem] text-white pb-5 sm:pb-0", children: "To become world-class fair trade regulatory agency." })
        ] }) })
      ] })
    ] }) })
  ] }) });
};
export {
  AboutMessage as default
};
