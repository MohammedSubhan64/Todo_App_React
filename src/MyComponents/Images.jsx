import React, {  useState } from 'react'
const Images = () => {

  const [name,setName]=useState("");

  // let fimg=`https://source.unsplash.com/1600x900/?${name}`
  let fimg=`https://source.unsplash.com/1600x900/?${name}`
  const handleOnChange=(event)=>{
    setName(event.target.value);
  } 

  return (
    <>
    <div className="container mt-2">
        <form class="d-flex m-3">
        <input class="form-control me-2" onChange={handleOnChange} placeholder="Type something to get a image" name='myimage' type="search" value={name}  aria-label="Search"/>
        {/* <button class="btn btn-outline-success"  > Random</button> */}
      </form>
      {/* <h1>{name}</h1> */}
      {/* <h1>{fimg}</h1> */}
      <img src={fimg}  class="img-thumbnail" alt="image hai ya" />

      {/* <img src={fimg} class="img-fluid " alt="smaple image"/> */}
   
      {/* <img src={fimg} class=" m-2 img-thumbnail" alt="..."></img> */}
  
    </div>


    </>
  )
}

export default Images