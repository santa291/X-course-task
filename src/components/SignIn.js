import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Input, Button } from "antd";

import authorizationContext from "../context/authorizationContext";
import styles from "../styles/sign-in.module.css";
import avatar from "../images/avatar.png";

export default function Signin() {
  const userContext = useContext(authorizationContext);
  const [user, setUser] = useState("");
  const [isInputValid, setIsInputValid] = useState(false);

  const handleInput = (e) => {
    e.target.value.length >= 4 && e.target.value.length <= 16
      ? setIsInputValid(true)
      : setIsInputValid(false);
    setUser(e.target.value);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    userContext.isAuth = true;
    userContext.onLogin(user);
    localStorage.setItem("username", user);
  };
  return (
    <div className={styles["login-form-container"]}>
      <img className={styles["login-form-img"]} src={avatar} alt="avatar" />
      <Input className={styles["username-input"]} onChange={handleInput} />
      <Button
        className={styles["login-button"]}
        type="primary"
        htmlType="submit"
        disabled={!isInputValid}
        onClick={handleLogin}
      >
        <Link to="/">Sign-In</Link>
      </Button>
    </div>
  );
}
