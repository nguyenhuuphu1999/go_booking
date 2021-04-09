import { createSlice } from '@reduxjs/toolkit'
import motelApi from '../../api/location/motelApi'

const motelSlice = createSlice({
  name: 'motel',
  initialState: {
    city: [],
    diaDiemNoiBatChiTiet: [],
  },
  reducers: {
    fetchMotelSuccess(state, action) {
      state = action.payload
      return state
    },
  },
})

const { fetchMotelSuccess } = motelSlice.actions

// async action
export const fetchMotel = (id) => async dispatch => {
  const res = await motelApi.get(id)
  return dispatch(fetchMotelSuccess(res))
}

export default motelSlice.reducer
