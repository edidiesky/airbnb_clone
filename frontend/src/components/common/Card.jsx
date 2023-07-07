import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import Heart from "./svg/heart";
import Star from "./svg/star";
import { onProfileModal } from "../../Features/user/userSlice";
import { RxCross2 } from "react-icons/rx";
import {
  addProductToWish,
  clearWishMessage,
  handleWishId,
  onWishDeleteModal,
} from "../../Features/wish/wishSlice";
import { useEffect } from "react";
import Message from "../loaders/Message";
import { DeleteBuyerReservations } from "../../Features/reservations/reservationsReducer";

const CardLoading = () => {
  return (
    <CardLoadingContent
      style={{ gap: ".4rem" }}
      className="w-100 flex column back-white"
    >
      <div className="top w-100"></div>
      <div style={{ gap: ".2rem" }} className="flex column w-100">
        <div className="center w-100 auto flex gap-1 item-center justify-space">
          <div
            style={{ borderRadius: "6px" }}
            className="topCenter skeleton"
          ></div>
          <div
            style={{ borderRadius: "6px" }}
            className="bottomCenter skeleton"
          ></div>
        </div>
        <div
          className="w-100 auto flex column item-start"
          style={{ gap: ".4rem" }}
        >
          <div
            style={{ width: "50%", borderRadius: "6px" }}
            className="h-6 duration1 skeleton"
          ></div>
          <div
            style={{ width: "35%", borderRadius: "6px" }}
            className="h-6 duration2 skeleton"
          ></div>
        </div>
      </div>
    </CardLoadingContent>
  );
};

