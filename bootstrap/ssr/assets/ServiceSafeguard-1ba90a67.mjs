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
function ServiceSafeguard() {
  return /* @__PURE__ */ jsxs(WebsiteLayout, { page: "service", children: [
    /* @__PURE__ */ jsx(ServiceLinks, {}),
    /* @__PURE__ */ jsx("div", { className: "bg-white", children: /* @__PURE__ */ jsxs("div", { className: "sm:flex ", children: [
      /* @__PURE__ */ jsx(ServicesNav, {}),
      /* @__PURE__ */ jsx("div", { className: "sm:w-[70%]", children: /* @__PURE__ */ jsxs("div", { className: "text-black", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-primary text-[4rem] pb-0 pt-16", children: "Trade Remedies" }),
        /* @__PURE__ */ jsx("p", { className: "text-xl", children: " Subsidy & Countervailing Duties; Anti-Dumping Duties and Safeguard Measures" }),
        /* @__PURE__ */ jsx("h2", { className: "text-red-500 text-4xl font-bold mt-20", children: "Anti Dumping Duties" }),
        /* @__PURE__ */ jsx("div", { className: "sm:pr-6 my-10 ", children: /* @__PURE__ */ jsx("img", { src: "/../images/dump.jpg", className: "overflow-hidden w-full h-[28rem]", alt: "" }) }),
        /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsx("p", { className: "pb-8 text-black", children: "The Commission provides safeguard measures that ensure that domestic producers in Ghana are not adversely affected by the influx of imports.The Commission will consider the volume and rate of the increase in imported productsin absolute and relative terms ; the percentage or share of the domestic market compared and ceded to imported products and changes in the levels of sales, production, productivity, capacity utilization, profits& losses and employment of the domestic industry, indetermining the imposition of safeguard measures . Safeguard measures are not expected to exceed ten years according to the GITC Act 926 of 2016. Anytime a safeguard measure is imposed, Ghana shall notify the Committeeon Safeguards of the World Trade Organization." }) }),
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
  ServiceSafeguard as default
};
