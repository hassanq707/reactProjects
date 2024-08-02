import React from 'react'
import { useSelector } from 'react-redux'
import { Products_card } from './Products_card'

const Products = () => {
  const products = useSelector((data) => data.products.data)
  return (
      products.map((elem) => {
         return <Products_card  key={elem.id} data={elem}/>
      })
  )
}

export {Products}