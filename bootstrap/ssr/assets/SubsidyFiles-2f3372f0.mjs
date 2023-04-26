import { j as jsx, a as jsxs } from "../ssr.mjs";
import { useState } from "react";
import { W as WebsiteLayout } from "./WebsiteLayout-27aca478.mjs";
import { c as customsPdf } from "./customsFiles-d25b2666.mjs";
import { Modal } from "react-responsive-modal";
import { Worker, Viewer, SpecialZoomLevel } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { getFilePlugin } from "@react-pdf-viewer/get-file";
import { pageNavigationPlugin } from "@react-pdf-viewer/page-navigation";
/* empty css                 */import { C as CasesNav } from "./CasesNav-df1700cb.mjs";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/inertia-react";
import "process";
import "http";
import "react-icons/sl";
import "./helpers-bf0c6e44.mjs";
import "@n8tb1t/use-scroll-position";
import "react-icons/rx";
const pageLayout = {
  transformSize: ({ size }) => ({
    height: size.height + 20,
    width: size.width + 20
  })
};
function SubsidyFiles() {
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
  return /* @__PURE__ */ jsx(WebsiteLayout, { page: "resource", children: /* @__PURE__ */ jsx("div", { className: "w-[100%]   bg-white", children: /* @__PURE__ */ jsxs("div", { className: "flex px-10 py-16 ", children: [
    /* @__PURE__ */ jsx("div", { className: "w-[40%]", children: /* @__PURE__ */ jsx(CasesNav, {}) }),
    /* @__PURE__ */ jsxs("div", { className: " w-[60%]", children: [
      /* @__PURE__ */ jsx("p", { className: "pb-12", children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, suscipit reiciendis porro laborum inventore beatae pariatur ex omnis? Voluptatem consequatur reprehenderit harum enim blanditiis! Eligendi in laborum tempora eius doloremque?" }),
      /* @__PURE__ */ jsx("div", { className: "border", children: /* @__PURE__ */ jsxs("table", { className: "table-fixed  w-[100%] ", children: [
        /* @__PURE__ */ jsx("thead", { className: "text-left bg-red-100/30 ", children: /* @__PURE__ */ jsxs("tr", { className: "border-b", children: [
          /* @__PURE__ */ jsx("th", { className: "p-3", children: "Investitation No" }),
          /* @__PURE__ */ jsx("th", { className: "p-3", children: "Title" }),
          /* @__PURE__ */ jsx("th", { className: "p-3", children: "Date Issued" })
        ] }) }),
        /* @__PURE__ */ jsxs("tbody", { children: [
          customsPdf.map((item, index) => /* @__PURE__ */ jsxs("tr", { className: "border-b", children: [
            /* @__PURE__ */ jsx(
              "td",
              {
                className: "p-3 hover:text-primary/60 cursor-pointer",
                onClick: () => opneFile(item.pdfPath),
                children: item.name
              }
            ),
            /* @__PURE__ */ jsx("td", { className: "p-3", children: "Malcolm Lockyer" }),
            /* @__PURE__ */ jsx("td", { className: "p-3", children: "1961" })
          ] }, index)),
          /* @__PURE__ */ jsx(
            Modal,
            {
              classNames: {
                modal: "pdf__modal"
              },
              open,
              onClose: () => setOpen(false),
              children: /* @__PURE__ */ jsx("div", { className: "sm:w-[50rem] sm:h-[60rem] w-[19rem] h-[30rem]", children: open && /* @__PURE__ */ jsx(Worker, { workerUrl: "https://unpkg.com/pdfjs-dist@3.3.122/build/pdf.worker.min.js", children: /* @__PURE__ */ jsx(
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
          )
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { class: "flex  gap-2 pt-3 justify-center", children: [
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "#",
            class: "px-4 py-2 text-gray-500 bg-gray-300 rounded-md hover:bg-red-400 hover:text-white",
            children: "Previous"
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "#",
            class: "px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-red-400 hover:text-white",
            children: "1"
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "#",
            class: "px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-red-400 hover:text-white",
            children: "2"
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "#",
            class: "px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-red-400 hover:text-white",
            children: "3"
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "#",
            class: "px-4 py-2 font-bold text-gray-500 bg-gray-300 rounded-md hover:bg-red-400 hover:text-white",
            children: "Next"
          }
        )
      ] })
    ] })
  ] }) }) });
}
export {
  SubsidyFiles as default
};
