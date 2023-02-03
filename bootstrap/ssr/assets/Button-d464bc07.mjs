import { j as jsx } from "../ssr.mjs";
const Button = (prop) => {
  return /* @__PURE__ */ jsx("button", { className: `block border p-4 w-[20rem] rounded-full mx-auto hover:text-white hover:bg-[rgb(255,35,34)] ${prop.className}`, children: prop.children });
};
export {
  Button as B
};
