import "../index.css";
import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import Pagination from "./Pagination";

const COUNTRIES_PER_PAGE = 12;

const CardSection = ({ searchQuery }) => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchCountries = async () => {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const data = await res.json();
      setCountries(data);
      setFilteredCountries(data);
    };
    fetchCountries();
  }, []);

  useEffect(() => {
    const filtered = searchQuery
      ? countries.filter((country) =>
          country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : countries;

    setFilteredCountries(filtered);
    setCurrentPage(1);
  }, [searchQuery, countries]);

  const startIndex = (currentPage - 1) * COUNTRIES_PER_PAGE;
  const currentCountries = filteredCountries.slice(
    startIndex,
    startIndex + COUNTRIES_PER_PAGE
  );

  const totalPages = Math.ceil(filteredCountries.length / COUNTRIES_PER_PAGE);

  return (
    <>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-3 gap-y-10 py-10 px-6 place-items-center">
        {currentCountries.length ? (
          currentCountries.map((country, index) => (
            <CountryCard key={index} country={country} />
          ))
        ) : (
          <p className="text-white col-span-full text-center text-lg">
            No countries found.
          </p>
        )}
      </section>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default CardSection;
