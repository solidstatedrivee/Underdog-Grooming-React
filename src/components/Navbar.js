import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';
import logo from '../images/underdoglogoweb3.png'
import scene1 from '../images/Saly-1.png'
import scene2 from '../images/scene2.png'


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }
    useEffect(() => {
        showButton();

    }, [])
    window.addEventListener('resize', showButton);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    if (click) {
        document.getElementsByTagName("BODY")[0].style.position = 'fixed';
    } else {
        document.getElementsByTagName("BODY")[0].style.position = 'relative';
    }

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        {/* <img src='/src/images/underdoglogoweb.png' className='logo-image' alt='Underdog Grooming Logo'></img> */}
                        <img src={logo} className='logo-image' alt='Underdog Logo'></img>
                    </Link>
                    {/* <i class="fas fa-user-circle navbar-account-icon"></i> */}
                    <div className='menu-icon' onClick={handleClick}>
                        <span className="material-icons hamburger-icon">
                            {click ? 'close' : 'menu'}
                        </span>
                        <div>Menu</div>

                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/Underdog-Grooming-React' className='nav-links' onClick={closeMobileMenu}>
                                HOME
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                                SERVICES
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/about-us' className='nav-links' onClick={closeMobileMenu}>
                                ABOUT US
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                                CONTACT
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/sign-up' className='nav-links' onClick={closeMobileMenu}>
                                SIGN UP
                            </Link>
                        </li>
                        <img src={scene1} className='scene-1' alt='3D shape'></img>
                        {/* <img src={scene2} className='scene-2' alt='3D shape'></img> */}
                        <div className="links-visual-container"></div>

                    </ul>
                    <div className="menu-separator"></div>
                    <Link to='/sign-up' className='nav-links signup' onClick={closeMobileMenu}>
                        <i class="fas fa-user-plus"></i>Sign Up
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar
