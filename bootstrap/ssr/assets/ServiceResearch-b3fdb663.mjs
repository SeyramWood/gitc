import { j as jsx, a as jsxs } from "../ssr.mjs";
import { W as WebsiteLayout } from "./WebsiteLayout-bb3a7897.mjs";
import { AiOutlineFilePdf, AiOutlineFileWord } from "react-icons/ai";
import { S as ServicesNav } from "./ServicesNav-f691b297.mjs";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/inertia-react";
import "process";
import "http";
import "react";
import "react-icons/sl";
import "./helpers-bf0c6e44.mjs";
import "@n8tb1t/use-scroll-position";
import "react-icons/rx";
function ServiceResarch() {
  return /* @__PURE__ */ jsx(WebsiteLayout, { page: "service", children: /* @__PURE__ */ jsx("div", { className: "bg-white", children: /* @__PURE__ */ jsxs("div", { className: "sm:flex px-4 pt-16 pb-16", children: [
    /* @__PURE__ */ jsx(ServicesNav, {}),
    /* @__PURE__ */ jsx("div", { className: "sm:w-[70%]", children: /* @__PURE__ */ jsxs("div", { className: "text-black px-5", children: [
      /* @__PURE__ */ jsxs("h2", { className: "text-primary text-[4rem] pb-0 ", children: [
        " ",
        "Research"
      ] }),
      /* @__PURE__ */ jsx("div", { className: "my-10 ", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: "/../images/research.png",
          className: "overflow-hidden w-full sm:h-[28rem]",
          alt: ""
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "", children: [
        /* @__PURE__ */ jsx("p", { className: "pb-8", children: "The Ghana International Trade Commission’s (GITC) objective is to ensure fair competition for persons engaged in domestic production and protect the domestic market from the impact of unfair trade practices. To enable the Commission to properly play its role, the GITC Act 926 (2016) mandates the Commission to study, identify, and recommend to the Minister of Trade and Industry tariff levels for specific sectors of the economy with due regard to the effective rate of protection" }),
        /* @__PURE__ */ jsx("p", { className: "pb-8 ", children: "The Commission is also mandated to conduct studies and publish reports on the competitiveness of Ghana’s tariff structure and its impact on local industry. The Minister may give directives to the Commission on matters of policy other than matters under adjudication and the directives shall be consistent with the object of this Act." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "sm:pr-4", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-4xl text-primary", children: "Related Downloads" }),
        /* @__PURE__ */ jsx("i", { children: "Downloadable Legislative Instrument and Questionnaire" }),
        /* @__PURE__ */ jsxs("div", { className: "my-2 shadow-lg p-5 cursor-pointer rounded flex  transition duration-500 ease-in-out hover:scale-110 ", children: [
          /* @__PURE__ */ jsx(AiOutlineFilePdf, { className: "w-[4rem] h-[4rem] text-red-700 " }),
          " ",
          /* @__PURE__ */ jsxs("span", { className: "pt-6", children: [
            " ",
            "GITC ( Anti-Dumping ) Regulations, 2019 ( L.I 2380 )",
            " "
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "my-2 shadow-lg p-5 mb-5 rounded flex cursor-pointer transition duration-500 ease-in-out hover:scale-110 ", children: [
          /* @__PURE__ */ jsx(AiOutlineFileWord, { className: "w-[4rem] h-[4rem] text-blue-700" }),
          " ",
          /* @__PURE__ */ jsxs("span", { className: "pt-6", children: [
            " ",
            "GITC Questionnaire ( Editable )"
          ] })
        ] })
      ] })
    ] }) })
  ] }) }) });
}
export {
  ServiceResarch as default
};
