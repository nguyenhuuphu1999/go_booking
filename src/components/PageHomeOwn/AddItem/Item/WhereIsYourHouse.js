import React from 'react'
import Button from '@material-ui/core/Button'
import Inpust_select from '../../../Input/inpust_select'
import Input from '../../../Input/index'

import Radio from '../../../Input/Radio'
import './main.css'
import { Link } from 'react-router-dom'

const TypeApartment = props => {
  //(props.value.length)
  const onClick = () => {
    localStorage.setItem('page', 6)
  }

  return (
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
          <input
            type="number"
            style={{
              height: '40px',
              borderRadius: '25px',
              outline: 'none',
              fontSize: '16px',
              paddingLeft: '20px',
              paddingRight: '20px',
              width: '90%',
              display: 'block',
              marginTop: '-6px',
              border: 'none',
            }}

            placeholder={props.place}
            onChange={props.onchange}
            name={props.name}
            value={props.value}
          />

          <div style={{ padding: '30px' }}>
            {props.value.length > 0 ? (
              <Link to="/pagehome?item=3">
                <Button
                  onClick={onClick}
                  style={{
                    margin: 'auto',
                    marginTop: '10%',
                    borderRadius: '20px',
                    width: '70%',
                    outline: 'none',
                  }}
                  variant="contained"
                  color="secondary">
                  Tiếp tục
                </Button>
              </Link>
            ) : (
              <Link to="/pagehome?item=3">
                <Button
                  style={{
                    margin: 'auto',
                    marginTop: '10%',
                    borderRadius: '20px',
                    width: '70%',
                    outline: 'none',
                  }}
                  variant="contained"
                  >
                  Tiếp tục
                </Button>
              </Link>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default TypeApartment
