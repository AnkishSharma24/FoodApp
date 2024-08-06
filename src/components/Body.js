import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filterRestaurant, setFilterRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

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

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <button className="filter-btn" onClick={handleTopRated}>
        Top Rated Restaurant
      </button>
      <div className="search">
        <input
          type="text"
          className="search-box"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="res-container">
        {filterRestaurant.map((res) => (
        <Link to={"/restaurants/" + res.info.id} ><RestaurantCard key={res.info.id} resData={res} /></Link>  
        ))}
      </div>
    </div>
  );
};

export default Body;
