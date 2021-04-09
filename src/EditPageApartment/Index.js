import React from 'react';
import Navbar from '../components/header/Navbar';
import EditApartment from './EditApartment';

const Index = () => {
    return (
        <div>
            <Navbar/>
            <div style={{marginTop:'100px'}}>
                    <EditApartment/>
            </div>
        </div>
    );
};

export default Index;