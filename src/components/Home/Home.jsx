import "./Home.scss";
import Nav from "../Nav/Nav";
import uploadAnim from "../../assets/uploadAnimation.gif";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="home-container">
      <Nav />
      <div className="home-content">
        <div className="home-left">
          <h1 className="Home-heading">Upload It !</h1>
          <p className="upload-description">
            Upload project !.It allows you upload files in server and after get
            them.you can also share files with your friends.
            <br />
            <br />
            In left-bottom you can see the chat, use it!
          </p>
          <Link className="home-link" to="upload">
            <button class="button-48" role="button">
              <span class="text">Upload</span>
            </button>
          </Link>
        </div>
        <div className="home-right">
          <img className="uploadAnimation" src={uploadAnim} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
