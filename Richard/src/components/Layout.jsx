import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
    return (
        <MenuHome>
            <ImgLogo src="https://emtstatic.com/2019/10/logo-elmundotoday2.png" alt="" />
            <Nav>
                <Link to="/">Home</Link>
                <Link to="/favorites">Favorites</Link>
            </Nav>
            <main>{children}</main>
        </MenuHome>
    );
};

Layout.propTypes = {
    children: PropTypes.func.isRequired,
};

const MenuHome = styled.div`
display: flex;
flex-direction: column;
align-items: center;
    & Nav{
        width: 100%;
        & a{
            text-decoration: none;
            font-size: 20px;
            color: white;

        }
    }
`

const ImgLogo = styled.img`
font-size: 20px;
height: 65px;
margin-bottom: 15px;
margin-top: 10px;
`

const Nav = styled.nav`
    display: flex;
    justify-content: space-around;
    padding: 10px;
    background-color: #ff6900;
    color: #fff;
    list-style: none;
    height: 20px;
    & Link{
        color: red;
    }
`;

export default Layout;
