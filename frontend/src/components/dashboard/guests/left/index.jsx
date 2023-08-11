import styled from "styled-components";
import React from "react";
import { BiCheck } from "react-icons/bi";

export default function HostGuestsLeftIndex() {
  return (
    <>
      <HotsGuestLeftStyles className="flex h-100 item-center justify-center">
        <div className="w-100 left_wrapper flex gap-1 column">
          <div className="top_left bottom flex column gap-1">
            <div className="flex item-center gap-1">
              <div className="image_wrapper">
                <img
                  src="/images/user_1.jpeg"
                  alt=""
                  className="avatar_profile"
                />
                <div className="image_gradient"></div>
              </div>
              <div className="flex item-start justify-space gap-1">
                {/* name pof teh booker */}
                <h3 className="fs-18 text-extra-bold">
                  Edidiong Essien{" "}
                  <span className="block fs-14 text-grey">#083etgffdbdn</span>
                </h3>
              </div>
            </div>
            {/* date */}
            <div className="flex item-center justify-space gap-1">
              <div className="flex column">
                <h5 className="fs-12 text-extra-bold text-grey">Check In</h5>
                <h4 className="fs-14 text-extra-bold">
                  October 30th, 2024 | 8:00 am
                </h4>
              </div>
              <div className="flex column">
                <h5 className="fs-12 text-extra-bold text-grey">Check Out</h5>
                <h4 className="fs-14 text-extra-bold">
                  October 30th, 2024 | 8:00 am
                </h4>
              </div>
            </div>
          </div>
          <div className="top_left flex item-start column gap-1">
            {/* title of the rooms and price of the room */}
            <div className="flex item-center justify-space gap-1">
              <div className="flex column">
                <h5 className="fs-12 text-extra-bold text-grey">Room Info</h5>
                <h4 className="fs-18 text-extra-bold">
                  Deluxe Rooms - #147664gdfbfv3
                </h4>
              </div>
              <div className="flex column">
                <h5 className="fs-12 text-extra-bold text-grey">Price</h5>
                <h4 className="fs-14 text-extra-bold">
                  $200 <span className="fs-12">/ night</span>
                </h4>
              </div>
            </div>
            <h4 className=" fs-14 text-bold text-dark">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
              praesentium esse exercitationem optio! Eum, fugit magni tempora
              praesentium laborum eveniet!
            </h4>
            {/* capacity */}
            <div className="flex w-100 item-center justify-space">
              <div className="flex column">
                <h5 className="fs-12 text-extra-bold text-grey">
                  Room Capacity
                </h5>
                <h4 className="fs-14 text-extra-bold">2-4 Persons</h4>
              </div>
              <div className="flex column">
                <h5 className="fs-12 text-extra-bold text-grey">Type</h5>
                <h4 className="fs-14 text-extra-bold">Double Bed</h4>
              </div>
            </div>
            {/* facilities */}
            <div className="flex column" style={{ gap: ".5rem" }}>
              <h4 className="fs-12 text-extra-bold text-grey">Facilites</h4>
              <div
                style={{ flexWrap: "wrap" }}
                className="flex item-center gap-1 flex-wrap"
              >
                <h4
                  style={{
                    gap: ".2rem",
                    borderRadius: "20px",
                    background: "#fff",
                    padding: ".4rem",
                    border: "1px solid rgba(0,0,0,.1)",
                  }}
                  className="flex  justify-center fs-12 item-center text-extra-bold text-dark"
                >
                  <BiCheck color="green" fontSize={"20px"} /> Room Full Ac
                </h4>
              </div>
            </div>
          </div>
        </div>
      </HotsGuestLeftStyles>
    </>
  );
}

const HotsGuestLeftStyles = styled.div`
  width: 100%;
  font-family: "Montserrat", sans-serif;
  h3,
  h4 {
    font-family: "Montserrat", sans-serif;
  }
  .left_wrapper {
    padding: 2rem;
    background-color: #fff;
    border-radius: 10px;
    .top_left {
      .image_wrapper {
        width: 7rem;
        height: 7rem;
        /* border-radius: 50%; */
        cursor: pointer;
        position: relative;
        &:hover {
          .image_gradient {
            opacity: 1;
          }
        }
        .image_gradient {
          width: 100%;
          height: 100%;
          /* border-radius: 50%; */
          /* transform: translateY(-100%); */
          position: absolute;
          background: rgba(0, 0, 0, 0.5);
          opacity: 0;
          transition: all 0.5s;
        }
        .avatar_profile {
          width: 100%;
          height: 100%;
          /* border-radius: 50%; */
          /* transform: translateY(-100%); */
          position: absolute;
        }
      }
    }
  }
  .listing_status {
    padding: 0.2rem 0.8rem;
    color: #fff;
    border-radius: 40px;
    background: var(--red);
    font-weight: 400;
  }
`;
