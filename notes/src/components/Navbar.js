import React from 'react'
import { AppBar, Toolbar, styled, Typography, Box } from '@mui/material';
import { useAppContext } from '../context/AppContext';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { NavLink } from 'react-router-dom';


const Nav = styled(AppBar) (( {navColor} ) => ({
    background: `${navColor}`,
    height: 'calc(75px + 1vw)',
    justifyContent: 'center',
    padding: '0 1vw',
    position: 'relative',
    boxShadow: 'none',
    borderRadius: '10px',
}))

const InnerNav = styled(Toolbar)`
  padding: 0px 1vw;
  display: flex;
  align-items: center;
`;

const Logo = styled(Typography) (({textcolor}) => ({
    fontSize: 'calc(17px + 1vw)',
    margin: "0 1vw 0 0",
    color: `${textcolor}`,
    display: 'grid',
    placeItems: 'center',
}))

const OptionsContainer = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: space-evenly; 
    width: calc(325px + 4vw);
`;

const Options = styled(NavLink) (({ hovercolor, textcolor }) => ({
    cursor: 'pointer',
    fontSize: 'calc(14px + 0.6vw)',
    '&:hover': {
      background: `${hovercolor}`, 
    },
    borderRadius: '7px',
    padding: '7px 14px',
    textAlign: 'center',
    textDecoration: 'none',
    color: `${textcolor}`,
}));

const ThemeMode = styled(Brightness4Icon)` 
    margin-left: auto;
    cursor: pointer;
`;


const Navbar = () => {

    const {theme, toggleTheme} = useAppContext();

    const optionsProps = {
        hovercolor: theme.block_color,
        textcolor: theme.text_color,
    };

    return (
        <Nav style = {{ backgroundColor : `${theme.nav_color}`, position: 'sticky' }} >
            <InnerNav>
                <Logo textcolor={theme.text_color} >
                    <img src="/N.png" alt="N" style={{ height: 'calc(1.8rem + 2vw )' }} />
                </Logo>
                <OptionsContainer>
                    <Options to='/' {...optionsProps}> Home </Options>
                    <Options to='addnotes' {...optionsProps}> Add Notes </Options>
                    <Options to='allnotes' {...optionsProps}> All Notes </Options>
                </OptionsContainer>
                <ThemeMode style={{ color : `${theme.text_color}`}} onClick={toggleTheme} />
            </InnerNav>
        </Nav>
  )
}

export default Navbar