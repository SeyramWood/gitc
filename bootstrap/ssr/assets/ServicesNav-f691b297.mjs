import { a as jsxs, j as jsx } from "../ssr.mjs";
import { Link } from "@inertiajs/inertia-react";
function ServicesNav() {
  return /* @__PURE__ */ jsxs("div", { className: "sm:w-[30%] sm:block hidden pt-4 pb-9 px-9", children: [
    /* @__PURE__ */ jsx("h2", { className: "sm:text-3xl  ", children: "Our Services" }),
    /* @__PURE__ */ jsxs("div", { className: "px-5", children: [
      /* @__PURE__ */ jsx("p", { className: "py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out", children: /* @__PURE__ */ jsx(Link, { href: "/services", children: " Trade Remedies" }) }),
      /* @__PURE__ */ jsx("p", { className: "py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out", children: /* @__PURE__ */ jsx(Link, { href: "/service/dumping", children: "Anti-Dumping Duties" }) }),
      /* @__PURE__ */ jsx("p", { className: "py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out", children: /* @__PURE__ */ jsx(Link, { href: "/service/subsidy", children: "Subsidy and Countervailing Duties " }) }),
      /* @__PURE__ */ jsx("p", { className: "py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out", children: /* @__PURE__ */ jsx(Link, { href: "/service/safeguard", children: "Safeguard Measures " }) }),
      /* @__PURE__ */ jsx("p", { className: "py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out", children: /* @__PURE__ */ jsx(Link, { href: "/service/dispute", children: "Dispute Settlement" }) }),
      /* @__PURE__ */ jsx("p", { className: "py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out", children: /* @__PURE__ */ jsx(Link, { href: "/service/tariff", children: "Tariff Review" }) }),
      /* @__PURE__ */ jsx("p", { className: "py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out", children: /* @__PURE__ */ jsx(Link, { href: "/service/research", children: " Research" }) })
    ] })
  ] });
}
export {
  ServicesNav as S
};
