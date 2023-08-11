import React, { useState } from "react";
import "./index.css";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Heart from "../../components/common/svg/heart";
const HeaderWrapper = styled.div`
  padding: 1rem 0;
  background-color: #fff;
  position: sticky;
  top: 0;
  z-index: 2000;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  h3 {
    font-family: "Montserrat", sans-serif;
  }
  .avatar {
    width: 3rem !important;
    height: 3rem !important;
  }
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <div className="sidebarContainer w-85 auto flex item-center justify-space">
        <div className="left">
          <h3 className="fs-24 text-bold">Dashboard</h3>
        </div>
        <div className="right flex item-center gap-1">
          <div className="icons flex item-center justify-center">
            <Heart />
          </div>
          <img src="/images/user_1.jpeg" alt="" className="avatar" />
        </div>
      </div>
    </HeaderWrapper>
  );
}
