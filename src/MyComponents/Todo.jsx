import React from 'react'

export const Todo = ({todo,onDelete}) => {
  return (
    <>
    <div className='container'>
      <h4 className='text-success'>{todo.title}</h4>
      <p>{todo.desc}</p>
      <div className="button btn btn-danger" onClick={()=>{onDelete(todo)}}>Delete</div>
    </div>
    <hr/>
    </>
  )
}
