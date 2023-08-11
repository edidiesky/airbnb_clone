import React, { useState } from "react";
import styled from "styled-components";
import Logo2 from "../../common/svg/Logo12";
import { useSelector } from "react-redux";
import Profile from "../../common/svg/Profile";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { BiChevronDown } from "react-icons/bi";
export default function Hostheader() {
  const [drop, setDrop] = useState(false);
  const [drop2, setDrop2] = useState(false);
  const { userInfo } = useSelector((store) => store.user);
  const dropin = {
    hidden: {
      opacity: 0,
      top: "500%",
      visibility: "hidden",
      transition: {},
    },
    visible: {
      top: "120%",
      opacity: 1,
      visibility: "visible",
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      top: "500%",
      opacity: 0,
      visibility: "hidden",
      transition: {},
    },
  };
  const Dropdown = () => {
    return (
      <motion.ul
        variants={dropin}
        initial="hidden"
        animate="visible"
        exit={"exit"}
        className="dropdown shadow flex column"
        onClick={() => setDrop(!drop)}
      >
        <li className="fs-16 text-light text-dark">
          {" "}
          <Link className="w-100" to={"/wishlists"}>
            Listings
          </Link>
        </li>
        <li className="fs-16 text-light text-dark">
          {" "}
          <Link className="w-100" to={"/favorites"}>
            Reservations
          </Link>
        </li>
        <li className="fs-16 text-light text-dark">
          {" "}
          <Link className="w-100" to={"/trips"}>
            Create a New Listings
          </Link>
        </li>
        <li className="fs-16 text-light text-dark">
          <Link to={"/trips"} className="w-100">
            Logout
          </Link>
        </li>
      </motion.ul>
    );
  };

  return (
    <>
      <HostheaderContainer>
        <div
          onClick={() => setDrop(false)}
          className="backdrop_dropdown absolute"
          style={{
            height: "100vh",
            width: "100vw",
            top: 0,
            left: 0,
            position: "absolute",
            zIndex: -1,
          }}
        ></div>
        <div
          style={{ zIndex: "20" }}
          className="aboutCenter flex item-center gap-3 justify-space w-90 auto"
        >
          <Logo2 />
          <div className="center fs-16 w-100 text-grey text-light flex item-center justify-center gap-1">
            <NavLink activeClassName="active" to={`/dashboard/hosting/reviews`}>
              Reviews
            </NavLink>
            <NavLink activeClassName="active" to={`/dashboard/hosting/reviews`}>
              Messenger
            </NavLink>
            <NavLink activeClassName="active" to={`/dashboard/hosting`}>
              Insights
            </NavLink>
            <NavLink activeClassName="active" to={`/dashboard/hosting/inbox`}>
              Inbox
            </NavLink>
            <div className="relative menu">
              <div
                onClick={() => setDrop(!drop)}
                className="flex item-center"
                style={{ gap: ".5rem" }}
              >
                Menu
                <BiChevronDown fontSize={"20px"} />
              </div>
              <AnimatePresence
                initial="false"
                exitBeforeEnter={true}
                onExitComplete={() => null}
              >
                {drop && <Dropdown />}
              </AnimatePresence>
            </div>
          </div>
          <div className="flex relative top item-center gap-1 justify-end">
            {drop2 && <Dropdown />}
            {userInfo?.image ? (
              <div
                onClick={() => setDrop2(!drop2)}
                className="text-white fs-14"
              >
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
            ) : !userInfo?.username ? (
              <div
                onClick={() => setDrop2(!drop2)}
                style={{
                  width: "2rem",
                  height: "2rem",
                  borderRadius: "50%",
                  background: "var(--dark-1)",
                  color: "#fff",
                }}
                className="text-white fs-16 flex item-center justify-center uppercase"
              >
                {userInfo?.username.charAt(0)}
              </div>
            ) : (
              <div
                onClick={() => setDrop2(!drop2)}
                className=""
                style={{ width: "2rem", height: "2rem" }}
              >
                <Profile />
              </div>
            )}
          </div>
        </div>
      </HostheaderContainer>
    </>
  );
}

const HostheaderContainer = styled.div`
  width: 100%;
  padding: 1rem 0;
  top: 0;
  position: fixed;
  z-index: 300;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background-color: #fff;
  .dropdown {
    position: absolute;
    right: 2%;
    background-color: #fff;
    min-width: 220px;
    z-index: 200000;
    top: -100%;
    border-radius: 8px;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
    @media (min-width: 1807px) {
      right: 17%;
    }
    li {
      padding: 0.8rem 1rem;
      cursor: pointer;
      z-index: 30;
      border-radius: inherit;
      /* font-size: 1.2rem; */
      &:hover {
        background-color: #f7f7f7;
      }
      /* border-bottom: 1px solid rgba(0, 0, 0, 0.07); */
    }
  }
  .center {
    .menu {
      border-radius: 40px;
      padding: 0.6rem 1rem;
      position: relative;
      &:hover {
        background-color: #f7f7f7;
      }
    }
    a {
      padding: 0.6rem 1rem;
      border-radius: 40px;
      font-weight: 600;
      font-size: 14px;
      &.active {
        color: #50fc61;
      }
      &:hover {
        background-color: #f7f7f7;
      }
    }
  }
  .top {
    @media (max-width: 580px) {
      justify-content: flex-start;
    }
  }
  .aboutCenter {
    @media (max-width: 580px) {
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
      justify-content: flex-start;
    }
  }

  .headBtn {
    border: 1px solid rgba(0, 0, 0, 0.4);
    padding: 0.6rem 1.7rem;
    border-radius: 40px;
  }
`;
