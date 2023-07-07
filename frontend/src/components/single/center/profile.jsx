import React, { useState } from "react";
import styled from "styled-components";
import Star from "../../common/svg/star";
import Ballons from "../../common/svg/Ballons";
import Case from "../../common/svg/case";
import Food from "../../common/svg/food";
import Stars from "../../common/svg/stars";
import Cap from "../../common/svg/cap";
import Date from "../../common/svg/Date";
import Music from "../../common/svg/music";
import { useSelector } from "react-redux";

export default function Profile({ type, click }) {
  const { GigsDetails } = useSelector((store) => store.gigs);

  return (
    <DeleteContainer>
      <div className={"deleteCard"}>
        {/* center */}
        <div className="cardwrapper flex column gap-2">
          <div className="authCenter flex item-start gap-3 justify-center w-90 auto shadow">
            <div className="authC_right flex column flex-1">
              <img
                src={GigsDetails?.authorId?.image}
                alt=""
                className="avatar"
              />
              <h3 className="fs-30 text-extra-bold text-dark">
                {GigsDetails?.authorId?.username}
                <span className="block fs-16 text-light text-start family2">
                  Superhost
                </span>
              </h3>
            </div>{" "}
            <div className="authC_right flex column flex-1">
              <div className="list1 fs-24 text-bold text-dark">
                171{" "}
                <span className="block fs-12 text-light text-grey">
                  Reviews
                </span>
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
            style={{ paddingBottom: "1rem", gap: "1.3rem" }}
            className="flex column fs-18 text-light gap-2 text-dark w-90 auto"
          >
            <li className="flex item-center gap-1">
              <Ballons /> Born in the 60s
            </li>
            <li className="flex item-center" style={{ gap: "1rem" }}>
              <Case />
              My work: coach
            </li>
            <li className="flex item-center" style={{ gap: "1rem" }}>
              <Food /> For guests, I always: Help them enjoy Valencia
            </li>
            <li className="flex item-center" style={{ gap: "1rem" }}>
              <Stars /> What makes my home unique: Good energy and feeling at
              home
            </li>
            <li className="flex item-center" style={{ gap: "1rem" }}>
              <Cap /> Where I went to school: Universidad de Psicología en
              Valencia
            </li>
            <li className="flex item-center" style={{ gap: "1rem" }}>
              <Music /> Borm in the 60s
            </li>
          </ul>
        </div>
      </div>
    </DeleteContainer>
    // <h2>hello</h2>
  );
}

const DeleteContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 780px) {
    flex-direction: column;
    width: 100%;
  }
  .avatar {
    width: 7rem;
    height: 7rem;
  }
  .cardwrapper {
    width: 66%;
    margin: 0 auto;
    @media (max-width: 780px) {
      flex-direction: column;
      width: 100%;
      padding: 2rem;
    }
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
    padding: 2rem 2rem;
    padding-left: 6rem;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
    border-radius: 20px;
    margin: 1.4rem 0;
    background-color: #fff;
    @media (max-width: 780px) {
      flex-direction: column;
      padding: 2rem;
    }
  }
  .backdrop {
    background: rgba(0, 0, 0, 0.3);

    position: absolute;
    height: 100%;
    width: 100%;
  }
  .deleteCard {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: #f0efe9;
    border-radius: 20px;
    position: relative;
    padding: 0 1rem;
    padding: 5rem 0;
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
