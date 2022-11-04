import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom'

const Button = ({children, type, onClick}) => {
    return (
        <Link to='/subscribe'>
            <button
            onClick={onClick}
            type={type}>
                {children}
            </button>
        </Link>
    )
}

export default Button;