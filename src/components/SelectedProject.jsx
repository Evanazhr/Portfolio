import emptyPhoto from "../assets/empty.jpg"
import { Link } from "react-router-dom"

export default function SelectedProject() {
    return (
        <div className="mb-6 animate-fadeUp border-b border-third-dark">
            <div className="flex flex-row items-center justify-start gap-2">
                <svg
                    width="22"
                    height="22"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M5 1C5 0.447715 5.44772 0 6 0H9C9.55228 0 10 0.447715 10 1V2H14C14.5523 2 15 2.44772 15 3V6C15 6.8888 14.6131 7.68734 14 8.23608V11.5C14 12.3284 13.3284 13 12.5 13H2.5C1.67157 13 1 12.3284 1 11.5V8.2359C0.38697 7.68721 0 6.88883 0 6V3C0 2.44772 0.447716 2 1 2H5V1ZM9 1V2H6V1H9ZM1 3H5H5.5H9.5H10H14V6C14 6.654 13.6866 7.23467 13.1997 7.6004C12.8655 7.85144 12.4508 8 12 8H8V7.5C8 7.22386 7.77614 7 7.5 7C7.22386 7 7 7.22386 7 7.5V8H3C2.5493 8 2.1346 7.85133 1.80029 7.60022C1.31335 7.23446 1 6.65396 1 6V3ZM7 9H3C2.64961 9 2.31292 8.93972 2 8.82905V11.5C2 11.7761 2.22386 12 2.5 12H12.5C12.7761 12 13 11.7761 13 11.5V8.82915C12.6871 8.93978 12.3504 9 12 9H8V9.5C8 9.77614 7.77614 10 7.5 10C7.22386 10 7 9.77614 7 9.5V9Z"
                        fill="currentColor"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                    ></path>
                </svg>
                <h1 className="text-lg font-bold">Selected Project</h1>
            </div>
            <div className="my-6">
                <ul className="mt-3 grid gap-8 sm:grid-cols-2">
                    <li
                        onClick={() => {
                            alert("sorry, the pages under maintenance")
                        }}
                        className="h-fit w-auto rounded-lg border-4 border-third-dark bg-secondary-dark p-6 transition-all duration-150 hover:scale-95"
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
                        className="h-fit w-auto rounded-lg border-4 border-third-dark bg-secondary-dark p-6 transition-all duration-150 hover:scale-95"
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
                        className="h-fit w-auto rounded-lg border-4 border-third-dark bg-secondary-dark p-6 transition-all duration-150 hover:scale-95"
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
                        className="h-fit w-auto rounded-lg border-4 border-third-dark bg-secondary-dark p-6 transition-all duration-150 hover:scale-95"
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
            <div className="flex items-center justify-center py-6">
                <Link
                    className="rounded-lg border-4 border-third-dark px-4 py-2 text-center hover:border-orange-400 hover:text-orange-400"
                    to="/projects"
                    onClick={() => {
                        window.scrollTo(0, 0)
                    }}
                >
                    More ...
                </Link>
            </div>
        </div>
    )
}
