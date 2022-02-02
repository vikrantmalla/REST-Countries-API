import { useState, useContext } from "react"
import { FilterContext } from "../helpers/FilterContext";
import CountriesCard from "./CountriesCard";
import styled from 'styled-components';


const CountriesList = styled.div `
    display: grid;
    justify-content: center;
    align-items: center;
    gap: 2.5rem;
    margin: 1rem 2rem;
    @media (min-width : 42em){
        grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width : 62em){
        grid-template-columns: repeat(4, 1fr);
        margin: 1rem;
    }
`
const Countries = ({ countries }) => {

    const [searchParam] = useState(["name"]);

    const context = useContext(FilterContext);
    function searchAndFilter(items) {
        // eslint-disable-next-line array-callback-return
        return items?.filter((item) => {
            if (item.region === context.filterParam) {
                return searchParam.some((newItem) => {
                    return (
                        item[newItem]?.common
                            .toString()
                            .toLowerCase()
                            .indexOf(context.query.toLowerCase()) > -1
                    );
                });
            } else if (context.filterParam === "All") {
                return searchParam.some((newItem) => {
                    return (
                        item[newItem]?.common
                            .toString()
                            .toLowerCase()
                            .indexOf(context.query.toLowerCase()) > -1
                    );
                });
            }
        });
    }
    return (

        countries && (
            <CountriesList>
                {
                    searchAndFilter(countries).map((country, index) => {
                        return (
                            <CountriesCard key={index} country={country} />
                        )

                    })
                }
            </CountriesList>

        )
    )
};

export default Countries;
