import { useContext } from "react";
import { Button } from "antd";

import SelectedBooksContext from "../context/cartContext";
import BookInCartItem from "./BookInCartItem";
import styles from "../styles/cart.module.css";
import Image from "../images/empty-cart.png";

export default function Cart() {
  const cartContext = useContext(SelectedBooksContext);
  const cartList = Array.prototype.slice.call(cartContext.items);
  const countInCart = cartContext.items.length;

  const cartListToShow = (list) => {
    return list.map((item) => (
      <BookInCartItem
        key={item.id}
        qty={item.qty}
        title={item.title}
        price={item.price}
      />
    ));
  };

  const totalAmount = cartList.reduce((result, cartList) => {
    return result + cartList.price * cartList.qty;
  }, 0);

  const handlePurchaiseClick = () => {
    cartContext.purchaise();
  };
  return (
    <section className={styles["cart-wrapper"]}>
      {totalAmount ? (
        <>
          <div className={styles["btn-wrapper"]}>
            <Button
              disabled={countInCart === 0}
              size="large"
              onClick={handlePurchaiseClick}
            >
              Purchaise
            </Button>
          </div>

          <div>{cartListToShow(cartList)}</div>
          <div className={styles["total-amount-wrapper"]}>
            <span>Total price, $</span>
            <span>{totalAmount.toFixed(2)}</span>
          </div>
        </>
      ) : (
        <>
          <img
            src={Image}
            alt="empty cart"
          />
          <p className={styles["empty-cart-text"]}>Cart Is Empty....</p>
        </>
      )}
    </section>
  );
}
