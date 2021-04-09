import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Step1 from './Page/PageThueNha/Step1'
import Step2 from './Page/PageThueNha/Step2'
import Step3 from './Page/PageThueNha/Step3'
import Step4 from './Page/PageThueNha/Step4'
import Step5 from './Page/PageThueNha/Step5'
import Step6 from './Page/PageThueNha/Step6'
import Finish from './Page/PageThueNha/Finish'

const Index = () => {
  const param = useParams()

  const [ishasApartment, setishasApartment] = useState()

  useEffect(() => {
    localStorage.setItem('page', '')
    //http://localhost:4001/apartment/1?limit=2

    axios
      .get(process.env.REACT_APP_API_URL + '/apartment/' + param.id)
      .then(res => {
        setishasApartment(res.data.data.length)
      })
      .catch(err => {
        //(err)
      })
  })

  ////////////////////////////////////////////////////////////////Start
  const [addHotels, setAddHotels] = useState(
    {
      id_city: 1,
      id_district: '1',
      id_type_house: 1,
      provincial: '',
      apartment_name: '',
      price: null,
      ratings: 5,
      id_user_own: localStorage.getItem('id'),
      image_url: 'chua co data',
    },

    // "id_city": null,
    // "id_district": 1,
    // "id_type_house": 1,
    // "provincial": "Ho Chi Minh",
    // "apartment_name": "",
    // "price": null,
    // "ratings": null,
    // "image_url": "",
    // "id_user_own": 1
  )
  const onChange = e => {
    const { name, value } = e.target
    setAddHotels(item => ({
      ...item,
      [name]: value,
    }))

    //(e.target.value)
  }
  //typeApartment
  const onChangeTypeApartment = e => {
    const { name, value } = e.target
    setAddHotels(item => ({
      ...item,
      [name]: value,
    }))
    // //()
  }

  //how many customer and bath room
  const [customer, setCustomer] = useState(1)
  const [bed, setbed] = useState(1)

  // how many bathroom

  const [bathRoom, setbathRoom] = useState(1)

  ///where is your house

  const onChangeWhereisYourHouse = e => {
    //(e.target.value)
    const { name, value } = e.target
    setAddHotels(item => ({
      ...item,
      [name]: value,
    }))
  }

  //   useEffect(() => {
  //     //(props.open)
  //   }, [])
  const [OnChange, setOnchange] = useState('')
  const HandleChangeProvincial = e => {
    // //(e)
    const { name, value } = e.target
    setAddHotels(setSate => ({
      ...setSate,
      [name]: value,
    }))

    setOnchange(value)
  }
  const [OnChange1, setOnchange1] = useState('')
  const handleChangeInputApartmentName = e => {
    const { name, value } = e.target
    setAddHotels(setSate => ({
      ...setSate,
      [name]: value,
    }))
    setOnchange1(value)
  }
  const [OnChange2, setOnchange2] = useState('')
  const handleChangeInputPrice = e => {
    const { name, value } = e.target
    setAddHotels(setSate => ({
      ...setSate,
      [name]: value,
    }))
    setOnchange2(value)
  }
  //////////////////////////////////////end

  return (
    <div>
      {ishasApartment > 0 ? (
        <></>
      ) : localStorage.getItem('page') == 1 ? (
        <Step2
          id={param.id}
          object={setAddHotels}
          onChange={onChangeTypeApartment}
          name="id_type_house"
        />
      ) : localStorage.getItem('page') == 2 ? (
        <Step3
          id={param.id}
          value={OnChange}
          onchange={HandleChangeProvincial}
          name="provincial"
        />
      ) : localStorage.getItem('page') == 3 ? (
        <Step4
          id={param.id}
          onchange={handleChangeInputApartmentName}
          value={OnChange1}
          name="apartment_name"
        />
      ) : localStorage.getItem('page') == 4 ? (
        <Step5
          id={param.id}
          name="price"
          onchange={handleChangeInputPrice}
          value={OnChange2}
        />
      ) : localStorage.getItem('page') == 6 ? (
        <Step6 sendInfo={addHotels} id={param.id} />
      ) : localStorage.getItem('page') == 7 ? (
        <Finish /> //onfinish={() => props.submit()}
      ) : (
        <Step1 onchange={onChange} name="id_city" id={param.id} />
      )}
    </div>
  )
}

export default Index
