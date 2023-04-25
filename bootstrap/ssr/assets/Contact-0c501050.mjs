import { j as jsx, a as jsxs } from "../ssr.mjs";
import { useForm } from "@inertiajs/inertia-react";
import { W as WebsiteLayout } from "./WebsiteLayout-bb3a7897.mjs";
import { B as Button } from "./Button-1ba643b5.mjs";
import "react/jsx-runtime";
import "react-dom/server";
import "process";
import "http";
import "react";
import "react-icons/sl";
import "./helpers-bf0c6e44.mjs";
import "@n8tb1t/use-scroll-position";
import "react-icons/rx";
const HeadingPrimary = (prop) => {
  return /* @__PURE__ */ jsx("p", { className: `text-5xl font-bold text-primary ${prop.className}`, children: prop.children });
};
const Contact = () => {
  useForm({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    industry: ""
  });
  return /* @__PURE__ */ jsx(WebsiteLayout, { page: "contactUs", children: /* @__PURE__ */ jsxs("div", { className: "bg-white", children: [
    /* @__PURE__ */ jsx("div", { className: "pt-16 text-center", children: /* @__PURE__ */ jsxs("div", { class: "grid sm:grid-cols-3 grid-cols-2 sm:px-[10rem] sm:gap-4 ", children: [
      /* @__PURE__ */ jsxs("div", { className: " mb-14 mt-7", children: [
        /* @__PURE__ */ jsx("div", { className: "flex justify-center mb-5 sm:block", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: "images/contact/phone.png",
            className: "sm:w-[3rem] w-[2rem]",
            alt: ""
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "", children: [
          /* @__PURE__ */ jsx("h2", { children: "Phone" }),
          /* @__PURE__ */ jsx("p", { children: "+233 030 296 0298" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: " mb-14 mt-7", children: [
        /* @__PURE__ */ jsx("div", { className: "flex justify-center mb-5 sm:block", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: "images/contact/email.png",
            className: "w-[3rem]",
            alt: ""
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "", children: [
          /* @__PURE__ */ jsx("h2", { children: "Email" }),
          /* @__PURE__ */ jsx("p", { children: "info@gitc.gov.gh" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "hidden px-2 sm:px-0 mt-7 sm:block", children: [
        /* @__PURE__ */ jsx("div", { className: "flex justify-center mb-5 sm:block", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: "images/contact/location.png",
            className: "w-[3rem]",
            alt: ""
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "", children: [
          /* @__PURE__ */ jsx("h2", { children: "Location" }),
          /* @__PURE__ */ jsx("p", { children: "2nd Floor (West Wing), 5th Link Road, East Cantonments near US Embassy, Accra" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "px-5 sm:px-32 sm:py-0 py-14", children: [
      /* @__PURE__ */ jsx("div", { className: "pb-6 text-center", children: /* @__PURE__ */ jsx(HeadingPrimary, { children: "Contact Us" }) }),
      /* @__PURE__ */ jsx("div", { className: "mx-2 sm:pr-2", children: /* @__PURE__ */ jsx("form", { action: "", className: "justify-center sm:flex ", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 ", children: [
        /* @__PURE__ */ jsxs("div", { className: "justify-center gap-3 sm:flex sm:p-3 ", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              placeholder: "First Name*",
              required: "required",
              className: "w-full m-1 mb-2 bg-gray-100 border-none sm:mb-0 sm:w-screen sm:h-full focus:outline-none focus:ring focus:ring-primary/20",
              id: ""
            }
          ),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              placeholder: "Last Name*",
              required: "required",
              className: "w-full m-1 mb-2 bg-gray-100 border-none sm:mb-0 sm:w-screen sm:h-full focus:outline-none focus:ring focus:ring-primary/20",
              id: ""
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "justify-center gap-3 sm:flex sm:p-3", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "email",
              placeholder: "Email*",
              required: "required",
              className: "w-full m-1 mb-2 bg-gray-100 border-none sm:mb-0 sm:w-screen sm:h-full focus:outline-none focus:ring focus:ring-primary/20",
              id: ""
            }
          ),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              placeholder: "Phone Number*",
              required: "required",
              className: "w-full m-1 mb-2 bg-gray-100 border-none sm:mb-0 sm:w-screen sm:h-full focus:outline-none focus:ring focus:ring-primary/20",
              id: ""
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "justify-center gap-3 sm:flex sm:p-3", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              placeholder: "Company Name*",
              required: "required",
              className: "w-full m-1 mb-2 bg-gray-100 border-none sm:mb-0 sm:w-screen sm:h-full focus:outline-none focus:ring focus:ring-primary/20",
              id: ""
            }
          ),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              placeholder: "Industry*",
              required: "required",
              className: "w-full m-1 mb-2 bg-gray-100 border-none sm:mb-0 sm:w-screen sm:h-full focus:outline-none focus:ring focus:ring-primary/20",
              id: ""
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "justify-center gap-3 sm:flex sm:p-3 ", children: /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            placeholder: "Subject*",
            required: "required",
            className: "w-full m-1 mb-2 bg-gray-100 border-none sm:mb-0 sm:w-screen sm:h-full focus:outline-none focus:ring focus:ring-primary/20",
            id: ""
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "justify-center gap-3 sm:flex sm:p-3", children: /* @__PURE__ */ jsx(
          "textarea",
          {
            name: "",
            id: "",
            placeholder: "Message",
            className: "w-full m-1 mb-2 bg-gray-100 border-none sm:w-screen sm:mb-0 sm:h-80 focus:outline-none focus:ring focus:ring-primary/20",
            rows: "0"
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsx(Button, { className: " sm:w-80 mt-[2rem] mb-[3rem] ", children: "Submit Now" }) })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "overflow-hidden sm:p-7", children: /* @__PURE__ */ jsx("div", { className: "mapouter", children: /* @__PURE__ */ jsx("div", { className: "gmap_canvas ", children: /* @__PURE__ */ jsx(
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
