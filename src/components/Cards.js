import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Every Dish, a Personal Journey - Welcome to foodmappune!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-1.jpeg"
              text="Vibrant beetroot paratha: A colorful and nutritious twist to classic Indian flatbread."
              label="Paratha"
              path="/chefcorner"
            />
            <CardItem
              src="images/img-2.jpeg"
              text="Vadapav: Iconic Indian street snack with spiced potato patty in a soft bun, served with chutneys."
              label="Street Food"
              path="/chefcorner"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpeg"
              text="Manchow Soup: A flavorful Indo-Chinese soup with a perfect blend of vegetables, spices, and crispy noodles."
              label="Indo-Chinese"
              path="/chefcorner"
            />
            <CardItem
              src="images/img-4.jpeg"
              text="Varan Phal: A comforting Maharashtrian lentil curry served with rice, offering a wholesome and traditional meal"
              label="Maharashtrian Food"
              path="/products"
            />
            <CardItem
              src="images/img-5.jpeg"
              text="Dhokla: Light, spongy steamed cake, a popular Indian snack"
              label="Snacks"
              path="/products"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
