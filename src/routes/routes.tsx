import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import Login from "../pages/Login";
import Register from "../pages/Register";
import { adminPaths } from "./admin.routes";
import { userPaths } from "./user.routes";
import routesGenerator from "../utils/routesGenerator";
import ErrorPage from "../pages/ErrorPage";
import PublicLayout from "../components/layout/PublicLayout";
import Homepage from "../pages/public/Homepage";
import ProductsPage from "../pages/public/ProductsPage";
import ProductDetailsPage from "../pages/public/ProductDetailsPage";
import AboutUs from "../pages/public/AboutUs";
import CartsPage from "../pages/user/CartsPage";
import CheckOutPage from "../pages/user/CheckOutPage";
import PurchaseSuccessMessage from "../components/PurchaseSuccessMessage";
import ProductsManagementPage from "../pages/admin/ProductsManagementPage";
import AddProduct from "../components/products/AddProduct";
import AuthContainer from "../pages/AuthContainer";
import Contact from "../pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Homepage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/products",
        element: <ProductsPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/product/1",
        element: <ProductDetailsPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/products",
        element: <ProductsPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/products-management",
        element: <ProductsManagementPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/add-product",
        element: <AddProduct />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/carts",
        element: <CartsPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/checkout",
        element: <CheckOutPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/purchase-success",
        element: <PurchaseSuccessMessage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
        errorElement: <ErrorPage />,
      },

      {
        path: "/login",
        element: <AuthContainer />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/contact",
        element: <Contact />,
        errorElement: <ErrorPage />,
      },
    ],
  },
  {
    path: "/admin",
    element: <App />,
    children: routesGenerator(adminPaths),
  },
  {
    path: "/user",
    element: <App />,
    children: routesGenerator(userPaths),
  },
]);
