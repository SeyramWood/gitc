import { a as jsxs, j as jsx } from "../ssr.mjs";
import { W as WebsiteLayout } from "./WebsiteLayout-b0121945.mjs";
import { AiOutlineFilePdf, AiOutlineFileWord } from "react-icons/ai";
import { S as ServiceLinks, a as ServicesNav } from "./ServicesNav-6f7ee5fd.mjs";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/inertia-react";
import "process";
import "http";
import "react";
import "react-icons/sl";
import "@n8tb1t/use-scroll-position";
import "react-icons/rx";
function ServiceDumping() {
  return /* @__PURE__ */ jsxs(WebsiteLayout, { page: "service", children: [
    /* @__PURE__ */ jsx(ServiceLinks, {}),
    /* @__PURE__ */ jsx("div", { className: "bg-white", children: /* @__PURE__ */ jsxs("div", { className: "sm:flex ", children: [
      /* @__PURE__ */ jsx(ServicesNav, {}),
      /* @__PURE__ */ jsx("div", { className: "sm:w-[70%]", children: /* @__PURE__ */ jsxs("div", { className: "text-black", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-primary text-[4rem] pb-0 pt-16", children: "Anti-Dumping" }),
        /* @__PURE__ */ jsx("p", { className: "text-xl", children: " Subsidy & Countervailing Duties; Anti-Dumping Duties and Safeguard Measures" }),
        /* @__PURE__ */ jsx("h2", { className: "text-red-500 text-4xl font-bold mt-20", children: "Anti Dumping Duties" }),
        /* @__PURE__ */ jsx("div", { className: "sm:pr-6 my-10 ", children: /* @__PURE__ */ jsx("img", { src: "/../images/dump.jpg", className: "overflow-hidden w-full h-[28rem]", alt: "" }) }),
        /* @__PURE__ */ jsxs("div", { className: "", children: [
          /* @__PURE__ */ jsx("p", { className: "pb-8 text-black", children: "An anti-dumping duty is a protectionist tariff that a government imposes on foreign imports that it believes are priced below fair market value." }),
          /* @__PURE__ */ jsx("p", { className: "pb-8 text-black", children: "The purpose of these regulations is to establish processes for filing dumping complaints and for imposing anti-dumping duty after the Commission has duly conducted an investigation in relation to dumping. The objective of an anti-dumping investigation is to determine whether dumping has caused, is causing, or threatens to cause material injury to a domestic industry or material retardation in the establishment of domestic industry, in order to take necessary anti-dumping actions." }),
          /* @__PURE__ */ jsx("p", { className: "pb-8 text-black", children: "These regulations apply to products imported into Ghana for commercial reasons and meant for consumption on the local market, in accordance with the World Trade Organization Anti-Dumping Agreement." }),
          /* @__PURE__ */ jsx("p", { className: "pb-8 text-black", children: "Affected domestic industries (those whose collective output accounts for more than 50% of the entire production of 'like' goods generated by the portion of the domestic industry supporting the complaint) may file a petition with the Commission in a specific format, including all necessary requested data. The Commission will conduct investigations only when it has sufficient evidence of dumping, material injury and a causal link between the dumping and material injury. In the absence of sufficient evidence, support and or data supporting the alleged, the Commission shall not proceed with investigations." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "sm:pr-4", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-4xl text-primary", children: "Related Downloads" }),
          /* @__PURE__ */ jsx("i", { children: "Downloadable Legislative Instrument and Questionnaire" }),
          /* @__PURE__ */ jsxs("div", { className: "my-2 shadow-lg p-5  rounded flex  transition duration-500 ease-in-out hover:scale-110 ", children: [
            /* @__PURE__ */ jsx(AiOutlineFilePdf, { className: "w-[4rem] h-[4rem] text-red-700 " }),
            " ",
            /* @__PURE__ */ jsx("span", { className: "pt-6", children: "  GITC ( Anti-Dumping ) Regulations, 2019 ( L.I 2380 ) " })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "my-2 shadow-lg p-5 mb-5 rounded flex cursor-pointer transition duration-500 ease-in-out hover:scale-110 ", children: [
            /* @__PURE__ */ jsx(AiOutlineFileWord, { className: "w-[4rem] h-[4rem] text-blue-700" }),
            " ",
            /* @__PURE__ */ jsx("span", { className: "pt-6", children: " GITC Questionnaire ( Editable )" })
          ] })
        ] })
      ] }) })
    ] }) })
  ] });
}
export {
  ServiceDumping as default
};
