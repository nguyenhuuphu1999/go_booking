import React, { Component,useEffect,useState } from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import './main.css';
import Location from '../Item/Location';
import {
    useLocation
  } from "react-router-dom";
import TypeApartment from '../Item/TypeApartment';
import HowManyPerson from '../Item/HowManyPerson';
import HowManyBedRoom from '../Item/HowManyBathRoom';
import WhereIsYourHouse from '../Item/WhereIsYourHouse';
import Map from '../Item/Map';
import Image from '../Item/Image';
import Finish from '../Item/Finish';
import { Adb } from '@material-ui/icons';

const ItemLocation = (props) => {

    // //(props.open)
    const [addHotels, setAddHotels] = useState(
       { 
        id_city:1,
        id_district:'1',
        id_type_house:1,
        provincial: "",
        apartment_name: "",
        price: null,
        ratings:5,
        id_user_own:localStorage.getItem('id'),
        image_url:'chua co data',
       }
    
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
    const onChange =(e)=>{
        
        const { name, value } = e.target;
        setAddHotels(item=>({
            ...item,[name]:value
        }))

       //(e.target.value)
    }
//typeApartment
const onChangeTypeApartment =(e)=>{
    const { name, value } = e.target;
        setAddHotels(item=>({
            ...item,[name]:value
        }))
        // //()
}

//how many customer and bath room
    const [customer , setCustomer] = useState(1)
    const [bed , setbed] = useState(1)


   







// how many bathroom

const [bathRoom , setbathRoom] = useState(1)



///where is your house

const onChangeWhereisYourHouse = (e) =>{
    //(e.target.value)
    const { name, value } = e.target;
        setAddHotels(item=>({
            ...item,[name]:value
        }))
        
}

useEffect(()=>{
    //(props.open)
},[])
const [OnChange,setOnchange] =useState('')
const HandleChangeProvincial =(e)=>{
    // //(e)
    const {name,value}=e.target
    setAddHotels((setSate)=>({
            ...setSate,[name]:value
    }))

    setOnchange(value)
}
const [OnChange1,setOnchange1] =useState('')
const handleChangeInputApartmentName = (e) =>{
    const {name,value}=e.target
    setAddHotels((setSate)=>({
            ...setSate,[name]:value
    }))
    setOnchange1(value)
}
const [OnChange2,setOnchange2] =useState('')
const handleChangeInputPrice = (e) =>{
    const {name,value}=e.target
    setAddHotels((setSate)=>({
            ...setSate,[name]:value
    }))
    setOnchange2(value)
}

    return (
        <div className="grid 2xl:grid-cols-2 xl:grid-cols-2  md:grid-cols-2 sm:grid-cols-2" >   
               
         
             
         
            {
                 (localStorage.getItem("page") ==1)?<TypeApartment object ={setAddHotels} onChange={onChangeTypeApartment}  name="id_type_house"/>:
   
                 (localStorage.getItem("page") ==2 )?<HowManyPerson value= {OnChange} onchange={HandleChangeProvincial}  name="provincial" />:
                 (localStorage.getItem("page") ==3)?<HowManyBedRoom onchange={handleChangeInputApartmentName} value={OnChange1} name="apartment_name" />  :
                 (localStorage.getItem("page") ==4)?<WhereIsYourHouse name="price" onchange={handleChangeInputPrice} value={OnChange2}  /> :
                 (props.page == "?item=5")?<Map/>  :
                 (localStorage.getItem("page") ==6)?<Image  sendInfo = {addHotels}/>  :
                 (localStorage.getItem("page") ==7)?<Finish onfinish={()=>props.submit()}/>  :
                 <Location  onchange ={onChange} name="id_city"/>
              }
         
              
          {/* <TypeApartment/> */}
          {/* <div style={{backgroundColor:"ButtonHighlight"}}>
                  <CardMedia
                  className="hidden sm:block"
                      style={{height:"100%",borderRadius:"20px"}}
                      component="img"
                      image="https://res.cloudinary.com/firstsolar/image/upload/v1611888178/appmwphudk8ukhrrnoa2.jpg"
                     
                  />
          </div> */}
      </div>
    );
};

export default ItemLocation;