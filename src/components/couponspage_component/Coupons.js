import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import  couponList  from "../../FakeData/data";
import Coupon from "./Coupon"
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: 1350,
    margin: 'auto',
    marginTop: 83,
  },
  h3Style: {
      marginLeft: 30,
      fontSize: 27,
      marginBottom: 63
  }, 
  gridStyle: {
    
  }
}));

export default function Coupons() {
  const classes = useStyles();
const [data,setData]= useState([])
  useEffect(()=>{
    axios.get(process.env.REACT_APP_API_URL+'/promotions')
  .then((res)=>{
    //(res)
    setData(res.data.data)
  })
  .catch(err=>{
    //(err)
  })
  },[])

  return (
    <div className={classes.root}>
    <h3 className={classes.h3Style}>Uu dai hom nay</h3>
      <Grid className={classes.gridStyle} container spacing={3}>
       
          <Coupon data={data} />
     
      </Grid>
    </div>
  );

}
