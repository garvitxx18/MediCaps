import React from "react";
import ItemCard from "./ItemCard";
import "../styles/ItemPage.css";
import SearchBar from "./SearchBar";
import { CardData } from "../data/CardData.js";

const ItemPage = () => {
  return (
    <div>
      <SearchBar />
      <div className="itemPage--display">
        {CardData.map((user) => (
          <div>{<ItemCard props={user} />}</div>
        ))}
      </div>
    </div>
  );
};

export default ItemPage;
