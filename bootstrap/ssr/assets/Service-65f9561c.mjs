import { j as jsx, a as jsxs } from "../ssr.mjs";
import { Link } from "@inertiajs/inertia-react";
import "react";
import { SlCallIn, SlEnvelopeOpen, SlLocationPin } from "react-icons/sl";
import { W as WebsiteLayout } from "./WebsiteLayout-d376d318.mjs";
import { H as HeadingSecondary } from "./HeadingSecondary-b4f9f193.mjs";
import { P as Paragraph } from "./Paragraph-8ec8d723.mjs";
import "react/jsx-runtime";
import "react-dom/server";
import "process";
import "http";
import "react-multi-carousel";
import "@n8tb1t/use-scroll-position";
import "react-icons/rx";
const Service = () => {
  return /* @__PURE__ */ jsx(WebsiteLayout, { page: "service", children: /* @__PURE__ */ jsxs("div", { className: "text-black bg-white", children: [
    /* @__PURE__ */ jsx("div", { className: "p-3 bg-gray-300", children: /* @__PURE__ */ jsx("span", { children: "GITC . Our Services " }) }),
    /* @__PURE__ */ jsx("div", { className: "min-h-screen hero bg-accent-content", children: /* @__PURE__ */ jsxs("div", { className: "flex-col hero-content xl:flex-row-reverse", children: [
      /* @__PURE__ */ jsxs("div", { className: "w-11/12 ", children: [
        /* @__PURE__ */ jsx(HeadingSecondary, { children: "Tariff Review" }),
        /* @__PURE__ */ jsx(
          "img",
          {
            className: "w-screen",
            src: "/images/service.jpg",
            alt: "Album"
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 w-full max-w-sm bg-white card text-dark ", children: /* @__PURE__ */ jsxs("div", { className: "card-body", children: [
        /* @__PURE__ */ jsx(HeadingSecondary, { children: "Our Services" }),
        /* @__PURE__ */ jsx(Paragraph, { children: /* @__PURE__ */ jsx(Link, { href: "/service/dumping", children: "Anti - Dumping Duties" }) }),
        /* @__PURE__ */ jsx(Paragraph, { children: /* @__PURE__ */ jsx(Link, { href: "/service/subsidy", children: "Subsidy and Countervailing Duties" }) }),
        /* @__PURE__ */ jsx(Paragraph, { children: /* @__PURE__ */ jsx(Link, { href: "/service/safeguard", children: "Safeguards Measures" }) }),
        /* @__PURE__ */ jsx(Paragraph, { children: /* @__PURE__ */ jsx(Link, { href: "/service/dispute", children: "Dispute Settlement" }) }),
        /* @__PURE__ */ jsx(Paragraph, { children: /* @__PURE__ */ jsx(Link, { href: "/service", children: " Tariff Review" }) }),
        /* @__PURE__ */ jsx(Paragraph, { children: /* @__PURE__ */ jsx(Link, { href: "/service/research", children: "Research" }) })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "min-h-screen hero bg-accent-content", children: /* @__PURE__ */ jsxs("div", { className: "flex-col hero-content lg:flex-row-reverse", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center lg:text-left", children: [
        /* @__PURE__ */ jsx("p", { className: "py-6 text-xl tracking-normal", children: "The Ghana International Trade Commission (GITC) play sacritical role in addressing the tariff competitiveness of Ghana. Sections 34 and 35 of the GITC Act 926 (2016) state that a domestic producer or are presentative of the domestic industry or a labour association may submit a petition in writing to the Commission for are view of customs duty that affects the production and competitiveness of goods in relation to the domestic producer or domestic industry and the grant of a customs duty rebate or draw backs as to enhanceits competitiveness. ." }),
        /* @__PURE__ */ jsx("p", { className: "py-6 text-xl tracking-normal", children: "The product to be subjected to tariff review shall be imported and either like or directly competitive or substitutable to the products produced by the applicant or that are used by the applicant as inputs for the production of other products. The commission shall require the petitioner or an interested party to provide information that relates to the substance of the petition and provide a report which set soutthebas is for the decision of the Commission to reject or acceptapetition ." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 w-full max-w-sm bg-white border-2 border-solid shadow-2xl card text-dark border-sky-500 ", children: /* @__PURE__ */ jsxs("div", { className: "card-body", children: [
        /* @__PURE__ */ jsx(HeadingSecondary, { children: "Contact Us" }),
        /* @__PURE__ */ jsx(Paragraph, { children: /* @__PURE__ */ jsxs("span", { className: "flex ", children: [
          /* @__PURE__ */ jsxs("span", { className: "text-rose-700", children: [
            " ",
            /* @__PURE__ */ jsx(SlCallIn, {}),
            " "
          ] }),
          /* @__PURE__ */ jsxs("span", { className: "ml-4", children: [
            " ",
            "+233 030 296 0298"
          ] })
        ] }) }),
        /* @__PURE__ */ jsx(Paragraph, { children: /* @__PURE__ */ jsxs("span", { className: "flex ", children: [
          /* @__PURE__ */ jsxs("span", { className: "text-rose-700", children: [
            " ",
            /* @__PURE__ */ jsx(SlEnvelopeOpen, {}),
            " "
          ] }),
          /* @__PURE__ */ jsx("span", { className: "ml-4", children: "info@gitc.gov.gh" })
        ] }) }),
        /* @__PURE__ */ jsx(Paragraph, { children: /* @__PURE__ */ jsxs("span", { className: "flex ", children: [
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
  Service as default
};
