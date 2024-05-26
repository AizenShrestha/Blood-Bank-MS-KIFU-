import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    color: 'red', 
    width: 50,
    height: 50,
    borderRadius: '0%'
}

const boxSlice = createSlice({
  name: 'box',
  initialState: initialState,
  reducers: {
    changeheight(state) {
      if(state.borderRadius === '50%'){
        const newHeight = state.height + 5
        state.width = newHeight
        state.height = newHeight
      }else{
        state.height=state.height+5
      }

    },
    changewidth(state) {
      if(state.borderRadius === '50%'){
        const newWidth = state.width + 5
        state.width = newWidth
        state.height = newWidth
      }else{
        state.width=state.width + 5
      }
    },
    changeshape(state) {
      state.borderRadius = '50%'
      state.width=state.height
    },
    changecolor(state,actions) {
      state.color = actions.payload
    },
  },
})

export const { changeheight, changeshape,changewidth, changecolor } = boxSlice.actions
export default boxSlice.reducer