import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Header, Meta } from "../components/common";
import styled from "styled-components";
import PaymentIndex from "../components/payment";

export default function Payment() {
  return (
    <>
      <Meta title={'Confirm and Pay'} />
      <Header type={'type'} />
      <PaymentContainer>
        <PaymentIndex/>
      </PaymentContainer>
    </>
  );
}

const PaymentContainer = styled.div`
  width: 100%;
  /* overflow: hidden; */
  /* padding-top: 12rem; */
  padding-top: 6rem;
`;
