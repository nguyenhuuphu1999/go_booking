import React, { useEffect, useState } from 'react'
import Switch from '@material-ui/core/Switch'
import { Grid } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import './Style.css'
import { Link, Redirect, useParams } from 'react-router-dom'
import axios from 'axios'
import { Alert } from 'bootstrap'
import './Style.css'
const Componet = props => {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  })
  // const [info_booking,setInfo_booking]=useState(localStorage.getItem("info-booking"))
  const handleChange = event => {
    setState({ ...state, [event.target.name]: event.target.checked })
  }
  const param = useParams()
  // const [info_booking,setInfo_booking] = useState({
  //   check_in:'',
  //   check_out:''
  // })

  const [dat_phong, setDatPhong] = useState('')
  const [tra_phong, setTraPhong] = useState('')
  const [info, setInfo] = useState([])
  useEffect(() => {
    const info_booking = JSON.parse(localStorage.getItem('info-booking'))
    setInfo(info_booking)
    setDatPhong(info_booking.check_in.split('T')[0])
    setTraPhong(info_booking.check_out.split('T')[0])
  }, [])

  const [history, setHistory] = useState(false)
  const [datPhongThanhCong, setDatPhongThanhCong] = useState(false)
  const [isClick, setIsClick] = useState(false)

  const handlbooking = () => {
    console.log(props.dataSave)
    setIsClick(true)
    axios
      .post(
        process.env.REACT_APP_API_URL + '/apartments/booking',
        props.dataSave,
      )
      .then(res => {
        setDatPhongThanhCong(true)
        //(res.data.error)
        if (res.data.error == false) {
          console.log(res)
          localStorage.removeItem('info-booking')
          localStorage.removeItem('so_ngay_dat_phong')
          setTimeout(() => {
            setHistory(true)
          }, 1000)
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  if (history) {
    const url = `{detail/${info.id_apartment}}`
    return <Redirect to="/" />
  }

  return (
    <div>
      {datPhongThanhCong ? (
        <div className="alert-booking">
          Bạn đã đặt phòng thành công .Cảm ơn bạn đã lựa chọn Go.
        </div>
      ) : (
        <></>
      )}
      <h1>Yêu cầu đặt phòng/đặt chỗ</h1>
      <h4>Chuyến đi của bạn</h4>
      <h6>Ngày</h6>
      <b>
        {dat_phong} đến {tra_phong}
      </b>
      <hr />
      <div>
        <Grid container>
          <Grid xs={10} sm={10} md={10} lg={10}>
            <h6>Đây có phải là một chuyến công tác?</h6>
          </Grid>
          <Grid xs={2} sm={2} md={2} lg={2}>
            <Switch
              checked={state.checkedB}
              onChange={handleChange}
              color="primary"
              name="checkedB"
              inputProps={{ 'aria-label': 'primary checkbox' }}
            />
          </Grid>
        </Grid>
      </div>
      <hr />
      <p>
        Bằng việc chọn nút bên dưới, tôi đồng ý với{' '}
        <Link className="a-link-dieu-kien" to="#">
          Nội quy nhà, Tiết lộ thông tin an toàn, Chính sách hủy, Hướng dẫn về
          giãn cách xã hội và các hướng dẫn khác liên quan đến COVID-19 của
          Airbnb
        </Link>
        , và Chính sách hoàn tiền cho khách. Tôi cũng đồng ý thanh toán tổng số
        tiền được hiển thị, đã bao gồm Phí dịch vụ. Yêu cầu đặt phòng
      </p>
      <div className="root-dat-phong-btn">
        {(isClick ) ? (
          <Button
            variant="contained"
            color="default"
            className="dat-phong-btn"
            style={{ backgroundColor: '#ccc' }}>
            Yêu cầu đặt phòng
          </Button>
        ) : (
          <Button
            variant="contained"
            color="inherit"
            className="dat-phong-btn"
            onClick={handlbooking}>
            Yêu cầu đặt phòng
          </Button>
        )}
      </div>
    </div>
  )
}

export default Componet
