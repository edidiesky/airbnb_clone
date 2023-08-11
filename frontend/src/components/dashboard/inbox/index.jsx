import styled from "styled-components";
import React from "react";

export default function HostInboxIndex() {
  return (
    <>
      <HostInboxIndexPlaceContainer>
        <div className="w-90 auto flex column gap-2">
          <h3 className="fs-30 text-light">All messages</h3>
          <div className="message w-100 flex column item-center justify-center gap-1">
            <h4 className="fs-16 text-bold text-center">
              No new messages
              <span className="text-light text-grey fs-14 block">If you're looking for a message, check the archive.</span>
            </h4>
          </div>
        </div>
      </HostInboxIndexPlaceContainer>
    </>
  );
}

const HostInboxIndexPlaceContainer = styled.div`
  width: 100%;
`;
