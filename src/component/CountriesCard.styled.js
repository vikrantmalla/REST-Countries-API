import styled from 'styled-components'

export const Card = styled.div `
    background-color: ${(props) => props.theme.elementbg};
    color: ${(props) => props.theme.text};
    box-shadow: 0 3px 8px rgb(0 0 0 / 24%);
    border-radius: .3rem;
    cursor: pointer;
`
export const CardHead = styled.div `
    img {
        border-radius: .3rem .3rem 0 0;
        width: 100%;
        height: 160px;
        object-fit: cover;
    }

`
export const CardBody = styled.div `
    display: flex;
    flex-direction: column;
    gap: .8rem;
    margin: 1.5rem 1rem 2.8rem 1rem;
    h1 {
       
        font-weight: 700;
        font-size: 1.2rem;
    }
    p {
        font-weight: 300;
        span {
            font-weight: 700;
        }
    }
`