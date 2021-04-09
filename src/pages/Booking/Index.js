import { Container, Grid } from '@material-ui/core'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Redirect, useParams } from 'react-router'
import HoaDon from './HoaDon'
import YeuCauBooking from './YeuCauBooking'
const Index = () => {
  const id_user = localStorage.getItem('id_user_thuong')
  const infoLogin = JSON.parse(localStorage.getItem('infoLogin'))
  const [info_booking,setInfo_booking]=useState(JSON.parse(localStorage.getItem("info-booking")))
  const param = useParams()
  //(id_user)
  // console.log(info_booking)
  const [dataSave,setDataSave] = useState({
    id_user:id_user,
    id_apartment:info_booking.id_apartment,
    image:'',
    name_apartment:``,
    so_ngay:'',
    so_tien:'',
    tong_tien:'',
    check_in:'',
    check_out:'',
    id_own:info_booking.id_user_booking,
    email:infoLogin.email,
    ho_ten:infoLogin.full_name,
    ma_hoa_don:Math.random().toString(36).substr(2, 10)
  
  })
  const [view_licH_su_booking,Setview_licH_su_booking]= useState()
  useEffect(() => {
    // //(param.id)
    // axios.get(process.env.REACT_APP_API_URL + `apartments/lich_su_dat_hang/${}/detail`)
  })
  if(dataSave.image == " "){
    return (<Redirect to="/"/>)
  }


if(info_booking == null || info_booking == '' || typeof info_booking == 'undefined' ){
  return (<Redirect to="/"/>)
}
  return (
    <div style={{ marginTop: '100px' }}>
      <Container>
        <Grid container>
          <Grid item xs={12} sm={12} md={6} lg={6}>
              <YeuCauBooking dataSave={dataSave} />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} style={{display:'flex', justifyContent:'center',alignItems:'center'}}>
              <HoaDon setDataSave = {setDataSave}/>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Index
