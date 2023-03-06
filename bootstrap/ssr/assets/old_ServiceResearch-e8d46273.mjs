import { j as jsx, a as jsxs } from "../ssr.mjs";
import "react";
import { W as WebsiteLayout } from "./WebsiteLayout-e1c37850.mjs";
import { SlCallIn, SlEnvelopeOpen, SlLocationPin } from "react-icons/sl";
import { Link } from "@inertiajs/inertia-react";
import { H as HeadingSecondary, P as Paragraph } from "./HeadingSecondary-7080f354.mjs";
import "react/jsx-runtime";
import "react-dom/server";
import "process";
import "http";
import "@n8tb1t/use-scroll-position";
import "react-icons/rx";
const ServiceResearch = () => {
  return /* @__PURE__ */ jsx(WebsiteLayout, { page: "service", children: /* @__PURE__ */ jsxs("div", { className: "bg-white text-black", children: [
    /* @__PURE__ */ jsx("div", { className: "bg-gray-300  p-3", children: /* @__PURE__ */ jsx("span", { children: "GITC . Our Services . Research" }) }),
    /* @__PURE__ */ jsx("div", { className: "hero min-h-screen bg-accent-content", children: /* @__PURE__ */ jsxs("div", { className: "hero-content flex-col md:flex-row-reverse", children: [
      /* @__PURE__ */ jsxs("div", { className: "  max-h-4xl mt-20", children: [
        /* @__PURE__ */ jsx(HeadingSecondary, { children: "Research" }),
        /* @__PURE__ */ jsx("img", { className: "w-screen", src: "/images/research.png", alt: "Album" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "card h-46  text-dark  w-full shadow-2sm bg-white  ", children: /* @__PURE__ */ jsxs("div", { className: "card-body", children: [
        /* @__PURE__ */ jsx(HeadingSecondary, { children: "Our Services" }),
        /* @__PURE__ */ jsx(Paragraph, { children: /* @__PURE__ */ jsx(Link, { href: "/service/dumping", children: "Anti - Dumping Duties" }) }),
        /* @__PURE__ */ jsx(Paragraph, { children: /* @__PURE__ */ jsx(Link, { href: "/service/subsidy", children: "Subsidy and Countervailing Duties" }) }),
        /* @__PURE__ */ jsx(Paragraph, { children: /* @__PURE__ */ jsx(Link, { href: "/service/safeguard", children: "Safeguards Measures" }) }),
        /* @__PURE__ */ jsx(Paragraph, { children: /* @__PURE__ */ jsx(Link, { href: "/service/dispute", children: "Dispute Settlement" }) }),
        /* @__PURE__ */ jsx(Paragraph, { children: /* @__PURE__ */ jsx(Link, { href: "/service", children: " Tariff Review" }) }),
        /* @__PURE__ */ jsx(Paragraph, { children: /* @__PURE__ */ jsx(Link, { href: "/service/research", children: "Research" }) })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "hero min-h-screen bg-accent-content", children: /* @__PURE__ */ jsxs("div", { className: "hero-content flex-col lg:flex-row-reverse", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center lg:text-left", children: [
        /* @__PURE__ */ jsx("p", { className: "py-6 tracking-normal text-xl", children: "The Ghana International Trade Commission’s (GITC) objective is to ensure fair competition for persons engaged in domestic production and protect the domestic market from the impact of unfair trade practices. To enable the Commission to properly play its role, the GITC Act 926 (2016) mandates the Commission to study, identify, and recommend to the Minister of Trade and Industry tariff levels for specific sectors of the economy with due regard to the effective rate of protection" }),
        /* @__PURE__ */ jsx("p", { className: "py-6 tracking-normal text-xl", children: "The Commission is also mandated to conduct studies and publish reports on the competitiveness of Ghana’s tariff structure and its impact on local industry. The Minister may give directives to the Commission on matters of policy other than matters under adjudication and the directives shall be consistent with the object of this Act." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "card  text-dark flex-shrink-0 w-full max-w-sm shadow-2xl bg-white border-solid border-2 border-sky-500 ", children: /* @__PURE__ */ jsxs("div", { className: "card-body", children: [
        /* @__PURE__ */ jsx(HeadingSecondary, { children: "Contact Us" }),
        /* @__PURE__ */ jsx(Paragraph, { children: /* @__PURE__ */ jsxs("span", { className: " flex ", children: [
          /* @__PURE__ */ jsxs("span", { className: "text-rose-700", children: [
            " ",
            /* @__PURE__ */ jsx(SlCallIn, {}),
            " "
          ] }),
          /* @__PURE__ */ jsx("span", { className: "ml-4", children: " +233 030 296 0298" })
        ] }) }),
        /* @__PURE__ */ jsx(Paragraph, { children: /* @__PURE__ */ jsxs("span", { className: " flex ", children: [
          /* @__PURE__ */ jsxs("span", { className: "text-rose-700", children: [
            " ",
            /* @__PURE__ */ jsx(SlEnvelopeOpen, {}),
            " "
          ] }),
          /* @__PURE__ */ jsx("span", { className: "ml-4", children: "info@gitc.gov.gh" })
        ] }) }),
        /* @__PURE__ */ jsx(Paragraph, { children: /* @__PURE__ */ jsxs("span", { className: " flex ", children: [
          /* @__PURE__ */ jsxs("span", { className: "text-rose-700", children: [
            " ",
            /* @__PURE__ */ jsx(SlLocationPin, {}),
            " "
          ] }),
          /* @__PURE__ */ jsx("span", { className: "ml-4", children: "GL-040-2630" })
        ] }) })
      ] }) })
    ] }) })
  ] }) });
};
export {
  ServiceResearch as default
};
