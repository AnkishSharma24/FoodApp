import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";



const MenuOfRestaurants = ()=>{

    const {resId}= useParams();
    const [resInfo,setResInfo] = useState(null);

    useEffect(()=>{
        fetchMenu();
    },[resId])

    const fetchMenu = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.49690&lng=80.32460&restaurantId=" + resId)
        const json = await data.json();
        console.log(json);
        setResInfo(json.data)

      
    }

    if(resInfo === null) return <Shimmer/>

    const {itemCards}= resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card  ||{};

    return(  
    <div className="menu">
        <h1>{resInfo?.cards[2]?.card?.card?.info?.name}</h1>
        <h2>Menu</h2>
        <ul>
            { itemCards.map((item)=> <li key={item.card.info.id}>{item.card.info.name}</li>)}
         {/* <li>{itemCards[5].card.info.description}</li>   
        <li>{resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[0]?.card?.info?.description}</li>   
        <li>{resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[1]?.card?.info?.description}</li>
        <li>{resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[2]?.card?.info?.description}</li>
        <li>{resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[3]?.card?.info?.description}</li>
         */}
        </ul>
    </div>

)
}

export default MenuOfRestaurants;