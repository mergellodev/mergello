import { CTAButton } from "../styles/common/CTAButton.styled"
import { HeroContent, StyledHeroSection } from "../styles/sections/HeroSection.styled"

export const HeroSection = () => {
    return <StyledHeroSection>
        <HeroContent>
            <h1>Mergello Devs</h1>
            <h3>Let's build things together</h3>
            <p>Collaborate on projects and enrich your developing career. Our 6-week remote team projects help you level-up technical & soft skills sought after by employers.</p>
            <div>
                <CTAButton href="#projects">
                    Learn more
                </CTAButton>
                <CTAButton href="#projects" margin="0 0 0 20px">
                    Apply for free
                </CTAButton>                
            </div>            
        </HeroContent>
    </StyledHeroSection>
}