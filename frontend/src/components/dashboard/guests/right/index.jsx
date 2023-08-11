import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import styled from "styled-components";
import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllGigs } from "../../../../Features/listing/listingReducer";

export default function DetailsTopLeft() {
  const [tabindex, setTabIndex] = useState(0);
  const dispatch = useDispatch();
  const { Gigs } = useSelector((store) => store.gigs);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    // dispatch(clearGigsAler());
    dispatch(getAllGigs());
  }, []);

  const handleImagePosition = (position) => {
    if (position === "left") {
      setTabIndex(
        tabindex < 0 ? Gigs[0]?.listing_image?.length - 1 : tabindex - 1
      );
    }
    if (position === "right") {
      setTabIndex(
        tabindex >= Gigs[0]?.listing_image?.length - 1 ? 0 : tabindex + 1
      );
    }
  };

  return (
    <DetailsTopLeftContainer className="detailsImage flex column gap-1">
      <div className="detailsImageContainer">
        <div
          className="btnArrow left"
          onClick={() => handleImagePosition("left")}
        >
          <BiChevronLeft />
        </div>
        <div
          className="btnArrow right"
          onClick={() => handleImagePosition("right")}
        >
          <BiChevronRight />
        </div>
        <div className="detailsImageWrapper">
          {Gigs[0]?.listing_image?.map((x, index) => {
            return (
              <div
                className="imagesWrapper"
                key={index}
                style={{ transform: `translateX(-${tabindex * 100}%)` }}
              >
                <img src={x} alt="images" />
              </div>
            );
          })}
        </div>
      </div>

      {/* <div className="imageOptions">
        {Gigs[0]?.listing_image?.map((x, index) => {
          return (
            <div
              className="imageWrapper"
              key={index}
              onClick={() => setTabIndex(index)}
            >
              <img src={x} alt="images" />
              <div
                className={
                  tabindex === index ? "imageGradient active" : "imageGradient"
                }
              ></div>
            </div>
          );
        })}
      </div> */}
    </DetailsTopLeftContainer>
  );
}

const DetailsTopLeftContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* height: 100%; */
  /* background-color: red; */

  &.detailsImage {
  }
  .imageOptions {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem;
    @media (max-width: 680px) {
      grid-template-columns: repeat(5, 1fr);
      width: 100%;
    }
    .imageWrapper {
      height: 8rem;

      position: relative;
      &:hover .imageGradient {
        background: rgba(0 0 0 /10%);
      }
      .imageGradient {
        height: 100%;
        width: 100%;
        position: absolute;
        border-radius: 10px;
        background: rgba(255 255 255 /60%);
        &.active {
          background: rgba(0 0 0 /20%);
          border: 4px solid var(--red);
        }
      }
      img {
        width: 100%;
        position: absolute;
        object-fit: cover;
        height: 100%;
        border-radius: 10px;
      }
    }
  }
  .detailsImageContainer {
    width: 100%;
    position: relative;
    height: 100%;
    /* background-color: red; */

    &:hover .btnArrow {
      opacity: 1;
    }
    .btnArrow {
      z-index: 80;
      width: 3rem;
      position: absolute;
      height: 3rem;
      display: flex;
      align-items: center;
      justify-content: center;
      /* background: #fff; */
      border-radius: 3px;
      border: 1px solid #fff;
      transition: all 0.4s;
      cursor: pointer;
      &:hover {
      }
      svg {
        font-size: 26px;
        color: #fff;
      }
      &.right {
        right: 3%;
        top: 50%;
        transform: translateY(-50%);
      }
      &.left {
        left: 3%;
        top: 50%;
        transform: translateY(-50%);
      }
    }

    .detailsImageWrapper {
      width: 100%;
      position: relative;
      display: grid;
      border-radius: 10px;
      grid-template-columns: repeat(4, 100%);
      overflow: hidden;
      height: 100%;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
      background: #f5f5f5;
      @media (max-width: 780px) {
        min-height: 100%;
      }
      .imagesWrapper {
        width: 100%;
        position: relative;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        height: 100%;
        transition: all 0.6s ease-in-out;
        &:hover {
          img {
            transform: scale(1.1);
          }
        }
        img {
          height: 100%;
          border-top-right-radius: 10px;
          border-bottom-right-radius: 10px;
          width: 100%;
          object-fit: cover;
          transition: all 0.6s ease-in-out;
        }
      }
    }
  }
`;
