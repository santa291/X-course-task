import { useContext } from "react";
import { Link } from "react-router-dom";
import { Button, Tooltip } from "antd";
import { UserOutlined, ShoppingCartOutlined, LogoutOutlined } from "@ant-design/icons";
import styles from "../styles/header.module.css";
import authorizationContext from "../context/authorizationContext";

export default function Header() {
  const userContext = useContext(authorizationContext);

  const handlerLogout = () => {
    userContext.onLogout();
    localStorage.removeItem("username");
  };
  return (
    <header className={styles.header}>
      <Link
        className={styles["link-logo"]}
        to="/"
      >
        <h1 className={styles["text-logo"]}>JS Band Store /Svitlana Lutsiv</h1>
      </Link>

      <div className={styles["nav-panel"]}>
        <Button
          shape="circle"
          size="large"
        >
          <Link to="/cart">{<ShoppingCartOutlined />}</Link>
        </Button>

        <Tooltip title="Sign Out">
          <Button
            shape="circle"
            size="large"
            onClick={handlerLogout}
          >
            <Link to="/login">
              <LogoutOutlined />
            </Link>
          </Button>
        </Tooltip>
        <UserOutlined className={styles["user-icon"]} />

        <span className={styles["username-label"]}>{userContext.username ? userContext.username : "username"}</span>
      </div>
    </header>
  );
}
