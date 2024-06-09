import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <footer className="flex w-full flex-col items-center justify-between px-5 text-light-color">
            <div className="flex w-full flex-row justify-between border-b border-dashed border-secondary-dark pb-6">
                <div>
                    <h2 className="mb-2 text-lg font-bold">Other Pages</h2>
                    <ul className="flex flex-col gap-2">
                        <li>
                            <Link
                                to="/soon"
                                className="hover:text-orange-color"
                            >
                                Blogs
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/soon"
                                className="hover:text-orange-color"
                            >
                                Web Games
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-2 text-lg font-bold">Find me on</h2>
                    <ul className="flex flex-col gap-2">
                        <li>
                            <a className="hover:text-orange-color" href="/">
                                Github
                            </a>
                        </li>
                        <li>
                            <a className="hover:text-orange-color" href="/">
                                Instagram
                            </a>
                        </li>

                        <li>
                            <a className="hover:text-orange-color" href="/">
                                Email
                            </a>
                        </li>
                        <li>
                            <a className="hover:text-orange-color" href="/">
                                Discord
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-2 text-lg font-bold">Thanks To</h2>
                    <ul className="flex flex-col gap-2">
                        <li>YouTube</li>
                        <li>ChatGpt</li>
                        <li>Google</li>
                        <li>Stack Overflow</li>
                    </ul>
                </div>
            </div>
            <div className="py-6 pb-32 md:pb-6">
                <h2 className="text-sm">vnzh@2024</h2>
            </div>
        </footer>
    )
}
