import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data, showItems, setShowIndex})=>{

        console.log(showItems)

        const handleClick = ()=>{
            setShowIndex();
        }
    

    return(
        <div>
            {/* Header* */}
           <div className=" w-6/12 h-15 mx-auto my-4 bg-gray-100 rounded-md shadow-lg  hover:bg-gray-200">

                <div className="flex justify-between bg-gray-300 rounded-md h-10"
                    onClick={handleClick}
                >
                   <span className="mt-2 ml-2 font-bold cursor-pointer hover:bg-gray-300">{data.title} ({data.itemCards.length})</span>
                   <span className="mt-2 mr-2">🔽</span>
                   </div>

                { showItems &&   <ItemList items ={data.itemCards}/>}
                


            </div>
            {/*Accordian Body * */}
            
        </div>
    )
}

export default RestaurantCategory;