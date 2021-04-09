import { Grid } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import './Style.css'
import AccountBoxIcon from '@material-ui/icons/AccountBox'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import CheckIcon from '@material-ui/icons/Check'
import './Style.css'
const Index = props => {
  // //(props.Data[0].avatar)
  const [value, setValue] = useState('')

  useEffect(() => {
    setValue(props.Data[0].Ho_ten.split(' ')[0])
    //(props.Data[0].Ho_ten.split(' ')[0])
  })
  return (
    <div>
      <div className="rootprofile">
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <div className="avata_profile">
              <img width="50%" src={props.Data[0].avatar} />
              
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <div className="xac_minh_danh_tinh_profile">
              <div>
                <AccountBoxIcon className="icon_xac_minh_danh_tinh" />
              </div>
              <div>
                <h5>Xác minh danh tính</h5>
              </div>
              <p>Xác thực danh tính của bạn với huy hiệu xác minh danh tính.</p>
              <div>
                <Button variant="outlined" className="btn_profile">
                  <b>Nhận huy hiệu</b>
                </Button>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <div className="info_xac_nhan">
              <h5>
                <b>{value} </b>đã xác nhận
              </h5>
              <div className="check_mail_profile">
                <p>
                  <CheckIcon /> Địa chỉ email
                </p>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Index
