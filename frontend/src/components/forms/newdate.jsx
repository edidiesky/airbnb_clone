import React from "react";
import styled from "styled-components";
// import 'react-dates/initialize';

import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

export default function NewDateInput({focusedInput, startDate, endDate,setFocusedInput, setDates, type }) {
  return (
    <>
      <DateRangePicker
        startDate={startDate}
        startDateId="start_date_id"
        endDate={endDate}
        endDateId="end_date_id"
        onDatesChange={({ startDate, endDate }) =>
          setDates({ startDate, endDate })
        }
        focusedInput={focusedInput}
        onFocusChange={(focusedInput) => setFocusedInput(focusedInput)}
        inputClassName="custom-input-class"
      />
    </>
  );
}
