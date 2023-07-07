import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { HiSearch } from "react-icons/hi";
import Logo from "./svg/Logo";
import { Link } from "react-router-dom";
import Bar from "./svg/Bar";
import Profile from "./svg/Profile";
import World from "./svg/World";
import { AnimatePresence, motion } from "framer-motion";
import SliderIndex from "./Slider";
import { categorydata } from "../../data/category";
import { useDispatch, useSelector } from "react-redux";
import { onAuthModal } from "../../Features/user/userSlice";

const options2 = {
  items: 12,
  nav: true,
  dots: false,
  loop: true,
  margin: 0,
  width: "100%",
  slideBy: 10,
  responsive: {
    0: {
      items: 4,
    },
    460: {
      items: 5,
    },
    760: {
      items: 6,
    },
    1024: {
      items: 12,
    },
  },
};
const data = [
  { id: 1, title: "Fiverr Business", path: "/business" },
  { id: 2, title: "Explore", path: "/explore" },
  { id: 3, title: "English", path: "/product" },
  { id: 5, title: "Become a Seller", path: "/seller_onboarding" },
];

export default function Header({ type }) {
  const { userInfo } = useSelector((store) => store.user);
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
  const dispatch = useDispatch();
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
      >
        {userInfo ? (
          <div className="">
            <li
              className="fs-14 text-bold text-dark"
            >
              <Link className="w-100" to={"/reservations"}>
                Reservations
              </Link>
            </li>
          </div>
        ) : (
          <div className="">
            <li
              onClick={() => dispatch(onAuthModal())}
              className="fs-14 text-bold"
            >
              Sign in
            </li>
            <li
              onClick={() => dispatch(onAuthModal())}
              className="fs-14 text-bold text-dark"
            >
              Sign up
            </li>
          </div>
        )}

        <li className="fs-14 text-bold text-dark">
          {" "}
          <Link className="w-100" to={"/wishlists"}>
            Wishlists
          </Link>
        </li>
        <li className="fs-14 text-bold text-dark">
          {" "}
          <Link className="w-100" to={"/favorites"}>
            Favorites
          </Link>
        </li>
        <li className="fs-14 text-bold text-dark">
          {" "}
          <Link className="w-100" to={"/trips"}>
            Trips
          </Link>
        </li>
        <li className="fs-14 text-bold text-dark">Logout</li>
      </motion.ul>
    );
  };
  // headertop
  const HeaderTop = () => {
    return (
      <div className="w-100 headerTop flex w-100 ">
        <div
          className={
            type
              ? "w-85 auto flex item-center justify-space gap-2 "
              : "w-90 auto flex item-center justify-space gap-2"
          }
        >
          <Link to={"/"} className="flex-1 left">
            <Logo />
          </Link>
          {/* search */}
          {!type && (
            <div className="flex flex-1 item-center justify-end">
              <div className="center shadow flex item-center gap-1">
                <div className="fs-14 text-grey text-bold">Anywhere</div>
                <div className="left1 fs-14 text-grey text-bold">Anyweek</div>
                <div
                  style={{ gap: ".4rem" }}
                  className="flex item-center justify-center fs-14 text-grey text-light"
                >
                  Add guests
                  <div className="icon flex item-center back-red justify-center">
                    <HiSearch color="#fff" fontSize={"18px"} />
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="flex-1 right flex item-center gap-1">
            <Link
              to={"/become-a-host/overview"}
              className="fs-16 text-light text text-grey"
            >
              Airbnb your home
            </Link>
            <div className="icon1 flex item-center justify-center text-dark">
              <World />
            </div>
            <div
              onClick={() => setDrop(!drop)}
              className="center1 flex shadow item-center gap-1"
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
        <div className="w-90 auto flex item-center justify-space gap-2">
          <SliderIndex options={options2}>
            {categorydata.map((x, index) => {
              return (
                <div
                  className="flex column imagewrapper item-center fs-10 text-grey"
                  style={{ width: "5rem", height: "5rem", gap: ".5rem" }}
                  key={index}
                >
                  <img
                    src={x.image}
                    alt=""
                    className="image"
                    style={{
                      width: "2rem",
                      height: "2rem",
                      filter: "brightness(50%)",
                    }}
                  />
                  {x.text}
                </div>
              );
            })}
          </SliderIndex>
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
  .dropdown {
    position: absolute;
    right: 2%;
    background-color: #fff;
    min-width: 230px;
    z-index: 200000;
    border-radius: 8px;
    @media (min-width: 1807px) {
      right: 17%;
    }
    li {
      padding: 1rem 2rem;
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
    &:hover {
      ::after {
        width: 100%;
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
      background-color: var(--grey-1);
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
    padding: 0.3rem 0;
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
    gap: 0.6rem;
    border: 1px solid rgba(0, 0, 0, 0.3);
  }
  .center {
    padding: 0.6rem 1.4rem;
    border-radius: 40px;
    position: relative;
  }
  .headerTop {
    padding: 1.3rem 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.07);
  }
  .owl-nav {
    position: absolute;
    top: -10%;
    width: 100%;

    /* transform: translateY(40%); */
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
      width: 35px;
      height: 35px;
      position: absolute;
      border-radius: 50%;
      transition: all 0.4s;
      font-size: 24px;
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
      width: 35px;
      height: 35px;
      position: absolute;
      border-radius: 50%;
      transition: all 0.4s;
      color: #777;
      font-size: 24px;
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
      left: -2%;
    }
    button.owl-next {
      right: 1%;
    }
  }
`;
