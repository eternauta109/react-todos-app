import TodoList from "./TodoList";
import PushTodo from "./addTodo";
import FilterTodo from "./filterTodo";
import React from "react";
import ErrorBoundary from "../../components/ErrorBoundary";


const Mytodos = ({manageClick,activeFilter,onFilterTodo, todoEl, todos}) => {
  return (
    <React.Fragment>
      <h1>MY todo List</h1>
      <div className="col-md-6">
        <PushTodo todoEl={todoEl} manageClick={manageClick} />
        <ErrorBoundary>
          <TodoList todos={todos} />
        </ErrorBoundary>
        <FilterTodo filter={activeFilter} onFilter={onFilterTodo} />
      </div>
    </React.Fragment>

  );
};

export default Mytodos;