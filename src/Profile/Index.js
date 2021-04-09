import { Container, Grid } from '@material-ui/core'
import React, { useEffect } from 'react'
import { propTypes } from 'react-bootstrap/esm/Image'
import { Link } from 'react-router-dom'
import NavbarChuNha from '../PagehomeOWN/Index'
import './Style.css'
import RecentActorsIcon from '@material-ui/icons/RecentActors'
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive'
import WorkIcon from '@material-ui/icons/Work'
import LockOpenIcon from '@material-ui/icons/LockOpen'
import ShareIcon from '@material-ui/icons/Share'
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation'
import PaymentIcon from '@material-ui/icons/Payment'
import Brightness3Icon from '@material-ui/icons/Brightness3'
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard'
import axios from 'axios'
import Navbar from '../components/header/Navbar'
const Index = props => {
  const info = JSON.parse(localStorage.getItem('infoLogin'))

  return (
    <div>
      <Navbar />
      <Container style={{ marginTop: '100px' }}>
        <h2>Tài khoản</h2>
        <p>
          <b>
            {info.name_user} {info.full_name}
          </b>
          ,{info.email},
          <Link className="a_link_tryy_cap_ho_so" to="/truyCapHoSo">
            Truy cập hồ sơ
          </Link>
        </p>

        <Grid container>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Grid container>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                style={{ marginBottom: '20px' }}>
                <Link className="a_link_profile" to="">
                  <div className="Thong_tin_ca_nhan_chu_nha">
                    <RecentActorsIcon
                      style={{ color: '#FFB400', fontSize: '40px' }}
                    />
                    <h4>Thông tin cá nhân</h4>
                    <p>
                      Cung cấp thông tin cá nhân và cách chúng tôi có thể liên
                      hệ với bạn
                    </p>
                  </div>
                </Link>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                style={{ marginBottom: '20px' }}>
                <Link className="a_link_profile" to="">
                  <div className="Thong_tin_ca_nhan_chu_nha">
                    <NotificationsActiveIcon
                      style={{ color: '#FFB400', fontSize: '40px' }}
                    />
                    <h4>Thông báo</h4>
                    <p>Chọn tùy chọn thông báo và cách bạn muốn được liên hệ</p>
                  </div>
                </Link>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                style={{ marginBottom: '20px' }}>
                <Link className="a_link_profile" to="">
                  <div className="Thong_tin_ca_nhan_chu_nha">
                    <LockOpenIcon
                      style={{ color: '#FFB400', fontSize: '40px' }}
                    />
                    <h4>Đi công tác</h4>
                    <p>
                      Thêm email công việc để hưởng các lợi ích cho chuyến đi
                      công tác
                    </p>
                  </div>
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Grid container>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                style={{ marginBottom: '20px' }}>
                <Link className="a_link_profile" to="">
                  <div className="Thong_tin_ca_nhan_chu_nha">
                    <ShareIcon style={{ color: '#FFB400', fontSize: '40px' }} />
                    <h4>Quyền riêng tư và chia sẻ</h4>
                    <p>
                      Kiểm soát các ứng dụng được kết nối, nội dung bạn chia sẻ
                      và những người thấy nó
                    </p>
                  </div>
                </Link>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                style={{ marginBottom: '20px' }}>
                <Link className="a_link_profile" to="">
                  <div className="Thong_tin_ca_nhan_chu_nha">
                    <EmojiTransportationIcon
                      style={{ color: '#FFB400', fontSize: '40px' }}
                    />
                    <h4>Các công cụ đón tiếp khách chuyên nghiệp</h4>
                    <p>
                      Nhận các công cụ chuyên nghiệp nếu bạn quản lý một số chỗ
                      ở trên GO
                    </p>
                  </div>
                </Link>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                style={{ marginBottom: '20px' }}>
                <Link className="a_link_profile" to="">
                  <div className="Thong_tin_ca_nhan_chu_nha">
                    <PaymentIcon
                      style={{ color: '#FFB400', fontSize: '40px' }}
                    />
                    <h4>Thanh toán và chi trả</h4>
                    <p>
                      Tìm hiểu lại các khoản thanh toán, chi trả, phiếu giảm
                      giá, thẻ quà tặng và thuế
                    </p>
                  </div>
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Grid container>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                style={{ marginBottom: '20px' }}>
                <Link className="a_link_profile" to="CanHoDaThue">
                  <div className="Thong_tin_ca_nhan_chu_nha">
                    <Brightness3Icon
                      style={{ color: '#FFB400', fontSize: '40px' }}
                    />
                    <h4>Lịch sử đặt phòng</h4>
                    <p>
                      Tìm hiểu lại các khoản thanh toán, chi trả, phiếu giảm
                      giá, thẻ quà tặng và thuế
                    </p>
                  </div>
                </Link>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                style={{ marginBottom: '20px' }}>
                <Link className="a_link_profile" to="">
                  <div className="Thong_tin_ca_nhan_chu_nha">
                    <RecentActorsIcon
                      style={{ color: '#FFB400', fontSize: '40px' }}
                    />
                    <h4>Tiền tích lũy và phiếu giảm giá từ việc giới thiệu</h4>
                    <p>
                      Bạn có $0 tiền tích lũy và phiếu giảm giá từ việc giới
                      thiệu. Tìm hiểu thêm.
                    </p>
                  </div>
                </Link>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                style={{ marginBottom: '20px' }}>
                <Link className="a_link_profile" to="">
                  <div className="Thong_tin_ca_nhan_chu_nha">
                    <CardGiftcardIcon
                      style={{ color: '#FFB400', fontSize: '40px' }}
                    />
                    <h4>Thanh toán và chi trả</h4>
                    <p>
                      Tìm hiểu lại các khoản thanh toán, chi trả, phiếu giảm
                      giá, thẻ quà tặng và thuế
                    </p>
                  </div>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Index
