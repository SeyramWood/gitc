import { a as jsxs, j as jsx } from "../ssr.mjs";
import { W as WebsiteLayout } from "./WebsiteLayout-e1c37850.mjs";
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
function ServiceSubsidy() {
  return /* @__PURE__ */ jsxs(WebsiteLayout, { page: "service", children: [
    /* @__PURE__ */ jsx(ServiceLinks, {}),
    /* @__PURE__ */ jsx("div", { className: "bg-white", children: /* @__PURE__ */ jsxs("div", { className: "sm:flex ", children: [
      /* @__PURE__ */ jsx(ServicesNav, {}),
      /* @__PURE__ */ jsx("div", { className: "sm:w-[70%]", children: /* @__PURE__ */ jsxs("div", { className: "text-black px-6", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-primary sm:text-[4rem] pb-0 pt-16", children: "Trade Remedy" }),
        /* @__PURE__ */ jsx("p", { className: "text-xl", children: " Subsidy & Countervailing Duties; Anti-Dumping Duties and Safeguard Measures" }),
        /* @__PURE__ */ jsx("h2", { className: "text-red-500 text-4xl font-bold mt-20", children: " Subsidy & Countervailing Duties" }),
        /* @__PURE__ */ jsx("div", { className: "my-10 ", children: /* @__PURE__ */ jsx("img", { src: "/../images/subsidy.png", className: "overflow-hidden w-full h-[28rem]", alt: "" }) }),
        /* @__PURE__ */ jsxs("div", { className: "", children: [
          /* @__PURE__ */ jsx("p", { className: "pb-8 text-black", children: "Countervailing duty is imposed where subsidy is specific and causes material injury to a domestic industry producing a like product or directly competitive product. ." }),
          /* @__PURE__ */ jsx("p", { className: "pb-8 text-black", children: "A subsidy is considered to exist if the Government or a public body within the territory of an exporting country provides a financial contribution to the manufacturer, producer, exporter, or transporter of any product which has been imported into the domestic market and confers a benefit on the recipient. ." }),
          /* @__PURE__ */ jsx("p", { className: "pb-8 text-black", children: "A financial contribution is considered to have been granted where a Government practice involves the direct transfer of funds including grants, loans and equity infusionto a specific industry." }),
          /* @__PURE__ */ jsx("p", { className: "pb-8 text-black", children: "The Commission will trigger an investigation when it has sufficient evidence of the existence of the Government or public body's involvement in the provision of financial contribution to a manufacturer, producer, exporter, or transporter of any product, that imposes injury or a threat of material injury to the domestic industry ." })
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
  ServiceSubsidy as default
};
