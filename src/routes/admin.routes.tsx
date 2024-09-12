import AddProduct from "../components/products/AddProduct";
import AdminDashboard from "../pages/admin/AdminDashboard";
import ProductsManagementPage from "../pages/admin/ProductsManagementPage";

// common admin paths
export const adminPaths = [
  {
    name: "Dashboard",
    index: true,
    element: <AdminDashboard />,
  },
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "Product Management",
    path: "products-management",
    element: <ProductsManagementPage />,
  },
  {
    name: "Add Product",
    path: "add-product",
    element: <AddProduct />,
  },
];
