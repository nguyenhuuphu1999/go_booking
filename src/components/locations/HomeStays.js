import React from 'react'
import { Link } from 'react-router-dom'

import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Hotel from '../homepage_component/NearbyLocationItem'
import ComponentApartment from '../ComponentApartment'
import { propTypes } from 'react-bootstrap/esm/Image'

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    maxWidth: 1350,
    margin: 'auto',
    marginTop: 83,
  },
  h3Style: {
    marginLeft: 30,
    fontSize: 27,
    marginBottom: 63,
  },
}))

export default function HomeStays(props) {
  const classes = useStyles()

  return (
    <div >
      <h3 className={classes.h3Style}>Home Stay</h3>
      <div><ComponentApartment data={props.Data}/></div>
      {/* <Grid container spacing={3} align="center">
        {homeStayList.map(homeStay => (
          <Grid item xs={12} sm={6} md={3}>
            <Link to={`/detail/${homeStay.id}`}>
              <Hotel {...homeStay} />
            </Link>
          </Grid>
        ))}
      </Grid> */}
    </div>
  )
}
