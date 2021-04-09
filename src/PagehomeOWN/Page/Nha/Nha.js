import { Container, Grid } from '@material-ui/core'
import React from 'react'
import NavbarChuNha from '../../NavbarChuNha/Index'
import './Style.css'
const Nha = () => {
  return (
    <div>
      <NavbarChuNha />
      <Container>
        <div className="title_chu_nha">
          <h2>Bảng điều khiển</h2>
        </div>
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12}>
        <Grid container>
          <Grid item xs={12} sm={12} md={8} lg={8}>
            <div className="yeu_cau_chu_nha">
              <h3>Yêu cầu</h3>
              <p>Ngay lúc này bạn không cần làm gì cả – mọi thứ đã sẵn sàng!</p>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <div className="thong_bao_chu_nha">
              <div className="h3_chu_nha">
                {' '}
                <h3>Thông báo</h3>
              </div>
              <div className="p_chu_nha">
                <p>
                  Thêm email công việc của bạn để nhận các đặc quyền bổ sung cho
                  các chuyến công tác, chẳng hạn như tính phí đơn giản. thg 12
                  23
                </p>
              </div>
              <div className="p_p_chu_nha">
                <p>Mời một người bạn, kiếm $26. thg 12 23</p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={8}>
            <div className="dat_phong_chu_nha">
              <h3>Đặt phòng</h3>
              <p>Không có đặt phòng sắp tới nào</p>
            </div>
          </Grid>
        </Grid>
        </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Nha
