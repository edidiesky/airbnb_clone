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
      <div className="flex w-100 column" style={{ gap: ".4rem" }}>
        <h2 className="fs-25">{GigsDetails?.listing_title}</h2>
        <div style={{ flexWrap: "wrap" }} className="w-100 flex item-center">
          <h5
            className="fs-16 flex item-center text-dark text-bold"
            style={{ gap: ".3rem", flexWrap: "wrap" }}
          >
            <Star /> <span className="fs-16">4.92</span>{" "}
            <span
              className="fs-16 text-dark flex item-center"
              style={{ textDecoration: "underline", gap: ".5rem" }}
            >
              <Person /> Superhost
            </span>{" "}
            <span
              className="fs-16 text-dark"
              style={{ textDecoration: "underline" }}
            >
              {GigsDetails?.listing_city},{" "} {GigsDetails?.listing_country}
            </span>
          </h5>
        </div>
      </div>
      <Imagewrapper />
    </div>
  );
};
export default TopIndex;
