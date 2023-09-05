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
`;

const Logo = styled(Typography) (({TextColor}) => ({
    fontSize: 'calc(17px + 1vw)',
    margin: "0 2vw 0 0",
    color: `${TextColor}`
}))

const OptionsContainer = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: space-evenly; 
    width: 375px;
`;

const Options = styled(NavLink) (({ HoverColor, TextColor }) => ({
    cursor: 'pointer',
    fontSize: 'calc(14px + 0.6vw)',
    '&:hover': {
      background: `${HoverColor}`, 
    },
    borderRadius: '7px',
    padding: '7px 14px',
    textAlign: 'center',
    textDecoration: 'none',
    color: `${TextColor}`,
}));

const ThemeMode = styled(Brightness4Icon)`
    margin-left: auto;
    cursor: pointer;
`;


const Navbar = () => {

    const {theme, toggleTheme} = useAppContext();

    return (
        <Nav style = {{ backgroundColor : `${theme.nav_color}`, position: 'sticky' }} >
            <InnerNav>
                <Logo TextColor={theme.text_color} > POTES </Logo>
                <OptionsContainer>
                    <Options to='/' HoverColor={theme.block_color} TextColor={theme.text_color} > Home </Options>
                    <Options to='addnotes' HoverColor={theme.block_color} TextColor={theme.text_color} > Add Notes </Options>
                    <Options to='allnotes' HoverColor={theme.block_color} TextColor={theme.text_color} > All Notes </Options>
                </OptionsContainer>
                <ThemeMode style={{ color : `${theme.text_color}`}} onClick={toggleTheme} />
            </InnerNav>
        </Nav>
  )
}

export default Navbar