import React from "react";
import styled from "styled-components";
import FooterHosting from "./footer";
import Logo2 from "../common/svg/Logo12";
export default function ListingHeader() {
  return (
    <>
      <ListingHeaderContainer>
        <div className="aboutCenter flex item-center gap-3 justify-center w-85 auto">
          <Logo2 />
          <div className="flex item-center gap-1 justify-end w-100">
            <div className="headBtn fs-14 text-dark text-bold">Questions</div>
            <div className="headBtn fs-14 text-dark text-bold">Save & Exit</div>
          </div>
        </div>
      </ListingHeaderContainer>
    </>
  );
}

const ListingHeaderContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  top: 0;
  position: fixed;
  z-index: 3000;
  background-color: #fff;

  .headBtn {
    border: 1px solid rgba(0, 0, 0, 0.4);
    padding: 0.6rem 1.7rem;
    border-radius: 40px;
  }
`;
