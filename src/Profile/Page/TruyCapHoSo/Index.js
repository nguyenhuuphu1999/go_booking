import { Container, Grid } from '@material-ui/core'
import React, { useEffect, useState } from 'react'

import NavbarChuNha from '../../../PagehomeOWN/NavbarChuNha/Index'
import Profile from './Item/Profile'
import Data from './Data'
import Info from './Item/Info/Index'
import './Style.css'
import axios from 'axios'
import Navbar from '../../../components/header/Navbar'
import Button from '@material-ui/core/Button'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'

const Index = () => {
  const id = localStorage.getItem('id_user_thuong')
  const [result, setResult] = useState([])
  const info = JSON.parse(localStorage.getItem('infoLogin'))
  useEffect(() => {
    axios
      .get(
        process.env.REACT_APP_API_URL + '/apartments/lich_su_dat_phong/' + id,
      )
      .then(res => {
        setResult(res.data)
      })
      .catch(error => {
        console.error(error)
      })
  }, [])

  const handleOnClick = () => {
    //('go to home')
    return <Redirect to="/profile" />
  }
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div className="root_trang_ca_nhan">
        <Container style={{ marginTop: '100px' }}>
          <div style={{ margin: '10px 0px' }}>
            <Link to="/profile">
              <Button>Go Back</Button>
            </Link>
          </div>
          <Grid container>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <div className="root_left_profile">
                <Profile Data={Data} info={info} />
              </div>
            </Grid>
            <Grid item xs={0} sm={0} md={1} lg={1}></Grid>
            <Grid item xs={12} sm={12} md={7} lg={7}>
              <div className="root_right_profile">
                <Info Data={Data} arr_apartment={result} info={info} />
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  )
}

export default Index
