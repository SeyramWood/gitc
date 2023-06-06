import { j as jsx, a as jsxs } from "../ssr.mjs";
import "react";
import { AiOutlineFilePdf } from "react-icons/ai";
import { W as WebsiteLayout } from "./WebsiteLayout-a292da02.mjs";
import { S as ServicesNav } from "./ServicesNav-49d9f0c3.mjs";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/inertia-react";
import "process";
import "http";
import "react-icons/sl";
import "./helpers-97f56fd4.mjs";
import "@n8tb1t/use-scroll-position";
import "react-icons/rx";
function ServiceDispute() {
  return /* @__PURE__ */ jsx(WebsiteLayout, { page: "service", children: /* @__PURE__ */ jsx("div", { className: "bg-white", children: /* @__PURE__ */ jsxs("div", { className: "sm:flex px-4 pt-16 pb-16", children: [
    /* @__PURE__ */ jsx(ServicesNav, {}),
    /* @__PURE__ */ jsx("div", { className: "sm:w-[70%]", children: /* @__PURE__ */ jsxs("div", { className: "text-black px-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-primary text-[3rem] pb-0 ", children: "Customs Valuation (Dispute Settlement)" }),
      /* @__PURE__ */ jsx("div", { className: " my-10 shadow-xl", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: "/../images/dispute.jpg",
          className: "overflow-hidden w-full sm:h-[28rem] shadow-xl",
          alt: ""
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "", children: [
        /* @__PURE__ */ jsx("p", { className: "pb-8 ", children: "The GITC Act 926 and the GITC Customs Valuation (Dispute Settlement) Regulations, 2019 (L.I 2382) empowers the Commission to settle a dispute arising as a result of classification, valuation, or origin determination by the Customs Division of the Ghana Revenue Authority. An importer or representative of an importer of goods which is the subject matter of a dispute may lodge a written complaint with the Commission." }),
        /* @__PURE__ */ jsx("p", { className: "pb-8 ", children: "An importer whose products are the subject matter of a dispute liable for the payment or the customs duty in relation to that product is not required to pay a penalty for lodging a complaint in relation to the decision of the Commissioner-General in respect of the value of customs duty on the products imported." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "sm:pr-4", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-4xl text-primary", children: "Related Downloads" }),
        /* @__PURE__ */ jsx("i", { children: "Downloadable Legislative Instrument and Questionnaire" }),
        /* @__PURE__ */ jsxs("div", { className: "my-2 shadow-lg p-5 cursor-pointer rounded flex  transition duration-500 ease-in-out hover:scale-110 ", children: [
          /* @__PURE__ */ jsx(AiOutlineFilePdf, { className: "w-[4rem] h-[4rem] text-red-700 " }),
          " ",
          /* @__PURE__ */ jsxs("span", { className: "pt-6", children: [
            " ",
            /* @__PURE__ */ jsx("a", { className: "font-bold", href: "\\pdfFiles\\resourcesPdfs\\CUSTOMS_VALUATION_AND_DISPUTE_SETTLEMENT_REGULATIONS_2019_L.I_2382.pdf", target: "_blank", children: "GITC (Customs Valuation) (Dispute Settlement) Regulations, 2019 (L.I 2382)" }),
            " "
          ] })
        ] })
      ] })
    ] }) })
  ] }) }) });
}
export {
  ServiceDispute as default
};
