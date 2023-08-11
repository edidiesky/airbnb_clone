import React from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import styled from "styled-components";

export default function DateInput({ handleSelect,dateRange,type }) {

  return (
    <DateContainer>
       <DateRange
      rangeColors={["var(--grey-1)"]}
      ranges={[dateRange.selection]}
      onChange={handleSelect}
      showDateDisplay={false}
      minDate={new Date()}
      months={2}
      showSelectionPreview={true}
      moveRangeOnFirstSelection={false}
      range={false}
      direction="horizontal"
      //   disabledDates={Date}
    />
      
    </DateContainer>
   
  );
}

const DateContainer = styled.div`
  width: 100%;
  /* @media (min-width: 450px) {
      display: none;
    }
  @media (max-width: 450px) {
      display: block;
    } */
`;
