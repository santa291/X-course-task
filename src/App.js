import { useContext } from "react";
import { Outlet } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Header from "./components/Header";
import Footer from "./components/Footer";
import authorizationContext from "./context/authorizationContext";
import "antd/dist/reset.css";
import styles from "./styles/app.module.css";
const loginHeader = {
  margin: "45px ",
  paddingBottom: "15px",
  fontSize: "25px",
  borderBottom: "2px solid rgba(0, 0, 0, 0.1)",
};

function App() {
  const userContext = useContext(authorizationContext);
  return (
    <div className={styles.wrapper}>
      {userContext.isAuth ? <Header /> : <p style={loginHeader}>JS BAND STORE/ Svitlana Lutsiv</p>}

      <main className={styles.content}>
        <AppRouter />
        <Outlet />
      </main>
      {userContext.isAuth && <Footer />}
    </div>
  );
}

export default App;
