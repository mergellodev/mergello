import { useState } from "react"
import { NavItems } from "../../data/NavItems"
import { Nav, Logo, MenuIcon, LineOne, LineTwo, LineThree, NavList, NavItemStyled, NavLink, Profile, SocialIcons } from "../styles/layout/Nav.styled"
import { FaGithub, FaTwitter, FaYoutube } from "react-icons/fa"
import { CTAButton } from "../styles/common/CTAButton.styled"
import useScrollDirection from "../../hooks/useScrollDirection"


const NavBar = () => {

  const [menuOpen, setMenuOpen] = useState(false)
  const scrollDirection = useScrollDirection("down")

  return (
    <>
        <Nav scrollDirection={scrollDirection}>
            <div>
              <a href="#hero-section">
                <Logo src="./images/logo.png" alt="logo"/>
              </a>
            </div>
            <MenuIcon 
              menuOpen={menuOpen} 
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <LineOne menuOpen={menuOpen}/>
              <LineTwo menuOpen={menuOpen}/>
              <LineThree menuOpen={menuOpen}/>
            </MenuIcon>
            <NavList menuOpen={menuOpen}>
              {NavItems && NavItems.map((navItem, index) => (
                <NavItemStyled 
                  key={index} 
                  index={index} 
                  menuOpen={menuOpen} 
                  onClick={() => setMenuOpen(false)}
                >
                  {navItem.isProfile ? (
                    <NavLink href="#hero-section">
                      <Profile>
                        <img src="./images/logo.png" alt="logo"/>                                                
                      </Profile>                                            
                    </NavLink>
                  ) : null}   

                  {navItem.text ? (
                    <NavLink
                      href={navItem.href}
                    >
                      {navItem.text}
                    </NavLink>
                  ) : null }

                  {navItem.hasSocialIcons ? <SocialIcons>
                    <NavLink href="#" target="_blank">
                      <FaYoutube />
                    </NavLink>
                    <NavLink href="#" target="_blank">
                      <FaTwitter />
                    </NavLink>
                    <NavLink href="#" target="_blank">
                      <FaGithub />
                    </NavLink>
                  </SocialIcons> : null}
                  
                  {navItem.hasCTA ? (
                    <CTAButton>
                      Let's talk
                    </CTAButton>
                  ) : null}

                </NavItemStyled>  
              ))}
            </NavList>
        </Nav>
    </>
  )
}

export default NavBar