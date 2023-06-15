import { a as jsxs, j as jsx, F as Fragment } from "../ssr.mjs";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import { W as WebsiteLayout } from "./WebsiteLayout-197e9d3a.mjs";
import { f as formatDateTimeShort } from "./helpers-97f56fd4.mjs";
import { Link } from "@inertiajs/inertia-react";
/* empty css                  */import "react/jsx-runtime";
import "react-dom/server";
import "process";
import "http";
import "react-icons/sl";
import "@n8tb1t/use-scroll-position";
import "react-icons/rx";
function Gallery({ albums }) {
  const [currentGallery, setCurrentGallery] = useState();
  const [selectedIndex, setSelectedIndex] = useState(-1);
  function openGallery(gallery, index) {
    setCurrentGallery(
      gallery.map((gallery2) => ({
        src: `/uploads/gallery/${gallery2.image}`
      }))
    );
    setSelectedIndex(index);
  }
  return /* @__PURE__ */ jsxs(WebsiteLayout, { page: "gallery", children: [
    /* @__PURE__ */ jsx(
      Lightbox,
      {
        open: selectedIndex >= 0,
        fullscreen: { auto: false },
        plugins: [Fullscreen, Counter],
        index: selectedIndex,
        close: () => {
          setSelectedIndex(-1);
          setCurrentGallery();
        },
        slides: currentGallery
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "pb-10 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "", children: [
      /* @__PURE__ */ jsx("div", { className: "justify-center pt-16 sm:flex", children: /* @__PURE__ */ jsx("div", { className: "grid-cols-3 sm:grid", children: albums.data.map((item, index) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "relative sm:w-[20rem] mx-3 mb-10",
          children: [
            /* @__PURE__ */ jsx("div", { className: "overflow-hidden bg-black cursor-pointer ", children: /* @__PURE__ */ jsx("div", { className: "w-full bg-white/90", children: /* @__PURE__ */ jsxs("div", { className: "h-[15rem] ", children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: `overflow-hidden p-3 justify-between ${item.gallery.length == 1 ? "h-[100%]" : "h-[50%]"}`,
                  children: /* @__PURE__ */ jsx("div", { className: "overflow-hidden ", children: /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: `/uploads/gallery/${item.gallery[0].image}`,
                      className: "object-cover transition duration-700 ease-in-out hover:opacity-75 bg-black/40 hover:scale-110",
                      alt: "",
                      onClick: () => openGallery(
                        item.gallery,
                        0
                      )
                    }
                  ) })
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "flex p-3 justify-between gap-4  h-[50%]", children: [
                item.gallery[1] && /* @__PURE__ */ jsx("div", { className: "overflow-hidden ", children: /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: `/uploads/gallery/${item.gallery[1].image}`,
                    className: "object-cover transition duration-700 ease-in-out hover:opacity-75 bg-black/40 hover:scale-110",
                    alt: "",
                    onClick: () => openGallery(
                      item.gallery,
                      1
                    )
                  }
                ) }),
                item.gallery[2] && /* @__PURE__ */ jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: `/uploads/gallery/${item.gallery[2].image}`,
                    className: "object-cover transition duration-700 ease-in-out hover:opacity-75 bg-black/40 hover:scale-110",
                    alt: "",
                    onClick: () => openGallery(
                      item.gallery,
                      2
                    )
                  }
                ) })
              ] })
            ] }) }) }),
            /* @__PURE__ */ jsxs("div", { className: "text-center bg-slate-100 p-5  sm:h-[35%]", children: [
              /* @__PURE__ */ jsx("p", { className: "uppercase text-primary ", children: item.name }),
              /* @__PURE__ */ jsx("p", { children: formatDateTimeShort(item.date) })
            ] })
          ]
        },
        `album__${index}`.toString()
      )) }) }),
      /* @__PURE__ */ jsx("div", { className: "flex gap-2 pt-[2rem] justify-center", children: /* @__PURE__ */ jsx(Fragment, { children: albums == null ? void 0 : albums.links.map(
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
  ] });
}
export {
  Gallery as default
};
