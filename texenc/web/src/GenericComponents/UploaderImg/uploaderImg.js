import React from 'react';
// import styled from 'styled-components';


import { Button } from '../../Imports/genericComponents'


// "copied from "https://medium.com/web-dev-survey-from-kyoto/how-to-customize-the-file-upload-button-in-react-b3866a5973d8""
// Style the Button component
// const Button = styled.button`
//   /* Insert your favorite CSS code to style a button */
// `;


const UploaderImg = (props) => {
    // Create a reference to the hidden file input element
    const hiddenFileInput = React.useRef(null);

    // Programatically click the hidden file input element
    // when the Button component is clicked
    const handleClick = (event) => {
        hiddenFileInput.current.click();
    };
    // Call a function (passed as a prop from the parent component)
    // to handle the user-selected file 
    const handleChange = (event) => {
        const fileUploaded = event.target.files[0];
        props.handleFile(fileUploaded);
    };
    return (
        <>
            <Button
                onClick={handleClick}
                filled={false}
                text={"Browse"}
                className="browsebtn"
            />
            <input
                type="file"
                ref={hiddenFileInput}
                onChange={(e) => props.handleImg(e)}
                style={{ display: 'none' }}
            />
        </>
    );

}
export default UploaderImg;