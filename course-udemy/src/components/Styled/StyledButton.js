import styled from 'styled-components'

const StyledButton = styled.button`
    color: white;
    font: inherit;
    border: 1px solid ${props => props.alt ? 'red' : 'green'};
    padding: 8px;
    cursor: pointer;
    background-color: ${props => props.alt ? 'red' : 'green'};
    
    &:hover{
      background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
      color: black;
    }
 
`

export default StyledButton;