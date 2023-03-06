import "primeicons/primeicons.css"; //icons
import "primereact/resources/primereact.min.css"; //core css
import "primereact/resources/themes/lara-dark-blue/theme.css"; //theme
import "primereact/resources/themes/lara-light-blue/theme.css"; //theme

import PrimeReact from "primereact/api";
PrimeReact.ripple = true;
PrimeReact.inputStyle = "filled";
PrimeReact.autoZIndex = true;
PrimeReact.zIndex = {
    modal: 99999, // dialog, sidebar
    overlay: 1000, // dropdown, overlaypanel
    menu: 1000, // overlay menus
    tooltip: 1100, // tooltip
    toast: 1200, // toast
};

import "../css/app.css";
import "./bootstrap";

import { createInertiaApp } from "@inertiajs/inertia-react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import React from "react";
import { createRoot } from "react-dom/client";

const appName =
    window.document.getElementsByTagName("title")[0]?.innerText ||
    "Ghana International Trade Commission";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx")
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props} />);
    },
});
