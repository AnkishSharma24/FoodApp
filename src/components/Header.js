import React from "react";
import { CDN_URL,LOGO_URL } from "../../utils/constants/constants";



const Header = ()=>{
    return( 
    <div className="header">

        <div className="logo-contaniner">
            <img className="logo" src={LOGO_URL}></img>
        </div>
        
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
)}

export default Header;