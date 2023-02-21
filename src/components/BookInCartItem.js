import styles from "../styles/cart-item.module.css";
export default function BookInCartItem(props) {
  return (
    <div className={styles["cart-item"]}>
      <span className={styles["cart-item-title"]}>{props.title}</span>
      <span className={styles["cart-item-count"]}>{props.qty}</span>
      <span className={styles["cart-item-cost"]}>{`$${(props.price * props.qty).toFixed(2)}`}</span>
    </div>
  );
}
