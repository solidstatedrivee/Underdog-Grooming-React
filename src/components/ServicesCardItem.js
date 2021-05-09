import React from 'react'
import { Link } from 'react-router-dom'
import './ServicesCards.css';

function ServicesCardItem(props) {
    return (
        <>
            <li className='cards__item'>
                <Link className='cards__item__link' to={props.path}>
                    <figure className='cards__item__pic__wrap'>
                        <img src={props.src} alt='3D Illustration' className='cards__item__img'></img>
                    </figure>
                    <div className='cards__item__info'>
                        <h5 className='cards__item__title'>{props.title}</h5>
                        <p className='cards__item__text'>{props.text}</p>
                    </div>
                </Link>
            </li>
        </>
    );
}

export default ServicesCardItem
