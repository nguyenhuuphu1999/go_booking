import { React,useEffect,useState } from 'react';
import Button from '@material-ui/core/Button';
import Inpust_select from '../../../Input/inpust_select';
import './main.css';
import { Link } from 'react-router-dom'
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';

const Step1 = (props) => {
   
  
 
    const [optionTypeHouse,setOptionTypeHouse]= useState([])
    const [optionRooms,setOptionRooms]= useState([])
    const [url,setUrl] =useState(`/pagehome/${props.id}?item=2`)
  const [hidden, setHidden] = useState(false)

    const env=  process.env.REACT_APP_API_URL;
    useEffect(()=>{
        axios.get(env+"/typeHouse")
        .then((res)=>{
          if (res != null) {
          setHidden(true)
        }
            setOptionTypeHouse(res.data.data)
        })
        .catch((err)=>{
            //(err)
        })

      
    },[])

    // const OnChange =(e) =>{
    //     //(e)
    // }
    const [selectedValue, setSelectedValue] = useState('a');

    const handleChange = (event) => {

      setSelectedValue(event.target.value);
    };

    const onClick = ( ) =>{
        localStorage.setItem('page',1)
    }
    return (
        <div style={{display:'flex', justifyContent:'center' }}>
        <div style={{width:"50%" , padding:"20px" }}>
            <p style={{fontSize:"22px" , marginBottom:"19px"}}>Bạn đang đăng tải loại nhà/phòng cho thuê nào ? </p>
            
           <form style={{display:'flex' , justifyContent:'center' ,flexDirection:'column'}}>

               <div>
                    <p className="boil">Chọn loại chỗ ở</p>
                    <div className="inp" style={{margin:"10px 0px 10px 0px"}}>
                      
                            <Inpust_select option={optionTypeHouse} onChange={props.onChange} name={props.name}></Inpust_select>

                    </div>
               </div>
               

            
                <div>
                        <p className="boil">Bạn có đang cho thuê nhà/phòng trên Go với tư cách
                            công ty không?</p>
                    <div className="displayFlex"> 
                        <Radio
                            checked={selectedValue === 'a'}
                            onChange={handleChange}
                            value="a"
                            name="radio-button-demo"
                            inputProps={{ 'aria-label': 'A' }}
                        /><p>Tôi đón tiếp khách với tư cách doanh nghiệp đã đăng ký</p>
                    </div>
                    <div className="displayFlex"> 
                        <Radio
                            checked={selectedValue === 'b'}
                            onChange={handleChange}
                            value="b"
                            name="radio-button-demo"
                            inputProps={{ 'aria-label': 'B' }}
                        />
                        <p>Tôi đón tiếp khách với tư cách cá nhân hoặc chủ sở hữu duy nhất</p>
                    </div>
                </div>
 
                <div>
                    <div>
                        Điều này giúp bạn nhận được các tính năng phù hợp với
                        phong cách đón tiếp khách của mình. Tính năng này sẽ ẩn
                        với khách và không ảnh hưởng đến vị trí của bạn trong kết
                        quả tìm kiếm.
                    </div>
                </div>
                {/* pagehome/9 */}
          <div style={{padding:"30px",display:'flex',justifyContent:'center'}}>
            {hidden == true ? (
              <Link to={url}>
                <Button
                  onClick={onClick}
                  style={{
                    margin: 'auto',
                    marginTop: '10%',
                    borderRadius: '20px',
                    outline: 'none',
                  }}
                  variant="contained"
                  color="secondary">
                  Tiếp tục
                </Button>
              </Link>
            ) : (
              <Button
                onClick={onClick}
                style={{
                  margin: 'auto',
                  marginTop: '10%',
                  borderRadius: '20px',
                  outline: 'none',
                }}
                variant="contained"
               >
                Tiếp tục
              </Button>
            )}
            </div>
           </form>
        </div>
</div>
    );
};

export default Step1;