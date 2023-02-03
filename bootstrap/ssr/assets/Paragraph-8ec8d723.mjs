import { j as jsx } from "../ssr.mjs";
const Paragraph = (prop) => {
  return /* @__PURE__ */ jsx("div", { className: `text-lg text-grey ${prop.className}`, children: prop.children });
};
export {
  Paragraph as P
};
