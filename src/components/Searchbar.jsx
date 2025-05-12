import { motion } from "framer-motion";
import { SearchIcon } from "lucide-react";

const SearchBar = ({ query, setQuery }) => {
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <motion.div
      className="w-full flex justify-center items-center mx-auto my-8 border-[1px] border-blue-950 shadow-md md:w-[50%] rounded-4xl focus:outline-none transition-all"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileFocus={{ scale: 1.05, boxShadow: "0 0 10px rgba(59,130,246,0.6)" }}
      whileHover={{ scale: 1.02 }}
    >
      <SearchIcon className="mx-4 text-blue-950" />
      <motion.input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search country..."
        className="p-3 w-full bg-transparent outline-0"
      />
    </motion.div>
  );
};

export default SearchBar;
