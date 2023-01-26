import React, { useState } from 'react'
import '../style/nav_style.css'
import Logo from '../assets/icons.svg'
import { FaChevronDown } from 'react-icons/fa'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'





const Navbar = () => {

    const [isScrolled, setScrolled] = useState(false)
    const [isOpen, setOpen] = useState(false)
    window.onscroll = () => {
        setScrolled(window.scrollY === 0 ? false : true)
        console.log(isScrolled, window.screenY);
        return () => (window.onscroll == null)
    }

    const openSideBar = () => {
        setOpen(true)
    }
    const closeSideBar = () => {
        setOpen(false)
    }
    return (
        <nav style={{ background: isScrolled ? 'var(--primary-dark-color)' : 'transparent' }}>
            <div className="log-wrapper">
                <a href="#">
                    <img src={Logo} alt="Logo" />
                </a>
            </div>
            <ul style={{ right: isOpen ? '0' : '-450px' }}>
                < AiOutlineClose onClick={closeSideBar} />
                <li onClick={closeSideBar}> <a href="#">Home</a></li>
                <li onClick={closeSideBar}> <a href="#wildlife">Wildlife Africa</a></li>
                <li onClick={closeSideBar}> <a href="#reserve">Game Reserve <FaChevronDown /> </a></li>
                <li onClick={closeSideBar}> <a href="#contact">Contact Us</a></li>
            </ul>
            <AiOutlineMenu id='menu-btn' onClick={openSideBar} />
        </nav>
    )
}

export default Navbar