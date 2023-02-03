import { j as jsx, a as jsxs } from "../ssr.mjs";
import { useEffect } from "react";
import { W as WebsiteLayout } from "./WebsiteLayout-d376d318.mjs";
import { H as HeadingPrimary } from "./HeadingPrimary-ed13ec4f.mjs";
import { P as Paragraph } from "./Paragraph-8ec8d723.mjs";
import AOS from "aos";
import { Link } from "@inertiajs/inertia-react";
import { B as ButtonOutline } from "./ButtonOutline-5a2728b7.mjs";
import { H as HeadingSecondary } from "./HeadingSecondary-b4f9f193.mjs";
import "react/jsx-runtime";
import "react-dom/server";
import "process";
import "http";
import "react-icons/sl";
import "react-multi-carousel";
import "@n8tb1t/use-scroll-position";
import "react-icons/rx";
const AboutMessage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return /* @__PURE__ */ jsx(WebsiteLayout, { page: "story", children: /* @__PURE__ */ jsxs("div", { className: "bg-white", children: [
    /* @__PURE__ */ jsxs("div", { className: "sm:flex text-center sm:text-left p-4 pt-14 mb-24 bg-slate-100", children: [
      /* @__PURE__ */ jsx("div", { className: "sm:w-[20%] sm:mt-7 sm:mx-3", children: /* @__PURE__ */ jsx(HeadingPrimary, { className: "text-black ", children: "Our Story" }) }),
      /* @__PURE__ */ jsxs("div", { className: "my-4 sm:w-[80%]  ", children: [
        /* @__PURE__ */ jsx(Paragraph, { className: "mb-6 text-black", children: "Ghana International Trade Commission (GITC), was established in September 2016 under Parliamentary Act 926 to provide for the regulation of Ghana’s International Trade inconformity with the rules and regulations of the world trade system and related matters." }),
        /* @__PURE__ */ jsx(Paragraph, { className: "mb-6 text-black", children: "The World Trade Organization (WTO) provides the forum for a multilateral rule-based global system that ensure fairness in global trade. Yet not all international trade is rule based us some countries support their domestic industries to produce and be competitive in international markets.Such Support provided through subsidies may make the exported products cheaper, which hurts domestic industries producing similar products." }),
        /* @__PURE__ */ jsx(Paragraph, { className: "mb-6 text-black", children: "With in the frame work of the WTO countries have the policy and legal space to protect their domestic industries from such unfair trade practices. Many Countries in the developed would have trade remedy institutions, such as the GITC established with the view to provide impartial investigations, adjudication and imposition of measures to protect domestic industries from such harmful effects of international trade." }),
        /* @__PURE__ */ jsx(Paragraph, { className: "mb-6 text-black", children: "However, in Africa the trade remedy laws and Investigating authorities are in Egypt, SouthAfrica, Morocco, Tunisia, Mauritius and Madagascar. In the developed world, however, such institutions have existed for along time such as in the United States where the U.S International Trade Commission (USITC) was set up in September 1916." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mb-24", style: { backgroundImage: "url('images/about/bg.jpg')" }, children: /* @__PURE__ */ jsxs("div", { className: "py-10 md:flex justify-center bg-[rgba(10,10,10,0.51)] text-white", children: [
      /* @__PURE__ */ jsxs("div", { className: "my-5 flex p-2", children: [
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
          /* @__PURE__ */ jsx(Paragraph, { className: "text-white", children: "To ensure equality and fairness in the application of measures affecting international trade and the use of world trade regulations." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "my-5 flex p-2", children: [
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
      /* @__PURE__ */ jsxs("div", { className: "my-5 flex p-2", children: [
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
      /* @__PURE__ */ jsxs("div", { className: "my-5 flex p-2", children: [
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
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "mb-32", children: /* @__PURE__ */ jsxs("div", { className: "mb-16", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col-reverse justify-center sm:flex-row ", children: [
        /* @__PURE__ */ jsx("div", { className: "text-white  bg-black sm:w-[50%]", children: /* @__PURE__ */ jsxs(
          "div",
          {
            className: "container px-16 ",
            "data-aos": "fade-up",
            "data-aos-duration": "2000",
            children: [
              /* @__PURE__ */ jsx("h1", { className: "text-[3rem] pt-6 pb-2 font-bold", children: "We ensure:" }),
              /* @__PURE__ */ jsxs("ul", { className: "sm:text-[1.3rem] list-disc ", children: [
                /* @__PURE__ */ jsx("li", { className: "py-4", children: "Ghana’s compliance with international trade rules and regulations;" }),
                /* @__PURE__ */ jsx("li", { className: "py-3", children: "Fairness, efficiency, transparency and objectivity in the application of measures affecting international trade rules and the use of world trade regulations;" }),
                /* @__PURE__ */ jsx("li", { className: "py-3", children: "Fair ompetition for persons engaged in domestic production and international trade." }),
                /* @__PURE__ */ jsx("li", { className: "pt-3", children: "Protection of the domestic market from the impact of unfair trade practices in the course of international trade." })
              ] }),
              /* @__PURE__ */ jsx(Link, { href: "/story", cl: true, children: /* @__PURE__ */ jsx(ButtonOutline, { className: "block p-4 mx-auto my-3 border border-white rounded-full hover:border-2", children: "Read Our Story" }) })
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
            src: "images/homePage/storyOne.jpg",
            alt: ""
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "sm:w-[50%]", children: /* @__PURE__ */ jsxs(
          "div",
          {
            className: "bg-primary text-white px-16 py-12 sm:h-[35rem]",
            "data-aos": "fade-up",
            "data-aos-duration": "2000",
            children: [
              /* @__PURE__ */ jsx("p", { className: "text-5xl font-bold", children: "Mission" }),
              /* @__PURE__ */ jsx("p", { className: "my-5 sm:text-2xl text-white", children: "To promote Ghana’s international trade through the application of fair, efficient,transparent, and objective measures affecting international trade in conformity with World Trade Organization rules and regulations." }),
              /* @__PURE__ */ jsx("p", { className: "text-5xl font-bold pt-6", children: "Vission" }),
              /* @__PURE__ */ jsx("p", { className: "my-5 sm:text-2xl text-white", children: "To become world-class fair trade regulatory agency." })
            ]
          }
        ) })
      ] })
    ] }) })
  ] }) });
};
export {
  AboutMessage as default
};
