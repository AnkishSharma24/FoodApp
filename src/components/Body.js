import React from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../../utils/constants/mockData";



const Body = ()=> {
    return (
        <div className="body">
                <div className="search">Search</div>
                <div className="res-container">
                {resList.map((res)=> <RestaurantCard key={res.info.id} resData={res}></RestaurantCard>)}
           </div>
        </div>
    )
}

export default Body;