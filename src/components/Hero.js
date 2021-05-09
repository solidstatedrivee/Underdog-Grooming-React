import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Hero.css';
import textUnderline from '../images/underline.svg'
import heroVideo from '../images/hero-video-background.mp4';


function Hero() {
    return (
        <div className="hero-container">
            <div class="hero-video-bg">
                <video loop muted autoplay='' class="hero-video">
                    <source src={heroVideo} type="video/webm" />
                </video>
            </div>
            <div className='hero-info'>
                <div className='hero-info-box'></div>
                {/* <img src="/images/herobackground.jpg" alt="dogs waiting for treat"></img> */}
                <h1><span>Professional grooming <img src={textUnderline} className='text-underline-svg'></img> </span> is just a click away</h1>
                <p>We are a professional outfit of pet groomers based in Atlanta, Georgia and have been doing our thing for over ten years!
                Check our availability using the book now button below and set an appointment with us today. Or sign up and recieve special
                offers and set your pet up for a grooming schedule!</p>
                <div className="hero-btns">
                    <Button className="btn" buttonStyle="btn--outline" buttonSize="btn--large">BOOK YOUR PET</Button>
                    <Button className="btn" buttonStyle="btn--primary" buttonSize="btn--large" hasIcon="true"><div>SIGN UP</div>
                        {/* <span className="material-icons account-icon">
                            account_box
                    </span> */}
                        <i class="fas fa-user-plus"></i>
                    </Button>
                </div>

            </div>
            <div className="hero-social-media">
                <a href="https://www.instagram.com" target='_blank' class="fab fa-instagram"></a>
                <a href="https://www.twitter.com" target='_blank' class="fab fa-twitter"></a>
                <a href="https://www.tiktok.com" target='_blank' class="fab fa-tiktok"></a>
                <a href="https://www.facebook.com" target='_blank' class="fab fa-facebook-f"></a>
            </div>
            <div className='scroll-down-container'>
                <p>Scroll Down</p>
                <div className='scroll-down-arrow'>
                    <div className='left-line-arrow'></div>
                    <div className='right-line-arrow'></div>
                </div>
            </div>
            <div className='hero-content-transition'></div>
        </div>
    )
}

export default Hero
