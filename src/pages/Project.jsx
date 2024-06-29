import emptyPhoto from "../assets/empty.jpg"
import quotesThumbnail from "../assets/project-thumbnail/quotes.webp"
import Footer from "../components/Footer"
import toDoListThumbnail from "../assets/project-thumbnail/to-do-list.webp"
import ProjectCard from "../components/ProjectCard"

export default function Project() {
    document.title = "Projects | Evan Azhar Hartana"

    return (
        <>
            <div className="w-full animate-fadeUp px-5 py-5 text-light-color md:py-5">
                <h1 className="text-3xl font-bold">Projects</h1>
                <p className="my-1">Showcase of my works</p>
                <div className="py-6">
                    <div>
                        <ul className="mb-8 grid gap-8 border-b border-third-dark pb-8 sm:grid-cols-2">
                            <li>
                                <ProjectCard />
                            </li>

                            <li>
                                <ProjectCard />
                            </li>

                            <li>
                                <ProjectCard />
                            </li>

                            <li>
                                <ProjectCard />
                            </li>
                        </ul>
                    </div>
                    <div className="mt-3 hidden flex-col items-center justify-center md:items-start">
                        <h2 className="text-lg font-bold">Simple Project</h2>
                        <ul className="mt-3 grid gap-8 sm:grid-cols-2 md:grid-cols-2">
                            <li>
                                <ProjectCard
                                    title="Quotes Generator"
                                    description=" a simple quotes generator from
                            Quotable.io API"
                                    imageAlt="Quotes Generator Image"
                                    thumbnail={quotesThumbnail}
                                    link="#"
                                ></ProjectCard>
                            </li>
                            <li>
                                <ProjectCard
                                    title="Simple To Do List App"
                                    description="a simple to do list app created by use reactJs"
                                    imageAlt="to do list app image"
                                    thumbnail={toDoListThumbnail}
                                />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
