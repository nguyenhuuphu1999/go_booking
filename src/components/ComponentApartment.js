import {
  Box,
  Card,
  CardActionArea,
  Container,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core'
import Rating from '@material-ui/lab/Rating'
import Carousel from 'react-bootstrap/Carousel'
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import CustomRating from './homepage_component/CustomRating'
import './Style.css'
import { Link } from 'react-router-dom'
import Loadding from '../components/Loadding/LoaddingItem/index'

import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBContainer,
} from 'mdbreact'
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
const ComponentApartment = props => {
  const classes = useStyles()
  const [active, setActive] = useState(true)
  
  useEffect(()=>{
    if (props.data != '') {
      return setActive(false)
       
     }
  })

  return (
    <div>
      <Container>
        {active ? (
          <Loadding />
        ) : (
          <Grid container>
            {props.data.map(item => (
              <Grid item xs={12} sm={6} md={3} lg={3}>
                <CardActionArea
                  className={classes.root}
                  style={{ outline: 'none' }}>
                  {/* <Carousel>
                    {item.apartment_images.map(item_image => (
                      <Carousel.Item interval={5000}>
                        <img //style={{width:'400px' , height:'300px'}}
                          className="d-block slide-image-componet "
                          src={item_image.url_image}
                          alt="First slide"
                        />
                      </Carousel.Item>
                    ))}
                  </Carousel> */}
                  <MDBContainer>
                    <MDBCarousel
                      activeItem={1}
                      length={4}
                      showControls={true}
                      showIndicators={false}
                      className="z-depth-1"
                      slide>
                      <MDBCarouselInner>
                        {item.apartment_images.map((item_image, index) => (
                          <MDBCarouselItem itemId={index}>
                            <MDBView>
                              <img
                                width="100%"
                                height="200px"
                                src={item_image.url_image}
                                alt="First slide"
                              />
                            </MDBView>
                          </MDBCarouselItem>
                        ))}
                      </MDBCarouselInner>
                    </MDBCarousel>
                  </MDBContainer>
                  <Link to={'/detail/' + item.id}>
                    <Typography
                      gutterBottom
                      align="center"
                      component="h3"
                      className="h3_componet_apartment">
                      {item.apartment_name}
                    </Typography>
                    <Typography
                      align="center"
                      variant="body2"
                      color="textSecondary"
                      component="p">
                      {item.provincial}
                    </Typography>
                    <CustomRating ratings={item.ratings} />
                    <Typography
                      className={classes.priceStyle}
                      align="center"
                      variant="body2"
                      color="textSecondary"
                      component="p">
                      Giá: {item.price}$/đêm
                    </Typography>
                  </Link>
                </CardActionArea>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </div>
  )
}

export default ComponentApartment
