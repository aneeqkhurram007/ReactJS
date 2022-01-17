import React, { useState } from 'react'
import './textField.css'
import TextField from '@mui/material/TextField';
import { alpha, styled } from '@mui/material/styles';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import PasswordStrengthBar from 'react-password-strength-bar';
const CssTextField = styled(TextField)({

  '& label.Mui-focused': {
    color: '#D36455',
    backgroundColor: "white"
  },
  '& label.Mui-focused:after': {
    padding: "50px"
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#D36455',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#C4C6C8',
    },
    '&:hover fieldset': {
      borderColor: '#D36455',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#D36455',
    },
  },
});
export default function Textfield(props) {
  const [values, setValues] = useState({
    password: '',
    showPassword: false,
  });
  const handleChange = (prop) => (event) => {
    // props.setPassword(event.target.value)
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };



  return (
    <div className={`main-field ${props.classNamemain}`}
    >
      {props.type == "password" ?
        <>
          {props.icon ?
            <>
              <CssTextField
                disabled={props.disabled}
                className={`textField-container ${props.className}`}
                id="outlined-adornment-password"
                type={values.showPassword ? 'text' : 'password'}
                value={props.value}
                // onChange={handleChange('password')}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
                label={props.placeHolder}
                onChange={(e) => props.onChange(e.target.value)}
              />
              <PasswordStrengthBar password={props.formData.password} /></> :
            <CssTextField
              disabled={props.disabled}
              className={`textField-container ${props.className}`}
              id="outlined-adornment-password"
              type={values.showPassword ? 'text' : 'password'}
              value={props.value}
              onChange={(e) => props.onChange(e.target.value)}
              // onChange={handleChange('password')}
              label={props.placeHolder}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
          }
        </>
        : props.type == "simple" ?
          <>{props.textArea ? <textarea disabled={props.disabled} rows={props.rows} value={props.value} className="simple-text w-100" maxlength={props.maxlength} placeholder={props.placeHolder} id="textarea" onChange={(e) => props.onChange(e.target.value)} /> :

            <input
              disabled={props.disabled}
              onChange={(e) => props.onChange(e.target.value)}
              maxlength={props.maxlength}
              placeholder={props.placeHolder}
              className="simple-text form-control shadow-non w-100"
              id="text"
              value={props.value}
            // onChange={() => { props.onChange(document.getElementById("text").value) }}
            // onChange={(e) => props.onChange(e.target.value)}
            />}
          </>
          :
          < CssTextField
            size={props.size}
            disabled={props.disabled}
            value={props.value}
            type={props.type}
            multiline={props.row}
            minRows={props.row}
            type={props.type ? props.type : "text"}
            className={`textField-container ${props.className}`}
            id="outlined"
            label={"" + props.placeHolder + " "}
            variant="outlined"
            onChange={(e) => props.onChange(e.target.value)}
            key={props.placeHolder}
          />

      }

    </div>
  );
}

