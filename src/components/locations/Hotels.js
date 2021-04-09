import React from 'react'
import { Link } from 'react-router-dom'

import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Hotel from '../homepage_component/NearbyLocationItem'
import ComponentApartment from '../ComponentApartment'

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    maxWidth: '100%',
    margin: 'auto',
    marginTop: 83,
    
  },
  h3Style: {
    marginLeft: 30,
    fontSize: 27,
    marginBottom: 63,
  },
}))

export default function Hotels(props) {
  const classes = useStyles()
  //(props.data)
  return (
    <div >
      <h3 className={classes.h3Style}>Khách sạn gần bạn</h3>
      <div>
        <ComponentApartment data={props.Data} />
      </div>
    </div>
  )
}
