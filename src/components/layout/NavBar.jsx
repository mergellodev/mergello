import { useState } from "react"
import { NavItems } from "../../data/NavItems"
import { Nav, Logo, MenuIcon, LineOne, LineTwo, LineThree, NavList, NavItemStyled, NavLink } from "../styles/layout/Nav.styled"

const NavBar = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
        <Nav>
            <div>
              <a href="#hero-section">
                <Logo src="./images/logo.png" />
              </a>
            </div>
            <MenuIcon onClick={() => setMenuOpen(!menuOpen)}>
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
                  <NavLink href="">About</NavLink>                  
                </NavItemStyled>  
              ))}
            </NavList>
        </Nav>
    </>
  )
}

export default NavBar