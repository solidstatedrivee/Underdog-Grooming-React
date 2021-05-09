import React from 'react'
import ServicesCardItem from './ServicesCardItem'
import './ServicesCards.css';
import pinkSquiggle from '../images/pinksquiggle.png'
import pinkSquiggle2 from '../images/pinksquiggle2.png'
import sally4 from '../images/Sally-4.png'
import saly18 from '../images/Saly-18.png'
import saly22 from '../images/Saly-22.png'
import saly3 from '../images/Saly-3.png'




function ServicesCards() {
    return (
        <div className='cards'>
            <h1 className='cards__title'>Check out our AMAZING services!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <ServicesCardItem
                            src={sally4}
                            text="Regular grooming is essential to your pet's health as it helps prevent skin issues such as matting."
                            title='Breed-specific Haircuts'
                            path='/services'
                        />
                        <ServicesCardItem
                            src={saly18}
                            text="We'll suds away dirt, oil, and debris to help skin and coats of all types look and feel great!"
                            title='Baths for every breed'
                            path='/services'
                        />
                        <ServicesCardItem
                            src={saly22}
                            text="Upgrade their visit with packages designed to target specific needs such as de-shedding, dry and sensitive skin care and more."
                            title='Customized Packages'
                            path='/services'
                        />
                        <ServicesCardItem
                            src={saly3}
                            text="Help care for your pet with essential services such as nail trimming, teeth-brushing and gland expressions."
                            title='A la Carte'
                            path='/services'
                        />
                    </ul>
                </div>
            </div>
            {/* <img src={pinkSquiggle} alt='Pink squiggle' className='pink-squiggle'></img> */}
            {/* <img src={pinkSquiggle2} alt='Pink squiggle' className='pink-squiggle2'></img> */}

        </div>
    )
}

export default ServicesCards
