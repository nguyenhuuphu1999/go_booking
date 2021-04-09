import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import HomeSearch from '../components/header/HomeSearch'

import Navbar from '../components/header/Navbar'
import HotelsNearYou from '../components/hotelspage_component/HotelsNearYou'

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
      <Navbar />
     
      {/* <HomeSearch /> */}
      <HotelsNearYou />
    </div>
  )
}

export default Hotels
