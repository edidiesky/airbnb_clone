import React, { useState } from "react";
import styled from "styled-components";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import { BiChevronLeft, BiChevronRight, BiStar } from "react-icons/bi";
import { Link } from "react-router-dom";
import Heart from "./svg/heart";
import Star from "./svg/star";
import { RxCross2 } from "react-icons/rx";
import {
  addProductToWish,
  clearWishMessage,
  onWishDeleteModal,
} from "../../Features/wish/wishSlice";
import { DeleteBuyerReservations } from "../../Features/reservations/reservationsReducer";
import CardSkeleton from "./cardskeleton";

export default function Card({ x, index, type }) {
  const [tabindex, setTabIndex] = useState(0);
  const dispatch = useDispatch();
  const { gigsIsLoading } = useSelector((store) => store.gigs);
  const { ReservationsIsLoading } = useSelector((store) => store.reservations);
  const { wishidArray } = useSelector((store) => store.wish);

  const handleImagePosition = (position) => {
    if (position === "left") {
      setTabIndex(tabindex < 0 ? x?.listing_image?.length - 1 : tabindex - 1);
    }
    if (position === "right") {
      setTabIndex(tabindex >= x?.listing_image?.length - 1 ? 0 : tabindex + 1);
    }
  };

  const handleAddToWish = () => {
    dispatch(
      addProductToWish({
        listing_image: x?.listing_listing_image,
        title: x?.listing_title,
        _id: x?._id,
      })
    );
  };
  let cardid = x?._id;

  let wishdetails = x;

  // start date and enddate
  const startDate = moment(x?.listing_startDate).format("MMMM Do YYYY");
  const endDate = moment(x?.listing_endDate).format("MMMM Do YYYY");
  // const endDate = startDate.add(x?.listing_duration, '')
  // if the type is wish
  if (type === "wish") {
    return (
      <CardContent>
        <div className="w-100 cards flex gap-1 column" key={x?.listing_id}>
          <div className="detailsImageContainer">
            <div className="detailsImageWrapper">
              {x?.listing_image?.map((x) => {
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
          <h4 className="fs-18 text-dark text-bold">
            Amazing Views,{" "}
            <span className="fs-16 text-light text-grey">2023</span>{" "}
            <span className="block fs-14 text-grey text-light">1 saved</span>
          </h4>
        </div>
      </CardContent>
    );
  } // if the type is wish
  if (type === "listing") {
    return (
      <CardContent>
        <div className="w-100 cards flex gap-1 column" key={x?.listing_id}>
          <div className=" listing">
            <div className="detailsImageWrapper">
              {x?.listing_image?.map((x) => {
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
            Condo, <span className="fs-16 text-grey">2023</span>{" "}
            <span className="block fs-14 text-grey text-light">
              Large accomodation in a castle with pr...
            </span>
          </h4>
        </div>
      </CardContent>
    );
  }
  if (type === "dashboard") {
    return (
      <>
        {gigsIsLoading ? (
          <CardSkeleton />
        ) : (
          <DashboardCard key={x?.listing_id} className="flex column gap-1">
            <div className="dashboard_wrapper">
              <div className="backdrop"></div>
              <div className="card_header w-100 flex column gap-1 item-start">
                <div className="w-85 auto flex column item-start gap-1">
                  <div className="flex">
                    <h5 className="fs-12 text-white listing_status">Booked</h5>
                  </div>
                </div>
              </div>
              <div className="detailsImageWrapper">
                {x?.listing_image?.map((x) => {
                  return (
                    <Link
                      target="_blank"
                      to={`/rooms/${cardid}`}
                      style={{ transform: `translateX(-${tabindex * 100}%)` }}
                      className="w-100 card"
                    >
                      <img src={x} alt="" className="w-100 h-100" />
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className="flex column w-90 auto">
              <div className="flex column">
                <h4 className="fs-16 text-dark">
                  ${x?.listing_price}{" "}
                  <span className="text-light fs-12">night</span>
                </h4>
                <h4 className="fs-14 text-dark">
                  {x?.listing_city}, {x?.listing_country}
                </h4>
                <h5 className="fs-12 text-dark text-light">
                  {x?.listing_distance} kilometers away
                </h5>
              </div>
              <div
                style={{ gap: ".3rem" }}
                className="flex fs-12 text-bold item-center"
              >
                4.98
                <div className="flex item-center">
                  <BiStar color="var(--red)" />
                  <BiStar color="var(--red)" />
                  <BiStar color="var(--red)" />
                  <BiStar color="var(--red)" />
                </div>
              </div>
            </div>
          </DashboardCard>
        )}
      </>
    );
  }
  // useEffect(() => {
  //   // const found = Gigs.some((gig) => {
  //   //   wish.some((gigs) => gigs?._id === gig?._id);
  //   // });

  //   Gigs.some((obj1, index1) =>
  //     wish.some((obj2, index2) => {
  //       if (obj2?._id === obj1?._id) {
  //         // if it includes in the wishidarray stop else proceed in adding it to the array
  //         if (wishidArray.includes(obj2?._id)) {
  //           return;
  //         } else {
  //           dispatch(handleWishId(obj1?._id));
  //           return;
  //         }
  //         return;
  //       }
  //       return;
  //     })
  //   );
  //   // console.log(found);
  // }, [wish, Gigs]);

  // resrevation cards
  if (type === "reservations") {
    return (
      <>
        {ReservationsIsLoading ? (
          <CardSkeleton />
        ) : (
          <CardContent>
            <div className="w-100 cards flex gap-1 column" key={x?.listing_id}>
              <div className="detailsImageContainer">
                <div onClick={handleAddToWish} className="icon">
                  <Heart wishsindex={wishidArray} index={cardid} />
                </div>
                <div className="detailsImageWrapper">
                  {x?.listing_Id?.listing_image?.map((x) => {
                    return (
                      <Link
                        target="_blank"
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
                target="_blank"
                to={`/${x?._id}/payment`}
                className="flex column"
                style={{ gap: ".2rem" }}
              >
                <div className="w-100 flex item-center justify-space cardTop">
                  <h4 className="fs-18 text-dark">
                    {x?.listing_city}, {x?.listing_country}
                  </h4>
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
                    {x?.listing_Id?.listing_distance} kilometers away
                  </h4>
                  <h4 className="fs-14 flex item-center gap-1 text-grey text-light">
                    {x?.listing_Id?.listing_startDate} <span>to</span>{" "}
                    <span> {x?.listing_Id?.listing_startDate}</span>
                  </h4>
                </div>
                <h4 className="fs-16 text-dark">
                  ${x?.listing_Id?.listing_price}{" "}
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
        <CardSkeleton />
      ) : (
        <CardContent>
          <div className="w-100 cards flex gap-1 column" key={x?.listing_id}>
            <div className="detailsImageContainer">
              <div onClick={handleAddToWish} className="icon">
                <Heart wishsindex={wishidArray} index={cardid} />
              </div>
              {/* button  */}
              {x?.listing_image?.length >= 2 && (
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
                {/* host image */}
                {/* {x?.listing_hostinfo?.listing_image && (
                  <div
                    onClick={() => dispatch(onProfileModal())}
                    className="hosticon flex item-center justify-center"
                  >
                    <img
                      className="hostavatar"
                      src={x?.listing_hostinfo?.image}
                      alt=""
                    />
                  </div>
                )} */}

                {x?.listing_image?.map((x) => {
                  return (
                    <Link
                      target="_blank"
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
              target="_blank"
              to={`/rooms/${x?._id}`}
              className="flex column"
              style={{ gap: ".2rem" }}
            >
              <div className="w-100 flex item-center justify-space cardTop">
                <h4 className="fs-14 text-extra-bold text-dark">
                  {x?.listing_city}, {x?.listing_country}
                </h4>
                <div
                  style={{ gap: ".3rem" }}
                  className="flex text-light fs-14 item-center"
                >
                  <Star />
                  4.98
                </div>
              </div>
              <div className="flex column">
                <h4 className="fs-14 text-grey text-light">
                  {x?.listing_distance} kilometers away
                </h4>
                <h4 className="fs-12 text-grey text-light">
                  {startDate} - {endDate}
                </h4>
                {/* <h4 className="fs-14 text-grey text-light">{x?.listing_date}</h4> */}
              </div>
              <h4 className="fs-16 text-dark">
                ${x?.listing_price}{" "}
                <span className="text-light fs-12">night</span>
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
  .listing {
    border-radius: 10px;
    height: 15rem;
    position: relative;
    .detailsImageWrapper {
      width: 100%;
      position: relative;
      display: grid;
      grid-template-columns: repeat(4, 100%);
      overflow: hidden;
      grid-gap: 0rem;
      height: 100%;
      .imagesWrapper {
        width: 100%;
        position: relative;
        transition: all 0.6s ease-in-out;
        /* height: 50rem; */
        border-radius: 10px;
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
  .card_header {
    position: absolute;
    z-index: 40;
    bottom: 10%;
    h4,
    h5 {
      color: #fff;
    }
  }
  .detailsImageContainer {
    width: 100%;
    transition: all 0.4s;
    position: relative;
    &.dashboardCard {
      border-radius: 20px;
      overflow: hidden;
    }
    &.dashboardCard:hover {
      transform: scale(1.1);

      .detailsImageWrapper {
        transform: none;
      }
    }

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
    .listing_status {
      padding: 0.2rem 0.8rem;
      color: #fff;
      border-radius: 40px;
      background: var(--red);
      font-weight: 400;
    }
    .backdrop {
      background-color: rgba(0, 0, 0, 0.4);
      position: absolute;
      transition: all 0.4s;
      width: 100%;
      height: 18rem;
      z-index: 10;
      border-radius: 10px;
    }

    .detailsImageWrapper {
      width: 100%;
      position: relative;
      display: grid;
      grid-template-columns: repeat(4, 100%);
      overflow: hidden;
      grid-gap: 0rem;
      height: 100%;
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

const DashboardCard = styled.div`
  background-color: transparent;
  cursor: pointer;
  .dashboard_wrapper {
    height: 15rem;
    position: relative;
    transition: all 0.3s ease;
    border-radius: 20px;
    overflow: hidden;
  }
  .backdrop {
    background-color: rgba(0, 0, 0, 0.4);
    position: absolute;
    transition: all 0.4s;
    width: 100%;
    height: 100%;
    z-index: 10;
    border-radius: 10px;
  }
  .card_header {
    position: absolute;
    z-index: 40;
    bottom: 10%;
    h4,
    h5 {
      color: #fff;
    }
  }

  .listing_status {
    padding: 0.2rem 0.8rem;
    color: #fff;
    border-radius: 40px;
    background: var(--red);
    font-weight: 400;
  }

  .detailsImageWrapper {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 100%);
    overflow: hidden;
    grid-gap: 0rem;
    height: 100%;
    position: absolute;
    transition: all 0.4s;
    width: 100%;
    height: 100%;
    .card {
      width: 100%;
      position: relative;
      transition: all 0.6s ease-in-out;

      img {
        width: 100%;
        object-fit: cover;
        height: 100%;
        /* position: absolute; */

        @media (min-width: 1600px) {
          height: 100%;
          /* object-fit: cover; */
        }
      }
    }
  }
`;
