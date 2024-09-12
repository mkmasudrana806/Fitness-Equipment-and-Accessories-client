import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import { adminPaths } from "./admin.routes";
import { userPaths } from "./user.routes";
import routesGenerator from "../utils/routesGenerator";
import PublicLayout from "../components/layout/PublicLayout";
import Homepage from "../pages/public/Homepage";
import ProductsPage from "../pages/public/ProductsPage";
import ProductDetailsPage from "../pages/public/ProductDetailsPage";
import AboutUs from "../pages/public/AboutUs";
import CartsPage from "../pages/user/CartsPage";
import CheckOutPage from "../pages/user/CheckOutPage";
import PurchaseSuccessMessage from "../pages/resultMessage/PurchaseSuccessMessage";
import ProductsManagementPage from "../pages/admin/ProductsManagementPage";
import AddProduct from "../components/products/AddProduct";
import AuthContainer from "../pages/AuthContainer";
import RouteNotFound from "../pages/resultMessage/RouteNotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    errorElement: <RouteNotFound />,
    children: [
      {
        path: "/",
        element: <Homepage />,
        errorElement: <RouteNotFound />,
      },
      {
        path: "/products",
        element: <ProductsPage />,
        errorElement: <RouteNotFound />,
      },
      {
        path: "/product/1",
        element: <ProductDetailsPage />,
        errorElement: <RouteNotFound />,
      },
      {
        path: "/products",
        element: <ProductsPage />,
        errorElement: <RouteNotFound />,
      },
      {
        path: "/products-management",
        element: <ProductsManagementPage />,
        errorElement: <RouteNotFound />,
      },
      {
        path: "/add-product",
        element: <AddProduct />,
        errorElement: <RouteNotFound />,
      },
      {
        path: "/carts",
        element: <CartsPage />,
        errorElement: <RouteNotFound />,
      },
      {
        path: "/checkout",
        element: <CheckOutPage />,
        errorElement: <RouteNotFound />,
      },
      {
        path: "/purchase-success",
        element: <PurchaseSuccessMessage />,
        errorElement: <RouteNotFound />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
        errorElement: <RouteNotFound />,
      },
      {
        path: "/login",
        element: <AuthContainer />,
        errorElement: <RouteNotFound />,
      },
      {
        path: "/not-found",
        element: <RouteNotFound />,
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
