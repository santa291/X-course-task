import { Route, Routes } from "react-router-dom";
import { Outlet, Navigate } from "react-router-dom";
import SignIn from "./SignIn";
import BookList from "./BookList";
import Cart from "./Cart";
import SpecificBook from "./SpecificBook";
import NotFound from "./NotFound";

export default function AppRouter() {
  const PrivateRoute = () => {
    return localStorage.getItem("username") ? <Outlet /> : <Navigate to="/login" />;
  };

  return (
    <Routes>
      <Route
        path="/"
        element={<Outlet />}
      >
        <Route element={<PrivateRoute />}>
          <Route
            index
            element={<BookList />}
          />
          <Route
            path="/cart"
            element={<Cart />}
          />
          <Route
            path="/books/:bookID"
            element={<SpecificBook />}
          />
          <Route
            path="*"
            element={<NotFound />}
          />
        </Route>
        <Route
          path="/login"
          element={<SignIn />}
        />
      </Route>
    </Routes>
  );
}
