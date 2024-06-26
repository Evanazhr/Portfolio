import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <footer className="flex w-full animate-fadeUp flex-col items-center justify-between px-5 text-light-color">
            <div className="flex w-full flex-row justify-center border-b border-dashed border-secondary-dark pb-6">
                <div className="flex flex-col items-center justify-center">
                    <h2 className="mb-2 text-lg font-bold">Find me on</h2>
                    <ul className="flex flex-row gap-4">
                        <li>
                            <a
                                target="_blank"
                                href="https://github.com/Evanazhr/"
                                className="hover:text-orange-color"
                            >
                                Github
                            </a>
                        </li>
                        <li>
                            <a
                                className="hover:text-orange-color"
                                target="_blank"
                                href="https://www.instagram.com/evanazh?igsh=OWMzcG1wOXBlcThv"
                            >
                                Instagram
                            </a>
                        </li>

                        <li>
                            <a
                                className="hover:text-orange-color"
                                href="mailto:evanazhr@gmail.com"
                                target="_blank"
                            >
                                Email
                            </a>
                        </li>
                        <li>
                            <a
                                className="hover:text-orange-color"
                                href="https://discord.com/users/Evan Azhar Hartana#0738"
                                target="_blank"
                            >
                                Discord
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="py-6 pb-32 md:pb-6">
                <h2 className="text-sm">evanazh@2024</h2>
            </div>
        </footer>
    )
}
