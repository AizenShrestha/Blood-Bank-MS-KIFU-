import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    color: 'red', 
    width: 50,
    height: 50,
    borderRadius:'0%'
}

const boxSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    changeheight(state) {
      state.height=state.height+5
    },
    changewidth(state) {
      state.width=state.width+5
    },
    changecolor(state) {
      if(state.color==='red')
        {
      state.color='blue'
        }
        else
        {
          state.color='red'
        }
    },
    changeshape(state)
    {
      if(state.borderRadius==='0%')
        {
           state.borderRadius='50%'
        }
        else
        {
          state.borderRadius='0%'
        }
    }
  },
})

export const { changeheight, changewidth, changecolor, changeshape } = boxSlice.actions
export default boxSlice.reducer 