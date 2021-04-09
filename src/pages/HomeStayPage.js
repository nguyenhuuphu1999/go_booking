import React, { useState } from 'react'

import Navbar from '../components/header/Navbar'
import HomeStayNearYou from '../components/homestay/HomeStayNearYou'
import FamousPlaces from '../components/homepage_component/FamousPlaces'
import TopHomeStay from '../components/homestay/TopHomeStay'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchHomeStay } from '../store/homeStay'
import { useParams } from 'react-router-dom'
import Pagination from '@material-ui/lab/Pagination'
import ComponentApartment from '../components/ComponentApartment'
import axios from 'axios'
const HomeStayPage = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  
  useEffect(() => {
    dispatch(fetchHomeStay(id,1))
  }, [dispatch, id])
const [data, setData] = useState([])
  const typeHouse = useSelector(state => state.homeStay.typeHouse)
  const homeStayList = useSelector(state => state.homeStay.typeApartment)
  const nearbyLocationItemList = useSelector(
    state => state.homeStay.RattingGood, 
  )
  const datalength = useSelector(state => state.homeStay.datalength)


  //(datalength)
  //(typeHouse)
  //(homeStayList)
  //(nearbyLocationItemList)

  const hanldeChangePagination = e => {
    //(e.target.outerText)

    var page = e.target.outerText
    dispatch(fetchHomeStay(id,page))
    // axios
    //   .get(process.env.REACT_APP_API_URL + `/apartments/hotels?page=${page}`)
    //   .then(res => {
    //     setData(res.data.data)
    //   })
    //   .catch(err => {
    //     //(err)
    //   })
  }


  const h3Style = {
    marginLeft: 30,
    fontSize: 27,
    margin: '30px auto',
  }

  return (
    <div>
      <Navbar />
      <div style={{ margin: '90px auto 0 auto', maxWidth: '1350px' }}>
        <h3 style={h3Style} typeHouse={typeHouse}>
          {typeHouse.title}
        </h3>
       
        <ComponentApartment data={homeStayList}/>
        <Pagination
        count={datalength-1}
        page="1"
        defaultPage="1"
        onChange={hanldeChangePagination}
        variant="outlined"
        shape="rounded"
      />
        <FamousPlaces />
        <h3 style={h3Style} typeHouse={typeHouse}>
          Khách đánh giá cao vị trí của những {typeHouse.title} này
        </h3>
        <TopHomeStay nearbyLocationItemList={nearbyLocationItemList} />
      </div>
    </div>
  )
}

export default HomeStayPage
