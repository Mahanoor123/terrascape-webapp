import { motion } from "framer-motion";
import { SearchIcon } from "lucide-react";

const SearchBar = ({ query, setQuery }) => {
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <motion.div
      className="w-[90%] sm:w-[80%] md:w-[60%] lg:w-[50%] flex items-center justify-between mx-auto my-6 px-4 py-2 border border-blue-950 shadow-md rounded-3xl bg-white/5 backdrop-blur-md transition-all focus-within:ring-2 focus-within:ring-blue-500"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
    >
      <SearchIcon className="text-blue-950 w-5 h-5 sm:w-6 sm:h-6" />
      <motion.input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search country..."
        className="ml-3 w-full bg-transparent text-sm sm:text-base text-blue-950 placeholder:text-blue-400 focus:outline-none"
      />
    </motion.div>
  );
};

export default SearchBar;
