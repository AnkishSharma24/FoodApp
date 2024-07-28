import React, { useState } from "react";
import { CDN_URL,LOGO_URL } from "../../utils/constants/constants";


 

const Header = ()=>{

    const [login, setLogin] = useState("Login");

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
                <button className="login-button" onClick={()=>{
                    if(login==="Login") setLogin("Logout") 
                        else{setLogin("Login")}
                }}>{login}</button>
            </ul>
        </div>
    </div>
)}

export default Header;