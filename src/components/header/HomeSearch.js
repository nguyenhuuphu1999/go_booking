import { Button, Grid } from '@material-ui/core'
import React, { useState } from 'react'
import SearchIcon from '@material-ui/icons/Search'
import axios from 'axios'
import './HomeSearch.css'
import Loadding from '../../components/Loadding/LoaddingItemRow'
import { DebounceInput } from 'react-debounce-input'
import { Redirect } from 'react-router'
const HomeSearch = () => {
  const [dataSave, setDataSave] = useState({
    check_in: new Date().toISOString().split('T')[0],
    check_out: new Date().toISOString().split('T')[0],
    value_input:''
  })
  const [infoSearch, setInfoSearch] = useState([])
  const [data, setDataa] = useState([])
  const [id_city,setID_city] = useState()
  const [isActive, setIsActive] = useState(false)
  const [isLoadding, setIsLoadding] = useState(true)
const [redirect,setRedirect]=useState(false)
  const hanldeChangCheckIn = e => {
    console.log(e.target.value)
    setDataSave(item => ({
      ...item,
      check_in: e.target.value,
    }))
    //(e.target.value)
  }
  const handleChangOutPut = e => {
    setDataSave(item => ({
      ...item,
      check_out: e.target.value,
    }))
    //(e.target.value)
  }

  const handleSendDate = () => {
  
  //   console.log(id_city)
  //  axios.get(process.env.REACT_APP_API_URL + `/apartments/city/${id_city}`)
  //  .then(res=>{
  //    console.log(res)

  //  })
  //  .catch(err=>{
  //    console.log(err)
  //  })
  setRedirect(true)
  }
  const handleChaneInput = e => {
    console.log(e.target.value)
    setDataSave((item)=>({
      ...item,value_input:e.target.value
    }))
   
       setIsActive(true)
    axios.post(process.env.REACT_APP_API_URL+'/home/search',{name_city:e.target.value})
    .then(res=>{
      console.log(res.data)
      setInfoSearch(res.data.data)
    })
    .catch(err=>{
      console.log(err)
    })
  }

  const handlOnClickInput = () => {
    setIsActive(!isActive)
    axios
      .get(process.env.REACT_APP_API_URL + '/home')
      .then(res => {
        console.log(res.data.data.diaDiemNoiBat)
        setIsLoadding(false)
        setInfoSearch(res.data.data.diaDiemNoiBat)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const handlOnClickInputItem = (id,name) => {
    console.log(name)
   setDataSave((item)=>({
     ...item,value_input:name
   }))
   setID_city(id)
    setIsActive(false)
  }

  const handleChangeDebounceInput = (e) =>{
    console.log(e.target.value)
  }
  if(redirect){
    const url=`/cities/${id_city}`
  return (<Redirect to={url}/>)
  }
  return (
    <div>
      <Grid container>
        <Grid xs={0} sm={0} md={12} lg={12} className="input_pagehome_big">
          <form>
            <div className="home-search">
              <div className="location-search">
                <p>Location</p>
                <DebounceInput
                  minLength={2}
                  debounceTimeout={300}
                  placeholder="Where are you going?"
                  value={dataSave.value_input}
                  onChange={handleChaneInput}
                  onClick={handlOnClickInput}
                />
                {/* <input
                  name="search"
                  type="text"
                  placeholder="Where are you going?"
                  value={dataSave.value_input}
                  onChange={handleChaneInput}
                  onClick={handlOnClickInput}
                /> */}
              </div>

              <div className="check-in-search">
                <p>Check in</p>
                <input
                  type="date"
                  id="start"
                  name="trip-start"
                  value={dataSave.check_in}
                  onChange={hanldeChangCheckIn}
                  placeholder="Add date"
                />
              </div>
              <div className="check-out-search">
                <p>Check out</p>
                <input
                  type="date"
                  value={dataSave.check_out}
                  placeholder="Add date"
                  onChange={handleChangOutPut}
                />
              </div>
              <div className="guests-search">
                <p>Guests</p>
                <input type="text" placeholder="Add guests" />
              </div>
              <Button
                onClick={handleSendDate}
                variant="contained"
                color="primary">
                Search
              </Button>
            </div>
          </form>
        </Grid>
        <Grid xs={12} sm={12} md={0} lg={0} className="input_pagehome_small">
          <div className="div_input_pagehome_small">
            <input
              type="text"
              placeholder="Xin chào bạn cần GO giúp gì không ?"
            />
            <div className="icon-search-page_home"></div>
          </div>
        </Grid>
        {
          infoSearch != null && infoSearch != '' && typeof infoSearch != 'undefined'?
          <div
          className={isActive ? 'search-pagehome' : 'search-pagehome hidden'}>
          <ul>
            {isLoadding ? (
              <Loadding />
            ) : (
              <>
                {infoSearch.map((item, key) => (
                  <li
                    key={key}
                    onClick={() => {
                      handlOnClickInputItem(item.id,item.name_city)
                    }}>
                    <div>
                      <img width="100px" src={item.image_url}></img>
                    </div>
                    <div style={{ alignItems: 'center', display: 'flex' }}>
                      <b>{item.name_city}</b>
                    </div>
                  </li>
                ))}
              </>
            )}
          </ul>
        </div>:<></>
        }
      </Grid>
    </div>
  )
}

export default HomeSearch
