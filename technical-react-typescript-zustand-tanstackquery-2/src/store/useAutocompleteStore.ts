import { create } from "zustand";


interface AutocompleteStore {
    query: string;
    setQuery: (query: string) => void;
    filteredSuggestions: string[];
    setFilteredSuggestions: (suggestions: string[]) => void;
  }

  
  export const useAutocompleteStore = create<AutocompleteStore>((set) => ({
    query: "",
    setQuery: (query) => set({ query }),
    filteredSuggestions: [],
    setFilteredSuggestions: (suggestions) => set({ filteredSuggestions: suggestions }),
  }));