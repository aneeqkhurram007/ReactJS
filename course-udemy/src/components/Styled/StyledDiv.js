import styled from 'styled-components'

const StyledDiv = styled.div`
margin: 16px auto; 
padding: 16px;
border: 1px solid black;
box-shadow:0 2px 3px #ccc;
width: 60%;
text-align:"center";

@media (min-width: 500px) {
          width: "450px"
      }

` ;

export default StyledDiv;