import "../index.css";

import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard";

const CardSection = () => {
  const [countries, setCountries] = useState([]);

  const fetchCountries = async () => {
    try {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const data = await res.json();
      console.log("countries data", data);
      setCountries(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);
  return (
    <>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-3 gap-y-10 py-20 px-6 place-items-center">
        {countries.map((country, index) => (
          <CountryCard key={index} country={country} />
        ))}
      </section>
    </>
  );
};

export default CardSection;
