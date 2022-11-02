import React from "react";
import { Link } from 'react-router-dom';
import './NavBar.css';

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
                            <Link to='/'>Home</Link>
                        </li>
                        <li className="navbar__links__items">
                            <Link to='/nfts'>NFTS</Link>
                            </li>
                        <li className="navbar__links__items">
                            <Link to='/kryptoknowledge'>KryptoKnowledge</Link>
                            </li>
                        <li className="navbar__links__items">
                            <Link to='/subscribe'>Subscribe</Link>
                            </li>
                    </ul>
                </div>

            </nav>
        </div>
    )
}

export default NavBar;