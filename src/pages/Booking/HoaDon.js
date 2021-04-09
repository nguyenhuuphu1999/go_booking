import { Grid } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import './Style.css'
import Rating from '@material-ui/lab/Rating'
import axios from 'axios'

const HoaDon = props => {

  const [info, setInfo] = useState([])
  const [songay, setSoNgayKhachBooking] = useState()
  const [so_ngay_booking, setSo_ngay_booking] = useState('')
  const [InfoApartment, setInfoApartment] = useState(
    JSON.parse(localStorage.getItem('info-booking')),
  )
  function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate()
  }
  useEffect(() => {
    var ngay_temp = 0;
    if (
      localStorage.getItem('so_ngay_dat_phong') != null &&
      typeof localStorage.getItem('so_ngay_dat_phong') != 'undefined'
    ) {
      const so_ngay_booking_temp = localStorage.getItem('so_ngay_dat_phong')
      setSo_ngay_booking(so_ngay_booking_temp)
    } else {
      console.log('hehhe')
    }

    const infoApartment = JSON.parse(localStorage.getItem('info-booking')) //apartments/10/detail
    //(infoApartment)\
   
    if (
      new Date(infoApartment.check_out).getDate() >
      new Date(infoApartment.check_in).getDate()
    ) {
      const tong_so_ngay =
        new Date(infoApartment.check_out).getDate() -
        new Date(infoApartment.check_in).getDate()
      console.log('1 thang' + tong_so_ngay)
      setSoNgayKhachBooking(tong_so_ngay)
      ngay_temp = tong_so_ngay
    } else {
      if (
        new Date(infoApartment.check_out).getMonth() >
        new Date(infoApartment.check_in).getMonth()
      ) {
        const ngay_thang_truoc =
          daysInMonth(new Date(infoApartment.check_in).getMonth() + 1, 2021) -
          new Date(infoApartment.check_in).getDate()
        const ngay_thang_sau = new Date(infoApartment.check_out).getDate() - 0
        const tong_so_ngay = ngay_thang_truoc + ngay_thang_sau + 1
        console.log('2thang' + tong_so_ngay)
        setSoNgayKhachBooking(tong_so_ngay)
        ngay_temp = tong_so_ngay
      }
    }

    // setSoNgayKhachBooking(checkout_lan2 - checkinlan2)

    console.log('so_nagy' + songay)
   
      axios
        .get(
          process.env.REACT_APP_API_URL +
            '/apartments/' +
            infoApartment.id_apartment +
            '/detail',
        )
        .then(res => {
          const so_ngay_cur = songay > 0 ? songay : 1

          //(res.data.apartment.apartment_name)
          setInfo(res.data)
          console.log(res.data.apartment.price)
          // setTimeout(() => {
          props.setDataSave(item => ({
            ...item,
            image: res.data.apartmentPhotos[0].url_image,
            name_apartment: res.data.apartment.apartment_name,
            so_ngay: ngay_temp > 0? ngay_temp : 1,

            so_tien: res.data.apartment.price,
            tong_tien: ngay_temp > 0 ? parseInt( ((ngay_temp * res.data.apartment.price) + 5 + 4)+",00" ) : parseInt( (( res.data.apartment.price) + 5 + 4)+",00" )  ,
            check_in: infoApartment.check_in.split('T')[0],
            check_out: infoApartment.check_out.split('T')[0],
          }))
          // })
        })
        .catch(err => {
          console.log(err)
        })
 
  }, [])

  return (
    <div className="root-info-booking">
      {info != null && info != '' && typeof info != 'undefined' ? (
        <div>
          <Grid container>
            <Grid item xs={4} sm={4} ms={4} lg={4}>
              <img
                className="image-apartment-info-booking"
                src={info.apartmentPhotos[0].url_image}
              />
            </Grid>
            <Grid item xs={8} sm={8} ms={8} lg={8}>
              <p className="title_info_booking_apartment">
                {info.apartment.apartment_name}
              </p>
              <Rating
                name="read-only"
                value={info.apartment.ratings}
                readOnly
              />
            </Grid>
          </Grid>
          <hr />
          <div>
            <h3>Chi tiết giá</h3>
            <Grid container>
              <Grid item xs={6} sm={6} ms={6} lg={6}>
                <p>
                  ${info.apartment.price} x {so_ngay_booking != '' ? songay : 1}
                  đêm
                </p>
                <p>Phí vệ sinh</p>
                <p>Phí dịch vụ</p>
                <p>Tổng (USD)</p>
              </Grid>
              <Grid item xs={6} sm={6} ms={6} lg={6}>
                <div style={{ float: 'right' }}>
                  <p>
                    $
                    {/* {so_ngay_booking != ' '
                      ? so_ngay_booking * info.apartment.price
                      : songay > 0
                      ? info.apartment.price * songay
                      : info.apartment.price * 1} */}
                    {songay >0  ? songay * info.apartment.price : info.apartment.price}
                  </p>
                  <p>$5,00</p>
                  <p>$4,00</p>
                  <p>
                    $
                    {songay > 0 
                      ? (songay * info.apartment.price + 5 + 4)+",00"
                      : info.apartment.price + 5 + 4}
                  </p>
                </div>
              </Grid>
            </Grid>
          </div>
          <hr />
          <b>
            Hủy miễn phí cho đến 23:00 PM ngày{' '}
            {InfoApartment.check_in.split('T')[0].split('-')[2]} thg{' '}
            {InfoApartment.check_in.split('T')[0].split('-')[1]}
          </b>
          <p>
            Sau đó, hãy hủy trước 23:00 PM ngày{' '}
            {InfoApartment.check_in.split('T')[0].split('-')[2]} thg{' '}
            {InfoApartment.check_in.split('T')[0].split('-')[1]} để được hoàn
            lại 50%, trừ chi phí đêm đầu tiên và phí dịch vụ.
          </p>
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}

export default HoaDon
