import React from 'react'
import '../style/nav_style.css'
import Logo from '../assets/icons.svg'


const Navbar = () => {
    return (
        <nav>
            <div className="log-wrapper">
                <img src={Logo} alt="Logo" />
            </div>
            <ul>
                <li> <a href="#">Home</a></li>
                <li> <a href="#">Wildlife Africa</a></li>
                <li> <a href="#">Game Reserve</a></li>
                <li> <a href="#">Contact Us</a></li>
            </ul>
        </nav>
    )
}

export default Navbar