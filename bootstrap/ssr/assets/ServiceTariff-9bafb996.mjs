import { j as jsx, a as jsxs } from "../ssr.mjs";
import { W as WebsiteLayout } from "./WebsiteLayout-91e8f83b.mjs";
import "react";
import "@inertiajs/inertia-react";
import { S as ServicesNav } from "./ServicesNav-49d9f0c3.mjs";
import "react/jsx-runtime";
import "react-dom/server";
import "process";
import "http";
import "react-icons/sl";
import "./helpers-97f56fd4.mjs";
import "@n8tb1t/use-scroll-position";
import "react-icons/rx";
function ServiceTarrif() {
  return /* @__PURE__ */ jsx(WebsiteLayout, { page: "service", children: /* @__PURE__ */ jsx("div", { className: "bg-white", children: /* @__PURE__ */ jsxs("div", { className: "sm:flex px-4 pt-16 pb-16", children: [
    /* @__PURE__ */ jsx(ServicesNav, {}),
    /* @__PURE__ */ jsx("div", { className: "sm:w-[70%]", children: /* @__PURE__ */ jsxs("div", { className: "text-black px-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-primary text-[4rem] pb-0 ", children: "Tariff Review" }),
      /* @__PURE__ */ jsx("div", { className: " my-10 shadow-xl ", children: /* @__PURE__ */ jsx("img", { src: "/../images/service.jpg", className: "overflow-hidden w-full sm:h-[28rem] shadow-xl", alt: "" }) }),
      /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsx("p", { className: "pb-8 ", children: "The Commission plays a critical role in addressing the tariff competitiveness of Ghana. Sections 34 and 35 of the GITC Act 926 (2016) affords a domestic producer or a representative of the domestic industry or a labor association the opportunity to petition the Commission for a review of tariffs on imported products that are directly competitive with the products produced by the petitioner or that are used by the petitioner as inputs for the production of other products." }) })
    ] }) })
  ] }) }) });
}
export {
  ServiceTarrif as default
};
