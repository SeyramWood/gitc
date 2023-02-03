import { j as jsx, a as jsxs, F as Fragment } from "../ssr.mjs";
import { Link } from "@inertiajs/inertia-react";
import { useKeenSlider } from "keen-slider/react.js";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import { W as WebsiteLayout } from "./WebsiteLayout-d376d318.mjs";
import { H as HeadingPrimary } from "./HeadingPrimary-ed13ec4f.mjs";
import { P as Paragraph } from "./Paragraph-8ec8d723.mjs";
/* empty css                           */import "react/jsx-runtime";
import "react-dom/server";
import "process";
import "http";
import "react-icons/sl";
import "react-multi-carousel";
import "@n8tb1t/use-scroll-position";
import "react-icons/rx";
const style = "";
const styles = "";
const Publication = () => {
  const [open, setOpen] = useState(false);
  const [openOne, setOpenOne] = useState(false);
  const [openTwo, setOpenTwo] = useState(false);
  const [openThree, setOpenThree] = useState(false);
  const [openFour, setOpenFour] = useState(false);
  const [openFive, setOpenFive] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 1, spacing: 1 }
      },
      "(min-width: 1000px)": {
        slides: { perView: 3, spacing: 2 }
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
  return /* @__PURE__ */ jsx(WebsiteLayout, { page: "publication", children: /* @__PURE__ */ jsxs("div", { className: "bg-white mt-3", children: [
    /* @__PURE__ */ jsx("div", { className: "text-center ", children: /* @__PURE__ */ jsx(HeadingPrimary, { className: "py-16", children: "PRERSS RELEAESES & SPEECHES" }) }),
    /* @__PURE__ */ jsx("div", { className: " sm:mx-[10rem] sm:mb-28 ", children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxs("div", { ref: sliderRef, className: "keen-slider ", children: [
        /* @__PURE__ */ jsxs("div", { className: "keen-slider__slide number-slide1 ", children: [
          /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: "images/publication/pub1.jpg",
                className: "object-cover sm:h-[20rem]",
                alt: ""
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 bg-primary h-[5rem] w-[5rem]", children: /* @__PURE__ */ jsxs("div", { className: "block text-white text-center uppercase", children: [
              /* @__PURE__ */ jsx("div", { children: "June" }),
              /* @__PURE__ */ jsx("div", { children: "10" }),
              /* @__PURE__ */ jsx("div", { children: "2022" })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-slate-100 p-3 overflow-hidden h-[60%]", children: [
            /* @__PURE__ */ jsx(Paragraph, { className: "uppercase font-sm text-primary", children: /* @__PURE__ */ jsx(Link, { href: "", children: "GITC dismisses petition to ban iron, steels import" }) }),
            /* @__PURE__ */ jsx(Paragraph, { children: "The Ghana International Trade Commission has made Determinations on petitions brought before" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "keen-slider__slide number-slide2", children: [
          /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: "images/publication/pub2.jpg",
                className: "object-cover h-[20rem]",
                alt: ""
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 bg-primary h-[5rem] w-[5rem]", children: /* @__PURE__ */ jsxs("div", { className: "block text-white text-center uppercase", children: [
              /* @__PURE__ */ jsx("div", { children: "March" }),
              /* @__PURE__ */ jsx("div", { children: "2" }),
              /* @__PURE__ */ jsx("div", { children: "2021" })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-slate-100 p-3 overflow-hidden h-[60%]", children: [
            /* @__PURE__ */ jsx(Paragraph, { className: "uppercase font-sm text-primary", children: /* @__PURE__ */ jsx(Link, { href: "", children: "Interim Ghana-UK Trade Partnership Agreement" }) }),
            /* @__PURE__ */ jsx(Paragraph, { children: "On 2 March 2021, the Interim Trade Partnership Agreement between the Republic of Ghana" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "keen-slider__slide number-slide3", children: [
          /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: "images/publication/pub3.jpg",
                className: "object-cover h-[20rem]",
                alt: ""
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 bg-primary h-[5rem] w-[5rem]", children: /* @__PURE__ */ jsxs("div", { className: "block text-white text-center uppercase", children: [
              /* @__PURE__ */ jsx("div", { children: "Nov" }),
              /* @__PURE__ */ jsx("div", { children: "7" }),
              /* @__PURE__ */ jsx("div", { children: "2019" })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-slate-100 p-3 overflow-hidden h-[60%]", children: [
            /* @__PURE__ */ jsx(Paragraph, { className: "uppercase font-sm text-primary", children: /* @__PURE__ */ jsx(Link, { href: "", children: "Notice of Initiation and Request for Information Aluminium Coils and Circles" }) }),
            /* @__PURE__ */ jsx(Paragraph, { children: "Agency:Ghana InternationalTrade Commission" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "keen-slider__slide number-slide4", children: [
          /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: "images/publication/pub3.jpg",
                className: "object-cover h-[20rem]",
                alt: ""
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 bg-primary h-[5rem] w-[5rem]", children: /* @__PURE__ */ jsxs("div", { className: "block text-white text-center uppercase", children: [
              /* @__PURE__ */ jsx("div", { children: "Nov" }),
              /* @__PURE__ */ jsx("div", { children: "7" }),
              /* @__PURE__ */ jsx("div", { children: "2019" })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-slate-100 p-3 overflow-hidden h-[60%]", children: [
            /* @__PURE__ */ jsx(Paragraph, { className: "uppercase font-sm text-primary", children: /* @__PURE__ */ jsx(Link, { href: "", children: "Notice of Initiation and Request for Information Aluminium Coils and Circles" }) }),
            /* @__PURE__ */ jsx(Paragraph, { children: "Agency:Ghana InternationalTrade Commission" })
          ] })
        ] })
      ] }),
      loaded && instanceRef.current && /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(
          Arrow,
          {
            left: true,
            onClick: (e) => {
              var _a;
              return e.stopPropagation() || ((_a = instanceRef.current) == null ? void 0 : _a.prev());
            },
            disabled: currentSlide === 0
          }
        ),
        /* @__PURE__ */ jsx(
          Arrow,
          {
            onClick: (e) => {
              var _a;
              return e.stopPropagation() || ((_a = instanceRef.current) == null ? void 0 : _a.next());
            },
            disabled: currentSlide === instanceRef.current.track.details.slides.length - 1
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-7", children: [
        /* @__PURE__ */ jsx(HeadingPrimary, { children: "Our Gallery" }),
        /* @__PURE__ */ jsx(Paragraph, { children: "MEETINGS, WORSHSHOPS, COURTESY CALLS" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "sm:flex justify-center", children: /* @__PURE__ */ jsxs("div", { className: "sm:grid grid-cols-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative sm:w-[20rem] mx-3 mb-10", children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "bg-black overflow-hidden ",
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
          /* @__PURE__ */ jsx("div", { className: "bg-black/40 insect-0 absolute" }),
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
            /* @__PURE__ */ jsx(Paragraph, { className: "text-primary uppercase ", children: "COURTESY CALL TO GHANA STATISTICAL SERVICE" }),
            /* @__PURE__ */ jsx(Paragraph, { children: "19th May 2022" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: " sm:w-[20rem]  mx-3 mb-10", children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "bg-black overflow-hidden",
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
            /* @__PURE__ */ jsx(Paragraph, { className: "text-primary uppercase ", children: "COURTESY CALL TO GHANA Revenue Authority" }),
            /* @__PURE__ */ jsx(Paragraph, { children: "2nd June 2022" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: " sm:w-[20rem]  mx-3 mb-10", children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "bg-black overflow-hidden",
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
            /* @__PURE__ */ jsx(Paragraph, { className: "text-primary uppercase ", children: "ASSOCIATION OF GHANA INDUSTRIES COURTESY CALL TO GITC" }),
            /* @__PURE__ */ jsx(Paragraph, { children: "27th May 2022" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "sm:w-[20rem]  mx-3 mb-10", children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "bg-black overflow-hidden",
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
            /* @__PURE__ */ jsx(Paragraph, { className: "text-primary uppercase ", children: "HON.DEPUTY MINISTER (TRADE) COURTESY CALL TO GITC" }),
            /* @__PURE__ */ jsx(Paragraph, { children: "19th May,2022" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: " sm:w-[20rem]  mx-3 mb-10", children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "bg-black overflow-hidden",
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
            /* @__PURE__ */ jsx(Paragraph, { className: "text-primary uppercase ", children: "TRAINING SESSION WITH BMWK" }),
            /* @__PURE__ */ jsx(Paragraph, { children: "19th -29th April 2022" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: " sm:w-[20rem]  mx-3 mb-10", children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "bg-black overflow-hidden",
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
            /* @__PURE__ */ jsx(Paragraph, { className: "text-primary uppercase ", children: "GITC RETREAT WITH STAFF,TECHNICAL COMMITTEE AND GOVERNING BOARD" }),
            /* @__PURE__ */ jsx(Paragraph, { children: "17th - 18th March 2022" })
          ] })
        ] })
      ] }) })
    ] })
  ] }) });
};
function Arrow(props) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      onClick: props.onClick,
      className: `arrow ${props.left ? "arrow--left" : "arrow--right"} ${disabeld}`,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      children: [
        props.left && /* @__PURE__ */ jsx("path", { d: "M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" }),
        !props.left && /* @__PURE__ */ jsx("path", { d: "M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" })
      ]
    }
  );
}
export {
  Publication as default
};
