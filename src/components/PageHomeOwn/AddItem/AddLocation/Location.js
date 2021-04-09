import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ItemLocation from './ItemLocation';



  
class Location extends Component {
    constructor(props, context) {
        super({props}, context);
        this.state=({
            page:'',
        })
    }
    componentDidMount(){
      
        //(this.props.open)
    }
    render() {
        // const classes = this.props;
    //    //(this.props.location.search)
        return (
           <div style={{display:"flex", justifyContent:'center',position:'relative',outline:"none"}}>
                <div style={{height:"100%",backgroundColor:'greenyellow',display:'block',position:'relative' , borderRadius:"20px"}}>
                    {/* <ItemLocation {(this.props.location.search != null )?(page = {this.props.location.search}):''}></ItemLocation> */}
                    <ItemLocation submit = {this.props.submit} page = {this.props.indexPage} open={this.props.open}></ItemLocation>

                </div>
           </div>
        );
    }
}

export default Location;