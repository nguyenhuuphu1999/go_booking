import React from 'react'
import CustomDatePicker from './CustomDatePicker'

const FormikControl = (props) => {
    const {control, ...rest} = props
    switch (control) {
        case 'date': 
        return <CustomDatePicker {...rest}/>
        default:
            return null
    }
}
export default FormikControl
