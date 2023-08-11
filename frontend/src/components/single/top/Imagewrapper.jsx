import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
const Imagewrapper = () => {
  const { GigsDetails } = useSelector((store) => store.gigs);

  // console.log(GigsDetails?.listing_image)

  return (
    <Wrapper>
      <div className="w-100 imagewrapper">
        <img
          src={GigsDetails?.listing_image[0]}
          alt=""
          className="image w-100 h-100"
        />
        <div className="gradient"></div>
      </div>
      <Wrapper>
        <div className="w-100 imagewrapper images">
          {GigsDetails?.listing_image[1] && (
            <img
              src={GigsDetails?.listing_image[1]}
              alt=""
              className="image w-100 h-100"
            />
          )}

          <div className="gradient"></div>
        </div>{" "}
        <div className="w-100 imagewrapper images">
          {GigsDetails?.listing_image[2] ? (
            <img
              src={GigsDetails?.listing_image[2]}
              alt=""
              className="image w-100 h-100"
            />
          ) : (
            <img
              src={GigsDetails?.listing_image[1]}
              alt=""
              className="image w-100 h-100"
            />
          )}

          <div className="gradient"></div>
        </div>{" "}
        <div className="w-100 imagewrapper images">
          {GigsDetails?.listing_image[3] ? (
            <img
              src={GigsDetails?.listing_image[3]}
              alt=""
              className="image w-100 h-100"
            />
          ) : (
            <img
              src={GigsDetails?.listing_image[1]}
              alt=""
              className="image w-100 h-100"
            />
          )}

          <div className="gradient"></div>
        </div>{" "}
        <div className="w-100 imagewrapper images">
          {GigsDetails?.listing_image[4] ? (
            <img
              src={GigsDetails?.listing_image[4]}
              alt=""
              className="image w-100 h-100"
            />
          ) : (
            <img
              src={GigsDetails?.listing_image[1]}
              alt=""
              className="image w-100 h-100"
            />
          )}

          <div className="gradient"></div>
        </div>
      </Wrapper>
    </Wrapper>
  );
};
export const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 6px;
  min-height: 20rem;

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
    &:nth-child(2),
    &:nth-child(3) {
      img {
        border-radius: 0;
      }
      .gradient {
        border-radius: 0;
      }
    }
    &:nth-child(2),
    &:nth-child(5) {
      img {
        border-radius: 0;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
      }
      .gradient {
        border-radius: 0;
        border-bottom-right-radius: 10px;
        border-top-right-radius: 10px;
      }
    }
    @media (max-width: 780px) {
      min-height: 25rem;
    }
    &:hover {
      .gradient {
        opacity: 1;
        visibility: visible;
      }
    }
    .gradient {
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.3);
      opacity: 0;
      visibility: hidden;
      border-radius: 10px;
      transition: all 0.5s;
    }
  }
  .image {
    border-radius: 6px;
    position: absolute;
    object-fit: cover;
  }
`;

export default Imagewrapper;
