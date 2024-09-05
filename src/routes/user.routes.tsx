import MiniStatements from "../pages/user/MiniStatements";
import MyOrders from "../pages/user/MyOrders";
import UserDashboard from "../pages/user/UserDashboard";

// common user paths
export const userPaths = [
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
    ],
  },
  {
    name: "Mini Statements",
    path: "statements",
    element: <MiniStatements />,
  },
];
