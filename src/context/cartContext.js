import { createContext } from "react";
const cartContext = createContext({
  items: [],
  addToCart: (item) => {},
});

export default cartContext;
