import React, { useEffect } from "react";
import styled from "styled-components";
import { Card } from "../common";
import { useDispatch, useSelector } from "react-redux";
import Message from "../loaders/Message";
import { clearReservationsAlert } from "../../Features/reservations/reservationsSlice";
import { GetSingleBuyerReservations } from "../../Features/reservations/reservationsReducer";

const ReservationsIndex = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetSingleBuyerReservations());
  }, []);
  const { Reservations, showAlert, alertText } = useSelector(
    (store) => store.reservations
  );

  console.log(Reservations);
  const handleClearMessage = () => {
    dispatch(clearReservationsAlert());
  };

  return (
    <div
      className="w-85 auto flex column gap-2"
      style={{ paddingBottom: "3rem" }}
    >
      <Message
        showAlert={showAlert}
        alertText={alertText}
        handleClearAlert={handleClearMessage}
      />
      <h2 className="fs-35">Reservations lists</h2>

      {Reservations.length > 0 ? (
        <ReservationsWrapper className="w-100 gap-2">
          {Reservations?.map((x) => {
            return <Card x={x} type={"reservations"} />;
          })}
        </ReservationsWrapper>
      ) : (
        <h3 className="fs-24 w-100">
          Create your first Reservations
          <span
            className=" w-100
             block fs-16 w-90 text-light text-grey"
          >
            As you search, click the heart icon to save your favorite places and
            Experiences to a wishlist.
          </span>
        </h3>
      )}
    </div>
  );
};

const ReservationsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1.5rem;
  @media (max-width: 980px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
  /* padding: 2rem 0; */
`;

export default ReservationsIndex;
