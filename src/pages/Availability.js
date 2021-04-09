import React, { useState } from 'react'

import Navbar from '../components/header/Navbar'
import Locations from '../components/locations/Locations'
import Hotels from '../components/locations/Hotels'
import HomeStays from '../components/locations/HomeStays'
import Motels from '../components/locations/Motels'
import GroundFloor from '../components/locations/GroundFloor'

import { fetchHotel } from '../store/location/hotel'
import apartment, { fetchApartment } from '../store/location/apartment'
import { fetchMotel } from '../store/location/motel'
import { fetchGroundFloor } from '../store/location/groundFloor'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { setLocale } from 'yup'
import './Style.css'
const Availability = () => { 

  const dispatch = useDispatch()

  const { id } = useParams()

  // useEffect(() => {
  //   dispatch(fetchHotel(id))
  // }, [dispatch, id]);

  // useEffect(() => {
  //   dispatch(fetchApartment(id))
  // }, [dispatch, id]);

  // useEffect(() => {
  //   dispatch(fetchMotel(id))
  // }, [dispatch, id]);

  // useEffect(() => {
  //   dispatch(fetchGroundFloor(id))
  // }, [dispatch, id]);

  // const city = useSelector(state => state.hotel.city);
  // const hotels = useSelector(state => state.hotel.diaDiemNoiBatChiTiet)
  // const homeStayList = useSelector(state => state.apartment.diaDiemNoiBatChiTiet)
  // const motelList = useSelector(state => state.motel.diaDiemNoiBatChiTiet)
  // const groundFloorList = useSelector(state => state.groundFloor.diaDiemNoiBatChiTiet)

  const [nhaTret,setNhaTret] =useState([])
  const [hotels,setHotels] =useState([])
  const [apartment,setApartment] =useState([])
  const [motels,setMotels] =useState([])

  useEffect(()=>{
    axios.get(process.env.REACT_APP_API_URL + `/apartments/city/${id}/apartment?type=tret`)
    .then(res=>{
      //(res.data.result)
      setNhaTret(res.data.result)
    })
    .catch((err)=>{
      //(err)
    })


    axios.get(process.env.REACT_APP_API_URL + `/apartments/city/${id}/apartment?type=hotels`)
    .then(res=>{
      //(res.data.result)
      setHotels(res.data.result)
    })
    .catch((err)=>{
      //(err)
    })

    axios.get(process.env.REACT_APP_API_URL + `/apartments/city/${id}/apartment?type=apartment`)
    .then(res=>{
      //(res.data.result)
      setApartment(res.data.result)
    })
    .catch((err)=>{
      //(err)
    })

    axios.get(process.env.REACT_APP_API_URL + `/apartments/city/${id}/apartment?type=motels`)
    .then(res=>{
      //(res.data.result)
      setMotels(res.data.result)
    })
    .catch((err)=>{
      //(err)
    })
  

  },[])




  // //(hotels)
  return (
    <div>
      <Navbar />
      <div className="availability_root">
        <Locations Data={nhaTret}/> 
        <Hotels Data={hotels}/>
        <HomeStays Data={apartment}/>
        <Motels Data={motels}/>
        {/* <GroundFloor groundFloorList={groundFloorList}/> */}
      </div>
    </div>
  )
}

export default Availability
