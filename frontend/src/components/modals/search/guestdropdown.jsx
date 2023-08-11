import React, { useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
export default function GuestDropdown({
  adults,
  setAdults,
  setTab,
  setChildren,
  children,
  setInfants,
  infants,
}) {
  let limit = adults + children;

  return (
    <div className="guest_search w-100">
      <div className="w-85 auto flex column gap-2">
        <div className="flex w-100 typeContainer auto flex column gap-1">
          {/* guest */}
          <div className="w-100 btnwrapper fs-14 flex item-center justify-space">
            <span className="text-bold text-dark">
              Adults{" "}
              <div className="block fs-12 text-light text-grey">Age 13+</div>
            </span>
            <div
              className="flex item-center justify-end"
              style={{ gap: ".7rem" }}
            >
              <button
                onClick={() => setAdults(adults - 1)}
                disabled={adults === 0}
                className="icons flex item-center justify-center"
              >
                <BiMinus fontSize={"15px"} />
              </button>{" "}
              <h4 className="fs-18 text-grey text-extra-bold">{adults}</h4>
              <button
                disabled={limit >= 6}
                onClick={() => setAdults(adults + 1)}
                className="icons flex item-center justify-center"
              >
                <BiPlus fontSize={"15px"} />
              </button>
            </div>
          </div>{" "}
          <div className="w-100 btnwrapper fs-14 flex item-center justify-space">
            <span className="text-bold text-dark">
              Children{" "}
              <div className="block fs-12 text-light text-grey">Age 2 - 12</div>
            </span>
            <div
              className="flex item-center justify-end"
              style={{ gap: ".7rem" }}
            >
              <button
                onClick={() => setChildren(children - 1)}
                disabled={children === 0}
                className="icons flex item-center justify-center"
              >
                <BiMinus fontSize={"15px"} />
              </button>{" "}
              <h4 className="fs-18 text-grey text-extra-bold">{children}</h4>
              <button
                disabled={limit >= 6}
                onClick={() => setChildren(children + 1)}
                className="icons flex item-center justify-center"
              >
                <BiPlus fontSize={"15px"} />
              </button>
            </div>
          </div>{" "}
          <div className="w-100 btnwrapper fs-14 flex item-center justify-space">
            <span className="text-bold text-dark">
              Infants{" "}
              <div className="block fs-12 text-light text-grey">Under 2</div>
            </span>
            <div
              className="flex item-center justify-end"
              style={{ gap: ".7rem" }}
            >
              <button
                onClick={() => setInfants(infants - 1)}
                disabled={infants === 0}
                className="icons flex item-center justify-center"
              >
                <BiMinus fontSize={"15px"} />
              </button>{" "}
              <h4 className="fs-18 text-grey text-extra-bold">{infants}</h4>
              <button
                disabled={infants === 4}
                onClick={() => setInfants(infants + 1)}
                className="icons flex item-center justify-center"
              >
                <BiPlus fontSize={"15px"} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
