import { useState, useEffect } from "react";
import { NavLink } from "@/styles/globalStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from "next/link";

const NavX = ({ onToggleTheme, themeName }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return ( 
        <>
        <div className="">
            <header className="fixed top-0 z-30 w-full px-2 py-4  sm:px-4 shadow-xl mask_bg">
                <div className="flex items-center justify-between mx-auto max-w-7xl">
                    <a href="#">
                        <span className="text-2xl font-extrabold text-red-600">MK</span>
                    </a>
                    <div className="flex items-center space-x-1">
                        <NavLink className="mr-2 ToggleIcon" href="/" onClick={onToggleTheme}><FontAwesomeIcon icon={themeName === 'light' ? faMoon : faSun} /></NavLink>
                        <ul className="hidden space-x-2 md:inline-flex">
                            <li><NavLink className="mr-2" href="/">Home</NavLink></li>
                            <li><NavLink className="mr-2" href="/#resume">Resume</NavLink></li>
                            <li><NavLink className="mr-2" href="/#projects">Projects</NavLink></li>
                        </ul>
                        {isOpen && (
                            <div className="md:hidden ">
                                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                    <ul className=" md:hidden">
                                        <li><NavLink className="mr-2" href="/">Home</NavLink></li>
                                        <li><NavLink className="mr-2" href="/#resume">Resume</NavLink></li>
                                        <li><NavLink className="mr-2" href="/#projects">Projects</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                        )}
                        <div className="inline-flex md:hidden">
                            <button className="flex-none px-2" onClick={toggleMenu}>
                            {/* <i className="fa-solid fa-bars" style={{fontSize: "20px"}}></i> */}
                            {isOpen ? <FaTimes /> : <FaBars />}
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </div>
        </>
     );
}
 
export default NavX;