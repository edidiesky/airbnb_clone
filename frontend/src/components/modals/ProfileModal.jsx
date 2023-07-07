import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
// import {
//   clearDeleteGigModalAlert,
//   DeleteGig,
//   adminDeleteCustomer,
//   clearUserAlertError,
// } from "../../../Features";
import { RxCross2 } from "react-icons/rx";
import {
  clearUserAlertError,
  offProfileModal,
} from "../../Features/user/userSlice";
import Input from "../forms/Input";
import Star from "../common/svg/star";
import Ballons from "../common/svg/Ballons";
import Case from "../common/svg/case";
import Fun from "../common/svg/fun";
import Food from "../common/svg/food";
import Stars from "../common/svg/stars";
import Cap from "../common/svg/cap";
import Date from "../common/svg/Date";
import Music from "../common/svg/music";
import { dropin } from "../../utils/framer";

export default function ProfileModal({ type, click }) {
  // framer motion set variants
 
  // dispatch
  const dispatch = useDispatch();
  // get the cart alert
  //   const { GigsDetails } = useSelector((store) => store.gigs);
  const { userAlert, userDetails } = useSelector((store) => store.user);
  // open modal if type  === users

  return (
    <DeleteContainer
      as={motion.div}
      initial={{ opacity: 0, visibility: "hidden", duration: 0.6 }}
      exit={{ opacity: 0, visibility: "hidden", duration: 0.6 }}
      animate={{ opacity: 1, visibility: "visible", duration: 0.6 }}
    >
      <div
        className="backdrop"
        onClick={() => dispatch(offProfileModal())}
      ></div>
      <motion.div
        variants={dropin}
        initial="hidden"
        animate="visible"
        exit={"exit"}
        className={"deleteCard shadow"}
      >
        {/* <div className="cross" onClick={() => dispatch(clearUserAlertError())}>
          <RxCross2 />
        </div> */}
        <div className="w-100">
          <div className="w-85 auto authTop">
            <RxCross2 onClick={() => dispatch(offProfileModal())} />
          </div>
        </div>
        {/* center */}
        <div className="authCenter flex item-start gap-3 justify-center w-90 auto shadow">
          <div className="authC_right flex column flex-1">
            <img
              src="https://a0.muscache.com/im/pictures/user/b9c551db-9203-4f2c-9572-216ebe07e25c.jpg?im_w=240"
              alt=""
              className="avatar"
            />
            <h3 className="fs-24 family1 text-extra-bold text-dark">
              Sagario_1037
              <span className="block fs-16 text-light text-center family2">
                Superhost
              </span>
            </h3>
          </div>{" "}
          <div className="authC_right flex column flex-1">
            <div className="list1 fs-24 text-bold text-dark">
              171{" "}
              <span className="block fs-12 text-light text-grey">Reviews</span>
            </div>
            <div className="list1 fs-30 text-bold text-dark">
              <div className="flex item-center">
                4.87 <Star />
              </div>{" "}
              <span className="block fs-12 text-light text-grey">Rating</span>
            </div>
            <div className="list1 fs-24 text-bold text-dark">
              1{" "}
              <span className="block fs-12 text-light text-grey">
                Year hosting
              </span>
            </div>
          </div>
        </div>
        {/* bottom */}
        <ul
          style={{ paddingBottom: "1rem", gap: ".6rem" }}
          className="flex column fs-16 text-light text-dark w-90 auto"
        >
          <li className="flex item-center">
            <Ballons /> Born in the 60s
          </li>
          <li className="flex item-center" style={{ gap: ".3rem" }}>
            <Case />
            My work: coach
          </li>
          <li className="flex item-center" style={{ gap: ".3rem" }}>
            <Food /> For guests, I always: Help them enjoy Valencia
          </li>
          <li className="flex item-center" style={{ gap: ".3rem" }}>
            <Stars /> What makes my home unique: Good energy and feeling at home
          </li>
          <li className="flex item-center" style={{ gap: ".3rem" }}>
            <Cap /> Where I went to school: Universidad de Psicología en
            Valencia
          </li>
          <li className="flex item-center" style={{ gap: ".3rem" }}>
            <Music /> Borm in the 60s
          </li>
        </ul>
      </motion.div>
    </DeleteContainer>
    // <h2>hello</h2>
  );
}

const DeleteContainer = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;

  display: flex;
  z-index: 4900;
  align-items: center;
  justify-content: center;
  top: 0;
  .avatar {
    width: 8rem;
    height: 8rem;
  }
  .list1 {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding-bottom: 0.6rem;
  }
  .btn {
    background: var(--red);
    color: #fff;
    padding: 0.8rem 2rem;
    border-radius: 10px;
  }
  .authCenter {
    padding: 1.5rem 2rem;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
    border-radius: 20px;
    margin: 1.4rem 0;
    background-color: #fff;
  }
  .backdrop {
    background: rgba(0, 0, 0, 0.3);

    position: absolute;
    height: 100%;
    width: 100%;
  }
  .authTop {
    padding-top: 2rem;
    font-size: 20px;
  }
  .deleteCard {
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: rgb(235, 231, 231);
    border-radius: 20px;
    box-shadow: 0 2rem 3rem rgba(0, 0, 0, 0.1);
    position: relative;
    padding: 0 1rem;
    @media (max-width: 980px) {
      width: 60%;
    }
    @media (max-width: 780px) {
      width: 80%;
    }
    .cross {
      position: absolute;
      right: 10px;
      top: 20px;
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      &:hover {
        background: var(--grey-4);
      }
      svg {
        font-size: 20px;
      }
    }
  }
`;
