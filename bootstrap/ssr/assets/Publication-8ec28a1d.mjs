import { j as jsx, a as jsxs, F as Fragment } from "../ssr.mjs";
import "react";
import { W as WebsiteLayout } from "./WebsiteLayout-12e5b406.mjs";
/* empty css                           *//* empty css                  */import { Link } from "@inertiajs/inertia-react";
import "react/jsx-runtime";
import "react-dom/server";
import "process";
import "http";
import "react-icons/sl";
import "./helpers-97f56fd4.mjs";
import "@n8tb1t/use-scroll-position";
import "react-icons/rx";
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
  return /* @__PURE__ */ jsx(WebsiteLayout, { page: "publication", children: /* @__PURE__ */ jsxs("div", { className: "overflow-hidden bg-white", children: [
    /* @__PURE__ */ jsx("div", { className: "pt-10 text-center", children: /* @__PURE__ */ jsx("h2", { className: "sm:pb-16 pb-5 sm:text-[3rem] text-[2rem] text-center text-red-600", children: "Press Releases and Speeches" }) }),
    /* @__PURE__ */ jsx("div", { className: " sm:px-[6rem]  ", children: /* @__PURE__ */ jsxs("div", { className: "relative sm:pb-28", children: [
      /* @__PURE__ */ jsx("div", { className: "grid gap-6 sm:grid-cols-3", children: publications.data.map((item, index) => /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsxs(
        "a",
        {
          href: `/uploads/publications/pdf/${item.pdf}`,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "block",
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
            className: `${link.active ? "bg-red-400 text-white" : "bg-gray-300"} px-4 py-2 text-gray-500 rounded-md hover:bg-red-400 hover:text-white`,
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
            className: `${link.active ? "bg-red-400 text-white" : "bg-gray-300"} px-4 py-2 text-gray-500 rounded-md hover:bg-red-400 hover:text-white `,
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
  ] }) });
};
export {
  Publication as default
};
