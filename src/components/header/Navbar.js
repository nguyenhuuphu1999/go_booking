import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import GoLogo from '../../img/go-logo.png'
import Button from '@material-ui/core/Button'

import User from '../../img/person-circle-sharp.svg'
import EditIcon from '@material-ui/icons/Edit'
// import User from '../../img/person-circle-sharp.svg'
import Popover from '@material-ui/core/Popover'
import UserIcon from '../user/UserIcon'
import { Grid } from '@material-ui/core'
import Data from './Data'
import SearchIcon from '@material-ui/icons/Search'
import './Navbar.css'
import Avatar from '@material-ui/core/Avatar'
import PopupLoginNavbar from './PopupLoginNavbar'
import './PopupLoginNavbar.css'
import axios from 'axios'
// const nav = {
//   width: '100%',
//   backgroundColor: '#000000',
//   height: '76px',
//   position: 'fixed',
//   color: '#fff',
//   padding: '0 30px',
//   display: 'flex',
//   justifyContent: 'space-between',
//   alignItems: 'center',
//   top: '0',
//   left: '0',
// }

const logo = {
  width: '50px',
  height: '50px',
}

const ulStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}

const liStyle = {
  listStyle: 'none',
  marginLeft: '20px',
}

function Navbar(props) {
  const [pathname, setPathname] = useState()
  const [query, setQuery] = useState()

  useEffect(() => {
    setPathname(window.location.pathname.split('/')[1])
    setQuery(window.location.search.split('=')[1])
  })

  const onClick = () => {
    //('hehe')
  }

  const [flag, setFlag] = useState(false)
  const [data,setData]=useState([])
  const [hiddenLogin, setHiddenLogin] = useState(false)
  useEffect(() => {
  
    const token = localStorage.getItem('keyToken_user_thuong')
  
    
    if(window.location.pathname != '/pagehome'  )
    { //(window.location.pathname)
      if (token == null || typeof token == 'undefined') {
        setHiddenLogin(true)
      } else {
        axios
          .post(
            process.env.REACT_APP_API_URL + '/login/login_user?type=user',
            { },
            { headers: {  'Authorization': `Basic ${token}`  } },
          )
          .then(res => {
          //(res.data.data.full_name)
            localStorage.setItem('fullname',res.data.data.full_name)
            setData(res.data.data)
          })
  
          .catch(err => {
            console.error(err)
          })
      }
    

    const id_current = localStorage.getItem('id')
    //(id_current)
    if (id_current != null) {
      setFlag(true)
    } else {
      setFlag(false)
    }
    //(flag)
    //(pathname)
  }
  },[])

  const [clicked, setClicked] = useState(true)
  const handleClick = () => {
    setClicked(!clicked)
    //(clicked)
  }

  // const handleActive = (link) =>{
  //    setActive(link)
  // }
  const [anchorEl, setAnchorEl] = useState(null)
  const [activeli, setActiveli] = useState('')
  const onMouseOver = id => {
    //(id)
    setActiveli(id)
  }

  const [hidden, setHidden] = useState(false)
  const handleOnClickLogin = () => {
    setHidden(!hidden)
  }

  const handleclick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  return (
    <Grid container style={{ color: '#fff',zIndex:"1000" }} className={props.hidden ? "nav-root" : "nav-root_BG"}>
      <Grid item xs={4} sm={4} md={1} lg={1}>
        <Link to="/home">
          <img style={logo} src={GoLogo} alt="" />
        </Link>
      </Grid>
      <Grid item sm={0} xs={0} md={8} lg={8}>
        <ul className={clicked == false ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-links">
            <ul className="ul-navbar-page-home">
              <li style={liStyle}>
                <Link to="/hotels">Khách sạn</Link>
              </li>
              <li style={liStyle}>
                <Link to="/apartments-page">Chỗ ở riêng</Link>
              </li>
              <li style={liStyle}>
                <Link to="/coupons-page">Ưu đãi</Link>
              </li>
            </ul>
          </li>
        </ul>
      </Grid>
      <Grid item xs={8} sm={8} md={2} lg={2}>
        <div style={ulStyle}>
          {pathname == 'pagehome' ? (
            <Button
              style={{
                outline: 'none',
                borderRadius: '25px',
                backgroundColor: 'rgba(220,220,220,0.5)',
              }}
              type="submit"
              onClick={props.onClick}
              variant="contained">
              <EditIcon />
              Edit profile
            </Button>
          ) : query == 'own' && pathname == 'detail' ? (
            <Button
              style={{
                outline: 'none',
                borderRadius: '25px',
                backgroundColor: 'rgba(220,220,220,0.5)',
              }}
              type="submit"
              onClick={props.onClick}
              variant="contained">
              <EditIcon />
              Edit Apartment
            </Button>
          ) : (
            <div>
              <Link to="/PageHomeOwnne">Become a part of us</Link>
            </div>
          )}
          <i style={{ marginLeft: '30px' }} onClick={handleclick}>
            <Avatar alt="Remy Sharp" src={User} />
          </i>
        </div>
      </Grid>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
     
      >
        <PopupLoginNavbar  />
      </Popover>
    </Grid>
  )
}

export default Navbar
