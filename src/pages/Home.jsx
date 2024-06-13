import Hero from "../components/Hero"
import Experience from "../components/Experience"
import Skills from "../components/Skills"
import Software from "../components/Software"
import Footer from "../components/Footer"

import { Helmet } from "react-helmet"

export default function Home() {
    document.title = "Home | Evan Azhar Hartana"

    return (
        <>
            <Helmet>
                <meta name="Description" content="portfolio website Evan Azhar" />
                <meta name="keywords" content="evanazh, Evan Azhar, Evan, Evan Azhar Hartana, vnzh, Evanazh, Evanzhr" />
            </Helmet>
            
            <div className="w-full px-5 py-5 text-light-color md:py-5">
                {/* Hero Section */}
                <Hero />

                {/* Career and Experience  */}
                <Experience />

                {/* Stacks or skills */}
                <Skills />

                {/* Software */}
                <Software />
            </div>
            <Footer />
        </>
    )
}
