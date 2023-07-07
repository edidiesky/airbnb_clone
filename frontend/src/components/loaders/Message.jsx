import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { RxCross1 } from "react-icons/rx";
import { CgDanger } from "react-icons/cg";
import { AiFillCheckCircle } from "react-icons/ai";
export default function Message({
  showAlert,
  alertText,
  alertType,
  handleClearAlert,
}) {
  // dispatch
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(handleClearAlert())
    }, 6000);
  }, []);

  return (
    <MessageContent
      className={
        showAlert
          ? "gap-1 flex item-center justify-space active"
          : "gap-1 flex item-center justify-space"
      }
    >
      <AiFillCheckCircle fontSize={"24px"} color="green" />
      <div className="flex flex1 fs-14 text-dark">{alertText}</div>
      <div className="icon" onClick={handleClearAlert}>
        <RxCross1 />
      </div>
    </MessageContent>
  );
}

const MessageContent = styled.div`
  min-width: 450px;
  padding: 1.2rem 2rem;
  box-shadow: 0 .5rem 1rem rgba(0, 0, 0, 0.26);
  background-color: #fff;
  position: fixed;
  z-index: 10000;
  left: 10%;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 700;
  color: var(--dark-1);
  transition: all 0.6s;
  top: 5%;
  transform: translateY(-1000%);
  /* top: 5%; */

  &.active {
    top: 0%;
    transform: translateY(100%);
  }
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
    width: 1.6rem;
    height: 1.6rem;
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
      color: var(--dark-1);
    }
  }
`;
