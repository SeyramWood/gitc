import { j as jsx } from "../ssr.mjs";
const HeadingPrimary = (prop) => {
  return /* @__PURE__ */ jsx("p", { className: `text-5xl font-bold text-primary ${prop.className}`, children: prop.children });
};
export {
  HeadingPrimary as H
};
