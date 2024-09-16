import Carts from "../../components/cartsAndBillings/Carts";
import Billings from "../../components/cartsAndBillings/Billings";
import styled from "styled-components";

const CartsPage = () => {
  return (
    <div>
      <h1 style={{ fontSize: "2rem" }}>Shopping Carts</h1>
      <CartsBillingContainer>
        <Carts />
        <Billings />
      </CartsBillingContainer>
    </div>
  );
};

export default CartsPage;

const CartsBillingContainer = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;
  margin-top: 16px;
  @media screen and (max-width: 892px) {
    flex-direction: column;
  }
  @media screen and (min-width: 892px) and (max-width:1090px){
    flex-direction: column;
  }
`;
