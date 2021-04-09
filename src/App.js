// import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Footer from './components/footer/Footer'

import Home from './pages/Home'
import ApartmentsPage from './pages/ApartmentsPage'
import Hotels from './pages/Hotels'
import CouponsPage from './pages/CouponsPage'
import HomeStayPage from './pages/HomeStayPage'
import Availability from './pages/Availability'
import PartnerPage from './pages/PartnerPage'
import RoomDetailPage from './pages/RoomDetailPage'
import BookingPage from './pages/BookingPage'
// import PageHomeOwn from './components/PageHomeOwn/index'
// import PageHomeOwn from './components/TrangChuNha/Index'
import ApartmentOWn from './components/Apartment'
import EditPageApartment from './EditPageApartment/Index'
import Booking from './pages/Booking/Index'
import Navbar from './components/header/Navbar'
import PageHomeOwnchihthuc from './PagehomeOWN/Index'
import DatPhong from './PagehomeOWN/Page/DatPhong'
import Nha from './PagehomeOWN/Page/Nha/Nha'
import Nha_PhongChoThue from './PagehomeOWN/Page/Phong_cho_thue/Nha_PhongChoThue'

import Profile from './Profile/Index'
import TruyCapHoSo from './Profile/Page/TruyCapHoSo/Index'
import TruyCapHoSoView from './Profile/Page/TruyCapHoSoView/Index'
import CanHoDaThue from './Profile/Page/CanHoDaThue/Index'
import ViewHistory from './Profile/Page/ViewHistory/Index'
import ThemChuNha from './PagehomeOWN/ThemChuNha/Index'


function App() {
  useEffect(() => {})
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/home" exact>
            <Home />
          </Route>
          <Route path="/hotels">
            <Hotels />
          </Route>
          <Route path="/apartments-page">
            <ApartmentsPage />
          </Route>
          <Route path="/coupons-page">
            <CouponsPage />
          </Route>
          <Route path="/apartments/:id">
            <HomeStayPage />
          </Route>
          <Route path="/cities/:id">
            <Availability/>
          </Route>
          <Route path="/become-a-partner">
            <PartnerPage />
          </Route>
          <Route path="/detail/:id">
            <RoomDetailPage />
          </Route>
          {/* <Route path="/booking/:id">
            <BookingPage />
          </Route> */}

          <Route path="/booking/:id">
            <Navbar />

            <Booking />
          </Route>

          <Route path="/PageHomeOwnne">
            <Nha />
          </Route>

          <Route path="/ViewHistory/:id">
            <ViewHistory />
          </Route>

          <Route path="/pagehome/apartment">
            <ApartmentOWn />
          </Route>

          <Route path="/dat_phong">
            <DatPhong />
          </Route>

          <Route path="/CanHoDaThue">
            <CanHoDaThue />
          </Route>

          
          <Route path="/Nha_PhongChoThue">
            <Nha_PhongChoThue />
          </Route>

          <Route path="/nha">
            <Nha />
          </Route>

          <Route path="/profile">
            <Profile />
          </Route>

          <Route path="/truyCapHoSo">
            <TruyCapHoSo />
          </Route>

          <Route path="/truyCapHoSoView/:id">
            <TruyCapHoSoView />
          </Route>

          <Route path="/ThemChuNha">
            <ThemChuNha />
          </Route>
          {/* <Route path="/pagehome" component={PageHomeOwn} /> */}

          {/* <Route path="/editpageApartment/:id" component={EditPageApartment} /> */}
        </Switch>

        <Footer />
      </Router>
    </div>
  )
}

export default App
