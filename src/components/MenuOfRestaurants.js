import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const MenuOfRestaurants = ()=>{

    const {resId}= useParams();
     const resInfo = useRestaurantMenu(resId);
     const [showIndex, setShowIndex]= useState(null)

    if(resInfo === null) return <Shimmer/>

    const {itemCards}= resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card  ||{};

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=> c.card?.card?.["@type"]=== "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    console.log(categories)

    return(  
    <div className="menu">
        <div className="mt-3 mb-3 bg-red-400 text-2xl font-bold text-center">
          <h1>{resInfo?.cards[2]?.card?.card?.info?.name}</h1>
        </div>

        <div className="mb-5 text-lg ml-2 font-mono">
          <h2 className="font-bold text-center text-xl">Menu</h2>
        </div>


        <div className="text-center" >
        {categories.map((category, index)=> 
        // controlled component
        <RestaurantCategory  
        data= {category?.card?.card} 
        showItems ={index === showIndex ? true : false}
        setShowIndex = {() => setShowIndex(index === showIndex ? null : index)}
        />)}
        </div>
     
     
      <div >
        <ul>
        {/**   { itemCards.map((item)=> <li key={item.card.info.id}>{item.card.info.name} - {"Rs "+ (item.card.info.price)/100}</li>)}*/}  
         {/* <li>{itemCards[5].card.info.description}</li>   
        <li>{resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[0]?.card?.info?.description}</li>   
        <li>{resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[1]?.card?.info?.description}</li>
        <li>{resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[2]?.card?.info?.description}</li>
        <li>{resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[3]?.card?.info?.description}</li>
         */}
        </ul>

      </div>  
    </div>

)
}

export default MenuOfRestaurants;