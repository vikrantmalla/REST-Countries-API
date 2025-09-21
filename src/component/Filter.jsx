import { useContext } from "react";
import styled from "styled-components";
import { FilterContext } from "../helpers/FilterContext";

export const Wrapper = styled.div`
  position: relative;
`;
export const Dropdown = styled.select`
  background-color: ${(props) => props.theme.elementbg};
  color: ${(props) => props.theme.text};
  padding: 18px 47px 18px 24px;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  border: none;
  box-shadow: rgba(41, 44, 46, 0.3) 0px 1px 2px 0px,
    rgba(27, 29, 31, 0.15) 0px 2px 6px 2px;
  border-radius: 0.2rem;
  width: 200px;
  appearance: none;
  cursor: pointer;
  option {
    background-color: ${(props) => props.theme.elementbg};
    font-size: 1rem;
  }
  @media (min-width: 62em) {
    width: 250px;
  }
`;
export const FilterIcon = styled.div`
  i {
    position: absolute;
    right: 160px;
    bottom: 20px;
    color: ${(props) => props.theme.text};
    @media (min-width: 42em) {
      right: 20px;
    }
    @media (min-width: 62em) {
      bottom: 20px;
      right: 20px;
    }
  }
`;
const Filter = () => {
  const context = useContext(FilterContext);
  return (
    <>
      <Wrapper>
        <Dropdown
          onChange={context.filterChange}
          id="continent"
          name="continent"
          value={context.filterParam}
          aria-label="filter continent"
        >
          <option value="All">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </Dropdown>
        <FilterIcon>
          <i className="fas fa-angle-down" />
        </FilterIcon>
      </Wrapper>
    </>
  );
};

export default Filter;
