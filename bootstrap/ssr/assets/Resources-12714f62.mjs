import { j as jsx, a as jsxs } from "../ssr.mjs";
import { AiOutlineFilePdf, AiOutlineFileWord } from "react-icons/ai";
import { W as WebsiteLayout } from "./WebsiteLayout-e1c37850.mjs";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
/* empty css                  */import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/inertia-react";
import "process";
import "http";
import "react-icons/sl";
import "@n8tb1t/use-scroll-position";
import "react-icons/rx";
function Resources() {
  const [open, setOpen] = useState(false);
  const [openOne, setOpenOne] = useState(false);
  const [openTwo, setOpenTwo] = useState(false);
  const [openThree, setOpenThree] = useState(false);
  const [openFour, setOpenFour] = useState(false);
  const [openFive, setOpenFive] = useState(false);
  return /* @__PURE__ */ jsx(WebsiteLayout, { page: "service", children: /* @__PURE__ */ jsxs("div", { className: "bg-white", children: [
    /* @__PURE__ */ jsxs("div", { className: " sm:mx-24 py-10 mb-32", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-7", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-red-600 sm:text-[4rem] pb-0 mb-0", children: "Resources" }),
        /* @__PURE__ */ jsx("p", { className: "pt-0 mt-0", children: "Our Files" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-5 p-6 gap-2 bg-slate-100/10 shadow-lg", children: [
        /* @__PURE__ */ jsxs("div", { className: "p-4 duration-500 ease-in-out hover:scale-110", children: [
          /* @__PURE__ */ jsx("div", { className: " ", children: /* @__PURE__ */ jsx(AiOutlineFilePdf, { className: "w-[6rem] h-[7rem] text-red-700 " }) }),
          /* @__PURE__ */ jsxs("div", { className: "", children: [
            /* @__PURE__ */ jsx("p", { children: "Name of File" }),
            /* @__PURE__ */ jsx("div", { className: "", children: " File descriptoin " })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-4 duration-500 ease-in-out hover:scale-110", children: [
          /* @__PURE__ */ jsx("div", { className: " ", children: /* @__PURE__ */ jsx(AiOutlineFileWord, { className: "w-[6rem] h-[7rem] text-blue-700 " }) }),
          /* @__PURE__ */ jsxs("div", { className: "", children: [
            /* @__PURE__ */ jsx("p", { children: "Name of File" }),
            /* @__PURE__ */ jsx("div", { className: "", children: " File descriptoin " })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-4 duration-500 ease-in-out hover:scale-110", children: [
          /* @__PURE__ */ jsx("div", { className: " ", children: /* @__PURE__ */ jsx(AiOutlineFilePdf, { className: "w-[6rem] h-[7rem] text-red-700 " }) }),
          /* @__PURE__ */ jsxs("div", { className: "", children: [
            /* @__PURE__ */ jsx("p", { children: "Name of File" }),
            /* @__PURE__ */ jsx("div", { className: "", children: " File descriptoin " })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-4 duration-500 ease-in-out hover:scale-110", children: [
          /* @__PURE__ */ jsx("div", { className: " ", children: /* @__PURE__ */ jsx(AiOutlineFilePdf, { className: "w-[6rem] h-[7rem] text-red-700 " }) }),
          /* @__PURE__ */ jsxs("div", { className: "", children: [
            /* @__PURE__ */ jsx("p", { children: "Name of File" }),
            /* @__PURE__ */ jsx("div", { className: "", children: " File descriptoin " })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-4 duration-500 ease-in-out hover:scale-110", children: [
          /* @__PURE__ */ jsx("div", { className: " ", children: /* @__PURE__ */ jsx(AiOutlineFileWord, { className: "w-[6rem] h-[7rem] text-blue-700 " }) }),
          /* @__PURE__ */ jsxs("div", { className: "", children: [
            /* @__PURE__ */ jsx("p", { children: "Name of File" }),
            /* @__PURE__ */ jsx("div", { className: "", children: " File descriptoin " })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-4 duration-500 ease-in-out hover:scale-110", children: [
          /* @__PURE__ */ jsx("div", { className: " ", children: /* @__PURE__ */ jsx(AiOutlineFilePdf, { className: "w-[6rem] h-[7rem] text-red-700 " }) }),
          /* @__PURE__ */ jsxs("div", { className: "", children: [
            /* @__PURE__ */ jsx("p", { children: "Name of File" }),
            /* @__PURE__ */ jsx("div", { className: "", children: " File descriptoin " })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsxs("div", { className: "", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-7", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-red-600 sm:text-[4rem]", children: "Our Gallery" }),
        /* @__PURE__ */ jsx("p", { children: "MEETINGS, WORSHSHOPS, COURTESY CALLS" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "justify-center sm:flex", children: /* @__PURE__ */ jsxs("div", { className: "grid-cols-3 sm:grid", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative sm:w-[20rem] mx-3 mb-10", children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "overflow-hidden bg-black cursor-pointer ",
              onClick: () => setOpen(true),
              children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: "images/publish/publish.jpg",
                  className: "object-cover h-[17rem] transition duration-700 ease-in-out hover:scale-110 hover:opacity-75 bg-black/40",
                  alt: ""
                }
              )
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute bg-black/40 insect-0" }),
          /* @__PURE__ */ jsx(
            Lightbox,
            {
              open,
              close: () => setOpen(false),
              slides: [
                { src: "/images/publish/publish.jpg" }
              ]
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "text-center bg-slate-100 p-5  sm:h-[35%]", children: [
            /* @__PURE__ */ jsx("p", { className: "uppercase text-primary ", children: "COURTESY CALL TO GHANA STATISTICAL SERVICE" }),
            /* @__PURE__ */ jsx("p", { children: "19th May 2022" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: " sm:w-[20rem]  mx-3 mb-10", children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "overflow-hidden bg-black cursor-pointer ",
              onClick: () => setOpen(true),
              children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: "images/publish/publish1.jpg",
                  className: "object-cover h-[17rem] transition duration-700 ease-in-out hover:scale-110 hover:opacity-75 bg-black/40",
                  alt: ""
                }
              )
            }
          ),
          /* @__PURE__ */ jsx(
            Lightbox,
            {
              open: openOne,
              close: () => setOpenOne(false),
              slides: [
                { src: "/images/publish/publish1.jpg" }
              ]
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "text-center bg-slate-100 p-5 sm:h-[35%]", children: [
            /* @__PURE__ */ jsx("p", { className: "uppercase text-primary ", children: "COURTESY CALL TO GHANA Revenue Authority" }),
            /* @__PURE__ */ jsx("p", { children: "2nd June 2022" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: " sm:w-[20rem]  mx-3 mb-10", children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "overflow-hidden bg-black cursor-pointer ",
              onClick: () => setOpenTwo(true),
              children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: "images/publish/publish2.jpg",
                  className: "object-cover h-[17rem] transition duration-700 ease-in-out hover:scale-110 hover:opacity-75 bg-black/40",
                  alt: ""
                }
              )
            }
          ),
          /* @__PURE__ */ jsx(
            Lightbox,
            {
              open: openTwo,
              close: () => setOpenTwo(false),
              slides: [
                { src: "/images/publish/publish2.jpg" }
              ]
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "text-center bg-slate-100 p-5 sm:h-[35%]", children: [
            /* @__PURE__ */ jsx("p", { className: "uppercase text-primary ", children: "ASSOCIATION OF GHANA INDUSTRIES COURTESY CALL TO GITC" }),
            /* @__PURE__ */ jsx("p", { children: "27th May 2022" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "sm:w-[20rem]  mx-3 mb-10", children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "overflow-hidden bg-black cursor-pointer ",
              onClick: () => setOpenThree(true),
              children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: "images/publish/publish3.jpg",
                  className: "object-cover h-[17rem] transition duration-700 ease-in-out hover:scale-110 hover:opacity-75 bg-black/40",
                  alt: ""
                }
              )
            }
          ),
          /* @__PURE__ */ jsx(
            Lightbox,
            {
              open: openThree,
              close: () => setOpenThree(false),
              slides: [
                { src: "/images/publish/publish3.jpg" }
              ]
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "text-center bg-slate-100 p-5 sm:h-[35%]", children: [
            /* @__PURE__ */ jsx("p", { className: "uppercase text-primary ", children: "HON.DEPUTY MINISTER (TRADE) COURTESY CALL TO GITC" }),
            /* @__PURE__ */ jsx("p", { children: "19th May,2022" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: " sm:w-[20rem]  mx-3 mb-10", children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "overflow-hidden bg-black cursor-pointer ",
              onClick: () => setOpenFour(true),
              children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: "images/publish/publish4.jpg",
                  className: "object-cover h-[17rem] transition duration-700 ease-in-out hover:scale-110 hover:opacity-75 bg-black/40",
                  alt: ""
                }
              )
            }
          ),
          /* @__PURE__ */ jsx(
            Lightbox,
            {
              open: openFour,
              close: () => setOpenFour(false),
              slides: [
                { src: "/images/publish/publish4.jpg" }
              ]
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "text-center bg-slate-100 p-5  sm:h-[35%]", children: [
            /* @__PURE__ */ jsx("p", { className: "uppercase text-primary ", children: "TRAINING SESSION WITH BMWK" }),
            /* @__PURE__ */ jsx("p", { children: "19th -29th April 2022" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: " sm:w-[20rem]  mx-3 mb-10", children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "overflow-hidden bg-black cursor-pointer ",
              onClick: () => setOpenFive(true),
              children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: "images/publish/publish5.jpg",
                  className: "object-cover h-[17rem] transition duration-700 ease-in-out hover:scale-110 hover:opacity-75 bg-black/40",
                  alt: ""
                }
              )
            }
          ),
          /* @__PURE__ */ jsx(
            Lightbox,
            {
              open: openFive,
              close: () => setOpenFive(false),
              slides: [
                { src: "/images/publish/publish5.jpg" }
              ]
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "text-center bg-slate-100 p-5 sm:h-[35%]", children: [
            /* @__PURE__ */ jsx("p", { className: "uppercase text-primary ", children: "GITC RETREAT WITH STAFF,TECHNICAL COMMITTEE AND GOVERNING BOARD" }),
            /* @__PURE__ */ jsx("p", { children: "17th - 18th March 2022" })
          ] })
        ] })
      ] }) })
    ] }) })
  ] }) });
}
export {
  Resources as default
};
