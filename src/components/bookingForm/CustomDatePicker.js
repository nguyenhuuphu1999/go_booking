import React, { useState } from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import DateView from 'react-datepicker'
import { Field, ErrorMessage } from 'formik'

const CustomDatePicker = ({ props }) => {
  const { label, name, ...rest } = props
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field name={name}>
        {({ form, field }) => {
          const { setFieldValue } = form
          const { value } = field
          return (
            <DateView
              name={name}
              {...field}
              {...rest}
              selected={value}
              onChange={val => setFieldValue(name, value)}
            />
          )
        }}
      </Field>
    </div>
  )
}

export default CustomDatePicker
