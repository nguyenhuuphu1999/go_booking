import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 288,
    maxHeight: 345,
    color: "black",
  },
  media: {
    height: 125,
    width: 184,
    borderRadius: 41,
    marginBottom: '5px'
  },
});
function FamousPlace({ famousPlace: {image_url, name_city} }) {
  const classes = useStyles();

  return (
    <CardActionArea className={classes.root}>
      <CardMedia
        className={classes.media}
        image={image_url}
        title="Contemplative Reptile"
      />
      <Typography gutterBottom align="center" component="h2">
        {name_city}
      </Typography>
    </CardActionArea>
  );
}

export default FamousPlace;
