import React, { useState } from "react";
import styled from "styled-components";
import FooterHosting from "./footer";
export default function TitleofPlace() {
  return (
    <>
      <TitleofPlaceContainer>
        <div className="aboutCenter flex column gap-1 justify-center item-center w-85 auto">
          <h2 className="text-extra-bold w-100 text-start text-dark">
            Add some Title of your boat
            <span className="block py-1 fs-20 text-light text-grey">
              Short titles work best. Have fun with it—you can always change it
              later.
            </span>
          </h2>
          <div className="grid w-85 auto">
            <textarea
              placeholder="fun boat"
              className="uploadWrapper auto flex item-center justify-center flex column gap-1"
            />
          </div>
        </div>
      </TitleofPlaceContainer>
      <FooterHosting prev={"373646/photos"} next={"373646/description"} />
    </>
  );
}

const TitleofPlaceContainer = styled.div`
  width: 100%;
  padding-bottom: 6rem;
  .list1 {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding: 2rem 0;
  }
  .uploadWrapper {
    width: 70%;
    border: 1px solid rgba(0, 0, 0, 1);
    padding: 2rem 2rem;
    height: 100%;
    height: 14rem;
    border-radius: 8px;
    background: transparent;
    outline: none;
    font-size: 1.2rem;
    font-weight: 500;
    font-family: inherit;
    border-radius: 20px;
    border: 1px solid rgba(0, 0, 0, 0.4);
    color: var(--grey-1);

    &:hover {
      border: 1px solid rgba(0, 0, 0, 0.4);
    }
    &:focus {
      border: 2px solid var(--dark-1);
      background: transparent;
    }
    &.true {
      background: #fff;
    }
    &.inputError {
      border: 2px solid var(--red);
    }
    &:invalid[focused="true"] ~ span {
      display: block;
    }
  }
  .aboutCenter {
    @media (max-width: 780px) {
      flex-direction: column;
      gap: 2rem;
    }
  }
  .image {
    width: 2.5rem;
    height: 2.5rem;
    object-fit: cover;
  }
  h2 {
    font-size: 35px;
    line-height: 1.2;
    width: 60%;

    @media (max-width: 780px) {
      /* font-size: 40px; */
    }
  }
`;
