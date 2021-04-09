import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { Link } from 'react-router-dom'
import './Style.css'
const useStyles = makeStyles({
  stylesGrid: {
    flexGrow: 1,
  },
  button1: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 23,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    marginBottom: 10,
    display: 'block',
    fontSize: '16px',
  },
  button2: {
    border: '1px solid orange',
    borderRadius: 23,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'black',
    height: 48,
    padding: '0 30px',
    marginBottom: 10,
    display: 'block',
    fontSize: '16px',
  },
  button3: {
    background: '#3FAADF',
    border: 0,
    borderRadius: 23,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    marginBottom: 10,
    display: 'block',
    fontSize: '16px',
  },
  imgStyle: {
    borderRadius: 30,
    width: '100%',
  },
  alignItem: {
    margin: '10px auto',
    height: '50px',
  },
  pStyles: {
    textAlign: 'center',
    color: '#222262',
  },
})

const Coupon = props => {
  const classes = useStyles()
  //(props.data)
  return (
    <div className={classes.stylesGrid}>
      <Grid container spacing={1}>
        {props.data.map(item => (
          <Grid item xs={12} sm={6} md={3} lg={3} className="card-img-promotion">
            <Link to={item.id} >
              <label>
              <img className="imgStyle" src={item.url_image} alt="" />
              <img className="promotion"  src="https://res.cloudinary.com/firstsolar/image/upload/v1615566063/images-removebg-preview_1_btszus.png" alt="" />

              </label>
            
              {item.city != null && typeof item.city != 'undefined' ? (
                <p className="pStyles">{item.city.name_city}</p>
              ) : (
                ''
              )}
              <div style={{display:'flex' ,justifyContent:'center' ,marginTop:'30px'}}>
                <Button className={classes.button1}>
                  Giảm giá {item.promotion}%
                </Button>

                <Button className={classes.button3}>Nhận Voucher</Button>
              </div>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default Coupon
