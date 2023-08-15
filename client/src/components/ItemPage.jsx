import React from "react";
import ItemCard from "./ItemCard";
import "../styles/ItemPage.css";
import { CardData } from "../data/CardData.js";

const ItemPage = () => {
  return (
    <div>
      {/* <div className="itemPage--display">
        {CardData.map((ele) => {
          <ItemCard props={ele} />;
        })}
      </div> */}
      <ItemCard />
    </div>
  );
};

export default ItemPage;
