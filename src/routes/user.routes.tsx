import PurchaseSuccessMessage from "../components/messages/PurchaseSuccessMessage";
import CartsPage from "../pages/user/CartsPage";
import CheckOutPage from "../pages/user/CheckOutPage";
import MiniStatements from "../pages/user/MiniStatements";
import MyOrders from "../pages/user/MyOrders";
import UserDashboard from "../pages/user/UserDashboard";

// common user paths
export const userPaths = [
  {
    name: "Dashboard",
    index: true,
    element: <UserDashboard />,
  },
  {
    name: "Dashboard",
    path: "dashboard",
    element: <UserDashboard />,
  },
  {
    name: "Orders Management",
    children: [
      {
        name: "My Orders",
        path: "my-orders",
        element: <MyOrders />,
      },
      {
        name: "Carts",
        path: "carts",
        element: <CartsPage />,
      },
    ],
  },
  {
    name: "Mini Statements",
    path: "statements",
    element: <MiniStatements />,
  },
  {
    path: "checkout",
    element: <CheckOutPage />,
  },
  {
    path: "purchase-success/:id",
    element: <PurchaseSuccessMessage />,
  },
];
