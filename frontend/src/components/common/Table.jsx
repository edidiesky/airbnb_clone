import * as React from "react";
import userData from "../../data/userdata";
import TableCard from "./TableCard";
import { TableStyles } from "./tablestyles";

export default function Table() {
  return (
    <div className="w-100 flex column">
      <TableStyles>
        {/* <div className="TableTop">
            <div className="TableTopLeft">
              <form>
                <FaSearch />
                <input
                  type="text"
                  placeholder="Search for Customers"
                  name="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </form>
            </div>
          </div> */}
        <div className="TableContainer">
          <table className="tableWrapper">
            <thead>
              <tr>
                <th>Customers Id</th>
                <th>Username</th>
                <th>Country</th>
                <th>Phone</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {userData?.map((x) => {
                return <TableCard x={x} key={x?._id} type="users" />;
              })}
              {/* {userData?.slice(0,4).map((x) => {
                  return <TableCard x={x} key={x?._id} type="users" />;
                })} */}
            </tbody>
          </table>
        </div>
        {/* {usernoOfpage > 0 && <Pagination type="users" />} */}
      </TableStyles>
    </div>
  );
}
