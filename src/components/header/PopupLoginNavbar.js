import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import ImageIcon from '@material-ui/icons/Image'
import WorkIcon from '@material-ui/icons/Work'
import BeachAccessIcon from '@material-ui/icons/BeachAccess'
import Divider from '@material-ui/core/Divider'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import { Link, Redirect } from 'react-router-dom'
import { Grid } from '@material-ui/core'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import './PopupLoginNavbar.css'
import VpnKeyIcon from '@material-ui/icons/VpnKey'
import Modal from '@material-ui/core/Modal'
import Login from '../Login'
import Register from '../Register_user_thuong'

import Backdrop from '@material-ui/core/Backdrop'
import axios from 'axios'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}))
const PopupLoginNavbar = props => {
  const classes = useStyles()
  const search = window.location.pathname.split('/')[1]
  const [redirect,setRedirect] = useState(false)
  const [hiddenLogin, setHiddenLogin] = useState(false)
  const [full_name, setFullName] = useState()
  useEffect(() => {
   if( typeof localStorage.getItem('infoLogin') != 'undefined' && localStorage.getItem('infoLogin') != null ){
    const info_user = JSON.parse(localStorage.getItem('infoLogin'))
    
    setFullName(info_user.full_name)
   }
  },[])

  const handlOnclickLogin = () => {
    const token = localStorage.getItem('keyToken_user_thuong')
    //(token)
    if (token == null || typeof token == 'undefined') {
      setHiddenLogin(true)
    } else {
      axios
        .post(
          process.env.REACT_APP_API_URL + '/login/login_user?type=user',
          {},
          { headers: { Authorization: `Basic ${token}` } },
        )
        .then(res => {
          //(res.data.data)
        })

        .catch(err => {
          console.error(err)
        })
    }
  }
  const handlOnclickHiddenLogin = () => {
    setHiddenLogin(false)
  }
  //end login
  ///register
  const [hiddenRegister, setHiddenRegister] = useState(false)
  const handlOnclickRegister = () => {
    setHiddenRegister(true)
  }
  const handlOnclickHiddenRegister = () => {
    setHiddenRegister(false)
  }
  //end register
  const handlOnclickLogout = () => {
    //('logOut')
    localStorage.removeItem('fullname')
    localStorage.removeItem('id_user_thuong')
    localStorage.removeItem('keyToken_user_thuong')
    localStorage.removeItem('infoLogin')
    localStorage.removeItem('id')
    setRedirect(true)
    window.location.reload()
   
  }

  if(redirect){
   
    return (<Redirect to="/home"/>)
  }
  // if(typeof localStorage.getItem('infoLogin') == ' un'){
   
  //   return (<Redirect to="/home"/>)
  // }

  return (
    <div>
      <List className={classes.root}>
        <Link to="#">
          <ListItem>
            {typeof full_name != 'undefined' &&
            full_name != null &&
            full_name != '' ? (
              <Link to="/truyCapHoSo">
                <ListItemText secondary={full_name} />
              </Link>
            ) : (
              <ListItemText secondary="Đăng nhập" onClick={handlOnclickLogin} />
            )}
          </ListItem>
        </Link>
        {localStorage.getItem('infoLogin') != null &&
        localStorage.getItem('infoLogin') != '' ? (
          <></>
        ) : (
          <Link to="#">
            <ListItem>
              <ListItemText
                secondary="Đăng ký"
                onClick={handlOnclickRegister}
              />
            </ListItem>
          </Link>
        )}

        {localStorage.getItem('infoLogin') != null &&
        localStorage.getItem('infoLogin') != '' ? (
          <Link to="/PageHomeOwnne">
            <ListItem>
              <ListItemText
                secondary="Trở thành chủ nhà"
                // onClick={handlOnclickLogout}
              />
            </ListItem>
          </Link>
        ) : (
          <></>
        )}

        <Link to="#">
          <ListItem>
            <ListItemText secondary="Trợ giúp" />
          </ListItem>
        </Link>

        {search == 'profile' ? (
          <></>
        ) : localStorage.getItem('infoLogin') != null &&
          localStorage.getItem('infoLogin') != '' ? (
          <Link to="/profile">
            <ListItem>
              <ListItemText secondary="Trang cá nhân" />
            </ListItem>
          </Link>
        ) : (
          <></>
        )}

        {localStorage.getItem('infoLogin') != null &&
        localStorage.getItem('infoLogin') != '' ? (
          <Link to="/">
            <ListItem>
              <ListItemText
                secondary="Đăng xuất"
                onClick={handlOnclickLogout}
              />
            </ListItem>
          </Link>
        ) : (
          <></>
        )}
      </List>

      {/* modal login*/}
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={hiddenLogin}
        onClose={handlOnclickHiddenLogin}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Login setHiddenLogin={setHiddenLogin} />
      </Modal>

      {/*end modal login */}
      {/* modal Register*/}
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={hiddenRegister}
        onClose={handlOnclickHiddenRegister}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Register />
      </Modal>

      {/*end modal Register */}
    </div>
  )
}

export default PopupLoginNavbar
