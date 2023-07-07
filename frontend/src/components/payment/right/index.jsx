import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

export default function RightIndex() {
  const { ReservationsDetails } = useSelector((store) => store.reservations);
  let date1 = new Date(ReservationsDetails?.startDate);
  let date2 = new Date(ReservationsDetails?.endDate);

  const differenceInTime = date2?.getTime() - date1?.getTime(); // Difference in milliseconds
  const differenceInDays = (differenceInTime / (1000 * 3600 * 24)).toFixed(); // Convert milliseconds to days

  // console.log(differenceInDays);

  return (
    <RightIndexContent className="w-100">
      <div className="Right flex gap-1 column">
        <div className="w-100 border flex column gap-1">
          <div className="w-100 flex bottom item-start gap-1">
            <div className="flex item-start gap-1">
              <div className="detailsImageWrapper">
                {ReservationsDetails?.gigId?.image?.map((x, index) => {
                  return <img key={index} src={x} alt="" className="w-100" />;
                })}
              </div>
              <h4 className="fs-14 text-grey">
                <span className="block fs-12 text-grey text-bold">
                  Room in bed and breakfast
                </span>
                {/* Quiet riad with lovely terrace (private room) */}
                {ReservationsDetails?.gigId?.title}
              </h4>
            </div>
          </div>
          <div className="top flex justify-space w-100">
            <h4 className="fs-20 text-dark text-bold">Price Details</h4>
          </div>
          <div className="flex bottom w-100 column gap-1">
            <h4 className="fs-16 text-light text-dark w-100 justify-space flex item-center">
              <span style={{ textDecoration: "underline" }}>
                ${ReservationsDetails?.gigId?.price} x {differenceInDays} nights
              </span>
              <span className="text-dark">
                ${ReservationsDetails?.gigId?.price * differenceInDays}
              </span>
            </h4>{" "}
            <h4 className="fs-16 text-light text-dark w-100 justify-space flex item-center">
              <span style={{ textDecoration: "underline" }}>Cleaning fee</span>
              <span className="text-dark">$50</span>
            </h4>
            <h4 className="fs-16 text-light text-dark w-100 justify-space flex item-center">
              <span style={{ textDecoration: "underline" }}>
                Airbnb service fee
              </span>
              <span className="text-dark">
                $
                {(
                  ReservationsDetails?.gigId?.price *
                  differenceInDays *
                  0.0142
                ).toFixed(1)}
              </span>
            </h4>
          </div>
          <h4 className="fs-16 text-extra-bold family1 text-dark w-100 justify-space flex item-center">
            <span style={{ textDecoration: "underline" }}>Total (USD)</span>
            <span className="text-dark">
              $
              {(
                ReservationsDetails?.gigId?.price * differenceInDays * 0.0142 +
                ReservationsDetails?.gigId?.price * differenceInDays +
                50
              ).toFixed()}
            </span>
          </h4>{" "}
        </div>
      </div>
    </RightIndexContent>
  );
}

const RightIndexContent = styled.div`
  width: 100%;
  .Right {
    position: sticky;
    top: 10%;
  }
  .image {
    width: 50%;
    height: 8rem;
  }
  .p2 {
    padding: 2rem;
  }
  .p1 {
    padding: 1rem;
  }

  .detailsImageWrapper {
    width: 100%;
    position: relative;
    display: grid;
    grid-template-columns: repeat(4, 100%);
    overflow: hidden;
    grid-gap: 0rem;
    height: 8rem;

    img {
      width: 100%;
      object-fit: cover;
      height: 8rem;
      position: absolute;
    }
  }

  .border {
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 2rem 1.4rem;
    border-radius: 15px;
  }
`;
