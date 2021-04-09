import {React,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Link } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Location from '../Location';
const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width:"50%",
    margin:'auto'
   
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
 
  const handleOpen = () => {
    setOpen(true);
    //()
  };

  const handleClose = () => {
    //("close")
    setOpen(false);
  
  };
  const onsubmit =(apartment) =>{
    setOpen(false)
    localStorage.setItem("page",'')
     window.location.reload();
  }

  // //(props.indexPage)

  return (
    <>
      <Button variant="contained" style={{height:'50%',marginTop:"-67%",outline:"none"}} onClick={handleOpen}>
            {/* <Link to="/additem"> */}
                <AddIcon style={{fontSize:'150px',color:"#fff"}}/>
            {/* </Link> */}
        </Button>
      <Modal
       
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
      
     
      >
        <Location submit={onsubmit} indexPage={props.indexPage} open={handleClose} />
      </Modal>
    </>
  );
}
