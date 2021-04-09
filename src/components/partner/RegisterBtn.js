import React,{ useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Link, Redirect } from 'react-router-dom';
import Modal from '@material-ui/core/Modal';
import FormRegister from '../../components/Register'
import Input from '../Input/index'
import InputSelect from '../Input/inpust_select'
import Check_box from '../Input/Check_box';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import AppleIcon from '@material-ui/icons/Apple';
import Backdrop from '@material-ui/core/Backdrop';
import Checkbox from '@material-ui/core/Checkbox';
import axios from 'axios';
import Alert from '@material-ui/lab/Alert';
import Comfirm from '../Comfirm';
const style = {
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  borderRadius: 25,
  border: 0,
  color: 'white',
  width:"100%",
  height: 48,
  padding: '0 30px',
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  outline:"none"
};

const useStyles = makeStyles(() => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
}));


function RegisterBtn() {
 
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [info , setInfo] = useState(
    {
      phone_number:'',
      ho:'',
      ten:'',
      email:'',
      full_name:''
    }
  );

  const [err, setErr] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const [ typeMessage, setTypeMessage] = React.useState('');
  const [ statusMessage, setStatusMessage] = React.useState(false);
  const [openModalComfirm,setOpenModalComfirm]= useState(false);


  const handleOpen = () => {
     if(!open){
      setOpen(true);
     }
    };
  
    const handleClose = () => {
      setOpen(false);
      setOpenModalComfirm(true)
    };

    const handlChange = (e) =>{
      const { name, value } = e.target;
      setInfo(
        setState=>(
          {
            ...setState,[name]:value
          }
        )
      )
    }

    function rand() {
      return Math.round(Math.random() * 20) - 10;
    }

    function getModalStyle() {
      const top = 50 ;
      const left = 50 ;
    
      return {
        top: `${top}%`,
        left: `${left}%`,
        position: 'absolute',
        transform: `translate(-${top}%, -${left}%)`,
      };
    }

    const [redirect ,setRedirect] =useState(false)

    const handlSubmit  =  async(e) =>{
      e.preventDefault();
      
      info.full_name = info.ho + info.ten
      axios.post('https://do-an-dariu.herokuapp.com/register/?type=own' , info)
      .then((res)=>{
        //(res.data)
        if(res.data.error == false){
          setRedirect(true)
          setTypeMessage('success')
          setMessage("This is an error message!")
            setTimeout(()=>{
                setStatusMessage(true)
                setOpen(false)
              
                setErr('')
            },5000)
         setStatusMessage(false)
      
        }else{
          setErr(true)
          setTypeMessage('error')
          setMessage("This is a success message!")

        }

       
      })
      .catch((err)=>{
        //(err)
      })
    }
    

  if(redirect == true){
    console("chuyen trang")
    return <Redirect to="/pagehome"/>
  }
   
  return (
    <div>
        {/* <Link to="/input"> */}
            <Button style={style} onClick={handleOpen}  >Tạo tài khoản</Button>
        {/* </Link> */}
      
        <Modal
         
          // className={classes.modal}
          style={{display:'flex'}}
          open={open}
          onClose={handleClose}
          onBackdropClick={handleClose}
          closeAfterTransition
          // BackdropComponent={Backdrop}
          // BackdropProps={{
          //   timeout: 500,
          // }}
      >
       <FormRegister onClick={handleClose}/>
     </Modal>


  
    </div>

  )
}
export default RegisterBtn
