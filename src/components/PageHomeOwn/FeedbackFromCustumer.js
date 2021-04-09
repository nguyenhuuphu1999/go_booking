import React from 'react';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      maxWidth: 300,
      marginLeft:30,
      position:"relative",
      display:"block",
      marginTop:"20px"
    },
    media: {
      height: 140,
      borderRadius:"150px",
      width:"50%",
      display:"flex",
      justifyContent:"center",
      margin:"auto",
      marginTop:"30px"
    },
  });
const FeedbackFromCustumer = () => {
    const classes = useStyles();
    return (
       <div>

            <h2 style={{fontSize:"26px" , fontWeight:500,margin:"25px 0px"}}>Phản hồi từ khách hàng</h2>
            <div class="grid  2xl:grid-cols-3 xl:grid-cols-3 md:grid-cols-3  sm:grid-cols-2">
                <Card className={classes.root}>
                   
                        <CardMedia
                            className={classes.media}
                            image="https://thuthuatnhanh.com/wp-content/uploads/2020/03/hinh-anh-dep-phong-canh-585x381.jpg"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                    
                        <Typography variant="body2" color="textSecondary" component="p" style={{textAlign:"center"}}>
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography>
                        </CardContent>
                    
                    <CardActions style={{display:"flex",justifyContent:"center"  }}>
                        <Button size="small" color="primary" style={{outline:"none"}}>
                      <p className="bg-red-500">  Chị Thu, Hà Nội</p>
                        </Button>
                    </CardActions>
                </Card>

                <Card className={classes.root}>
                   
                   <CardMedia
                       className={classes.media}
                       image="https://thuthuatnhanh.com/wp-content/uploads/2020/03/hinh-anh-dep-phong-canh-585x381.jpg"
                       title="Contemplative Reptile"
                   />
                   <CardContent>
               
                   <Typography variant="body2" color="textSecondary" component="p" style={{textAlign:"center"}}>
                       Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                       across all continents except Antarctica
                   </Typography>
                   </CardContent>
               
               <CardActions style={{display:"flex",justifyContent:"center"  }}>
                   <Button size="small" color="primary" style={{outline:"none"}}>
                   Chị Thu, Hà Nội
                   </Button>
               </CardActions>
           </Card>

           <Card className={classes.root}>
                   
                   <CardMedia
                       className={classes.media}
                       image="https://thuthuatnhanh.com/wp-content/uploads/2020/03/hinh-anh-dep-phong-canh-585x381.jpg"
                       title="Contemplative Reptile"
                   />
                   <CardContent>
               
                   <Typography variant="body2" color="textSecondary" component="p" style={{textAlign:"center"}}>
                       Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                       across all continents except Antarctica
                   </Typography>
                   </CardContent>
               
               <CardActions style={{display:"flex",justifyContent:"center"  }}>
                   <Button size="small" color="primary" style={{outline:"none"}}>
                   Chị Thu, Hà Nội
                   </Button>
               </CardActions>
           </Card>
                
                </div>
        </div>
    );
};

export default FeedbackFromCustumer;