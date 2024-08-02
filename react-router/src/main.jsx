import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import About from './components/about/About.jsx'
import Contact from './components/contact/Contact.jsx'
import {  Github, githubInfoLoader } from './components/github/Github.jsx'
import HelpLayout from './components/help/HelpLayout.jsx'

import Layout from './components/Layout.jsx'
import Home from './components/home/Home.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
       <Route path='' element={<Home />}/>
       <Route path='about' element={<About />}/>
       <Route 
       path='github'
       loader={githubInfoLoader}
       element={<Github />}/>
       <Route path='help' element ={<HelpLayout />}>
          <Route path='faq' />
          <Route path='contact' element={<Contact />}/>
       </Route> 
       <Route />
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
