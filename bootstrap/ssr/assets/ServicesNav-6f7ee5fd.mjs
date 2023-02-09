import { j as jsx, a as jsxs } from "../ssr.mjs";
import { Link } from "@inertiajs/inertia-react";
function ServiceLinks() {
  return /* @__PURE__ */ jsx("div", { className: "sm:p-8 bg-faded", children: /* @__PURE__ */ jsxs("div", { className: "sm:pl-12  sm:text-[1.1rem]", children: [
    /* @__PURE__ */ jsxs("span", { className: "sm:px-5 text-md text-primary  hover:underline", children: [
      /* @__PURE__ */ jsx(Link, { href: "/", children: "GITC " }),
      "  "
    ] }),
    /* @__PURE__ */ jsxs("span", { className: "sm:px-5 text-md text-primary hover:underline ", children: [
      " ",
      /* @__PURE__ */ jsx(Link, { href: "/services", children: "Our Services   " })
    ] }),
    /* @__PURE__ */ jsxs("span", { className: "sm:px-5 text-md text-primary hover:underline", children: [
      " ",
      /* @__PURE__ */ jsx(Link, { href: "/service/subsidy", children: "Trade Remedies  " }),
      " "
    ] }),
    /* @__PURE__ */ jsxs("span", { className: "sm:px-5 text-md text-primary hover:underline", children: [
      " ",
      /* @__PURE__ */ jsx(Link, { href: "/service/dumpin", children: "AntiDumping Duties " }),
      "  "
    ] })
  ] }) });
}
function ServicesNav() {
  return /* @__PURE__ */ jsxs("div", { className: "sm:w-[30%] sm:block hidden p-9", children: [
    /* @__PURE__ */ jsx("h2", { className: "sm:text-3xl  ", children: "Our Services" }),
    /* @__PURE__ */ jsxs("div", { className: "px-5", children: [
      /* @__PURE__ */ jsx("p", { className: "py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out", children: /* @__PURE__ */ jsx(Link, { href: "/services", children: " Trade Remedies" }) }),
      /* @__PURE__ */ jsx("p", { className: "py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out", children: /* @__PURE__ */ jsx(Link, { href: "/service/dumping", children: "Anti-Dumping Duties" }) }),
      /* @__PURE__ */ jsx("p", { className: "py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out", children: /* @__PURE__ */ jsx(Link, { href: "/service/subsidy", children: "Subsidy and Countervailing Duties " }) }),
      /* @__PURE__ */ jsx("p", { className: "py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out", children: /* @__PURE__ */ jsx(Link, { href: "/service/safeguard", children: "Safeguard Measures " }) })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "py-3 text-red-700 hover:text-red-700/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out", children: /* @__PURE__ */ jsx(Link, { href: "/service/dispute", children: "Dispute Settlement" }) }),
    /* @__PURE__ */ jsx("p", { className: "py-3 text-red-700 hover:text-red-700/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out", children: /* @__PURE__ */ jsx(Link, { href: "/service/research", children: " Research" }) })
  ] });
}
export {
  ServiceLinks as S,
  ServicesNav as a
};
