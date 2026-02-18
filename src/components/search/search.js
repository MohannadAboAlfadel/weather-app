import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from "../../api";

const Search = ({OnSearchChange}) => {
  const [search, setSearch] = useState(null);

  const handleOnChange =(searchData) =>{
    setSearch(searchData);
  OnSearchChange(searchData);
}
const loadOptions=(inputValue) =>{
    return fetch(`${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`, geoApiOptions)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));

}
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