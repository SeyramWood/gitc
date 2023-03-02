import { j as jsx, a as jsxs, F as Fragment } from "../ssr.mjs";
import { Link } from "@inertiajs/inertia-react";
import { useKeenSlider } from "keen-slider/react.js";
import { useState } from "react";
import { W as WebsiteLayout } from "./WebsiteLayout-e1c37850.mjs";
/* empty css                           *//* empty css                  */import "react/jsx-runtime";
import "react-dom/server";
import "process";
import "http";
import "react-icons/sl";
import "@n8tb1t/use-scroll-position";
import "react-icons/rx";
const Publication = () => {
  useState(false);
  useState(false);
  useState(false);
  useState(false);
  useState(false);
  useState(false);
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
  return /* @__PURE__ */ jsx(WebsiteLayout, { page: "publication", children: /* @__PURE__ */ jsxs("div", { className: "bg-white ", children: [
    /* @__PURE__ */ jsx("div", { className: "text-center ", children: /* @__PURE__ */ jsx("h2", { className: "py-16 sm:text-[3rem] text-center text-red-600", children: "PRESS RELEASES & SPEECHES" }) }),
    /* @__PURE__ */ jsx("div", { className: " sm:px-[6rem] sm:mb-28 ", children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxs("div", { ref: sliderRef, className: "gap-4 keen-slider", children: [
        /* @__PURE__ */ jsx("div", { className: "keen-slider__slide number-slide1 ", children: /* @__PURE__ */ jsxs(Link, { href: "", children: [
          /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: "images/publication/pub1.jpg",
                className: "object-cover sm:h-[20rem]",
                alt: ""
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 bg-primary h-[5rem] w-[5rem]", children: /* @__PURE__ */ jsxs("div", { className: "block text-center text-white uppercase", children: [
              /* @__PURE__ */ jsx("div", { children: "June" }),
              /* @__PURE__ */ jsx("div", { children: "10" }),
              /* @__PURE__ */ jsx("div", { children: "2022" })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-slate-100 p-3 overflow-hidden h-[60%]", children: [
            /* @__PURE__ */ jsx("p", { className: "uppercase text-primary", children: /* @__PURE__ */ jsx(Link, { href: "", children: "GITC dismisses petition to ban iron, steels import" }) }),
            /* @__PURE__ */ jsx("p", { children: "The Ghana International Trade Commission has made Determinations on petitions brought before" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "keen-slider__slide number-slide2", children: /* @__PURE__ */ jsxs(Link, { href: "/", children: [
          /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: "images/publication/pub2.jpg",
                className: "object-cover h-[20rem]",
                alt: ""
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 bg-primary h-[5rem] w-[5rem]", children: /* @__PURE__ */ jsxs("div", { className: "block text-center text-white uppercase", children: [
              /* @__PURE__ */ jsx("div", { children: "March" }),
              /* @__PURE__ */ jsx("div", { children: "2" }),
              /* @__PURE__ */ jsx("div", { children: "2021" })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-slate-100 p-3 overflow-hidden h-[60%]", children: [
            /* @__PURE__ */ jsx("p", { className: "uppercase text-primary", children: /* @__PURE__ */ jsx(Link, { href: "", children: "Interim Ghana-UK Trade Partnership Agreement" }) }),
            /* @__PURE__ */ jsx("p", { children: "On 2 March 2021, the Interim Trade Partnership Agreement between the Republic of Ghana" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "keen-slider__slide number-slide3", children: /* @__PURE__ */ jsxs(Link, { href: "/", children: [
          /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: "images/publication/pub3.jpg",
                className: "object-cover h-[20rem]",
                alt: ""
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 bg-primary h-[5rem] w-[5rem]", children: /* @__PURE__ */ jsxs("div", { className: "block text-center text-white uppercase", children: [
              /* @__PURE__ */ jsx("div", { children: "Nov" }),
              /* @__PURE__ */ jsx("div", { children: "7" }),
              /* @__PURE__ */ jsx("div", { children: "2019" })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-slate-100 p-3 overflow-hidden h-[60%]", children: [
            /* @__PURE__ */ jsx("p", { className: "uppercase text-primary", children: /* @__PURE__ */ jsx(Link, { href: "", children: "Notice of Initiation and Request for Information Aluminium Coils and Circles" }) }),
            /* @__PURE__ */ jsx("p", { children: "Agency:Ghana InternationalTrade Commission" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "keen-slider__slide number-slide4", children: /* @__PURE__ */ jsxs(Link, { href: "", children: [
          /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: "images/publication/pub3.jpg",
                className: "object-cover h-[20rem]",
                alt: ""
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 bg-primary h-[5rem] w-[5rem]", children: /* @__PURE__ */ jsxs("div", { className: "block text-center text-white uppercase", children: [
              /* @__PURE__ */ jsx("div", { children: "Nov" }),
              /* @__PURE__ */ jsx("div", { children: "7" }),
              /* @__PURE__ */ jsx("div", { children: "2019" })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-slate-100 p-3 overflow-hidden h-[60%]", children: [
            /* @__PURE__ */ jsx("p", { className: "uppercase text-primary", children: /* @__PURE__ */ jsx(Link, { href: "", children: "Notice of Initiation and Request for Information Aluminium Coils and Circles" }) }),
            /* @__PURE__ */ jsx("p", { children: "Agency:Ghana InternationalTrade Commission" })
          ] })
        ] }) })
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
    ] }) })
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
