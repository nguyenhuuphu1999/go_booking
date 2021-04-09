import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

import HomeStay from '../homepage_component/NearbyLocationItem'
// import { homeStayList } from '../../FakeData/data'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 1350,
    margin: 'auto',
    marginTop: 20, 
  }
})

const HomeStayNearYou = ({ homeStayList }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container spacing={3} align="center">
        {typeof homeStayList !== 'undefined'&&homeStayList!==null?
        homeStayList.map(homeStay => (
          <Grid item xs={12} sm={6} md={3} >
            <Link to={`/detail/${homeStay.id}`}>  
              <HomeStay {...homeStay} />
            </Link>
          </Grid>
        )):<></>
      }
      </Grid>
    </div>
  )
}

export default HomeStayNearYou
