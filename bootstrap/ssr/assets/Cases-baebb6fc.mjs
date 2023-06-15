import { j as jsx, a as jsxs, F as Fragment } from "../ssr.mjs";
import { Link } from "@inertiajs/inertia-react";
import React, { useState } from "react";
import { W as WebsiteLayout } from "./WebsiteLayout-197e9d3a.mjs";
import { a as formatDateShort } from "./helpers-97f56fd4.mjs";
/* empty css                  */import "react/jsx-runtime";
import "react-dom/server";
import "process";
import "http";
import "react-icons/sl";
import "@n8tb1t/use-scroll-position";
import "react-icons/rx";
function Cases({ categories, yearFilters, cases }) {
  const [currentURL, setCurrentURL] = useState();
  React.useEffect(() => {
    const path = document.location.pathname.split("/");
    if (!isNaN(parseInt(path[path.length - 1]))) {
      const path2 = document.location.pathname.split("/");
      path2.pop();
      setCurrentURL(path2.join("/"));
    } else {
      setCurrentURL(path.join("/"));
    }
  }, []);
  return /* @__PURE__ */ jsx(WebsiteLayout, { page: "resource", children: /* @__PURE__ */ jsx("div", { className: "w-[100%]   bg-white", children: /* @__PURE__ */ jsxs("div", { className: "px-10 py-16 sm:flex", children: [
    /* @__PURE__ */ jsx("div", { className: "sm:w-[30%] sm:block hidden", children: /* @__PURE__ */ jsxs("div", { className: "sm:pr-7", children: [
      /* @__PURE__ */ jsx("h2", { className: "sm:text-3xl ", children: "Notices" }),
      /* @__PURE__ */ jsx("div", { className: "pb-20 sm:pl-3", children: categories == null ? void 0 : categories.map(
        (cat) => cat.cases_count ? /* @__PURE__ */ jsx(
          "p",
          {
            className: `${cat.slug === (currentURL == null ? void 0 : currentURL.split("/")[2]) && "font-bold"} py-3 text-red-500  duration-700 ease-in-out cursor-pointer hover:text-red-500/90 hover:scale-105 transition`,
            children: /* @__PURE__ */ jsx(
              Link,
              {
                href: `/cases/${cat.slug}`,
                preserveScroll: true,
                children: `${cat.name} - (${cat.cases_count})`
              }
            )
          },
          cat.name
        ) : ""
      ) }),
      yearFilters.length > 0 && /* @__PURE__ */ jsxs("div", { className: "px-2 text-center w-[50%] border rounded bg-green-100/20 ", children: [
        /* @__PURE__ */ jsx("h2", { className: "border-b font-", children: "Filter By Year" }),
        /* @__PURE__ */ jsx("div", { className: "", children: yearFilters.map((yearFilter) => /* @__PURE__ */ jsx(
          "p",
          {
            className: "pb-1 text-red-500 duration-700 ease-in-out border-b cursor-pointer hover:text-red-500/90 hover:scale-105 teansition",
            children: /* @__PURE__ */ jsx(
              Link,
              {
                preserveScroll: true,
                href: `${currentURL}/${yearFilter.year}`,
                children: `${yearFilter.year} - (${yearFilter.count})`
              }
            )
          },
          yearFilter.year
        )) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: " sm:w-[70%]", children: [
      /* @__PURE__ */ jsxs("article", { className: "mb-12", children: [
        /* @__PURE__ */ jsx("p", { className: "", children: "The Commission, upon receiving a petition, undertakes thorough investigation into the matter engaging all interested parties. On concluding its investigation, the Commission gives a determination based on the merits of the case under consideration." }),
        /* @__PURE__ */ jsx("p", { className: "mt-2", children: "Petitions could be brought by aggrieved companies or individuals or through the Commission own initiative. Before the commencement and conclusion of any investigation the Commissions issues a public notice in the national gazette as well as a newspaper with national circulation." }),
        /* @__PURE__ */ jsx("p", { className: "mt-6", children: "The following is a list of completed and ongoing petitions:" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "border", children: /* @__PURE__ */ jsxs("table", { className: " table-fixed w-[100%] ", children: [
        /* @__PURE__ */ jsx("thead", { className: "text-left bg-red-100/30", children: /* @__PURE__ */ jsxs("tr", { className: "border-b", children: [
          /* @__PURE__ */ jsx("th", { className: "p-3 text-sm", children: "Investigation Title" }),
          /* @__PURE__ */ jsx("th", { className: "p-3 text-sm", children: "Inv #" }),
          /* @__PURE__ */ jsx("th", { className: "p-3 text-sm w-[25rem]", children: "Action" }),
          /* @__PURE__ */ jsx("th", { className: "p-3 text-sm w-[5rem]", children: "Date Issued" })
        ] }) }),
        /* @__PURE__ */ jsx("tbody", { children: cases.data.length > 0 ? cases.data.map((item, index) => /* @__PURE__ */ jsxs(
          "tr",
          {
            className: "border-b",
            children: [
              /* @__PURE__ */ jsx("td", { className: "p-3", children: /* @__PURE__ */ jsx(
                "a",
                {
                  href: `/uploads/cases/${item.pdf}`,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "text-primary/60 hover:underline",
                  children: item.title
                }
              ) }),
              /* @__PURE__ */ jsx("td", { className: "p-3", children: item.investigation_number }),
              /* @__PURE__ */ jsx("td", { className: "p-3", children: item.description }),
              /* @__PURE__ */ jsx("td", { className: "p-3", children: formatDateShort(
                item.issued_date
              ) })
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
    ] })
  ] }) }) });
}
export {
  Cases as default
};
