import React, { useState } from 'react'
import Input from './Input/index'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import AppleIcon from '@material-ui/icons/Apple'
import Button from '@material-ui/core/Button'
import axios from 'axios'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Alert from './Alert/Alerts'
import { stringify } from 'postcss'

const style = {
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  borderRadius: 25,
  border: 0,
  color: 'white',
  width: '100%',
  height: 48,
  padding: '0 30px',
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  outline: 'none',
}

const Login = props => {
  const [data1, setData] = useState({
    email: '',
    passwd: '',
  })

  const [error, setError] = useState({
    email: '',
    passwd: '',
  })

  const [errchua_dang_ky, setErrChuaDangKy] = useState(false)
  const [err, setErr] = useState(false)
  const [id, setId] = useState('')
  const [loginsuccessfull, setLoginSuccessfull] = useState(false)

  const handleInput = e => {
    setErr(false)
    setError(item => ({
      ...item,
      email: '',
      passwd: '',
    }))
    const { name, value } = e.target
    setData(setState => ({
      ...setState,
      [name]: value,
    }))
  }

  const [infoUser,setInfoUser] =useState()
  const handleSubmit = e => {
    e.preventDefault()

    //(data1)
    //    //(process.env.REACT_APP_API_URL +'/login/user')
    if (data1.email.length > 0 && data1.passwd.length > 0) {
      axios
        .post(
          process.env.REACT_APP_API_URL + '/login/login_user?type=user',
          data1,
        )
        .then(res => {
          //(res)
          console.log(res.data)
          if (res.data.err) {
            console.log('loi')
            setErrChuaDangKy(true)
          } else {
           localStorage.getItem('fullname',res.data.data_user.full_name)
            setId(res.data.id)
            localStorage.setItem('id_user_thuong', res.data.data.id_user)
            localStorage.setItem('keyToken_user_thuong', res.data.data.token)
            //(res.data.data)
            axios
              .get(
                process.env.REACT_APP_API_URL + '/profile/' + res.data.data.id_user,
              )
              .then(res => {
                //(res.data)
                const info = JSON.stringify(res.data.data)
                localStorage.setItem('infoLogin', info)
                props.setHiddenLogin(false)
                window.location.reload();
              })
              .catch(err => {
                //(err)
              })
          }
        })

        .catch(err => {
          console.error(err)
        })
    } else {
      if (data1.email.length == 0 && data1.passwd.length == 0) {
        //("1")
        setError(item => ({
          ...item,
          email: 'Email không được để trống',
          passwd: 'Password không được để trống',
        }))
      } else if (data1.email.length == 0) {
        //("12")

        setError(item => ({
          ...item,
          email: 'Email không được để trống',
        }))
      } else if (data1.passwd.length == 0) {
        //("123")

        setError(item => ({
          ...item,
          passwd: 'Password không được để trống',
        }))
      }
    }
  }
  if (loginsuccessfull) {
    return <Redirect to="/pagehome" />
  }

  return (
    <form
      method="post"
      onSubmit={handleSubmit}
      style={{
        backgroundColor: 'ActiveBorder',
        flexDirection: 'column',
        display: 'flex',
        alignItems: 'center',
        margin: 'auto',
        borderRadius: '15px',
      }}>
      {errchua_dang_ky ? (
        <Alert status="error" content="Email chưa đăng ký" />
      ) : (
        <></>
      )}
      {err ? (
        <Alert status="error" content="Email or password invalied" />
      ) : (
        <></>
      )}
      {err ? (
        <h2 style={{ margin: '20px 0px', fontWeight: '500', fontSize: '25px' }}>
          Đăng Nhập
        </h2>
      ) : (
        <h2 style={{ margin: '10px 0px', fontWeight: '500', fontSize: '25px' }}>
          Đăng Nhập
        </h2>
      )}
      <hr width="80%" />
      <div style={{ width: '100%' }}>
        <div
          style={{
            margin: '30px 0px',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <Input place="Email" onChange={handleInput} name="email" />

          <div style={{ color: 'red' }}>
            {' '}
            {error.email == '' ? '' : error.email}
          </div>
        </div>
        <div
          style={{
            margin: '30px 0px',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <Input
            place="Mật khẩu"
            onChange={handleInput}
            name="passwd"
            type="password"
          />
          <div style={{ color: 'red' }}>
            {' '}
            {error.passwd == '' ? '' : error.passwd}
          </div>
        </div>
      </div>
      <div style={{ margin: 'auto', marginTop: '20px' }}>
        <Button type="submit" variant="contained" color="primary" style={style}>
          Đăng nhập
        </Button>
      </div>

      <div>
        <div style={{ marginTop: '30px' }}>
          <hr width="100%" style={{ width: '40%' }} />
          <div style={{ marginTop: '-13px', textAlign: 'center' }}>Hoặc</div>
          <hr
            style={{
              width: '40%',
              marginLeft: 'auto',
              marginTop: '-10px',
            }}></hr>
        </div>

        <div style={{ marginTop: '10px', fontSize: '20px' }}>
          <p style={{ textAlign: 'center' }}>Đăng nhập với</p>
        </div>

        <div
          className="grid sm:grid-cols-1 xl:grid-flow-col-1 "
          style={{ display: 'flex', margin: '30px 0px' }}>
          <FacebookIcon
            style={{ color: 'blue', fontSize: '50px', marginLeft: '100px' }}
          />
          <InstagramIcon
            style={{ color: '#f012e6', fontSize: '50px', margin: '0px 30px' }}
          />
          <AppleIcon
            style={{ color: 'black', fontSize: '50px', marginRight: '100px' }}
          />
        </div>
      </div>
    </form>
  )
}

export default Login
