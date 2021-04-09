import React from 'react';
import './Style.css'

const index = (props) => {
    const style = {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 25,
        border: 0,
        color: 'white',
        width: '100%',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        outline: 'none',
      }
   

    return (
        <div >
        <button style={style} onClick={props.fetchData} disabled={props.loading}>
          {props.loading && (
            <i
              className="fa fa-refresh fa-spin"
              style={{ marginRight: "5px" }}
            />
          )}
            Lodding ...
         
        </button>
      </div>
    );
};

export default index;