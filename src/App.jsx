import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ThemeContext, ThemeProvider } from 'styled-components'
import GlobalStyles from "./styles/Global"
import { darkTheme, lightTheme } from './styles/Theme'
import { ContentWrapper } from './styles/Global'
import useFetch from './helpers/usefetch'
import Header from './component/Header'
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage'
import { FilterProvider } from './helpers/FilterContext'

function App() {
  const [theme, toggleTheme] = useState('dark');
  const [countries, setCountries] = useState([]);

  const { data, isLoading, serverError } = useFetch(
    "https://restcountries.com/v3.1/all?fields=name,flags,region,population,subregion,capital,tld,currencies,languages,borders"
  );

  //get all countries
  useEffect(() => {
    setCountries(data);
  }, [data]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
        <GlobalStyles />
        <BrowserRouter>
          <FilterProvider>
            <ContentWrapper>
              <Header />
              <Routes>
                <Route path="/" element={<HomePage countries={countries} isLoading={isLoading} serverError={serverError} />} />
                <Route path="/:country" element={<DetailPage countries={countries}/>}
                />
              </Routes>
            </ContentWrapper>
          </FilterProvider>
        </BrowserRouter>

      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
