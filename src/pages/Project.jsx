import empty from "../assets/empty.jpg"
import { Link } from "react-router-dom"

export default function Project() {
    return (
        <>
            <div className="w-full px-5 py-5 text-light-color md:py-5">
                <h1 className="text-3xl font-bold">Projects</h1>
                <p className="my-1">Recents Projects</p>
                <div className="py-6">
                    <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                        <li className="group h-auto w-auto rounded-lg bg-dark-background shadow-md shadow-light-color hover:shadow-sm hover:shadow-light-color">
                            <Link to="/soon">
                                <div>
                                    <div>
                                        <img
                                            src={empty}
                                            alt=""
                                            className="h-auto w-auto rounded-t-lg group-hover:opacity-50"
                                        />
                                    </div>
                                    <div className="flex flex-col items-start justify-center p-3">
                                        <h2 className="text-2xl font-bold">
                                            Project Name
                                        </h2>
                                        <p>Description</p>
                                        <p>Stacks</p>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li className="group h-auto w-auto rounded-lg bg-dark-background shadow-md shadow-light-color hover:shadow-sm hover:shadow-light-color">
                            <Link to="/soon">
                                <div>
                                    <div>
                                        <img
                                            src={empty}
                                            alt=""
                                            className="h-auto w-auto rounded-t-lg group-hover:opacity-50"
                                        />
                                    </div>
                                    <div className="flex flex-col items-start justify-center p-3">
                                        <h2 className="text-2xl font-bold">
                                            Project Name
                                        </h2>
                                        <p>Description</p>
                                        <p>Stacks</p>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li className="group h-auto w-auto rounded-lg bg-dark-background shadow-md shadow-light-color hover:shadow-sm hover:shadow-light-color">
                            <Link to="/soon">
                                <div>
                                    <div>
                                        <img
                                            src={empty}
                                            alt=""
                                            className="h-auto w-auto rounded-t-lg group-hover:opacity-50"
                                        />
                                    </div>
                                    <div className="flex flex-col items-start justify-center p-3">
                                        <h2 className="text-2xl font-bold">
                                            Project Name
                                        </h2>
                                        <p>Description</p>
                                        <p>Stacks</p>
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
