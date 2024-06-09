import Hero from "../components/Hero"
import Experience from "../components/Experience"
import Skills from "../components/Skills"
import Software from "../components/Software"

export default function Home() {
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
        </>
    )
}
