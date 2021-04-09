import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

const Check_box = () => {
    return (
        <>
             <Checkbox
                defaultChecked
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
        </>
    );
};

export default Check_box;