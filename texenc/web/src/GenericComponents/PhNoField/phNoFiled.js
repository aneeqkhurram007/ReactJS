import React, { useState } from 'react'
import './pnNoField.css'
import TextField from '@mui/material/TextField';
import { alpha, styled } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';
import countries from "./JsonFile/countr.json";
import ReactFlagsSelect from 'react-flags-select';
const CssTextField = styled(TextField)({

  '& label.Mui-focused': {
    color: '#D36455',
    backgroundColor: "white",
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
  const [selected, setSelected] = useState('')
  const [code, setCode] = useState('')
  const selectCountry = (event) => {
    setSelected(event)
    countries.map((country) => {
      if (country.code == event) {
        setCode(country.dial_code)
      }
    })
  }
  return (
    <div>

      <CssTextField
        type="number"
        className="textField-container"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              {code}
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <ReactFlagsSelect
                className="border-none"
                selected={selected}
                onSelect={selectCountry}
                showSelectedLabel={false}
                fullWidth={false}
                searchable={true}
                alignOptionsToRight={true}
              />
            </InputAdornment>
          )
        }}
        label={props.placeHolder}
        onChange={(e) => props.onChange(code + e.target.value)}
      />
    </div>

  );
}

