import { Link } from "react-router-dom";
import Image from "../images/page-not-found.png";
import styles from "../styles/not-found.module.css";
export default function Page404() {
  return (
    <div className={styles.wrapper}>
      <h1>
        404.
        <br />
        <small>Page not found</small>
      </h1>
      <img
        src={Image}
        alt="Error 404. Page not Found"
      />
      <Link to="/">Go to main page</Link>
    </div>
  );
}
