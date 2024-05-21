import React from 'react'
import { useSelector } from 'react-redux'

const Box = () => {
const state = useSelector(state=>state.box)
  return (
    <div>
       JSON.stringify(state.box)
    </div>
  )
}

export default Box