import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import {Products} from './Products'
import {Product_Details} from './Product_Details'


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path='' element={<Products />}/>
            <Route path=':id' element={<Product_Details />}/>
        </Route>
    )
)

function Router_App() {
  return <RouterProvider router = {router}/>
}

export { Router_App }