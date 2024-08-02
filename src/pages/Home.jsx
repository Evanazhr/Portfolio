import Hero from "../components/Layouts/Hero"
import SelectedProject from "../components/Fragments/SelectedProject"
import PagesLayout from "../components/Layouts/PagesLayout"

export default function Home() {
    return (
        <PagesLayout>
            <div className="w-full flex-col p-6">
                <Hero />
                <SelectedProject />
            </div>
        </PagesLayout>
    )
}
