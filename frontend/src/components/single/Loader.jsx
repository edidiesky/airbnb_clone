import React, { useState } from "react";
import styled from "styled-components";
const DetailsLoading = () => {
  return (
    <DetailsLoadingContent
      style={{ gap: "2rem" }}
      className="w-100 flex column back-white"
    >
      <div className="flex column" style={{ gap: ".5rem" }}>
        <div className="top skeleton"></div>
        <div className="top skeleton top2"></div>
      </div>
      <div className="center">
        <Wrapper>
          <div className="w-100 imagewrapper skeleton"></div>
          <Wrapper>
            <div className="w-100 imagewrapper skeleton images"></div>{" "}
            <div className="w-100 imagewrapper skeleton images"></div>{" "}
            <div className="w-100 imagewrapper skeleton images"></div>{" "}
            <div className="w-100 imagewrapper skeleton images"></div>
          </Wrapper>
        </Wrapper>
      </div>
      <CenterWrapper>
        <div className="w-100 flex column gap-1">
          <div className="w-100 flex item-center justify-space">
            <div className="flex flex-1 column" style={{ gap: ".5rem" }}>
              <div className="top skeleton"></div>
              <div className="top skeleton top3"></div>
            </div>
            <div className="avatar skeleton"></div>
          </div>
          <div className="flex flex-1 column" style={{ gap: ".5rem" }}>
            <div className="top w-100 skeleton"></div>
            <div className="top skeleton top2"></div>
          </div>
          <div className="flex flex-1 column" style={{ gap: ".5rem" }}>
            <div className="top skeleton"></div>
          </div>
        </div>
        <div className="flex column" style={{ gap: ".5rem" }}>
          <div className="top skeleton top2"></div>
          <div className="top skeleton"></div>
        </div>
      </CenterWrapper>
    </DetailsLoadingContent>
  );
};

const DetailsLoadingContent = styled.div`
  /* min-height: 35rem; */
  min-width: 100%;
  background-color: #fff;
  padding-bottom: 5rem;
  .skeleton {
    opacity: 0.7;
    animation: Deatils-loading 1s infinite alternate;
  }
  .top {
    height: 1.6rem;
    width: 60%;
    background-color: #ebebeb;
    &.top2 {
      height: 1.6rem;
      width: 40%;
    }
    &.top3 {
      height: 1rem;
      width: 30%;
    }
  }
  @keyframes Deatils-loading {
    0% {
      background-color: #ebebeb;
    }
    100% {
      background-color: #d4dee2a1;
    }
  }
`;

const CenterWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 6rem;
  grid-template-columns: 1fr 27vw;
  /* place-items: start; */
  @media (max-width: 1080px) {
    display: flex;
    flex-direction: column-reverse;
  }
  .rightwrapper {
    width: 100%;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0.3rem;
  min-height: 23rem;

  .images {
    @media (max-width: 780px) {
      display: none;
    }
  }
  @media (max-width: 780px) {
    grid-template-columns: 1fr;
    height: 100%;
    min-height: 100%;
  }
  .imagewrapper {
    position: relative;
    height: 100%;
    background-color: #ebebeb;
    border-radius: 5px;
    @media (max-width: 780px) {
      min-height: 25rem;
    }
    &:hover {
      .gradient {
        opacity: 1;
        visibility: visible;
      }
    }
  }
`;

export default DetailsLoading;
