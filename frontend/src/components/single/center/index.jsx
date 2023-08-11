import React, { useEffect, useState } from "react";
import styled from "styled-components";
import moment from "moment";
import LeftCenter from "./left";
import RightCenter from "./right";
import Selection from "../../modals/SelectionModal";
import CalendarModal from "../../modals/CalendarModal";
import { useDispatch, useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";
import { CreateBuyerReservations } from "../../../Features/reservations/reservationsReducer";
import { onAuthModal } from "../../../Features/user/userSlice";

const CenterIndex = () => {
  const { GigsDetails } = useSelector((store) => store.gigs);
  const { userInfo } = useSelector((store) => store.user);
  const { ReservationsIsLoading } = useSelector((store) => store.reservations);
  const dispatch = useDispatch();
  const { selectmodal, calendarmodal } = useSelector((store) => store.gigs);
  const [children, setChildren] = useState(1);
  const [infants, setInfants] = useState(0);
  const [adults, setAdults] = useState(2);
  // date
  const [dateRange, setDateRange] = useState({
    selection: {
      startDate: null,
      endDate: null,
      key: "selection",
    },
  });

  const data = {
    children,
    infants,
    adults,
    startDate: moment(dateRange.selection.startDate).format("DD/MM/YYYY"),
    endDate: moment(dateRange.selection.endDate).format("DD/MM/YYYY"),
    qty: 1,
  };

  useEffect(() => {
    const backendStartDate = moment(GigsDetails?.listing_startDate).toDate();
    const backendEndDate = moment(GigsDetails?.listing_startDate)
      .add(GigsDetails?.listing_duration, "days")
      .toDate();
    setDateRange({
      selection: {
        startDate: backendStartDate,
        endDate: backendEndDate,
      },
    });
  }, [GigsDetails, setDateRange]);

  const handleSelect = (ranges) => {
    // console.log(ranges);
    const selectedStartDate = ranges.range1.startDate;
    const selectedendDate = ranges.range1.endDate;

    setDateRange({
      ...ranges.range1,
      selection: {
        startDate: selectedStartDate,
        endDate: selectedendDate,
      },
    });
  };

  const handleCreateReservation = () => {
    if (userInfo) {
      dispatch(CreateBuyerReservations(data));
    } else {
      dispatch(onAuthModal());
    }
  };

  let limit = adults + children + infants;
  return (
    <CenterWrapper>
      <div className="grid_auto w-100 auto">
        <LeftCenter handleSelect={handleSelect} dateRange={dateRange} />
        <div className="rightwrapper flex column gap-2">
          <RightCenter
            limit={limit}
            dateRange={dateRange}
            handleCreateReservation={handleCreateReservation}
          />
        </div>
      </div>

      <AnimatePresence
        initial="false"
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {calendarmodal && (
          <CalendarModal handleSelect={handleSelect} dateRange={dateRange} />
        )}
      </AnimatePresence>
      {/* <Selection /> */}

      <AnimatePresence
        initial="false"
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {selectmodal && (
          <Selection
            setChildren={setChildren}
            children={children}
            infants={infants}
            setInfants={setInfants}
            adults={adults}
            setAdults={setAdults}
          />
        )}
      </AnimatePresence>
    </CenterWrapper>
  );
};
const CenterWrapper = styled.div`
  width: 100%;
  .grid_auto {
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: 1fr auto;
    min-height: 70vh;
    @media (max-width: 1080px) {
      display: flex;
      flex-direction: column-reverse;
    }
  }
  .listing_prop {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fit,minmax(170px,1fr));
  }
  .center_left_top {
    @media (max-width:580px) {
      flex-direction: column;
      align-items: flex-start;
    }
  }
  /* place-items: start; */

  .rightwrapper {
    width: 100%;
  }
  .imageWrapper {
    border-radius: 50%;
    cursor: pointer;
    &:hover {
      .imageGradient {
        opacity: 1;
      }
    }
    img {
      border-radius: inherit;
    }
    .imageGradient {
      background-color: rgba(0, 0, 0, 0.4);
      border-radius: inherit;
      opacity: 0;
      z-index: 10;
      transition: all 0.4s;
    }
  }
`;
export default CenterIndex;
