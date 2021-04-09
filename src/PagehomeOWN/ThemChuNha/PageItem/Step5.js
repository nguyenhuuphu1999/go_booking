import { Button, Grid } from '@material-ui/core'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Step5 = (props) => {
  const [reviewSource, setReviewSource] = useState([])
  const [dem, setDem] = useState(0)
  const [addHotels,setAddHotels] =useState()

  useEffect(() => {
   
    setAddHotels(JSON.parse(localStorage.getItem('infoThenNhaTemp')))
    //('image')
    //(addHotels)
   
  }, [])


  const onImageChange = e => {
    setDem(dem + 1)
    if (e.target.files && e.target.files[0]) {
      // //("e.target.files[0]")
      const file = e.target.files[0]
      preViewFile(file)
    }
  }


  // ,{  withCredentials:true}
  const preViewFile = async file => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setReviewSource(reader.result)
      var data = {
        data: reader.result,
        id_apartment: localStorage.getItem('id_temp_apartment'),
      }
      //(data)
      try {
        axios
          .post(
            process.env.REACT_APP_API_URL + '/uploadImageOwn/avatar',
            JSON.stringify({ data }),
            {
              headers: { 'Content-type': 'application/json' },
            },
          )
          .then(res => {
            //(res.status)
          })
          .catch(err => {
            //(err)
          })
      } catch (error) {}
    }
  }

  //preview1
  const [reviewSource1, setReviewSource1] = useState([])

  const onImageChange1 = e => {
    setDem(dem + 1)
    if (e.target.files && e.target.files[0]) {
      // //("e.target.files[0]")
      const file = e.target.files[0]
      preViewFile1(file)

      //(reviewSource1)
    }
  }

  const preViewFile1 = file => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setReviewSource1(reader.result)
      var data = {
        data: reader.result,
        id_apartment: localStorage.getItem('id_temp_apartment'),
      }
      try {
        axios
          .post(
            process.env.REACT_APP_API_URL + '/uploadImageOwn/avatar',
            JSON.stringify({ data }),
            {
              headers: { 'Content-type': 'application/json' },
            },
          )
          .then(res => {
            //(res)
          })
          .catch(err => {
            //(err)
          })
      } catch (error) {}
    }
    //(preViewFile)
  }

  //preview2
  const [reviewSource2, setReviewSource2] = useState([])

  const onImageChange2 = e => {
    setDem(dem + 1)
    if (e.target.files && e.target.files[0]) {
      // //("e.target.files[0]")
      const file = e.target.files[0]
      preViewFile2(file)

      // //(reviewSource2)
    }
  }

  const preViewFile2 = file => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setReviewSource2(reader.result)
      var data = {
        data: reader.result,
        id_apartment: localStorage.getItem('id_temp_apartment'),
      }
      //(data)
      try {
        axios
          .post(
            process.env.REACT_APP_API_URL + '/uploadImageOwn/avatar',
            JSON.stringify({ data }),
            {
              headers: { 'Content-type': 'application/json' },
            },
          )
          .then(res => {
            //(res)
          })
          .catch(err => {
            //(err)
          })
      } catch (error) {}
    }
    //(preViewFile)
  }
  //preview3
  const [reviewSource3, setReviewSource3] = useState([])

  const onImageChange3 = e => {
    setDem(dem + 1)
    if (e.target.files && e.target.files[0]) {
      // //("e.target.files[0]")
      const file = e.target.files[0]
      preViewFile3(file)

      //(reviewSource)
    }
  }

  const preViewFile3 = file => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setReviewSource3(reader.result)
      var data = {
        data: reader.result,
        id_apartment: localStorage.getItem('id_temp_apartment'),
      }
      try {
        axios
          .post(
            process.env.REACT_APP_API_URL + '/uploadImageOwn/avatar',
            JSON.stringify({ data }),
            {
              headers: { 'Content-type': 'application/json' },
            },
          )
          .then(res => {
            //(res)
          })
          .catch(err => {
            //(err)
          })
      } catch (error) {}
    }
    //(preViewFile3)
  }

  //preview4
  const [reviewSource4, setReviewSource4] = useState([])

  const onImageChange4 = e => {
    setDem(dem + 1)
    if (e.target.files && e.target.files[0]) {
      // //("e.target.files[0]")
      const file = e.target.files[0]
      preViewFile4(file)

      //(reviewSource)
    }
  }

  const preViewFile4 = file => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setReviewSource4(reader.result)
      var data = {
        data: reader.result,
        id_apartment: localStorage.getItem('id_temp_apartment'),
      }
      try {
        axios
          .post(
            process.env.REACT_APP_API_URL + '/uploadImageOwn/avatar',
            JSON.stringify({ data }),
            {
              headers: { 'Content-type': 'application/json' },
            },
          )
          .then(res => {
            //(res)
          })
          .catch(err => {
            //(err)
          })
      } catch (error) {}
    }
    //(preViewFile4)
  }

  //preview5
  const [reviewSource5, setReviewSource5] = useState([])

  const onImageChange5 = e => {
    setDem(dem + 1)
    if (e.target.files && e.target.files[0]) {
      // //("e.target.files[0]")
      const file = e.target.files[0]
      preViewFile5(file)

      //(reviewSource)
    }
  }

  const preViewFile5 = file => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setReviewSource5(reader.result)
      var data = {
        data: reader.result,
        id_apartment: localStorage.getItem('id_temp_apartment'),
      }
      try {
        axios
          .post(
            process.env.REACT_APP_API_URL + '/uploadImageOwn/avatar',
            JSON.stringify({ data }),
            {
              headers: { 'Content-type': 'application/json' },
            },
          )
          .then(res => {
            //(res)
          })
          .catch(err => {
            //(err)
          })
      } catch (error) {}
    }
    //(preViewFile5)
  }

  const onClick = () => {
    if (dem => 5) {
      localStorage.setItem('step', 5)
    }
  }
  const [image, setImage] = useState()

  const handleChange = e => {
    var path_image = e.target.files[0]
    preViewFile(path_image)
  }
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '85%' }}>
          <p style={{ fontSize: '22px', margin: '29px 0px' }}>
            Thêm ảnh cho căn hộ của bạn ?
          </p>

          <form
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
            }}>
            <Grid container spacing={3}>
              <Grid item xs={6} sm={6} md={6} lg={6}>
                {reviewSource == '' ? (
                  <label>
                    <img width="100%" src="/add_img-removebg-preview.png" />
                    <input
                      type="file"
                      name="myImage"
                      onChange={onImageChange}
                      multiple
                      style={{ display: 'none' }}
                    />
                  </label>
                ) : (
                  reviewSource && (
                    <label>
                      <img
                        width="100%"
                        src={reviewSource}
                        style={{ height: '150px' }}
                      />
                      <input
                        type="file"
                        name="myImage"
                        onChange={onImageChange}
                        multiple
                        style={{ display: 'none' }}
                      />
                    </label>
                  )
                )}
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={6}>
                {reviewSource1 == '' ? (
                  <label>
                    <img width="100%" src="/add_img-removebg-preview.png" />
                    <input
                      type="file"
                      name="myImage"
                      onChange={onImageChange1}
                      multiple
                      style={{ display: 'none' }}
                    />
                  </label>
                ) : (
                  reviewSource1 && (
                    <label>
                      <img width="100%" src={reviewSource1} />
                      <input
                        type="file"
                        name="myImage"
                        onChange={onImageChange1}
                        multiple
                        style={{ display: 'none' }}
                      />
                    </label>
                  )
                )}
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={6}>
                {reviewSource2 == '' ? (
                  <label>
                    <img width="100%" src="/add_img-removebg-preview.png" />
                    <input
                      type="file"
                      name="myImage"
                      onChange={onImageChange2}
                      multiple
                      style={{ display: 'none' }}
                    />
                  </label>
                ) : (
                  reviewSource2 && (
                    <label>
                      <img width="100%" src={reviewSource2} />
                      <input
                        type="file"
                        name="myImage"
                        onChange={onImageChange2}
                        multiple
                        style={{ display: 'none' }}
                      />
                    </label>
                  )
                )}
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={6}>
                {reviewSource3 == '' ? (
                  <label>
                    <img width="100%" src="/add_img-removebg-preview.png" />
                    <input
                      type="file"
                      name="myImage"
                      onChange={onImageChange3}
                      multiple
                      style={{ display: 'none' }}
                    />
                  </label>
                ) : (
                  reviewSource3 && (
                    <label>
                      <img width="100%" src={reviewSource3} />
                      <input
                        type="file"
                        name="myImage"
                        onChange={onImageChange3}
                        multiple
                        style={{ display: 'none' }}
                      />
                    </label>
                  )
                )}
              </Grid>

              <Grid item xs={6} sm={6} md={6} lg={6}>
                {reviewSource4 == '' ? (
                  <label>
                    <img width="100%" src="/add_img-removebg-preview.png" />
                    <input
                      type="file"
                      name="myImage"
                      onChange={onImageChange4}
                      multiple
                      style={{ display: 'none' }}
                    />
                  </label>
                ) : (
                  reviewSource4 && (
                    <label>
                      <img width="100%" src={reviewSource4} />
                      <input
                        type="file"
                        name="myImage"
                        onChange={onImageChange4}
                        multiple
                        style={{ display: 'none' }}
                      />
                    </label>
                  )
                )}
              </Grid>

              <Grid item xs={6} sm={6} md={6} lg={6}>
                {reviewSource5 == '' ? (
                  <label>
                    <img width="100%" src="/add_img-removebg-preview.png" />
                    <input
                      type="file"
                      name="myImage"
                      onChange={onImageChange5}
                      multiple
                      style={{ display: 'none' }}
                    />
                  </label>
                ) : (
                  reviewSource3 && (
                    <label>
                      <img width="100%" src={reviewSource5} />
                      <input
                        type="file"
                        name="myImage"
                        onChange={onImageChange5}
                        multiple
                        style={{ display: 'none' }}
                      />
                    </label>
                  )
                )}
              </Grid>
            </Grid>

            <div style={{ padding: '30px' }}>
              {dem >= 5 ? (
                <a href="/ThemChuNha/?step=6">
                  <Button
                    onClick={onClick}
                    style={{
                      margin: 'auto',
                      marginTop: '10%',
                      borderRadius: '20px',
                      width: '100%',
                      outline: 'none',
                    }}
                    variant="contained"
                    color="secondary">
                    Tiếp tục
                  </Button>
                </a>
              ) : (
                <Link to="/pagehome?item=7">
                  <Button
                    style={{
                      margin: 'auto',
                      marginTop: '10%',
                      borderRadius: '20px',
                      width: '100%',
                      outline: 'none',
                    }}
                    variant="contained"
                    color="default">
                    Tiếp tục
                  </Button>
                </Link>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Step5
