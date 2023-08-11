import React from "react";
import styled from "styled-components";
import Header from "../common/Header";
import HomeIndex from "../home";
export default function HomeLoader({ loading, type, color }) {
  return (
    <div>
      <Header loader={"Loader"} />
      <div className="" style={{minHeight:"100vh",paddingTop:"11rem"}}>
      <HomeIndex loader={'loader'} />
      </div>
    </div>
  );
}

const HomeLoaderWrapper = styled.div`
  width: 100%;
  /* min-height: 100vh; */
`;
