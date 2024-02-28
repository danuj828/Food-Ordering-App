import React from "react";
import { CDN_URL } from "../utils/contants";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-b-2 text-left border-gray-200 flex justify-between"
        >
          <div className="py-2">
            <span>{item.card.info.name}</span>
            <span> - ₹{item.card.info.price / 100}</span>
            <p className="text-s">{item.card.info.description}</p>
          </div>
          <img
            src={CDN_URL + item.card.info.imageId}
            className="w-20 rounded-md"
          ></img>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
