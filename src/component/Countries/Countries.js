import React, { useEffect, useState } from "react";
import "./Countries.css";
import Display_Countries from "./Display_Countries/Display_Countries";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div>
      <h1>This is Came from Countries</h1>
      <div className="country-box-container">
        {countries.map((country) => (
          <Display_Countries country={country}> </Display_Countries>
        ))}
      </div>
    </div>
  );
};

export default Countries;
