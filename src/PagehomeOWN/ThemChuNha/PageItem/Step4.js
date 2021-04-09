import { Button, TextField } from '@material-ui/core'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import './Style.css'
const Step4 = (props) => {
    const [change, setChange] = useState()
    const [ischange, setIsChange] = useState()
    const [addHotels,setAddHotels] =useState()
  const [redirect,setReedirect] =useState(false);

    useEffect (()=>{
      setAddHotels(JSON.parse(localStorage.getItem('infoThenNhaTemp')))
    },[])
///ThemChuNha/?step=4
    const onClick = () => {
      //(addHotels)
      axios
      .post(process.env.REACT_APP_API_URL + '/apartment', addHotels)
      .then(res => {
        //(res.data)
        localStorage.setItem('id_temp_apartment', res.data.data.id)
        localStorage.setItem('step', 4)
        setReedirect(true)
       
      })
      .catch(err => {
        console.error(err)
      })
      

    }
    const handleChangInput = e => {
      // //(e.target.value )
      setChange(e.target.value)
      setIsChange(true)
      setAddHotels(item => ({
        ...item,price: e.target.value,
      }))


      //(addHotels)
      //(e.target.value)
    
      const infoTemp = JSON.stringify(addHotels)
      localStorage.setItem("infoThenNhaTemp",infoTemp)

    }
    if(redirect === true){
      window.location.reload()
    }
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '100%', padding: '20px' }}>
          <p style={{ fontSize: '22px', marginBottom: '19px' }}>
            Bạn định giá căn hộ bạn là bao nhiêu nhỉ ?
          </p>

          <form
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
            }}>
             <TextField
              id="filled-password-input"
              label="Định giá căn hộ bạn là bao nhiêu nhỉ ?"
              type="number"
              autoComplete="current-password"
              variant="filled"
              name="price"
              onChange={handleChangInput}
            />


            <div className="btn_next">
            {(change != '' && ischange == true) ? (
              
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

export default Step4
  {/* <a href="/ThemChuNha/?step=4"> */}
   {/* </a> */}