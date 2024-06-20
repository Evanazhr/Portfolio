import empty from "../assets/empty.jpg"
import quotesThumbnail from "../assets/project-image/quotes.webp"
import Footer from "../components/Footer"
import toDoListThumbnail from "../assets/project-image/to-do-list.png"

export default function Project() {
    document.title = "Projects | Evan Azhar Hartana"

    return (
        <>
            <div className="w-full animate-fadeUp px-5 py-5 text-light-color md:py-5">
                <h1 className="text-3xl font-bold">Projects</h1>
                <p className="my-1">
                    These project are simple but have improved my skills
                </p>
                <div className="py-6">
                    {/* <rh2 className="font-bold text-xl">Simple Projects</h2> */}
                    <ul className="mt-3 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                        <li className="group hidden h-auto w-auto rounded-lg bg-dark-background shadow-md shadow-light-color hover:shadow-sm hover:shadow-light-color">
                            <a href="#">
                                <div>
                                    <div className="relative">
                                        <p className="absolute bottom-1 left-0 rounded-sm bg-secondary-dark bg-opacity-80 px-2 text-sm text-light-color">
                                            ReactJs, TailwindCSS,
                                            Quotable.io(API)
                                        </p>
                                        <img
                                            src={quotesThumbnail}
                                            alt="Quotes Generator"
                                            className="h-auto w-auto rounded-t-lg group-hover:opacity-50"
                                        />
                                    </div>
                                    <div className="flex flex-col items-start justify-center p-3">
                                        <h2 className="text-xl font-bold">
                                            Simple Quotes Generator
                                        </h2>
                                        <p>
                                            a simple quotes generator from
                                            Quotable.io API
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li className="group h-auto w-auto rounded-lg bg-dark-background shadow-md shadow-light-color hover:shadow-sm hover:shadow-light-color">
                            <a target="_blank" href="https://evanazhr.github.io/to-do-list-app/">
                                <div>
                                    <div className="relative">
                                        <p className="absolute bottom-1 left-0 rounded-sm bg-secondary-dark bg-opacity-80 px-2 text-sm text-light-color">
                                            ReactJs, VanillaCSS
                                        </p>
                                        <img
                                            src={toDoListThumbnail}
                                            alt="To Do List App"
                                            className="h-auto w-auto rounded-t-lg group-hover:opacity-50"
                                        />
                                    </div>
                                    <div className="flex flex-col items-start justify-center p-3">
                                        <h2 className="text-xl font-bold">
                                            To do list App
                                        </h2>
                                        <p>
                                            a simple to do list app
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <Footer />
        </>
    )
}
