import { j as jsx, a as jsxs } from "../ssr.mjs";
import { W as WebsiteLayout } from "./WebsiteLayout-197e9d3a.mjs";
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
function ServiceResarch() {
  return /* @__PURE__ */ jsx(WebsiteLayout, { page: "service", children: /* @__PURE__ */ jsx("div", { className: "bg-white", children: /* @__PURE__ */ jsxs("div", { className: "sm:flex px-4 pt-16 pb-16", children: [
    /* @__PURE__ */ jsx(ServicesNav, {}),
    /* @__PURE__ */ jsx("div", { className: "sm:w-[70%]", children: /* @__PURE__ */ jsxs("div", { className: "text-black px-5", children: [
      /* @__PURE__ */ jsxs("h2", { className: "text-primary text-[4rem] pb-0 ", children: [
        " ",
        "Research"
      ] }),
      /* @__PURE__ */ jsx("div", { className: "my-10 shadow-xl ", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: "/../images/research.png",
          className: "overflow-hidden w-full sm:h-[28rem] shadow-xl",
          alt: ""
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "", children: [
        /* @__PURE__ */ jsx("p", { className: "pb-8", children: "The Ghana International Trade Commission’s (GITC) objective is to ensure fair competition for persons engaged in domestic production and protect the domestic market from the impact of unfair trade practices; the GITC Act 926 (2016) mandated the Commission to study, identify, and recommend to the Minister tariff levels for specific sectors of the economy with due regard to the effective rate of protection." }),
        /* @__PURE__ */ jsx("p", { className: "pb-8 ", children: "The Commission is also mandated to conduct studies and publish reports on Ghana’s tariff structure's competitiveness and impact. The Minister may give directives to the Commission on matters of policy other than matters under adjudication, and the directives shall be consistent with the object of this Act." })
      ] })
    ] }) })
  ] }) }) });
}
export {
  ServiceResarch as default
};
