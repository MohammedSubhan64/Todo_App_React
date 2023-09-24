import React, {useState} from 'react';

export const AddTodo = ({addTodo}) => {
  const [title,setTitle]=useState("");
  const [desc,setDesc]=useState("");

  const submit=(e)=>{
    e.preventDefault();
    if(!title || !desc){
      alert("Title or Description cannot be blank")
    }
    else{
      addTodo(title,desc);
      setTitle("");
      setDesc("");
    }
  }

  return (
 
   <div className="container my-3">
    <h1 className='text-primary'>Add a Todo</h1>
   <form onSubmit={submit} >
  <div className="mb-3">
    <label htmlFor="title" className="form-label ">Todo Title</label>
    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp"/>
    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
  </div>
  <div className="mb-3">
    <label htmlFor="desc" className="form-label">Todo Description</label>
    <textarea rows="4" cols="50" type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}}  className="form-control" id="desc"/>
  </div>
  
  <button type="submit" className="btn btn-outline-success">Add Todo</button>
</form>
</div>

  )
}
