import React from 'react'
import { 
    SidebarContainer, 
    Icon, 
    CloseIcon 
} from './SidebarElements'

const Sidebar = () => {
    return (
        <SidebarContainer>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about">
                        About
                    </SidebarLink>
                    <SidebarLink to="discover">
                        Discover
                    </SidebarLink>
                    <SidebarLink to="services">
                        Travel Services
                    </SidebarLink>
                    <SidebarLink to="contact">
                        Contact Us
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/contact">Contact Us</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
