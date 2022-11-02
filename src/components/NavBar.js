import React from "react";
import './NavBar.css';

function NavBar() {
    return(
        <div>
            <nav className="navbar">
                <div className="navbar__container">
                    <a className="brand">Krypto Korner </a><i className="logo">put img here</i>
                </div>
                <div className="navbar__links">
                    <ul className="navbar__links__menu">
                        <li>Home</li>
                        <li>NFTS</li>
                        <li>KryptoKnowledge</li>
                        <li>Subscribe</li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;