import React, { useEffect, useState } from 'react'
import Rating from '../homepage_component/CustomRating'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import axios from 'axios'
import { useParams } from 'react-router'
import Loadding from '../../components/Loadding/LoadingOne'
// const {apartment_name, title, rating, address, price, img1, img2, img3, img4} = {item}
const ApartmentDetailUser = props => {
  const param = useParams()
console.log(props.data)
  const [info, setInfo] = useState({ apartment_name: '', price: '' })
  const [image, setImage] = useState([])

  useEffect(() => {
    if (
      typeof props.data != 'undefined' &&
      props.data != null &&
      props.data != ''
    ) {
      setImage(props.data)
      
    } else {
      //('nagoa ha')
    }
    // if (props.data != '' && props.data != null) {
    //   setInfo(item => ({
    //     ...item,
    //     apartment_name: props.data.apartment_name,
    //     price: props.data.price,
    //   }))
    // }
  }, [props.data])

  const imgStyle = {
    width: '100%',
    height: '100%',
  }

  const txtStyle = {
    marginTop: '0px',
  }

  return (
    <Container>
    {
      (image != '' && image != null && typeof image != 'undefined')?
      <div>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Grid container spacing={1}>
                  <Grid
                    item
                    xs={6}
                    sm={6}
                    md={6}
                    lg={6}
                    style={{
                      width: '100%',
                      display: 'flex',
                      bordeRadius: ' 10px 0px 0px 10px',
                    }}>
                    <div style={{ width: '100%' }}>
                      <img width="100%" style={imgStyle} src={image[0].url_image} alt="" />
                    </div>
                  </Grid>
                  <Grid item xs={6} sm={6} md={6} lg={6}>
                    <Grid container spacing={1}>
                      <Grid
                        item
                        xs={6}
                        sm={6}
                        md={6}
                        lg={6}
                        style={{ width: '100%', display: 'flex' }}>
                        <div style={{ width: '100%' }}>
                          <img
                            style={imgStyle}
                            src={image[1].url_image}
                            alt=""
                          />
                        </div>
                      </Grid>
                      <Grid
                        item
                        xs={6}
                        sm={6}
                        md={6}
                        lg={6}
                        style={{ width: '100%', display: 'flex' }}>
                        <div width="100%" style={{ width: '100%' }}>
                          <img
                            style={imgStyle}
                            src={image[2].url_image}
                            alt=""
                          />
                        </div>
                      </Grid>
                      <Grid
                        item
                        xs={6}
                        sm={6}
                        md={6}
                        lg={6}
                        style={{ width: '100%', display: 'flex' }}>
                        <div width="100%" style={{ width: '100%' }}>
                          <img
                            style={imgStyle}
                            src={image[3].url_image}
                            alt=""
                          />
                        </div>
                      </Grid>
                      <Grid
                        item
                        xs={6}
                        sm={6}
                        md={6}
                        lg={6}
                        style={{ width: '100%', display: 'flex' }}>
                        <div style={{ width: '100%' }}>
                          <img width="100%"
                            style={imgStyle}
                            src={image[4].url_image}
                            alt=""
                          />
                        </div>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <div style={txtStyle}>
              <h3>{props.info.apartment_name}</h3>
              <div>
                <span style={{ marginRight: '20px' }}>
                  <Rating
                    name="read-only"
                    value={props.info.ratings}
                    readOnly
                  />
                </span>
              </div>
              <div style={{ color: 'red' }}>
                Giá chỉ từ: {props.info.price}$/đêm
              </div>
            </div>
          </Grid>
        </Grid>
      </div>:<Loadding/>
    }
    </Container>
  )
}

export default ApartmentDetailUser
