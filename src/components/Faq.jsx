import React, { useState } from 'react'
import faq from "../Values/Faq"
import Button from './Button'

const Faq = () => {

    const [open,setopen]=useState(false)


  return (
    <div>{faq.map((a)=>(
 <>
 <div onClick={()=>{
    setopen(!open)
 }}>{a.question}</div>
  </>
    ))}</div>
  )
}

export default Faq
