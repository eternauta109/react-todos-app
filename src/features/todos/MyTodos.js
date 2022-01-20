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
/* import { useRouteMatch } from "react-router-dom"; */
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useLocation } from "react-router-dom";

const Mytodos = () => {
  const todoEl = useRef("");
  const dispatch = useDispatch();
  const activeFilter = useSelector((state) => state.filter);

  //lavoro fatto con le route
  const { search } = useLocation();
  console.log("params useRouteMatch", JSON.stringify(search));
  let { list_id } = useParams();
  list_id = Number(list_id);
  console.log("params useParams", list_id);
  const pars = new URLSearchParams(search);
  console.log("params URLsearchparams", pars);
  const list_name = pars.get("list_name") ? pars.get("list_name") : "";

  //prendo i todos con l'hook creato nel service  e lo carico in data
  const {
    data = [],
    /* error,
    isLoading,
    isFetching,
    refetch: reloadLists, */ //metodo per rieseguire nuovamente la query come richiamare il getlist
  } = useGetTodosQuery(list_id);


  console.log("DATA", data)

  //filtro i todo per lista.. poi lo faccio nel service
  /* let todos = data.filter((e) => e.list_id === list_id); */

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

  console.log("TODOS", todos)

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
      list_id,
    });
    todoEl.current.value = "";
  };

  const onFilterTodo = (filter) => {
    dispatch(filterTodo(filter));
  };

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <React.Fragment>
      <h1>{list_name}</h1>
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
