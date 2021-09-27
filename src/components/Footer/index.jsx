import React from 'react'
import { 
    FaLinkedin, 
    FaInstagram, 
    FaYoutube 
} from 'react-icons/fa'
import { 
    FooterContainer, 
    FooterWrap, 
    FooterLinksContainer, 
    FooterLinksWrapper, 
    FooterLinkItems, 
    FooterLinkTitle, 
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcons,
    SocialIconLink,
    WebsiteRights
} from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to='/about'>How it works</FooterLink>
                                <FooterLink to='/about'>Testimonials</FooterLink>
                                <FooterLink to='/about'>Travel Blog</FooterLink>
                                <FooterLink a='https://www.bravobeachvacations.com/'>An affiliate of Bravo Beach Vacations</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Videos</FooterLinkTitle>
                                <FooterLink to='/about'>Submit Video</FooterLink>
                                <FooterLink to='/about'>Ambassadors</FooterLink>
                                <FooterLink to='/about'>Agency</FooterLink>
                                <FooterLink to='/about'>Influencer</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                                <FooterLink to='/about'>Contact</FooterLink>
                                <FooterLink to='/about'>Support</FooterLink>
                                <FooterLink to='/about'>Destinations</FooterLink>
                                <FooterLink to='/about'>Travel Updates</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                                <FooterLink a='www.instagram.com'>Instagram</FooterLink>
                                <FooterLink a='www.linkedin.com'>LinkedIn</FooterLink>
                                <FooterLink a='www.youtube.com'>Youtube</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>elan travel</SocialLogo>
                        <WebsiteRights>elan travel © {new Date().getFullYear()} All rights reserved</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href='//ww.instagram.com' target='_blank' aria-label='Instagram'>
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href='//wwwlinkedin.com' target='_blank' aria-label='Linkedin'>
                                <FaLinkedin />
                            </SocialIconLink>
                            <SocialIconLink href='//www.youtube.com' target='_blank' aria-label='Youtube'>
                                <FaYoutube />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
