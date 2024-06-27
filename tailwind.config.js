/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "dark-background": "#0a0a0a",
                "secondary-dark": "#1a1a1a",
                "third-dark": "#1f1f1f",
                "light-color": "#F0F3FA",
                "orange-color": "#F97316",
                "gradient-1": "#ffffff",
                "gradient-2": "#d4d4d4",
            },
            animation: {
                "pulse-1": "pulse 2s cubic-bezier(0.4, 0, 0.6 , 1) infinite",
                "pulse-2": "pulse 3s cubic-bezier(0.4, 0, 0.6 , 1) infinite",
                "pulse-3": "pulse 4s cubic-bezier(0.4, 0, 0.6 , 1) infinite",
                "pulse-4": "pulse 5s cubic-bezier(0.4, 0, 0.6 , 1) infinite",
                fadeUp: "fadeUp 0.5s ease-in-out",
                scaleUp: "scaleUp 1s ease-in-out",
                "infinite-slide-l": "infiniteSlideLeft 20s linear infinite",
                "infinite-slide-r": "infiniteSlideRight 20s linear infinite",
            },
            fontFamily: {
                inter: ["Inter", "sans-serif"],
            },
            keyframes: {
                infiniteSlideLeft: {
                    "0%": {
                        transform: "translateX(0%)",
                    },
                    "100%": {
                        transform: "translateX(calc(-200px * 6))",
                    },
                },
                infiniteSlideRight: {
                    "0%": {
                        transform: "translateX(calc(-200px * 6))",
                    },
                    "100%": {
                        transform: "translateX(calc(0))",
                    },
                },
                fadeUp: {
                    "0%": {
                        transform: "translateY(100%)",
                        opacity: "0%",
                    },
                    "100%": { transform: "translateY(0)" },
                },
                scaleUp: {
                    "0%": {
                        transform: "scale(0)",
                    },
                    "80%": {
                        transform: "scale(1.1)",
                    },
                    "100%": {
                        transform: "scale(1)",
                    },
                },
            },
        },
    },
    plugins: [],
}
