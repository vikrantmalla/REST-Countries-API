import styled from 'styled-components'

export const Container = styled.header `
    background-color: ${(props) => props.theme.elementbg};
`

export const Navbar = styled.nav `
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
        font-size: 1rem;
        font-weight: bold;
        color: ${(props) => props.theme.text};
    }
    @media (min-width: 42em) {
        padding: 1rem 4rem;
        h1{
            font-size: 1.5rem;
        }
    }

`
export const Toggle = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: .5rem;
    padding: .8rem;
    border-radius: .3rem;
    cursor: pointer;
    &:hover {
        background-color: ${(props) => props.theme.background};
    }
    i {
        color: ${(props) => props.theme.text};
    }
    p {
        color: ${(props) => props.theme.text};
        font-size: .8rem;
        font-weight: 600;
        @media (min-width: 42em) {
            p{
                font-size: 1rem;
            }
        }
    }

`