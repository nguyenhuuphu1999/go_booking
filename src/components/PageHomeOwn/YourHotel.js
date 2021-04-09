import React,{useEffect, useState} from 'react';
import Card from '@material-ui/core/Card';
import YourHotelItems from './YourHotelItems'
import {
    Link
  } from "react-router-dom";
const YourHotel = (props) => {
    const [ id , setId] = useState()
    const [ index , setIndex] = useState()
    useEffect(()=>{
     setId(localStorage.getItem('id'))
    //  //(props.indexPage)
    localStorage.setItem('page','')
    //(index) 
    },[])
  
    return (
        <div >
            <div style={{fontSize:'26px', fontWeight:500,marginTop:'30px'}}>Khách sạn của bạn </div>
            <Link to="pagehome/apartment" > Xem tất cả</Link>
            <YourHotelItems id={id} indexPage={index}/>
      </div>
    );
};

export default YourHotel;