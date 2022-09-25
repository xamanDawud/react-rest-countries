import React from "react";
import "./Display_Countries.css";

const Display_Countries = (props) => {
  const { area, name, region, population, flags } = props.country;
  return (
    <section className="container">
      <div className="country_div">
        <img style={{ width: "200px" }} src={flags.png} alt="" />
        <h1>Country Name: {name.common}</h1>
        <p>Area:{area}</p>
        <p>Region: {region}</p>
        <p>Population:{population}</p>
      </div>
    </section>
  );
};

export default Display_Countries;
