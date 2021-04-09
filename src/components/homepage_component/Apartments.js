import React, { useEffect, useState } from 'react'
import Apartment from './Apartment'
// import { apartmentList } from '../../FakeData/data'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import LoaddingItem from '../Loadding/LoaddingItem/index'
import { Container } from '@material-ui/core'
const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,

    margin: 'auto',
  },
}))

export default function ApartmentList({ apartments }) {
  const classes = useStyles()
  const [loadding, setLoadding] = useState(true)
  useEffect(() => {
    if (apartments != '') {
      setLoadding(false)
    }
  })
  //(apartments)
  return (
    // <div className="container">
    <div className={classes.root}>
     
      <Container>
        {loadding ? (
          <LoaddingItem />
        ) : (
          <Grid container spacing={3} align="center">
            {apartments.map(apartment => (
              <Grid item xs={12} sm={6} md={6} lg={3}>
                {/* <Link to={`/home-stay?apartmentId=${apartment.id}`}> */}
                <Link to={`/apartments/${apartment.id}`}>
                  <Apartment key={apartment.id} {...apartment} />
                </Link>
                {/* react router query params */}
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </div>
    // </div>
  )
}
