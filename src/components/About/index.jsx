import React from 'react'
import {
    InfoContainer, 
    InfoWrapper, 
    InfoRow, 
    Column1, 
    Column2, 
    TextWrapper, 
    TopLine, 
    Heading, 
    Subtitle, 
    ImgWrap,
    Img
} from './AboutElements'
import BioImg from '../../images/elana_bio_pic.jpg'

const About = () => {
    return (
        <div>
                <InfoContainer>
                <InfoWrapper>
                    <InfoRow>
                        <Column1>
                        <TextWrapper>
                            <TopLine>About</TopLine>
                            <Heading>Elana Solon</Heading>
                            <Subtitle>About info goes here</Subtitle>
                        </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                            <Img src={BioImg} alt='Elana Solon' />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </div>
    )
}

export default About
