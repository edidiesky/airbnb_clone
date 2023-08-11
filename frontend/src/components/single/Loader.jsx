import React, { useState } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";
import styled from "styled-components";
const DetailsLoading = () => {
  return (
    <DetailsLoadingContent
      style={{ gap: "2rem" }}
      className="w-100 flex column back-white"
    >
      <div className="flex column" style={{ gap: ".5rem" }}>
        <div className="flex column gap-10">
          <Skeleton width={400} height={25} />
          <Skeleton width={250} height={25} />
        </div>
      </div>
      <div className="center">
        <Wrapper>
          <Skeleton height={400} />
          <Wrapper className="active">
            <Skeleton height={200} />
            <Skeleton height={200} />
            <Skeleton height={195} />
            <Skeleton height={190} />
          </Wrapper>
        </Wrapper>
      </div>
      <CenterWrapper>
        <div className="w-100 flex column gap-1">
          <div className="w-100 flex item-center justify-space">
            <div className="flex flex-1 column" style={{ gap: ".5rem" }}>
              <div className="flex column gap-1">
                <Skeleton width={370} height={25} />
                <Skeleton width={250} height={25} />
              </div>
            </div>
            <Skeleton circle width={60} height={60} />
          </div>
          <div className="flex column gap-1">
            <Skeleton width={300} height={25} />
            <Skeleton width={200} height={25} />
          </div>
        </div>
        <div className="flex column" style={{ gap: ".5rem" }}>
          <Skeleton width={280} height={25} />
          <Skeleton width={150} height={25} />
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
  &.active {
    @media (max-width: 780px) {
      display: none;
    }
  }

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
