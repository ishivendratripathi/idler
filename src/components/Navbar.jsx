import React from 'react'
import Logo from './logo'

const Navbar = () => {

  return (
    <div className='border border-gray-300'>
      <div>{window.screen.width>640
       ?
     <div>
<div className='flex justify-between p-2'>
    <Logo />
    <button className='border-2 p-2 rounded-2xl bg-red-700 text-white font-medium'>Get Early Access</button>
</div>
      </div> :
       <div>
        <div>
     <button className='border-2 p-2 rounded-2xl bg-red-700 text-white font-medium'>Get Early Access</button>
        </div>
       </div>
       }
       </div>
    </div>
  )
}

export default Navbar
