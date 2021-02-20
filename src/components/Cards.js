import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="REMODELING
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove."
              label="HOME FX"
              path="/services"
            />
            <CardItem
              src="images/img-2.jpg"
              text="The team consists only of qualified specialists who regularly undergo training and improve their level of knowledge and skills to do their work efficiently and quickly. We also recently launched free shipping within the United States and Canada."
              label="Engineers"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="Our company has been manufacturing and installing fences since 2010. During this time, we have significantly consolidated our position in the construction market, and won the trust of many customers in the world. We constantly strive to make our service better."
              label="Constructions"
              path="/services"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Technology to take products from
              an idea all the way to the end consumer."
              label="Buildings"
              path="/products"
            />
            <CardItem
              src="images/img-8.jpg"
              text="We will select the gate for your needs, reliably and inexpensively."
              label="Sign-up"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
