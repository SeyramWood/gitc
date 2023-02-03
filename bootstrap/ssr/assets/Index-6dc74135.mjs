import { j as jsx } from "../ssr.mjs";
import "react";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/inertia-react";
import "process";
import "http";
const Index = () => {
  return /* @__PURE__ */ jsx("div", { children: "Dashboard" });
};
export {
  Index as default
};
