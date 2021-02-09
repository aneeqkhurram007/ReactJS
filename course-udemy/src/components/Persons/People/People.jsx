import React from 'react';
import './People.css';
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


const People = (props) => {

    return (
        <StyledDiv>
            <h1 h1 onClick={props.click} > Name: {props.name}
            </h1>
            <h3>Age: {props.age} </h3>
            <p >{props.children} </p>
            <input type="text"
                onChange={props.change}
                value={props.name} />
        </StyledDiv>
    )

};
export default People;