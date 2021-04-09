import React, { useEffect, useState } from 'react'
import TextField from '@material-ui/core/TextField'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'
import './Style.css'
const Step3 = props => {
  const [change, setChange] = useState()
  const [ischange, setIsChange] = useState()
  const [addHotels,setAddHotels] =useState()

  useEffect (()=>{
    setAddHotels(JSON.parse(localStorage.getItem('infoThenNhaTemp')))
  },[])

  const onClick = () => {
    localStorage.setItem('step', 3)
  }
  const handleChangInput = e => {
    // //(e.target.value )
    setChange(e.target.value)
    setIsChange(true)
   setAddHotels(item => ({
      ...item,
      apartment_name: e.target.value,
    }))

    //(addHotels)
    //(e.target.value)
  
    const infoTemp = JSON.stringify(addHotels)
    localStorage.setItem("infoThenNhaTemp",infoTemp)
  }
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '85%' }}>
          <p style={{ fontSize: '22px', margin: '50px 0px 30px 0px' }}>
            Hãy cho chúng tôi biết tên căn hộ bạn là gì nè bạn ơi !
          </p>

          <form
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
            }}>
            <TextField
              id="filled-password-input"
              label="Tên căn hộ bạn là gì?"
              type="text"
              autoComplete="current-password"
              variant="filled"
              name="apartment_name"
              onChange={handleChangInput}
            />

            <div className="btn_next">
              {(change != '' && ischange == true) ? (
                <a href="/ThemChuNha/?step=3">
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

export default Step3
