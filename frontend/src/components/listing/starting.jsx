import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import FooterHosting from "./footer";
export default function Starting() {
  return (
    <>
      <StartingContainer>
        <div className="authCenter flex item-center gap-3 justify-center w-85 auto">
          <div className="authC_right flex column flex-1">
            <h1 className=" text-extra-bold text-dark">
              It’s easy to get started on Airbnb
            </h1>
          </div>{" "}
          <div className="authC_right flex column flex-1">
            <div className="flex item-center w-100 gap-1">
              <div className="list1 flex item-start gap-1 fs-24 text-bold text-dark">
                1{" "}
                <div className="flex-1">
                  {" "}
                  Tell us about your place{" "}
                  <span className="block fs-20 text-light text-grey">
                    Share some basic info, like where it is and how many guests
                    can stay.
                  </span>
                </div>
              </div>{" "}
              <img
                src="https://a0.muscache.com/4ea/air/v2/pictures/da2e1a40-a92b-449e-8575-d8208cc5d409.jpg"
                alt=""
                className="image"
              />
            </div>
            <div className="flex item-center gap-1">
              <div className="list1 flex item-start gap-1 fs-24 text-bold text-dark">
                2{" "}
                <div className="flex-1">
                  {" "}
                  Make it stand out
                  <span className="block fs-20 text-light text-grey">
                    Add 5 or more photos plus a title and description—we’ll help
                    you out.
                  </span>
                </div>
              </div>{" "}
              <img
                src="https://a0.muscache.com/4ea/air/v2/pictures/bfc0bc89-58cb-4525-a26e-7b23b750ee00.jpg"
                alt=""
                className="image"
              />
            </div>
            <div className="flex item-center gap-1">
              <div className="list1 flex item-start gap-1 fs-24 text-bold text-dark">
                3{" "}
                <div className="flex-1">
                  {" "}
                  Finish up and publish
                  <span className="block fs-20 text-light text-grey">
                    Choose if you'd like to start with an experienced guest, set
                    a starting price, and publish your listing.
                  </span>
                </div>
              </div>
              <img
                src="https://a0.muscache.com/4ea/air/v2/pictures/c0634c73-9109-4710-8968-3e927df1191c.jpg"
                alt=""
                className="image"
              />
            </div>
          </div>
        </div>
      </StartingContainer>
      <FooterHosting next={'132737/about-your-place'} prev={''} />
    </>
  );
}

const StartingContainer = styled.div`
  width: 100%;
  overflow: hidden;
  padding-bottom: 6rem;
  .list1 {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding: 2rem 0;
  }
  .authCenter {
    @media (max-width: 780px) {
      flex-direction: column;
      gap: 2rem;
    }
  }
  .image {
    width: 7rem;
  }
  h1 {
    font-size: 60px;
    line-height: 1.2;
    @media (max-width: 780px) {
      font-size: 40px;
    }
  }
`;
