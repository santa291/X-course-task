import { useState, useEffect } from "react";
import authorizationContext from "./authorizationContext";

const AuthorizationContextProvider = (props) => {
  const [isAuth, setIsAuth] = useState(false);
  const [username, setUserName] = useState("");
  useEffect(() => {
    setUserName(localStorage.getItem("username"));
    if (localStorage.getItem("username")) setIsAuth(true);
  }, []);
  const handleLogin = (username) => {
    setUserName(username);
    setIsAuth(true);
  };
  const handleLogout = () => {
    setUserName("");
    setIsAuth(false);
  };

  const authContext = {
    username: username,
    isAuth: isAuth,
    onLogin: handleLogin,
    onLogout: handleLogout,
  };

  return (
    <authorizationContext.Provider value={authContext}>
      {props.children}
    </authorizationContext.Provider>
  );
};
export default AuthorizationContextProvider;
