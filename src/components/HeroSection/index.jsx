import React, {useState} from 'react'
import Video from '../../videos/video4.mp4'
import {Button} from '../ButtonElement'
import { 
    HeroContainer, 
    HeroBg, 
    VideoBg, 
    HeroContent, 
    HeroH1, 
    HeroP, 
    HeroBtnWrapper, 
    ArrowForward, 
    ArrowRight 
} from './HeroElements'

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
 
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video4/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Looking for a reason to get away?</HeroH1>
                <HeroP>
                Stop looking and just book it!
                </HeroP>
                <HeroBtnWrapper>
                    <Button 
                        to='contact' 
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary='true'
                        dark='true'    
                    >
                        Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
