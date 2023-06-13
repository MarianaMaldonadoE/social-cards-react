import React from "react";
import "./styles.css";
import cardItem from "./cardItem";
import cardData from "./cardData";

export default function App() {
  const cardItems = cardData.map((item) => (
    <cardItem key={item.id} item={item} />
  ));
  return (
    <div className="App">
      <h1>Hello Bakers!</h1>
      { <cardItem />}
      <div className="grid-wrap">{cardItems}</div>
    </div>
  );
}
