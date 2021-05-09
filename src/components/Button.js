import React from 'react'
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline']
const SIZES = ['btn--medium', 'btn--large'];
let hasIcon = true;

export const Button = ({ children, type, onClick, buttonStyle, buttonSize, hasIcon }) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]
    const checkIcon = hasIcon ? 'btn-with-icon' : "";

    return (
        <Link to='/' className='btn--link'>
            <button className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkIcon}`} onClick={onClick} type={type}>
                {children}
            </button>
        </Link>
    )
}

export default Button