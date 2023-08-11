import styled from "styled-components";
import React from "react";
import HostLsitingsIndex from "../../components/dashboard/listings";

export default function HostListings() {
  return (
    <>
      <HostListingsPlaceContainer className="flex item-center justify-center">
        <HostLsitingsIndex />
      </HostListingsPlaceContainer>
    </>
  );
}

const HostListingsPlaceContainer = styled.div`
  width: 100%;
  /* overflow: hidden; */
  /* min-height: 70vh; */
  /* padding-top: 1rem; */
`;
