import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    color: 'red', 
    width: 50,
    height: 50
}

const boxSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    changeheight(state) {
      state.height=state.height+1
    }
  },
})

export const { changeheight } = boxSlice.actions
export default boxSlice.reducer