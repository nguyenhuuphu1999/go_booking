import React from 'react';
import Alert from '@material-ui/lab/Alert';

const Alerts = (props) => {
    return (
        <>
             <Alert style={{width:'100%'}} severity={props.status}>{props.content}</Alert>
        </>
    );
};

export default Alerts;