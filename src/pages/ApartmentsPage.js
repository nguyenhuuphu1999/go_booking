import React from 'react'
import { makeStyles } from "@material-ui/core/styles"



import HomeSearch from '../components/header/HomeSearch'
import Navbar from '../components/header/Navbar'
import PersonalApartment from '../components/apartmentspage_component/PersonalApartment';

const useStyles = makeStyles((theme) => ({
  h3Style: {
    marginLeft: 110,
    fontSize: 27,
    marginBottom: 10,
    paddingTop: 100
  },
}));

const ApartmentsPage = () => {
  const classes = useStyles();
  return (
    <div>
      <Navbar/>
      <h3 className={classes.h3Style}>Tìm chỗ ở riêng</h3>
      {/* <HomeSearch /> */}
      <PersonalApartment/>
    </div>
  )
}

export default ApartmentsPage
