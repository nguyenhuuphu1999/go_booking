import { Button, Container, Grid } from '@material-ui/core'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import NavbarChuNha from '../NavbarChuNha/Index'
import './Style.css'
const DatPhong = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    axios
      .post(
        process.env.REACT_APP_API_URL + '/apartments/info-booking_chu_nha',
        { id_own: localStorage.getItem('id_user_thuong') },
      )
      .then(res => {
        console.log(res.data)
        setData(res.data.data)
      })
      .catch(error => {
        console.log(error)
      })
  },[])
  return (
    <div>
      <NavbarChuNha />
      <Container>
      <Container className="rootCanHoDaThue">
      <Link to="/profile">
                {' '}
                <Button variant="contained" color="secondary">
                  Go Back
                </Button>
              </Link>
           
        {data.map((item,key) => (
          <Link to={item.id}>
            <Grid container className="item_rootCanHoDaThue">
              <Grid item xs={4} sm={4} md={4} lg={4}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <img width="50%" src={item.image} />
                </div>
              </Grid>
              <Grid
                item
                xs={4}
                sm={4}
                md={4}
                lg={4}
                style={{ display: 'flex', justifyContent: 'center' }}>
                <Grid container>
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <p>
                      <b> {item.name_apartment}</b>
                    </p>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                   
                  {
                    item.info != null? <div style={{display:'flex',flexDirection:'column'}}>
                    <b> {
                        item.info.full_name
                    }</b>
                    <b>
                    {
                        item.info.email
                    }
                    </b>
                    <b>
                    {
                        item.info.phone_number
                    }
                    </b>
                    </div>:<></>
                  }
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                xs={4}
                sm={4}
                md={4}
                lg={4}
                style={{ display: 'flex', justifyContent: 'center' }}>
                <Grid container>
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    Tổng số ngày : <b>{item.so_ngay}</b>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <p>
                      Giá tiền: $<b>{item.so_tien}</b>
                    </p>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <p style={{display:'flex',flexDirection:'column'}}>
                 
                      <Link to={`/ViewHistory/${item.id}`} >
                        <Button variant="contained" color="secondary"> Xem Đơn Hàng </Button>
                      </Link>

                      <Link to={`/truyCapHoSoView/${item.id}`}  style={{marginTop:'10px'}}>
                        <Button variant="contained" color="secondary"> Xem thông tin khách hàng </Button>
                      </Link>
                    </p>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Link>
        ))}
      </Container>
      </Container>
    </div>
  )
}

export default DatPhong
