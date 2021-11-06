/* eslint-disable react/react-in-jsx-scope */
import TodoElement from "./TodoElement";
import React from "react";

/* import { useSelector } from "react-redux"; */

export default function TodoList({ todos }) {
  /* const activeFilter = useSelector((state) => state.filter); */
  /* console.log("filter todolist", activeFilter); */
  /* let arr=[]; */

 /*  switch (activeFilter) {    
    case "ALL":
        arr=[...todos]
      break;
    case "TODO":
      arr=todos.filter((e) => e.completed===false);
      console.log(arr);
      break;
      case "COMPLETED":
      arr=todos.filter((e) => e.completed===true);
      console.log(arr);
      break;
    default:
      break;
  } */

  return (
    <ul className="list-group list-group-flush">
      {todos.map((todo, key) => (  
        <TodoElement todo={todo} key={key} />
      ))}
    </ul>
  );
}

