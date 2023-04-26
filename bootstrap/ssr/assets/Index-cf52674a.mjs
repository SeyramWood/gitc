import { a as jsxs, j as jsx } from "../ssr.mjs";
import "react";
import { C as Card } from "./theme-fbe202b3.mjs";
import { D as Dashboard } from "./Dashboard-3650dec2.mjs";
import "primereact/datatable";
import "primereact/column";
import "primereact/button";
import "primereact/rating";
import "primereact/progressbar";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/inertia-react";
import "process";
import "http";
import "primereact/api";
import "@inertiajs/inertia";
import "primereact/avatar";
import "primereact/badge";
const DashboardCTACard = ({ label, value, icon, iconColor, subValue, subText }) => {
  return /* @__PURE__ */ jsxs("div", { className: "dashboard__top__card", children: [
    /* @__PURE__ */ jsxs("div", { className: "dashboard__top__card__main", children: [
      /* @__PURE__ */ jsxs("div", { className: "text", children: [
        /* @__PURE__ */ jsx("p", { children: label }),
        /* @__PURE__ */ jsx("p", { children: value })
      ] }),
      /* @__PURE__ */ jsx("div", { className: `icon blue ${iconColor}`, children: /* @__PURE__ */ jsx("i", { className: `pi ${icon}` }) })
    ] }),
    /* @__PURE__ */ jsxs("p", { className: "dashboard__top__card__sub", children: [
      /* @__PURE__ */ jsx("span", { children: subValue }),
      " ",
      subText
    ] })
  ] });
};
const Index = ({ count }) => {
  return /* @__PURE__ */ jsx(Dashboard, { page: "Dashboard", children: /* @__PURE__ */ jsx("div", { className: "dashboard__top", children: /* @__PURE__ */ jsxs("div", { className: "s__row", children: [
    /* @__PURE__ */ jsx("div", { className: "s__col c--3", children: /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(
      DashboardCTACard,
      {
        label: "Publications",
        value: `${(count == null ? void 0 : count.publications) || 0}`,
        icon: "pi-globe",
        iconColor: "blue",
        subValue: "",
        subText: ""
      }
    ) }) }),
    /* @__PURE__ */ jsx("div", { className: "s__col c--3", children: /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(
      DashboardCTACard,
      {
        label: "Cases",
        value: `${(count == null ? void 0 : count.cases) || 0}`,
        icon: "pi-file",
        iconColor: "orange",
        subValue: "",
        subText: ""
      }
    ) }) }),
    /* @__PURE__ */ jsx("div", { className: "s__col c--3", children: /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(
      DashboardCTACard,
      {
        label: "Albums",
        value: `${(count == null ? void 0 : count.albums) || 0}`,
        icon: "pi-images",
        iconColor: "seablue",
        subValue: "",
        subText: ""
      }
    ) }) }),
    /* @__PURE__ */ jsx("div", { className: "s__col c--3", children: /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(
      DashboardCTACard,
      {
        label: "Users",
        value: `${(count == null ? void 0 : count.users) || 0}`,
        icon: "pi-users",
        iconColor: "indigo",
        subValue: "",
        subText: ""
      }
    ) }) })
  ] }) }) });
};
export {
  Index as default
};
