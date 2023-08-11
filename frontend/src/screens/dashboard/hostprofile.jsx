import styled from "styled-components";
import React from "react";
import HostProfileIndex from "../../components/dashboard/profile";

export default function HostProfile() {
  return (
    <>
      <HostProfilePlaceContainer className="flex item-center justify-center">
        <HostProfileIndex />
      </HostProfilePlaceContainer>
    </>
  );
}

const HostProfilePlaceContainer = styled.div`
  width: 100%;
  /* overflow: hidden; */
  /* min-height: 70vh; */
  padding-top: 4rem;
`;
