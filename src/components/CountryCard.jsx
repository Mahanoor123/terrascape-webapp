import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const CountryCard = ({ country }) => {
  const [flipped, setFlipped] = useState(false);
  const navigate = useNavigate();

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  const handleNavigate = () => {
    const encodedName = encodeURIComponent(country.name.common);
    navigate(`/country/${encodedName}`);
  };

  return (
    <>
      <motion.div
       className="card-container"
        onClick={handleFlip}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className={`card-inner ${flipped ? "flipped" : ""}`}>
          <div className="card-front">
            <motion.img
              src={country.flags.png}
              alt={country.name.common}
              className="country-flag waving-flag"
            />
          </div>
          <div className="card-back flex flex-col justify-center items-center gap-1">
            <h3 className="text-3xl font-[Roboto] italic font-bold">
              {country.name.common}
            </h3>
            <p>
              <strong>Capital:</strong>{" "}
              {country.capital ? country.capital[0] : "No Capital"}
            </p>
            <p>
              <strong>Region:</strong> {country.region}
            </p>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNavigate();
              }}
              className="mt-2 px-6 py-2 bg-blue-950 text-white rounded-lg hover:bg-blue-800 cursor-pointer"
            >
              View Details
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default CountryCard;
