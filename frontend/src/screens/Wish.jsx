import React from "react";
import styled from "styled-components";
import WishIndex from "../components/wishlist";
import { Header, Meta } from "../components/common";

const Wish = () => {
  return (
    <>
     <Meta title={'Your lists . Wishlists - Airbnb'} />
      <Header type={'type'} />
      <div
        className="w-100"
        style={{ minHeight: "100vh", paddingTop: "8rem" }}
      >
        <WishIndex />
      </div>
    </>
  );
};

export default Wish;
