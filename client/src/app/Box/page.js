'use client'
import { changeheight, changecolor, changewidth, changeshape } from '@/redux/reducerSlices/boxSlice'
import { Button, Input } from '@nextui-org/react'
import React from 'react'
import { useSelector,useDispatch } from 'react-redux'

const Box = () => {
  const {height, width, color, borderRadius}= useSelector(state=>state.box)
  const dispatch= useDispatch()
  return (
    <div>
      <div style={{backgroundColor: color, height: height, width:width, borderRadius:borderRadius }}>
    
        </div>
  <Button onClick={()=>dispatch(changewidth())}>+width</Button>
  <Button onClick={()=>dispatch(changeheight())}>+height</Button>
  <Button onClick={()=>dispatch(changeshape())}>Change shape</Button><br/>
  <Button onClick={()=>dispatch(changecolor())}>Change color</Button><br/>
  <Input placeholder='Enter shape' />
    </div>
  )
}

export default Box