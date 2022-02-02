import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components'


export const BorderCountry = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    gap: .8rem;
    margin: 1.5rem  0;
    p {
        font-weight: 600;
        font-size: 1rem;
    }
    a {
        text-decoration: none;
        color: ${(props) => props.theme.text};
        margin: .4rem 0;
        span {
            cursor:pointer;
            padding: .4rem 1rem;
            font-size: .8rem;
            background-color: ${(props) => props.theme.elementbg};
            box-shadow: rgba(41, 44, 46, 0.3) 0px 1px 2px 0px,
            rgba(27, 29, 31, 0.15) 0px 2px 6px 2px;
        }
    }
    @media (min-width: 62em) {
        a {
            span {
                padding: .6rem 2rem;
            }
        }
    }
`

const BorderCountries = ({ borders, countries }) => {
    const getBorderCountryFullname = (altName) => {
        const isMatchName = countries.find((country) => country.cca3 === altName);
        return isMatchName.name.common
    }
    return (
        <>
            <BorderCountry>
                <p>Border Countries: </p>
                {borders ? (
                    borders.map((borderCountry, index) => {
                        return (
                            <Link to={`/${getBorderCountryFullname(borderCountry).split(" ").join("_")}`} key={index}>
                                <span key={index}>
                                    {getBorderCountryFullname(borderCountry)}
                                </span>
                            </Link>
                        );
                    })
                ) : (
                    <span>None</span>
                )}
            </BorderCountry>
        </>);
};

export default BorderCountries;