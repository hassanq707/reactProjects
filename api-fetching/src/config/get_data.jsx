import React from 'react'
import { axios_instance } from './axios_instance'

export const get_data = async (endpoint) => {
  try{
   const response = await axios_instance.get(endpoint)
   return response.data
  }
  catch(err){
     return err
  }
}


























