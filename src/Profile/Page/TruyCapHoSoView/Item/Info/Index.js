import React from 'react'
import Button from '@material-ui/core/Button'
import HomeIcon from '@material-ui/icons/Home'
import HomeWorkIcon from '@material-ui/icons/HomeWork'
import './Style.css'
import ComponentApartment from '../../../../../components/ComponentApartment'

const Index = props => {
  var arr = []

  // props.arr_apartment.Data.map(item => {
  //   arr.push(item.id_apartment)
  // })

  // axios.get(process.env.REACT_APP_API_URL )

  

  return (
    <div>
    
      <h3>Xin chào, tôi là {props.info.full_name}</h3>
      <div>
        Bắt đầu tham gia vào <b>{props.info.created_at.split('T')[0]}</b>
      </div>
      <div>
        <Button
          style={{ border: 'none', padding: '0px', textTransform: 'undeline' }}
          variant="outlined">
         
        </Button>
      </div>
      <div className="gioi_thieu_trang_ca_nhan">
        <h4>Giới thiệu</h4>
      </div>
      <div className="Province">
        <p>
          <HomeIcon />
        </p>
        <p>Sống tại {props.info.address} Province, Việt Nam</p>
      </div>

      <div className="Province">
        <p>
          <HomeWorkIcon />
        </p>
        <p>Căn hộ bạn đã thuê</p>
      </div>
      
    </div>
  )
}

export default Index
