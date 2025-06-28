import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Logo from './components/logo'
import Ycomb from './components/Ycomb'
import Lines from './components/Lines'
import Button from './components/Button'

function App() {
  

  return (
    <>
    <Navbar/>
    <div className='m-14 '>
    <Logo />
    </div>
<div>
  <Ycomb />
</div>
<div className='text-md font-bold'>
<Lines text1="Let us automate the worst parts of running your business."/>
   </div>
   <div className='text-sm m-4 italic'>
    <Lines text1="If your day involves spreadsheets, emails, vendor portals, and
a million things to follow up on — we're here to take the load off"/>
   </div>
   <div>
    <Button />
   </div>
    </>
  )
}

export default App
