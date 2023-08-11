import React, { useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
export default function RegionDropdown({ destinations, setLocation }) {
  return (
    <div className="region_search search_1">
      <div className="w-85 auto flex column gap-2">
        <h5 className="fs-14 text-bold">Search by region</h5>
        <div className="grid_wrapper w-85 grid">
          {destinations.map((x, index) => {
            return (
              <div
                key={index}
                style={{ gap: ".6rem" }}
                className="w-100 card flex column fs-12 text-light"
                onClick={() => setLocation(x.name)}
              >
                <div className="image_wrapper w-100 h-100">
                  <img src={x.image} alt="" className="w-100 h-100" />
                </div>

                {x.name}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
