import { Grid } from '@material-ui/core'
import Rating from '@material-ui/lab/Rating'
import axios from 'axios'
import { Button } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Navbar from '../../../components/header/Navbar'
import HoaDon from '../../../pages/Booking/HoaDon'
import './Style.css'
import { Link } from 'react-router-dom'
const Index = () => {
  const param = useParams()
  const [info, setInfo] = useState()
  useEffect(() => {
    axios
      .get(
        process.env.REACT_APP_API_URL +
          `/apartments/lich_su_dat_hang/${param.id}/detail`,
      )
      .then(res => {
        //(res.data.Data)
        setInfo(res.data.Data)
      })
  }, [])
  return (
    <div>
      <Navbar />
      <div className="root_view_lich_su">
        <div className="root-info-booking">
          {info != null && info != '' && typeof info != 'undefined' ? (
            <div>
              <Grid container>
                <Grid item xs={4} sm={4} ms={4} lg={4}>
                  <img
                    width="50%"
                    className="image-apartment-info-booking"
                    src={info[0].image}
                  />
                </Grid>
                <Grid item xs={8} sm={8} ms={8} lg={8}>
                  <p className="title_info_booking_apartment">
                    {info[0].name_apartment}
                  </p>
                  <Rating name="read-only" value={5} readOnly />
                </Grid>
              </Grid>
              <hr />
              <div>
                <h3>Chi tiết giá</h3>
                <Grid container>
                  <Grid item xs={6} sm={6} ms={6} lg={6}>
                    <p>
                      ${info[0].so_tien} x {info[0].so_ngay} đêm
                    </p>
                    <p>Phí vệ sinh</p>
                    <p>Phí dịch vụ</p>
                    <p>Tổng (USD)</p>
                  </Grid>
                  <Grid item xs={6} sm={6} ms={6} lg={6}>
                    <div style={{ float: 'right' }}>
                      <p>${info[0].so_tien * info[0].so_ngay}</p>
                      <p>$5,00</p>
                      <p>$4,94</p>
                      <p>${info[0].so_tien * info[0].so_ngay + 5 + 4.94}</p>
                    </div>
                  </Grid>
                </Grid>
              </div>
              <hr />
              <h5><b>Cảm ơn bạn đã đồng hành cùng Go.</b></h5>
              
              <div className="btn_go_back">
                <Link to="/CanHoDaThue">
                  {' '}
                  <Button variant="contained" color="secondary">
                    Go Back
                  </Button>
                </Link>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  )
}

export default Index
