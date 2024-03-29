import { CDN_URL } from "../utils/contants";
import React from "react";

const RestaurantCard = (props) => {
  const { resData } = props;
  const baseUrl = CDN_URL;
  const imageId = resData.info.cloudinaryImageId;
  const imageUrl = `${baseUrl}/${imageId}`;
  return (
    <div
      className="m-4 p-4 w-[300px] rounded-lg"
      style={{ backgroundColor: "#f0f0f0" }}
    >
      <img className="res-logo" src={imageUrl}></img>
      <h3 className="font-bold py-4">{resData.info.name}</h3>
      <h4>{resData.info.cuisines.join(", ")}</h4>
      <h4>{resData.info.avgRating} stars</h4>
      <h4>{resData.info.sla.deliveryTime} Minutes</h4>
      <h4>{resData.info.costForTwo}</h4>
    </div>
  );
};

export const promotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
