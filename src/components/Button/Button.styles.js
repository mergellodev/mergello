import styled from 'styled-components'

// Using basic styled components and styled components using props
export const StyledButton = styled.button`
  border: 2px solid gray;
  background-color: ${(props) => (props.variant === 'outline' ? '#000' : '#fff')};
  color: ${(props) => (props.variant === 'outline' ? '#fff' : '#000')};
  // Pseudo classes
  &:hover {
    background-color: ${(props) => (props.variant !== 'outline' ? '#f00' : '#0ff')};
    color: ${(props) => (props.variant !== 'outline' ? '#fff' : '#000')};
  }  
`
// Extending styles
export const FancyButton = styled(StyledButton)`
    background-image: linear-gradient(to right, #f6d365 0%, #fda085 100%);
    border: none;
`