import { useState, createContext } from "react";


export  const FilterContext = createContext();


export default function FilterProvider(props) {
    const [query, setQuery] = useState("");
    const [filterParam, setFilterParam] = useState("All");

    //get searched country from the searchfield
    function queryChange(event) {
        const input = event.target.value;
        input.length > 0 ? setQuery(input) : setQuery("");
    }

    //get selected region from dropdown
    function filterChange(event) {
        const region = event.target.value;
        setFilterParam(region);
    }
    const filterContext = {
        query, filterParam, queryChange, filterChange
    }
    return (

        <FilterContext.Provider value={filterContext}>
            {props.children}
        </FilterContext.Provider>

    );
}


export { FilterProvider };