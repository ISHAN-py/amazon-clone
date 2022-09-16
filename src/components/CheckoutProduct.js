import React from "react";
import "./CheckoutProduct.css";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";
function CheckoutProduct({ id, image, title, price, rating }) {
  const dispatch = useDispatch();
  const actions = bindActionCreators(actionCreators, dispatch);
  return (
    <div className="CheckoutProduct">
      <img className="CheckoutProduct__img" src={image} />
      <div className="CheckoutProduct__info">
        <p className="CheckoutProduct__title">{title}</p>
        <p className="CheckoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="CheckoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <button
          onClick={() => {
            actions.removeFromCart({
              id: id,
              title: title,
              image: image,
              price: price,
              rating: rating,
            });
          }}
        >
          Remove From Basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
