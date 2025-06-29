import React from 'react'
import value from '../Values/Carasoul'

const Cards = ({title,description,}) => {
  return (
    <div className='border'>
      <div className='flex'>
{value.map((a)=>(
    <div className='border p-1 rounded-full animate-bounce'>{a.name}</div>
))}
      </div>
    </div>
  )
}



export default Cards
