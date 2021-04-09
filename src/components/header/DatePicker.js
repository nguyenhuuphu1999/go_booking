import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
    size: '12',
    paddingLeft: 0
  },
  style:{
    color: 'rgb(0, 0, 0, 0.54)',
    width: '400px',
    fontSize: '16px',
    lineHeight: '24px',
  }
}
));

export default function DatePicker() {
  const classes = useStyles();

  return (
    <form className={classes.container} noValidate>
      <TextField
        id="date"
        label=""
        type="date"
        defaultValue="2020-12-24"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        style={{fontSize: '5px'}}
      />
    </form>
  );
}
