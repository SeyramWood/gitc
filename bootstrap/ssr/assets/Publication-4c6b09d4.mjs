import { a as jsxs, j as jsx, F as Fragment } from "../ssr.mjs";
import { useKeenSlider } from "keen-slider/react.js";
import { useState } from "react";
import { W as WebsiteLayout } from "./WebsiteLayout-bb3a7897.mjs";
/* empty css                           */import { Worker, Viewer, SpecialZoomLevel } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { getFilePlugin } from "@react-pdf-viewer/get-file";
import { pageNavigationPlugin } from "@react-pdf-viewer/page-navigation";
import { Modal } from "react-responsive-modal";
/* empty css                 */import { Link } from "@inertiajs/inertia-react";
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
const month = {
  0: "JAN",
  1: "FEB",
  2: "MAR",
  3: "APR",
  4: "MAY",
  5: "JUN",
  6: "JUL",
  7: "AUG",
  8: "SEP",
  9: "OCT",
  10: "NOV",
  11: "DEC"
};
const Publication = ({ publications }) => {
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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  useKeenSlider({
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 1, spacing: 1 },
        loop: true,
        mode: "free-snap"
      },
      "(min-width: 1000px)": {
        slides: { perView: 3, spacing: 20 },
        loop: true,
        mode: "free-snap"
      }
    },
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    }
  });
  return /* @__PURE__ */ jsxs(WebsiteLayout, { page: "publication", children: [
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
    ),
    /* @__PURE__ */ jsxs("div", { className: "overflow-hidden bg-white", children: [
      /* @__PURE__ */ jsx("div", { className: "pt-10 text-center", children: /* @__PURE__ */ jsx("h2", { className: "sm:pb-16 pb-5 sm:text-[3rem] text-[2rem] text-center text-red-600", children: "Press Releases and Speeches" }) }),
      /* @__PURE__ */ jsx("div", { className: " sm:px-[6rem]  ", children: /* @__PURE__ */ jsxs("div", { className: "relative sm:pb-28", children: [
        /* @__PURE__ */ jsx("div", { className: "grid gap-6 sm:grid-cols-3", children: publications.data.map((item, index) => /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsxs(
          "div",
          {
            className: "cursor-pointer",
            onClick: () => opneFile(
              `/uploads/publications/pdf/${item.pdf}`
            ),
            children: [
              /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: `/uploads/publications/images/${item.image}`,
                    className: "object-cover sm:h-[20rem]",
                    alt: item.title
                  }
                ),
                /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 bg-primary h-[5rem] w-[5rem]", children: /* @__PURE__ */ jsxs("div", { className: "block font-bold text-center text-white uppercase", children: [
                  /* @__PURE__ */ jsx("div", { children: month[new Date(
                    item.published_date
                  ).getMonth()] }),
                  /* @__PURE__ */ jsx("div", { children: new Date(
                    item.published_date
                  ).getDate() }),
                  /* @__PURE__ */ jsx("div", { children: new Date(
                    item.published_date
                  ).getFullYear() })
                ] }) })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "bg-slate-100 p-3 overflow-hidden h-[60%]", children: [
                /* @__PURE__ */ jsx("p", { className: "font-bold uppercase text-primary", children: item.title }),
                /* @__PURE__ */ jsx("p", { children: item.description })
              ] })
            ]
          }
        ) }, index)) }),
        /* @__PURE__ */ jsx("div", { className: "flex gap-2 pt-[2rem] justify-center", children: /* @__PURE__ */ jsx(Fragment, { children: publications == null ? void 0 : publications.links.map(
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
      ] }) })
    ] })
  ] });
};
export {
  Publication as default
};
