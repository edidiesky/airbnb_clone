import styled from "styled-components";
import React, { useEffect } from "react";
import { getAllGigs } from "../../../Features/listing/listingReducer";
import { useDispatch } from "react-redux";
import { clearGigsAlert } from "../../../Features/listing/listingSlice";
import TableCard from "../../common/TableCard";
import { Table } from "../../common/styles";

import HostGuestsLeftIndex from "./left";
import HostGuestsRightIndex from "./right";
import { useSelector } from "react-redux";

export default function HostGuestsIndex() {
  const { Gigs } = useSelector((store) => store.gigs);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    dispatch(clearGigsAlert());
    dispatch(getAllGigs());
  }, []);
  return (
    <>
      <HostGuestsIndexPlaceContainer className="flex column gap-2 item-start">
        <div className="w-100 flex_wrapper">
          <HostGuestsLeftIndex />
          <HostGuestsRightIndex />
        </div>
        <Table>
          <div className="TableContainer">
            <div className="flex column gap-2 justify-space w-100 flex-wrap">
              <h3 className="fs-24 text-bold">Transaction History</h3>
            </div>
            <table className="tableWrapper">
              <tbody>
                {Gigs?.slice(0, 3)?.map((x) => {
                  return <TableCard type={'guests'} x={x} key={x?._id} />;
                })}
                {/* {userData?.slice(0,4).map((x) => {
                  return <TableCard x={x} key={x?._id} type="users" />;
                })} */}
              </tbody>
            </table>
          </div>
          {/* {usernoOfpage > 0 && <Pagination type="users" />} */}
        </Table>
      </HostGuestsIndexPlaceContainer>
    </>
  );
}

const HostGuestsIndexPlaceContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  .flex_wrapper {
    display: flex;
    @media (max-width: 780px) {
      flex-direction: column;
    }
  }
`;
