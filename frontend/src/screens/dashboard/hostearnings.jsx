import styled from "styled-components";
import React from "react";
import HostEarningIndex from "../../components/dashboard/earnings";

export default function HostEarnings() {
  return (
    <>
      <HostEarningsPlaceContainer className="flex item-center justify-center">
        <div className="w-90 auto flex column gap-1">
          <HostEarningIndex />
        </div>
      </HostEarningsPlaceContainer>
    </>
  );
}

const HostEarningsPlaceContainer = styled.div`
  width: 100%;
  /* overflow: hidden; */
  /* min-height: 70vh; */
`;
