import React, { useState } from "react";
import styled from "styled-components";
import { FiLogOut } from "react-icons/fi";

import { FiKey } from "react-icons/fi";

import { HiUsers } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { MdDashboard, MdAddBusiness, MdSettings } from "react-icons/md";
import { BsCalendar3 } from "react-icons/bs";
import Logo from "../../components/common/svg/Logo";
import { FaPen, FaUsers } from "react-icons/fa";
const SidebarWrapper = styled.div`
  width: 350px;
  background: #fff;

  height: 100vh;
  top: 0%;
  position: sticky;
  border-right: 1px solid rgba(0, 0, 0, 0.1);

  /* box-shadow: 0 20px 46px rgba(0, 0, 0, 0.09); */

  .fill {
    fill: #333;
  }
  @media (max-width: 780px) {
    display: inline-block;
    position: fixed;
    top: 0;
    left: -100%;
    display: none;
  }
  .fill {
    fill: #333;
  }
  h3 {
    font-family: "Montserrat", sans-serif;
  }

  .sidebarContainer {
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 0 auto;
    gap: 1rem;

    .image_wrapper {
      width: 6rem;
      height: 6rem;
      border-radius: 50%;
      cursor: pointer;
      position: relative;
      border: 5px solid var(--red);
      &:hover {
        .image_gradient {
          opacity: 1;
        }
      }
      .image_gradient {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        /* transform: translateY(-100%); */
        position: absolute;
        background: rgba(0, 0, 0, 0.5);
        opacity: 0;
        transition: all 0.5s;
      }
      .avatar_profile {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        /* transform: translateY(-100%); */
        position: absolute;
      }
    }
    .imageWrapper {
      width: 90%;
      margin: 1rem auto;
      .sidebarIcon {
        height: 5rem;
      }
    }

    .list {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
      margin-top: 2rem;
      align-items: flex-start;
      .nav-link {
        padding: 13px 16px;
        /* font-size: 1rem; */
        font-size: 13px;
        font-weight: 600;
        margin: 0;
        color: var(--grey-1);
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 20px;
        border-radius: 40px;

        &:hover {
          background-color: rgba(255, 219, 226, 0.337);
          color: rgb(249, 38, 77);
        }
        svg {
          font-size: 24px;
        }
        &.active {
          background-color: rgba(255, 219, 226, 0.337);
          color: rgb(249, 38, 77);
        }
      }
    }
  }
`;

export const sidebarData = [
  {
    id: 1,
    icon1: <MdDashboard />,
    title: "Dashboard",
    path: "",
  },
  {
    id: 2,
    icon1: <FiKey />,
    title: "Rooms",
    path: "listings",
  },
  { id: 4, icon1: <BsCalendar3 />, title: "Bookings", path: "orders" },
  { id: 7, icon1: <FaUsers />, title: "Conclerge", path: "" },

  { id: 5, icon1: <HiUsers />, title: "Guests", path: "guests" },
  { id: 6, icon1: <MdSettings />, title: "Settings", path: "Profile" },
];

export default function Sidebar() {
  return (
    <SidebarWrapper>
      <div className="sidebarContainer">
        <NavLink to={"/"} className="imageWrapper">
          {/* <Logo type={"type"} /> */}
          <Logo />
        </NavLink>
        <div className="w-90 auto flex column" style={{ gap: ".5rem" }}>
          <div className="image_wrapper">
            <img src="/images/user_1.jpeg" alt="" className="avatar_profile" />
            <div className="image_gradient"></div>
            <div
              style={{
                width: "2.4rem",
                height: "2.4rem",
                borderRadius: "50%",
                bottom: "2%",
                right: "-10%",
                background: "#fafaface",
              }}
              className="flex absolute item-center justify-center"
            >
              <FaPen fontSize={"16px"} color="var(--dark-1)" />
            </div>
          </div>
          <h3 className="fs-20 text-extra-bold">
            Daniel Gokins
            <span className="block fs-12 text-grey text-light">
              Gokin1000@gmail.com
            </span>
          </h3>
        </div>
        <div className="list">
          {sidebarData.map((x) => {
            return (
              <NavLink
                className="nav-link "
                activeClassName="active"
                to={`/dashboard/hosting/${x.path}`}
                key={x.id}
              >
                {x.icon1}
                {x.title}
              </NavLink>
            );
          })}
        </div>
      </div>
    </SidebarWrapper>
  );
}
