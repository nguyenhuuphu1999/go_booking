import { Link } from 'react-router-dom'
import { MultilevelMenu } from 'react-multilevel-menu'
import Data from './Data'
import {
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from 'react-bootstrap'
import './Style.css'
import { useState } from 'react'
const Index = () => {
  const [active, setActive] = useState(false)
  const handleOnclick = () => {
    setActive(true)
  }
  const [addHotels, setAddHotels] = useState(
    { 
     id_city:1,
     id_district:'1',
     id_type_house:1,
     provincial: "",
     apartment_name: "",
     price: '',
     ratings:5,
     id_user_own:localStorage.getItem('id_user_thuong'),
     image_url:'chua co data',
    })  
  const handleOnclickThenNha = () => {
    setActive(true)
      const infoTemp = JSON.stringify(addHotels)
      localStorage.setItem("infoThenNhaTemp",infoTemp)
  }
  return (
    <div className="root_navbar_page_homeown">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">
          <img
            width="100%"
            src="https://res.cloudinary.com/firstsolar/image/upload/c_scale,h_50/v1615914880/Capture-removebg-preview_uv0izv.png"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/nha">
              <Navbar.Text onClick={handleOnclick}>Nhà</Navbar.Text>
            </Link>
            <Link to="">
              <Navbar.Text onClick={handleOnclick}>Hộp thư đến</Navbar.Text>
            </Link>
            <Link to="/dat_phong">
              <Navbar.Text onClick={handleOnclick}>Đặt phòng</Navbar.Text>
            </Link>
            <Link to="">
              <Navbar.Text onClick={handleOnclick}>Lịch</Navbar.Text>
            </Link>
            <Link to="/Nha_PhongChoThue">
              <Navbar.Text onClick={handleOnclick}>
                Nhà/phòng cho thuê
              </Navbar.Text>
            </Link>
            <Link to="">
              <Navbar.Text onClick={handleOnclick}>Trợ giúp</Navbar.Text>
            </Link>
          </Nav>
          <Form inline>
            <Link to="/themChuNha">
              <Navbar.Text onClick={handleOnclickThenNha}><Button>Thêm Nhà Mới</Button></Navbar.Text>
            </Link>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Index
