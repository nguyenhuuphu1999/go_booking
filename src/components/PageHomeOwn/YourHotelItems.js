import React, { useEffect, useState } from 'react'
import Card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import AddIcon from '@material-ui/icons/Add'
import Rating from '@material-ui/lab/Rating'
import Box from '@material-ui/core/Box'
import { Link, Redirect, useParams } from 'react-router-dom'
import Modal from './AddItem/AddLocation/Modal/Index'
import axios from 'axios'
import Fade from '@material-ui/core/Fade'
import Grid from '@material-ui/core/Grid'
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

const YourHotel = props => {
  const classes = useStyles()
  const pageName = useParams();
  const [apartment, setApartment] = useState([])

  useEffect(() => {
    var id = localStorage.getItem('id')
    axios
      .get(process.env.REACT_APP_API_URL + '/apartment/' + id + '?limit=2')
      .then(res => {
        //(res.data)
        setApartment(res.data.data)
      })
      .catch(err => {
        //(err)
      })
  }, [])
  const [loadPage, setLoadPage] = useState(false)

  const handleRemove = (id, name) => {
    var key = window.confirm(
      'Bạn có chắc chắn muốn xóa căn hộ ' + name + ' không?',
    )

    if (key == true) {
      //('ee')
      axios
        .delete(process.env.REACT_APP_API_URL + '/apartment/' + id)
        .then(res => {
          axios
            .get(
              process.env.REACT_APP_API_URL +
                '/apartment/' +
                localStorage.getItem('id') +
                '?limit=2',
            )
            .then(response => {
              setApartment(response.data.data)
              //(response.data)
            })
            .catch(err => {
              //(err)
            })
        })
        .catch(err => {
          //(err)
        })
    }
  }
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
const [redirect ,setRedirect] = useState(false)
  const onClickEdit = () =>{
      
      //(pageName)
      setRedirect(true)
  }
if(redirect == true){
    // //(apartment[0].id)
    return <Redirect to={"detail/"+ apartment[0].id + "?type=own"}  />
}
  return (
    <>
      <Grid container spacing={3}>
        {apartment.map(item => (
          <Grid item xs={12} sm={4} md={4} >
            <Card className={classes.root} style={{height:'92%'}}>
              <Slider>
                {item.apartment_images.map((item, key) => (
                  <div style={{outline:'none'}}>
                    <img style={{width:"100%" , outline:"none"}} height="80%" src={item.url_image} />
                  </div>
                ))}
              </Slider>

              <div> {item.apartment_name}</div>
              <Box component="fieldset" mb={3} borderColor="transparent">
                <Rating name="read-only" value={item.ratings} readOnly />
              </Box>
              <div className={classes.button_root}>
                <Button
                  onClick={() => {
                    handleRemove(item.id, item.apartment_name)
                  }}
                  className={classes.button}
                  style={{ outline: 'none' }}
                  variant="contained"
                  color="secondary">
                  Xóa
                </Button>
                {/* <Link to={"detail/"+ item.id}> */}
                  <Button
                    onClick={onClickEdit}
                    className={classes.button}
                    style={{ outline: 'none' }}
                    variant="contained"
                    color="primary">

                    Chỉnh Sửa
                  
                  </Button>
                {/* </Link> */}
              </div>
            </Card>
          </Grid>
        ))}
        <Grid item xs={12} sm={4} md={4}>
          <Card
            className={classes.root}
            style={{ height: '400px', width: '100%' }}>
            <Modal indexPage={props.indexPage} />
          </Card>
        </Grid>
      </Grid>
      {/* </div> */}
    </>
  )
}

export default YourHotel

// <CarouselProvider
// naturalSlideWidth={100}
// naturalSlideHeight={125}
// totalSlides={3}
// >
// <Slider>
// {
// item.apartment_images.map((item,key)=>

//         <Slide index={key}><img src={item.url_image}/></Slide>
//     )
// }
// </Slider>
// </CarouselProvider>
