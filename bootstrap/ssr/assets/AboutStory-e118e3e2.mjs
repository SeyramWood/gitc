import { j as jsx, a as jsxs } from "../ssr.mjs";
import { useEffect } from "react";
import { W as WebsiteLayout } from "./WebsiteLayout-91e8f83b.mjs";
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
        /* @__PURE__ */ jsx("p", { className: "mb-6 text-black", children: "Ghana International Trade Commission (GITC), was established in September 2016 under Parliamentary Act 926 to provide for the regulation of Ghana’s International Trade in conformity with the rules and regulations of the world trade system and related matters." }),
        /* @__PURE__ */ jsx("p", { className: "mb-6 text-black", children: "The World Trade Organization (WTO) provides the forum for a multilateral rule-based global system that ensure fairness in global trade. Yet not all international trade is rule based us some countries support their domestic industries to produce and be competitive in international markets.Such Support provided through subsidies may make the exported products cheaper, which hurts domestic industries producing similar products." }),
        /* @__PURE__ */ jsx("p", { className: "mb-6 text-black", children: "With in the frame work of the WTO countries have the policy and legal space to protect their domestic industries from such unfair trade practices. Many Countries in the developed would have trade remedy institutions, such as the GITC established with the view to provide impartial investigations, adjudication and imposition of measures to protect domestic industries from such harmful effects of international trade." }),
        /* @__PURE__ */ jsx("p", { className: " text-black", children: "However, in Africa the trade remedy laws and Investigating authorities are in Egypt, SouthAfrica, Morocco, Tunisia, Mauritius and Madagascar. In the developed world, however, such institutions have existed for along time such as in the United States where the U.S International Trade Commission (USITC) was set up in September 1916." })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-32 bg-slate-300/30", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-center text-[3rem] sm:text-[4rem] pt-4 text-grey/40", children: "Our Values" }),
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
