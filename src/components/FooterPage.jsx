import React from 'react'
import {FaTwitterSquare,FaInstagramSquare,FaFacebookSquare} from 'react-icons/fa'

import ForestBg from '../assets/forest.jpg'
import LogoSVg from '../assets/icons.svg'

const FooterPage = () => {
    return (
        <>
            <footer id='contact'>
                <img src={ForestBg} alt="Forest background" />
                <div className="footer-content-wrapper">
                    <div className="div-one">
                        <img src={LogoSVg} alt="Logo svg" />
                        <p>
                            Welcome to Africa, home of the most famous
                            Fauna in human culture. Come tourist with us,
                            to get an up-close view of Wildlife.
                        </p>
                    </div>
                    <div className="div-one">
                        <h3>Company</h3>
                        <ul>
                            <li>Home</li>
                            <li>Wildlife Africa</li>
                            <li>Game Reserve</li>
                            <li>Terms & Conditions</li>
                            <li>FAQs</li>
                        </ul>
                    </div>
                    <div className="div-one">
                        <h3>Game Reserve</h3>
                        <ul>
                            <li>National Park, Nairobi</li>
                            <li>Nkomazi Private Game</li>
                            <li>Moremi Game Reserve</li>
                        </ul>
                    </div>
                    <div className="div-one">
                        <h3>Contact</h3>
                        <ul>
                            <li>+233 000 0000 0000</li>
                            <li>+233 000 0000 0001</li>
                            <li>wildlife@xyz.com</li>
                            <li className='logos-wrapper'>
                                <FaTwitterSquare />
                                <FaInstagramSquare />
                                <FaFacebookSquare />
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default FooterPage