import React from 'react';
import { CDN_URL } from '../../utils/constants/constants';
import resList from '../../utils/constants/mockData';

const RestaurantCard = (props)=> {

    const {resData} = props;
    const {name,cuisines,avgRating}= resData?.info;

    return(
        <div className="res-card">
            <h3>{name}</h3> 
            <img className="res-image" alt="res-logo" src={CDN_URL+resData.info.cloudinaryImageId}></img>
        
        <h5>{cuisines.join(", ")}</h5>
        <h5>Rating:{avgRating}</h5>
        <h5>Delivery Time: {resData.info.sla.deliveryTime}min</h5>
        
        </div>

        )
}

export default RestaurantCard;