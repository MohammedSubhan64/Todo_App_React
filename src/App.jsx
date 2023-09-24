import Header from "./MyComponents/Header";
import {Todos} from "./MyComponents/Todos";
import {Footer} from "./MyComponents/Footer";
import {AddTodo} from "./MyComponents/AddTodo";
import {About} from "./MyComponents/About";
import Images from "./MyComponents/Images";
// import Mytodos from './MyComponents/Mytodos';
// import {Services} from "./MyComponents/Services";
import Services from "./MyComponents/Services";
import React, {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo=[];
  }
  else{
    initTodo =JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete=(todo)=>{
    //console.log("I'm on ondelete",todo)
    // Deleting code of React
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
    // console.log("deleted",todos)
    localStorage.setItem('todos',JSON.stringify(todos));
    
  }
  const addTodo = (title,desc)=>{
    // console.log("im adding this todo",title,desc)
    let sno;
    if(todos.length===0){
      sno=0;
    }
    else{
      sno=todos[todos.length-1].sno+1;
    }
    const myTodo ={
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos,myTodo]);
    // console.log(myTodo) 
  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos));
  }, [todos])


  // const [todos, setTodos] = useState([
  //   {
  //     sno:1,
  //     title:"Python",
  //     desc:"learn python all modules and data science "
  //   },
  //   {
  //     sno:2,
  //     title:"java",
  //     desc:"learn java"
  //   },
  //   {
  //     sno:3,
  //     title:"C",
  //     desc:"learn java"
  //   },
  // ]);
  return (
  <>

  <Router>
  <Header title="MyTodo List" searchBar={false} />

  <Routes>
    <Route exact path="/" element={
      <>
         <AddTodo addTodo={addTodo} />,
        <Todos todos={todos} onDelete={onDelete} />
        </>
    }>
    </Route>
    <Route path="/about" element={<About/>}>
    </Route>
    <Route path="/services" element={ <Services/>}></Route>
    <Route path="/images"  element={ <Images/>}></Route>

  </Routes>

  <Footer/>
  </Router>
  </>
  );
}

export default App;
