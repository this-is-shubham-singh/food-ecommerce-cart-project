import React, { useState } from "react";
import Cardsdata from "./Cardsdata";
import "./Cards.css";
import { useDispatch } from "react-redux";
import { ADD } from "../Redux/Actions/Action";

const Cards = () => {
  const [data, setdata] = useState(Cardsdata);

  const dispatch = useDispatch();

  // when Clicked on button(add to cart), using dispatch (ADD is called and sent data , e has current card data)
  const send = (e) => {
    // console.log(e);
    dispatch(ADD(e));
  };

  return (
    <div className="cards-main-container">
      <h2 className="cards-main-heading">Food Ecommerce Store</h2>
      <div className="cards-container">
        {data.map((element, id) => {
          return (
            <>
              <div className="card-container">
                  <img className="card-image" src={element.imgdata} />
                <div className="card-content">
                  <h3 className="card-heading">{element.rname}</h3>
                  <p className="card-paragraph">Price : ₹ {element.price}</p>
                  <button onClick={() => send(element)} className="card-button">
                    Add to Cart
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
