import TodoList from "./TodoList";
/* import PushTodo from "./addTodo"; */
import AddElement from '../../components/addElement'
import FilterTodo from "./filterTodo";
import React from "react";
import ErrorBoundary from "../../components/ErrorBoundary";
import { addTodo } from "./todosSlice";
import {  useDispatch } from "react-redux";
import { filterTodo } from "./filterSlice";
import { useRef } from "react";

const Mytodos = ({activeFilter,  todos}) => {
  const dispatch=useDispatch();
  const todoEl = useRef("");
  const onFilterTodo = (filter) => {
    dispatch(filterTodo(filter));
  };

  const manageClick = (e) => {
    e.preventDefault();
    dispatch(
      addTodo({
        name: todoEl.current.value,
        dueDate: new Date().toLocaleDateString(),
        user_id: 1,
      })
    );
    todoEl.current.value = "";
  };
  
  
  
  return (
    <React.Fragment>
      <h1>MY todo List</h1>
      <div className="col-md-6">
        <AddElement ele={todoEl} manageClick={manageClick} txtButton={"Add a Todo"} />
        <ErrorBoundary>
          <TodoList todos={todos} />
        </ErrorBoundary>
        <FilterTodo filter={activeFilter} onFilter={onFilterTodo} />
      </div>
    </React.Fragment>

  );
};

export default Mytodos;