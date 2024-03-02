import styled from "styled-components";

export const Nav = styled.nav`
    height: 90px;
    width: 100%;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    z-index: 98;
    transition: all 1s ease-in-out;
    background: rgba(2, 12, 27, 0.8);
`
export const Logo = styled.img`
    width: 100px;
    border: 50%;
`
export const MenuIcon = styled.div`
    cursor: pointer;
    /* background: ${({theme}) => theme.colors.lightNavyBlue}; */
    padding: 0.7rem;
    border-radius: 5px;
    display: none;
    position: absolute;
    right: 20px;
    z-index: 999;

    @media(max-width: ${({theme}) => theme.mobile}) {
        display: inline-block;
    }
`
export const LineOne = styled.div`
    width: 15px;
    height: 3px;
    margin: 5px 0px;
    background: linear-gradient(
        135deg,
        rgba(249, 105, 14, 1) 0%,
        rgba(255, 255, 255, 1) 100%
    );    
    transition: ${({theme}) => theme.transition};
    transform: ${({menuOpen}) => menuOpen ? "rotate(-45deg) translate(-5px, 6px) scaleX(2)" : "none"}
`
export const LineTwo = styled.div`
    width: 30px;
    height: 3px;
    margin: 5px 0px;
    background: linear-gradient(
        135deg,
        rgba(249, 105, 14, 1) 0%,
        rgba(255, 255, 255, 1) 100% 
    );
    opacity: ${({menuOpen}) => menuOpen ? 0 : 1};    
`
export const LineThree = styled.div`
    width: 15px;
    height: 3px;
    margin: 5px 0px;
    margin-left: ${({menuOpen}) => menuOpen ? 0 : "15px"};
    background: linear-gradient(
        135deg,
        rgba(249, 105, 14, 1) 0%,
        rgba(255, 255, 255, 1) 100% 
    );    
    transition: ${({theme}) => theme.transition};
    transform: ${({menuOpen}) => menuOpen ? "rotate(45deg) translate(-5px, -6px) scaleX(2)" : "none"}
`
export const NavList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 14px;
    flex-wrap: wrap;

    @media (max-width: ${({theme}) => theme.mobile}) {
        width: 24rem;
        height: 100vh;
        background: ${({theme}) => theme.colors.lightNavyBlue};
        position: fixed;
        top: 0;
        right: ${({menuOpen}) => menuOpen ? 0 : "-24rem"};
        transition: ${({theme}) => theme.transition};        
        padding-top: 3rem;
        justify-content: flex-start;
        flex-direction: column;
        z-index: 998;
    }
`
