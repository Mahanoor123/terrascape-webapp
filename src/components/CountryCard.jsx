import { useState } from "react";

const CountryCard = ({country}) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <>
      <div className="card-container" onClick={handleFlip}>
          <div className={`card-inner ${flipped ? "flipped" : ""}`}>
            <div className="card-front">
              <img
                src={country.flags.png}
                alt={country.name.common}
                className="country-flag"
              />
            </div>
            <div className="card-back">
              <h3>{country.name.common}</h3>
              <p>
                <strong>Capital:</strong>{" "}
                {country.capital ? country.capital[0] : "No Capital"}
              </p>
              <p>
                <strong>Region:</strong> {country.region}
              </p>
              <p>
                <strong>Population:</strong>{" "}
                {country.population.toLocaleString()}
              </p>
              <button>More Info</button>
            </div>
          </div>
        </div>
    </>
  );
};

export default CountryCard;
