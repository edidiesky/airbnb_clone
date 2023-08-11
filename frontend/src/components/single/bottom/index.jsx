import React from "react";
import styled from "styled-components";
import Star from "../../common/svg/star";
import Footer from "./Footer";
import Reviews from "./reviews";
import { useSelector } from "react-redux";

const BottomIndex = () => {
  const { GigsDetails } = useSelector((store) => store.gigs);

  return (
    // reviews
    <BottomWrapper className="w-100 flex column gap-2">
      <Reviews />
      <div
        className="w-100 flex column gap-1"
        style={{ paddingBottom: "4rem" }}
      >
        <div className="flex w-100 item-center gap-2">
          <div className="flex item-center gap-1">
            <img
              src={GigsDetails?.listing_host_Id?.image}
              alt=""
              style={{ width: "5rem", height: "5rem", borderRadius: "50%",objectFit:"cover" }}
            />
            <div className="flex column item-start gap-2">
              <h3 className="fs-24 text-dark text-bold">
                Hosted by {GigsDetails?.listing_host_Id?.username}
                <span className="block fs-14 text-grey text-light">
                  Joined in August 2015
                </span>
              </h3>
            </div>
          </div>
        </div>
        <div className="flex column item-start gap-1 w-100">
          <div className="left flex flex-1 column gap-2">
            <div className="flex item-center gap-1">
              <h5 className="fs-16 flex item-center gap-1 text-dark text-light">
                <Star /> 2,884 Reviews
              </h5>{" "}
            </div>
            <h4
              style={{ width: "60%" }}
              className="flex column fs-20 text-dark gap-1"
            >
              {GigsDetails?.listing_host_Id?.username} is a Superhost
              <span
                style={{ width: "100%" }}
                className="block w-50 fs-16 text-dark text-light"
              >
                Superhosts are experienced, highly rated hosts who are committed
                to providing great stays for guests.
              </span>
            </h4>
          </div>
          <div className="right flex flex-1 column gap-2">
            <div className="flex column" style={{ gap: "1rem" }}>
              <h5 className="fs-16 flex item-center gap-1 text-dark text-light">
                Language: English
              </h5>{" "}
              <h5 className="fs-16 flex item-center gap-1 text-dark text-light">
                Response Time: 100%
              </h5>{" "}
              <h5 className="fs-16 flex item-center gap-1 text-dark text-light">
                Response Time: 100%
              </h5>{" "}
            </div>
            <div className="flex item-start">
              <div className="contactBtn fs-16 text-bold">Contact Host</div>
            </div>
          </div>
        </div>
      </div>
    </BottomWrapper>
  );
};

const BottomWrapper = styled.div`
  .wrapper {
    @media (max-width: 780px) {
      flex-direction: column;
    }
  }
`;
export default BottomIndex;
