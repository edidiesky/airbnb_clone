import styled from "styled-components";
import React from "react";
import HostEarningIndex from "../../components/dashboard/earnings";
import HostGuestsIndex from "../../components/dashboard/guests";

export default function HostGuests() {
  return (
    <>
      <HostGuestsPlaceContainer className="flex item-center justify-center">
        <div className="w-90 auto flex column gap-1">
          <HostGuestsIndex/>
        </div>
      </HostGuestsPlaceContainer>
    </>
  );
}

const HostGuestsPlaceContainer = styled.div`
  width: 100%;
  /* overflow: hidden; */
  /* min-height: 70vh; */
`;
