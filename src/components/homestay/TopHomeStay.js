import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

import HomeStay from '../homepage_component/NearbyLocationItem'
// import { nearbyLocationItemList } from "../../FakeData/data";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    maxWidth: 1350,
    margin: 'auto',
  },
}))

const TopHomeStay = ({ nearbyLocationItemList }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container spacing={3} align="center">
        {nearbyLocationItemList.map(nearbyLocationItem => (
          <Grid item xs={12} sm={6} md={3}>
            <Link to={`/detail/${nearbyLocationItem.id}`}>
              <HomeStay {...nearbyLocationItem} />
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default TopHomeStay
