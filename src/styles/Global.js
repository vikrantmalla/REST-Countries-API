import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

const GlobalStyles = createGlobalStyle `

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Nunito Sans', sans-serif;
}
body {
    width: 100%;
    height: 100%;
    background:  ${(props) => props.theme.background};
    margin: 0;
}
img {
    max-width: 100%;
}

`
export default GlobalStyles

export const ContentWrapper = styled.main `
    max-width: 1440px;
    margin: auto;
`