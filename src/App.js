import React, { useEffect } from "react";
/* import { getTodos } from "./features/todos/todosSlice"; */
//questa era l'importazione dello store listscon thunk
/* import { getLists } from "./features/list/listsSlice"; */
/* import { connect } from "react-redux"; */
/* import { useSelector, useDispatch } from "react-redux"; */

import Mytodos from "./features/todos/MyTodos";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Mylists from "./features/list/Mylist";

import { Header } from "./components/Header";

/* import { addTodo } from './actions/index'; */

function App() {
  /* const dispatch = useDispatch(); */
  useEffect(() => {      
    //importo i todos con i thunk
/*     dispatch(getTodos())
      .unwrap()
      .then((res) => {})
      .catch((error) => {
        toast.error(error.message, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }); */
    return () => {
      /* cleanup */
    };
  }, []);
/*   let todos = useSelector((state) => state.todos); */
/*   console.log("useselctor state.todos", todos); */

  return (
    <div className="App container-fluid">
      <Router>
        <div className="row d-flex justify-content-center">
          <Header />
          <Switch>
            <Route path="/todos">
              <Mytodos />
            </Route>
            <Route path="/lists/:list_id/todos">
              <Mytodos />
            </Route>
            <Route exact path="(/|/lists)">
              <Mylists />
            </Route>
          </Switch>
        </div>
      </Router>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

// Redux
/* const matchStateToProps=(state)=>{
  return {todos:[...state]}
} */

/* const mapDispatchToProps=(dispatch)=>{
  return {
    addTodo:(name)=>dispatch(addTodo(name)),
    
    
  }
} */
/* questo senza redux toolkit
export default connect(matchStateToProps,{addTodo})(App);
 */

export default App;
