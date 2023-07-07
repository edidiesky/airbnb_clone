import React from "react";
import styled from "styled-components";

const listdata = [
  "Lmbock",
  "Pennysylvania",
  "Penidia Island",
  "Denspaar",
  "Beach King",
  "Gili Tanwannan",
  "Nusa Beach",
  "Nusa Land",
  "Kuta Beach",
  "Geminia Beach",
  "Canggu Beach",
];

const Footer = () => {
  return (
    // reviews
    <FooterWrapper className="w-100 bottom flex column gap-2 py-2">
      <div className="w-85 auto flex column gap-3">
        <h3 className="fs-20 text-bold">
          Explore other options in and around Ubud
        </h3>
        <div className="grid w-100">
          {listdata.map((x) => {
            return <div className="fs-14 text-dark text-light">{x}</div>;
          })}
        </div>
        <div className="flex column gap-2">
          <h3 className="fs-18 text-light">
            Explore other options in and around Ubud
          </h3>
          <div className="grid w-100">
            {listdata.map((x) => {
              return <div className="fs-14 text-dark text-light">{x}</div>;
            })}
          </div>
        </div>
      </div>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.div`
  width: 100%;
  padding: 3rem 0;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  background-color: #f7f7f7;
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 1rem;
  }
`;
export default Footer;
