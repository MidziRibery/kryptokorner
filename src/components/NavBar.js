import React from "react";
import './NavBar.css';

function NavBar() {
    return(
        <div>
            <nav className="navbar">
                <div className="navbar__container">
                    <a className="navbar__brand">Krypto Korner</a>
                    <i className='fab fa-bitcoin'></i>
                    <ul className="navbar__links">
                        <li className="navbar__links__items">Home</li>
                        <li className="navbar__links__items">NFTS</li>
                        <li className="navbar__links__items">KryptoKnowledge</li>
                        <li className="navbar__links__items">Subscribe</li>
                    </ul>
                </div>

            </nav>
        </div>
    )
}

export default NavBar;