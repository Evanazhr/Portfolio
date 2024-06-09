import { NavLink } from "react-router-dom"
import HeroPhoto from "../assets/hero-photo.jpg"

export default function Navbar() {
    const namePath = document.location.pathname
    const NavLinkPathStyle =
        "bg-secondary-dark rounded-full md:rounded-lg w-full font-bold flex flex row justify-start p-3"
    const pathStyle =
        "p-3 w-full flex flex row hover:bg-secondary-dark rounded-full md:rounded-lg transition-all ease-in-out duration-150 justify-center lg:justify-start"

    return (
        <header className="flex flex-row md:sticky md:top-0 md:flex-col md:items-center md:justify-start md:self-start md:px-5 md:py-5 lg:w-52 lg:items-start">
            <div className="hidden h-fit w-full border-b border-secondary-dark md:flex md:flex-row md:items-center md:justify-start md:gap-2 md:pb-6">
                <div className="h-12 w-12 overflow-hidden rounded-full shadow-xl md:block">
                    <img
                        src={HeroPhoto}
                        alt="photo"
                        className="bg-cover bg-center"
                    />
                </div>
                <div className="hidden lg:inline-block">
                    <h2 className="font-bold text-light-color">VNZH</h2>
                </div>
            </div>
            <nav className="fixed bottom-4 z-50 left-1/2 my-3 -translate-x-1/2 rounded-full  px-4 py-2 text-light-color shadow-md shadow-light-color backdrop-blur-sm md:static md:left-0 md:-translate-x-0 md:rounded-none md:px-0 md:py-0 md:shadow-none md:backdrop-blur-none lg:w-full">
                <h2 className="font-bold hidden lg:block lg:my-3">General</h2>
                <ul className="flex  flex-row items-start lg:mt-3 justify-start gap-6 md:flex-col lg:border-b lg:border-secondary-dark md:gap-4 md:pb-3">
                    <li className="w-full">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? NavLinkPathStyle : pathStyle
                            }
                        >
                            <span className="flex flex-row items-center justify-start gap-2">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 15 15"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M7.07926 0.222253C7.31275 -0.007434 7.6873 -0.007434 7.92079 0.222253L14.6708 6.86227C14.907 7.09465 14.9101 7.47453 14.6778 7.71076C14.4454 7.947 14.0655 7.95012 13.8293 7.71773L13 6.90201V12.5C13 12.7761 12.7762 13 12.5 13H2.50002C2.22388 13 2.00002 12.7761 2.00002 12.5V6.90201L1.17079 7.71773C0.934558 7.95012 0.554672 7.947 0.32229 7.71076C0.0899079 7.47453 0.0930283 7.09465 0.32926 6.86227L7.07926 0.222253ZM7.50002 1.49163L12 5.91831V12H10V8.49999C10 8.22385 9.77617 7.99999 9.50002 7.99999H6.50002C6.22388 7.99999 6.00002 8.22385 6.00002 8.49999V12H3.00002V5.91831L7.50002 1.49163ZM7.00002 12H9.00002V8.99999H7.00002V12Z"
                                        fill="currentColor"
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>

                                <span className="hidden lg:inline-block">
                                    Home
                                </span>
                            </span>
                        </NavLink>
                    </li>
                    <li className="w-full">
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                isActive ? NavLinkPathStyle : pathStyle
                            }
                        >
                            <span className="flex flex-row items-center justify-start gap-2">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 15 15"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M7.5 0.875C5.49797 0.875 3.875 2.49797 3.875 4.5C3.875 6.15288 4.98124 7.54738 6.49373 7.98351C5.2997 8.12901 4.27557 8.55134 3.50407 9.31167C2.52216 10.2794 2.02502 11.72 2.02502 13.5999C2.02502 13.8623 2.23769 14.0749 2.50002 14.0749C2.76236 14.0749 2.97502 13.8623 2.97502 13.5999C2.97502 11.8799 3.42786 10.7206 4.17091 9.9883C4.91536 9.25463 6.02674 8.87499 7.49995 8.87499C8.97317 8.87499 10.0846 9.25463 10.8291 9.98831C11.5721 10.7206 12.025 11.8799 12.025 13.5999C12.025 13.8623 12.2376 14.0749 12.5 14.0749C12.7623 14.075 12.975 13.8623 12.975 13.6C12.975 11.72 12.4778 10.2794 11.4959 9.31166C10.7244 8.55135 9.70025 8.12903 8.50625 7.98352C10.0187 7.5474 11.125 6.15289 11.125 4.5C11.125 2.49797 9.50203 0.875 7.5 0.875ZM4.825 4.5C4.825 3.02264 6.02264 1.825 7.5 1.825C8.97736 1.825 10.175 3.02264 10.175 4.5C10.175 5.97736 8.97736 7.175 7.5 7.175C6.02264 7.175 4.825 5.97736 4.825 4.5Z"
                                        fill="currentColor"
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                                <span className="hidden lg:inline-block">
                                    Me
                                </span>
                            </span>
                        </NavLink>
                    </li>
                    <li className="w-full">
                        <NavLink
                            to="/project"
                            className={({ isActive }) =>
                                isActive ? NavLinkPathStyle : pathStyle
                            }
                        >
                            <span className="flex flex-row items-center justify-start gap-2">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 15 15"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M3.5 2C3.22386 2 3 2.22386 3 2.5V12.5C3 12.7761 3.22386 13 3.5 13H11.5C11.7761 13 12 12.7761 12 12.5V6H8.5C8.22386 6 8 5.77614 8 5.5V2H3.5ZM9 2.70711L11.2929 5H9V2.70711ZM2 2.5C2 1.67157 2.67157 1 3.5 1H8.5C8.63261 1 8.75979 1.05268 8.85355 1.14645L12.8536 5.14645C12.9473 5.24021 13 5.36739 13 5.5V12.5C13 13.3284 12.3284 14 11.5 14H3.5C2.67157 14 2 13.3284 2 12.5V2.5Z"
                                        fill="currentColor"
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                                <span className="hidden lg:inline-block">
                                    Projects
                                </span>
                            </span>
                        </NavLink>
                    </li>
                    <li className="w-full">
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                isActive ? NavLinkPathStyle : pathStyle
                            }
                        >
                            <span className="flex flex-row items-center justify-start gap-2">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 15 15"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M1.20308 1.04312C1.00481 0.954998 0.772341 1.0048 0.627577 1.16641C0.482813 1.32802 0.458794 1.56455 0.568117 1.75196L3.92115 7.50002L0.568117 13.2481C0.458794 13.4355 0.482813 13.672 0.627577 13.8336C0.772341 13.9952 1.00481 14.045 1.20308 13.9569L14.7031 7.95693C14.8836 7.87668 15 7.69762 15 7.50002C15 7.30243 14.8836 7.12337 14.7031 7.04312L1.20308 1.04312ZM4.84553 7.10002L2.21234 2.586L13.2689 7.50002L2.21234 12.414L4.84552 7.90002H9C9.22092 7.90002 9.4 7.72094 9.4 7.50002C9.4 7.27911 9.22092 7.10002 9 7.10002H4.84553Z"
                                        fill="currentColor"
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                                <span className="hidden lg:inline-block">
                                    Contact
                                </span>
                            </span>
                        </NavLink>
                    </li>
                </ul>

                {/* extras */}
                <ul className="hidden lg:block lg:border-b lg:mt-3 lg:pb-3 lg:border-secondary-dark">
                <h2 className="font-bold lg:my-3">Extras</h2>

                <li className="w-full">
                        <NavLink
                            to="/soon"
                            className={({ isActive }) =>
                                isActive ? NavLinkPathStyle : pathStyle
                            }
                        >
                            <span className="flex flex-row items-center justify-start gap-2">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 15 15"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M3.5 2C3.22386 2 3 2.22386 3 2.5V12.5C3 12.7761 3.22386 13 3.5 13H11.5C11.7761 13 12 12.7761 12 12.5V6H8.5C8.22386 6 8 5.77614 8 5.5V2H3.5ZM9 2.70711L11.2929 5H9V2.70711ZM2 2.5C2 1.67157 2.67157 1 3.5 1H8.5C8.63261 1 8.75979 1.05268 8.85355 1.14645L12.8536 5.14645C12.9473 5.24021 13 5.36739 13 5.5V12.5C13 13.3284 12.3284 14 11.5 14H3.5C2.67157 14 2 13.3284 2 12.5V2.5Z"
                                        fill="currentColor"
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                                <span className="hidden lg:inline-block">
                                    Blogs
                                </span>
                            </span>
                        </NavLink>
                    </li>
                    <li className="w-full">
                        <NavLink
                            to="/soon"
                            className={({ isActive }) =>
                                isActive ? NavLinkPathStyle : pathStyle
                            }
                        >
                            <span className="flex flex-row items-center justify-start gap-2">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 15 15"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M1.20308 1.04312C1.00481 0.954998 0.772341 1.0048 0.627577 1.16641C0.482813 1.32802 0.458794 1.56455 0.568117 1.75196L3.92115 7.50002L0.568117 13.2481C0.458794 13.4355 0.482813 13.672 0.627577 13.8336C0.772341 13.9952 1.00481 14.045 1.20308 13.9569L14.7031 7.95693C14.8836 7.87668 15 7.69762 15 7.50002C15 7.30243 14.8836 7.12337 14.7031 7.04312L1.20308 1.04312ZM4.84553 7.10002L2.21234 2.586L13.2689 7.50002L2.21234 12.414L4.84552 7.90002H9C9.22092 7.90002 9.4 7.72094 9.4 7.50002C9.4 7.27911 9.22092 7.10002 9 7.10002H4.84553Z"
                                        fill="currentColor"
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                                <span className="hidden lg:inline-block">
                                    Games
                                </span>
                            </span>
                        </NavLink>
                    </li>

                </ul>
            </nav>
        </header>
    )
}
