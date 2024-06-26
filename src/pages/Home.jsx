import Hero from "../components/Hero"
import SelectedProject from "../components/SelectedProject"
import Skills from "../components/Skills"
import Software from "../components/Software"
import Footer from "../components/Footer"

export default function Home() {
    document.title = "Home | Evan Azhar Hartana"

    return (
        <>
            <div className="w-full px-5 py-5 text-light-color md:py-12">
                {/* Hero Section */}
                <Hero />

                {/* Career and SelectedProject  */}
                <SelectedProject />

                {/* Stacks or skills */}
                <Skills />

                {/* Software */}
                <Software />
            </div>
            <Footer />
        </>
    )
}
