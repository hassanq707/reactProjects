import React, { useState } from 'react'
import TodoList from './TodoList'

const SimpleTodo = () => {
  const [inputData,setInputData] = useState('')
  const [list,setList] = useState([])
  const [toggle,setToggle] = useState(false)
  const [isEditItem , setIsEditItem] = useState(null)
  const setTodo = () => {
    if(!inputData){
       alert('plzz add some value')
    }
    else if(inputData && toggle){
        setList(
          list.map((elem) => {
              if(isEditItem == elem.id){
                  return {...elem, name : inputData}
              }
              else{
                return elem
              }
          })
        )
        setInputData('')
        setToggle(false)
    }
    else{
      setList(
        [
          ...list,
          {
            id : Date.now(),
            name : inputData
          }
        ]
        )
        setInputData('')
      }

  }


  const delAll = () =>{
      setList([])
  }

  const singleDel = (id) => {
    setList(
      list.filter((elem)=>{
          return elem.id != id
      })
    )
  }

  const editItem = (id) => {
    let newEditItem = list.find((elem) =>  {
      return elem.id == id
    })
    setIsEditItem(id)
    setToggle(true)
    setInputData(newEditItem.name)
  }


  return (
    <>
    <h1>TodoList </h1>
    <input 
    type="text" 
    placeholder='enter todo' 
    value={inputData}
    onChange={(e) => setInputData(e.target.value)}
    />
    <button onClick={setTodo}>{toggle ? 'Update Todo' : 'Add Todo'}</button>
    <button onClick={delAll}>delAll</button>
     {
      list.map((elem,index)=>{
        return <TodoList
         data={elem}
         key={index} 
         singleDel={singleDel}
         editItem={editItem}
         />
      })
     }
    </>
  )
}

export default SimpleTodo
