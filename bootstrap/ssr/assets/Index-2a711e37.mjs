import { j as jsx, a as jsxs } from "../ssr.mjs";
import { Inertia } from "@inertiajs/inertia";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputText";
import "react";
import { C as Card, I as InputWrapper } from "./theme-fbe202b3.mjs";
import { u as useFormValidation } from "./useFormValidation-8a20563f.mjs";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/inertia-react";
import "process";
import "http";
const Login = () => {
  const userForm = useFormValidation(
    {
      email: "",
      password: ""
    },
    {
      email: "required|email",
      password: "required|string|min:8"
    },
    submitUserForm
  );
  function submitUserForm() {
    Inertia.post("/auth/login", userForm.state, {
      onError: (errors) => {
        userForm.updateIsSubmitting(false);
        userForm.setServerErrors({
          email: errors.email,
          password: ""
        });
      },
      onSuccess: (page) => {
      }
    });
  }
  return /* @__PURE__ */ jsx("main", { className: "flex items-center justify-center w-full h-screen bg-zinc-600", children: /* @__PURE__ */ jsx("div", { className: "w-[40%]", children: /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs("div", { className: "my-5 ", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-start ", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "/images/logo.png",
          alt: "",
          className: " object-center w-[8rem] h-[8rem]"
        }
      ),
      /* @__PURE__ */ jsx("h5", { className: "mt-1 leading-4 text-start", children: "WELCOME BACK" })
    ] }),
    /* @__PURE__ */ jsxs("form", { onSubmit: userForm.handleSubmit, className: "mt-3", children: [
      /* @__PURE__ */ jsx("div", { className: "s__row", children: /* @__PURE__ */ jsx("div", { className: "s__col c--12", children: /* @__PURE__ */ jsx(
        InputWrapper,
        {
          label: "Email",
          name: "email",
          errors: userForm.errors,
          children: /* @__PURE__ */ jsx(
            InputText,
            {
              type: "email",
              name: "email",
              value: userForm.state.email,
              onBlur: userForm.handleBlur,
              onChange: userForm.handleChange
            }
          )
        }
      ) }) }),
      /* @__PURE__ */ jsx("div", { className: "s__row", children: /* @__PURE__ */ jsx("div", { className: "s__col c--12", children: /* @__PURE__ */ jsx(
        InputWrapper,
        {
          label: "Password",
          name: "password",
          errors: userForm.errors,
          children: /* @__PURE__ */ jsx(
            InputText,
            {
              type: "password",
              name: "password",
              value: userForm.state.password,
              onBlur: userForm.handleBlur,
              onChange: userForm.handleChange
            }
          )
        }
      ) }) }),
      /* @__PURE__ */ jsx("div", { className: "flex justify-start", children: /* @__PURE__ */ jsx(
        Button,
        {
          type: "submit",
          label: "Login",
          loading: userForm.isSubmitting,
          disabled: userForm.isSubmitting
        }
      ) })
    ] })
  ] }) }) }) });
};
export {
  Login as default
};
