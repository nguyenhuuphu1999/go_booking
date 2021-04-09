import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

import HomeStay from '../homepage_component/NearbyLocationItem'
import { homeStayList } from '../../FakeData/data'

const useStyles = makeStyles(({
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

const Apartment_2 = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <h3 className={classes.h3Style}>Căn hộ</h3>
      <Grid container spacing={3} align="center">
        {homeStayList.map(homeStay => (
          <Grid item xs={12} md={3}>
            <HomeStay {...homeStay} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default Apartment_2;
