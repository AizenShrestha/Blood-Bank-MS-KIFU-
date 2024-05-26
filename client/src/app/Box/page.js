'use client'
import { changeheight, changecolor, changewidth, changeshape } from '@/redux/reducerSlices/boxSlice'
import { Button, Input } from '@nextui-org/react'
import React from 'react'
import { useSelector,useDispatch } from 'react-redux'

const Box = () => {
  const {height, width, color, borderRadius}= useSelector(state=>state.box)
  const dispatch= useDispatch()

  const generateArea = () => {
    if(borderRadius==='50%')
      {
      return 'Area of circle = ' + Math.PI * (width/2) ** 2
      }
      else
      {
       return 'Area of box =' + width * height
      }
  }

  return (
    <div>
      <div style={{backgroundColor: color, height: height, width:width, borderRadius:borderRadius }}>
    
        </div>
        {generateArea()}<br/>
  <Button onClick={()=>dispatch(changewidth())}>+width</Button>
  <Button onClick={()=>dispatch(changeheight())}>+height</Button>
  <Button onClick={()=>dispatch(changeshape())}>Change shape</Button><br/>
  <Input onChange={(e)=>dispatch(changecolor(e.target.value))} placeholder='Enter color' />
    </div>
  )
}

export default Box