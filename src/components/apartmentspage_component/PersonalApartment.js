import React, { useEffect, useState } from 'react'

import personalApartmentList from '../../FakeData/data'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import SpecificApartment from '../homepage_component/NearbyLocationItem'
import axios from 'axios'
import ComponentApartment from '../ComponentApartment'
import Pagination from '@material-ui/lab/Pagination'
import Loadding from '../Loadding/LoaddingItem/index'
import './Style.css'
import { Container } from '@material-ui/core'
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: 1350,
    margin: 'auto',
    marginTop: 83,
  },
  h3Style: {
    marginLeft: 30,
    fontSize: 27,
    marginBottom: 63,
  },
}))

export default function PersonalApartment() {
  const classes = useStyles()
  const [data, setData] = useState([])
  const [dataLength, setDataLength] = useState([])
  const [active, setActive] = useState(true)

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL + '/apartments/cho-o-rieng')
      .then(res => {
        console.log(res.data.datalength)
        setData(res.data.data)
        setActive(false)
        setDataLength(res.data.datalength)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const hanldeChangePagination = e => {
    console.log(e.target.outerText)

    var page = e.target.outerText
    console.log(
      process.env.REACT_APP_API_URL + `/apartments/cho-o-rieng/?page=${page}`,
    )
    axios
      .get(
        process.env.REACT_APP_API_URL + `/apartments/cho-o-rieng/?page=${page}`,
      )
      .then(res => {
        console.log(res.data.data)
        setData(res.data.data)
      })
      .catch(err => {
        console.log(err)
      })
  }
  if (active) {
    return (
      <Container>
        <Loadding active="false" />
      </Container>
    )
  } else {
    return (
      <div className={classes.root}>
        <Grid container spacing={3} align="center">
          <ComponentApartment data={data} />
          <div className={active ? 'active' : ''}>
            {/* <div className="active"> */}
          </div>
        </Grid>
        <Pagination
          count={dataLength - 1}
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
