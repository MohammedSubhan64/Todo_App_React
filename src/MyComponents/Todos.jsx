import React from "react";
import { Todo } from "./Todo";
export const Todos = (props) => {
  let myStyle = {
    minHeight: "70vh",
    margin: "40px auto",
  };
  return (
    <div className="container my-3" style={myStyle}>
      <h2 className="text-primary link-underline-primary my-3">Todos List</h2>
      <hr />
      <div className="d-flex flex-row mb-3">
        {props.todos.length === 0
          ? "No todos to display"
          : props.todos.map((todo) => {
              return (
                <Todo todo={todo} key={todo.sno} onDelete={props.onDelete} />
              );
            })}
      </div>
    </div>
  );
};
