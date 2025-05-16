import { useLoaderData } from "react-router-dom";
import { motion } from "framer-motion";
import {
  CoinsIcon,
  Earth,
  Globe,
  Landmark,
  LandPlot,
  LanguagesIcon,
  LineChart,
  TimerIcon,
} from "lucide-react";

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
    area,
    name,
    capital,
    region,
    subregion,
    population,
    flags,
    languages,
    currencies,
    continents,
    borders,
    timezones,
    maps,
  } = country;

  const coordinates = country.latlng || [];
  const lat = coordinates[0];
  const lng = coordinates[1];
  const mapUrl = `https://maps.google.com?q=${lat},${lng}`;
  const embedMapUrl = `https://maps.google.com/maps?q=${lat},${lng}&z=5&output=embed`;

  const languageList = languages ? Object.values(languages).join(" ") : "N/A";
  const currencyList = currencies
    ? Object.values(currencies)
        .map((cur) => `${cur.name} (${cur.symbol})`)
        .join(", ")
    : "N/A";

  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center px-4 md:px-10 py-10 text-black shadow-2xl rounded-lg"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-full max-w-7xl bg-blue-950 text-white p-6 md:p-10 rounded-2xl shadow-lg my-10">
        <div className="w-full max-w-2xl h-[250px] sm:h-[400px] md:h-[60vh] mx-auto mb-8">
          <motion.img
            src={flags.svg}
            alt={name.common}
            className="w-full h-full object-cover rounded-lg shadow-[0_0_15px_rgba(59,130,246,0.6)] animate-pulse"
            initial={{ scale: 0.9, rotate: -2 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.5 }}
          />
        </div>

        <motion.div
          className="w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center italic my-8">
            {name.common}
          </h1>
          <p className="text-center mx-auto max-w-4xl text-base sm:text-lg my-6">
            "{name.common} is the country with {population.toLocaleString()}{" "}
            population. Its official name is {name.official}. It is situated on{" "}
            {area} area. The important information is as follows:"
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 bg-blue-900 rounded-2xl mx-auto my-8 px-6 py-10 max-w-4xl">
            <div className="flex gap-2 items-center">
              <Landmark className="h-15 w-15 bg-blue-200 text-blue-950 rounded-full p-2 shadow-[0_0_15px_rgba(59,130,246,0.6)] animate-pulse" />
              <strong>Capital:</strong>
              <p>{capital ? capital[0] : "N/A"}</p>
            </div>
            <div className="flex gap-2 items-center">
              <LandPlot className="h-15 w-15 bg-blue-200 text-blue-950 rounded-full p-2 shadow-[0_0_15px_rgba(59,130,246,0.6)] animate-pulse" />
              <strong>Continents:</strong>
              <p>{continents}</p>
            </div>
            <div className="flex gap-2 items-center">
              <Globe className="h-15 w-15 bg-blue-200 text-blue-950 rounded-full p-2 shadow-[0_0_15px_rgba(59,130,246,0.6)] animate-pulse" />
              <strong>Region:</strong>
              <p>{region}</p>
            </div>
            <div className="flex gap-2 items-center">
              <Earth className="h-15 w-15 bg-blue-200 text-blue-950 rounded-full p-2 shadow-[0_0_15px_rgba(59,130,246,0.6)] animate-pulse" />
              <strong>SubRegion:</strong>
              <p>{subregion || "N/A"}</p>
            </div>
            <div className="flex gap-2 items-center">
              <TimerIcon className="h-15 w-15 bg-blue-200 text-blue-950 rounded-full p-2 shadow-[0_0_15px_rgba(59,130,246,0.6)] animate-pulse" />
              <strong>Timezone:</strong>
              <p>{timezones?.join(", ")}</p>
            </div>
            <div className="flex gap-2 items-center">
              <CoinsIcon className="h-15 w-15 bg-blue-200 text-blue-950 rounded-full p-2 shadow-[0_0_15px_rgba(59,130,246,0.6)] animate-pulse" />
              <strong>Currency:</strong>
              <p>{currencyList}</p>
            </div>
            <div className="flex gap-2 items-center">
              <LineChart className="h-15 w-15 bg-blue-200 text-blue-950 rounded-full p-2 shadow-[0_0_15px_rgba(59,130,246,0.6)] animate-pulse" />
              <strong>Borders:</strong>
              <p>{borders?.join(" ")}</p>
            </div>
            <div className="flex gap-2 items-center">
              <LanguagesIcon className="h-15 w-15 bg-blue-200 text-blue-950 rounded-full p-2 shadow-[0_0_15px_rgba(59,130,246,0.6)] animate-pulse" />
              <strong>Languages:</strong>
              <p>{languageList}</p>
            </div>
          </div>

          <div className="mt-12 max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-white my-6">
              Country Location
            </h2>
            <div className="w-full h-[300px] sm:h-[400px] overflow-hidden rounded-2xl shadow-lg">
              <iframe
                src={embedMapUrl}
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Country Location Map"
              ></iframe>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-6">
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-center underline hover:text-blue-900 block mt-2 text-2xl"
              >
                Location on Google maps
              </a>
              <div className=" py-4 flex gap-4 items-center">
                <p className="text-blue-950 bg-blue-100 px-4 py-2 rounded-lg">
                  Latitude: {lat}°,
                </p>
                <p className="text-blue-950 bg-blue-100 px-4 py-2 rounded-lg">
                  Longitude: {lng}°
                </p>
              </div>
            </div>
          </div>
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
