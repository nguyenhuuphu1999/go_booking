import React, { useState,useEffect } from 'react';
const index = (props) => {
    
//   //(props)
    
    // const onChange=(e)=>{
    //     //(e.target.value)
    // }


    return (
        <div className="inp" style={{margin:"10px 0px 10px 0px"}}>
          
            <div style={{width:'90%',backgroundColor:'#c8cece',margin:'auto',borderRadius:'25px'}}>
                <select  onChange={props.onChange} name={props.name}
                style={{
                        height:"50px" ,
                        width:"97%", 
                        borderRadius:"25px" , 
                        outline:"none",
                        fontSize:"16px",
                        padding:"0px 13px",
                        backgroundColor:"#c8cece",
                        border:"none"
                    }}
                    > 
                
                    {
                        (typeof props.option != 'undefined' && props.option != null)?
                        props.option.map((item,index)=>
                            <option value={index+1}>{item.name_city || item.title}</option>
                        ):<></>
                    }
                </select>
            </div>
        </div>
    );
};

export default index;