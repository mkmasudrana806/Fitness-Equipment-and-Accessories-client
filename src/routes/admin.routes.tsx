import AdminDashboard from "../pages/admin/AdminDashboard";

// common admin paths
export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "Order Management",
    children: [
      {
        name: "Orders",
        path: "orders",
        element: "Orders element",
      },
      {
        name: "Orders Insights",
        path: "insights",
        element: "Orders Insights element",
      },
    ],
  },
];
