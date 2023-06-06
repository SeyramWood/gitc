import { j as jsx, a as jsxs, F as Fragment } from "../ssr.mjs";
import { Link } from "@inertiajs/inertia-react";
import axios from "axios";
import { W as WebsiteLayout } from "./WebsiteLayout-a292da02.mjs";
import { B as Button } from "./Button-1ba643b5.mjs";
import { u as useFormValidation } from "./useFormValidation-8a20563f.mjs";
import { useState } from "react";
import "react/jsx-runtime";
import "react-dom/server";
import "process";
import "http";
import "react-icons/sl";
import "./helpers-97f56fd4.mjs";
import "@n8tb1t/use-scroll-position";
import "react-icons/rx";
const HeadingPrimary = (prop) => {
  return /* @__PURE__ */ jsx("p", { className: `text-5xl font-bold text-primary ${prop.className}`, children: prop.children });
};
const Contact = () => {
  const [successMessage, setSuccessMessage] = useState(false);
  const [error, setError] = useState(true);
  const contactForm = useFormValidation(
    {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      companyName: "",
      industry: "",
      subject: "",
      message: ""
    },
    {
      firstName: "required|string",
      lastName: "required|string",
      email: "required|email",
      phone: "required|numeric|min:9|max:9",
      companyName: "string",
      industry: "string",
      subject: "required|string",
      message: "required|string"
    },
    submitForm
  );
  function submitForm() {
    axios.post(`http://127.0.0.1:8000/contact`, contactForm.state).then((response) => {
      contactForm.clearValues(true);
      contactForm.updateIsSubmitting(false);
    }).catch((error2) => {
      setError("eerror occured");
    });
    setSuccessMessage(true);
  }
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
    /* @__PURE__ */ jsx("div", { className: "px-5 sm:px-32 sm:py-0 py-14", children: successMessage ? /* @__PURE__ */ jsxs("div", { className: "pb-6 sm:pt-14 text-center", children: [
      /* @__PURE__ */ jsx(HeadingPrimary, { children: "Your message is sent !" }),
      /* @__PURE__ */ jsx(Button, { className: " sm:w-80 mt-[2rem] mb-[3rem] ", children: /* @__PURE__ */ jsx(Link, { href: "/", children: "Okay" }) })
    ] }) : /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("div", { className: "pb-6 sm:pt-14 text-center", children: /* @__PURE__ */ jsx(HeadingPrimary, { children: "Leave A Message" }) }),
      /* @__PURE__ */ jsxs("div", { className: "mx-2 sm:pr-2", children: [
        /* @__PURE__ */ jsx("h2", { children: error }),
        /* @__PURE__ */ jsxs("form", { onSubmit: contactForm.handleSubmit, className: "justify-center ", children: [
          /* @__PURE__ */ jsxs("div", { className: "sm:grid grid-cols-2 text-center", children: [
            /* @__PURE__ */ jsxs("div", { className: "p-2", children: [
              /* @__PURE__ */ jsxs("p", { className: "text-left text-[13px] text-red-600", children: [
                " ",
                contactForm.errors.firstName
              ] }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  name: "firstName",
                  placeholder: "First Name*",
                  className: "w-full rounded bg-gray-100 border-none p-3 focus:ring focus:ring-primary/20",
                  id: "firstName",
                  onChange: contactForm.handleChange,
                  value: contactForm.state.firstName
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "p-2", children: [
              /* @__PURE__ */ jsx("p", { className: "text-left text-[13px]  text-red-600", children: contactForm.errors.lastName }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  name: "lastName",
                  placeholder: "Last Name*",
                  className: "w-full rounded bg-gray-100 border-none p-3 focus:outline-none focus:ring focus:ring-primary/20",
                  id: "lastName",
                  onChange: contactForm.handleChange,
                  value: contactForm.state.lastName
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "p-2", children: [
              /* @__PURE__ */ jsx("p", { className: "text-left text-[13px] text-red-600", children: contactForm.errors.email }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "email",
                  name: "email",
                  placeholder: "Email*",
                  className: "w-full rounded bg-gray-100 border-none p-3 focus:ring focus:ring-primary/20",
                  id: "email",
                  onChange: contactForm.handleChange,
                  value: contactForm.state.email
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "p-2", children: [
              Array.of(contactForm.errors.phone).map(
                (it) => Array.of(it).map((a) => /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "text-left text-[13px] text-red-600", children: [
                  " ",
                  it,
                  " "
                ] }) }))
              ),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  name: "phone",
                  placeholder: "Phone Number*",
                  className: "w-full rounded bg-gray-100 border-none p-3 focus:ring focus:ring-primary/20",
                  id: "phone",
                  onChange: contactForm.handleChange,
                  value: contactForm.state.phone
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "p-2", children: [
              /* @__PURE__ */ jsx("p", { className: "text-left text-[13px] text-red-600", children: contactForm.errors.companyName }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  name: "companyName",
                  placeholder: "Company Name*",
                  className: "w-full rounded bg-gray-100 border-none p-3 focus:ring focus:ring-primary/20",
                  id: "companyName",
                  onChange: contactForm.handleChange,
                  value: contactForm.state.companyName
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "p-2", children: [
              /* @__PURE__ */ jsx("p", { className: "text-left text-[13px] text-red-600", children: contactForm.errors.industry }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  name: "industry",
                  placeholder: "Industry*",
                  className: "w-full rounded bg-gray-100 border-none p-3 focus:ring focus:ring-primary/20",
                  id: "industry",
                  onChange: contactForm.handleChange,
                  value: contactForm.state.industry
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-2", children: [
            /* @__PURE__ */ jsx("p", { className: "text-left text-[13px] text-red-600", children: contactForm.errors.subject }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                name: "subject",
                placeholder: "Subject*",
                className: "w-full  rounded bg-gray-100 border-none p-3 focus:ring focus:ring-primary/20",
                id: "subject",
                onChange: contactForm.handleChange,
                value: contactForm.state.subject
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "p-2", children: [
            /* @__PURE__ */ jsx("p", { className: "text-left text-[13px] text-red-600", children: contactForm.errors.message }),
            /* @__PURE__ */ jsx(
              "textarea",
              {
                cols: "30",
                rows: "10",
                name: "message",
                id: "message",
                placeholder: "Message",
                className: "w-full rounded  bg-gray-100 border-none p-3 focus:ring focus:ring-primary/20",
                onChange: contactForm.handleChange,
                value: contactForm.state.message
              }
            )
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsx(Button, { type: "submit", className: " sm:w-80 mt-[2rem] mb-[3rem] ", children: "Submit Now" }) })
        ] })
      ] })
    ] }) }),
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
