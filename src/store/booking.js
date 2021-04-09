import { createSlice } from '@reduxjs/toolkit'
import bookingApi from '../api/bookingApi'

const bookingSlice = createSlice({
  name: 'detail',
  initialState: {
    apartmentPhotos: [],
    apartment: [],
  },
  reducers: {
    fetchBookingSuccess(state, action) { 
      state = action.payload 
      return state
    },
  },
})

const { fetchBookingSuccess } = bookingSlice.actions

// async action
export const fetchBooking = (id) => async dispatch => {
  const res = await bookingApi.get(id)
  return dispatch(fetchBookingSuccess(res))
}

export default bookingSlice.reducer
