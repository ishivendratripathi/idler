import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Logo from './components/logo'
import Ycomb from './components/Ycomb'
import Lines from './components/Lines'
import Button from './components/Button'
import Cards from './components/Cards'
import UsecaseCard from './components/UsecaseCard'

function App() {
  

  return (
    <>
    <Navbar/>
    <div className='m-4'>
    <div className='m-14 '>
    <Logo />
    </div>
<div>
  <Ycomb />
</div>
<div className='text-md font-bold mt-4'>
<Lines text1="Let us automate the worst parts of running your business."/>
   </div>
   <div className='text-sm m-4 italic'>
    <Lines text1="If your day involves spreadsheets, emails, vendor portals, and
a million things to follow up on — we're here to take the load off"/>
   </div>
   <div>
    <Button />
   </div>
   <div className='text-2xl font-bold mt-10 sm:text-5xl'>
   <Lines text1="Most tools help you track work."/>
   <Lines text1="Idler actually does the work." />
   </div>
   <div className='m-4'>
    <Lines text1="We combine document parsing, decision logic, and agent-driven execution to handle tasks end-to-end — not just pass data from one app to another."/>
   </div>
<div>
  <div className='text-2xl font-bold mt-10'>
  <Lines text1="Use Cases"/>
  <div className='font-thin text-md'><Lines text1="See how Idler can"/></div>
  <Lines text1="save you time"/>
</div>
</div>

<div><UsecaseCard title="Order Fulfillment" title1="before" desc1="Manual PO processing, spreadsheet updates, email coordination" title2="After" desc2="Automated PO processing, real-time inventory updates, automated shipping notifications" svg="" button=""/></div>
   </div>
    </>
  )
}

export default App
