import React, { useEffect } from "react"
import { Router_App } from "./components/Router_App"
import { axios_instance } from "./config/axios_instance"
import { useDispatch } from "react-redux"
import { set_products_data } from "./store/slices/Products_Slice"
import {get_data} from './config/get_data'


function App() {

  const dispatch = useDispatch()
 
  const get_data_handle = async ()=>{

    const response = await get_data("/products");
    dispatch(set_products_data(response))
  }

  useEffect( () => {

    get_data_handle()
  
  }, []);

  return (
    <>
   <Router_App />
    </>
  )
}

export default App
