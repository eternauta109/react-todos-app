import TodoList from "./TodoList";
/* import PushTodo from "./addTodo"; */
import AddElement from "../../components/addElement";
import FilterTodo from "./filterTodo";
import React from "react";
import ErrorBoundary from "../../components/ErrorBoundary";
import {
  useAddTodosMutation,
  useGetTodosQuery,
} from "../../service/todoServiceRTK";
import { filterTodo } from "./filterSlice";
import { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const Mytodos = () => {
  const todoEl = useRef("");
  const dispatch = useDispatch();

  const activeFilter = useSelector((state) => state.filter);

  //prendo i todos con l'hook creato nel service  e lo carico in data
  const {
    data = [],
    error,
    isLoading,
    isFetching,
    refetch: reloadLists, //metodo per rieseguire nuovamente la query come richiamare il getlist
  } = useGetTodosQuery();

  //filtro i todo in base allo stato filter dello store
  const todos = data.filter((todo) => {
    if (activeFilter === "ALL") {
      return true;
    }
    if (activeFilter === "COMPLETED") {
      return todo.completed;
    }
    return !todo.completed;
  });

  const [
    addTodo,
    {
      isLoading: isAdding,
      isSuccess: isAddSucces,
      error: addError,
      isError: isAddError,
    },
  ] = useAddTodosMutation();

  const manageClick = async (e) => {
    e.preventDefault();
    await addTodo({
      name: todoEl.current.value,
      create_at: new Date().toLocaleDateString(),
      user_id: 1,
    });
  };

  const onFilterTodo = (filter) => {
    dispatch(filterTodo(filter));
  };

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <React.Fragment>
      <h1>MY todo List</h1>
      <div className="col-md-6">
        <AddElement
          ele={todoEl}
          manageClick={manageClick}
          txtButton={"Add a Todo"}
        />
        <ErrorBoundary>
          <TodoList todos={todos} />
        </ErrorBoundary>
        <FilterTodo filter={activeFilter} onFilter={onFilterTodo} />
      </div>
    </React.Fragment>
  );
};

export default Mytodos;

//metodi usati per il funzionamento con i thunk

/*  
  import { addTodo } from "./todosSlice";
import {  useDispatch } from "react-redux";
import { filterTodo } from "./filterSlice";
  
  const dispatch=useDispatch();
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
  }; */
