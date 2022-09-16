import React, { useEffect } from "react";
import "./Header.css";
import { useSelector } from "react-redux/es/exports";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { auth, signOut } from "../firebase.js";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";
export default function Header() {
  // const products = useSelector((state) => state.item);
  const dispatch = useDispatch();
  const actions = bindActionCreators(actionCreators, dispatch);
  const user = useSelector((state) => state.user);
  const handleAuthentication = () => {
    if (user) {
      // actions.addUser(null);
      signOut(auth)
        .then(() => {
          console.log("Signed Out Successful", user);
        })
        .catch((err) => {
          console.log("Didnt Sign Out UnSuccessful", err, user);
        });
    }
  };
  return (
    <>
      <div className="header">
        <div className="logo">
          <Link to="/">
            <img
              className="logo_img"
              src="https://i.pinimg.com/originals/47/b7/bd/47b7bdac4285ee24654ca7d68cf06351.png"
            />
          </Link>
        </div>
        <div className="header_search">
          <input type="text" className="header_searchInput" />
          <SearchIcon className="search-icon" />
        </div>
        <div className="children">
          <Link to={!user && "/login"}>
            <div className="header_options">
              <span className="header__optionLineOne">Hello User</span>
              <span className="header__optionLineTwo">
                {user ? "Sign out" : "Sign in"}
              </span>
            </div>
          </Link>
          <div className="header_options">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">Orders</span>
          </div>
          <div className="header_options">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime </span>
          </div>
          <Link to="/checkout">
            <div onClick={handleAuthentication} className="header__optionCart">
              <ShoppingCartIcon className="cart-icon" />
              <span className="header__optionLineTwo header__cartCount"></span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
