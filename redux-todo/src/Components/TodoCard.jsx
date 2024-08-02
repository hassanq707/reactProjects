import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { set_del_single, set_edit_single } from '../store/slices/Todo_Slice'

const TodoCard = (props) => {
 
  const {data,setInputData,inputData} = props

  const[toggle,setToggle] = useState(false)
  const dispatch = useDispatch()

  const onDelete = () => {
    dispatch(set_del_single(data.id))
  }

  const onEdit = () => {
    setInputData(data.inputData)
    setToggle(true)
  }

  const onUpdate = () => {
    dispatch(set_edit_single({id : data.id , input : inputData}))
    setInputData('')
    setToggle(false)

  }

  return (
    <h3>
      {data.inputData}
      <button onClick={onEdit}>Edit</button>
      <button onClick={onDelete}>Delete</button>
      { toggle ?
        <button onClick={onUpdate}>Update</button>
        : null
      }
    </h3>
  )
}

export default TodoCard







