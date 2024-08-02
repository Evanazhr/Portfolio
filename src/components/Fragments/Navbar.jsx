import { NavLink } from "react-router-dom"
import HeroPhoto from "../../../public/evan-photo.jpg"
import NavList from "../Elements/NavList"

import { IoMdHome } from "react-icons/io"
import { FaInfoCircle } from "react-icons/fa"
import { FaBriefcase } from "react-icons/fa"
import { FaPaperPlane } from "react-icons/fa"

export default function Navbar() {
    return (
        <header className="flex flex-row md:sticky md:top-0 md:flex-col md:items-center md:justify-start md:self-start md:px-5 md:py-5 lg:w-52 lg:items-start">
            <div className="hidden h-fit w-full border-b border-secondary-dark md:flex md:flex-row md:items-center md:justify-start md:gap-2 md:pb-6">
                <div className="h-12 w-12 animate-scaleUp overflow-hidden rounded-full shadow-xl md:block">
                    <img
                        src={HeroPhoto}
                        alt="evanazh"
                        className="bg-cover bg-center"
                    />
                </div>
                <div className="hidden lg:inline-block">
                    <h2 className="font-bold text-light-color">VNZH</h2>
                </div>
            </div>
            <nav className="fixed bottom-4 left-1/2 z-50 my-3 -translate-x-1/2 rounded-full px-4 py-2 text-light-color shadow-md shadow-light-color backdrop-blur-sm md:static md:left-0 md:-translate-x-0 md:rounded-none md:px-0 md:py-0 md:shadow-none md:backdrop-blur-none lg:w-full">
                <ul className="flex flex-row items-start justify-start gap-6 md:flex-col md:gap-4 md:pb-3 lg:mt-3 lg:border-b lg:border-secondary-dark">
                    <li className="w-full">
                        <NavList to="/" text="Home">
                            <IoMdHome />
                        </NavList>
                    </li>
                    <li className="w-full">
                        <NavList to="/about" text="About">
                            <FaInfoCircle />
                        </NavList>
                    </li>
                    <li className="w-full">
                        <NavList to="/projects" text="Projects">
                            <FaBriefcase />
                        </NavList>
                    </li>
                    <li className="w-full">
                        <NavList to="/contacts" text="Contact">
                            <FaPaperPlane />
                        </NavList>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
