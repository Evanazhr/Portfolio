/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "dark-background": "#121212",
                "secondary-dark": "#374151",
                "light-color": "#D4D4D8",
                "orange-color": "#F97316",
                "gradient-1" : "#f3904f                ",
                "gradient-2" : "#3b4371",
            },
            animation: {
                "pulse-1": "pulse 2s cubic-bezier(0.4, 0, 0.6 , 1) infinite",
                "pulse-2": "pulse 3s cubic-bezier(0.4, 0, 0.6 , 1) infinite",
                "pulse-3": "pulse 4s cubic-bezier(0.4, 0, 0.6 , 1) infinite",
                "pulse-4": "pulse 5s cubic-bezier(0.4, 0, 0.6 , 1) infinite",
            },
            fontFamily: {
                inter: ["Inter", "sans-serif"],
            },
        },
    },
    plugins: [],
}
