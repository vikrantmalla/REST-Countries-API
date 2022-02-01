import { useContext } from 'react';
import styled from "styled-components";
import { FilterContext } from '../helpers/FilterContext';

export const Wrapper = styled.div`
position: relative;
input{
    box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
    border-radius: .3rem;
    border: none;
    padding: 18px 20px 18px 54px;
    width: 100%;
    background-color: ${(props) => props.theme.elementbg};
    box-shadow: rgba(41, 44, 46, 0.3) 0px 1px 2px 0px,
    rgba(27, 29, 31, 0.15) 0px 2px 6px 2px;
    color: ${(props) => props.theme.text};
    font-weight: 600;
   ::placeholder{
        color: ${(props) => props.theme.text};
        font-weight: normal;
        font-size: .9rem;
        line-height: 1.2rem;
    }
    @media (min-width: 62em) {
        width: 400px;
    }
}
i{
    left: 20px;
    bottom: 18px;
    position: absolute;
    color: ${(props) => props.theme.text};
    @media (min-width: 42em) {
       bottom : 22px;
    }
}
`
const Search = () => {
    const context = useContext(FilterContext);
    return (
        <>
            <Wrapper>
                <input
                    type="search"
                    id="search"
                    name="query"
                    onChange={context.queryChange}
                    value={context.query}
                    placeholder="Search for a country..."
                    autoComplete="off"
                />
                <i className="fas fa-search" />
            </Wrapper>
        </>
    );
};

export default Search;
