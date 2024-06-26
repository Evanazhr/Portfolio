import emptyPhoto from "../assets/empty.jpg"
import quotesThumbnail from "../assets/project-thumbnail/quotes.webp"
import Footer from "../components/Footer"
import toDoListThumbnail from "../assets/project-thumbnail/to-do-list.webp"

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
                    <div>
                        <ul className="mb-8 grid gap-8 border-b border-third-dark pb-8 sm:grid-cols-2">
                            <li
                                onClick={() => {
                                    alert("sorry, the pages under maintenance")
                                }}
                                className="h-auto w-auto rounded-lg border-4 border-third-dark bg-secondary-dark p-6 transition-all duration-150 hover:scale-95"
                            >
                                <a href="#">
                                    <div>
                                        <div className="flex flex-col items-start justify-center">
                                            <h2 className="mb-3 text-xl font-bold">
                                                Tittle
                                            </h2>
                                            <p className="mb-2">description</p>
                                        </div>
                                        <div className="relative">
                                            <img
                                                src={emptyPhoto}
                                                alt="Quotes Generator"
                                                className="h-full w-full rounded-md bg-cover bg-center"
                                            />
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="h-auto w-auto rounded-lg border-4 border-third-dark bg-secondary-dark p-6 transition-all duration-150 hover:scale-95">
                                <a href="#">
                                    <div>
                                        <div className="flex flex-col items-start justify-center">
                                            <h2 className="mb-3 text-xl font-bold">
                                                Tittle
                                            </h2>
                                            <p className="mb-2">description</p>
                                        </div>
                                        <div className="relative">
                                            <img
                                                src={emptyPhoto}
                                                alt="Quotes Generator"
                                                className="h-full w-full rounded-md bg-cover bg-center"
                                            />
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li
                                onClick={() => {
                                    alert("sorry, the pages under maintenance")
                                }}
                                className="h-auto w-auto rounded-lg border-4 border-third-dark bg-secondary-dark p-6 transition-all duration-150 hover:scale-95"
                            >
                                <a href="#">
                                    <div>
                                        <div className="flex flex-col items-start justify-center">
                                            <h2 className="mb-3 text-xl font-bold">
                                                Tittle
                                            </h2>
                                            <p className="mb-2">description</p>
                                        </div>
                                        <div className="relative">
                                            <img
                                                src={emptyPhoto}
                                                alt="Quotes Generator"
                                                className="h-full w-full rounded-md bg-cover bg-center"
                                            />
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li
                                onClick={() => {
                                    alert("sorry, the pages under maintenance")
                                }}
                                className="h-auto w-auto rounded-lg border-4 border-third-dark bg-secondary-dark p-6 transition-all duration-150 hover:scale-95"
                            >
                                <a href="#">
                                    <div>
                                        <div className="flex flex-col items-start justify-center">
                                            <h2 className="mb-3 text-xl font-bold">
                                                Tittle
                                            </h2>
                                            <p className="mb-2">description</p>
                                        </div>
                                        <div className="relative">
                                            <img
                                                src={emptyPhoto}
                                                alt="Quotes Generator"
                                                className="h-full w-full rounded-md bg-cover bg-center"
                                            />
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-3 flex flex-col hidden items-center justify-center md:items-start">
                        <h2 className="text-lg font-bold">Simple Project</h2>
                        <ul className="mt-3 grid gap-8 sm:grid-cols-2 md:grid-cols-2">
                            <li
                                onClick={() => {
                                    alert("sorry, the pages under maintenance")
                                }}
                                className="h-auto w-auto rounded-lg border-4 border-third-dark bg-secondary-dark p-6 transition-all duration-150 hover:scale-95"
                            >
                                <a href="#">
                                    <div>
                                        <div className="flex flex-col items-start justify-center">
                                            <h2 className="mb-3 text-xl font-bold">
                                                Quotes Generator
                                            </h2>
                                            <p className="mb-2">
                                                a simple quotes generator from
                                                Quotable.io API
                                            </p>
                                        </div>
                                        <div className="relative">
                                            <img
                                                src={quotesThumbnail}
                                                alt="Quotes Generator"
                                                className="h-full w-full rounded-md bg-cover bg-center"
                                            />
                                        </div>
                                    </div>
                                </a>
                            </li>

                            <li
                                onClick={() => {
                                    alert("sorry, the pages under maintenance")
                                }}
                                className="h-fit w-auto rounded-lg border-4 border-third-dark bg-secondary-dark p-6 transition-all duration-150 hover:scale-95"
                            >
                                <a
                                    target="_blank"
                                    href="https://evanazhr.github.io/to-do-list-app/"
                                >
                                    <div>
                                        <div className="flex flex-col items-start justify-center">
                                            <h2 className="mb-3 text-xl font-bold">
                                                To do list App
                                            </h2>
                                            <p className="mb-2">
                                                a simple to do list app
                                            </p>
                                        </div>
                                        <div className="relative">
                                            <img
                                                src={toDoListThumbnail}
                                                alt="To Do List App"
                                                className="h-full w-full rounded-md bg-cover bg-center"
                                            />
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
