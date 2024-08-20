import React, { useState, useEffect, useContext } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnliseStatus";
import { withPromotedLabel } from "./RestaurantCard";
import UserContext from "../../utils/UserContext";


const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filterRestaurant, setFilterRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.49690&lng=80.32460&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const restaurants = json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
    setListOfRestaurant(restaurants);
    setFilterRestaurant(restaurants);
    
   
  };

  const handleTopRated = () => {
    const filteredList = listOfRestaurant.filter((res) => res.info.avgRating > 4.3);
    setFilterRestaurant(filteredList);
  };

  const handleSearch = () => {
    const filteredRestaurant = listOfRestaurant.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilterRestaurant(filteredRestaurant);
  };

  const onlineStatus = useOnlineStatus();
  if(onlineStatus == false) return <h1>Please check your internet connection!</h1>

  const {loggedInUser ,setUserName }= useContext(UserContext)

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex ">
        <button className=" ml-2 mt-[18px] mb-[18px] px-2 bg-red-300  rounded-sm hover:bg-red-500" onClick={handleTopRated}>
        💎 Top Rated Restaurant
       </button>
        <div className=" p-4">
          <input
           type="text"
           className="border border-solid border-black w-80"
           value={searchText}
           onChange={(e) => setSearchText(e.target.value)}
         />
         <button className="bg-slate-200 ml-2 p-1 rounded-md hover:bg-gray-400" onClick={handleSearch}>Search</button>


              <label className="ml-10">User Name</label>
              <input 
              type="text"
              value={loggedInUser}
              onChange={(e)=> setUserName(e.target.value)}
              className="border-black border-solid border-2 ml-2"></input>
        
          
      </div>

      </div>
      <div className="flex flex-wrap">
        {filterRestaurant.map((res) => (
        <Link to={"/restaurants/" + res.info.id} key={res.info.id}>
          {/** If true then show promoted else show no promotion for isOpen   
           
          */
           res.info.isOpen ? (<RestaurantCardPromoted key={res.info.id} resData={res}></RestaurantCardPromoted>)  :( 
            <RestaurantCard  resData={res} />)
          }          
          </Link>  
        ))}
      </div>
    </div>
  );
};

export default Body;




