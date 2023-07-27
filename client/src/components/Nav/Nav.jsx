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
        <Link className="link signup" to="auth">
          <button className="button-92" role="button">
            sign in
          </button>
        </Link>
      </div>
    </header>
  );
}

export default Nav;
