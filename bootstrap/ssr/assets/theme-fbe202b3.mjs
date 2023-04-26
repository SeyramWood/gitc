import { a as jsxs, j as jsx, F as Fragment } from "../ssr.mjs";
function Card({ label = "", children }) {
  if (label) {
    return /* @__PURE__ */ jsxs("div", { className: "s__card", children: [
      /* @__PURE__ */ jsx("h3", { className: "s__card__title", children: label }),
      children
    ] });
  }
  return /* @__PURE__ */ jsx("div", { className: "s__card", children });
}
function InputWrapper({ label, name, errors, children }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("label", { className: "input__wrapper", children: [
      /* @__PURE__ */ jsx("p", { className: "mb-1", children: label }),
      children
    ] }),
    errors[name] && /* @__PURE__ */ jsx("p", { className: "text-rose-500 input__wrapper__error", children: errors[name] })
  ] });
}
const app = "";
const primeicons = "";
const primereact_min = "";
const theme$1 = "";
const theme = "";
export {
  Card as C,
  InputWrapper as I
};
