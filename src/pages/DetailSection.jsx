import { useLoaderData } from "react-router-dom";
import { motion } from "framer-motion";
import {
  CoinsIcon,
  CurrencyIcon,
  Earth,
  Globe,
  Landmark,
  LandPlot,
  Star,
  TimerIcon,
} from "lucide-react";
import background from "../assets/blue-bg.jpg";

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
    unMember
  } = country;

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
            className="w-full h-full object-cover rounded-lg"
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
          <h1 className="text-6xl font-bold mb-8 text-center italic">
            {name.common}
          </h1>
          <p className="w-[60vw] m-auto text-center">
            "{name.common} is the country with {population.toLocaleString()}{" "}
            population. Its official name is {name.official}. It is situated on{" "}
            {area} area. The important information is as follows:"
          </p>

          <div className="my-12">
            <div className="flex items-center justify-between w-[60vw] m-auto my-4">
              <strong>Borders:</strong>
              <p>{borders?.join(" ")}</p>
            </div>
            <div className="flex items-center justify-between w-[60vw] m-auto my-4">
              <strong>Languages:</strong>
              <p>{languageList}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-12 bg-blue-900 rounded-2xl w-[60vw] m-auto my-8 px-32 py-12">
            <div className="flex gap-2 items-center">
              <Landmark className="h-15 w-15 bg-blue-200 text-blue-950 rounded-full p-2" />
              <p>{capital ? capital[0] : "N/A"}</p>
            </div>
            <div className="flex gap-2 items-center">
              <LandPlot className="h-15 w-15 bg-blue-200 text-blue-950 rounded-full p-2" />
              <p>{continents}</p>
            </div>
            <div className="flex gap-2 items-center">
              <Globe className="h-15 w-15 bg-blue-200 text-blue-950 rounded-full p-2" />
              <p>{region}</p>
            </div>
            <div className="flex gap-2 items-center">
              <Globe className="h-15 w-15 bg-blue-200 text-blue-950 rounded-full p-2" />
              <p>{region}</p>
            </div>
            <div className="flex gap-2 items-center">
              <Earth className="h-15 w-15 bg-blue-200 text-blue-950 rounded-full p-2" />
              <p>{subregion || "N/A"}</p>
            </div>
            <div className="flex gap-2 items-center">
              <TimerIcon className="h-15 w-15 bg-blue-200 text-blue-950 rounded-full p-2" />
              <p>{timezones?.join(", ")}</p>
            </div>
            <div className="flex gap-2 items-center">
              <CoinsIcon className="h-15 w-15 bg-blue-200 text-blue-950 rounded-full p-2" />
              <p>{currencyList}</p>
            </div>
             <div className="flex gap-2 items-center">
              <CoinsIcon className="h-15 w-15 bg-blue-200 text-blue-950 rounded-full p-2" />
              <p>{unMember}</p>
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
