import Carts from "../../components/cartsAndBillings/Carts";
import Billings from "../../components/cartsAndBillings/Billings";

const CartsPage = () => {
  return (
    <div style={{ display: "flex", gap: "16px" }}>
      <Carts />
      <Billings />
    </div>
  );
};

export default CartsPage;
