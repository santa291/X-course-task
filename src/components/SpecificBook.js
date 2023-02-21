import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button, Card, InputNumber } from "antd";
import styles from "../styles/specific-book.module.css";
import jsonDataContext from "../context/jsonDataContext";
import cartContext from "../context/cartContext";
import Icon from "../images/in-cart-icon.png";
import noImage from "../images/image-not-found.png";

export default function SpecificBook() {
  const bookList = useContext(jsonDataContext);
  const cartList = useContext(cartContext);
  const bookID = useParams().bookID;
  const currentBookIndex = bookList.findIndex((item) => item.id === +bookID);
  const currentBook = useContext(jsonDataContext)[currentBookIndex];
  const indexInCart = cartList.items.findIndex((item) => item.id === +bookID);
  let countInCart = 0;
  if (indexInCart !== -1) {
    countInCart = cartList.items[indexInCart].qty;
  }
  const [count, setCount] = useState(1);

  const totalSum = (count * currentBook.price).toFixed(2);
  const [selectedBook, setSelectedBook] = useState(currentBook);

  const onChange = (value) => {
    setCount(value);
  };
  useEffect(() => {
    setSelectedBook((prevState) => ({ ...prevState, qty: count }));
  }, [count]);

  const handleAddToCart = () => {
    setCount(count);
    cartList.addToCart(selectedBook);
  };

  return (
    <div className={styles["specisic-book-wrapper"]}>
      <img
        className={styles["book-img"]}
        src={currentBook.image !== "" ? currentBook.image : noImage}
        alt={currentBook.title}
        width="350px"
      />

      <div className={styles["param-wrapper"]}>
        <h2 className={styles["book-title"]}>{currentBook.title}</h2>
        <div className={styles["span-grouping"]}>
          <span className={styles.label}>Author:</span>
          <span>{currentBook.author}</span>
        </div>
        <div className={styles["span-grouping"]}>
          <span className={styles.label}>Book level:</span>
          <span>for begginers</span>
        </div>
        <div className={styles["span-grouping"]}>
          <span className={styles.label}>Tags:</span>
        </div>
      </div>

      <div className={styles["add-to-cart-wrapper"]}>
        <div className={styles["span-grouping"]}>
          <span>Price, $</span> <span>{currentBook.price}</span>
        </div>

        <div className={styles["span-grouping"]}>
          <span>Count</span>
          <InputNumber
            label="Count"
            min={1}
            max={42}
            onChange={onChange}
            defaultValue={1}
          />
        </div>
        <div className={styles["span-grouping"]}>
          <span>Tolal</span>
          <span>{totalSum}</span>
        </div>
        <div className={styles["btn-wrapper"]}>
          <Button onClick={handleAddToCart}> Add to Cart</Button>
          {countInCart ? (
            <div className={styles["in-cart-wrapper"]}>
              <img
                src={Icon}
                alt="in cart"
              ></img>
              <p>[{countInCart}]</p>
            </div>
          ) : null}
        </div>
      </div>

      <Card
        title="Book Description"
        className={styles["book-description"]}
      >
        <p>{currentBook.description}</p>
      </Card>
    </div>
  );
}
