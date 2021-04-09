import React, { useEffect, useState } from 'react'
import Card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import AddIcon from '@material-ui/icons/Add'
import Rating from '@material-ui/lab/Rating'
import Box from '@material-ui/core/Box'
import { Link } from 'react-router-dom'
import Pagination from '@material-ui/lab/Pagination'
import axios from 'axios'
import Navbar from '../components/header/Navbar'
import Slider from 'react-slick'
const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: '350px',
    marginLeft: '10px',
    display: 'flex',
    padding: '10px',
    borderRadius: '10px',
    justifyContent: 'center',
    flexDirection: 'column',
    marginTop: '30px',
  },
  button_root: {
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    width: '120px',
    margin: '10px',
  },
}))

const Apartment = () => {
  const classes = useStyles()
  const [apartment, setApartment] = useState([])
  const [length, setlength] = useState(0)
  useEffect(() => {
    const id = localStorage.getItem('id')

    axios
      .get(process.env.REACT_APP_API_URL + '/apartment/' + id)
      .then(res => {
        setApartment(res.data.data)
        setlength(res.data.datalength)
      })
      .catch(err => {
        //(err)
      })
  }, [])

  const hadleRomeve = e => {
    //(e.target.value)
  }

  const hanldeChangePagination = e => {
    //(e.target.outerText)
    var idTemp = localStorage.getItem('id')
    var page = e.target.outerText

    axios
      .get(
        process.env.REACT_APP_API_URL +
          '/apartment/' +
          idTemp +
          '?page=' +
          page,
      )
      .then(response => {
        //(response.data.data)
        setApartment(response.data.data)
      })
      .catch(err => {
        console.error(err)
      })
  }

  return (
   
    <div>
      <Navbar />
      <div style={{ marginTop: '7%' }}>
        <h2 style={{ fontSize: '20px', fontWeight: '500', marginTop: '90px' }}>
          Apartment của bạn
        </h2>
        <div class="grid 2xl:grid-cols-4  xl:grid-cols-4 md:grid-cols-4 sm:grid-cols-1">
          {apartment.map(item => (
            <Card className={classes.root}>
              <Slider>
                {item.apartment_images.map((item, key) => (
                  <div>
                    <img height="80%" src={item.url_image} />
                  </div>
                ))}
              </Slider>
              <div> {item.apartment_name}</div>
              <Box component="fieldset" mb={3} borderColor="transparent">
                <Rating name="read-only" value={item.ratings} readOnly />
              </Box>
              <div className={classes.button_root}>
                <Button
                  onClick={hadleRomeve}
                  className={classes.button}
                  style={{ outline: 'none' }}
                  variant="contained"
                  color="secondary">
                  Xóa
                </Button>
                <Link to={"/detail/"+ item.id}>
                  <Button
                    className={classes.button}
                    style={{ outline: 'none' }}
                    variant="contained"
                    color="primary">
                    Chỉnh Sửa
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
      <Pagination
        count={length}
        page="1"
        defaultPage="1"
        onChange={hanldeChangePagination}
        variant="outlined"
        shape="rounded"
      />
    </div>
  )
}

export default Apartment
