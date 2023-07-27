import Login from "./login-logout/login";
import LogOut from "./login-logout/logout";

const Auth = () => {
  return (
    <div className="auth-container">
      <LogOut />
      <Login />
    </div>
  );
};

export default Auth;
