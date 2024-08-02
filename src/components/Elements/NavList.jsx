import { NavLink } from "react-router-dom"

const NavList = ({ to, text, children }) => {
    const NavLinkPathStyle =
        "bg-gradient-to-r from-gradient-1 to-gradient-2 text-dark-background rounded-full md:rounded-lg w-full font-bold flex flex row justify-start p-3"
    const pathStyle =
        "p-3 w-full flex flex row bg-gradient-to-r hover:from-gradient-1 hover:text-dark-background hover:to-gradient-2  rounded-full md:rounded-lg transition-all ease-in-out duration-150 justify-center lg:justify-start"

    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                isActive ? NavLinkPathStyle : pathStyle
            }
        >
            <span className="flex flex-row items-center justify-start gap-2">
                {children}

                <span className="hidden lg:inline-block">{text}</span>
            </span>
        </NavLink>
    )
}

export default NavList
