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
    const backendStartDate = moment(GigsDetails?.startDate).toDate();
    const backendEndDate = moment(GigsDetails?.endDate).toDate();
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
      <LeftCenter />
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

      <div className="rightwrapper flex column gap-2">
        <RightCenter
          limit={limit}
          dateRange={dateRange}
          handleCreateReservation={handleCreateReservation}
        />
      </div>
    </CenterWrapper>
  );
};
const CenterWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 6rem;
  grid-template-columns: 1fr 27vw;
  place-items: start;
  /* place-items: start; */
  @media (max-width: 1080px) {
    display: flex;
    flex-direction: column-reverse;
  }
  .rightwrapper {
    width: 100%;
  }
`;
export default CenterIndex;
