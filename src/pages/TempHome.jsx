import { useState } from "react";
import CardSection from "../components/CardSection";
import Hero from "../components/Hero";
import Searchbar from "../components/Searchbar";

const TempHome = () => {
  const [query, setQuery] = useState("");

  const handleSearch = (val) => {
    setQuery(val);
  };

 return (
      <>
        <Hero />
        <Searchbar query={query} setQuery={setQuery} />
        <CardSection searchQuery={query} />
      </>
      )
};

export default TempHome;
