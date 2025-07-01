import React from 'react'

const UsecaseCard = ({title,title1,desc1,title2,desc2,svg,button}) => {
  return (
    <div className='border rounded-2xl p-4 mx-auto my-4 w-full max-w-md'>
        <div className='flex justify-between'>
      <div className='font-bold text-2xl'>{title}</div>
    <div><img src={svg} alt="" /></div>
    </div>
    <div className='font-bold mt-4'>{title1}</div>
    <div>{desc1}</div>
    <div className='font-bold'>{title2}</div>
    <div>{desc2}</div>
    <div className='flex justify-center items-center'>
    <button className='border-2 rounded-2xl bg-green-500 text-white'>{button}</button>
    </div></div>
  )
}

export default UsecaseCard
