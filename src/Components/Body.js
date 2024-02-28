import RestaurantCard, { promotedLabel } from "./RestaurantCard";
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
  const [perPage] = useState(20);

  const newResCard = promotedLabel(RestaurantCard);

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
      <div className="flex">
        <div className="search m-2 p-2">
          <input
            type="text"
            className="border border-box border-black m-2 p-2 rounded-md"
            placeholder="Enter your food..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="p-2 bg-red-100 m-2 rounded-lg"
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
        <div className="search m-2 p-2 flex items-center">
          <button
            className="px-4 py-2 bg-green-100"
            onClick={() => {
              const filteredList = list.filter(
                (item) => item.info.avgRating > 4
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex-wrap grid grid-cols-4">
        {filteredRestaurant.map((item) => (
          <Link key={item.info.id} to={"/restaurants/" + item.info.id}>
            {item.info.promoted ? (
              <newResCard resData={item} />
            ) : (
              <RestaurantCard resData={item} />
            )}
          </Link>
        ))}
      </div>
      <div className="m-4 text-center">
        <button
          className="px-4 py-2 border bg-green-300 rounded-lg"
          onClick={handlePrev}
          disabled={page == 1}
        >
          prev
        </button>
        <span className="p-2">{`Page ${page} of ${totalPages}`}</span>
        <button
          className="px-4 py-2 border bg-green-300 rounded-lg"
          onClick={handleNext}
          disabled={page == totalPages}
        >
          next
        </button>
      </div>
    </div>
  );
};
export default Body;
