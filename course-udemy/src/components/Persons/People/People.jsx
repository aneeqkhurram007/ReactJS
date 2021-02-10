import React, { Component } from 'react';
import './People.css';
import StyledDiv from '../../Styled/StyledDiv';
import AuthContext from '../../../context/authContext';

class People extends Component {

    static contextType = AuthContext;

    render() {
        console.log("[People.js] render");
        return (

            <StyledDiv>
                { this.context.authenticated ? <p>Logged in</p> : <p>Not Logged In</p>
                }

                <h1 h1 onClick={this.props.click} > Name: {this.props.name}
                </h1>
                <h3>Age: {this.props.age} </h3>
                <p >{this.props.children} </p>
                <input type="text"
                    onChange={this.props.change}
                    value={this.props.name} />
            </StyledDiv>

        )

    };
}
export default People;