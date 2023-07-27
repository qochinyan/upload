import { GoogleLogout } from "react-google-login";

const clientId =
  "224894541395-vceui4anqsjv9002ob6g331deee04e2n.apps.googleusercontent.com";

const LogOut = () => {
  const onSuccess = () => {
    console.log("Successfully signed out");
  };
  return (
    <GoogleLogout
      clientId={clientId}
      buttonText={"Logout"}
      onSuccess={onSuccess}
    />
  );
};

export default LogOut;
