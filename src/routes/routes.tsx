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
        path: "/user",
        element: <Homepage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/products",
        element: <ProductsPage />,
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
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
