import { Grid } from '@material-ui/core'
import React from 'react'

const workList = [
  {
    imgUrl:
      'https://s3-alpha-sig.figma.com/img/ca45/e324/82198b93d2e8913104a1ac91b8234f8f?Expires=1612137600&Signature=Q~8NnFtTbAyhIA6jEtbu0ThfuYVNQkenZbo4cVAWIZzcZ9N9~Agw2n99HDcSJyEZBuLYOu~E4XcDxhN7L--cqtJ66VWpYmiFAJ1enWtphrj3yFevcfoiXYL~vHKrnazQNTnACLGricR2~95P3leWFmX-XBlVUpAQdwOdmtYzNc1vzCKZgIog3G6OZvaXpbfE0zQyvUVLVhO9yZ26a~DnyyPs0FQRXu0Y1a6hefkYyxbOXWmXbUP0K3e0FsHiyAIdThPn~6bDEWRkR~dkMTNO98lrVg3e7jxeKJnTixgFvje5j0pRA5jvhSPB214K5cG6-MDj0Ph~-m77RVxPu47sAA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    title: 'cách bắt đầu trên GO ',
    description:
      " Chung cư studio 35 m² có 1 phòng tắm riêng ở Quận 1 (Alley's Hostel (on Bui Vien Street)-Dormitory)",
  },
  {
    imgUrl:
      'https://s3-alpha-sig.figma.com/img/ca45/e324/82198b93d2e8913104a1ac91b8234f8f?Expires=1612137600&Signature=Q~8NnFtTbAyhIA6jEtbu0ThfuYVNQkenZbo4cVAWIZzcZ9N9~Agw2n99HDcSJyEZBuLYOu~E4XcDxhN7L--cqtJ66VWpYmiFAJ1enWtphrj3yFevcfoiXYL~vHKrnazQNTnACLGricR2~95P3leWFmX-XBlVUpAQdwOdmtYzNc1vzCKZgIog3G6OZvaXpbfE0zQyvUVLVhO9yZ26a~DnyyPs0FQRXu0Y1a6hefkYyxbOXWmXbUP0K3e0FsHiyAIdThPn~6bDEWRkR~dkMTNO98lrVg3e7jxeKJnTixgFvje5j0pRA5jvhSPB214K5cG6-MDj0Ph~-m77RVxPu47sAA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    title: 'Cách kiếm tiền trên GO  ',
    description:
      " Chung cư studio 35 m² có 1 phòng tắm riêng ở Quận 1 (Alley's Hostel (on Bui Vien Street)-Dormitory)",
  },
  {
    imgUrl:
      'https://s3-alpha-sig.figma.com/img/ca45/e324/82198b93d2e8913104a1ac91b8234f8f?Expires=1612137600&Signature=Q~8NnFtTbAyhIA6jEtbu0ThfuYVNQkenZbo4cVAWIZzcZ9N9~Agw2n99HDcSJyEZBuLYOu~E4XcDxhN7L--cqtJ66VWpYmiFAJ1enWtphrj3yFevcfoiXYL~vHKrnazQNTnACLGricR2~95P3leWFmX-XBlVUpAQdwOdmtYzNc1vzCKZgIog3G6OZvaXpbfE0zQyvUVLVhO9yZ26a~DnyyPs0FQRXu0Y1a6hefkYyxbOXWmXbUP0K3e0FsHiyAIdThPn~6bDEWRkR~dkMTNO98lrVg3e7jxeKJnTixgFvje5j0pRA5jvhSPB214K5cG6-MDj0Ph~-m77RVxPu47sAA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    title: 'Không gian của tôi có phù hợp?  ',
    description:
      " Chung cư studio 35 m² có 1 phòng tắm riêng ở Quận 1 (Alley's Hostel (on Bui Vien Street)-Dormitory)",
  },
  {
    imgUrl:
      'https://s3-alpha-sig.figma.com/img/ca45/e324/82198b93d2e8913104a1ac91b8234f8f?Expires=1612137600&Signature=Q~8NnFtTbAyhIA6jEtbu0ThfuYVNQkenZbo4cVAWIZzcZ9N9~Agw2n99HDcSJyEZBuLYOu~E4XcDxhN7L--cqtJ66VWpYmiFAJ1enWtphrj3yFevcfoiXYL~vHKrnazQNTnACLGricR2~95P3leWFmX-XBlVUpAQdwOdmtYzNc1vzCKZgIog3G6OZvaXpbfE0zQyvUVLVhO9yZ26a~DnyyPs0FQRXu0Y1a6hefkYyxbOXWmXbUP0K3e0FsHiyAIdThPn~6bDEWRkR~dkMTNO98lrVg3e7jxeKJnTixgFvje5j0pRA5jvhSPB214K5cG6-MDj0Ph~-m77RVxPu47sAA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    title: 'Không gian của tôi có phù hợp?  ',
    description:
      " Chung cư studio 35 m² có 1 phòng tắm riêng ở Quận 1 (Alley's Hostel (on Bui Vien Street)-Dormitory)",
  },
]

const Works = () => {
  const container = {
    width: '1350px',
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0 auto',
  }

  return (
    <Grid container spacing={3} className="page-become-apartner-work">
      {workList.map(work => (
        <Work {...work} />
      ))}
    </Grid>
  )
}

export default Works

const Work = ({ imgUrl, title, description }) => {
  const style = {
    padding: '25px',
    width: '25%',
    overflow: 'hidden',
    height: 'auto',
    borderRadius: '20px',
    margin: '0 auto',
  }
  const imgStyle = {
    width: '100%',
    borderRadius: '20px',
  }
  return (
    <Grid item xs={6} sm={6} md={3} lg={3}>
      <img style={imgStyle} src={imgUrl} alt="" />
      <h3>{title}</h3>
      <span>{description}</span>
    </Grid>
  )
}
