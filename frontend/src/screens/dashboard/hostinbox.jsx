import styled from "styled-components";
import React from "react";
import HostInboxIndex from "../../components/dashboard/inbox";

export default function HostInbox() {
  return (
    <>
      <HostInboxPlaceContainer className="flex item-center justify-center">
        {/* <HostInboxPlace /> */}
        <HostInboxIndex/>
      </HostInboxPlaceContainer>
    </>
  );
}

const HostInboxPlaceContainer = styled.div`
  width: 100%;
  /* overflow: hidden; */
  /* min-height: 70vh; */
  padding-top: 10rem;
`;
