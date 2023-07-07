import React from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import styled from "styled-components";

export default function DateInput({ handleSelect,dateRange }) {

  return (
    <DateRange
      rangeColors={["var(--grey-1)"]}
      ranges={[dateRange.selection]}
      onChange={handleSelect}
      direction="vertical"
      showDateDisplay={false}
      minDate={new Date()}
      //   disabledDates={Date}
    />
  );
}

const DateContainer = styled.div`
  width: 100%;
`;
