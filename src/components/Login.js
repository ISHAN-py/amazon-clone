import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "../firebase.js";

function Login() {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        navigate("/");
      })
      .catch((err) => console.log(err.message));
  };
  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          navigate("/");
        }
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://www.peninsulafamilyservice.org/wp-content/uploads/2019/08/amazon-logo-transparent.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign-IN</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="chanandlerbong@gmail.com"
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={signIn}
            type="submit"
            className="login__signinbutton"
          >
            Sign in
          </button>
        </form>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
          voluptatibus, ipsum explicabo autem illum unde?
        </p>
        <button onClick={register} className="login__registerbutton">
          Create an account
        </button>
      </div>
    </div>
  );
}
export default Login;
