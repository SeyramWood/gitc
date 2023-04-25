import { j as jsx, a as jsxs } from "../ssr.mjs";
import { Worker, Viewer, SpecialZoomLevel } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { getFilePlugin } from "@react-pdf-viewer/get-file";
import { pageNavigationPlugin } from "@react-pdf-viewer/page-navigation";
import { useState } from "react";
import { AiOutlineFilePdf } from "react-icons/ai";
import { Modal } from "react-responsive-modal";
import { W as WebsiteLayout } from "./WebsiteLayout-bb3a7897.mjs";
/* empty css                 */import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/inertia-react";
import "process";
import "http";
import "react-icons/sl";
import "./helpers-bf0c6e44.mjs";
import "@n8tb1t/use-scroll-position";
import "react-icons/rx";
const data = [
  {
    id: "1",
    name: "CUSTOMS VALUATION AND DISPUTE SETTLEMENT REGULATIONS 2019 L.I 2382",
    pdf: "pdfFiles/resourcesPdfs/CUSTOMS_VALUATION_AND_DISPUTE_SETTLEMENT_REGULATIONS_2019_L.I_2382.pdf"
  },
  {
    id: "2",
    name: "GHANA INTERNATONAL TRADE COMMISSION ACT 2016 ACT 2016",
    pdf: "pdfFiles/resourcesPdfs/GHANA_INTERNATONAL_TRADE_COMMISSION_ACT_2016 _ ACT_2016.pdf"
  },
  {
    id: "3",
    name: "GITC ANTI DUMPING REGULATIONS,2019 PASSED",
    pdf: "pdfFiles/resourcesPdfs/GITC_ANTI_DUMPING_REGULATIONS,2019_PASSED.pdf"
  },
  {
    id: "4",
    name: "GITC SAFEGUARD MEASURES REGULATIONS 2020 YET TO BE PASSED",
    pdf: "pdfFiles/resourcesPdfs/GITC_SAFEGUARD_MEASURES_REGULATIONS_2020_YET_TO_BE_PASSED.pdf"
  },
  {
    id: "5",
    name: "SUBSIDY AND COUNTERVAILING MEASURES REGULATIONS 2020 PASSED",
    pdf: "pdfFiles/resourcesPdfs/SUBSIDY_AND_COUNTERVAILING_MEASURES_REGULATIONS_2020_PASSED.pdf"
  }
];
const pageLayout = {
  transformSize: ({ size }) => ({
    height: size.height + 20,
    width: size.width + 20
  })
};
function Resources() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const pageNavigationPluginInstance = pageNavigationPlugin();
  const [open, setOpen] = useState(false);
  const [currentFile, setCurrentFile] = useState();
  useState(null);
  useState(1);
  function opneFile(filePath) {
    setCurrentFile(filePath);
    setOpen(true);
  }
  const getFilePluginInstance = getFilePlugin();
  return /* @__PURE__ */ jsx(WebsiteLayout, { page: "resource", children: /* @__PURE__ */ jsxs("div", { className: "bg-white py-16  overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-5 gap-5 mx-auto p-16", children: data.map((item, index) => /* @__PURE__ */ jsx(
      "div",
      {
        className: "border sm:my-0 my-3 cursor-pointer hover:bg-red-100/30",
        onClick: () => opneFile(item.pdf),
        children: /* @__PURE__ */ jsxs("div", { className: "mx-auto ", children: [
          /* @__PURE__ */ jsx(AiOutlineFilePdf, { className: "text-[10rem] w-[100%] text-red-700 " }),
          /* @__PURE__ */ jsx("p", { className: "lowercase text-center px-5 ", children: item.name })
        ] })
      },
      index
    )) }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-5 gap-5 mx-auto px-10", children: /* @__PURE__ */ jsx(
      Modal,
      {
        classNames: {
          modal: "pdf__modal"
        },
        open,
        onClose: () => setOpen(false),
        children: /* @__PURE__ */ jsx("div", { className: "sm:w-[50rem] sm:h-[60rem] w-[19rem] h-[30rem]  mt-10", children: open && /* @__PURE__ */ jsx(Worker, { workerUrl: "https://unpkg.com/pdfjs-dist@3.3.122/build/pdf.worker.min.js", children: /* @__PURE__ */ jsx(
          Viewer,
          {
            fileUrl: currentFile,
            plugins: [
              defaultLayoutPluginInstance,
              getFilePluginInstance,
              pageNavigationPluginInstance
            ],
            defaultScale: SpecialZoomLevel.PageFit,
            pageLayout
          }
        ) }) })
      },
      "pdf__modal"
    ) })
  ] }) });
}
export {
  Resources as default
};
