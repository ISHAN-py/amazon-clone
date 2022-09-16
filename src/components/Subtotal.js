import React from "react";
import CurrencyFormat from "react-currency-format";
import "./Subtotal.css";
import { useSelector } from "react-redux/es/exports";
export default function Subtotal() {
  const products = useSelector((state) => state.item);

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              SubTotal ({products.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={Math.round(
          products.reduce((partialSum, a) => partialSum + a.price, 0)
        )}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed to checkout</button>
    </div>
  );
}
