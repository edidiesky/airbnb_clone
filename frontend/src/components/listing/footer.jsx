import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
export default function FooterHosting({ next, prev }) {
  return (
    <>
      <div className="hostingbottom">
        <div className="w-85 auto flex item-center justify-space">
          <Link to={`/become-a-host/${prev}`} className="hostbtn grey fs-20">
            Back
          </Link>
          <Link to={`/become-a-host/${next}`} className="hostbtn fs-20">
            Next
          </Link>
        </div>
      </div>
    </>
  );
}

const StartingContainer = styled.div``;
