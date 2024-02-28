import React, { useContext, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { itemCards } =
    resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;

  const categories =
    resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (category) =>
        category.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  const { name } = resInfo.cards[0].card.card.info;

  return (
    <div className="text-center">
      <h1 className="font-extrabold m-6 text-2xl">{name}</h1>
      {categories.map((category, index) => (
        <RestaurantCategory
          data={category.card.card}
          key={category.card.card.title}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
