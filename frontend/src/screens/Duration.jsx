import styled from "styled-components";
import React from "react";
import DurationofPlace from '../components/listing/durations'

export default function DurationsOfplace() {
  return (
    <>
      <DurationOfplaceContainer className="flex item-center justify-center">
        <DurationofPlace />
      </DurationOfplaceContainer>
    </>
  );
}

const DurationOfplaceContainer = styled.div`
  width: 100%;
  overflow: hidden;
  min-height: 100vh;
  /* padding-top: 4rem; */
`;
