import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const listdata1 = [
  "Help Center",
  "AirCover",
  "Supporting people with disabilities",
  "Cancellation options",
  "Our COVID-19 Response",
  "Report a neighborhood concern",
];

const listdata2 = [
  "Airbnb.org: disaster relief housing",
  "Combating discrimination",
];
const listdata3 = [
  "Airbnb your home",
  "AirCover for Hosts",
  "Explore hosting resources",
  "Visit our community forum",
  "Airbnb-friendly apartments",
  "How to host responsibly",
];
const listsdata4 = [
  "Newsroom",
  "Learn about new features",
  "Letter from our founders",
  "Careers",
  "Investors",
  "Gift cards",
];
const Footer = () => {
  return (
    // reviews
    <FooterWrapper className="w-100 bottom flex column gap-2 py-2">
      <div className="w-85 auto grid column gap-3">
        <div className="flex column gap-2 w-100">
          <h4 className="fs-16 text-bold">Support</h4>
          <div className="flex column gap-1">
            {listdata1.map((x) => {
              return (
                <Link to={"/"} className="fs-14 text-dark text-light">
                  {x}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="flex column gap-2 w-100">
          <h4 className="fs-16 text-bold">Community</h4>
          <div className="flex column gap-1">
            {listdata2.map((x) => {
              return (
                <Link to={"/"} className="fs-14 text-dark text-light">
                  {x}
                </Link>
              );
            })}
          </div>
        </div>{" "}
        <div className="flex column gap-2 w-100">
          <h4 className="fs-16 text-bold">Hosting</h4>
          <div className="flex column gap-1">
            {listdata3.map((x) => {
              return (
                <Link to={"/"} className="fs-14 text-dark text-light">
                  {x}
                </Link>
              );
            })}
          </div>
        </div>{" "}
        <div className="flex column gap-2 w-100">
          <h4 className="fs-16 text-bold">Airbnb</h4>
          <div className="flex column gap-1">
            {listsdata4.map((x) => {
              return (
                <Link to={"/"} className="fs-14 text-dark text-light">
                  {x}
                </Link>
              );
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
  background-color: #f7f7f7;
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 1rem;
  }
`;
export default Footer;
