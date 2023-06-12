import React, { useEffect } from 'react'
import './nav.scss'
import { Link, NavLink } from 'react-router-dom';
import 'aos/dist/aos.css'
import AOS from 'aos'
const Nav = ({navOpen, setNavOpen}) => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className='Nav' >
            <Link to='/'>
                <div class={navOpen ? "heading hdc" : 'heading'}>Aoe .</div>
            </Link>
            <div className="menu-toggle" onClick={() => setNavOpen(!navOpen)}>
                <div className={navOpen ? "hamBox hamBoxOpen" : "hamBox"}>
                    <span className={navOpen ? "lineTop spin" : "lineTop"}></span>
                    <span
                        className={navOpen ? "lineBottom spin" : "lineBottom"}
                    ></span>
                </div>
            </div>
            <div
                className="nav-overlay"
                style={{
                    transitionDelay: navOpen ? "0s" : "0s",
                    top: navOpen ? "0" : "-100%",
                    opacity: navOpen ? "1" : "0",

                }}
            >
                <ul className="nav-links">
                    <li className="nav-item">
                        <NavLink
                            to="/"
                            onClick={() => setNavOpen(!navOpen)}
                            style={{
                                top: navOpen ? "0" : "120px",
                                transitionDelay: navOpen ? "0.9s" : "0s",
                            }}
                        >
                            Projects
                        </NavLink>
                        <div className="nav-item-wrapper"></div>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="/about"
                            onClick={() => setNavOpen(!navOpen)}
                            style={{
                                top: navOpen ? "0" : "120px",
                                transitionDelay: navOpen ? "1s" : "0s",
                            }}
                        >
                            About
                        </NavLink>
                        <div className="nav-item-wrapper"></div>
                    </li>

                </ul>
            </div>

        </div>
    )
}

export default Nav
