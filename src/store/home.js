import { createSlice } from '@reduxjs/toolkit'
import homeApi from '../api/homeApi'

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    apartment: [],
    typeHouse: [],
    diaDiemNoiBat: [],
    comment: [],
  },
  reducers: {
    fetchHomesSuccess(state, action) {
      state = action.payload
      return state
    },
  },
})

const { fetchHomesSuccess } = homeSlice.actions

// async action
export const fetchHomes = () => async dispatch => {
  const res = await homeApi.getAll()
  return dispatch(fetchHomesSuccess(res.data))
}

export default homeSlice.reducer
