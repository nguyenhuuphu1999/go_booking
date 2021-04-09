import React from 'react';
import WifiIcon from '@material-ui/icons/Wifi';
import { makeStyles } from '@material-ui/core/styles';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
const useStyles = makeStyles((theme) => ({
    root: {
     display:'flex',
     margin:"15px 50px"
    },
    content:{
        marginLeft:"10px"
    }
  }));
 
const Utilities = () => {
    const classes = useStyles();
    return (
        <div >
            <p style={{fontSize:"26px" , fontWeight:500 ,margin:"30px 0px 30px 0px"}}>Tiện ích</p >
            <div class="grid  2xl:grid-cols-2 xl:grid-cols-2 md:grid-cols-2  sm:grid-cols-2">
                <div>
                    <div className={classes.root}>
                        <div><WifiIcon/></div>
                        <div className={classes.content}>Wifi</div>
                    </div>
                    <div className={classes.root}>
                        <div><LocalHospitalIcon/></div>
                        <div className={classes.content}>Bộ cứu thương</div>
                    </div>
                    <div className={classes.root}>
                        <div><WifiIcon/></div>
                        <div className={classes.content}>Wifi</div>
                    </div>
                    <div className={classes.root}>
                        <div><WifiIcon/></div>
                        <div className={classes.content}>Wifi</div>
                    </div>
                </div>

                <div>
                <div className={classes.root}>
                        <div><WifiIcon/></div>
                        <div className={classes.content}>Wifi</div>
                    </div>
                    <div className={classes.root}>
                        <div><WifiIcon/></div>
                        <div className={classes.content}>Wifi</div>
                    </div>
                    <div className={classes.root}>
                        <div><WifiIcon/></div>
                        <div className={classes.content}>Wifi</div>
                    </div>
                    <div className={classes.root}>
                        <div><WifiIcon/></div>
                        <div className={classes.content}>Wifi</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Utilities;