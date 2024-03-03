import './App.css'
import { ThemeProvider } from 'styled-components'
import StyledButton, { FancyButton } from './components/Button/Button'
import { GlobalStyles } from './components/styles/Globals.styled'
import NavBar from './components/layout/NavBar'

function App() {  

  const theme = {
    colors: {
      white: "rgba(240, 247, 255, 1)",
      navyBlue: "rgba(2, 12, 27, 1)",
      lightNavyBlue: "rgba(4, 22, 48, 1)",
      green: "rgba(0, 206, 158, 1)",
      orange: "rgba(249, 105, 14, 1)",
      purple: "rgba(102, 51, 153, 1)",
      black: "#000111",
    },
    mobile: "768px",
    transition: "all 650ms ease-in-out"
  }

  return (
    <>      
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <NavBar />
        
        <div>
          <h1>Let's build things together !!</h1>          
          <hr />
        </div>        

        {/* <button>Button</button>
        <StyledButton> My Styled Button </StyledButton>
        <br/>
        <StyledButton variant='outline'>Another Styled Button</StyledButton>
        <br/>
        <FancyButton>Fancy Button</FancyButton> */}
        
      </ThemeProvider>      
    </>
  )
}

export default App
