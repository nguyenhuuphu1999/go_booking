import React, { useEffect, useState } from 'react'
import TextField from '@material-ui/core/TextField'
import { Link } from 'react-router-dom'
import './Style.css'
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@material-ui/core'

const Step1 = (props) => {
  const [age, setAge] = React.useState('')
  const [change,setChange] = useState(false)
  const [addHotels,setAddHotels] =useState()
  
  useEffect (()=>{
    setAddHotels(JSON.parse(localStorage.getItem('infoThenNhaTemp')))
  },[])
  const handlOnClick = () => {
    localStorage.setItem('step', 1)
  }

  const handleChange = event => {
    setAge(event.target.value)
    setChange(true)
    setAddHotels((item)=>({
        ...item,id_city:event.target.value
    }
  
    ))
    //(addHotels)
    //(event.target.value)
  
    const infoTemp = JSON.stringify(addHotels)
    localStorage.setItem("infoThenNhaTemp",infoTemp)
  }
  
  return (
    <div>
      <div
        style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '70%' }}>
          <p style={{ fontSize: '22px', marginBottom: '19px' }}>
            Xin chào Phúc! Hãy bắt đầu đăng cho thuê không gian của bạn.{' '}
          </p>
          <p>Nhà/phòng cho thuê của bạn ở đâu?</p>
          <form
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
            }}>
            <FormControl variant="filled">
              <InputLabel id="demo-simple-select-filled-label">Thành Phố bạn muốn cho thuê ở dâu ?</InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={age}
                onChange={handleChange}>
              
              {
                 (props.data != null && typeof props.data != 'undefined')?
                 (props.data.map((item,index)=>
                  <MenuItem name="id_city" value={index+1}>{item.name_city}</MenuItem>
                  )):<></>
              }
               
              </Select>
            </FormControl>

            <div style={{ padding: '30px', margin: 'auto' }}>
        {
            change ?   <a href="/ThemChuNha/?step=1">
                <Button
                  onClick={handlOnClick}
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
              </a>:<></>
        }
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Step1
