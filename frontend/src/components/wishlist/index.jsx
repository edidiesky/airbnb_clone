import React from "react";
import styled from "styled-components";
import { Card } from "../common";
import { useDispatch, useSelector } from "react-redux";
import Message from "../loaders/Message";
import { clearWishMessage } from "../../Features/wish/wishSlice";

const WishIndex = () => {
  const dispatch = useDispatch();
  const { wish, showAlert, alertText } = useSelector((store) => store.wish);
  const handleClearMessage = () => {
    dispatch(clearWishMessage());
  };
  return (
    <div
      className="w-85 auto flex column gap-2"
      style={{ paddingBottom: "3rem" }}
    >
      <Message
        showAlert={showAlert}
        alertText={"Product has been succesfully deleted"}
        handleClearAlert={handleClearMessage}
      />
      <h2 className="fs-40">Wishlists</h2>
      {wish.length > 0 ? (
        <WishWrapper className=" w-100 gap-2">
          {wish.map((x) => {
            return <Card x={x} type={"wish"} />;
          })}
        </WishWrapper>
      ) : (
        <h3 className="fs-24">
          Create your first wishlist
          <span className="py-1 block fs-16 w-90 text-light text-grey">
            As you search, click the heart icon to save your favorite places and
            Experiences to a wishlist.
          </span>
        </h3>
      )}
    </div>
  );
};

const WishWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1.5rem;
  /* padding: 2rem 0; */
`;

export default WishIndex;
