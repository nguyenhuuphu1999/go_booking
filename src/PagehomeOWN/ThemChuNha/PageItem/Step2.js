import {
  FormControl,
  InputLabel,
  MenuItem,
  Radio,
  Select,
} from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import Button from '@material-ui/core/Button'

import { Link } from 'react-router-dom'
import './Style.css'
const Step2 = props => {
  const [age, setAge] = React.useState('')
  const [selectedValue, setSelectedValue] = useState('a')
  const [change, setChange] = useState(false)
  const [addHotels, setAddHotels] = useState()

  useEffect(() => {
    setAddHotels(JSON.parse(localStorage.getItem('infoThenNhaTemp')))
  }, [])

  const onClick = () => {
    localStorage.setItem('step', 2)
    const infoTemp = JSON.stringify(addHotels)
    localStorage.setItem('infoThenNhaTemp', infoTemp)
  }

  const handleChange = event => {
    setAge(event.target.value)
    setChange(true)

    //(event.target.value)
    setAddHotels(item => ({
      ...item,
      id_type_house: event.target.value,
    }))
    //(addHotels)
    //(event.target.value)

   
  }

  const handleChangeRadio = event => {
    setSelectedValue(event.target.value)
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '100%', padding: '20px' }}>
          <p style={{ fontSize: '22px', marginBottom: '19px' }}>
            Bạn đang đăng tải loại nhà/phòng cho thuê nào ?{' '}
          </p>

          <form
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
            }}>
            <p className="boil">Chọn loại chỗ ở</p>
            <FormControl variant="filled">
              <InputLabel id="demo-simple-select-filled-label">
                Bạn Cho Thêu Với Loại Căn Hộ Như Thế Nào?
              </InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={age}
                onChange={handleChange}>
                {props.data != null && typeof props.data != 'undefined' ? (
                  props.data.map((item, index) => (
                    <MenuItem name="id_type_house" value={index + 1}>
                      {item.title}
                    </MenuItem>
                  ))
                ) : (
                  <></>
                )}
              </Select>
            </FormControl>

            <div>
              <p className="boil">
                Bạn có đang cho thuê nhà/phòng trên Go với tư cách công ty
                không?
              </p>
              <div className="displayFlex">
                <Radio
                  checked={selectedValue === 'a'}
                  onChange={handleChangeRadio}
                  value="a"
                  name="radio-button-demo"
                  inputProps={{ 'aria-label': 'A' }}
                />
                <p>Tôi đón tiếp khách với tư cách doanh nghiệp đã đăng ký</p>
              </div>
              <div className="displayFlex">
                <Radio
                  checked={selectedValue === 'b'}
                  onChange={handleChangeRadio}
                  value="b"
                  name="radio-button-demo"
                  inputProps={{ 'aria-label': 'B' }}
                />
                <p>
                  Tôi đón tiếp khách với tư cách cá nhân hoặc chủ sở hữu duy
                  nhất
                </p>
              </div>
            </div>

            <div>
              <div>
                Điều này giúp bạn nhận được các tính năng phù hợp với phong cách
                đón tiếp khách của mình. Tính năng này sẽ ẩn với khách và không
                ảnh hưởng đến vị trí của bạn trong kết quả tìm kiếm.
              </div>
            </div>

            <div className="btn_next">
              {change ? (
                <a href="/ThemChuNha/?step=2">
                  <Button
                    onClick={onClick}
                    style={{
                      margin: 'auto',
                      marginTop: '10%',
                      borderRadius: '20px',
                      outline: 'none',
                    }}
                    variant="contained"
                    color="secondary">
                    Tiếp tục
                  </Button>
                </a>
              ) : (
                <></>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Step2
