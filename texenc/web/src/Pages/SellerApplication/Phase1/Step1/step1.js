import React from 'react'
import { Button, DropDown, PhaseVideoCard } from '../../../../Imports/genericComponents'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
// import './step1.css'

const businessModel = [{ value: "Business Modal", label: "Business Modal" }]
const Step1 = (props) => {
  // const [type,setType]=useState()
  return (
    <>
      <div className="container-fluid ">
        <FormControl component="fieldset" className="w-100">
          <FormLabel component="legend">Seller Type</FormLabel>
          <RadioGroup
            onChange={(e) => { props.setFormData({ ...props.formData, type: e.target.value }) }}
            aria-label="gender"
            // defaultValue="individual"
            value={props?.formData?.type ? props?.formData?.type : undefined}
            name="radio-buttons-group"
          >
            <FormControlLabel value="agency" control={<Radio />} label="Agency" />
            <FormControlLabel value="indvidual" control={<Radio />} label="Individual" />
          </RadioGroup>
          <div >
            <Button

              className="float-right mr-3 mt-3"
              filled={true}
              text={"Continue"}
              onClick={() => props.setStep(2)}

            />
          </div>
        </FormControl>
      </div>




    </>
  )
}

export default Step1
