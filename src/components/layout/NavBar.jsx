import { useState } from "react"
import { Nav, Logo, MenuIcon, LineOne, LineTwo, LineThree, NavList } from "../styles/layout/Nav.styled"

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
              <li>About</li>
              <li>Services</li>
            </NavList>
        </Nav>
    </>
  )
}

export default NavBar