import React, { useState } from "react";
import { CDN_URL,LOGO_URL } from "../../utils/constants/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnliseStatus";
import Grocery from "./Grocery";
 

const Header = ()=>{

    const [login, setLogin] = useState("Login");
    const onlineStatus = useOnlineStatus();
    return( 
    <div className="header">

        <div className="logo-contaniner">
            <img className="logo" src={LOGO_URL}></img>
        </div>
        
        <div className="nav-items">
            <ul className="direct-list">
                <li>Online Status:{onlineStatus ? "🟩" : "🟥"}</li>
              <Link to="/"> <li className="nav-item">Home</li></Link> 
              <Link to="/grocery"> <li className="nav-item">Grocery</li></Link> 
              <Link to="/about"> <li className="nav-item">About Us</li> </Link> 
               <Link to="/contact"> <li className="nav-item">Contact Us</li> </Link>
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