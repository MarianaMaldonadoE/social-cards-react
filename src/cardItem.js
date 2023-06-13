import React from "react";

export default function cardItem(props) {
  return (
    <div className="card-items">
      <h1 className="item-title">{props.item.title}</h1>
      <img className="item-img" src={props.item.imgUrl} alt="pic" />
      <p className="item-text">{props.item.text}</p>
    </div>
  );
}