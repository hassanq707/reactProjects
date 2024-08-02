import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function HelpLayout() {
  return (
    <>
    <div className='text-center p-10 text-3xl bg-gray-700 text-white'>
        <h2>Website Help</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, quo.</p>
    </div>
    <nav className='text-center'>
        <NavLink to='faq'>View to FAQ</NavLink>
        <NavLink to='contact'>Contact Us</NavLink>
    </nav>
       <Outlet />
    </>
  )
}

export default HelpLayout