export default function Card({ x, index, type }) {
  const [tabindex, setTabIndex] = useState(0);
  // const [wishsindex, wishidArray] = useState([]);
  const dispatch = useDispatch();
  const { Gigs, gigsIsLoading } = useSelector((store) => store.gigs);
  const { Reservations, ReservationsIsLoading } = useSelector(
    (store) => store.reservations
  );
  const { wish, wishidArray, showAlert, alertText } = useSelector(
    (store) => store.wish
  );

  const handleImagePosition = (position) => {
    if (position === "left") {
      setTabIndex(tabindex < 0 ? x?.image?.length - 1 : tabindex - 1);
    }
    if (position === "right") {
      setTabIndex(tabindex >= x?.image?.length - 1 ? 0 : tabindex + 1);
    }
  };

  const handleAddToWish = () => {
    dispatch(
      addProductToWish({
        image: x.image,
        title: x.title,
        _id: x?._id,
      })
    );
  };

  let wishdetails = x;

  // if the type is wish
  if (type === "wish") {
    return (
      <CardContent>
        <div className="w-100 cards flex gap-1 column" key={x?.id}>
          <div className="detailsImageContainer">
            <div className="detailsImageWrapper">
              {x?.image?.map((x) => {
                return (
                  <div
                    style={{ transform: `translateX(-${tabindex * 100}%)` }}
                    className="w-100 card"
                  >
                    <div
                      onClick={() => dispatch(onWishDeleteModal(wishdetails))}
                      className="icon delete"
                    >
                      <RxCross2 />
                    </div>
                    <img src={x} alt="" className="w-100" />
                    <div className="backdrop"></div>
                  </div>
                );
              })}
            </div>
          </div>
          <h4 className="fs-18 text-dark">
            Amazing Views, <span className="fs-16 text-grey">2023</span>{" "}
            <span className="block fs-14 text-grey">1 saved</span>
          </h4>
        </div>
      </CardContent>
    );
  }
  const handleClearMessage = () => {
    dispatch(clearWishMessage());
  };

  useEffect(() => {
    // const found = Gigs.some((gig) => {
    //   wish.some((gigs) => gigs?._id === gig?._id);
    // });

    Gigs.some((obj1, index1) =>
      wish.some((obj2, index2) => {
        if (obj2?._id === obj1?._id) {
          // if it includes in the wishidarray stop else proceed in adding it to the array
          if (wishidArray.includes(obj2?._id)) {
            return;
          } else {
            dispatch(handleWishId(obj1?._id));
            return;
          }
          return;
        }
        return;
      })
    );
    // console.log(found);
  }, [wish, Gigs]);
  let cardid = x?._id;

  if (type === "reservations") {
    return (
      <>
        {ReservationsIsLoading ? (
          <CardLoading />
        ) : (
          <CardContent>
            <div className="w-100 cards flex gap-1 column" key={x?.id}>
              <div className="detailsImageContainer">
                <div onClick={handleAddToWish} className="icon">
                  <Heart wishsindex={wishidArray} index={cardid} />
                </div>
                <div className="detailsImageWrapper">
                  {x?.gigId?.image?.map((x) => {
                    return (
                      <Link
                        to={`/${cardid}/payment`}
                        style={{ transform: `translateX(-${tabindex * 100}%)` }}
                        className="w-100 card"
                      >
                        <img src={x} alt="" className="w-100" />
                        <div className="backdrop"></div>
                      </Link>
                    );
                  })}
                </div>
              </div>

              <Link
                to={`/${x?._id}/payment`}
                className="flex column"
                style={{ gap: ".2rem" }}
              >
                <div className="w-100 flex item-center justify-space cardTop">
                  <h4 className="fs-18 text-dark">{x?.gigId?.location}</h4>
                  <div
                    style={{ gap: ".3rem" }}
                    className="flex text-light fs-16 item-center"
                  >
                    <Star />
                    4.98
                  </div>
                </div>
                <div className="flex column">
                  <h4 className="fs-16 text-grey text-light">
                    {x?.gigId?.distance} kilometers away
                  </h4>
                  <h4 className="fs-14 flex item-center gap-1 text-grey text-light">
                    {x?.gigId?.startDate} <span>to</span> <span> {x?.gigId?.startDate}</span>
                  </h4>
                </div>
                <h4 className="fs-16 text-dark">
                  ${x?.gigId?.price}{" "}
                  <span className="text-light fs-16">night</span>
                </h4>
              </Link>
              <div
                onClick={() => dispatch(DeleteBuyerReservations(cardid))}
                className="reserveBtn fs-16 flex item-center justify-center"
              >
                Cancel Reservations
              </div>
            </div>
          </CardContent>
        )}
      </>
    );
  }

  return (
    <>
      {gigsIsLoading ? (
        <CardLoading />
      ) : (
        <CardContent>
          <div className="w-100 cards flex gap-1 column" key={x?.id}>
            <div className="detailsImageContainer">
              <div onClick={handleAddToWish} className="icon">
                <Heart wishsindex={wishidArray} index={cardid} />
              </div>
              {/* button  */}
              {x?.image?.length >= 2 && (
                <div className="flex">
                  {tabindex > 0 && (
                    <div
                      className="btnArrow shadow left"
                      onClick={() => handleImagePosition("left")}
                    >
                      <BiChevronLeft />
                    </div>
                  )}
                  <div
                    className="btnArrow shadow right"
                    onClick={() => handleImagePosition("right")}
                  >
                    <BiChevronRight />
                  </div>
                </div>
              )}

              <div className="detailsImageWrapper">
                {x.hostinfo?.image && (
                  <div
                    onClick={() => dispatch(onProfileModal())}
                    className="hosticon flex item-center justify-center"
                  >
                    <img
                      className="hostavatar"
                      src={x.hostinfo?.image}
                      alt=""
                    />
                  </div>
                )}

                {x?.image?.map((x) => {
                  return (
                    <Link
                      to={`/rooms/${cardid}`}
                      style={{ transform: `translateX(-${tabindex * 100}%)` }}
                      className="w-100 card"
                    >
                      <img src={x} alt="" className="w-100" />
                      <div className="backdrop"></div>
                    </Link>
                  );
                })}
              </div>
            </div>

            <Link
              to={`/rooms/${x?._id}`}
              className="flex column"
              style={{ gap: ".2rem" }}
            >
              <div className="w-100 flex item-center justify-space cardTop">
                <h4 className="fs-18 text-dark">{x?.location}</h4>
                <div
                  style={{ gap: ".3rem" }}
                  className="flex text-light fs-16 item-center"
                >
                  <Star />
                  4.98
                </div>
              </div>
              <div className="flex column">
                <h4 className="fs-16 text-grey text-light">
                  {x.distance} kilometers away
                </h4>
                <h4 className="fs-16 text-grey text-light">{x.date}</h4>
              </div>
              <h4 className="fs-16 text-dark">
                ${x.price} <span className="text-light fs-16">night</span>
              </h4>
            </Link>
          </div>
        </CardContent>
      )}
    </>
  );
}

