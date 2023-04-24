const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
        "./node_modules/flowbite/**/*.js",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: "#F90004",
                "primary-light": "rgba(250, 0, 4, 0.899)",
                secondary: "#000000",
                tertiary: "#272727",
                grey: "rgb(126,125,125)",
                footer: "#1F1F1F",
                faded: "#F5F5F5",
            },
            spacing: {
                "web-l": "3rem",
                "web-md": "2rem",
                "web-xl": "4rem",
                "web-2xl": "5rem",
                "web-s": "1.5rem",
                "web-xs": "1rem",
            },
        },
    },

    plugins: [require("@tailwindcss/forms")],
};
