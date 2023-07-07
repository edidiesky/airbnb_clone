import React from "react";
import styled from "styled-components";
import FooterHosting from "./footer";
export default function StandOut() {
  return (
    <>
      <StandOutContainer className="w-90 auto">
        <div className="aboutCenter flex item-center gap-3 justify-center w-85 auto">
          <div className="aboutC_right flex gap-2 column flex-1">
            <h1 className=" text-extra-bold text-dark">
              <span className="block fs-24">Step 2</span>
              Make your place stand out
            </h1>
            <span className="block fs-20 text-light text-dark">
              In this step, you’ll add some of the amenities your place offers,
              plus 5 or more photos. Then, you’ll create a title and
              description.
            </span>
          </div>{" "}
          <div className="aboutC_right flex item-center justify-center flex-1">
            <img
              src="https://a0.muscache.com/4ea/air/v2/pictures/da2e1a40-a92b-449e-8575-d8208cc5d409.jpg"
              alt=""
              className="image"
            />
          </div>
        </div>
      </StandOutContainer>
      <FooterHosting prev={"373646/floor-plan"} next={"373646/amenities"} />
    </>
  );
}

const StandOutContainer = styled.div`
  overflow: hidden;
  padding-bottom: 6rem;
  .list1 {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding: 2rem 0;
  }
  .aboutCenter {
    @media (max-width: 780px) {
      flex-direction: column;
      gap: 2rem;
    }
  }
  .image {
    width: 25rem;
    object-fit: cover;
  }
  h1 {
    font-size: 60px;
    line-height: 1.1;
    @media (max-width: 780px) {
      font-size: 40px;
    }
  }
`;
