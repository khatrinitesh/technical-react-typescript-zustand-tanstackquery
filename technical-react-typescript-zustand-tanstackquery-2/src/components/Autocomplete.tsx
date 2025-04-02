import { motion } from "framer-motion";
import { useEffect } from "react";
import { useAutocompleteStore } from "../store/useAutocompleteStore";
import { autocompleteConfig } from "../constants/constants";

const Autocomplete:React.FC = () => {
  const { query, setQuery, filteredSuggestions, setFilteredSuggestions } = useAutocompleteStore();

  useEffect(() => {
    if (query.length > 0) {
      const filtered = autocompleteConfig.suggestions.filter((item) =>
        item.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredSuggestions(filtered);
    } else {
      setFilteredSuggestions([]);
    }
  }, [query, setFilteredSuggestions]);

  return (
    <div className="relative w-72">
      {/* Input Field */}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={autocompleteConfig.placeholder}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {/* Suggestions Dropdown */}
      {filteredSuggestions.length > 0 && (
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-lg shadow-md mt-1"
        >
          {filteredSuggestions.map((suggestion, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.05 }}
              className="px-4 py-2 cursor-pointer hover:bg-blue-100 transition-all"
              onClick={() => setQuery(suggestion)}
            >
              {suggestion}
            </motion.li>
          ))}
        </motion.ul>
      )}
    </div>
  );
};

export default Autocomplete;
