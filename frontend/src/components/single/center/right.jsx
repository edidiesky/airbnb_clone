import React, { useEffect } from "react";
import styled from "styled-components";
import moment from "moment";
import Star from "../../common/svg/star";
import { BiChevronDown } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";

import {
  onCalendarModal,
  onSelectModal,
} from "../../../Features/listing/listingSlice";
import LoaderIndex from "../../loaders";
import { useNavigate } from "react-router-dom";
import { clearReservationsAlert } from "../../../Features/reservations/reservationsSlice";

const RightCenter = ({ limit, dateRange, handleCreateReservation }) => {
  const navigate = useNavigate();
  const { ReservationsIsLoading, ReservationsIsSuccess, ReservationsDetails } =
    useSelector((store) => store.reservations);
  const { GigsDetails } = useSelector((store) => store.gigs);

  // console.log(ReservationsDetails);
  // navigate if the reservation of the user has been succesfully created
  useEffect(() => {
    if (ReservationsIsSuccess) {
      navigate(`/${ReservationsDetails?._id}/payment`);
    }
  }, [ReservationsDetails, ReservationsIsSuccess, navigate]);

  const formatDate = (date) => {
    return moment(date).format("MMMM Do YYYY");
  };
  const dispatch = useDispatch();
  const differnceinDays = Math.round(
    (moment(dateRange.selection.endDate, "MMMM Do YYYY") -
      moment(dateRange.selection.startDate, "MMMM Do YYYY")) /
      (1000 * 3600 * 24)
  );

  // console.log(moment(dateRange.selection.endDate, "MMMM Do YYYY"));
  return (
    <RigthWrapper className="w-100 h-100">
      <div className="RightCard">
        <div className="flex w-100 wrapper column gap-1 item-start">
          <div className="top flex justify-space w-100">
            <h4 className="fs-24 text-dark text-bold">
              ${GigsDetails?.listing_price}{" "}
              <span className="text-dark text-bold fs-12">/ night</span>
            </h4>
            {/* reviews */}
            <h5
              className="fs-14 flex item-center text-dark text-bold"
              style={{ gap: ".5rem" }}
            >
              <Star /> <span className="fs-14">4.92</span>{" "}
              <span
                className="fs-12 text-grey text-light"
                style={{ textDecoration: "underline" }}
              >
                390 reviews
              </span>
            </h5>
          </div>
          <div className="flex column w-100">
            <div
              onClick={() => dispatch(onCalendarModal())}
              style={{
                border: "1px solid rgba(0,0,0,.3)",
                borderBottom: "none",
                borderTopRightRadius: "8px",
                borderTopLeftRadius: "8px",
              }}
              className="dateWrapper flex item-center gap-1 justify-space"
            >
              <div
                style={{ padding: ".7rem" }}
                className="fs-10 flex-1 text-extra-bold "
              >
                <span className="uppercase">check-in</span>
                
                <div className="fs-12 block capitalize text-dark text-light">
                  {formatDate(dateRange.selection.startDate)}
                </div>
              </div>{" "}
              <div
                style={{
                  padding: ".7rem",
                  borderLeft: "1px solid rgba(0,0,0,.3)",
                  height: "100%",
                }}
                className=" fs-10 text-start flex-1 wrap family1 text-extra-bold "
              >
               <span className="uppercase">check-out</span>
                <div className="fs-12 block capitalize text-dark text-light">
                  {formatDate(dateRange.selection.endDate)}
                </div>
              </div>
            </div>{" "}
            {/* rooms */}
            <div
              onClick={() => dispatch(onSelectModal())}
              style={{
                border: "1px solid rgba(0,0,0,.3)",
                borderBottomRightRadius: "8px",
                borderBottomLeftRadius: "8px",
              }}
              className="dateWrapper flex item-center gap-1 justify-space"
            >
              <div
                style={{ padding: ".7rem" }}
                className=" fs-10 flex-1 family1 text-extra-bold text-bold"
              >
                GUESTS
                <div className="fs-14 block text-dark text-light">
                  {limit} guests
                </div>
              </div>{" "}
              <div
                style={{
                  padding: ".7rem",
                  height: "100%",
                }}
                className=" fs-10 flex item-center justify-end"
              >
                <div className="icon flex item-center justify-end">
                  <BiChevronDown fontSize={"24px"} />
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-100 column gap-1">
            <div
              onClick={handleCreateReservation}
              className="reserveBtn w-100 fs-16 text-white flex justify-center item-center"
            >
              {ReservationsIsLoading ? (
                <LoaderIndex type={"dots"} color={"#fff"} />
              ) : (
                "Reserve"
              )}
            </div>
            <div className="fs-14 text-grey text-light text-center">
              You wont be charged yet
            </div>
          </div>
          <div className="flex bottom w-100 column gap-1">
            <h4 className="fs-16 text-light text-dark w-100 justify-space flex item-center">
              <span style={{ textDecoration: "underline" }}>
                ${GigsDetails?.listing_price} x {differnceinDays} nights
              </span>
              <span className="text-dark">
                ${(GigsDetails?.listing_price * differnceinDays).toFixed(2)}
              </span>
            </h4>{" "}
            <h4 className="fs-16 text-light text-dark w-100 justify-space flex item-center">
              <span style={{ textDecoration: "underline" }}>
                Airbnb service fee
              </span>
              <span className="text-dark">
                $
                {(GigsDetails?.listing_price * differnceinDays * 0.015).toFixed(
                  2
                )}
              </span>
            </h4>
          </div>
          <h4 className="fs-18 text-bold text-dark family1 w-100 justify-space flex item-center">
            <span>Total before taxes</span>
            <span className="text-dark">
              $
              {(
                GigsDetails?.listing_price * differnceinDays +
                GigsDetails?.listing_price * differnceinDays * 0.015
              ).toFixed(2)}
            </span>
          </h4>
        </div>
      </div>
    </RigthWrapper>
  );
};

const RigthWrapper = styled.div`
  .RightCard {
    width: 100%;
    padding: 2rem;
    border-radius: 20px;
    position: sticky;
    top: 10%;
    width: 370px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    @media (max-width:580px) {
      width: 80%;
    }
  }

  svg {
    cursor: pointer;
  }

  .reserveBtn {
    background-image: linear-gradient(
      to right,
      #e61e4d 0%,
      #e31c5f 50%,
      #d70466 100%
    );
    /* padding: 0.8rem 2rem; */
    min-height: 3rem;
    border-radius: 10px;
    color: #fff !important;
    color: #fff;
    /* padding: 0.8rem 2rem; */
    border-radius: 10px;
    cursor: pointer;
    &:hover {
      opacity: 0.6;
    }
  }
`;
const Wrapper = styled.div`
  height: 30rem;
  position: sticky;
  top: 10%;
`;
export default RightCenter;
