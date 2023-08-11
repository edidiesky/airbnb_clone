import React from "react";
import moment from "moment";
import Location from "../../common/svg/Location";
import Date from "../../common/svg/Date";
import Kitchen from "../../common/svg/kitchen";
import Room from "../../common/svg/room";
import Pet from "../../common/svg/pet";
import Tv from "../../common/svg/tv";
import Fridge from "../../common/svg/fridge";
import Sound from "../../common/svg/sound";
import Carbon from "../../common/svg/carbon";
import Profile from "./profile";
import DateInput from "../../forms/Date";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Key from "../../common/svg/key";
const offerdata = [
  {
    image: <Kitchen />,
    text: "Kitchen",
  },
  {
    image: <Room />,
    text: "Dedicated workspace",
  },
  {
    image: <Pet />,
    text: "Pets allowed",
  },
  {
    image: <Tv />,
    text: "TV",
  },
  {
    image: <Fridge />,
    text: "Refrigerator",
  },
  {
    image: <Sound />,
    text: "Sound system",
  },
  {
    image: <Date />,
    text: "Long term stays allowed",
  },
  {
    image: <Carbon />,
    text: "Carbon Monoxide",
  },
];

const LeftCenter = ({ handleSelect, dateRange }) => {
  const { GigsDetails } = useSelector((store) => store.gigs);
  const startDate = moment(dateRange.selection.startDate).format('MMMM Do YYYY')
  const endDate = moment(dateRange.selection.endDate).format('MMMM Do YYYY')
 
 
  const differnceinDays = Math.round(
    (moment(dateRange.selection.endDate, "DD/MM/YYYY") -
      moment(dateRange.selection.startDate, "DD/MM/YYYY")) /
      (1000 * 3600 * 20)
  );
  return (
    <div className="flex column gap-2">
      <div
        style={{ flexWrap: "wrap" }}
        className="w-100 flex gap-1 center_left_top bottom item-center justify-space"
      >
        <h3 className="flex-1 text-dark text-bold" style={{ fontSize: "27px" }}>
          {GigsDetails?.listing_title}
          <span className="block fs-14 text-dark text-bold">
            <span>4 guests</span> <span>. 2 bedrooms</span>{" "}
            <span>. 4 beds</span> <span>. 4 baths</span>
          </span>
        </h3>
        <div className="justify-end flex-1 flex">
          <Link
            to={`/users/show/${GigsDetails?.listing_host_Id?._id}`}
            className="imageWrapper avatar relative"
          >
            <div className="imageGradient absolute w-100 h-100"></div>
            <img
              src={GigsDetails?.listing_host_Id?.image}
              alt=""
              className="w-100 h-100 absolute"
            />
          </Link>
        </div>
      </div>
      <div
        
        className=" listing_prop item-center bottom w-100"
      >
        <div
          className="flex item-center gap-1"
          style={{
            padding: "1.5rem 2rem",
            border: "1px solid rgba(0,0,0,.1)",
            width: "200px",
            borderRadius: "10px",
          }}
        >
          <Room />
          <h4 className="text-dark text-bold fs-14  ">
            Bedroom
            <span className="block fs-14 text-grey text-light">1 king bed</span>
          </h4>
        </div>{" "}
        <div
          className="flex item-center gap-1"
          style={{
            padding: "1.5rem 2rem",
            border: "1px solid rgba(0,0,0,.1)",
            width: "200px",
            borderRadius: "10px",
          }}
        >
          <Room />
          <h4 className="text-dark text-bold fs-14  ">
            Bedroom
            <span className="block fs-14 text-grey text-light">1 king bed</span>
          </h4>
        </div>{" "}
        <div
          className="flex item-center gap-1"
          style={{
            padding: "1.5rem 2rem",
            border: "1px solid rgba(0,0,0,.1)",
            width: "200px",
            borderRadius: "10px",
          }}
        >
          <Room />
          <h4 className="text-dark text-bold fs-14  ">
            Bedroom
            <span className="block fs-14 text-grey text-light">1 king bed</span>
          </h4>
        </div>
      </div>
      {/*  */}
      <ul className="flex bottom column gap-1">
        <li className="flex fs-18 text-dark item-start gap-1">
          <Key />
          <span className="text-dark text-bold">
            Lanzarote Van Campers is a Superhost
            <div className="block text-grey fs-14 w-85 text-light">
              Superhosts are experienced, highly rated hosts who are committed
              to providing great stays for guests.
            </div>
          </span>
        </li>
        <li className="flex fs-18 text-dark item-start gap-1">
          <Location />
          <span className="text-dark text-bold">
            Great location
            <div className="block text-grey fs-14 text-light">
              100% of recent guests gave the location a 5-star rating.
            </div>
          </span>
        </li>
        <li className="flex fs-16 text-dark item-start gap-1">
          <Date />
          <span className="text-dark text-bold">Great location</span>
        </li>
      </ul>
      {/* <Profile /> */}
      {/* description */}
      <h4 className="fs-16 bottom text-dark text-bold text-light">
        Fully equipped large-volume camper van converted in 2021.
        <br />
        {GigsDetails?.listing_description}
      </h4>

      {/* special offers */}

      {/* special offers */}

      <div className="flex column gap-2 bottom w-100">
        <h3 className="fs-20 text-dark text-bold">What this place offers</h3>
        <ul
          className="grid w-100"
          style={{ gridTemplateColumns: "1fr 1fr", gridGap: "1rem" }}
        >
          {offerdata.map((x, index) => {
            return (
              <li
                key={index}
                className="fs-14 text-dark text-bold text-light flex item-center gap-1"
              >
                {/* <img src={x.image} style={{width:"2.5rem",height:"2.5rem"}} alt="" /> */}
                {x.image}
                {x.text}
              </li>
            );
          })}
        </ul>
      </div>
      {/* date picker  */}
      <div className="flex column w-100 gap-1">
        <h3 className="fs-20 text-bold">
          {differnceinDays} night in {GigsDetails?.listing_location}
          <span className="block text-grey text-light fs-14">
            <span>{startDate}</span> - <span>{endDate}</span>
          </span>
        </h3>
        <DateInput handleSelect={handleSelect} dateRange={dateRange} />
      </div>
    </div>
  );
};

export default LeftCenter;
