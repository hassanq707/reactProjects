import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { set_Del_All, set_todo_list } from '../store/slices/Todo_Slice'
import TodoCard from './TodoCard'

const ReduxTodo = () => {

  const [inputData,setInputData] = useState("")
  const dispatch = useDispatch()

  const todo = useSelector(data => data.TodoList.todo)

  const addTodo = () => {
    if(!inputData){
      alert("plz add s0me todos")
    }
    else{
     dispatch(set_todo_list({
       
       id : Date.now(),
       inputData : inputData

     }))
     setInputData('')
    }
  }

  const delAll = () => {
    dispatch(set_Del_All())

  }

  return (
    <>
    <input
     type="text" 
     value={inputData}
     onChange={(e) => setInputData(e.target.value)}
     placeholder='Enter todo'
     />
     <button onClick={addTodo}>Add Todo</button>
     <button onClick={delAll}>Del All</button>
     {
      todo.map((elem) => {
        return <TodoCard
         key={elem.id}
         data={elem}
         setInputData={setInputData}
         inputData={inputData}
          />
      })
     }
     </>
  )
}

export default ReduxTodo
