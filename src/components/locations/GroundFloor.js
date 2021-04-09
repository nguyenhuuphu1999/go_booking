import React from 'react'
import { Link } from 'react-router-dom'

import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Hotel from '../homepage_component/NearbyLocationItem'

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

export default function GroundFloor({ groundFloorList }) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <h3 className={classes.h3Style}>Nhà trệt</h3>
      <Grid container spacing={3} align="center">
        {groundFloorList.map(groundFloor => (
          <Grid item xs={12} sm={6} md={3}>
            <Link to={`/detail/${groundFloor.id}`}>
              <Hotel {...groundFloor} />
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}
