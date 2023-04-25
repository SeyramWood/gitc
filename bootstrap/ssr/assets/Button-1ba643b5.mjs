import { j as jsx } from "../ssr.mjs";
const Button = (prop) => {
  return /* @__PURE__ */ jsx(
    "button",
    {
      className: `block border p-4 sm:w-[20rem] rounded-full mx-auto
         text-white bg-[rgb(255,35,34)] hover:scale-110 transition ease-in-out
          ${prop.className}`,
      type: "submit",
      children: prop.children
    }
  );
};
export {
  Button as B
};
