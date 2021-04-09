import { createSlice } from '@reduxjs/toolkit'
import detailApi from '../api/detailApi'

const detailSlice = createSlice({
  name: 'detail',
  initialState: {
    apartmentPhotos: [],
    apartment: [],
    apartmentDetail: [],
    comment: []
  },
  reducers: {
    fetchDetailSuccess(state, action) { 
      state = action.payload
      return state 
    }, 
  },
}) 

const { fetchDetailSuccess } = detailSlice.actions 

// async action
export const fetchDetail = (id) => async dispatch => {
  const res = await detailApi.get(id)
  return dispatch(fetchDetailSuccess(res))
}

export default detailSlice.reducer
