import { CDN_URL } from "../utils/contants";
import React from "react";

const RestaurantCard = (props) => {
  const { resData } = props;
  const baseUrl = CDN_URL;
  const imageId = resData.info.cloudinaryImageId;
  const imageUrl = `${baseUrl}/${imageId}`;
  return (
    <div className="res-card-container">
      <div className="res-card" style={{ backgroundColor: "f0f0f0" }}>
      <img className="res-logo" src={imageUrl}></img>
      <h3>{resData.info.name}</h3>
      <h4>{resData.info.cuisines.join(", ")}</h4>
      <h4>{resData.info.avgRating} stars</h4>
      <h4>{resData.info.sla.deliveryTime} Minutes</h4>
      <h4>{resData.info.costForTwo}</h4>
    </div>
    </div>
  );
};
export default RestaurantCard;