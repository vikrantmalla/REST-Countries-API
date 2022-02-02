import Countries from '../component/Countries';
import Filter from '../component/Filter';
import Search from '../component/Search';
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    max-width: 1400px;
    margin: 3rem auto;
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`
const Loading = styled.h1`
    color: ${(props) => props.theme.text};
    position: fixed;
    top:50%;
    left:45%;
    font-size: 1.5rem;
    font-weight: bolder;
`
const ContainerHead = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 2rem;
    @media (min-width : 42em){
        justify-content: space-between;
        flex-direction: row;
        padding: 0 1rem;
    }

`
const HomePage = ({ serverError, isLoading, countries }) => {
    return <>
        <Container>
            {serverError && <h2>{serverError}</h2>}
            {
                isLoading ? <Loading>Loading..</Loading> :
                    <>
                        <ContainerHead>
                            <Search />
                            <Filter />
                        </ContainerHead>
                        <section>
                            <Countries countries={countries} />
                        </section>
                    </>
            }
        </Container>
    </>
};

export default HomePage;
