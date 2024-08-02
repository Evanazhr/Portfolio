import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Home from "./pages/Home"
import About from "./pages/About"
import NoPage from "./pages/NoPage"
import Projects from "./pages/Projects"
import Soon from "./pages/Soon"
import Contacts from "./pages/Contacts"

import "./index.css"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/projects",
        element: <Projects />,
    },
    {
        path: "/Contacts",
        element: <Contacts />,
    },
    {
        path: "/soon",
        element: <Soon />,
    },
    {
        path: "/*",
        element: <NoPage />,
    },
])

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
