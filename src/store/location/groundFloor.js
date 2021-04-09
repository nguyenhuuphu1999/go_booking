import { createSlice } from '@reduxjs/toolkit'
import groundFloorApi from '../../api/location/groundFloorApi'

const groundFloorSlice = createSlice({
  name: 'groundFloor',
  initialState: {
    city: [],
    diaDiemNoiBatChiTiet: [],
  },
  reducers: {
    fetchGroundFloorSuccess(state, action) {
      state = action.payload
      return state
    },
  },
})

const { fetchGroundFloorSuccess } = groundFloorSlice.actions

// async action
export const fetchGroundFloor = (id) => async dispatch => {
  const res = await groundFloorApi.get(id)
  return dispatch(fetchGroundFloorSuccess(res))
}

export default groundFloorSlice.reducer
