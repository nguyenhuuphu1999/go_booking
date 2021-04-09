import React from "react";

import { hotelsNearYouList } from "../../FakeData/data";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Hotel from '../homepage_component/NearbyLocationItem';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    maxWidth: 1350,
    margin: 'auto',
    marginTop: 83
  },
  h3Style: {
      marginLeft: 30,
      fontSize: 27,
      marginBottom: 63
  }
}));

export default function Hotels_2() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h3 className={classes.h3Style}>Nhà nghỉ</h3>
      <Grid container spacing={3} align="center">
        {hotelsNearYouList.map((hotel) => (
          <Grid item xs={12} md={3}>
            <Hotel {...hotel} />
          </Grid>
        ))}
      </Grid>
    </div>
  );

}
