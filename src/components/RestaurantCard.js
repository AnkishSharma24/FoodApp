import React from 'react';
import { CDN_URL } from '../../utils/constants/constants';
import resList from '../../utils/constants/mockData';

const RestaurantCard = (props)=> {
    const {resData} = props;
    const {name,cuisines,avgRating}= resData?.info;

    return(
        <div className="w-[250px]  m-4 h-[350px] border-solid border-black border-2 rounded-md shadow-l bg-orange-200 hover:bg-red-400">´
             <h3 className='text-center font-bold'>{name}</h3> 
             <img className="w-[230px] h-[150px] rounded-md" alt="res-logo" src={CDN_URL+resData.info.cloudinaryImageId}></img>       
             <h5 className='font-mono font'>{cuisines.join(", ")}</h5>
             <h5 className='mt-1'>Rating:{avgRating}</h5>
             <h5>Delivery Time: {resData.info.sla.deliveryTime}min</h5>      
        </div>
        )
}

// Creating higher order function
  export  const withPromotedLabel = (RestaurantCard) => {
        return(props) =>{
            return(
                <div>
                    <label className='absolute bg-green-400 text-black rounded-md ml-2  p-1' >Open</label>
                    <RestaurantCard {...props}/>
                </div>
            )
        }
    }








export default RestaurantCard;