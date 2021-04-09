import React, { useState } from 'react'
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  Link,
} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
// import {Link} from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

const SignIn = ({ handleChange }) => {
  const paperStyle = {
    padding: '30px 20px',
    width: 370,
    margin: '0px auto',
  }
  const headerStyle = {
    margin: 0,
  }
  const iconStyle = {
    color: '#FF0000',
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
  const left = {
    display: 'flex',
    justifyContent: 'start',
  }
  const space = {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: 5,
  }
  const initialValues = {
    email: '',
    passwd: '',
    remember: false,
  }
  const onSubmit = (values, props) => {
    console.log(values)
    // setTimeout(() => {
    //   props.resetForm()
    //   props.setSubmitting(false)
    // }, 2000)
    axios
      .post(process.env.REACT_APP_API_URL + '/login/user', values)
      .then(res => {
        console.log(res.data.err)
      })
      .catch(err => {
        console.log(err)
      })
  }
  const validationSchema = Yup.object().shape({
    email: Yup.string().min(2, 'Nhập tối thiểu 2 chữ cái').required('Bắt buộc'),
    passwd: Yup.string().min(8, 'Nhập tối thiểu 8 ký tự').required('Bắt buộc'),
  })
  // const [data1, setData] = useState({
  //   email: '',
  //   passwd: '',
  // })

  // const handleInput = e => {
  //   const { name, value } = e.target
  //   setData(setState => ({
  //     ...setState,
  //     [name]: value,
  //   }))
  //   console.log(value)
  // }
  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar>
            <LockOutlinedIcon style={iconStyle} />
          </Avatar>
          <h4 style={headerStyle}>Đăng nhập</h4>
          <Typography variant="caption">Vui lòng điền để đăng nhập</Typography>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}>
            {props => (
              <Form>
                {console.log(props)}
                <Field
                  as={TextField}
                  fullWidth
                  name="email"
                  label="User Name *"
                  placeholder="Vui lòng điền tài khoản"
                  helperText={<ErrorMessage name="email" />}
                />
                <Field
                  as={TextField}
                  fullWidth
                  name="passwd"
                  label="Password *"
                  type="password"
                  helperText={<ErrorMessage name="passwd" />}
                />
                <div style={left}>
                  <Field
                    as={FormControlLabel}
                    control={<Checkbox name="remember" />}
                    label="Lưu tài khoản"
                  />
                </div>
                <div style={center}>
                  <Button
                    type="submit"
                    variant="contained"
                    style={buttonStyle}
                    onClick={onSubmit}
                    disabled={props.isSubmitting}>
                    {props.isSubmitting ? 'Loading' : 'Đăng nhập'}
                  </Button>
                </div>
              </Form>
            )}
          </Formik>

          <div style={space}>
            <Typography>
              <Link href="#">Quên mật khẩu</Link>
            </Typography>
            <Typography>
              <Link href="#" onClick={() => handleChange('event', 1)}>
                Tạo tài khoản mới
              </Link>
            </Typography>
          </div>
        </Grid>
      </Paper>
    </Grid>
  )
}

export default SignIn
