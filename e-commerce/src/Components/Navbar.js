import React from "react";
import logo from '../images/logo.svg'
import cart from '../images/icon-cart.svg'
import avatar from '../images/image-avatar.png'

export default function Navbar(){
    return(
        <nav className="navbar">
            <div className="links">
                <img src={logo} className="nav-logo" alt="Org.logo" />
            
                <ul className="nav-list">
                    <li className="nav-item"><a href="#">Collections</a></li>
                    <li className="nav-item"><a href="#">Men</a></li>
                    <li className="nav-item"><a href="#">Women</a></li>
                    <li className="nav-item"><a href="#">About</a></li>
                    <li className="nav-item"><a href="#">Contact</a></li>
                </ul>
            </div>
            <div className="cart-avatar">
                    <img src={cart} className="cart" alt="cart-icon" />
                    <img src={avatar} className="avatar" alt="avatar-image" />
            </div>
            

        </nav>
    )
}