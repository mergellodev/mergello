import styled from "styled-components"

export const StyledHeroSection = styled.section`
    width: 100%;
    height: 90vh;
    background: linear-gradient(
        135deg,
        rgba(0, 64, 77, 0.9) 0%, 
        rgba(2, 12, 27, 0.8) 100%
    ), url("./images/landing-page.jpg") center no-repeat;
    background-size: cover;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;    

    @media(max-width: ${({ theme }) => theme.mobile}) {
        background-size: 150%;
    }

`

export const HeroContent = styled.div`
    width: 100%;
    max-width: 58rem;
    color: ${({theme}) => theme.colors.white};    

    h1{
        letter-spacing: 1.2rem;
        font-size: 3rem;
        font-weight: 400;
        overflow: hidden;
        white-space: nowrap;
        width: 27ch;
        margin: auto;
    }

    h3{
        font-size: 2rem;
        margin: 1.5rem 5rem;                
        background: linear-gradient(
            to right,
            ${({ theme }) => theme.colors.white} 0%,
            ${({ theme }) => theme.colors.purple} 100%
        );
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    p{
        font-size: 1.7rem;
        font-weight: 400;        
    }

    div{
        margin: 2.5rem 0;
    }

    @media(max-width: ${({ theme }) => theme.mobile}) {
        h1{
            letter-spacing: 1rem;
            font-size: 1.5rem;
            width: 29ch;
        }
        h3{
            font-size: 2.2rem;            
        }
        p{
            font-size: 1.3rem;
            padding: 0 3rem;
        }
    }
`