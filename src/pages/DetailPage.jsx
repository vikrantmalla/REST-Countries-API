import { NavLink } from 'react-router-dom';
import CountryDetails from '../component/CountryDetails';
import styled from 'styled-components'

const DetailPage = styled.section`
  margin-top: 2rem;
  a {
      color: ${(props) => props.theme.text};
      text-decoration: none;
  }
`
const BackLink = styled.span`
    cursor:pointer;
    margin-left: 2rem;
    padding: .6rem 1rem;
    font-size: .8rem;
    background-color: ${(props) => props.theme.elementbg};
    box-shadow: rgba(41, 44, 46, 0.3) 0px 1px 2px 0px,
    rgba(27, 29, 31, 0.15) 0px 2px 6px 2px;
    i {
      margin-right: 1rem;
    }
`

const DetailView = ({ countries }) => {
  return (
    <>
      <DetailPage>
        <NavLink to="/"><BackLink> <i className="fas fa-arrow-left"/>Back</BackLink></NavLink>
        <CountryDetails countries={countries} />
      </DetailPage>
    </>


  )
};

export default DetailView;
