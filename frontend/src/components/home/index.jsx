import React, { useEffect } from "react";
import styled from "styled-components";
import GigsIndex from "./gigs";
import Message from "../loaders/Message";
import { useDispatch, useSelector } from "react-redux";
import { clearWishMessage } from "../../Features/wish/wishSlice";
export default function HomeIndex() {
  const { showAlert } = useSelector((store) => store.wish);

  const dispatch = useDispatch();

  const handleClearMessage = () => {
    dispatch(clearWishMessage());
  };

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   // clear provious fetch actions and then fetch new gigs
  //   dispatch(clearGigsAlert());
  //   dispatch(getAllGigs());
  // }, []);
  return (
    <HomeIndexContainer className="flex column ">
      <Message
        showAlert={showAlert}
        alertText={"Product has been succesfully added to your wishlists"}
        handleClearAlert={handleClearMessage}
      />
      <div className="w-90 auto flex item-center justify-center py-1">
        <div className="feewrapper flex item-center gap-2">
          <h4 className="fs-16 text-dark text-bold">Display total price</h4>
          <div className="center fs-16 text-grey text-light">
            Includes all fees, before taxes
          </div>
          <div className="right fs-16 text-grey text-light">
            <div className="icons"></div>
          </div>
        </div>
      </div>
      <GigsIndex />
    </HomeIndexContainer>
  );
}

const HomeIndexContainer = styled.div`
  width: 100%;
  overflow: hidden;
  height: 100%;
  .feewrapper {
    /* width: 80%; */
    padding: 1rem 2rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
    margin-bottom: 1rem;
    border-radius: 15px;
    .center {
      border-left: 1px solid rgba(0, 0, 0, 0.1);
      padding-left: 1rem;
    }
    .right {
      padding-left: 1.6rem;
      .icons {
        width: 3.4rem;
        height: 2rem;
        border-radius: 40px;
        background-color: #bfbdbddb;
        position: relative;
        &::after {
          width: 60%;
          height: 90%;
          content: "";
          position: absolute;
          left: 5%;
          top: 50%;
          transform: translateY(-50%);
          background-color: #fff;
          border-radius: inherit;
        }
      }
    }
  }
`;
