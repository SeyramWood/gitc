import { j as jsx } from "../ssr.mjs";
const HeadingSecondary = (prop) => {
  return /* @__PURE__ */ jsx("div", { className: `my-4 text-3xl text-primary ${prop.className}`, children: prop.children });
};
export {
  HeadingSecondary as H
};
