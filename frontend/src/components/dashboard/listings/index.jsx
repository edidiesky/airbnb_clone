import styled from "styled-components";
import { useSelector } from "react-redux";
import React, { useEffect } from "react";
import { Card } from "../../common";
import { getAllGigs } from "../../../Features/listing/listingReducer";
import { useDispatch } from "react-redux";
import { clearGigsAlert } from "../../../Features/listing/listingSlice";
import TableCard from "../../common/TableCard";
import { Table } from "../../common/styles";

export default function HostLsitingsIndex() {
  const { Gigs } = useSelector((store) => store.gigs);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    dispatch(clearGigsAlert());
    dispatch(getAllGigs());
  }, []);

  return (
    <>
      <HostLsitingsIndexPlaceContainer className="flex item-center justify-center">
        <div className="w-90 auto">
          <div className="w-100 auto flex column gap-2">
            <div
              style={{ flexWrap: "wrap" }}
              className="flex top item-center flex-wrap gap-1 justify-space w-100"
            >
              <h3 className="fs-24 text-extra-bold">Popular Rooms</h3>

              <div
                style={{ flexWrap: "wrap" }}
                className="flex  item-center gap-1"
              >
                <div className={"where_wrapper flex column"}>
                  <input type="text" placeholder="Search destinations" />
                </div>
                <div className="reserveBtn fs-14 text-center text-white flex justify-center item-center">
                  Add New Rooms
                </div>
              </div>
            </div>
            <Table>
              <div className="TableContainer">
                <table className="tableWrapper">
                  <thead>
                    <tr>
                      <th>Rooms Name</th>
                      <th>Bed Type</th>
                      <th>Room Floor</th>
                      <th>Facilities</th>
                      <th>Rate</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Gigs?.slice(0, 3)?.map((x) => {
                      return <TableCard x={x} key={x?._id} />;
                    })}
                    {/* {userData?.slice(0,4).map((x) => {
                  return <TableCard x={x} key={x?._id} type="users" />;
                })} */}
                  </tbody>
                </table>
              </div>
              {/* {usernoOfpage > 0 && <Pagination type="users" />} */}
            </Table>
          </div>
        </div>
      </HostLsitingsIndexPlaceContainer>
    </>
  );
}

const HostLsitingsIndexPlaceContainer = styled.div`
  width: 100%;

  .wrapper {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-row-gap: 2rem;
    grid-column-gap: 1.4rem;
  }
  .where_wrapper {
    width: 350px;
    border-radius: 40px;
    background-color: #ebebeb;
    padding: 0.8rem;
    padding-left: 2rem;
    .btn {
      padding: 0.8rem 2rem;
      background-image: linear-gradient(
        to right,
        #e61e4d 0%,
        #e31c5f 50%,
        #d70466 100%
      );
      border-radius: 40px;
      color: #fff;
    }
    &:hover {
      background-color: #cbc8c88e;
    }

    &.active {
      box-shadow: 0 20px 46px rgba(0, 0, 0, 0.2);
      background-color: #fff;
    }
    input {
      border: none;
      outline: none;
      font-family: inherit;
      font-size: 14px;
      color: var(--grey-1);
      background-color: transparent;
    }
  }
  .reserveBtn {
    background-image: linear-gradient(
      to right,
      #e61e4d 0%,
      #e31c5f 50%,
      #d70466 100%
    );
    padding: 0.7rem 1.4rem;
    /* min-height: 3rem; */
    border-radius: 10px;
    color: #fff !important;
    color: #fff;
    /* padding: 0.8rem 2rem; */
    border-radius: 10px;
    cursor: pointer;
    &:hover {
      opacity: 0.6;
    }
  }
  h3,
  h2 {
    font-family: "Montserrat", sans-serif;
  }
  padding: 2rem 0;
`;
