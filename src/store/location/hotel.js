import { createSlice } from '@reduxjs/toolkit'
import hotelApi from '../../api/location/hotelApi'

const hotelSlice = createSlice({
  name: 'hotel',
  initialState: {
    city: [],
    diaDiemNoiBatChiTiet: [],
  },
  reducers: {
    fetchHotelSuccess(state, action) {
      state = action.payload
      return state
    },
  },
})

const { fetchHotelSuccess } = hotelSlice.actions

// async action
export const fetchHotel = (id) => async dispatch => {
  const res = await hotelApi.get(id)
  return dispatch(fetchHotelSuccess(res))
}

export default hotelSlice.reducer
