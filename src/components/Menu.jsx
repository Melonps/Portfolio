import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import '../styles/menu.scss'

import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import GitHubIcon from '@mui/icons-material/GitHub';
import { GitIcon, KaggleIcon } from "./Icon";

function Menu() {
    const [menuactive, setMenuactive] = useState(false);

    const menuToggle = () => {
        setMenuactive(!menuactive)
    }
    return (
        <>
            
            <div className={menuactive ? 'menu-trigger _active ' : 'menu-trigger'} onClick={menuToggle}>
                    <span className="bg-dark"></span>
                    <span className="bg-dark"></span>
                    <span className="bg-dark"></span>
            </div>

            <div className={menuactive ? "menu-bg min-w-[70vw] sm:min-w-[90vw] rounded-lg flex flex-col items-center _active" : "menu-bg"}>
                {/*
                <div className='menu-wrapper'>
                    <p>Menu</p>
                </div>
                */}
                <nav className="flex items-center justify-center flex-col">
                    <a className = "text-light" href="https://www.google.com">test</a>
                    <a className = "text-light" href="https://www.google.com">test</a>
                </nav>
                <nav className="flex items-center justify-center  mt-2 ">
                    <a href="https://www.google.com">
                        <GitHubIcon />
                    </a>
                    <a href="https://www.google.com">
                        <KaggleIcon/>
                    </a>
                    <a href="https://www.google.com">
                        <GitIcon/>
                    </a>
                </nav>
                
            </div>
            <div className={menuactive ? "nav-list  _active " : "nav-list"}>
                <Link className='nav'
                    activeClass="active"
                    to="About"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >test
                </Link>
                
                
            </div>
        </>
    )
};

export default Menu