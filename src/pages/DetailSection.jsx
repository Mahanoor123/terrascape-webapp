import { useLoaderData } from "react-router-dom";
import { motion } from "framer-motion";

const DetailSection = () => {
  const country = useLoaderData();

  if (!country) {
    return (
      <section className="h-screen w-full flex items-center justify-center text-xl">
        <p>Loading country details...</p>
      </section>
    );
  }

  const {
    name,
    capital,
    region,
    subregion,
    population,
    flags,
    languages,
    currencies,
    timezones,
  } = country;

  const languageList = languages ? Object.values(languages).join(", ") : "N/A";
  const currencyList = currencies
    ? Object.values(currencies)
        .map((cur) => `${cur.name} (${cur.symbol})`)
        .join(", ")
    : "N/A";

  return (
    <motion.section
      className="min-h-screen flex flex-col  my-10 rounded-lg text-black px-6 md:px-16 py-10"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="">
        <motion.img
          src={flags.svg}
          alt={name.common}
          className=" w-full h-[60vh] object-fit rounded-lg shadow-lg"
          initial={{ scale: 0.9, rotate: -2 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.5 }}
        />

        <motion.div
          className="space-y-3 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold mb-8 text-center text-blue-950">
            {name.common}
          </h1>
          <p>
            <strong>Capital:</strong> {capital ? capital[0] : "N/A"}
          </p>
          <p>
            <strong>Region:</strong> {region}
          </p>
          <p>
            <strong>Subregion:</strong> {subregion || "N/A"}
          </p>
          <p>
            <strong>Population:</strong> {population.toLocaleString()}
          </p>
          <p>
            <strong>Timezones:</strong> {timezones?.join(", ")}
          </p>
          <p>
            <strong>Languages:</strong> {languageList}
          </p>
          <p>
            <strong>Currencies:</strong> {currencyList}
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default DetailSection;

export const fetchSingleCountry = async ({ params }) => {
  try {
    const res = await fetch(`https://restcountries.com/v3.1/name/${params.id}`);
    if (!res.ok) {
      throw new Response("Country not found", { status: 404 });
    }
    const data = await res.json();
    return data[0];
  } catch (error) {
    console.error("Failed to fetch country:", error);
    throw error;
  }
};
