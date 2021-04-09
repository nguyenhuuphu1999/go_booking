import React from 'react'
import { makeStyles } from "@material-ui/core/styles"



import HomeSearch from '../components/header/HomeSearch'
// import Navbar from '../components/header/Navbar'
import Apartment_2 from '../components/apartments_2/Apartment_2'
import FamousPlaces from '../components/homepage_component/FamousPlaces';
import TopHomeStay from '../components/homestay/TopHomeStay';

const useStyles = makeStyles(() => ({
  h3Style: {
    marginLeft: 110,
    fontSize: 27,
    marginBottom: 10,
    paddingTop: 100
  },
}));

const Apartments_2_Page = () => {
  const classes = useStyles();
  return (
    <div>
      {/* <Navbar/> */}
      <HomeSearch />
      <Apartment_2 />
      <FamousPlaces />
      <TopHomeStay />
    </div>
  )
}

export default Apartments_2_Page
