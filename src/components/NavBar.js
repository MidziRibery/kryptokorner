import React from "react";
import { Link } from 'react-router-dom';
import './NavBar.css';
import Button from './Button.js';

function NavBar() {
    return(
        <div>
            <nav className="navbar">
                <div className="navbar__container">
                    <Link to='/' className="navbar__brand">Krypto Korner
                    <i className='fab fa-bitcoin'></i>
                    </Link>
                    <ul className="navbar__links">
                        <li className="navbar__links__items">
                            <Link to='/' className="navbar__links__item">Home</Link>
                        </li>
                        <li className="navbar__links__items">
                            <Link to='/nfts' className="navbar__links__item">NFTS</Link>
                            </li>
                        <li className="navbar__links__items">
                            <Link to='/knowledge' className="navbar__links__item">KryptoKnowledge</Link>
                            </li>
                    </ul>
                    <Button>Subscribe</Button>
                </div>

            </nav>
        </div>
    )
}

export default NavBar;