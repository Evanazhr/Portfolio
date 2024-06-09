//import react router dom
import { Routes, Route } from "react-router-dom"

//import homepage
import Home from "../pages/Home.jsx"
import About from "../pages/About.jsx"
import Project from "../pages/Project.jsx"
import Contact from "../pages/Contact.jsx"
import Soon from "../pages/Soon.jsx"

import NoPage from "../pages/NoPage.jsx"

function RoutesIndex() {
    return (
        <Routes>
            {/* route "/" */}
            <Route path="/" element={<Home />} />

            {/* route "/about" */}
            <Route path="/about" element={<About />} />

            {/* route "/project" */}
            <Route path="/project" element={<Project />} />

            {/* route "/contact" */}
            <Route path="/contact" element={<Contact />} />

            {/* route "/Soon" */}
            <Route path="/soon" element={<Soon />} />

            {/* route "/NoPage" */}
            <Route path="/*" element={<NoPage />} />
        </Routes>
    )
}

export default RoutesIndex
