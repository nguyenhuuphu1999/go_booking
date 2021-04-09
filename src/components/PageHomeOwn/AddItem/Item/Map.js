import React from 'react';
import Button from '@material-ui/core/Button';
import Inpust_select from '../../../Input/inpust_select';
import Input from '../../../Input/index';

import Radio from '../../../Input/Radio';
import './main.css';
import { Link } from 'react-router-dom'

const TypeApartment = () => {
   
    return (
        <div style={{display:'flex', justifyContent:'center' }}>
        <div style={{width:"85%" }}>
            <p style={{fontSize:"22px" , marginBottom:"19px"}}>Vi trí Ghim của bạn ? </p>
            
           <form style={{display:'flex' , justifyContent:'center' ,flexDirection:'column'}}>
               
               <div>
                    <p >Nếu cần, bạn có thể điều chỉnh bản đồ để ghim đứng
                        ở đúng vị trí. Chỉ khách đã xác nhận mới thấy nội
                        dung này, từ đó họ sẽ biết cách đi đến địa điểm của
                        bạn.
                            
                       </p>
                   <div>
                       
                   </div>
               </div>
               

               

            <div style={{padding:"30px"}}>
                    <Link to="/pagehome?item=6">
                        <Button style={{margin:"auto" ,marginTop:"10%", borderRadius:"20px",width:"70%",outline:"none"}} variant="contained" color="secondary">
                            Tiếp tục
                        </Button>
                    </Link>
            </div>
           </form>
        </div>
</div>
    );
};

export default TypeApartment;