import React from "react";
import "./Home.css";
import homeBanner from "./homeBanner.jpg";
import Product from "./Product";
export default function Home() {
  return (
    <>
      <div className="home">
        <div className="home__container">
          <img src={homeBanner} alt="Not a banner" className="banner" />
          <div className="home__row">
            <Product
              id={123124}
              title="The Lean Startup"
              image="https://images-na.ssl-images-amazon.com/images/I/81kSbfq3O+L.jpg"
              price={29.99}
              rating={3}
            />
            <Product
              id={3254363515}
              title="Amazon Alexa Mega"
              image="https://5.imimg.com/data5/XN/VF/KW/SELLER-12479946/amazon-echo-dot-3rd-gen-500x500.jpg"
              price={149.99}
              rating={5}
            />
          </div>
          <div className="home__row">
            <Product
              id={72385238959}
              title="Nvidia Rtx 3090"
              image="https://m.media-amazon.com/images/I/81oXUvlXefL._SX450_.jpg"
              price={1045.49}
              rating={4}
            />
            <Product
              id={82844952025}
              title="Razer Viper ultimate"
              image="https://m.media-amazon.com/images/I/31PR+RfutWL.jpg"
              price={89.99}
              rating={5}
            />
            <Product
              id={1245282812}
              title="Dt 990 pro"
              image="https://d33p2k2w4zpozf.cloudfront.net/media/catalog/product/cache/ad749deec4a285f568434538fd53bd61/b/e/beyerdynamic-dt-990-pro-perspective.png"
              price={109.99}
              rating={4}
            />
          </div>
          <div className="home__row">
            <Product
              id={24141251}
              title="Samsung Odyssey G9 240hz 1440p 49inch 1000r curved gaming monitor"
              image="https://m.media-amazon.com/images/I/61SQz8S+fEL._AC_SY355_.jpg"
              price={1299.99}
              rating={3}
            />
          </div>
        </div>
      </div>
    </>
  );
}
