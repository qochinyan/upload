import { useEffect } from "react";
import Login from "./login-logout/login/login";
import LogOut from "./login-logout/logout";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import x from "../assets/xgrey.png";
import "./Auth.scss";

const Auth = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "CLOSE_CHAT" });
  }, []);
  return (
    <div className="auth-container">
      {" "}
      <LogOut />
      <div className="auth-area">
        <Link to="/main" className="x">
          <img src={x} alt="" />
        </Link>
        <div className="auth-desc-block">
          {" "}
          <h2 className="auth-desc h2">Google Login</h2>
          <p className="auth-desc p ">click to sign in</p>
        </div>
        <Login />
      </div>
    </div>
  );
};

export default Auth;
