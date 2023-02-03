import { j as jsx, a as jsxs } from "../ssr.mjs";
import { B as Button } from "./Button-d464bc07.mjs";
import { H as HeadingPrimary } from "./HeadingPrimary-ed13ec4f.mjs";
import { H as HeadingSecondary } from "./HeadingSecondary-b4f9f193.mjs";
import { P as Paragraph } from "./Paragraph-8ec8d723.mjs";
import { W as WebsiteLayout } from "./WebsiteLayout-d376d318.mjs";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/inertia-react";
import "process";
import "http";
import "react";
import "react-icons/sl";
import "react-multi-carousel";
import "@n8tb1t/use-scroll-position";
import "react-icons/rx";
const Contact = () => {
  return /* @__PURE__ */ jsx(WebsiteLayout, { page: "contactUs", children: /* @__PURE__ */ jsxs("div", { className: "bg-white", children: [
    /* @__PURE__ */ jsx("div", { className: "pt-16", children: /* @__PURE__ */ jsxs("div", { class: "sm:grid grid-cols-3 px-[6rem] gap-4 ", children: [
      /* @__PURE__ */ jsxs("div", { className: " mb-14 mt-7", children: [
        /* @__PURE__ */ jsx("div", { className: "mb-5 sm:block flex justify-center", children: /* @__PURE__ */ jsx("img", { src: "images/contact/phone.png", className: "w-[3rem]", alt: "" }) }),
        /* @__PURE__ */ jsxs("div", { className: "", children: [
          /* @__PURE__ */ jsx(HeadingSecondary, { children: "Phone" }),
          /* @__PURE__ */ jsx(Paragraph, { children: "+233 030 296 0298" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: " mb-14 mt-7", children: [
        /* @__PURE__ */ jsx("div", { className: "mb-5 sm:block flex justify-center", children: /* @__PURE__ */ jsx("img", { src: "images/contact/email.png", className: "w-[3rem]", alt: "" }) }),
        /* @__PURE__ */ jsxs("div", { className: "", children: [
          /* @__PURE__ */ jsx(HeadingSecondary, { children: "Email" }),
          /* @__PURE__ */ jsx(Paragraph, { children: "info@gitc.gov.gh" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: " mb-14 mt-7", children: [
        /* @__PURE__ */ jsx("div", { className: "mb-5 sm:block flex justify-center", children: /* @__PURE__ */ jsx("img", { src: "images/contact/location.png", className: "w-[3rem]", alt: "" }) }),
        /* @__PURE__ */ jsxs("div", { className: "", children: [
          /* @__PURE__ */ jsx(HeadingSecondary, { children: "Lcoation" }),
          /* @__PURE__ */ jsx(Paragraph, { children: "2nd Floor (West Wing), 5th Link Road, East Cantonments near US Embassy, Accra" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "sm:p-32", children: [
      /* @__PURE__ */ jsx("div", { className: "text-center pb-6", children: /* @__PURE__ */ jsx(HeadingPrimary, { children: "Contact Us" }) }),
      /* @__PURE__ */ jsx("div", { className: "mx-2 pr-2", children: /* @__PURE__ */ jsx("form", { action: "", className: "flex justify-center ", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 ", children: [
        /* @__PURE__ */ jsxs("div", { className: "lg:flex  justify-center gap-3 p-3 ", children: [
          /* @__PURE__ */ jsx("input", { type: "text", placeholder: "First Name*", required: "required", className: "m-1 w-screen  h-full bg-gray-100 border-none focus:outline-none focus:ring focus:ring-primary/20", id: "" }),
          /* @__PURE__ */ jsx("input", { type: "text", placeholder: "Last Name*", required: "required", className: "m-1 w-screen  h-full bg-gray-100 border-none focus:outline-none focus:ring focus:ring-primary/20", id: "" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "sm:flex  justify-center gap-3 p-3", children: [
          /* @__PURE__ */ jsx("input", { type: "email", placeholder: "Email*", required: "required", className: "m-1 w-screen  h-full  bg-gray-100 border-none focus:outline-none focus:ring focus:ring-primary/20", id: "" }),
          /* @__PURE__ */ jsx("input", { type: "text", placeholder: "Phone Number*", required: "required", className: "m-1 w-screen  h-full  bg-gray-100 border-none focus:outline-none focus:ring focus:ring-primary/20", id: "" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "sm:flex  justify-center gap-3 p-3", children: [
          /* @__PURE__ */ jsx("input", { type: "text", placeholder: "Company Name*", required: "required", className: "m-1 w-screen  h-full  bg-gray-100 border-none focus:outline-none focus:ring focus:ring-primary/20", id: "" }),
          /* @__PURE__ */ jsx("input", { type: "text", placeholder: "Industry*", required: "required", className: "m-1 w-screen  h-full  bg-gray-100 border-none focus:outline-none focus:ring focus:ring-primary/20", id: "" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex  justify-center gap-3 p-3 mb-2", children: /* @__PURE__ */ jsx("input", { type: "text", placeholder: "Subject*", required: "required", className: "m-1 w-screen  h-full  bg-gray-100 border-none focus:outline-none focus:ring focus:ring-primary/20", id: "" }) }),
        /* @__PURE__ */ jsx("div", { className: "flex justify-center gap-3 p-3", children: /* @__PURE__ */ jsx("textarea", { name: "", id: "", placeholder: "Message", className: "m-1 w-screen  h-80  bg-gray-100 border-none focus:outline-none focus:ring focus:ring-primary/20", rows: "0" }) }),
        /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsx(Button, { className: " w-80 mt-[2rem] mb-[3rem]", children: "Submit Now" }) })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "p-7 w-screen", children: /* @__PURE__ */ jsx("div", { className: "mapouter", children: /* @__PURE__ */ jsx("div", { className: "gmap_canvas ", children: /* @__PURE__ */ jsx(
      "iframe",
      {
        width: "1290",
        height: "500",
        id: "gmap_canvas",
        src: "https://maps.google.com/maps?q=2nd%20Floor%20(West%20Wing),%20%205th%20Link%20Road,%20East%20Cantonments%20near%20US%20Embassy,%20Accra&t=&z=17&ie=UTF8&iwloc=&output=embed",
        frameBorder: "0",
        scrolling: "yes",
        marginHeight: "0",
        marginWidth: "0"
      }
    ) }) }) })
  ] }) });
};
export {
  Contact as default
};
