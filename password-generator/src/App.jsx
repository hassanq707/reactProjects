


// Without useCallback

// If you define passwordGenerator without useCallback,
//  a new function is created on every render. This can lead 
//  to unnecessary re-renders of child components if
//   passwordGenerator is passed as a prop, because React 
//   will see it as a new function every time.

// With useCallback

// By using useCallback, the passwordGenerator function
//  is memoized, meaning that React will keep the same
//   instance of the function across renders unless one
//    of its dependencies changes. This prevents unnecessary
//     re-renders and improves performance.




// *******************   Random password generater   *******************************


import { useCallback } from "react"
import { useRef } from "react"
import { useEffect } from "react"
import { useState } from "react"


const App = () => {
  
      const[numbers,setNumbers] = useState(false)
      const[characters,setCharacters] = useState(false)
      const[password , setPassword] = useState('')
      const[length,setLength] = useState(4)
  
      const passwordRef = useRef(null)
  
  
    const passwordGenerator = useCallback(() => {
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        let pass = '';

        if(numbers){
             str += '123456789'
          }
          if(characters){
              str += "!@#$%^&*{)}](["
            }

            for(let i = 0 ; i <= length ; i++){
      let index = Math.floor(Math.random() * str.length)
       pass += str[index] 
    }
    setPassword(pass)
  },[length,numbers,characters ,setPassword])
   useEffect(() => {
       passwordGenerator()
     },[length,characters,numbers])

    const copyPasswordToClipBoard = () => {
        passwordRef.current?.select()
        passwordRef.current?.setSelectionRange(0,4)
        window.navigator.clipboard.writeText(password)
      }
    
      return (
         <>
        <div style={{width : '800px'}} className='mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700 text-center text-3xl py-3'>
          <h1 className='text-center text-white  my-3'>Password Generator</h1>
          <div className='flex shadow rounded-lg overflow-hidden mb-4'> 
            <input 
            type="text" 
            className='outline-none w-full py-1 px-3 my-2 rounded-lg h-full '
      placeholder='password'
      readOnly
      value={password}
      ref={passwordRef}
      />
      <button 
      onClick={copyPasswordToClipBoard}
      className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
    </div>
    <div className='flex text-sm gap-x-2'>
       <div className='flex items-center gap-x-1'>
         <input
          type="range"
           min={4}
           max={50}
           value={length}
           onChange={(e) => setLength(e.target.value)}
          />
         <label>length: {length}</label>
       </div>
       <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked={characters}
          onChange={() => setNumbers(prev => !prev)}
          />
          <label>Numbers:</label>
       </div>

       <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked={numbers}
          onChange={() => setCharacters(prev => !prev)}
          />
          <label>Characters:</label>
       </div>
    </div>
  </div>
   </>
  )
}

export default App



