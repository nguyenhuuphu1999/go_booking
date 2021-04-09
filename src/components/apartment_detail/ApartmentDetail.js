import React, { useEffect, useState } from 'react'
import Rating from '../homepage_component/CustomRating'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import axios from 'axios'
import { useParams } from 'react-router'

// const {apartment_name, title, rating, address, price, img1, img2, img3, img4} = {item}
const ApartmentDetail = props => {
const param =   useParams()
  //(props.data)
  const [info,setInfo] = useState({apartment_name:'',price:''})
  useEffect(()=>{
    //(props.data)
    if(props.data != '' && props.data != null){
      setInfo(
        (item)=>({
          ...item,apartment_name:props.data.apartment_name,
          price:props.data.price
        })
      )
      //("props.data")
    }
  },[props.data])

 

  const handleChangInput = (e) =>{
    const {name,value}= e.target
    setInfo(
      (item)=>({
        ...item,[name]:value
       
      }))
      //(value)
  }


  const imgStyle = {
    width: '100%',
    height: '100%',
  }

  const txtStyle = {
    marginTop: '0px',
  }
//////////0
  const [reviewSource, setReviewSource] = useState([])

  const handleChangImage = (e, id) => {
    // //(e)
    // //(id)
    if (e.target.files && e.target.files[0]) {
      //("e.target.files[0]")
      const file = e.target.files[0]
      preViewFile(file,id)
    }
  }

  const preViewFile = async (file, id) => {
    //(id)
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setReviewSource(reader.result)
      //(reviewSource)
      var data = {
        data: reader.result,
        id: id,
      }
      //(id)
      try {
        axios
          .put(
             process.env.REACT_APP_API_URL +'/uploadImageOwn/avatar',
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
  }
 //////////1
 const [reviewSource1, setReviewSource1] = useState([])

 const handleChangImage1 = (e, id) => {
  
   if (e.target.files && e.target.files[0]) {
     //("e.target.files[0]")
     const file = e.target.files[0]
     preViewFile1(file,id)
   }
 }

 const preViewFile1 = async (file, id) => {
   //(id)
   const reader = new FileReader()
   reader.readAsDataURL(file)
   reader.onloadend = () => {
     setReviewSource1(reader.result)
     //(reviewSource)
     var data = {
       data: reader.result,
       id: id,
     }
     //(id)
     try {
       axios
         .put(
            process.env.REACT_APP_API_URL +'/uploadImageOwn/avatar',
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
 }

 //////////2
 const [reviewSource2, setReviewSource2] = useState([])

 const handleChangImage2 = (e, id) => {
   // //(e)
   // //(id)
   if (e.target.files && e.target.files[0]) {
     //("e.target.files[0]")
     const file = e.target.files[0]
     preViewFile2(file,id)
   }
 }

 const preViewFile2 = async (file, id) => {
   //(id)
   const reader = new FileReader()
   reader.readAsDataURL(file)
   reader.onloadend = () => {
     setReviewSource2(reader.result)
     //(reviewSource)
     var data = {
       data: reader.result,
       id: id,
     }
     //(id)
     try {
       axios
         .put(
            process.env.REACT_APP_API_URL +'/uploadImageOwn/avatar',
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
 }

 //////////3
 const [reviewSource3, setReviewSource3] = useState([])

 const handleChangImage3 = (e, id) => {
   // //(e)
   // //(id)
   if (e.target.files && e.target.files[0]) {
     //("e.target.files[0]")
     const file = e.target.files[0]
     preViewFile3(file,id)
   }
 }

 const preViewFile3 = async (file, id) => {
   //(id)
   const reader = new FileReader()
   reader.readAsDataURL(file)
   reader.onloadend = () => {
     setReviewSource3(reader.result)
     //(reviewSource)
     var data = {
       data: reader.result,
       id: id,
     }
     //(id)
     try {
       axios
         .put(
            process.env.REACT_APP_API_URL +'/uploadImageOwn/avatar',
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
 }
 //////////
 const [reviewSource4, setReviewSource4] = useState([])

 const handleChangImage4 = (e, id) => {
   // //(e)
   // //(id)
   if (e.target.files && e.target.files[0]) {
     //("e.target.files[0]")
     const file = e.target.files[0]
     preViewFile4(file,id)
   }
 }

 const preViewFile4 = async (file, id) => {
   //(id)
   const reader = new FileReader()
   reader.readAsDataURL(file)
   reader.onloadend = () => {
     setReviewSource4(reader.result)
     //(reviewSource)
     var data = {
       data: reader.result,
       id: id,
     }
     //(id)
     try {
       axios
         .put(
            process.env.REACT_APP_API_URL +'/uploadImageOwn/avatar',
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
 }

 if(props.edit == true && typeof props.data != 'undefined' && props.data != null  ){
   //(props.edit)
   //(props.data)
   axios.put( process.env.REACT_APP_API_URL + '/apartment/' + param.id , info)
   .then(res=>{
     //(res)
   })
   .catch(err=>{
     //(err)
   })
 }

  return (
    <Container>
      {props.edit == false ? (
        <div>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Grid container spacing={1}>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <Grid container spacing={1}>
                    <Grid
                      item
                      xs={6}
                      sm={6}
                      md={6}
                      lg={6}
                      style={{
                        width: '100%',
                        display: 'flex',
                        bordeRadius: ' 10px 0px 0px 10px',
                      }}>
                      {typeof props.data.apartment_images != 'undefined' &&
                      props.data.apartment_images != null ? (
                        <div style={{width: "100%"}}>
                          <img
                            style={imgStyle}
                            src={props.data.apartment_images[0].url_image}
                            alt=""
                          />
                        </div>
                      ) : (
                        ''
                      )}
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                      <Grid container spacing={1}>
                        <Grid
                          item
                          xs={6}
                          sm={6}
                          md={6}
                          lg={6}
                          style={{ width: '100%', display: 'flex' }}>
                          {typeof props.data.apartment_images != 'undefined' &&
                          props.data.apartment_images != null ? (
                            <div style={{width: "100%"}}>
                              <img
                                style={imgStyle}
                                src={props.data.apartment_images[1].url_image}
                                alt=""
                              />
                            </div>
                          ) : (
                            ''
                          )}
                        </Grid>
                        <Grid
                          item
                          xs={6}
                          sm={6}
                          md={6}
                          lg={6}
                          style={{ width: '100%', display: 'flex' }}>
                          {typeof props.data.apartment_images != 'undefined' &&
                          props.data.apartment_images != null ? (
                            <div style={{width: "100%"}}>
                              <img
                                style={imgStyle}
                                src={props.data.apartment_images[2].url_image}
                                alt=""
                              />
                            </div>
                          ) : (
                            ''
                          )}
                        </Grid>
                        <Grid
                          item
                          xs={6}
                          sm={6}
                          md={6}
                          lg={6}
                          style={{ width: '100%', display: 'flex' }}>
                          {typeof props.data.apartment_images != 'undefined' &&
                          props.data.apartment_images != null ? (
                            <div style={{width: "100%"}}>
                              <img
                                style={imgStyle}
                                src={props.data.apartment_images[3].url_image}
                                alt=""
                              />
                            </div>
                          ) : (
                            ''
                          )}
                        </Grid>
                        <Grid
                          item
                          xs={6}
                          sm={6}
                          md={6}
                          lg={6}
                          style={{ width: '100%', display: 'flex' }}>
                          {typeof props.data.apartment_images != 'undefined' &&
                          props.data.apartment_images != null &&
                          typeof props.data.apartment_images[4].url_image !=
                            'undefined' ? (
                              <div style={{width: "100%"}}>
                              <img
                                style={imgStyle}
                                src={props.data.apartment_images[4].url_image}
                                alt=""
                              />
                            </div>
                          ) : (
                            ''
                          )}
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              {typeof props.data != 'undefined' && props.data != null ? (
                <div style={txtStyle}>
                  <h3>{info.apartment_name}</h3>
                  <div>
                    <span style={{ marginRight: '20px' }}>
                      <Rating name="read-only" value={5} readOnly />
                    </span>
                  </div>
                  <div style={{ color: 'red' }}>
                    Giá chỉ từ: {info.price}$/đêm
                  </div>
                </div>
              ) : (
                ''
              )}
            </Grid>
          </Grid>
        </div> ///////////////////////////////////////////////////////////////////////////////
      ) : (
        <div>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Grid container spacing={1}>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <Grid container spacing={1}>
                    <Grid
                      item
                      xs={6}
                      sm={6}
                      md={6}
                      lg={6}
                      style={{
                        width: '100%',
                        display: 'flex',
                        bordeRadius: ' 10px 0px 0px 10px',
                      }}>
                      {typeof props.data.apartment_images != 'undefined' &&
                      props.data.apartment_images != null ? (
                        <div style={{ width: '100%' }}>
                          {reviewSource == '' ? (
                            <label>
                              <img
                                style={imgStyle}
                                src={props.data.apartment_images[0].url_image}
                                alt=""
                              />
                            
                              <input
                                style={{ display: 'none' }}
                                onChange={(e)=>handleChangImage(e,props.data.apartment_images[0].id)}
                               
                                type="file"
                                accept={
                                  props.data.apartment_images[0].url_image
                                }
                              />
                            </label>
                          ) : (
                            <label>
                              <img style={imgStyle} src={reviewSource} alt="" />
                              <input
                                style={{ display: 'none' }}
                                onChange={(e)=>handleChangImage1(e,props.data.apartment_images[1].id)}
                                type="file"
                                accept={
                                  props.data.apartment_images[0].url_image
                                }
                              />
                            </label>
                          )}
                        </div>
                      ) : (
                        ''
                      )}
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                      <Grid container spacing={1}>
                        <Grid
                          item
                          xs={6}
                          sm={6}
                          md={6}
                          lg={6}
                          style={{ width: '100%', display: 'flex' }}>
                          {typeof props.data.apartment_images != 'undefined' &&
                          props.data.apartment_images != null ? (
                            <div style={{ width: '100%' }}>
                            {reviewSource1 == '' ? (
                            <label>
                              <img
                                style={imgStyle}
                                src={props.data.apartment_images[1].url_image}
                                alt=""
                              />
                              
                              <input
                                style={{ display: 'none' }}
                                onChange={(e)=>handleChangImage1(e,props.data.apartment_images[1].id)}
                               
                                type="file"
                               
                              />
                            </label>
                          ) : (
                            <label>
                              <img style={imgStyle} src={reviewSource1} alt="" />
                              <input
                                style={{ display: 'none' }}
                                onChange={(e)=>handleChangImage1(e,props.data.apartment_images[1].id)}
                                type="file"
                               
                              />
                            </label>
                          )}
                        </div>
                      ) : (
                        ''
                      )}
                        </Grid>
                        <Grid
                          item
                          xs={6}
                          sm={6}
                          md={6}
                          lg={6}
                          style={{ width: '100%', display: 'flex' }}>
                         {typeof props.data.apartment_images != 'undefined' &&
                          props.data.apartment_images != null ? (
                            <div style={{ width: '100%' }}>
                            {reviewSource2 == '' ? (
                            <label>
                              <img
                                style={imgStyle}
                                src={props.data.apartment_images[2].url_image}
                                alt=""
                              />
                              
                              <input
                                style={{ display: 'none' }}
                                onChange={(e)=>handleChangImage2(e,props.data.apartment_images[2].id)}
                               
                                type="file"
                               
                              />
                            </label>
                          ) : (
                            <label>
                              <img style={imgStyle} src={reviewSource2} alt="" />
                              <input
                                style={{ display: 'none' }}
                                onChange={(e)=>handleChangImage2(e,props.data.apartment_images[2].id)}
                                type="file"
                               
                              />
                            </label>
                          )}
                        </div>
                      ) : (
                        ''
                      )}
                        </Grid>
                        <Grid
                          item
                          xs={6}
                          sm={6}
                          md={6}
                          lg={6}
                          style={{ width: '100%', display: 'flex' }}>
                              {typeof props.data.apartment_images != 'undefined' &&
                          props.data.apartment_images != null ? (
                            <div style={{ width: '100%' }}>
                            {reviewSource3 == '' ? (
                            <label>
                              <img
                                style={imgStyle}
                                src={props.data.apartment_images[3].url_image}
                                alt=""
                              />
                              
                              <input
                                style={{ display: 'none' }}
                                onChange={(e)=>handleChangImage3(e,props.data.apartment_images[3].id)}
                               
                                type="file"
                               
                              />
                            </label>
                          ) : (
                            <label>
                              <img style={imgStyle} src={reviewSource3} alt="" />
                              <input
                                style={{ display: 'none' }}
                                onChange={(e)=>handleChangImage3(e,props.data.apartment_images[3].id)}
                                type="file"
                               
                              />
                            </label>
                          )}
                        </div>
                      ) : (
                        ''
                      )}
                        </Grid>
                        <Grid
                          item
                          xs={6}
                          sm={6}
                          md={6}
                          lg={6}
                          style={{ width: '100%', display: 'flex' }}>
                              {typeof props.data.apartment_images != 'undefined' &&
                          props.data.apartment_images != null ? (
                            <div style={{ width: '100%' }}>
                            {reviewSource4 == '' ? (
                            <label>
                              <img
                                style={imgStyle}
                                src={props.data.apartment_images[4].url_image}
                                alt=""
                              />
                              
                              <input
                                style={{ display: 'none' }}
                                onChange={(e)=>handleChangImage4(e,props.data.apartment_images[4].id)}
                               
                                type="file"
                               
                              />
                            </label>
                          ) : (
                            <label>
                              <img style={imgStyle} src={reviewSource4} alt="" />
                              <input
                                style={{ display: 'none' }}
                                onChange={(e)=>handleChangImage2(e,props.data.apartment_images[4].id)}
                                type="file"
                               
                              />
                            </label>
                          )}
                        </div>
                      ) : (
                        ''
                      )}
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              {typeof props.data != 'undefined' && props.data != null ? (
                <div style={txtStyle}>
                  <input
                    style={{
                      border: '1px solid black',
                      width: '100%',
                      borderRadius: '20px',
                      outline: 'none',
                      padding: ' 2px 20px',
                    }}
                    type="text"
                    name="apartment_name"
                    value={info.apartment_name}
                    onChange={handleChangInput}
                    
                  />
                  <div>
                    <span style={{ marginRight: '20px' }}>
                      <Rating name="read-only" value={5} readOnly />
                    </span>
                  </div>
                  <div style={{ color: 'red' }}>
                    Giá chỉ từ:
                    <input
                      style={{ border: '1px solid black', width: '20px' }}
                      type="text"
                      name="price"
                      value={info.price}
                      onChange={handleChangInput}
                    />
                    $/đêm
                  </div>
                </div>
              ) : (
                ''
              )}
            </Grid>
          </Grid>
        </div>
      )}
    </Container>
  )
}

export default ApartmentDetail
{
  /* <div className="ApartmentDetail">
<div className="grid-container" style={container}>
  {
    (typeof props.data != 'undefined' && props.data != null)?
    <div className="gallery1" style={gallery1}>
      <img style={imgStyle} src={props.data.apartment_images[0].url_image} alt="" />
    </div>:''
  }
 {
   (typeof props.data != 'undefined' && props.data != null)?
   <div className="gallery2" style={gallery2}>
    <img style={imgStyle} src={props.data.apartment_images[1].url_image} alt="" />
  </div>:''
 }
 {
   (typeof props.data != 'undefined' && props.data != null )?
    <div style={{ width: '100%' }}>
    <img style={imgStyle} src={props.data.apartment_images[2].url_image} alt="" />
  </div>:''
 }
 {
   (typeof props.data != 'undefined' && props.data != null )?
    <div style={{ width: '100%' }}>
    <img style={imgStyle} src={props.data.apartment_images[3].url_image} alt="" />
  </div>:''
 }
</div>
{
  (typeof props.data != "undefined" && props.data != null)?
  <div style={txtStyle}>
  <h3>{props.data.apartment_name}</h3>
  <div>
    <span style={{ marginRight: '20px' }}>
      <Rating ratings={props.data.ratings} />
    </span>
  </div>
  <div style={{ color: 'red' }}>Giá chỉ từ: {props.data.price}$/đêm</div>
</div>:''
}
</div> */
}
