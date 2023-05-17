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
function Service() {
  return /* @__PURE__ */ jsx(WebsiteLayout, { page: "service", children: /* @__PURE__ */ jsx("div", { className: "bg-white", children: /* @__PURE__ */ jsxs("div", { className: "sm:flex px-4 pt-16 pb-16 overflow-hidden", children: [
    /* @__PURE__ */ jsx(ServicesNav, {}),
    /* @__PURE__ */ jsx("div", { className: "sm:w-[70%]", children: /* @__PURE__ */ jsxs("div", { className: "text-black px-6 pb-16", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-primary sm:text-[3.5rem] pb-0 ", children: "Subsidy & Countervailing Duties" }),
      /* @__PURE__ */ jsx("div", { className: "sm:pr-6 my-10  ", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: "images/subsidy.png",
          className: "overflow-hidden w-full sm:h-[28rem] shadow-xl",
          alt: ""
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "pr-5", children: [
        /* @__PURE__ */ jsx("p", { className: "pb-8 text-black", children: "Countervailing duty is imposed where subsidy is specific and causes material injury to a domestic industry producing a like product or directly competitive product." }),
        /* @__PURE__ */ jsx("p", { className: "pb-8 text-black", children: "A subsidy is considered to exist if the Government or a public body within the territory of an exporting country provides a financial contribution to the manufacturer, producer, exporter, or transporter of any product which has been imported into the domestic market and confers a benefit on the recipient." }),
        /* @__PURE__ */ jsx("p", { className: "pb-8 text-black", children: "A financial contribution is considered to have been granted where a Government practice involves the direct transfer of funds including grants, loans and equity infusionto a specific industry." }),
        /* @__PURE__ */ jsx("p", { className: "pb-8 text-black", children: "The Commission will trigger an investigation when it has sufficient evidence of the existence of the Government or public body's involvement in the provision of financial contribution to a manufacturer, producer, exporter, or transporter of any product, that imposes injury or a threat of material injury to the domestic industry." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "sm:pr-4", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-4xl text-primary", children: "Related Downloads" }),
        /* @__PURE__ */ jsx("i", { children: "Downloadable Legislative Instrument and Questionnaire" }),
        /* @__PURE__ */ jsxs("div", { className: "flex p-5 my-2 transition duration-500 ease-in-out rounded shadow-lg cursor-pointer hover:scale-110 ", children: [
          /* @__PURE__ */ jsx(AiOutlineFilePdf, { className: "w-[4rem] h-[4rem] text-red-700 " }),
          " ",
          /* @__PURE__ */ jsx("span", { className: "pt-6", children: /* @__PURE__ */ jsxs("a", { href: "\\pdfFiles\\resourcesPdfs\\SUBSIDY_AND_COUNTERVAILING_MEASURES_REGULATIONS_2020_PASSED.pdf", target: "_blank", children: [
            " ",
            "SUBSIDY & COUNTERVAILING MEASURES REGULATIONS, 2020 ( L.I 2380 )",
            " "
          ] }) })
        ] })
      ] })
    ] }) })
  ] }) }) });
}
export {
  Service as default
};
