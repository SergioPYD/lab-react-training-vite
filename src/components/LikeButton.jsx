import React from 'react'
import { useState } from 'react'

export default function LikeButton() {

const[counter,setCounter] = useState(0)

const handleCounter = () =>{
setCounter(counter + 1)
    
}
    
  return (
    <button onClick={handleCounter}>{counter} Likes</button>
  )
}
