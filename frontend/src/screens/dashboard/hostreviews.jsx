import styled from "styled-components";
import React from "react";
import HostReviewsIndex from "../../components/dashboard/reviews";

export default function HostReviews() {
  return (
    <>
      <HostReviewsPlaceContainer className="flex item-center justify-center">
        {/* <HostReviewsPlace /> */}
        <HostReviewsIndex/>
      </HostReviewsPlaceContainer>
    </>
  );
}

const HostReviewsPlaceContainer = styled.div`
  width: 100%;
  /* overflow: hidden; */
  /* min-height: 70vh; */
  padding-top: 6rem;
`;
