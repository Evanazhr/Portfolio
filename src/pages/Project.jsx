import empty from "../assets/empty.jpg"
import quotesImage from "../assets/project-image/quotes.webp"
import { Link } from "react-router-dom"

export default function Project() {
    return (
        <>
            <div className="w-full px-5 py-5 text-light-color md:py-5">
                <h1 className="text-3xl font-bold">Projects</h1>
                <p className="my-1">My Projects</p>
                <div className="py-6">
                    {/* <h2 className="font-bold text-xl">Simple Projects</h2> */}
                    <ul className="mt-3 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                        <li className="group h-auto w-auto rounded-lg bg-dark-background shadow-md shadow-light-color hover:shadow-sm hover:shadow-light-color">
                            <Link to="/projects/quotes-generator">
                                <div>
                                    <div className="relative">
                                        <p className="absolute bottom-1 left-0 rounded-sm bg-secondary-dark bg-opacity-80 px-2 text-sm text-light-color">
                                            ReactJs, TailwindCSS,
                                            Quotable.io(API)
                                        </p>
                                        <img
                                            src={quotesImage}
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
                            </Link>
                        </li>
                                        </ul>
                </div>
            </div>
        </>
    )
}
