import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { BiMinus, BiPlus } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { RxCross2 } from "react-icons/rx";
import { flip } from "../../utils/framer";
import { offSelectModal } from "../../Features/listing/listingSlice";
import LoaderIndex from "../loaders";
import { UpdateBuyerReservations } from "../../Features/reservations/reservationsReducer";

export default function Selection({
  setChildren,
  children,
  adults,
  setAdults,
  infants,
  setInfants,
  data,
}) {
  const dispatch = useDispatch();
  const { ReservationsUpdateIsLoading } = useSelector(
    (store) => store.reservations
  );
 const handleUpdateResrevations = ()=> {
  dispatch(UpdateBuyerReservations(data))
  dispatch(offSelectModal())
 }

  // console.log({ results: adults + children });

  let limit = adults + children;

  return (
    <SelectionContainer
      as={motion.div}
      initial={{ opacity: 0, visibility: "hidden", duration: 0.6 }}
      exit={{ opacity: 0, visibility: "hidden", duration: 0.6 }}
      animate={{ opacity: 1, visibility: "visible", duration: 0.6 }}
    >
      <div
        className="backdrop"
        onClick={() => dispatch(offSelectModal())}
      ></div>
      <motion.div
        variants={flip}
        initial="hidden"
        animate="visible"
        exit={"exit"}
        className={"deleteCard gap-2 shadow"}
      >
        <div className="w-100 flex item-start">
          <div className=" avatar  flex item-center justify-center">
            <RxCross2 onClick={() => dispatch(offSelectModal())} />
          </div>
        </div>
        <div className="w-90 auto flex column gap-2">
          <h3 className="fs-24 text-bold w-100" style={{ paddingTop: "0rem" }}>
            Guests
            <span
              style={{ paddingTop: "1rem" }}
              className="block fs-12 text-grey text-bold"
            >
              This place has a maximaum of 6 guests, not including infants, pets
              aren't allowed
            </span>
          </h3>
          <div className="flex w-100 typeContainer auto flex column gap-1">
            {/* guest */}
            <div className="w-100 fs-16 flex item-center justify-space">
              <span className="text-bold text-dark">
                Adults{" "}
                <div className="block fs-14 text-light text-grey">Age 13+</div>
              </span>
              <div
                className="flex item-center justify-end"
                style={{ gap: "1rem" }}
              >
                <button
                  onClick={() => setAdults(adults - 1)}
                  disabled={adults === 0}
                  className="icons flex item-center justify-center"
                >
                  <BiMinus fontSize={"18px"} />
                </button>{" "}
                <h4 className="fs-18 text-grey text-extra-bold">{adults}</h4>
                <button
                  disabled={limit >= 6}
                  onClick={() => setAdults(adults + 1)}
                  className="icons flex item-center justify-center"
                >
                  <BiPlus fontSize={"18px"} />
                </button>
              </div>
            </div>{" "}
            <div className="w-100 fs-16 flex item-center justify-space">
              <span className="text-bold text-dark">
                Children{" "}
                <div className="block fs-14 text-light text-grey">
                  Age 2 - 12
                </div>
              </span>
              <div
                className="flex item-center justify-end"
                style={{ gap: "1rem" }}
              >
                <button
                  onClick={() => setChildren(children - 1)}
                  disabled={children === 0}
                  className="icons flex item-center justify-center"
                >
                  <BiMinus fontSize={"18px"} />
                </button>{" "}
                <h4 className="fs-18 text-grey text-extra-bold">{children}</h4>
                <button
                  disabled={limit >= 6}
                  onClick={() => setChildren(children + 1)}
                  className="icons flex item-center justify-center"
                >
                  <BiPlus fontSize={"18px"} />
                </button>
              </div>
            </div>{" "}
            <div className="w-100 fs-16 flex item-center justify-space">
              <span className="text-bold text-dark">
                Infants{" "}
                <div className="block fs-14 text-light text-grey">Under 2</div>
              </span>
              <div
                className="flex item-center justify-end"
                style={{ gap: "1rem" }}
              >
                <button
                  onClick={() => setInfants(infants - 1)}
                  disabled={infants === 0}
                  className="icons flex item-center justify-center"
                >
                  <BiMinus fontSize={"18px"} />
                </button>{" "}
                <h4 className="fs-18 text-grey text-extra-bold">{infants}</h4>
                <button
                  disabled={infants === 4}
                  onClick={() => setInfants(infants + 1)}
                  className="icons flex item-center justify-center"
                >
                  <BiPlus fontSize={"18px"} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-100 btnwrapper">
          <div className="w-90 auto flex item-center justify-space">
            <div className="hostbtn grey fs-16 text-white">Cancel</div>
            {data ? (
              <div
                onClick={handleUpdateResrevations}
                className="hostbtn fs-16 text-white"
              >
                {ReservationsUpdateIsLoading ? <LoaderIndex /> : "Save"}
              </div>
            ) : (
              <div className="hostbtn fs-16 text-white">Save</div>
            )}
          </div>
        </div>
      </motion.div>
    </SelectionContainer>
    // <h2>hello</h2>
  );
}

const SelectionContainer = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;

  display: flex;
  z-index: 4900;
  align-items: center;
  justify-content: center;
  top: 0;
  .icons {
    width: 2.5rem;
    border-radius: 50%;
    height: 2.5rem;
    border: 1px solid rgba(0, 0, 0, 0.3);
    background-color: transparent;
    cursor: pointer;
    &:hover {
      border: 1px solid rgba(0, 0, 0, 1);
    }
    &:disabled {
      cursor: not-allowed;
    }
  }

  .list1 {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding-bottom: 0.6rem;
  }
  .btnwrapper {
    padding: 1.5rem 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }
  .hostbtn {
    padding: 0.6rem 2rem;
    background-color: var(--dark-1);
    color: #fff;
    border-radius: 10px;

    &:hover {
      background-color: #e3dddd;
      color: var(--dark-1);
    }
    &.grey {
      background-color: transparent;
      color: var(--dark-1);
      text-decoration: underline;
      padding: 0.6rem 0;
    }
  }
  .authCenter {
    padding: 1.5rem 2rem;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
    border-radius: 20px;
    margin: 1.4rem 0;
    background-color: #fff;
  }
  .backdrop {
    background: rgba(0, 0, 0, 0.3);

    position: absolute;
    height: 100%;
    width: 100%;
  }
  .avatar {
    font-size: 20px;
    border-radius: 50%;
    margin-top: 1rem;

    &:hover {
      background-color: #fafafa;
    }
  }
  .deleteCard {
    width: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: #fff;
    border-radius: 20px;
    box-shadow: 0 2rem 3rem rgba(0, 0, 0, 0.1);
    position: relative;
    padding: 0 1rem;
    @media (max-width: 980px) {
      width: 60%;
    }
    @media (max-width: 780px) {
      width: 80%;
    }
    .cross {
      position: absolute;
      right: 10px;
      top: 20px;
      width: 2.2rem;
      height: 2.2rem;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      &:hover {
        background: var(--grey-4);
      }
      svg {
        font-size: 20px;
      }
    }
  }
`;
