import { j as jsx, a as jsxs } from "../ssr.mjs";
import { W as WebsiteLayout } from "./WebsiteLayout-bb3a7897.mjs";
import { AiOutlineFilePdf, AiOutlineFileWord } from "react-icons/ai";
import { S as ServicesNav } from "./ServicesNav-f691b297.mjs";
import "@inertiajs/inertia-react";
import "react/jsx-runtime";
import "react-dom/server";
import "process";
import "http";
import "react";
import "react-icons/sl";
import "./helpers-bf0c6e44.mjs";
import "@n8tb1t/use-scroll-position";
import "react-icons/rx";
function ServiceSafeguard() {
  return /* @__PURE__ */ jsx(WebsiteLayout, { page: "service", children: /* @__PURE__ */ jsx("div", { className: "bg-white", children: /* @__PURE__ */ jsxs("div", { className: "sm:flex px-4 pt-16 pb-16", children: [
    /* @__PURE__ */ jsx(ServicesNav, {}),
    /* @__PURE__ */ jsx("div", { className: "sm:w-[70%]", children: /* @__PURE__ */ jsxs("div", { className: "text-black px-6 pb-16", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-primary sm:text-[4rem] pb-0 ", children: "Trade Remedies" }),
      /* @__PURE__ */ jsx("p", { className: "text-xl", children: " Subsidy & Countervailing Duties; Anti-Dumping Duties and Safeguard Measures" }),
      /* @__PURE__ */ jsx("h2", { className: "text-red-500 text-4xl font-bold mt-10", children: "Safeguard Measures" }),
      /* @__PURE__ */ jsx("div", { className: " my-10 ", children: /* @__PURE__ */ jsx("img", { src: "/../images/subsidy.png", className: "overflow-hidden w-full sm:h-[28rem]", alt: "" }) }),
      /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsx("p", { className: "pb-8 text-black", children: "The Commission provides safeguard measures that ensure that domestic producers in Ghana are not adversely affected by the influx of imports.The Commission will consider the volume and rate of the increase in imported productsin absolute and relative terms ; the percentage or share of the domestic market compared and ceded to imported products and changes in the levels of sales, production, productivity, capacity utilization, profits& losses and employment of the domestic industry, indetermining the imposition of safeguard measures . Safeguard measures are not expected to exceed ten years according to the GITC Act 926 of 2016. Anytime a safeguard measure is imposed, Ghana shall notify the Committeeon Safeguards of the World Trade Organization." }) }),
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
  ServiceSafeguard as default
};
