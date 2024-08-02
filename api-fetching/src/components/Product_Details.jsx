import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { axios_instance } from '../config/axios_instance'
import { useDispatch, useSelector} from 'react-redux'
import { set_single_product } from '../store/slices/Products_Slice'
import { get_data } from "../config/get_data"

const Product_Details = () => {

    const dispatch = useDispatch()

    const {id} = useParams()
 

    const data = useSelector((store) => store.products);
    const { data_by_id } = data;

    const single_Product = async () => {
        try{
            const response = await get_data(`/products/${id}`)
            dispatch(set_single_product(response))
        }
        catch(err) {
           console.log(err)
        }
    }
    useEffect(() => {
        single_Product()
    },[])
  return (
  <>    
   <div>
    {
        data_by_id !== null ? 
        ( 
        <div>
           <h1>Your product id is:{data_by_id.id}</h1>
           <h4>Title:{data_by_id.title} </h4>
           <p>Price: ${data_by_id.price}</p>
        </div>
        ) : 
        (
          'loading'
        )
    }
   </div>
  </>
  )
}

export {Product_Details}