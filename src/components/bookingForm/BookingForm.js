import React from 'react'
import { Grid, Paper} from '@material-ui/core'
import {
  TextField,
  Button
} from '@material-ui/core'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
// import CustomDatePicker from './CustomDatePicker'

// import FormikControl from './FormikControl'

import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";

const BookingForm = () => {
  const paperStyle = {
    padding: '30px 20px',
    width: 370,
    margin: '0px auto',
  }
  const buttonStyle = {
    backgroundColor: '#FF0000',
    color: '#ffffff',
    borderRadius: '20px',
    margin: '3px 0',
  }
  const center = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '5px',
  }
  const initialValues = {
    username: '',
    password: '',
    startDate: new Date()
  }
  const onSubmit = (values, props) => {
    //(values)
    //(props)
    setTimeout(() => {
      props.resetForm()
      props.setSubmitting(false)
    }, 2000)
  }
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, 'Nhập tối thiểu 2 chữ cái')
      .required('Bắt buộc'),
    password: Yup.string()
      .min(8, 'Nhập tối thiểu 8 ký tự')
      .required('Bắt buộc'),
    dateIn: Yup.date().required('Bắt buộc').nullable()
  })
  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}>
            {props => (
              <Form>
                {/* {//(props)} */}
                <Field
                  as={TextField}
                  fullWidth
                  name="username"
                  label="User Name *"
                  placeholder="Vui lòng điền tài khoản"
                  helperText={<ErrorMessage name="username" />}
                />
                <Field
                  as={TextField}
                  fullWidth
                  name="password"
                  label="Password *"
                  type="password"
                  helperText={<ErrorMessage name="password" />}
                />
                <div className="form-group col-3 mb-2">
                    <DatePicker 
                      selected={props.values.startDate}
                      dateFormat="MMMM d, yyyy"
                      className="form-control"
                      name="startDate"
                      onChange={date => props.setFieldValue('startDate', date)}
                    />
                  </div>
                {/* <Field
                  as={CustomDatePicker}
                  fullWidth
                  name="dateIn"
                  label="date *"
                  helperText={<ErrorMessage name="dateIn" />}
                />
                <FormikControl control='date' label='Pick a date' name='date'/> */}
                <div style={center}>
                  <Button
                    type="submit"
                    variant="contained"
                    style={buttonStyle}
                    disabled={props.isSubmitting}>
                    {props.isSubmitting ? 'Loading' : 'Đăng nhập'}
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </Grid>
      </Paper>
    </Grid>
  )
}

export default BookingForm
