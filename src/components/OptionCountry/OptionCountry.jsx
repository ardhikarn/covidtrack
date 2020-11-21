import React, { useState, useEffect } from "react";
import axios from "axios";
import { FormControl, NativeSelect } from "@material-ui/core";
import Styles from "./OptionCountry.module.css";

const OptionCountry = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountry();
  }, []);

  function getCountry() {
    axios
      .get("https://covid.mathdro.id/api/countries")
      .then((response) => {
        let { countries } = response.data;
        countries = countries.map((item) => item.name);
        setCountries(countries);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  return (
    <FormControl className={Styles.formControl}>
      <NativeSelect onChange={(event) => handleCountryChange(event)}>
        <option value="">Global</option>
        {countries.map((country, index) => (
          <option key={index} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default OptionCountry;
