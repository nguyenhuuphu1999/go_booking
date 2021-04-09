import FaceBook from '../../img/facebook-logo.png'
import Twitter from '../../img/twitter-logo.png'
import Instagram from '../../img/instagram-logo.png'
import Momo from '../../img/momo-logo.png'
import AirPay from '../../img/AirPay-logo.png'
import Saigontourist from '../../img/saigon-tourist-logo.png'
import './Footer.css'
import { Container, Grid } from '@material-ui/core'

const Footer = () => {
  return (
    <div className="footer">
    
        <div className="top-footer">
        <Container>
          <Grid container spacing={3} style={{justifyContent:'center'}}>
            <Grid item xs={2} sm={2} md={2} lg={2}>
              <div>
                <p>Trợ giúp</p>
                <span>Trung tâm trợ giúp</span>
                <span>Câu hỏi thường gặp</span>
                <span>Chính sách Bảo mật</span>
                <span>Chính sách về cookie</span>
                <span>Điều khoản sử dụng</span>
              </div>
            </Grid>
            <Grid item xs={2} sm={2} md={2} lg={2}>
              <div className="about-us">
                <p>Về chúng tôi</p>
                <span>PointsMAX</span>
                <span>Tuyển dụng</span>
                <span>Báo chí</span>
                <span>Nhật ký mạng</span>
              </div>{' '}
            </Grid>{' '}
            <Grid item xs={2} sm={2} md={2} lg={2}>
              <div className="travel-destination">
                <p>Điểm du lịch</p>
                <span>Quốc gia</span>
                <span>Thành phố</span>
              </div>{' '}
            </Grid>
            <Grid item xs={2} sm={2} md={2} lg={2}>
              <div className="partner">
                <p>Đối tác của</p>
                <span>chúng tôi</span>
                <span>Cổng thông tin</span>
                <span>đối tác YCS</span>
                <span>Giải pháp đối tác</span>
                <span>Đối tác liên kết</span>
                <span>Đối tác kết nối</span>
              </div>{' '}
            </Grid>
            <Grid item xs={2} sm={2} md={2} lg={2}>
              <div className="download">
                <p>Tải ứng dụng</p>
                <span>Ứng dụng iOS</span>
                <span>Ứng dụng Android</span>
              </div>
            </Grid>
          </Grid>
          </Container>
        </div>
     

      <div className="below-footer">
        <div>
          <span>Mọi nội dung tại đây</span>
          <span>© 2020 – 2021</span>
          <span>Công ty TNHH Tư nhân GO. Bảo Lưu Mọi Quyền</span>
        </div>
        <p>
          GO.vn là thành viên của Tập đoàn Booking Holdings, nhà cung cấp dịch
          vụ du lịch trực tuyến & các dịch vụ có liên quan hàng đầu thế giới.
        </p>
        <ul className="partner-logo">
        <Grid container spacing={3} style={{justifyContent:'center'}}>
            <Grid item xs={4} sm={4} md={4} lg={4}>
          <li>
            <img src={AirPay} alt="" />
          </li>
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4}>
          <li>
            <img src={Saigontourist} alt="" />
          </li>
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4}>
          <li>
            <img src={Momo} alt="" />
          </li>
          </Grid>
          </Grid>
        </ul>
        <hr />
        <ul className="connect">
         
        <Grid container spacing={3} style={{justifyContent:'center'}}>
            <Grid item xs={4} sm={4} md={4} lg={4}>
          <li>
          <img src={FaceBook} alt="" />
          </li>
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4}>
          <li>
          <img src={Twitter} alt="" />
          </li>
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4}>
          <li>
          <img src={Instagram} alt="" />
          </li>
          </Grid>
          </Grid>
        </ul>
      </div>
    </div>
  )
}

export default Footer
