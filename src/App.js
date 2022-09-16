import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { auth, onAuthStateChanged } from "./firebase.js";
import { useSelector } from "react-redux/es/exports";
function App() {
  const userRedux = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const actions = bindActionCreators(actionCreators, dispatch);
  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      console.log("The USer IS >>> ", authUser);
      if (authUser) {
        actions.addUser(authUser);
        // console.log("Redux State =", userRedux);
      } else {
        actions.addUser(null);
        // console.log("Redux State =", userRedux);
      }
    });
  }, []);
  console.log("Redux State =", userRedux);
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
          <Route
            exact
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
