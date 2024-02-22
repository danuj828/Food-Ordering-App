import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import React from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [list, setList] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);
  const [perPage] = useState(9);

  useEffect(() => {
    fetchData();
  }, [page]);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6461662&lng=77.227223&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING&page=${page}"
    );
    const json = await data.json();
    setList(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredRestaurant(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  const totalPages = Math.ceil(list.length / perPage);

  const handlePrev = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNext = () => {
    setPage((nextPage) => Math.max(nextPage + 1, totalPages));
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h2>Looks like you are offline. Check your internet.</h2>;
  }

  return list.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <input
          type="text"
          className="search-box"
          placeholder="Enter your food..."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            const filteredRestaurant = list.filter((item) =>
              item.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurant(filteredRestaurant);
          }}
        >
          Search
        </button>
      </div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = list.filter((item) => item.info.avgRating > 4);
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((item) => (
          <Link key={item.info.id} to={"/restaurants/" + item.info.id}>
            <RestaurantCard resData={item} />
          </Link>
        ))}
      </div>
      <div>
        <div className="pagination">
          <button className="btn" onClick={handlePrev} disabled={page == 1}>
            prev
          </button>
          <span>{`Page ${page} of ${totalPages}`}</span>
          <button
            className="btn"
            onClick={handleNext}
            disabled={page == totalPages}
          >
            next
          </button>
        </div>
      </div>
    </div>
  );
};
export default Body;
