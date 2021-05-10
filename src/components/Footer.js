import React from 'react'
import '../App.css'
import './Footer.css'
import footerContainerCap from '../images/footer-container-cap.png';
import pinkSquiggle from '../images/pinksquiggle.png'
import pinkSquiggle2 from '../images/pinksquiggle2.png'
import udtextlogo from '../images/underdogvectorlogo2.png';
export default function Footer() {
    return (
        <div className="footer">
            <img src={pinkSquiggle} alt="decorative" className='pink-squiggle' />
            <img src={pinkSquiggle2} alt="decorative" className='pink-squiggle2' />
            <img src={udtextlogo} alt="Underdog Grooming text logo" className='text-logo' />
            <img src={footerContainerCap} className='footer-container-cap'></img>
            <h2>We love your dog more than you do!!!!</h2>
            <div className="todays-date">Today's date: Mon May 2 2021</div>
            <button className="book-now">Book Now!</button>
            <div className="sitemap-social-container">
                <div className="sitemap-container">
                    <div className="sitemap-top">
                        <p>Sitemap</p>
                    </div>
                    <div className="sitemap-bottom">
                        <div className="sitemap-bottom-left">
                            <ul>
                                <li>Home</li>
                                <li>About</li>
                                <li>Work</li>
                            </ul>
                        </div>
                        <div className="sitemap-bottom-right">
                            <ul>
                                <li>Services</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="social-container">
                    <div className="social-top">
                        <p>Social</p>
                    </div>
                    <div className="social-bottom">
                        <div className="social-bottom-left">
                            <ul>
                                <li>Instagram</li>
                                <li>Dribble</li>
                                <li>Behance</li>
                            </ul>
                        </div>
                        <div className="social-bottom-right">
                            <ul>
                                <li>LinkedIn</li>
                                <li>Pinterest</li>
                                <li>Twitter</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <p className='subscribe-text'>Subscribe for special offers!</p>
            <input type="text" placeholder='johndoe2021@gmail.com' />
            <i class="fas fa-long-arrow-alt-right"></i>
            {/* <button className='submit-subscribe-button'>Send</button> */}
            <p className='copyright'>&copy; Nate Sims 2021</p>
        </div>
    )
}
