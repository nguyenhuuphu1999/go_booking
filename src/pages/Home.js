import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Apartments from '../components/homepage_component/Apartments'
import NearbyLocationListItem from '../components/homepage_component/NearbyLocationListItem'
import FamousPlaces from '../components/homepage_component/FamousPlaces'
import Header from '../components/header/Header'
import $ from 'jquery'
import { fetchHomes } from '../store/home'
import ComponentApartment from '../components/ComponentApartment'
import LoaddingItem from '../components/Loadding/LoaddingItem'
import './Style.css'
import { Container } from '@material-ui/core'
const Home = () => {
  const dispatch = useDispatch()
  const [flag, setFlag] = useState(false)
  useEffect(() => {
    dispatch(fetchHomes())
  }, [dispatch])

  const apartments = useSelector(state => state.home.typeHouse)
  const nearbyLocationItemList = useSelector(state => state.home.apartment)
  //(nearbyLocationItemList)

  return (
    <div>
      <Header />
      <div style={{margin:'50px'}}>
        <h3 className="font-black">Các loại căn hộ</h3>
      </div>
      <Apartments apartments={apartments} />
      <div style={{margin:'50px'}}>
        <h3>Căn hộ gần bạn</h3>
      </div>
      <ComponentApartment data={nearbyLocationItemList} />
      <div style={{margin:'50px'}}>
        {' '}
        <h3>Địa điểm nổi bật</h3>
      </div>
      <FamousPlaces />
    </div>
  )
}

export default Home
