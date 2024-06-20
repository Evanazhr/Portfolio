import Hero from "../components/Hero"
import Experience from "../components/Experience"
import Skills from "../components/Skills"
import Software from "../components/Software"
import Footer from "../components/Footer"

export default function Home() {
    document.title = "Home | Evan Azhar Hartana"

    return (
        <>            
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
