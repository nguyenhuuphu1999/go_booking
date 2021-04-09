import React, { useEffect } from 'react'

import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Hotel from '../homepage_component/NearbyLocationItem'
import { useState } from 'react'
import axios from 'axios'
import './Styele.css'

import Pagination from '@material-ui/lab/Pagination'
import { CardActionArea, Container, Typography } from '@material-ui/core'
import CustomRating from '../homepage_component/CustomRating'
import Carousel from 'react-bootstrap/Carousel'
import ComponentApartment from '../ComponentApartment'
import Loadding from '../Loadding/LoaddingItem/index'
const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    
    margin: 'auto',
    marginTop: 83,
  },
  h3Style: {
    marginLeft: 30,
    fontSize: 27,
    marginBottom: 63,
  },
}))

export default function HotelsNearYou() {
  const classes = useStyles()
  const [data, setData] = useState([])
  const [datalength, setDatalength] = useState([])
  const [active, setActive] = useState(true)
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL + '/apartments/hotels')
      .then(res => {
        // //(res.data.data[0].apartment_images)
        //(res.data.data)
        setData(res.data.data)
        setDatalength(res.data.datalength)
        setActive(false)
      })
      .catch(err => {
        //(err)
      })
  }, [])

  const hanldeChangePagination = e => {
    //(e.target.outerText)

    var page = e.target.outerText
    axios
      .get(process.env.REACT_APP_API_URL + `/apartments/hotels?page=${page}`)
      .then(res => {
        setData(res.data.data)
      })
      .catch(err => {
        //(err)
      })
  }

  if (active) {
    return (
      <div className={classes.root}>
        <Container>
          <Loadding />
        </Container>
      </div>
    )
  } else {
    return (
      <div className={classes.root}>
        <h3 className={classes.h3Style}>Khách sạn gần bạn</h3>

        <Grid container spacing={3} align="center" style={{display:'flex',justifyContent:'center'}}>
          <ComponentApartment data={data} />
        </Grid>
        <Pagination
          count={datalength}
          page="1"
          defaultPage="1"
          onChange={hanldeChangePagination}
          variant="outlined"
          shape="rounded"
        />
      </div>
    )
  }
}
