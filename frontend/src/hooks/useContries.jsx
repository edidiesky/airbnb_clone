import React, { useState } from "react";
import countres from "world-countries";

const formattedCountry = countres.map((x) => {
  return {
    value: x.cca2,
    label: x.name.common,
    flag: x.flag,
    latng: x.latlng,
    region: x.region,
  };
  // console.log(x);
});

const useContries = () => {
  const getallCountries = () => formattedCountry;

  const getByValue = ({value}) => {
    return formattedCountry.find((country) => country.value === value);
  };

  return {
    getByValue,
    getallCountries,
  };
};

export default useContries;
