import "./login.scss";

import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const onSuccess = (credential) => {
    const decoded = jwt_decode(credential.credential);
    console.group("login");
    console.log("SUCCESS");
    console.log(decoded);
    console.groupEnd();

    dispatch({ type: "SUCCESS", payload: { user: decoded } });
  };
  const onFailure = () => {
    console.log("Authorisation Failed");
    dispatch({ type: "FAIL" });
  };
  return (
    <div className="login-container">
      <div className="login-but">
        <GoogleLogin
          text={"Login"}
          onSuccess={onSuccess}
          onError={onFailure}
          useOneTap
        />
      </div>
    </div>
  );
};

export default Login;
