import styled from 'styled-components'
export const NotFound = styled.h1 `
    color: ${(props) => props.theme.text};
    position: fixed;
    top:50%;
    left:45%;
    font-size: 1.5rem;
    font-weight: bolder;
`
export const DetailsCard = styled.div `
    display: grid;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin: 4rem 2rem;
    @media (min-width: 63em) {
        grid-template-columns: repeat(2, 1fr);
    }
`
export const FlagWrapper = styled.div `
    img {
        width: 100%;
    }
`
export const Content = styled.div `
    color: ${(props) => props.theme.text};
    h1{
        margin-bottom: 1rem;
        font-weight: 700;
        font-size: 2rem;
    }
`

export const GeneralInfo = styled.div `
    display: grid;
    gap: 1rem;
    margin-bottom: 1rem;
    @media (min-width: 43em) {
        grid-template-columns: repeat(2,1fr);
    }
`
export const GeoInfo = styled.div `
p {
    margin-bottom: .8rem;
    font-weight: 400;
    span {
        font-weight: 600;
        font-size: 1rem;
    }
}
`
export const MoreInfo = styled.div `
p {
    margin-bottom: .8rem;
    font-weight: 400;
    span {
        font-weight: 600;
        font-size: 1rem;
    }
}
`