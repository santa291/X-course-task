import { createContext } from "react";
const authorizationContext = createContext({
  username: "",
  isAuth: false,
  onLogin: (username) => {},
  onLogout: () => {},
});

export default authorizationContext;
