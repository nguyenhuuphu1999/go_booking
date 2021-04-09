import React from 'react'
import ComponentApartment from '../ComponentApartment'

export default function Locations(props) {
  //(props.Data)
  return (
    <div>
      <div><h3>Nhà trệt</h3></div>
      <div>
        {' '}
        <ComponentApartment data={props.Data} />
      </div>
      {/* <sLocation {...city} /> */}
    </div>
  )
}

const Location = ({ image_url, name_city, description }) => {
  const container = {
    maxWidth: '1350px',
    display: 'flex',
    boxSizing: 'border-box',
    justifyContent: 'center',
    margin: ' 0 auto',
  }
  const leftBlock = {
    marginLeft: '27px',
  }
  const paddingTop = {
    paddingTop: '20px',
  }

  return (
    <div style={container}>
      <div>
        <img style={{ borderRadius: '30px' }} src={image_url} alt="" />
      </div>
      <div style={leftBlock}>
        <h3 style={paddingTop}>{name_city}</h3>
        <div style={paddingTop}>{description}</div>
      </div>
    </div>
  )
}
