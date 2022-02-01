import {useContext} from 'react';
import { Container, Navbar, Toggle } from './Header.styled';
import { ThemeContext } from 'styled-components';
const Header = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <>
            <Container>
                <Navbar>
                    <h1>Where in the World?</h1>
                    <Toggle onClick={() => toggleTheme(theme === 'dark' ? 'light' : 'dark')}>
                        <i className="fas fa-moon"/>
                        <p>Dark Mode</p>
                    </Toggle>
                </Navbar>
            </Container>

        </>
    )

};

export default Header;
