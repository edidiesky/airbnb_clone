import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { RxCross2 } from "react-icons/rx";
import { motion } from "framer-motion";
import {
  offWishDeleteModal,
  removewishItem,
} from "../../Features/wish/wishSlice";
export default function Delete() {
  // dispatch
  const dropin = {
    hidden: {
      y: "-100vh",
      opacity: 0,
      transition: {
        delay: 0.5,
      },
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.3,
        type: "spring",
        damping: 26,
        stiffness: 600,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  // get the cart alert
  //   const { GigsDetails } = useSelector((store) => store.gigs);
  const { userAlert, userDetails } = useSelector((store) => store.user);

  const dispatch = useDispatch();
  // get the cart alert
  const { wishDetails } = useSelector((store) => store.wish);

  // console.log(wishDetails);

  return (
    <DeleteContainer
      as={motion.div}
      initial={{ opacity: 0, visibility: "hidden", duration: 0.6 }}
      exit={{ opacity: 0, visibility: "hidden", duration: 0.6 }}
      animate={{ opacity: 1, visibility: "visible", duration: 0.6 }}
    >
      <div
        className="backdrop"
        onClick={() => dispatch(offWishDeleteModal())}
      ></div>
      <motion.div
        variants={dropin}
        initial="hidden"
        animate="visible"
        exit={"exit"}
        className={"deleteCard shadow"}
      >
        <div onClick={() => dispatch(offWishDeleteModal())} className="cross">
          <RxCross2 />
        </div>
        <div className="deleteCardTop ">
          <h3>Delete this wishlist?</h3>
          <p className="fs-14 text-light text-center">
            Are you sure you want to delete"?
            <br /> {wishDetails?.title} will be deleted permanently?
          </p>
        </div>
        {/*<div className='deleteCardCenter'>
            <AiFillWarning/>
            <h4><span className='deleteSpan'>Warning</span>
             By deleting this media "{wishDetails?.title}" will also be deleted
            </h4>
          </div>*/}
        <div className="deleteCardBottom">
          <button onClick={() => dispatch(offWishDeleteModal())}>Cancel</button>
          <button
            className="deleteBtn"
            onClick={() => dispatch(removewishItem(wishDetails))}
          >
            Delete
          </button>
        </div>
      </motion.div>
    </DeleteContainer>
  );
}

const DeleteContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  z-index: 900;
  align-items: center;
  justify-content: center;
  top: 0;

  z-index: 300000;
  .backdrop {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
  }

  .deleteCard {
    min-width: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: #fff;
    padding: 2rem 3rem;
    gap: 1rem;
    border-radius: 6px;
    box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.3);
    position: relative;
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
        background: var(--grey-2);
      }
      svg {
        font-size: 20px;
      }
    }
    .deleteCardBottom {
      display: flex;
      align-items: center;
      justify-content: center;
      /* border-top: 1px solid rgba(0, 0, 0, 0.3); */
      width: 100%;
      padding-top: 1rem;
      gap: 1rem;
      button {
        padding: 0.8rem 2rem;
        background-color: var(--dark-1);
        color: #fff;
        border-radius: 10px;

        &:hover {
          background-color: #e3dddd;
          color: var(--dark-1);
        }
        &.grey {
          background-color: transparent;
          color: var(--dark-1);
          text-decoration: underline;
        }
        border: none;
        font-size: 1rem;
        font-weight: 600;
        background: var(--grey-2);
        color: #222;
        outline: none;
        border-radius: 4px;
        cursor: pointer;
        &:hover {
          background: var(--grey-3);
          color: var(--dark-1);
        }
        &.deleteBtn {
          background: var(--dark-1);
          color: #fff;
          &:hover {
            opacity: 0.8;
            color: #fff;
          }
        }
      }
    }
    .deleteCardCenter {
      padding: 2rem;
      width: 100%;
      background: var(--grey-3);
      border-left: 5px solid var(--red);
      display: flex;
      align-items: center;
      gap: 2rem;
      padding-bottom: 4rem;

      svg {
        font-size: 2rem;
        color: var(--red);
      }
      h4 {
        font-size: 1.6rem;
        font-weight: 400;
        color: var(--red);
        .deleteSpan {
          font-weight: 600;
          display: block;
          padding-bottom: 1rem;
        }
      }
    }

    .deleteCardTop {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 0.4rem;
      padding-bottom: 4rem;
      h3 {
        font-size: 1.2rem;
        font-weight: 600;
        color: var(--text-color);
      }
    }
  }
`;
