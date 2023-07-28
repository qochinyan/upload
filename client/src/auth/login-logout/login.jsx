import { GoogleLogin } from "react-google-login";

const clientId =
  "224894541395-vceui4anqsjv9002ob6g331deee04e2n.apps.googleusercontent.com";

const Login = () => {
  const onSuccess = () => {
    console.log("Successfully Authorised");
  };
  const onFailure = () => {
    console.log("Authorisation Failed");
  };
  return (
    <GoogleLogin
      clientId={clientId}
      buttonText={"Login"}
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={"single_host_origin"}
      isSignedIn={true}
    />
  );
};
export default Login;
