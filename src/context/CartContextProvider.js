import { useReducer } from "react";
import cartContext from "./cartContext";
const defaultCartState = {
  items: [],
};

const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id);

    const existingCartItem = state.items[existingCartItemIndex];
    let updatedCartItem;
    let updatedCartItems;
    if (existingCartItem) {
      updatedCartItem = {
        ...existingCartItem,
        qty: existingCartItem.qty + action.item.qty,
      };
      updatedCartItems = [...state.items];
      updatedCartItems[existingCartItemIndex] = updatedCartItem;
    } else {
      updatedCartItem = {
        ...action.item,
      };
      updatedCartItems = state.items.concat(updatedCartItem);
    }

    return {
      items: updatedCartItems,
    };
  }
  if (action.type === "PURCHAISE") {
    return defaultCartState;
  }
  return defaultCartState;
};

const CartContextProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addToCartHandler = (item) => {
    dispatchCartAction({
      type: "ADD_TO_CART",
      item: item,
    });
  };

  const purchaiseHandler = () => {
    dispatchCartAction({
      type: "PURCHAISE",
    });
  };

  const booksInCartContext = {
    items: cartState.items,
    addToCart: addToCartHandler,
    purchaise: purchaiseHandler,
  };

  return <cartContext.Provider value={booksInCartContext}>{props.children}</cartContext.Provider>;
};
export default CartContextProvider;
