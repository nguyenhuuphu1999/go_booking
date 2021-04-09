import React from 'react'

import Navbar from '../components/header/Navbar'
import ApartmentDetail from '../components/apartment_detail/ApartmentDetail'
// import FormFormik from '../components/booking/FormFormik'
import Total from '../components/booking/Total'
import BtnButton from '../components/booking/BtnButton'

import { useDispatch, useSelector } from 'react-redux'
import { fetchBooking } from '../store/booking'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const BookingPage = () => {

  const dispatch = useDispatch()

  const { id } = useParams

  useEffect(() => {
    dispatch(fetchBooking(id))  
  }, [dispatch])

  const photos = useSelector(state => state.detail.apartmentPhotos)
  // const apartment = useSelector(state => state.detail.apartment) 

  return (
    <div>
      <Navbar />
      <div style={{ margin: '100px auto' }}>
        <ApartmentDetail photos={photos}/>
        {/* <FormFormik /> */}
        <Total />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <BtnButton />
        </div>
      </div>
    </div>
  )
}

export default BookingPage
