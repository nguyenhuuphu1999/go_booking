import React from 'react'
import { Grid, Paper, Avatar, Typography } from '@material-ui/core'
import {
  FormControlLabel,
  TextField,
  Checkbox,
  Button,
  FormHelperText,
} from '@material-ui/core'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

const SignUp = () => {
  const paperStyle = {
    padding: '30px 20px',
    width: 370,
    margin: '0px auto',
  }
  const headerStyle = {
    margin: 0,
  }
  const buttonStyle = {
    backgroundColor: '#FF0000',
    color: '#ffffff',
    borderRadius: '20px',
    margin: '8px 0',
  }
  const center = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '5px',
  }
  const initialValues = {
    phone_number: '',
    username: '',
    passwd: '',
    email: '',
    termAndConditions: false,
  }
  const onSubmit = (values, props) => {
    //(values)
    // //(props.submitForm)

    // setTimeout(() => {
    //   props.resetForm()
    //   props.setSubmitting(false)
    // }, 2000)
    //(process.env.REACT_APP_API_URL + '/Register/?type=user')
    axios
      .post(process.env.REACT_APP_API_URL + '/Register/?type=user', values)
      .then(res => {
        //(res)
        //('hehe')
      })
      .catch(err => {
        //('er')
        console.error(err)
      })
  }

  const validationSchema = Yup.object().shape({
    phone_number: Yup.number().typeError('Chỉ nhập số').required('Bắt buộc'),
    username: Yup.string()
      .min(2, 'Nhập tối thiểu 2 chữ cái!')
      .max(50, 'Tên quá dài!')
      .required('Bắt buộc'),
    passwd: Yup.string().min(8, 'Nhập tối thiểu 8 ký tự').required('Bắt buộc'),
    termAndConditions: Yup.string().oneOf(
      ['true'],
      'Đồng ý với các điều khoản sử dụng',
    ),
    email: Yup.string().email('Nhập email hợp lệ').required('Bắt buộc'),
  })
  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar></Avatar>
          <h4 style={headerStyle}>Đăng ký</h4>
          <Typography variant="caption">
            Vui lòng điền để tạo tài khoản
          </Typography>
        </Grid>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}>
          {props => (
            <Form>
              <Field
                as={TextField}
                fullWidth
                name="phone_number"
                label="Số điện thoại"
                helperText={<ErrorMessage name="phone_number" />}
              />
              <Field
                as={TextField}
                fullWidth
                name="username"
                label="User name"
                helperText={<ErrorMessage name="username" />}
              />
              <Field
                as={TextField}
                fullWidth
                name="passwd"
                label="Password"
                type="password"
                helperText={<ErrorMessage name="passwd" />}
              />
              <Field
                as={TextField}
                fullWidth
                name="email"
                label="Email"
                helperText={<ErrorMessage name="email" />}
              />
              <FormControlLabel
                control={<Field as={Checkbox} name="termAndConditions" />}
                label="Tôi đồng ý với các điều khoản sử dụng"
              />
              <FormHelperText>
                <ErrorMessage name="termAndConditions" />
              </FormHelperText>
              <div style={center}>
                <Button
                  type="submit"
                  variant="contained"
                  style={buttonStyle}
                  disabled={props.isSubmitting}>
                  {/* {props.isSubmitting ? 'Loading' : 'Tạo tài khoản'} */}
                  Tạo tài khoản
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </Paper>
    </Grid>
  )
}

export default SignUp
