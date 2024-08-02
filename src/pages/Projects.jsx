import emptyPhoto from "../../public/empty.jpg"
import ProjectCard from "../components/Elements/ProjectCard"

import PagesLayout from "../components/Layouts/PagesLayout"

export default function Projects() {
    return (
        <PagesLayout>
            <div className="w-full animate-fadeUp px-5 py-5 text-light-color md:py-5">
                <h1 className="text-3xl font-bold">Projects</h1>
                <p className="my-1">Showcase of my works</p>
                <div className="py-6">
                    <div>
                        <ul className="mb-8 grid gap-8 border-b border-third-dark pb-8 sm:grid-cols-2 md:grid-cols-3">
                            <li>
                                <ProjectCard thumbnail={emptyPhoto} />
                            </li>
                            <li>
                                <ProjectCard thumbnail={emptyPhoto} />
                            </li>
                            <li>
                                <ProjectCard thumbnail={emptyPhoto} />
                            </li>
                            <li>
                                <ProjectCard thumbnail={emptyPhoto} />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </PagesLayout>
    )
}
