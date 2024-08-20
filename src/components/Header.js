import React, { useState } from "react";
import { CDN_URL,LOGO_URL } from "../../utils/constants/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnliseStatus";
import Grocery from "./Grocery";
import { useContext } from "react";
import UserContext from "../../utils/UserContext";
 

const Header = ()=>{

    const [login, setLogin] = useState("Login");
    const onlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);
     console.log(loggedInUser);

    return( 
    <div className="flex justify-between bg-orange-300 shadow-xl">

        <div className="logo-contaniner ml-5 ">
            <div className="flex">
              <img className="w-[90px] h-[80px] mt-[1px] rounded-lg" src={LOGO_URL}></img>
              <h1 className="mt-5 ml-4 text-5xl  font-serif">Oishii Desu</h1>
            </div>
        </div>
        <div className="nav-items">
            <ul className="flex p-3 items-center">
                <li className="mt-3 mr-3 ml-3 font-bold">Online Status:{onlineStatus ? "🟩" : "🟥"}</li>
              <Link to="/"> <li className="mt-2 mr-3 ml-3 font-bold bg-red-400 rounded-lg p-1 hover:bg-red-500">Home</li></Link> 
              <Link to="/grocery"> <li className="mt-2 mr-3 ml-3 font-bold  bg-red-400 rounded-lg p-1  hover:bg-red-500">Grocery</li></Link> 
              <Link to="/about"> <li className="mt-2 mr-3 ml-3 font-bold  bg-red-400 rounded-lg p-1  hover:bg-red-500">About Us</li> </Link> 
               <Link to="/contact"> <li className="mt-2 mr-3 ml-3 font-bold  bg-red-400 rounded-lg p-1  hover:bg-red-500">Contact Us</li> </Link>
                <li className="mt-3 mr-3 ml-3 font-bold ">Cart</li>
                <button className="mt-[4px] mr-3 ml-[50px] font-bold p-2  bg-red-500 rounded-md  hover:bg-red-700" onClick={()=>{
                    if(login==="Login") setLogin("Logout") 
                        else{setLogin("Login")}
                }}>{login}</button>
                <li className="mt-2 mr-3 ml-3 font-bold bg-purple-100 rounded-lg p-1">
                    🙎🏻‍♂️{loggedInUser}
                </li>
            </ul>
        </div>
    </div>
)}

export default Header;