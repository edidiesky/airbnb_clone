import React from "react";
import styled from "styled-components";
import Imagewrapper from "./Imagewrapper";
import Star from "../../common/svg/star";
import Person from "../../common/svg/person";
import { useSelector } from "react-redux";

const TopIndex = () => {
  const { GigsDetails } = useSelector((store) => store.gigs);

  return (
    <div className="w-100 flex column gap-2">
      <h2 className="fs-25">
        Romantic Staycation-PrivateSunset Pool@megananda
        <div className="w-100 block">
          <h5
            className="fs-16 flex item-center text-dark text-bold"
            style={{ gap: "1rem" }}
          >
            <Star /> <span className="fs-16">4.92</span>{" "}
            <span
              className="fs-16 text-dark flex item-center"
              style={{ textDecoration: "underline",gap:".5rem" }}
            >
              <Person /> Superhost
            </span>{" "}
            <span
              className="fs-16 text-dark"
              style={{ textDecoration: "underline" }}
            >
              Ubud, Bali, Indonesia
            </span>
          </h5>
        </div>
      </h2>
      <Imagewrapper />
    </div>
  );
};
export default TopIndex;
