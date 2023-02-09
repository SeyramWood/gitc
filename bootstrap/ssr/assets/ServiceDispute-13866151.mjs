import { a as jsxs, j as jsx } from "../ssr.mjs";
import { W as WebsiteLayout } from "./WebsiteLayout-b0121945.mjs";
import "react";
import { AiOutlineFilePdf, AiOutlineFileWord } from "react-icons/ai";
import { S as ServiceLinks, a as ServicesNav } from "./ServicesNav-6f7ee5fd.mjs";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/inertia-react";
import "process";
import "http";
import "react-icons/sl";
import "@n8tb1t/use-scroll-position";
import "react-icons/rx";
function ServiceDispute() {
  return /* @__PURE__ */ jsxs(WebsiteLayout, { page: "service", children: [
    /* @__PURE__ */ jsx(ServiceLinks, {}),
    /* @__PURE__ */ jsx("div", { className: "bg-white", children: /* @__PURE__ */ jsxs("div", { className: "sm:flex ", children: [
      /* @__PURE__ */ jsx(ServicesNav, {}),
      /* @__PURE__ */ jsx("div", { className: "sm:w-[70%]", children: /* @__PURE__ */ jsxs("div", { className: "text-black", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-primary text-[4rem] pb-0 pt-16", children: "Trade Remedies" }),
        /* @__PURE__ */ jsx("p", { className: "text-xl", children: " Subsidy & Countervailing Duties; Anti-Dumping Duties and Safeguard Measures" }),
        /* @__PURE__ */ jsx("h2", { className: "text-red-500 text-4xl font-bold mt-20", children: "  Dispute Settlement" }),
        /* @__PURE__ */ jsx("div", { className: "sm:pr-6 my-10 ", children: /* @__PURE__ */ jsx("img", { src: "/../images/dispute.jpg", className: "overflow-hidden w-full h-[28rem]", alt: "" }) }),
        /* @__PURE__ */ jsxs("div", { className: "", children: [
          /* @__PURE__ */ jsx("p", { className: "pb-8 text-black", children: "Customs valuation is a customs procedure applied to determine or assess the customs value of imported goods. If the rate of duty is ad valorem, the customs value is important to determine the duty to be paid on an imported good. The purpose of this regulation is to establish procedures that will solve disputes arising as a result of classification, valuation, or origin determination by the customs division of the Ghana Revenue Authority." }),
          /* @__PURE__ */ jsx("p", { className: "pb-8 text-black", children: "An importer of goods which are the subject matter of a dispute as a result of classification, valuation, or origin determination by the customs division of the Ghana Revenue Authority may file a petition or lodge a written complaint with the Commission in a specific format including all the necessary information and documents required by the Commission. The Commission may conduct its investigation in relation to a dispute for which a complaint has been lodged and may make available information or results of investigation to the parties involved." })
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
  ServiceDispute as default
};
