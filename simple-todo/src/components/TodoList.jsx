import React from 'react'

const TodoList = (props) => {
    const {name,id} = props.data;
     
  return (
    <>
    <h1>{name}
     <button onClick={() => props.editItem(id)}>Edit</button>
     <button onClick={() => props.singleDel(id)}>Delete</button>
     </h1>
    </>
  )
}

export default TodoList