const CardContent = styled.div`
  width: 100%;
  overflow: hidden;
  .reserveBtn {
    background-image: linear-gradient(
      to right,
      #e61e4d 0%,
      #e31c5f 50%,
      #d70466 100%
    );
    /* padding: 0.8rem 2rem; */
    min-height: 3rem;
    border-radius: 10px;
    color: #fff !important;
    color: #fff;
    /* padding: 0.8rem 2rem; */
    border-radius: 10px;
    cursor: pointer;
    &:hover {
      opacity: 0.6;
    }
  }
  .detailsImageContainer {
    width: 100%;
    position: relative;
    &:hover .btnArrow {
      opacity: 1;
    }
    .btnArrow {
      z-index: 80;
      width: 1.8rem;
      position: absolute;
      height: 1.8rem;
      display: flex;
      border-radius: 50%;
      align-items: center;
      justify-content: center;
      background: #fff;
      opacity: 0;
      transition: all 0.4s;
      cursor: pointer;
      &:hover {
        transform: scale(1.1);
      }
      svg {
        font-size: 20px;
        color: #222;
      }
      &.right {
        right: 5%;
        top: 50%;
        transform: translateY(-50%);
      }
      &.left {
        left: 5%;
        top: 50%;
        transform: translateY(-50%);
      }
    }

    .detailsImageWrapper {
      width: 100%;
      position: relative;
      display: grid;
      grid-template-columns: repeat(4, 100%);
      overflow: hidden;
      grid-gap: 0rem;
      .imagesWrapper {
        width: 100%;
        position: relative;
        transition: all 0.6s ease-in-out;
        height: 50rem;
        margin: 0 1.5rem;
        @media (max-width: 780px) {
          min-height: 100%;
        }

        img {
          width: 100%;
          object-fit: cover;
          height: 100%;
          position: absolute;

          @media (min-width: 1600px) {
            height: 100%;
            object-fit: cover;
          }
        }
      }
    }
  }

  &:hover {
    .desc {
      color: var(--green);
    }
  }

  .px-2 {
    padding: 0.8rem 1.6rem;
  }

  .bottom {
    padding: 1rem 1.5rem;
    background-color: #fff;
  }
  .cards {
    &:hover .owl-nav {
      opacity: 1;
      visibility: visible;
    }
  }
  .text-secondary {
    color: var(--yellow);
  }
  .hosticon {
    position: absolute;
    bottom: 10%;
    left: 5%;
    height: 5rem;
    width: 4rem;
    z-index: 200;
    border-radius: 3px;
    background-color: #ebe7e7;
    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
    img {
      width: 3.2rem;
      object-fit: cover;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
      height: 3.2rem;
      border: 2px solid rgba(0, 0, 0, 0.2);
      border-radius: 50%;
    }
  }
  .icon {
    position: absolute;
    top: 7% !important;
    cursor: pointer;
    right: 3%;
    border-radius: 50%;
    display: grid;
    place-items: center;
    transition: all 0.4s;
    z-index: 20;

    svg {
      font-size: 24px;
      color: #333;
    }
  }
  .card {
    min-height: 18rem;
    position: relative;
    border-radius: 15px;
    width: 100%;
    transition: all 0.4s;
    overflow: hidden;
    &:hover .delete {
      opacity: 1;
      visibility: visible;
    }
    /* overflow: hidden; */

    .delete {
      position: absolute;
      top: 3%;
      cursor: pointer;
      right: 3%;
      border-radius: 50%;
      display: grid;
      place-items: center;
      transition: all 0.4s;
      z-index: 2000;

      svg {
        font-size: 24px;
        color: #333;
      }
    }

    .delete {
      left: 3%;
      right: 0;
      background-color: #fff;
      width: 2.2rem;
      height: 2.2rem;
      border-radius: 50%;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.4);
      opacity: 0;
    }
    &:hover {
      .icon {
        &.left {
          left: -8px;
        }
        &.right {
          right: -8px;
        }
      }
      .desc {
        color: var(--yellow);
      }
      .backdrop {
        background-color: rgba(255, 255, 255, 0.05);
      }
      img {
        transform: scale(1.1);
      }
    }
    .backdrop {
      background-color: rgba(0, 0, 0, 0.2);
      position: absolute;
      transition: all 0.4s;
      width: 100%;
      height: 18rem;
      border-radius: inherit;
    }
    img {
      position: absolute;
      transition: all 0.4s;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      object-fit: cover;
    }
  }
`;

const CardLoadingContent = styled.div`
  /* min-height: 35rem; */
  min-width: 100%;
  background-color: #fff;
  .skeleton {
    opacity: 0.7;
    animation: card-loading 1s infinite alternate;
  }
  .top {
    height: 17rem;
    opacity: 0.4;
    border-radius: 12px;
    animation: card-loading 2s infinite alternate;
  }
  .bottomCenter {
    height: 1rem;
    flex: 0.3;
  }
  .h-6 {
    height: 1.5rem;
  }
  .topCenter {
    width: 50%;
    height: 1.5rem;
  }
  .period1 {
    animation-duration: 1.5s;
  }
  .period2 {
    animation-duration: 2s;
  }
  @keyframes card-loading {
    0% {
      background-color: #ebebeb;
    }
    100% {
      background-color: #d4dee2a1;
    }
  }
`;
