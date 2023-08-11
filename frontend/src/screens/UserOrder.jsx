import React, { useEffect } from "react";
import { Header, Meta } from "../components/common";
import { useDispatch } from "react-redux";
import { GetAllBuyerReservations } from "../Features/reservations/reservationsReducer";
import UsreOrderIndex from "../components/userorder";
const UserOrder = () => {

  return (
    <>
      <Meta title={"Your lists . UserOrder lists - Airbnb"} />
      <Header type={"type"} />
      <div className="w-100" style={{ minHeight: "100vh", paddingTop: "8rem" }}>
        <UsreOrderIndex />
      </div>
    </>
  );
};

export default UserOrder;
