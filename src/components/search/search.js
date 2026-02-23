import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from "../../api";

const Search = ({ OnSearchChange }) => {
  const [search, setSearch] = useState(null);

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    OnSearchChange(searchData);
  };

  const loadOptions = async (inputValue) => {
    const query = inputValue ? inputValue.trim() : "";

    if (!query || query.length < 2) {
      return { options: [] };
    }

    try {
      const response = await fetch(
        `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${encodeURIComponent(
          query
        )}`,
        geoApiOptions
      );

      console.log("Geo API status:", response.status);

      if (!response.ok) {
        return { options: [] };
      }

      const result = await response.json();
      const data = Array.isArray(result.data) ? result.data : [];

      const options = data.map((city) => ({
        value: `${city.latitude} ${city.longitude}`,
        label: `${city.name}, ${city.countryCode}`,
      }));

      return { options };
    } catch (error) {
      console.error("Geo API error:", error);
      return { options: [] };
    }
  };

  return (
    <AsyncPaginate
      placeholder="Search for a city"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
};

export default Search;
