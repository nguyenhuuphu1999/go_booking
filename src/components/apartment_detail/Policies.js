import React, { useEffect, useState } from 'react'

import houseIcon from '../../img/house.svg'
import lightIcon from '../../img/light.svg'
import book from '../../img/book-outline.svg'
import star from '../../img/star-outline.svg'
import calendar from '../../img/calendar.svg'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'
import { Container, Fade, Grid, makeStyles } from '@material-ui/core'
import './Style.css'
import WbSunnyOutlinedIcon from '@material-ui/icons/WbSunnyOutlined'
import ImportContactsOutlinedIcon from '@material-ui/icons/ImportContactsOutlined'
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined'
import EventAvailableOutlinedIcon from '@material-ui/icons/EventAvailableOutlined'
import Button from '@material-ui/core/Button'
import 'react-datepicker/dist/react-datepicker.css'
// import 'react-calendar/dist/Calendar.css'
import format from 'date-format'
import axios from 'axios'
import { Redirect, useParams } from 'react-router'
import DatePicker from 'react-datepicker'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Alert from '@material-ui/lab/Alert'
import Login from '../Login'
import PopupLoginNavbar from '../header/PopupLoginNavbar'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
const itemList = [
  {
    iconUrl: <HomeOutlinedIcon />,
    title: 'Toàn bộ ngôi nhà',
    description: 'Anh sẽ có căn hộ cho riêng mình.',
  },
  {
    iconUrl: <WbSunnyOutlinedIcon />,
    title: 'Nâng cao sạch',
    description:
      'Máy chủ này cam kết quá trình làm sạch nâng cao 5 bước của GO. Tìm hiểu thêm',
  },
  {
    iconUrl: <ImportContactsOutlinedIcon />,
    title: 'Quy tắc nhà ở',
    description:
      'Chủ nhà không cho phép vật nuôi, tiệc tùng hoặc hút thuốc. Nhận thông tin chi tiết',
  },
  {
    iconUrl: <StarBorderOutlinedIcon />,
    title: 'Chủ nhà giàu kinh nghiệm',
    description: ' Có 120 đánh giá từ những nơi khác.',
  },
  {
    iconUrl: <EventAvailableOutlinedIcon />,
    title: 'Chính sách hủy đặt phòng',
    description:
      'Thêm ngày chuyến đi của bạn để biết chi tiết hủy đặt phòng cho kỳ nghỉ này.',
  },
]

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}))

