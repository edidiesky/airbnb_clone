import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { RxCross1 } from "react-icons/rx";
import { CgDanger } from "react-icons/cg";
export default function Message({
  showAlert,
  alertText,
  alertType,
  handleClearAlert,
}) {
  // dispatch
  const dispatch = useDispatch();

  // useEffect(() => {
  //   setTimeout(() => {
  //     dispatch(handleClearAlert());
  //   }, 4000);
  // }, []);

  return (
    <MessageContent className={"gap-1 flex item-center justify-space active"}>
      {/* {alertType === "danger" && <CgDanger className="fs-24" />} */}
      <div className="flex flex1 fs-12 text-dark">
        Your gig has been succesfully deleted
      </div>
      <div className="icon" onClick={() => dispatch(handleClearAlert())}>
        <RxCross1 />
      </div>
    </MessageContent>
  );
}

const MessageContent = styled.div`
  min-width: 450px;
  padding: 1.2rem 2rem;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.26);
  background-color: #fff;
  position: fixed;
  z-index: 10000;
  left: 10%;
  border-radius: 5px;
  /* transform: translateX(-50%); */
  top: 10%;
  border-left: 4px solid var(--green);
  font-size: 15px;
  font-weight: 700;
  color: var(--dark-1);
  transition: all 0.6s;
  &.danger {
    background-color: var(--red);
    color: #fff;
    border-left: 4px solid var(--red);
  }
  @media (max-width: 780px) {
    min-width: 300px;
    justify-content: flex-start;
  }
  .flex1 {
    flex: 1;
  }
  .icon {
    width: 2.4rem;
    height: 2.4rem;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background-color: #f5f5f5;
    cursor: pointer;
    &:hover {
      background-color: var(--grey-1);
      svg {
        color: #fff;
      }
    }
    svg {
      width: 50%;
      height: 50%;
      color: var(--grey-2);
    }
  }
`;
