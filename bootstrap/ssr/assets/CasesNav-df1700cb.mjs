import { a as jsxs, j as jsx } from "../ssr.mjs";
import { Link } from "@inertiajs/inertia-react";
function CasesNav() {
  return /* @__PURE__ */ jsxs("div", { className: "sm:pr-7", children: [
    /* @__PURE__ */ jsx("h2", { className: "sm:text-3xl ", children: "Legislative Instruments" }),
    /* @__PURE__ */ jsxs("div", { className: "pb-20 sm:pl-3", children: [
      /* @__PURE__ */ jsx("p", { className: "py-3 text-red-500 duration-700 ease-in-out cursor-pointer hover:text-red-500/90 hover:scale-105 teansition", children: /* @__PURE__ */ jsxs(Link, { href: "/anti-dumpingcases ", children: [
        " ",
        "(Anti - Dumping) Regulations, 2019 (L.I 2380)",
        " "
      ] }) }),
      /* @__PURE__ */ jsx("p", { className: "py-3 text-red-500 duration-700 ease-in-out cursor-pointer hover:text-red-500/90 hover:scale-105 teansition", children: /* @__PURE__ */ jsx(Link, { href: "/customscases", children: "(Customs Valuation) (Dispute Settlement) Regulations, 2019 (L.I 2382)" }) }),
      /* @__PURE__ */ jsx("p", { className: "py-3 text-red-500 duration-700 ease-in-out cursor-pointer hover:text-red-500/90 hover:scale-105 teansition", children: /* @__PURE__ */ jsxs(Link, { href: "/subsidycases", children: [
        " ",
        "(Subsidy and Countervailing Measures) Regulations, 2020 (L.I 2425)"
      ] }) }),
      /* @__PURE__ */ jsx("p", { className: "py-3 text-red-500 duration-700 ease-in-out cursor-pointer hover:text-red-500/90 hover:scale-105 teansition", children: /* @__PURE__ */ jsxs(Link, { href: "/safeguardscases", children: [
        "(Safeguards Measures) Regulations, 2020 (L.I 2426)",
        " "
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "px-2 text-center w-[50%] border rounded bg-green-100/20 ", children: [
      /* @__PURE__ */ jsx("h2", { className: "border-b  font-", children: "Filter By Year" }),
      /* @__PURE__ */ jsxs("div", { className: "", children: [
        /* @__PURE__ */ jsx("p", { className: "pb-1 text-red-500 duration-700 ease-in-out border-b cursor-pointer hover:text-red-500/90 hover:scale-105 teansition", children: /* @__PURE__ */ jsx(Link, { href: "", children: "2019 " }) }),
        /* @__PURE__ */ jsx("p", { className: "py-1 text-red-500 duration-700 ease-in-out border-b cursor-pointer hover:text-red-500/90 hover:scale-105 teansition", children: /* @__PURE__ */ jsx(Link, { href: "", children: "2020" }) }),
        /* @__PURE__ */ jsx("p", { className: "py-1 text-red-500 duration-700 ease-in-out border-b cursor-pointer hover:text-red-500/90 hover:scale-105 teansition", children: /* @__PURE__ */ jsx(Link, { href: "", children: "2021" }) }),
        /* @__PURE__ */ jsx("p", { className: "py-1 text-red-500 duration-700 ease-in-out border-b cursor-pointer hover:text-red-500/90 hover:scale-105 teansition", children: /* @__PURE__ */ jsx(Link, { href: "", children: " 2022" }) }),
        /* @__PURE__ */ jsx("p", { className: "py-1 text-red-500 duration-700 ease-in-out border-b cursor-pointer hover:text-red-500/90 hover:scale-105 teansition", children: /* @__PURE__ */ jsx(Link, { href: "", children: " 2023" }) })
      ] })
    ] })
  ] });
}
export {
  CasesNav as C
};
