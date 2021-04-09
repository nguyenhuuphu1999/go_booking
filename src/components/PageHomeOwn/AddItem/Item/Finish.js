import React,{useEffect,useState} from 'react';
import Button from '@material-ui/core/Button';
import Inpust_select from '../../../Input/inpust_select';
import Input from '../../../Input/index';

import Radio from '../../../Input/Radio';
import './main.css';
import { Link, Redirect } from 'react-router-dom'
import AddBoxIcon from '@material-ui/icons/AddBox';
import axios from 'axios';

const TypeApartment = (props) => {
//    //(props.open)
const [id,setId] = useState()
 useEffect(()=>{
  setId(localStorage.getItem('id'))
 

 },[])
 
 const onClick = () =>{
 
    //(props.sendInfo)
 }
 
return (
        <div style={{display:'flex', justifyContent:'center' }}>
        <div style={{width:"85%" }}>
            <p style={{fontSize:"22px" , margin:"29px 0px" }}>Cảm ơn bạn đã liên kết với chúng tôi </p>
            
           <form style={{display:'flex' , justifyContent:'center' ,flexDirection:'column'}}>

            <div>
            Sự yêu mến và niềm tin của quý khách hàng quý đối tác là niềm tự hào và thành công lớn nhất của những tôi trong quá trình phát triển.
             Để đền đáp lại tấm thiện tình này, chúng tôi sẽ không ngừng nâng cao chất lượng phục vụ nhằm đáp ứng tốt hơn nhu cầu của khách hàng và quý đối tác.
            </div>
             

            <div style={{padding:"30px"}}>
                    
                     {/* <a href="http://localhost:3000/pagehome?id=" > */}
                     <Link to={{
                           pathname: "/pagehome",
                            search: "?id=" +id,
                     }}>
                        <Button onClick={props.onfinish}  style={{margin:"auto" ,marginTop:"10%", borderRadius:"20px",width:"70%",outline:"none"}} variant="contained" color="secondary">
                                Finish
                        </Button>
                    </Link>
                   
                  
            </div>
           </form>
        </div>
</div>
    );
};

export default TypeApartment;