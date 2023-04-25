import { a as jsxs, j as jsx, F as Fragment } from "../ssr.mjs";
import { useState } from "react";
import { W as WebsiteLayout } from "./WebsiteLayout-bb3a7897.mjs";
import { Modal } from "react-responsive-modal";
import { Worker, Viewer, SpecialZoomLevel } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { getFilePlugin } from "@react-pdf-viewer/get-file";
import { pageNavigationPlugin } from "@react-pdf-viewer/page-navigation";
/* empty css                 */import { Link } from "@inertiajs/inertia-react";
import { C as CasesNav } from "./CasesNav-df1700cb.mjs";
import "react/jsx-runtime";
import "react-dom/server";
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
function CustomsFiles({ cases }) {
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
  return /* @__PURE__ */ jsxs(WebsiteLayout, { page: "resource", children: [
    /* @__PURE__ */ jsx(
      Modal,
      {
        classNames: {
          modal: "pdf__modal"
        },
        open,
        onClose: () => setOpen(false),
        children: /* @__PURE__ */ jsx("div", { className: "w-[50rem] h-[60rem] mt-10", children: open && /* @__PURE__ */ jsx(Worker, { workerUrl: "https://unpkg.com/pdfjs-dist@3.3.122/build/pdf.worker.min.js", children: /* @__PURE__ */ jsx(
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
    ),
    /* @__PURE__ */ jsx("div", { className: "w-[100%]   bg-white", children: /* @__PURE__ */ jsxs("div", { className: "px-10 py-16 sm:flex", children: [
      /* @__PURE__ */ jsx("div", { className: "sm:w-[40%] sm:block hidden", children: /* @__PURE__ */ jsx(CasesNav, {}) }),
      /* @__PURE__ */ jsxs("div", { className: " sm:w-[60%]", children: [
        /* @__PURE__ */ jsx("p", { className: "pb-12", children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, suscipit reiciendis porro laborum inventore beatae pariatur ex omnis? Voluptatem consequatur reprehenderit harum enim blanditiis! Eligendi in laborum tempora eius doloremque?" }),
        /* @__PURE__ */ jsx("div", { className: "border", children: /* @__PURE__ */ jsxs("table", { className: "table-auto w-[100%] ", children: [
          /* @__PURE__ */ jsx("thead", { className: "text-left bg-red-100/30", children: /* @__PURE__ */ jsxs("tr", { className: "border-b", children: [
            /* @__PURE__ */ jsx("th", { className: "p-3 text-sm", children: "Investigation #" }),
            /* @__PURE__ */ jsx("th", { className: "p-3 text-sm", children: "Title" }),
            /* @__PURE__ */ jsx("th", { className: "p-3 text-sm", children: "Description" }),
            /* @__PURE__ */ jsx("th", { className: "p-3 text-sm whitespace-nowrap", children: "Date Issued" })
          ] }) }),
          /* @__PURE__ */ jsx("tbody", { children: cases.data.length > 0 ? cases.data.map((item, index) => /* @__PURE__ */ jsxs(
            "tr",
            {
              className: "border-b",
              children: [
                /* @__PURE__ */ jsx("td", { className: "p-3", children: item.investigation_number }),
                /* @__PURE__ */ jsx("td", { className: "p-3", children: /* @__PURE__ */ jsx(
                  "span",
                  {
                    onClick: () => opneFile(
                      `/uploads/cases/${item.pdf}`
                    ),
                    className: "p-3 cursor-pointer hover:text-primary/60",
                    children: item.title
                  }
                ) }),
                /* @__PURE__ */ jsx("td", { className: "p-3 w-[20rem]", children: item.description }),
                /* @__PURE__ */ jsx("td", { className: "p-3 w-[5rem]", children: new Date(
                  item.issued_date
                ).getFullYear() })
              ]
            },
            index
          )) : /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { className: "p-3", children: "No case found!" }) }) })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "flex gap-2 pt-[2rem] justify-center", children: /* @__PURE__ */ jsx(Fragment, { children: cases == null ? void 0 : cases.links.map(
          (link, index) => link.url ? /* @__PURE__ */ jsx(
            Link,
            {
              preserveScroll: true,
              href: `${link.url}`,
              className: `${link.active && "bg-red-400 text-white "} px-4 py-2 text-gray-500 bg-gray-300 rounded-md hover:bg-red-400 hover:text-white `,
              as: "button",
              type: "button",
              children: /* @__PURE__ */ jsx(
                "span",
                {
                  dangerouslySetInnerHTML: {
                    __html: link.label
                  }
                }
              )
            },
            index
          ) : /* @__PURE__ */ jsx(
            Link,
            {
              preserveScroll: true,
              href: `${link.url}`,
              className: `${link.active && "bg-red-400 text-white "} px-4 py-2 text-gray-500 bg-gray-300 rounded-md hover:bg-red-400 hover:text-white `,
              disabled: true,
              as: "button",
              type: "button",
              children: /* @__PURE__ */ jsx(
                "span",
                {
                  dangerouslySetInnerHTML: {
                    __html: link.label
                  }
                }
              )
            },
            index
          )
        ) }) })
      ] })
    ] }) })
  ] });
}
export {
  CustomsFiles as default
};
