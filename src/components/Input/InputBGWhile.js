import React, { useEffect, useState } from 'react';

const Input = (props) => {
    const [Style,setStyle] = useState();
    
    // const handleChange = (e) =>{
    //     //(e.target)
    //     //(props.change)
    // }

    
   
    // margin:"10px 0px 10px 0px"
    return (
        < >
            <input
                type="text" 
                style={{
                    height:"40px" ,
                    borderRadius:"25px" , 
                    outline:"none",
                    fontSize:"16px",
                    paddingLeft:"20px",
                    paddingRight:"20px",
                    width:'90%',
                    display:'block',
                    marginTop:'-6px',
                    border:'none'
                   
                }} 
                placeholder={props.place}
                onChange={props.onChange}
                name={props.name}
                value={props.value}
            />
        </>
    );
};

export default Input;