import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Step1 from './PageItem/Step1';
import Step2 from './PageItem/Step2';
import Step3 from './PageItem/Step3';
import Step4 from './PageItem/Step4';
import Step5 from './PageItem/Step5';
import Step6 from './PageItem/Step6';
import NavbarChuNha from '../NavbarChuNha/Index'
import { Grid } from '@material-ui/core';

const Index = () => {
    const [city,SetCity] = useState()
    const [typeHouse, settypeHouse] = useState()

        useEffect(()=>{
          
            axios.get(process.env.REACT_APP_API_URL+'/city')
            .then(res=>{
                // //(res.data.data)
                SetCity(res.data.data)
            })
            .catch((err)=>{
                console.error(err)
            })
            
            axios.get(process.env.REACT_APP_API_URL+'/typeHouse')
            .then(res=>{
                //(res.data.data)
                settypeHouse(res.data.data)
            })

         

        },[])

    return (
        <div>
        <div>
        <NavbarChuNha/>
        </div>
          <div>
         <Grid container>
         <Grid item xs={0} xs={0} md={2} lg={2}>1</Grid>
             <Grid item xs={12} xs={12} md={8} lg={8}>
             {
                 (localStorage.getItem("step") == 1)?<Step2 data={typeHouse} />://setAddHotels={setAddHotels}
                 (localStorage.getItem('step')== 2) ? <Step3  ></Step3>:
                 (localStorage.getItem('step')== 3)?<Step4 /> :
                 (localStorage.getItem('step')== 4)?<Step5 />:
                 (localStorage.getItem('step')== 5)?<Step6 />:
                  <Step1 data={city}  />
           }
             </Grid>
             <Grid item xs={0} xs={0} md={2} lg={2}>2</Grid>
         </Grid>
          </div>
        </div>
    );
};

export default Index;