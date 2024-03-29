import { j as jsx, a as jsxs } from "../ssr.mjs";
import { W as WebsiteLayout } from "./WebsiteLayout-197e9d3a.mjs";
import { AiOutlineFilePdf } from "react-icons/ai";
import { S as ServicesNav } from "./ServicesNav-49d9f0c3.mjs";
import "@inertiajs/inertia-react";
import "react/jsx-runtime";
import "react-dom/server";
import "process";
import "http";
import "react";
import "react-icons/sl";
import "./helpers-97f56fd4.mjs";
import "@n8tb1t/use-scroll-position";
import "react-icons/rx";
function ServiceSafeguard() {
  return /* @__PURE__ */ jsx(WebsiteLayout, { page: "service", children: /* @__PURE__ */ jsx("div", { className: "bg-white", children: /* @__PURE__ */ jsxs("div", { className: "sm:flex px-4 pt-16 pb-16", children: [
    /* @__PURE__ */ jsx(ServicesNav, {}),
    /* @__PURE__ */ jsx("div", { className: "sm:w-[70%]", children: /* @__PURE__ */ jsxs("div", { className: "text-black px-6 pb-16", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-primary sm:text-[4rem] pb-0 ", children: "Safeguard Measures" }),
      /* @__PURE__ */ jsx("div", { className: " my-10 shadow-xl", children: /* @__PURE__ */ jsx("img", { src: "/../images/subsidy.png", className: "overflow-hidden w-full sm:h-[28rem] shadow-xl", alt: "" }) }),
      /* @__PURE__ */ jsxs("div", { className: "", children: [
        /* @__PURE__ */ jsx("p", { className: "pb-8 text-black", children: "The Commission provides safeguard measures that ensure domestic producers in Ghana are not adversely affected by the sudden, sharp, and significant influx of imports." }),
        /* @__PURE__ */ jsx("p", { className: "pb-8 text-black", children: "The Commission will consider the volume and rate of the increase in imported products in absolute and relative terms; the percentage or share of the domestic market compared and ceded to imported products and changes in the levels of sales, production, productivity, capacity utilization, profits & losses, and employment of the domestic industry, in determining the imposition of safeguard measures." }),
        /* @__PURE__ */ jsx("p", { className: "pb-8 text-black", children: "Safeguard measures are reviewed periodically but are not expected to exceed ten years according to the GITC Act 926 of 2016. Anytime a safeguard measure is imposed, Ghana shall notify the Committee on Safeguards of the World Trade Organization." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "sm:pr-4", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-4xl text-primary", children: "Related Downloads" }),
        /* @__PURE__ */ jsx("i", { children: "Downloadable Legislative Instrument " }),
        /* @__PURE__ */ jsxs("div", { className: "my-2 shadow-lg p-5 cursor-pointer rounded flex  transition duration-500 ease-in-out hover:scale-110 ", children: [
          /* @__PURE__ */ jsx(AiOutlineFilePdf, { className: "w-[4rem] h-[4rem] text-red-700 " }),
          " ",
          /* @__PURE__ */ jsx("span", { className: "pt-6", children: /* @__PURE__ */ jsx("a", { className: "font-bold", href: "\\pdfFiles\\resourcesPdfs\\GITC_SAFEGUARD_MEASURES_REGULATIONS_2020_YET_TO_BE_PASSED.pdf", target: "_blank", children: "GITC (Safeguards Measures) Regulations, 2020 (L.I 2426)" }) })
        ] })
      ] })
    ] }) })
  ] }) }) });
}
export {
  ServiceSafeguard as default
};
