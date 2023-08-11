import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import styled from "styled-components";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";
import { HiSearch } from "react-icons/hi";
import Logo from "./svg/Logo";
import { Link, useNavigate } from "react-router-dom";
import Bar from "./svg/Bar";
import Profile from "./svg/Profile";
import World from "./svg/World";
import { AnimatePresence, motion } from "framer-motion";
import SliderIndex from "./Slider";
import { categorydata } from "../../data/category";
import { useDispatch, useSelector } from "react-redux";
import { onAuthModal } from "../../Features/user/userSlice";
import { options2 } from "../../utils/carousel";
import Logo2 from "./svg/Logo12";
import Filter from "./svg/filter";
import { getLsitingType } from "../../Features/listing/listingSlice";

export default function Header({
  type,
  loader,
  setSearch,
  adults,
  infants,
  children,
}) {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((store) => store.user);
  const {
    startDate,
    endDate,
    location,
    listing_children, 
    listing_infants,
    listing_adults,
  } = useSelector((store) => store.gigs);

  let limit = listing_adults + listing_children;

  let [searchParams, setSearchParams] = useSearchParams();
  const typevalue = searchParams.get("type");
  // console.log(startDate);
  const [tab, setTab] = useState(0);
  const handleListingType = (tab, type) => {
    setTab(tab);
    setSearchParams((type = { type }));
  };
  useEffect(() => {
    if (typevalue !== null) {
      dispatch(getLsitingType(typevalue));
    }
  }, [typevalue]);
  const navigate = useNavigate();
  const dropin = {
    hidden: {
      top: "40%",
      opacity: 0,
      transition: {
        delay: 0.5,
      },
    },
    visible: {
      top: "40%",
      opacity: 1,
      transition: {
        duration: 0.3,
        type: "spring",
        damping: 26,
        stiffness: 600,
      },
    },
    exit: {
      top: "0%",
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  const dropin2 = {
    hidden: {
      top: "80%",
      opacity: 0,
      transition: {
        delay: 0.5,
      },
    },
    visible: {
      top: "80%",
      opacity: 1,
      transition: {
        duration: 0.3,
        type: "spring",
        damping: 26,
        stiffness: 600,
      },
    },
    exit: {
      top: "0%",
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  const [drop, setDrop] = useState(false);

  // dropdown for
  const Dropdown = () => {
    return (
      <motion.ul
        variants={type ? dropin2 : dropin}
        initial="hidden"
        animate="visible"
        exit={"exit"}
        className="dropdown shadow flex column"
        onClick={() => setDrop(!drop)}
        // style={{ position: "absolute" }}
      >
        {userInfo ? (
          <div className="">
            <li className="fs-12 text-light text-dark">
              <Link className="w-100" to={"/reservations"}>
                Reservations
              </Link>
            </li>
            <li className="fs-12 text-light text-dark">
              {" "}
              <Link className="w-100" to={"/wishlists"}>
                Wishlists
              </Link>
            </li>
            <li className="fs-12 text-light text-dark">
              {" "}
              <Link className="w-100" to={"/order"}>
                Orders
              </Link>
            </li>
            <li className="fs-12 text-light text-dark">
              {" "}
              <Link className="w-100" to={"/trips"}>
                Trips
              </Link>
            </li>
            <li className="fs-12 text-light text-dark">Logout</li>
          </div>
        ) : (
          <div className="">
            <li
              onClick={() => dispatch(onAuthModal())}
              className="fs-12 text-light"
            >
              Sign in
            </li>
            <li
              onClick={() => dispatch(onAuthModal())}
              className="fs-12 text-light text-dark"
            >
              Sign up
            </li>
          </div>
        )}
      </motion.ul>
    );
  };
  const handleCreateListingSteps = () => {
    if (userInfo) {
      navigate("/become-a-host/overview");
    } else {
      dispatch(onAuthModal());
    }
  };

  // headertop
  const HeaderTop = () => {
    return (
      <div
        className={
          type === "search"
            ? "w-100 headerTop flex w-100 active"
            : "w-100 headerTop flex w-100 "
        }
      >
        <div className="flex w-90 auto headertop1 flex-1 item-center justify-end">
          <div className="center justify-space w-100 flex item-center gap-1">
            <div className="flex item-center gap-2 ">
              <HiSearch color="#000" fontSize={"20px"} />
              <div className="fs-14 text-dark text-bold">
                Anywhere
                <span
                  style={{ gap: ".3rem" }}
                  className="text-light fs-12 text-grey flex item-center"
                >
                  {/* {startDate !== undefined
                    ? startDate - endDate
                    : startDate - endDate}{" "} */}
                  <span> . </span> <span>Add guests</span>
                </span>
              </div>
            </div>
            <div className="icons flex item-center justify-center">
              <Filter />
            </div>
          </div>
        </div>
        <div
          className={
            type
              ? "headertop2 w-85 auto flex item-center justify-space gap-2 "
              : "w-90 auto  headertop2 flex item-center justify-space gap-2"
          }
        >
          <Link to={"/"} className="logo1">
            <Logo />
          </Link>{" "}
          <Link to={"/"} className="logo2">
            <Logo2 />
          </Link>
          {/* search */}
          {/* {type === 'search' && (
            <div className="flex item-center justify-center">
              <h4 className="fs-18 text-light text-center">Stays</h4>
            </div>
          )} */}
          {!type && (
            <div
              onClick={() => setSearch(true)}
              className="flex item-center justify-end"
            >
              <div className="center flex item-center gap-1">
                <div className="fs-12 text-dark text-bold">
                  {location ? location : "Location"}
                </div>
                <div className="left1 fs-12 text-dark text-bold">
                  {startDate === "Invalid date" &&
                  endDate === "Invalid date" ? (
                    "Add Date"
                  ) : (
                    <span>
                      {startDate} - {endDate}
                    </span>
                  )}
                </div>
                <div
                  style={{ gap: ".4rem" }}
                  className="flex item-center justify-center fs-12 text-dark text-bold"
                >
                  {limit ? <span>{limit} Guests</span> : " Add guests"}
                  <div className="icon flex item-center back-red justify-center">
                    <HiSearch color="#fff" fontSize={"18px"} />
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="right flex item-center">
            <div
              onClick={handleCreateListingSteps}
              className="fs-14 text text-grey"
            >
              Airbnb your home
            </div>
            <div className="icon1 flex item-center justify-center text-dark">
              <World />
            </div>
            <div
              onClick={() => setDrop(!drop)}
              className="center2 gap-1 flex item-center"
            >
              <Bar />
              {userInfo?.image ? (
                <div className="text-white fs-14">
                  <img
                    style={{
                      width: "2rem",
                      height: "2rem",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                    src={userInfo?.image}
                    alt=""
                  />
                </div>
              ) : userInfo?.username ? (
                <div
                  style={{
                    width: "2rem",
                    height: "2rem",
                    borderRadius: "50%",
                    background: "var(--dark-1)",
                    color: "#fff",
                  }}
                  className="text-white fs-14 flex item-center justify-center uppercase"
                >
                  {userInfo?.username.charAt(0)}
                </div>
              ) : (
                <div className="" style={{ width: "2rem", height: "2rem" }}>
                  <Profile />
                </div>
              )}
              {drop && (
                <div
                  onClick={() => setDrop(false)}
                  className="backdrop_dropdown absolute"
                  style={{
                    height: "100vh",
                    width: "100vw",
                    position: "absolute",
                    zIndex: "-1",
                    left: 0,
                    right: 0,
                    top: 0,
                  }}
                ></div>
              )}

              <AnimatePresence
                initial="false"
                exitBeforeEnter={true}
                onExitComplete={() => null}
              >
                {drop && <Dropdown />}
              </AnimatePresence>
              {/* <Dropdown /> */}
            </div>
          </div>
        </div>
      </div>
    );
  };
  const HeaderBottom = () => {
    return (
      <div className="w-100 HeaderBottom flex w-100 ">
        <div className="w-90 auto  bottomWrapper item-center justify-space">
          <div className="w-100 hidden">
            <SliderIndex options={options2}>
              {categorydata.map((x, index) => {
                return loader ? (
                  <div
                    style={{ margin: "0 10px" }}
                    className=" flex-1 flex item-center justify-center column"
                  >
                    <Skeleton width={25} height={25} circle />
                    <Skeleton width={80} height={15} />
                  </div>
                ) : (
                  <div
                    onClick={() => handleListingType(index, x.text)}
                    className={
                      tab === index
                        ? "flex column text-bold imagewrapper item-center fs-10 text-dark active"
                        : "flex column text-bold imagewrapper item-center fs-10 text-dark"
                    }
                    style={{
                      width: "5rem",
                      height: "5rem",
                      gap: ".5rem",
                      fontSize: "10px",
                      fontWeight: 500,
                    }}
                    key={index}
                  >
                    <img
                      src={x.image}
                      alt=""
                      className="image"
                      style={{
                        width: "1.7rem",
                        height: "1.7rem",
                      }}
                    />
                    {x.text}
                  </div>
                );
              })}
            </SliderIndex>
          </div>
          <div className="fiterWrapper flex item-center justify-end">
            <div className="fs-12 fiterIcon gap-1 text-dark flex item-center justify-center">
              <Filter />
              Fiters
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <HeaderWrapper>
      <HeaderTop />
      {!type && <HeaderBottom />}
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.div`
  width: 100%;
  z-index: 700;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
  .bottomWrapper {
    display: grid;
    grid-template-columns: 1fr 6vw;
    grid-gap: 1rem;
    @media (max-width: 1080px) {
      grid-template-columns: 1fr;
    }
  }
  .fiterIcon {
    padding: 0.9rem 1rem;
    border: 1px solid rgba(0, 0, 0, 0.1) !important;
    border-radius: 15px;
  }
  .fiterWrapper {
    /* width: 300px; */
    /* background-color: red; */
    @media (max-width: 1080px) {
      display: none;
    }
  }
  .icons {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    transition: all 0.4s;
    border: 1px solid rgba(0, 0, 0, 0.2);
  }

  .airHome {
    @media (max-width: 980px) {
      font-size: 14px !important;
    }
  }

  .center {
    padding: 0.6rem 1.3rem !important;
    margin: 0 auto !important;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1) !important;
    border: 0.5px solid rgba(0, 0, 0, 0.1) !important;
  }
  .headertop1 {
    display: none;

    .center {
      padding: 0.6rem 1.3rem !important;
      width: 90% !important;
      margin: 0 auto !important;
      box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1) !important;
      border: 0.5px solid rgba(0, 0, 0, 0.08) !important;
    }
    @media (max-width: 780px) {
      display: flex;
    }
  }
  .headertop2 {
    @media (max-width: 780px) {
      display: none;
    }
  }
  .logo2 {
    display: none;
    @media (max-width: 980px) {
      display: flex;
    }
  }
  .logo1 {
    @media (max-width: 980px) {
      display: none;
    }
  }
  .loaderIcon {
    gap: 0.7rem;
    padding: 0.6rem 0;
    .circle {
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 50%;
      animation: card-loading 1s infinite alternate;
    }
    .bar {
      width: 80%;
      margin: 0 auto;
      height: 0.8rem;
      border-radius: 3px;
      animation: card-loading 1.4s infinite alternate;
    }
    @keyframes card-loading {
      0% {
        background-color: #ebebeb;
      }
      100% {
        background-color: #d4dee2a1;
      }
    }
  }
  .dropdown {
    position: absolute;
    right: 2%;
    background-color: #fff;
    min-width: 230px;
    z-index: 200000;
    border-radius: 8px;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
    @media (min-width: 1807px) {
      right: 17%;
    }
    li {
      padding: 0.7rem 2rem;
      cursor: pointer;
      border-radius: inherit;
      &:hover {
        background-color: #f7f7f7;
      }
      /* border-bottom: 1px solid rgba(0, 0, 0, 0.07); */
    }
  }
  .imagewrapper {
    position: relative;
    cursor: pointer;
    justify-content: center;
    img {
      opacity: 0.5;
    }
    &.active {
      &::after {
        width: 50%;
        transition: all 0.3s;
        position: absolute;
        bottom: -0%;
        content: "";
        left: 50%;
        height: 2px;
        border-radius: 20px;
        background-color: var(--grey-1);
        transform: translateX(-50%);
      }
    }
    &:hover {
      ::after {
        width: 70%;
      }
      img {
        opacity: 1;
      }
    }
    &::after {
      width: 0%;
      transition: all 0.3s;
      position: absolute;
      bottom: -0%;
      content: "";
      left: 50%;
      height: 2px;
      border-radius: 20px;
      background-color: rgba(0, 0, 0, 0.2);
      transform: translateX(-50%);
    }
  }
  .left,
  .right {
    @media (max-width: 780px) {
      display: none;
    }
  }
  .center {
    @media (max-width: 780px) {
      width: 100%;
    }
  }
  .image {
    filter: brightness(0.1);
  }
  .right {
    justify-content: flex-end;
  }
  .HeaderBottom {
    padding: 0.8rem 0;
    padding-top: 1rem;
  }
  .text {
    padding: 0.6rem 1rem;
    border-radius: 40px;
    &:hover {
      background-color: var(--grey-2);
    }
  }
  .left1 {
    border-right: 1px solid rgba(0, 0, 0, 0.2);
    border-left: 1px solid rgba(0, 0, 0, 0.2);
    padding: 0 0.8rem;
  }
  .center1 {
    padding: 0.3rem 1rem;
    border-radius: 40px;
    gap: 0.4rem;
    border: 1px solid rgba(0, 0, 0, 0.3);
  }
  .center2 {
    border-radius: 40px;
    /* gap: 0.2rem; */
    border: 1px solid rgba(0, 0, 0, 0.3);
    padding: 0.3rem 0.8rem;
  }
  .center {
    padding: 0.6rem 1.4rem;
    border-radius: 40px;
    position: relative;
  }
  .headerTop {
    padding: 0.7rem 0;
    &.active {
      padding: 1rem 0;
      border: none;
    }
    border-bottom: 1px solid rgba(0, 0, 0, 0.07);
  }
  .owl-nav {
    position: absolute;
    top: 10%;
    width: 100%;
    z-index: 10;
    background-color: #fff;
    &.disabled {
      display: none;
    }
    button.owl-next {
      background-color: #fff;
      border-radius: 50%;
      border: 1px solid rgba(0, 0, 0, 0.3);

      /* box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25); */
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30px;
      height: 30px;
      position: absolute;
      border-radius: 50%;
      transition: all 0.4s;
      font-size: 18px;
      color: #777;
      &.disabled {
        display: none;
      }
      &:hover {
        background-color: #fff;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
        color: #777;
      }
    }
    button.owl-prev {
      background-color: #fff;
      border-radius: 50%;
      border: 1px solid rgba(0, 0, 0, 0.3);
      /* box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25); */
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30px;
      height: 30px;
      position: absolute;
      border-radius: 50%;
      transition: all 0.4s;
      color: #777;
      font-size: 18px;
      &.disabled {
        display: none;
      }
      &:hover {
        background-color: #fff;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
        color: #777;
      }
    }
    button.owl-prev {
      left: 0%;
    }
    button.owl-next {
      right: 1%;
    }
  }
`;
