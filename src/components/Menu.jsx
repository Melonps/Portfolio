import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import '../styles/menu.scss'

function Menu() {
    const [menuactive, setMenuactive] = useState(false);

    const menuToggle = () => {
        setMenuactive(!menuactive)
    }
    return (
        <>
            
            <div className={menuactive ? 'menu-trigger _active' : 'menu-trigger'} onClick={menuToggle}>
                    <span></span>
                    <span></span>
                    <span></span>
            </div>

            <div className={menuactive ? "menu-bg  _active" : "menu-bg"}>
                <div className='menu-wrapper'>
                    <p>Menu</p>
                </div>
                
            </div>
            <div className={menuactive ? "nav-list  _active" : "nav-list"}>
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