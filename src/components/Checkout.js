import React, { useEffect } from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useSelector } from "react-redux/es/exports";
export default function Chechout() {
  const products = useSelector((state) => state.item);
  console.log(products);
  return (
    <>
      <div className="checkout">
        <div className="checkout__left">
          <img
            className="checkout__ad"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/PrimeRewards/LP_Revamp/PC_Header_Banner._CB468631809_.jpg"
            alt=""
          />
          <div>
            <h2 className="checkout__title">Shopping Basket</h2>
            {/* <Product
              id={products[0].id}
              title={products[0].title}
              price={products[0].price}
              rating={products[0].rating}
              image={products[0].image}
            /> */}
            {products.map((element) => {
              return (
                <CheckoutProduct
                  id={element.id}
                  title={element.title}
                  price={element.price}
                  rating={element.rating}
                  image={element.image}
                />
              );
            })}
          </div>
        </div>
        <div className="checkout__right">
          <Subtotal />
        </div>
      </div>
    </>
  );
}
