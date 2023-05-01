import Link from "next/link";
import Image from "next/image";
import { NavLink } from "@/styles/globalStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
const Navbar = ({ onToggleTheme, themeName }) => {
    return ( 
        <nav className="pl-1 pr-1">
            <div className="logo">
                {/* <Link href={'/'}><Image src="/rt_logo.png" width={50} height={0} alt="Alt Logo" /></Link> */}
            </div>
            <div className="mr-3"><NavLink href="/">Home</NavLink></div>
            <div className="mr-3"><NavLink href="/#resume">Resume</NavLink></div>
            <div className="mr-3"><NavLink href="/#projects">Projects</NavLink></div>
            <NavLink className="ToggleIcon" href="/" onClick={onToggleTheme}><FontAwesomeIcon icon={themeName === 'light' ? faMoon : faSun} /></NavLink>
        </nav>
     );
}
 
export default Navbar;