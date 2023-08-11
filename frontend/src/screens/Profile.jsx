import React from "react";
import { Header, Meta } from "../components/common";
import styled from "styled-components";
import ProfileIndex from "../components/profile";

export default function Profile() {
  return (
    <>
      <Meta title={"Host Profile - Airbnb"} />
      <Header type={"type"} />
      <PaymentContainer>
        <ProfileIndex />
      </PaymentContainer>
    </>
  );
}

const PaymentContainer = styled.div`
  width: 100%;
  padding-top: 6rem;
  @media (max-width:780px){
    padding-top: 3rem;
  }
`;
