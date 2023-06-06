import { j as jsx, a as jsxs } from "../ssr.mjs";
import "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { getFilePlugin } from "@react-pdf-viewer/get-file";
import { pageNavigationPlugin } from "@react-pdf-viewer/page-navigation";
import { useState } from "react";
import { AiOutlineFilePdf } from "react-icons/ai";
import "react-responsive-modal";
import { W as WebsiteLayout } from "./WebsiteLayout-a292da02.mjs";
/* empty css                  */import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/inertia-react";
import "process";
import "http";
import "react-icons/sl";
import "./helpers-97f56fd4.mjs";
import "@n8tb1t/use-scroll-position";
import "react-icons/rx";
const data = [
  {
    id: "1",
    name: "GITC (Customs Valuation) (Dispute Settlement) Regulations, 2019 (L.I 2382)",
    pdf: "pdfFiles/resourcesPdfs/CUSTOMS_VALUATION_AND_DISPUTE_SETTLEMENT_REGULATIONS_2019_L.I_2382.pdf"
  },
  {
    id: "2",
    name: "Ghana International Trade commission Act, 2016 ",
    pdf: "pdfFiles/resourcesPdfs/GHANA_INTERNATONAL_TRADE_COMMISSION_ACT_2016 _ ACT_2016.pdf"
  },
  {
    id: "3",
    name: "GITC (Anti-Dumping) Regulations, 2019 (L.I 2380)",
    pdf: "pdfFiles/resourcesPdfs/GITC_ANTI_DUMPING_REGULATIONS,2019_PASSED.pdf"
  },
  {
    id: "4",
    name: "GITC (Safeguards Measures) Regulations, 2020 (L.I 2426)",
    pdf: "pdfFiles/resourcesPdfs/GITC_SAFEGUARD_MEASURES_REGULATIONS_2020_YET_TO_BE_PASSED.pdf"
  },
  {
    id: "5",
    name: "GITC (Subsidy and Countervailing Measures) Regulations, 2020 (L.I 2425)",
    pdf: "pdfFiles/resourcesPdfs/SUBSIDY_AND_COUNTERVAILING_MEASURES_REGULATIONS_2020_PASSED.pdf"
  }
];
function Resources() {
  defaultLayoutPlugin();
  pageNavigationPlugin();
  const [open, setOpen] = useState(false);
  const [currentFile, setCurrentFile] = useState();
  useState(null);
  useState(1);
  function opneFile(filePath) {
    setCurrentFile(filePath);
    setOpen(true);
  }
  getFilePlugin();
  return /* @__PURE__ */ jsx(WebsiteLayout, { page: "resource", children: /* @__PURE__ */ jsx("div", { className: "bg-white py-16  overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "grid w-[60%] sm:grid-cols-2 gap-16 mx-auto ", children: data.map((item, index) => /* @__PURE__ */ jsx(
    "div",
    {
      className: "hover:scale-110 transition duration-500 ease-in-out py-10 hover:bg-red-100/10 rounded-md hover:shadow-lg hover:border   cursor-pointer ",
      onClick: () => opneFile(item.pdf),
      children: /* @__PURE__ */ jsx("div", { className: "mx-auto ", children: /* @__PURE__ */ jsxs("a", { href: currentFile, target: "_blank", children: [
        /* @__PURE__ */ jsx(AiOutlineFilePdf, { className: "text-[8rem] w-[100%] text-center text-red-700 " }),
        /* @__PURE__ */ jsx("p", { className: "text-center px-4 text-[13px] sm:text-[1rem]", children: item.name })
      ] }) })
    },
    index
  )) }) }) });
}
export {
  Resources as default
};
