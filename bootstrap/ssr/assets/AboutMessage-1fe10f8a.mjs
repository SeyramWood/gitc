import { j as jsx, a as jsxs } from "../ssr.mjs";
import { W as WebsiteLayout } from "./WebsiteLayout-d376d318.mjs";
import { H as HeadingPrimary } from "./HeadingPrimary-ed13ec4f.mjs";
import { P as Paragraph } from "./Paragraph-8ec8d723.mjs";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/inertia-react";
import "process";
import "http";
import "react";
import "react-icons/sl";
import "react-multi-carousel";
import "@n8tb1t/use-scroll-position";
import "react-icons/rx";
const AboutMessage = () => {
  return /* @__PURE__ */ jsx(WebsiteLayout, { page: "message", className: "bg-white", children: /* @__PURE__ */ jsx("div", { className: "bg-white", children: /* @__PURE__ */ jsxs("div", { className: "my-20 bg-slate-100 px-10", children: [
    /* @__PURE__ */ jsx(HeadingPrimary, { className: "text-black text-left py-8", children: "Top Message" }),
    /* @__PURE__ */ jsxs("div", { className: "", children: [
      /* @__PURE__ */ jsxs("div", { className: "float-right sm:w-[30%] sm:h-[70%] sm:mx-4 sm:mb-4", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: "images/index/agyekum.jpg",
            className: "object-fit ",
            alt: "img"
          }
        ),
        /* @__PURE__ */ jsx(Paragraph, { className: "text-primary font-bold text-[1.6rem] mt-4", children: "Frank Agyekum" }),
        /* @__PURE__ */ jsx(Paragraph, { children: "Executive Secretary" })
      ] }),
      /* @__PURE__ */ jsx(Paragraph, { className: "mb-8", children: "The bane of development in developing countries as against developed countries is the lack of industrialization in the former. The inability of developing countries to industrialize to an appreciable level, however, is not so much for the want of trying, as to the prevalence, among others, of unfair trade practices by competing companies from developed countries." }),
      /* @__PURE__ */ jsx(Paragraph, { className: "mb-8", children: "Even as many countries in the developing world ascribe to the tenets of free trade and therefore are willing to engage on equal terms, they are constantly undermined by trade practices by manufacturers from the developed world dealing in like products which go against WTO standards." }),
      /* @__PURE__ */ jsx(Paragraph, { className: "mb-8", children: "Such unfair trade practices, include dumping – where the export price of the product is lower than the domestic price in the ordinary course of trade for the like products; subsidies – where a government provides a financial contribution that confers a benefit on a particular companies, sectors, producers in specified parts of its territory or targets goods for exports; import surge - unforeseen increased imports that result in serious harm to a domestic industry" }),
      /* @__PURE__ */ jsx(Paragraph, { className: "mb-8", children: "Free trade, however, does not mean unfair trade and so for each of these unfair trade practices, the World Trade Organization (WTO) has given remedies in the way of anti-dumping duties, subsidies and countervailing measures, and safeguards measures respectively." }),
      /* @__PURE__ */ jsx(Paragraph, { className: "mb-8", children: "In all its member-states, the WTO encourages the setting up of remedy institutions, such as the Ghana International Trade Commission to help companies deal with the menace of unfair trade practices which are inimical to their growth." }),
      /* @__PURE__ */ jsx(Paragraph, { className: "mb-8", children: "GITC has come at an opportune time for Ghana as the establishment of AfCFTA, with its headquarters in Accra, would enable the country to effectively fight the anticipated high increase in unfair trade practices as the country is poised to become the hub of trading in Africa." })
    ] })
  ] }) }) });
};
export {
  AboutMessage as default
};
