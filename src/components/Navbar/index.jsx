import React from 'react'
import {FaBars} from 'react-icons/fa'
import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink 
} from './NavbarElements'
import logo from '../../images/elan_logo_black_background.png';

const Navbar = ({ toggle }) => {
    return (
        <React.Fragment>
            <Nav>
                <NavbarContainer>
                <img src={logo} alt='Elan Travel Services'/>
                    <NavLogo to="/">
                        <h1>elan travel</h1>   
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="discover">Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="services">Travel Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contact">Contact Us</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/signin">Contact Us</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </React.Fragment>
    )
}

export default Navbar;
