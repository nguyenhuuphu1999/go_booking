import { createSlice } from '@reduxjs/toolkit'
import apartmentApi from '../../api/location/apartmentApi'

const apartmentSlice = createSlice({
  name: 'apartment',
  initialState: {
    city: [],
    diaDiemNoiBatChiTiet: [],
  },
  reducers: {
    fetchApartmentSuccess(state, action) {
      state = action.payload
      return state
    },
  },
})

const { fetchApartmentSuccess } = apartmentSlice.actions

// async action
export const fetchApartment = (id) => async dispatch => {
  const res = await apartmentApi.get(id)
  return dispatch(fetchApartmentSuccess(res))
}

export default apartmentSlice.reducer
