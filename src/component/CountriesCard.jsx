import { Link } from "react-router-dom";
import { Card, CardHead, CardBody } from './CountriesCard.styled';
const CountriesCard = ({ country }) => {
    const countryName = country.name.common;
    const population = new Intl.NumberFormat("en-GB").format(country.population);
    const countryDetails =  countryName.split(" ").join("_");
    return (
        <>
            <Card key={country.cca3}>
                <Link to={`/${countryDetails}`}>
                    <CardHead>
                        <img src={country.flags.svg} alt={`${country.name.common} flag`} />
                    </CardHead>
                </Link>
                <CardBody>
                    <h1>{country.name.common}</h1>
                    <p><span>Population:</span> {population}</p>
                    <p><span>Region:</span> {country.region}</p>
                    <p><span>Capital:</span> {country.capital ? country.capital : "none"}</p>
                </CardBody>
            </Card>
        </>
    );
};

export default CountriesCard;
