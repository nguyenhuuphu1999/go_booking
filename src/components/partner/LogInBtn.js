import React from "react";
import Button from "@material-ui/core/Button";
import { Link} from "react-router-dom"
import Modal from '@material-ui/core/Modal';
import Login from "../LoginChuNha";

const style = {
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  borderRadius: 25,
  border: 0,
  color: "white",
  height: "50px",
  width:"100%",
  padding: "5px 30px",
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  display:"block",
  outline:"none"
};

export default function LogInBtn(props) {
  
  const handleOpen = () => {
    props.setOpen(true);
  };

  const handleClose = () => {
    props.setOpen(false);
  };

  return (
    <div>
      <Button style={style} onClick={props.onCLick}>
          Đăng nhập 
        <div style={{ textTransform: "lowercase" }}> (với tư cách chủ host)</div>
      </Button>

      <Modal
         
    
         style={{display:'flex'}}
         open={props.open}
         onClose={handleClose}
         onBackdropClick={handleClose}
         closeAfterTransition
        
     >
    { <Login/>}
    </Modal>

    </div>
  );
}
