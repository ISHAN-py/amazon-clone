import React from "react";
import "./Product.css";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";
export default function Product({ id, title, image, price, rating }) {
  const dispatch = useDispatch();
  const actions = bindActionCreators(actionCreators, dispatch);
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="Product" className="product__img" />
      <button
        onClick={() => {
          actions.addToCart({
            id: id,
            title: title,
            image: image,
            price: price,
            rating: rating,
          });
        }}
      >
        Add To Basket
      </button>
    </div>
  );
}
