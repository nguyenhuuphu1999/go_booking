import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import home from './home';
import homeStay from './homeStay';
import detail from './detail';
import hotel from './location/hotel';
import apartment from './location/apartment';
import motel from './location/motel';
import groundFloor from './location/groundFloor';

const rootReducer = combineReducers({
    home,
    homeStay,
    detail,
    hotel,
    apartment,
    motel,
    groundFloor
});

const store = configureStore({
    reducer: rootReducer
});

export default store;