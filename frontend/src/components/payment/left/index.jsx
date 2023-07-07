import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import {
  offCalendarModal,
  offSelectModal,
  onCalendarModal,
  onSelectModal,
} from "../../../Features/gigs/gigsSlice";
import { AnimatePresence } from "framer-motion";
import CalendarModal from "../../modals/CalendarModal";
import Selection from "../../modals/SelectionModal";
import { UpdateBuyerReservations } from "../../../Features/reservations/reservationsReducer";
import Message from "../../loaders/Message";
import { clearReservationsAlert } from "../../../Features/reservations/reservationsSlice";
import {
  createCustomersOrder,
  createStripeIntent,
} from "../../../Features/order/orderReducer";
import LoaderIndex from "../../loaders";

export default function SingleLeftIndex({ id }) {
  const { ReservationsDetails, ReservationsUpdateIsSuccess } = useSelector(
    (store) => store.reservations
  );

  const { selectmodal, calendarmodal } = useSelector((store) => store.gigs);
  const { isloadingStripe, url } = useSelector((store) => store.order);
  const [children, setChildren] = useState(
    ReservationsDetails?.gigId?.children
  );
  const [infants, setInfants] = useState(ReservationsDetails?.gigId?.infants);
  const [adults, setAdults] = useState(ReservationsDetails?.gigId?.adults);

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
    if (ReservationsDetails) {
      setChildren(ReservationsDetails?.children);
      setAdults(ReservationsDetails?.adults);
      setInfants(ReservationsDetails?.infants);
    }
    const backendStartDate = moment(
      ReservationsDetails?.gigId?.startDate
    ).toDate();
    const backendEndDate = moment(ReservationsDetails?.endDate).toDate();
    setDateRange({
      selection: {
        startDate: backendStartDate,
        endDate: backendEndDate,
      },
    });
  }, [ReservationsDetails, setDateRange, setChildren, setAdults, setInfants]);

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

  const dispatch = useDispatch();
  let date1 = new Date(ReservationsDetails?.startDate);
  let date2 = new Date(ReservationsDetails?.endDate);

  const differenceInTime = date2?.getTime() - date1?.getTime(); // Difference in milliseconds
  const differenceInDays = (differenceInTime / (1000 * 3600 * 24)).toFixed(); // Convert milliseconds to days

  // console.log(ReservationsDetails?.gigId?.children);

  const orders = [
    {
      price: (
        (ReservationsDetails?.gigId?.price * differenceInDays * 0.0142 +
          ReservationsDetails?.gigId?.price * differenceInDays +
          50) *
        100
      ).toFixed(),
      image: ReservationsDetails?.gigId?.image,
      title: ReservationsDetails?.gigId?.title,
      quantity: 1,
    },
  ];

  const sessionorder = {
    orders,
    price: (
      (ReservationsDetails?.gigId?.price * differenceInDays * 0.0142 +
        ReservationsDetails?.gigId?.price * differenceInDays +
        50) *
      100
    ).toFixed(),
    title: ReservationsDetails?.gigId?.title,
    quantity: 1,
    startDate: ReservationsDetails?.startDate,
    endDate: ReservationsDetails?.endDate,
  };

  // console.log();
  console.log(ReservationsDetails?.startDate, ReservationsDetails?.endDate);
  const handleOrderCreation = () => {
    dispatch(createCustomersOrder(sessionorder));
  };

  useEffect(() => {
    if (url) {
      window.location.href = url;
    }
  }, [url]);
  return (
    <div>
      <Message
        showAlert={ReservationsUpdateIsSuccess}
        alertText={"Your reservation has been successfully updated"}
        handleClearAlert={dispatch(clearReservationsAlert())}
      />
      <AnimatePresence
        initial="false"
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {calendarmodal && (
          <CalendarModal
            data={data}
            handleSelect={handleSelect}
            dateRange={dateRange}
          />
        )}
      </AnimatePresence>

      <AnimatePresence
        initial="false"
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {selectmodal && (
          <Selection
            data={data}
            setChildren={setChildren}
            children={children}
            infants={infants}
            setInfants={setInfants}
            adults={adults}
            setAdults={setAdults}
          />
        )}
      </AnimatePresence>
      <div className="w-100 flex column gap-2">
        <div
          className="flex w-100 column gap-1 bottom"
          style={{ paddingBottom: "1.6rem" }}
        >
          <h3 className="fs-24">Your trip</h3>
          <div className="w-100 flex column gap-1">
            <div className="w-100 flex item-center justify-space">
              <h4 className="fs-18 text-bold">
                Dates
                <span className="block fs-16 text-grey text-light">
                  Sep 20 – 22
                </span>
              </h4>
              <div
                className="fs-18 edit text-extra-bold"
                style={{ textDecoration: "underline" }}
                onClick={() => dispatch(onCalendarModal())}
              >
                Edit
              </div>
            </div>{" "}
            <div className="w-100 flex item-center justify-space">
              <h4 className="fs-18 text-bold">
                Guests
                <span className="block fs-16 text-grey text-light">
                  {children + infants + adults} guests
                </span>
              </h4>
              <div
                className="fs-18 edit text-extra-bold"
                onClick={() => dispatch(onSelectModal())}
                style={{ textDecoration: "underline" }}
              >
                Edit
              </div>
            </div>
          </div>
        </div>
        <div className="border flex column w-100">
          <h4 className="fs-16 text-dark">
            This is a rare find.
            <span className="text-dark py-1 block text-light fs-18">
              Alyson's place is usually booked.
            </span>
          </h4>
        </div>
        {/* policy */}
        <div className="flex column gap-1 bottom">
          <h3 className="fs-24">Cancellation policy</h3>
          <h4 className="fs-14 family1 text-light">
            <span className="text-bold" style={{ textDecoration: "underline" }}>
              Free cancellation before Nov 9.
            </span>{" "}
            Cancel before check-in on Nov 14 for a partial refund.{" "}
            <span className="text-bold" style={{ textDecoration: "underline" }}>
              Learn more
            </span>
          </h4>
        </div>
        {/* rules */}
        <div className="flex column bottom">
          <h3 className="fs-24">Ground rules</h3>
          <h4 className="fs-16 text-light">
            We ask every guest to remember a few simple things about what makes
            a great guest.
          </h4>
        </div>
        {/* rules
     
        {/* payment button */}
        <h5 className="fs-12 text-light">
          By selecting the button below,{" "}
          <span
            className="text-extra-bold"
            style={{ textDecoration: "underline" }}
          >
            I agree to the Host's House Rules
          </span>
          ,{" "}
          <span
            className="text-extra-bold"
            style={{ textDecoration: "underline" }}
          >
            Ground rules for guests
          </span>{" "}
          ,
          <span
            className="text-extra-bold"
            style={{ textDecoration: "underline" }}
          >
            Airbnb's Rebooking and Refund Policy,
          </span>{" "}
          and that Airbnb can charge my payment method if I’m responsible for
          damage.
        </h5>
        <div className="w-50 flex item-center">
          <div onClick={handleOrderCreation} className="btn fs-16 text-white">
            {isloadingStripe ? (
              <LoaderIndex type={"dots"} />
            ) : (
              "Confirm and Pay"
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
