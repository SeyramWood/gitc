const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
        "./node_modules/flowbite/**/*.js"
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Nunito", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: "#F9443E",
                secondary: "#111111",
                tertiary: "#272727",
            },
            spacing: {
                "web-l": "3rem",
                "web-s": "1.5rem",
                "web-xs": "1rem",
            },
        },
    },

    plugins: [require("@tailwindcss/forms"),require('flowbite/plugin'),[require("daisyui")]],




};
