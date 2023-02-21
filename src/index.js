import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import AuthorizationContextProvider from "./context/AuthorizationContextProvider";
import CartContextProvider from "./context/CartContextProvider";
import JsonDataContextProvider from "./context/JsonDataContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <JsonDataContextProvider>
        <CartContextProvider>
          <AuthorizationContextProvider>
            <App />
          </AuthorizationContextProvider>
        </CartContextProvider>
      </JsonDataContextProvider>
    </HashRouter>
  </React.StrictMode>
);
