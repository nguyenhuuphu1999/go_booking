import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import HomeSearch from '../components/header/HomeSearch'

import Navbar from '../components/header/Navbar'
import GroundFloor from '../components/ground_floor/GroundFloor'
import FamousPlaces from '../components/homepage_component/FamousPlaces'
import TopHomeStay from '../components/homestay/TopHomeStay'

const useStyles = makeStyles(() => ({
  h3Style: {
    marginLeft: 40,
    fontSize: 27,
    marginBottom: 10,
    paddingTop: 100,
    maxWidth: 1350
  },
}))

const Hotels = () => {
  const classes = useStyles()

  return (
    <div>
      {/* <Navbar /> */}
      <h3 className={classes.h3Style}> </h3>
      <HomeSearch />
      <GroundFloor />
      <FamousPlaces />
      <TopHomeStay />
    </div>
  )
}

export default Hotels
