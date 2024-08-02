// import React, { useEffect, useState } from 'react'
// import { useLoaderData } from 'react-router-dom'

// function Github() {

//    const data = useLoaderData()

//   return (
//     <>
//      <div className='text-center text-3xl bg-gray-600 text-white p-4'>Github followers: {data.followers}
//      <img src={data.avatar_url} width={300}/>
//      </div>
//     </>
//   )
// }

// export  {Github}


// export const githubInfoLoader = async() => {
//   try{

//     const response = await fetch('https://api.github.com/users/hassanq707')
//     return response.json()
//   }
//   catch(err){
//     console.log(err)
//   }
// }

import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {

  const data = useLoaderData()

  return (
    <>
      <div className='text-center text-3xl bg-gray-600 text-white p-4'>Github followers: {data.followers}
      <img src={data.avatar_url} width={300}/>
      </div>
     </>
  )
}

export {Github}

export const githubInfoLoader = async() => {
  try{
    const response = await fetch('https://api.github.com/users/hassanq707');
    return response.json()
  }
  catch(err){
    console.log(err)
  }
}