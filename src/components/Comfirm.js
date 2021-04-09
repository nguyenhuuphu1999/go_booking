import React,{useEffect, useState} from 'react';
import Input from './Input/InputBGWhile'
import FacebookIcon from '@material-ui/icons/Facebook';
import AppleIcon from '@material-ui/icons/Apple';
import InstagramIcon from '@material-ui/icons/Instagram';
import axios from 'axios';
import {Redirect} from "react-router-dom";
const style = {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 25,
    border: 0,
    color: 'white',
    width:"100%",
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    outline:"none",
    
    
  };

const Comfirm = () => {
    const [curr,setCurr] = useState({code:'',email:''})
    const [redir,setRedir] = useState(false)
    const onChange =(e)=>{
        setCurr({code:e.target.value,email:localStorage.getItem('emailtemp')})
    }

   

    const handleSubmit = (e) =>{
        e.preventDefault()
        //(curr.email)
      if(curr.code === ''){
       //("code khong duoc rong")
 
      }else{
          //('code enter')
        axios.post(process.env.REACT_APP_API_URL+'/comfimRegister/user',curr)
        .then((res)=>{
            //(res.data)
            if(res.data.err == false ) {
                setRedir(true)
            }   
        })
        .catch((err)=>{
            console.error(err)
        })
      }
    }
    return (
     
         <>
             {
            (redir== false)?
            <form onSubmit={handleSubmit} style={{backgroundColor:'ButtonHighlight ' , width:'40%',height:'fit-content',display:'flex',alignItems:'center',flexDirection:'column'}}>
            <h2 style={{fontSize:'20px', padding:'20px 0px' , fontWeight:'500'}}>Xác Thực</h2>
            <hr style={{width:"80%" ,backgroundColor:'black',height:'2px'}}></hr>
            <p style={{margin:'30px 0px',width:'90%'}}>Chúng tôi có gửi đến bạn mã xác nhận .Vui lòng kiễm tra trong email của bạn</p>
           
            <Input onChange = {onChange} name="code"/>
           <div style={{width:'100%',margin:'10px 0px 0px 10%'}}>
                <p>Gửi lại mã</p>
           </div>
           <div> 
                <input type="submit" style={style} value="Xác nhận"/>
           </div>
                    <div>
                       
                       <div style={{marginTop:"30px"}} >
                               <hr  style={{width:"40%"}} /> 
                               <div style={{marginTop:"-13px",textAlign:'center'}}>Hoặc</div>
                               <hr style={{width:"40%", marginLeft:"auto",marginTop:"-10px"}}></hr>
                       </div>
                       
                       <div style={{marginTop:"10px",fontSize:"20px"}}>
                               <p style={{textAlign:'center'}} >Đăng nhập với</p>
                       </div>
   
                       <div className="grid sm:grid-cols-1 xl:grid-flow-col-1 " style={{display:'flex',margin:"30px 0px"}}>
                           <FacebookIcon style={{color:"blue",fontSize:"50px",marginLeft:"100px"}}/>
                           <InstagramIcon style={{color:"#f012e6",fontSize:"50px",margin:'0px 30px'}}/>
                           <AppleIcon style={{color:"black",fontSize:"50px",marginRight:"100px"}}/>
   
                       </div>
                   </div>
            <div style={{display:'flex',margin:'20px 0px'}}>
                <p>Chưa có tài khoản ?</p> <a href="">Đăng ký</a>
            </div>

        </form>:<Redirect to='pagehome'/>
             }
         </>

    );
};

export default Comfirm;