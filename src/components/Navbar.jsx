import React, { useState } from 'react'
import '../style/nav_style.css'
import Logo from '../assets/icons.svg'
import { FaChevronDown } from 'react-icons/fa'





const Navbar = () => {

    const [isScrolled, setScrolled] = useState(false)
    window.onscroll = () => {
        setScrolled(window.scrollY === 0 ? false : true)
        console.log(isScrolled,window.screenY);
        return () => (window.onscroll == null)
    }
    return (
        <nav style={{ background: isScrolled ? 'var(--primary-dark-color)' : 'transparent' }}>
            <div className="log-wrapper">
                <a href="#">
                    <img src={Logo} alt="Logo" />
                </a>
            </div>
            <ul>
                <li> <a href="#">Home</a></li>
                <li> <a href="#wildlife">Wildlife Africa</a></li>
                <li> <a href="#reserve">Game Reserve <FaChevronDown /> </a></li>
                <li> <a href="#">Contact Us</a></li>
            </ul>
        </nav>
    )
}

export default Navbar