import {  useParams } from "react-router-dom";
import BorderCountries from "./BorderCountries";
import { DetailsCard, Content, FlagWrapper, GeneralInfo, GeoInfo, MoreInfo,  NotFound } from "./CountryDetails.styled";

const CountryDetails = ({ countries }) => {
    // console.log(countries)
    const { country } = useParams();
    const trimmedCountry = country.replace(/_/g, " ");
    const foundCountry = countries.find(
        (country) => country.name.common === trimmedCountry
    );
   
    if (foundCountry === undefined)
        return (
            <NotFound>Not Found</NotFound>
        );
    const { flags, name, population, region, subregion, capital, tld, currencies, languages, borders } = foundCountry
    return (
        <>
            <DetailsCard>
                <FlagWrapper>
                    <img src={flags.png} alt={`${name.common} flag`} />
                </FlagWrapper>
                <Content>
                    <h1>{name.common}</h1>
                    <GeneralInfo>
                        <GeoInfo>
                            <p><span>Nativa Name: </span>{Object.values(name.nativeName)[0].common} </p>
                            <p><span>Population: </span> {new Intl.NumberFormat("en-GB").format(population)}</p>
                            <p><span>Region: </span>{region}</p>
                            <p><span>Sub Region: </span>{subregion ? subregion : "none"}</p>
                            <p><span>Capital: </span>{capital ? capital : "none"}</p>
                        </GeoInfo>
                        <MoreInfo>
                            <p><span>Top Level Domain: </span>{tld[0]}</p>
                            <p><span>Currencies:{" "}</span>
                                {
                                    currencies
                                        ? Object.values(currencies)[0]
                                            ?.name.split(" ")
                                            .join(", ")
                                        : "No own currency"
                                }
                            </p>
                            <p><span>Languages: </span>{Object.values(languages).join(", ")}</p>
                        </MoreInfo>
                    </GeneralInfo>
                    <BorderCountries borders={borders} countries={countries}/>
                </Content>
            </DetailsCard>
        </>
    );
};

export default CountryDetails;


