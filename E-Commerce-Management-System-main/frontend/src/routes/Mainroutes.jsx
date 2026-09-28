import { Routes, Route } from "react-router-dom";
import { lazy } from "react";

const Products = lazy(() => import("../pages/Products.jsx"));
const Login = lazy(() => import("../pages/Login.jsx"));
const Register = lazy(() => import("../pages/Register.jsx"));
const CreateProduct = lazy(() => import("../pages/admin/CreateProduct.jsx"));
const ProductDetails = lazy(() => import("../pages/admin/ProductDetail.jsx"));
const UserProfile = lazy(() => import("../pages/user/UserProfile.jsx"));
const PageNotfound = lazy(() => import("../pages/PageNotFound.jsx"));
const Authwrapper = lazy(() => import("./Authwrapper.jsx"));
const Unauthwrapper = lazy(() => import("./Unauthwrapper.jsx"));
const Cart = lazy(() => import("../pages/Cart.jsx"));

const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Products />} />

      <Route
        path="/login"
        element={
          <Unauthwrapper>
            <Login />
          </Unauthwrapper>
        }
      />
      <Route
        path="/register"
        element={
          <Unauthwrapper>
            <Register />
          </Unauthwrapper>
        }
      />

      <Route
        path="/admin/create-product"
        element={
          <Authwrapper>
            <CreateProduct />
          </Authwrapper>
        }
      />
      <Route
        path="/admin/user-profile"
        element={
          <Authwrapper>
            <UserProfile />
          </Authwrapper>
        }
      />
      <Route
        path="/product/:id"
        element={
          <Authwrapper>
            <ProductDetails />
          </Authwrapper>
        }
      />
      <Route
        path="/cart"
        element={
          <Authwrapper>
            <Cart />
          </Authwrapper>
        }
      />

      <Route path="*" element={<PageNotfound />} />
    </Routes>
  );
};

export default Mainroutes;
