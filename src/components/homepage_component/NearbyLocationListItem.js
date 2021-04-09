import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

// import { nearbyLocationItemList } from '../../FakeData/data'
import NearbyLocationItem from './NearbyLocationItem'

const useStyles = makeStyles(theme => ({
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

export default function NearbyLocationItemList({nearbyLocationItemList}) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <h3 className={classes.h3Style}>Gần bạn</h3>
      <Grid container spacing={3} align="center">
        {nearbyLocationItemList.map(nearbyLocationItem => (
          <Grid item xs={12} sm={6} md={3}>
            <Link to={`/detail/${nearbyLocationItem.id}`}>
              <NearbyLocationItem {...nearbyLocationItem} />
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}
