import Navbar from '../components/header/Navbar'
import ApartmentDetail from '../components/apartment_detail/ApartmentDetail'
import Policies from '../components/apartment_detail/Policies'
import Feedbacks from '../components/apartment_detail/Feedbacks'

import React, { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { fetchDetail } from '../store/detail'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ApartmentDetailUser from '../components/apartment_detail/ApartmentDetailUser'

const RoomDetailPage = () => {
  const dispatch = useDispatch()

  const { id } = useParams()
  const param = useParams()
  const [image, setImage] = useState([])
  useEffect(() => {
    dispatch(fetchDetail(id))

    // axios.get(process.env.REACT_APP_API_URL + "/apartments/"+ param.id)
    // .then(res=>{
    //   //(res.data.data[0])
    //   setImage(res.data.data[0])
    // })
    // .catch((err)=>{
    //   //(err)
    // })
  }, [dispatch, id])

  const photos = useSelector(state => state.detail.apartmentPhotos)
  const apartment = useSelector(state => state.detail.apartment)
  const feedbackList = useSelector(state => state.detail.comment)

  //(photos)
  //(apartment)
  //(feedbackList)

  const [edit, setEdit] = React.useState(false)
  const onClick = () => {
    setEdit(!edit)
    //(edit)
  }
// console.log(apartment)
  return (
    <div>
      <Navbar onClick={onClick}></Navbar>
      <div style={{ marginTop: '100px' }}>
        <ApartmentDetailUser info={apartment} data={photos} />

        <Policies info={apartment} />
        {/* <Feedbacks feedbackList={feedbackList} /> */}
      </div>
    </div>
  )
}

export default RoomDetailPage
