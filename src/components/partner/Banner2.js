import React, { useState } from 'react'
import banner from '../../img/partner-banner.png'
import Button from '@material-ui/core/Button'
import RegisterBtn from './RegisterBtn'
import LogInBtn from './LogInBtn'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
const Banner2 = () => {
  const [redirect, setRedirect] = useState(false)
  const imgStyle = {
    width: '100%',
    height: '100vh',
  }
  const [open, setOpen] = React.useState(false)
  const handlLogin = () => {
  
    var key_token = localStorage.getItem('keyToken_user_chu_nha')
    //(key_token)
    if (typeof key_token == 'undefined' || key_token == '' || key_token == null) {
       
      setOpen(true)
    } else {
      var key_token1 = localStorage.getItem('keyToken_user_chu_nha')
      //(key_token1)
      axios
        .post(
          process.env.REACT_APP_API_URL + '/login/login_user?type=own',
          {},
          {
            headers: {
              Authorization: `Basic ${key_token1}`,
            },
          },
        )
        .then(res => {
            localStorage.setItem("id",res.data.data.id)
          if(res.data.err == true){
              setOpen(true)
          }else{
            setRedirect(true)
          }
        })

        .catch(err => {
          console.error(err)
        })
    }
  }

  if (redirect == true) {
    return <Redirect to="/pagehome" />
  }

  return (
    <div style={imgStyle}>
      <img style={imgStyle} src={banner} alt="" />
      <div
        style={{
          position: 'absolute',
          top: 150,
          left: 150,
          width: '350px',
          color: '#fff',
        }}>
        <div>
          <h1>Đăng ký ngay hôm nay</h1>
          <h4 style={{ fontWeight: 200 }}>
            Để trở thành 1 phần mạng lưới nhà nghỉ, khách sạn của chúng tôi
          </h4>
        </div>
        <div
          style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <div style={{ marginTop: '50px', width: '225px' }}>
            <div>
              <RegisterBtn />
            </div>
            <div style={{ margin: '30px 7px 30px 85px' }}>Hoặc</div>
            <div>
              <LogInBtn onCLick={handlLogin} setOpen={setOpen} open={open} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner2
