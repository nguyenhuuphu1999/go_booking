import { Button, Container, Grid } from '@material-ui/core'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../../components/header/Navbar'
import './Style.css'
const Index = () => {
  const id_user = localStorage.getItem('id_user_thuong')
  const [data, setData] = useState([])

  useEffect(() => {
    axios
      .get(
        process.env.REACT_APP_API_URL +
          `/apartments/lich_su_dat_hang/${id_user}`,
      )
      .then(res => {
        //(res.data.Data)
        setData(res.data.Data)
      })
      .catch(err => {
        //(err)
      })
  }, [])
 
  return (
    <div>
      <Navbar />
      
      <Container className="rootCanHoDaThue">
      <Link to="/profile">
                {' '}
                <Button variant="contained" color="secondary">
                  Go Back
                </Button>
              </Link>
           
        {data.map(item => (
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
                    Mã hóa đơn:<b>{item.ma_hoa_don}</b>
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
                    <p>
                 
                      <Link to={`/ViewHistory/${item.id}`} >
                        <Button variant="contained" color="secondary"> Xem Đơn Hàng </Button>
                      </Link>
                    </p>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Link>
        ))}
      </Container>
    </div>
  )
}

export default Index
