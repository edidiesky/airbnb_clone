import styled from "styled-components";
import React from "react";
import Starting from "../components/listing/starting";
export default function Overview() {
  return (
    <>
      <OverviewContainer className="flex item-center justify-center">
        <Starting />
      </OverviewContainer>
    </>
  );
}

const OverviewContainer = styled.div`
  width: 100%;
  overflow: hidden;
  min-height: 100vh;
`;
