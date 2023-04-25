import { j as jsx, a as jsxs } from "../ssr.mjs";
import { W as WebsiteLayout } from "./WebsiteLayout-bb3a7897.mjs";
import "react";
import { AiOutlineFilePdf, AiOutlineFileWord } from "react-icons/ai";
import "@inertiajs/inertia-react";
import { S as ServicesNav } from "./ServicesNav-f691b297.mjs";
import "react/jsx-runtime";
import "react-dom/server";
import "process";
import "http";
import "react-icons/sl";
import "./helpers-bf0c6e44.mjs";
import "@n8tb1t/use-scroll-position";
import "react-icons/rx";
function ServiceTarrif() {
  return /* @__PURE__ */ jsx(WebsiteLayout, { page: "service", children: /* @__PURE__ */ jsx("div", { className: "bg-white", children: /* @__PURE__ */ jsxs("div", { className: "sm:flex px-4 pt-16 pb-16", children: [
    /* @__PURE__ */ jsx(ServicesNav, {}),
    /* @__PURE__ */ jsx("div", { className: "sm:w-[70%]", children: /* @__PURE__ */ jsxs("div", { className: "text-black px-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-primary text-[4rem] pb-0 ", children: "Tariff Review" }),
      /* @__PURE__ */ jsx("div", { className: " my-10 ", children: /* @__PURE__ */ jsx("img", { src: "/../images/service.jpg", className: "overflow-hidden w-full sm:h-[28rem]", alt: "" }) }),
      /* @__PURE__ */ jsxs("div", { className: "", children: [
        /* @__PURE__ */ jsx("p", { className: "pb-8 ", children: "The Ghana International TradeCommission (GITC) plays a critical role in addressing the tariff competitiveness of Ghana. Sections 34 and 35 of the GITC Act 926 (2016) states that a domestic producer or a representative of the domestic industry or a labour association may submit a petition in writing to the Commission for a review of customs duty that affects the production and competitiveness of goods in relation to the domestic producer or domestic industry and the grant of a customs duty rebate or draw back so as to enhance its competitiveness." }),
        /* @__PURE__ */ jsx("p", { className: "pb-8 ", children: "The product to be subjected to tariff review shall be imported and either like or directly competitive or substitutable to the products produced by the applicant or that are used by the applicant as inputs for the production of other products.The commission shall require the petitioner or an interested party to provide information that relates to the substance of the petition and provide a report which sets out the basis for the decision of the Commission to reject or accept a petition." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "sm:pr-4", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-4xl text-primary", children: "Related Downloads" }),
        /* @__PURE__ */ jsx("i", { children: "Downloadable Legislative Instrument and Questionnaire" }),
        /* @__PURE__ */ jsxs("div", { className: "my-2 shadow-lg p-5 cursor-pointer rounded flex  transition duration-500 ease-in-out hover:scale-110 ", children: [
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
  ] }) }) });
}
export {
  ServiceTarrif as default
};
