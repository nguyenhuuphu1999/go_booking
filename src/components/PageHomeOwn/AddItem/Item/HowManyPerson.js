import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import './main.css'
import Icon from './componentItem/Icon'
import MinimizeIcon from '@material-ui/icons/Minimize'
import AddIcon from '@material-ui/icons/Add'
import Input from '../../../Input/InputBGWhile'
const HowManyperson = props => {
  //(props.value.length)
  
  const onClick = () => {
    localStorage.setItem('page', 3)
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '85%' }}>
        <p style={{ fontSize: '22px', margin: '50px 0px 30px 0px' }}>
          Hãy cho chúng tôi biết địa chỉ cụ thể của bạn là ở đâu đi nè bạn ơi !
        </p>

        <form
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
          }}>
          <div style={{ fontSize: '15px', margin: '10px 0px' }}>
            <div style={{ display: 'flex', margin: '10px 0px 0px 30px' }}>
              <Input name={props.name} onChange={props.onchange} />
            </div>
          </div>

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
                  variant="contained">
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

export default HowManyperson
