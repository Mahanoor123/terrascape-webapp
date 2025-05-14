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
      className="min-h-screenflex flex-col shadow-2xlrounded-lg text-black px-6 md:px-16 py-10"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="m-auto w-[85vw] shadow-lg bg-blue-950 p-6 rounded-2xl text-white  my-10 ">
        <div className="w-[55vw] h-[60vh] m-auto">
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
          className="m-auto w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h1 className="text-6xl font-bold my-8 text-center italic">
            {name.common}
          </h1>
          <p className="w-[60vw] m-auto my-8 text-center">
            "{name.common} is the country with {population.toLocaleString()}{" "}
            population. Its official name is {name.official}. It is situated on{" "}
            {area} area. The important information is as follows:"
          </p>

          <div className="grid grid-cols-2 gap-12 bg-blue-900 rounded-2xl w-[60vw] m-auto my-8 px-10 py-12">
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

          <div className="mt-12 w-[60vw] m-auto">
            <h2 className="text-4xl font-bold text-center text-white my-8">
              Country Location
            </h2>
            <div className="w-full h-[400px] m-auto overflow-hidden rounded-2xl shadow-lg">
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
            <div className="flex justify-between items-center my-4">
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
