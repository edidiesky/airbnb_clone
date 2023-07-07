import React, { useState } from "react";
import styled from "styled-components";

export default function Input({ id, onChange, errorMessage, ...props }) {
  const [touched, setTouched] = useState(false);
  const handleTouch = () => {
    setTouched(true);
  };
  return (
    <LabelContainer className="family1" htmlFor={id}>
      <div className="labelspan">{id}</div>
      <input
        {...props}
        onBlur={handleTouch}
        onFocus={() => (props.name === "password2" ? setTouched(true) : "")}
        focused={touched.toString()}
        onChange={onChange}
        autoComplete="off"
        className={touched ? "true" : ""}
      />
    </LabelContainer>
  );
}

const LabelContainer = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.3rem;
  font-size: .8rem;
  color: var(--dark-1);
  font-weight: 700;
  text-transform: capitalize;
  font-family: "Lora", sans-serif;
  position: relative;

  .labelspan {
    position: absolute;
    top: -17%;
    padding: 0 .6rem;
    left: 2%;
    background-color: #fff;
    font-weight: normal;
  }
  input {
    height: 3.3rem;
    border-radius: 8px;
    background: transparent;
    padding: 0 1.8rem;
    width: 100%;
    outline: none;
    font-size: .9rem;
    font-weight: 500;
    font-family: inherit;
    border: 1px solid rgba(0, 0, 0, 0.4);
    color: var(--grey-1);

    &:hover {
      border: 1px solid rgba(0, 0, 0, 0.4);
    }
    &:focus {
      border: 2px solid var(--dark-1);
      background: transparent;
    }
    &.true {
      background: #fff;
    }
    &.inputError {
      border: 2px solid var(--red);
    }
    &:invalid[focused="true"] ~ span {
      display: block;
    }
  }

  span {
    font-size: 1.3rem;
    color: #c61212;
    font-weight: 600;
    display: none;
  }
`;
