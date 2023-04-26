import { createInertiaApp } from "@inertiajs/inertia-react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import React from "react";
import { createRoot } from "react-dom/client";

//theme

import "../css/app.css";
// import "../css/dashboard/app.scss";
import "./bootstrap";

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
