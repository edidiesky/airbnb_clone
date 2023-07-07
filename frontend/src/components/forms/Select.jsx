import React, { useState } from "react";
import Select from "react-select";
import useContries from "../../hooks/useContries";

const SelectInput = ({ value, onChange }) => {
  const { getallCountries } = useContries();
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      padding: "1rem 2rem",
      border: "2px solid rgba(0,0,0,.07)",
      fontFamily: " Montserrat, sans-serif",
      borderRadius: "40px", // Add desired border-radius value
      //   height: "60px", // Add desired height value
      boxShadow: "0 6px 10px rgba(0, 0, 0, 0.1)",
      "&:hover": {
        border: "2px solid #222", // Add desired hover border color
      },
      "&::focus": {
        border: "2px solid #222", // Add desired hover border color
      }, // Add desired box-shadow value
    }),
  };
  //   console.log(getallCountries())
  return (
    <div className="w-100">
      <Select
        isClearable
        placeholder="Enter your address"
        styles={customStyles}
        value={value}
        // getOptionLabel={(option) => option.name}
        // getOptionValue={(option) => option.id}
        options={getallCountries()}
        onChange={onChange}
        formatOptionLabel={(option) => {
          return (
            <div className="flex gap-1 item-center w-100">
              <div>{option.flag}</div>
              <div className="flex gap-1 item-center w-100">
                {option.label},{" "}
                <span className="text-grey">{option.region}</span>
              </div>
            </div>
          );
        }}
      />
    </div>
  );
};

export default SelectInput;
