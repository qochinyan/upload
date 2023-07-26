import "./Nav.scss";
import iconWhite from "../../assets/iconWhite.png";
import { Link, Navigate } from "react-router-dom";
function Nav() {
  return (
    <header className="navigation">
      <Link className="link white upload" to="upload">
        Upload
        <img className="homeUploadIcon" src={iconWhite} alt="" />
      </Link>
      <div className="loginButtons">
        <Link className="link white login" to="login">
          Login
        </Link>
        <Link className="link signup" to="registration">
          <button className="button-92" role="button">
            Sign Up
          </button>
        </Link>
      </div>
    </header>
  );
}

export default Nav;
