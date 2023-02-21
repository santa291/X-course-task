import { Link } from "react-router-dom";
import { useContext } from "react";
import { Button, Card } from "antd";
import jsonDataContext from "../context/jsonDataContext";
import noImage from "../images/image-not-found.png";
import styles from "../styles/book-list-item.module.css";
const { Meta } = Card;

export default function BookListItem({ bookID }) {
  const currentBook = useContext(jsonDataContext)[bookID - 1];
  const url = "/books/" + bookID;

  return (
    <Card
      className={styles["book-list-item"]}
      hoverable
      style={{
        width: 350,
      }}
      cover={
        <img
          alt={`cover of ${currentBook.title}`}
          src={currentBook.image !== "" ? currentBook.image : noImage}
        />
      }
    >
      <Meta
        title={currentBook.title.length > 24 ? currentBook.title.slice(0, 24) + "..." : currentBook.title}
        description={currentBook.author}
      />

      <div className={styles["price-btn-container"]}>
        <span className={styles["book-price"]}>$ {currentBook.price}</span>

        <Link to={url}>
          <Button
            className={styles["view-btn"]}
            size="large"
          >
            View
          </Button>
        </Link>
      </div>
    </Card>
  );
}
