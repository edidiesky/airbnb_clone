import React, { useState } from "react";
import styled from "styled-components";
import FooterHosting from "./footer";
import Map from "../forms/map";
import { BiPlus } from "react-icons/bi";
export default function BasicInfoAboutPlace() {
  return (
    <>
      <BasicInfoAboutPlaceContainer>
        <div className="aboutCenter flex column gap-2 justify-center item-center w-85 auto">
          <h2 className="text-bold w-100 text-start text-dark">
            Share some basics about your place
            <span className="fs-20 block py-1 text-light text-grey">
              You'll add more details later, like bed types.
            </span>
          </h2>
          <div className="flex typeContainer auto flex column gap-2">
            {/* guest */}
            <div className="w-100 fs-18 text-light bottom typewrapper flex item-center justify-space">
              Guests
              <div className="flex item-center" style={{ gap: "1.2rem" }}>
                <div className="icons flex item-center justify-center">
                  <BiPlus fontSize={"20px"} />
                </div>{" "}
                <h4 className="fs-18 text-extra-bold">2</h4>
                <div className="icons flex item-center justify-center">
                  <BiPlus fontSize={"20px"} />
                </div>
              </div>
            </div>{" "}
            {/* bedrooms */}
            <div className="w-100 fs-18 text-light bottom typewrapper flex item-center justify-space">
              Bedrooms
              <div className="flex item-center" style={{ gap: "1.2rem" }}>
                <div className="icons flex item-center justify-center">
                  <BiPlus fontSize={"20px"} />
                </div>{" "}
                <h4 className="fs-18 text-extra-bold">2</h4>
                <div className="icons flex item-center justify-center">
                  <BiPlus fontSize={"20px"} />
                </div>
              </div>
            </div>{" "}
            <div className="w-100 fs-18 text-light bottom typewrapper flex item-center justify-space">
              Beds
              <div className="flex item-center" style={{ gap: "1.2rem" }}>
                <div className="icons flex item-center justify-center">
                  <BiPlus fontSize={"20px"} />
                </div>{" "}
                <h4 className="fs-18 text-extra-bold">2</h4>
                <div className="icons flex item-center justify-center">
                  <BiPlus fontSize={"20px"} />
                </div>
              </div>
            </div>{" "}
            <div className="w-100 fs-18 text-light bottom typewrapper flex item-center justify-space">
              Bathrooms
              <div className="flex item-center" style={{ gap: "1.2rem" }}>
                <div className="icons flex item-center justify-center">
                  <BiPlus fontSize={"20px"} />
                </div>{" "}
                <h4 className="fs-18 text-extra-bold">2</h4>
                <div className="icons flex item-center justify-center">
                  <BiPlus fontSize={"20px"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </BasicInfoAboutPlaceContainer>
      <FooterHosting prev={"373646/location"} next={"373646/stand-out"} />
    </>
  );
}

const BasicInfoAboutPlaceContainer = styled.div`
  width: 100%;
  /* overflow: hidden; */
  /* padding-bottom: 6rem; */
  .typeContainer {
    width: 60%;
  }
  h2 {
    font-size: 35px;
    line-height: 1.2;
    width: 60%;

    @media (max-width: 780px) {
      /* font-size: 40px; */
    }
  }
  .icons {
    width: 2.5rem;
    border-radius: 50%;
    height: 2.5rem;
    border: 1px solid rgba(0, 0, 0, 0.3);
    &:hover {
      border: 1px solid rgba(0, 0, 0, 1);
    }
  }
`;