const Policies = (props) => {
  const [open, setOpen] = useState(false)
  const param = useParams()
// console.log(props.info.id_user_own)
  const styles = {
    width: '100%',
    margin: '0 auto',
    borderBottom: '2px solid gray',
    borderLeft: '0.5px solid gray',
    borderRight: '0.5px solid gray',
  }
  const itemStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  }
  useEffect(() => {}, [])
  const [startDateinput, setStartDateInput] = useState(new Date())
  const handleChangeInput = date => {
    setStartDateInput(date)
    setData(item => ({
      ...item,
      check_in: date.toISOString().split('.')[0],
    }))
  }

  const [data, setData] = useState({
    check_in: new Date().toISOString().split('.')[0],
    check_out: new Date().toISOString().split('.')[0],
    id_user_booking: 1,
    id_user:props.info.id_user_own,
    id_apartment: parseInt(param.id),
  })
  const [hiddenLogin, setHiddenLogin] = useState(false)

  const handlOnclickHiddenLogin = () => {
    setHiddenLogin(false)
  }
  const handleClickInput = () => {
    setError(false)
    setErr(false)
  }
  const [startDateOutput, setStartDateOutput] = useState(new Date())

  const handleChangeoutput = date => {
    setStartDateOutput(date)
    setData(item => ({
      ...item,
      check_out: date.toISOString().split('.')[0],
    }))
    const day = new Date()
    // //("theo lich"+date.toISOString())
    var cur = day.toISOString().split('.')[0].replace(/T/, ' ')
    //(cur)
  }
  const handleClickoutput = () => {
    setError(false)
    setErr(false)
  }
  const [redirect, setredirect] = useState(false)
  const [error, setError] = useState(false)
  const [popup, setPopup] = useState(false)
  const [err, setErr] = useState(false)
  const [login, setLogin] = useState(false)
  const [value, setValue] = useState(new Date())

  const onChangeCheckIn = e => {
    setValue(e)
    console.log(e.toISOString())
  }

  const hadlesendFormData = () => {
    if (
      typeof localStorage.getItem('infoLogin') != 'undefined' &&
      localStorage.getItem('infoLogin') != null
    ) {
      if (
        parseInt(data.check_out.split('T')[0].split('-')[2]) -
          parseInt(data.check_in.split('T')[0].split('-')[2]) >
          0 ||
        parseInt(data.check_out.split('T')[0].split('-')[2]) ==
          parseInt(data.check_in.split('T')[0].split('-')[2])
      ) {
        axios
          .post(
            process.env.REACT_APP_API_URL + '/apartments/checkBooking',
            data,
          )
          .then(res => {
            if (res.data.err == false) {
              localStorage.setItem('info-booking', JSON.stringify(data))
              setredirect(true)
            } else {
              setError(true)
            }
          })
          .catch(err => {
            console.log(err)
          })
      } else {
        if (
          parseInt(data.check_out.split('T')[0].split('-')[1]) >
          parseInt(data.check_in.split('T')[0].split('-')[1])
        ) {
          const ngay_thang_truoc =
            30 - data.check_in.split('T')[0].split('-')[2]
          const ngay_thang_sau = data.check_out.split('T')[0].split('-')[2] - 1
          const sum = ngay_thang_sau + ngay_thang_truoc
          console.log('ngay_thang_truoc' + ngay_thang_truoc)
          localStorage.setItem('so_ngay_dat_phong', sum)
          console.log('ngay_thang_say' + ngay_thang_sau)

          console.log(sum)
          axios
            .post(
              process.env.REACT_APP_API_URL + '/apartments/checkBooking',
              data,
            )
            .then(res => {
              if (res.data.err == false) {
                localStorage.setItem('info-booking', JSON.stringify(data))
                setredirect(true)
              } else {
                setError(true)
              }
            })
            .catch(err => {
              console.log(err)
            })
        } else {
          setErr(true)
        }
      }
    } else {
     
      setHiddenLogin(true)
     
    }
  }

  if (login) {
  }

  if (redirect == true) {
    const id = localStorage.getItem('id_user_thuong')
    const url = `/booking/${param.id}`
    if (id != null || typeof id != 'undefined') {
      return <Redirect to={url} />
    } else {
      //('heheh')
    }
  }

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Container>
        <Grid container>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <div
              style={{
                padding: '10px',
                borderTop: '1px solid #ccc',
                marginTop: '20px',
              }}>
              {itemList.map(item => (
                <div className="root-Policies-image">
                  <div className="image-icon">{item.iconUrl}</div>
                  <div>
                    <h5>{item.title}</h5>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <div
              className="rootCheckBooking"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}>
              <div style={{ padding: '10px' }}>
                <div className="rootBooking">
                  <Grid container>
                    <Grid xs={6} sm={6} md={6} lg={6}>
                      <div>
                        Nhận phòng
                        <DatePicker
                          minDate={new Date()}
                          className="DatePicker"
                          selected={startDateinput}
                          onCalendarOpen={handleClickInput}
                          onChange={handleChangeInput}
                        />
                        {/* <Calendar className="calendar"  onChange={onChangeCheckIn} value={value} /> */}
                      </div>
                    </Grid>
                    <Grid xs={6} sm={6} md={6} lg={6}>
                      <div className="checkout">
                        Trả phòng
                        <DatePicker
                          minDate={new Date()}
                          className="DatePicker"
                          selected={startDateOutput}
                          onCalendarOpen={handleClickoutput}
                          onChange={handleChangeoutput}
                        />
                      </div>
                    </Grid>
                  </Grid>
                </div>
                <div className="bookingnote"></div>
              </div>
              <div className="btn-booking">
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={hadlesendFormData}
                  style={{ width: '70%', margin: 'auto ' }}>
                  Booking
                </Button>
              </div>
              <div>
                {error ? (
                  <Alert severity="error">
                    Xin lỗi ngày {data.check_in} => {data.check_out} không còn
                    trống{' '}
                  </Alert>
                ) : (
                  <></>
                )}
                {err ? (
                  <Alert severity="error">
                    Xin lỗi ngày bạn chọn không hợp lệ !!!!!
                  </Alert>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </Grid>
        </Grid>
        <Modal
          aria-labelledby="spring-modal-title"
          aria-describedby="spring-modal-description"
          open={hiddenLogin}
          onClose={handlOnclickHiddenLogin}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Login setHiddenLogin={setHiddenLogin} />
        </Modal>
      </Container>
    </div>
  )
}

export default Policies
