import styled from "styled-components";
import React from "react";

export default function HostReviewsIndex() {
  return (
    <>
      <HostReviewsIndexPlaceContainer className="flex item-center justify-center">
        <div className="w-90 auto flex column">
          <h3 className="fs-30 text-extra-bold">Reviews</h3>
        </div>
      </HostReviewsIndexPlaceContainer>
    </>
  );
}

const HostReviewsIndexPlaceContainer = styled.div`
  width: 100%;
`;
