import React from 'react'

const UsecaseCard = ({title,title1,desc1,title2,desc2,svg,button}) => {
  return (
    <div>
        <div className='flex justify-between'>
      <div>{title}</div>
    <div>{svg}</div>
    </div>
    <div>{title1}</div>
    <div>{desc1}</div>
    <div>{title2}</div>
    <div>{desc2}</div>
    <button className='border-2 rounded-2xl bg-green-500 text-white'>{button}</button>
    </div>
  )
}

export default UsecaseCard
