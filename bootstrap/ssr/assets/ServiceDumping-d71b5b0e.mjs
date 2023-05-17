import { j as jsx, a as jsxs } from "../ssr.mjs";
import { AiOutlineFilePdf } from "react-icons/ai";
import { W as WebsiteLayout } from "./WebsiteLayout-91e8f83b.mjs";
import { S as ServicesNav } from "./ServicesNav-49d9f0c3.mjs";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/inertia-react";
import "process";
import "http";
import "react";
import "react-icons/sl";
import "./helpers-97f56fd4.mjs";
import "@n8tb1t/use-scroll-position";
import "react-icons/rx";
function ServiceDumping() {
  return /* @__PURE__ */ jsx(WebsiteLayout, { page: "service", children: /* @__PURE__ */ jsx("div", { className: "bg-white", children: /* @__PURE__ */ jsxs("div", { className: "px-4 pt-16 pb-16 sm:flex", children: [
    /* @__PURE__ */ jsx(ServicesNav, {}),
    /* @__PURE__ */ jsx("div", { className: "sm:w-[70%]", children: /* @__PURE__ */ jsxs("div", { className: "px-6 pb-16 text-black", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-primary sm:text-[4rem] pb-0 ", children: "Anti Dumping Duties" }),
      /* @__PURE__ */ jsx("div", { className: "my-10 shadow-xl", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: "/../images/dump.jpg",
          className: "overflow-hidden w-full sm:h-[28rem] shadow-xl",
          alt: ""
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "", children: [
        /* @__PURE__ */ jsxs("p", { className: "pb-8 text-black", children: [
          /* @__PURE__ */ jsx("b", { children: "Dumping" }),
          " means the introduction of a product into the commerce of another country at less than its normal product value in the ordinary course of trade, for the like product when destined for consumption in the exporting country."
        ] }),
        /* @__PURE__ */ jsx("p", { className: "pb-8 text-black", children: "The Commission will trigger an investigation when it has sufficient evidence of the existence of dumping that causes injury or a threat of material injury to the domestic industry." }),
        /* @__PURE__ */ jsx("p", { className: "pb-8 text-black", children: "Anti-dumping duty is imposed where dumping causes material injury to a domestic industry producing a like product or directly competitive product." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "sm:pr-4", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-4xl text-primary", children: "Related Downloads" }),
        /* @__PURE__ */ jsx("i", { children: "Downloadable Legislative Instrument and Questionnaire" }),
        /* @__PURE__ */ jsxs("div", { className: "flex p-5 my-2 transition duration-500 ease-in-out rounded shadow-lg cursor-pointer hover:scale-110 ", children: [
          /* @__PURE__ */ jsx(AiOutlineFilePdf, { className: "w-[4rem] h-[4rem] text-red-700 " }),
          " ",
          /* @__PURE__ */ jsxs("span", { className: "pt-6", children: [
            " ",
            /* @__PURE__ */ jsx("a", { href: "\\pdfFiles\\resourcesPdfs\\GITC_ANTI_DUMPING_REGULATIONS,2019_PASSED.pdf", target: "_blank", children: "ANTI - DUMPING REGULATIONS, 2019 ( L.I 2380 )" }),
            " "
          ] })
        ] })
      ] })
    ] }) })
  ] }) }) });
}
export {
  ServiceDumping as default
};
