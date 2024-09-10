import Carts from "../../components/cartsAndBillings/Carts";
import Billings from "../../components/cartsAndBillings/Billings";
import styled from "styled-components";

const CartsPage = () => {
  return (
    <CartsBillingContainer>
      <Carts />
      <Billings />
    </CartsBillingContainer>
  );
};

export default CartsPage;

const CartsBillingContainer = styled.div`
  display: flex;
  gap: 16px;
  @media screen and (max-width: 892px) {
    flex-direction: column;
  }
`;
