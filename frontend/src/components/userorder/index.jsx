import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Message from "../loaders/Message";
import { Table } from "../common/styles";
import TableCard from "../common/TableCard";
import { clearGigsAlert } from "../../Features/listing/listingSlice";
import { getAllGigs } from "../../Features/listing/listingReducer";
import { useParams } from "react-router-dom";
import { updateCustomersOrderToPaid } from "../../Features/order/orderReducer";

const UsreOrderIndex = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { order, showAlert, alertText } = useSelector((store) => store.order);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    dispatch(updateCustomersOrderToPaid(id));
  }, [id]);

  return (
    <div
      className="w-85 auto flex column gap-2"
      style={{ paddingBottom: "3rem" }}
    >
      <Message
        showAlert={showAlert}
        alertText={alertText}
        // handleClearAlert={handleClearMessage}
      />
      <h2 className="fs-35">Transaction History</h2>

      {order?.length > 0 ? (
        <Table>
          <div className="TableContainer">
            <div className="flex column gap-2 justify-space w-100 flex-wrap">
              {/* <h3 className="fs-24 text-bold">Transaction History</h3> */}
            </div>
            <table className="tableWrapper">
              <tbody>
                {order?.map((x) => {
                  return <TableCard type={"order"} x={x} key={x?._id} />;
                })}
              </tbody>
            </table>
          </div>
          {/* {usernoOfpage > 0 && <Pagination type="users" />} */}
        </Table>
      ) : (
        <h3 className="fs-24 w-100">
          My Orders
          <span
            className=" w-100
             block fs-16 w-90 text-light text-grey"
          >
            You have no orders
          </span>
        </h3>
      )}
    </div>
  );
};

export default UsreOrderIndex;
