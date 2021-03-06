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
          B???n ???? ?????t ph??ng th??nh c??ng .C???m ??n b???n ???? l???a ch???n Go.
        </div>
      ) : (
        <></>
      )}
      <h1>Y??u c???u ?????t ph??ng/?????t ch???</h1>
      <h4>Chuy???n ??i c???a b???n</h4>
      <h6>Ng??y</h6>
      <b>
        {dat_phong} ?????n {tra_phong}
      </b>
      <hr />
      <div>
        <Grid container>
          <Grid xs={10} sm={10} md={10} lg={10}>
            <h6>????y c?? ph???i l?? m???t chuy???n c??ng t??c?</h6>
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
        B???ng vi???c ch???n n??t b??n d?????i, t??i ?????ng ?? v???i{' '}
        <Link className="a-link-dieu-kien" to="#">
          N???i quy nh??, Ti???t l??? th??ng tin an to??n, Ch??nh s??ch h???y, H?????ng d???n v???
          gi??n c??ch x?? h???i v?? c??c h?????ng d???n kh??c li??n quan ?????n COVID-19 c???a
          Airbnb
        </Link>
        , v?? Ch??nh s??ch ho??n ti???n cho kh??ch. T??i c??ng ?????ng ?? thanh to??n t???ng s???
        ti???n ???????c hi???n th???, ???? bao g???m Ph?? d???ch v???. Y??u c???u ?????t ph??ng
      </p>
      <div className="root-dat-phong-btn">
        {(isClick ) ? (
          <Button
            variant="contained"
            color="default"
            className="dat-phong-btn"
            style={{ backgroundColor: '#ccc' }}>
            Y??u c???u ?????t ph??ng
          </Button>
        ) : (
          <Button
            variant="contained"
            color="inherit"
            className="dat-phong-btn"
            onClick={handlbooking}>
            Y??u c???u ?????t ph??ng
          </Button>
        )}
      </div>
    </div>
  )
}

export default Componet
