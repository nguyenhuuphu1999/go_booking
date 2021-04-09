import React, { useEffect, useState } from 'react';

const Index = (props) => {
    const [Style,setStyle] = useState();
    
    // const handleChange = (e) =>{
    //     //(e.target)
    //     //(props.change)
    // }

    useEffect(()=>{
        if(props.margin != undefined)
        {
            //(props.margin);
            setStyle(props.margin)
        }
    },[])
   
    // margin:"10px 0px 10px 0px"
    return (
        < >
            <input
                type={props.type == " " ? 'text' : 'password'} 
                style={{
                    height:"50px" ,
                    width:"90%", 
                    borderRadius:"25px" , 
                    outline:"none",
                    fontSize:"16px",
                    padding:"0px 30px",
                    backgroundColor:"#eee5e5",
                    border:"none"
                }} 
                
                placeholder={props.place}
                onChange={props.onChange}
                name={props.name}
                type={props.type}
                onBlur={props.onBlur}
            />
        </>
    );
};

export default Index;