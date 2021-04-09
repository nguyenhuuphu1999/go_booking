import React,{useEffect, useState} from 'react';
import Input from '../Input/index'
import InputSelect from '../Input/inpust_select'
import Check_box from '../Input/Check_box';
import RegisterBtn from '../partner/RegisterBtn'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import AppleIcon from '@material-ui/icons/Apple';
import Profile from './Profile';
import Container from '@material-ui/core/Container';
import YourHotel from './YourHotel';
import Utilities from './Utilities';
import FeedbackFromCustumer from './FeedbackFromCustumer';
import Navbar from '../header/Navbar'
const Index = (props) => {
 
    
    const [edit,setEdit]= React.useState(false)
    const onClick = () =>{
        setEdit(!edit)
    }

    useEffect(()=>{
        
    })

    return (   
     <div  className=" grid  2xl:grid-cols-1 xl:grid-cols-1 md:grid-cols-1 sm:grid-cols-1" >
          <Navbar onClick={onClick}></Navbar>
          <Container maxWidth='md'>
              <Profile edit={edit}  />
              <YourHotel indexPage={props.location.search} />
              <Utilities/>
              <FeedbackFromCustumer/>
          </Container>
          
        
     </div>
    );
};

export default Index;
{/* <Input place="Số điện thoại"/> */}