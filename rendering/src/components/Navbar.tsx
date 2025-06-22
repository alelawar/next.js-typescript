import { log } from "console"
import { NavLinks } from "./NavLinks"
import { NavSearch } from "./NavSearch"

export const Navbar = () => {
    log('Navabr Rendered')

    return(
        <>
            <NavLinks/>
            <NavSearch/>
        </>
    )
}