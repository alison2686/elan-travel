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

const Navbar = () => {
    return (
        <div>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">
                        <h1>elan travel</h1>
                    </NavLogo>
                    <MobileIcon>
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
                        <NavBtnLink to="/contact">Contact Us</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </div>
    )
}

export default Navbar;
