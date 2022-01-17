
import './dropDown.css';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';


import InputAdornment from '@mui/material/InputAdornment';
import { fontSize } from '@mui/system';
export default function DropDown(props) {
  const CssForm = styled(FormControl)({

    '& label.Mui-focused': {
      color: '#D36455',
      backgroundColor: "white",
    },
    '& .MuiSelect-underline:after': {
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
  const CssTextField = styled(TextField)({

    '& label.Mui-focused': {
      color: '#D36455',
      // backgroundColor: "white"

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

  return (

    <CssForm className={`container ${props.className}`}  >
      {props.inside ? <>

        <CssTextField
          size={props.size}
          disabled={props.disabled}
          type="number"
          className="textField-container"
          value={props.inputValue}
          InputProps={{

            endAdornment: (
              <InputAdornment position="end">
                <Select
                  disabled={props.disabled}
                  multiple={props.multiple}
                  variant="standard"
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={props.value}
                  onChange={(e) => props.onChangeSelectore(e.target.value)}
                >
                  {props.values ? props.values.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  )) : <></>}
                </Select>
              </InputAdornment>
            )
          }}
          label={props.placeHolder}
          onChange={(e) => props.onChange(e.target.value)}
        />





      </> : <>
        <InputLabel id="demo-simple-select-standard-label">{props.placeHolder}</InputLabel>

        <Select
          size={props.size}
          disabled={props.disabled}
          multiple={props.multiple}
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={props.value}
          onChange={(e) => props.onChange(e.target.value)}
          label={props.placeHolder}
        >
          {props.values ? props.values.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          )) : <></>}
        </Select>
      </>}
    </CssForm>
  )
}
