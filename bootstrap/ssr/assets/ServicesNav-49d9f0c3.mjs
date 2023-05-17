import { a as jsxs, j as jsx } from "../ssr.mjs";
import { Link } from "@inertiajs/inertia-react";
function ServicesNav() {
  const urlPath = window.location.pathname;
  console.log(urlPath);
  return /* @__PURE__ */ jsxs("div", { className: "sm:w-[30%] sm:block hidden pt-4 pb-9 px-9", children: [
    /* @__PURE__ */ jsx("h2", { className: "sm:text-3xl font-bold ", children: "Our Services" }),
    /* @__PURE__ */ jsxs("div", { className: "px-5", children: [
      /* @__PURE__ */ jsx("ul", { style: { listStyleType: "square" } }),
      urlPath === "/services" ? /* @__PURE__ */ jsxs("ul", { style: { listStyleType: "square" }, className: "", children: [
        /* @__PURE__ */ jsx("li", { className: "py-3 text-red-600 font-bold hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out", children: /* @__PURE__ */ jsx(Link, { href: "/services", children: " Trade Remedies" }) }),
        /* @__PURE__ */ jsxs("div", { className: "pl-4", children: [
          /* @__PURE__ */ jsx("li", { className: "py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out", children: /* @__PURE__ */ jsx(Link, { href: "/service/dumping", children: "Anti-Dumping Duties" }) }),
          /* @__PURE__ */ jsx("li", { className: "py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out", children: /* @__PURE__ */ jsx(Link, { href: "/service/subsidy", children: "Subsidy and Countervailing Duties " }) }),
          /* @__PURE__ */ jsx("li", { className: "py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out", children: /* @__PURE__ */ jsx(Link, { href: "/service/safeguard", children: "Safeguard Measures " }) })
        ] }),
        /* @__PURE__ */ jsx("li", { className: "py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out", children: /* @__PURE__ */ jsx(Link, { href: "/service/dispute", children: "Dispute Settlement" }) }),
        /* @__PURE__ */ jsx("li", { className: "py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out", children: /* @__PURE__ */ jsx(Link, { href: "/service/tariff", children: "Tariff Review" }) }),
        /* @__PURE__ */ jsx("li", { className: "py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out", children: /* @__PURE__ */ jsx(Link, { href: "/service/research", children: " Research" }) })
      ] }) : urlPath === "/service/dumping" ? /* @__PURE__ */ jsxs("ul", { style: { listStyleType: "square" }, className: "", children: [
        /* @__PURE__ */ jsx("li", { className: "py-3 text-red-600 font-bold  hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out", children: /* @__PURE__ */ jsx(Link, { href: "/services", children: " Trade Remedies" }) }),
        /* @__PURE__ */ jsxs("div", { className: "pl-4", children: [
          /* @__PURE__ */ jsx("li", { className: "py-3  text-red-600 font-bold hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out", children: /* @__PURE__ */ jsx(Link, { href: "/service/dumping", children: "Anti-Dumping Duties" }) }),
          /* @__PURE__ */ jsx("li", { className: "py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out", children: /* @__PURE__ */ jsx(Link, { href: "/service/subsidy", children: "Subsidy and Countervailing Duties " }) }),
          /* @__PURE__ */ jsx("li", { className: "py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out", children: /* @__PURE__ */ jsx(Link, { href: "/service/safeguard", children: "Safeguard Measures " }) })
        ] }),
        /* @__PURE__ */ jsx("li", { className: "py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out", children: /* @__PURE__ */ jsx(Link, { href: "/service/dispute", children: "Dispute Settlement" }) }),
        /* @__PURE__ */ jsx("li", { className: "py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out", children: /* @__PURE__ */ jsx(Link, { href: "/service/tariff", children: "Tariff Review" }) }),
        /* @__PURE__ */ jsx("li", { className: "py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out", children: /* @__PURE__ */ jsx(Link, { href: "/service/research", children: " Research" }) })
      ] }) : urlPath === "/service/subsidy" ? /* @__PURE__ */ jsxs("ul", { style: { listStyleType: "square" }, className: "", children: [
        /* @__PURE__ */ jsx("li", { className: "py-3  text-red-600 font-bold hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out", children: /* @__PURE__ */ jsx(Link, { href: "/services", children: " Trade Remedies" }) }),
        /* @__PURE__ */ jsxs("div", { className: "pl-4", children: [
          /* @__PURE__ */ jsx("li", { className: "py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out", children: /* @__PURE__ */ jsx(Link, { href: "/service/dumping", children: "Anti-Dumping Duties" }) }),
          /* @__PURE__ */ jsx("li", { className: "py-3  text-red-600 font-bold hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out", children: /* @__PURE__ */ jsx(Link, { href: "/service/subsidy", children: "Subsidy and Countervailing Duties " }) }),
          /* @__PURE__ */ jsx("li", { className: "py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out", children: /* @__PURE__ */ jsx(Link, { href: "/service/safeguard", children: "Safeguard Measures " }) })
        ] }),
        /* @__PURE__ */ jsx("li", { className: "py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out", children: /* @__PURE__ */ jsx(Link, { href: "/service/dispute", children: "Dispute Settlement" }) }),
        /* @__PURE__ */ jsx("li", { className: "py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out", children: /* @__PURE__ */ jsx(Link, { href: "/service/tariff", children: "Tariff Review" }) }),
        /* @__PURE__ */ jsx("li", { className: "py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out", children: /* @__PURE__ */ jsx(Link, { href: "/service/research", children: " Research" }) })
      ] }) : urlPath === "/service/safeguard" ? /* @__PURE__ */ jsxs("ul", { style: { listStyleType: "square" }, className: "", children: [
        /* @__PURE__ */ jsx("p", { className: "py-3  text-red-600 font-bold hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out", children: /* @__PURE__ */ jsx(Link, { href: "/services", children: " Trade Remedies" }) }),
        /* @__PURE__ */ jsxs("div", { className: "pl-4", children: [
          /* @__PURE__ */ jsx("li", { className: "py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out", children: /* @__PURE__ */ jsx(Link, { href: "/service/dumping", children: "Anti-Dumping Duties" }) }),
          /* @__PURE__ */ jsx("li", { className: "py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out", children: /* @__PURE__ */ jsx(Link, { href: "/service/subsidy", children: "Subsidy and Countervailing Duties " }) }),
          /* @__PURE__ */ jsx("li", { className: "py-3  text-red-600 font-bold hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out", children: /* @__PURE__ */ jsx(Link, { href: "/service/safeguard", children: "Safeguard Measures " }) })
        ] }),
        /* @__PURE__ */ jsx("li", { className: "py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out", children: /* @__PURE__ */ jsx(Link, { href: "/service/dispute", children: "Dispute Settlement" }) }),
        /* @__PURE__ */ jsx("li", { className: "py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out", children: /* @__PURE__ */ jsx(Link, { href: "/service/tariff", children: "Tariff Review" }) }),
        /* @__PURE__ */ jsx("li", { className: "py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out", children: /* @__PURE__ */ jsx(Link, { href: "/service/research", children: " Research" }) })
      ] }) : urlPath === "/service/dispute" ? /* @__PURE__ */ jsxs("ul", { style: { listStyleType: "square" }, className: "", children: [
        /* @__PURE__ */ jsx("li", { className: "py-3 text-red-500  hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out", children: /* @__PURE__ */ jsx(Link, { href: "/services", children: " Trade Remedies" }) }),
        /* @__PURE__ */ jsxs("div", { className: "pl-4", children: [
          /* @__PURE__ */ jsx("li", { className: "py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out", children: /* @__PURE__ */ jsx(Link, { href: "/service/dumping", children: "Anti-Dumping Duties" }) }),
          /* @__PURE__ */ jsx("li", { className: "py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out", children: /* @__PURE__ */ jsx(Link, { href: "/service/subsidy", children: "Subsidy and Countervailing Duties " }) }),
          /* @__PURE__ */ jsx("li", { className: "py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out", children: /* @__PURE__ */ jsx(Link, { href: "/service/safeguard", children: "Safeguard Measures " }) })
        ] }),
        /* @__PURE__ */ jsx("li", { className: "py-3  text-red-600 font-bold hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out", children: /* @__PURE__ */ jsx(Link, { href: "/service/dispute", children: "Dispute Settlement" }) }),
        /* @__PURE__ */ jsx("li", { className: "py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out", children: /* @__PURE__ */ jsx(Link, { href: "/service/tariff", children: "Tariff Review" }) }),
        /* @__PURE__ */ jsx("li", { className: "py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out", children: /* @__PURE__ */ jsx(Link, { href: "/service/research", children: " Research" }) })
      ] }) : urlPath === "/service/tariff" ? /* @__PURE__ */ jsxs("ul", { style: { listStyleType: "square" }, className: "", children: [
        /* @__PURE__ */ jsx("li", { className: "py-3 text-red-500  hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out", children: /* @__PURE__ */ jsx(Link, { href: "/services", children: " Trade Remedies" }) }),
        /* @__PURE__ */ jsxs("div", { className: "pl-4", children: [
          /* @__PURE__ */ jsx("li", { className: "py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out", children: /* @__PURE__ */ jsx(Link, { href: "/service/dumping", children: "Anti-Dumping Duties" }) }),
          /* @__PURE__ */ jsx("li", { className: "py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out", children: /* @__PURE__ */ jsx(Link, { href: "/service/subsidy", children: "Subsidy and Countervailing Duties " }) }),
          /* @__PURE__ */ jsx("li", { className: "py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out", children: /* @__PURE__ */ jsx(Link, { href: "/service/safeguard", children: "Safeguard Measures " }) })
        ] }),
        /* @__PURE__ */ jsx("li", { className: "py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out", children: /* @__PURE__ */ jsx(Link, { href: "/service/dispute", children: "Dispute Settlement" }) }),
        /* @__PURE__ */ jsx("li", { className: "py-3  text-red-600 font-bold hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out", children: /* @__PURE__ */ jsx(Link, { href: "/service/tariff", children: "Tariff Review" }) }),
        /* @__PURE__ */ jsx("li", { className: "py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out", children: /* @__PURE__ */ jsx(Link, { href: "/service/research", children: " Research" }) })
      ] }) : urlPath === "/service/research" ? /* @__PURE__ */ jsxs("ul", { style: { listStyleType: "square" }, className: "", children: [
        /* @__PURE__ */ jsx("li", { className: "py-3 text-red-500  hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out", children: /* @__PURE__ */ jsx(Link, { href: "/services", children: " Trade Remedies" }) }),
        /* @__PURE__ */ jsxs("div", { className: "pl-4", children: [
          /* @__PURE__ */ jsx("li", { className: "py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out", children: /* @__PURE__ */ jsx(Link, { href: "/service/dumping", children: "Anti-Dumping Duties" }) }),
          /* @__PURE__ */ jsx("li", { className: "py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out", children: /* @__PURE__ */ jsx(Link, { href: "/service/subsidy", children: "Subsidy and Countervailing Duties " }) }),
          /* @__PURE__ */ jsx("li", { className: "py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out", children: /* @__PURE__ */ jsx(Link, { href: "/service/safeguard", children: "Safeguard Measures " }) })
        ] }),
        /* @__PURE__ */ jsx("li", { className: "py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out", children: /* @__PURE__ */ jsx(Link, { href: "/service/dispute", children: "Dispute Settlement" }) }),
        /* @__PURE__ */ jsx("li", { className: "py-3 text-red-500 hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out", children: /* @__PURE__ */ jsx(Link, { href: "/service/tariff", children: "Tariff Review" }) }),
        /* @__PURE__ */ jsx("li", { className: "py-3 text-red-600 font-bold hover:text-red-500/90 cursor-pointer hover:scale-110 teansition duration-700 ease-in-out", children: /* @__PURE__ */ jsx(Link, { href: "/service/research", children: " Research" }) })
      ] }) : ""
    ] })
  ] });
}
export {
  ServicesNav as S
};
