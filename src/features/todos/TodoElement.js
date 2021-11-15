/* eslint-disable react/react-in-jsx-scope */
/* import { connect } from 'react-redux' */
import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo, toggleTodo } from "./todosSlice";
import PropTypes from "prop-types";

function TodoElement({ todo }) {
  /*  console.log("element", todo); */
  const dispatch = useDispatch();
  const onRemove = (todo) => {
    dispatch(removeTodo(todo));
  };

  const onToggle = async (todo) => {
    const newTodo = { ...todo, completed: !todo.completed };
    try {
      const res = await dispatch(toggleTodo(newTodo)).unwrap();
      console.log("RES erro try", res);
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  const completed = todo.completed ? (
    <i className="bi bi-check-square"></i>
  ) : (
    <i className="bi bi-square"></i>
  );

  //sollevo un errore per testare ErrorBoundary
  /* throw new Error('Error'); */

  return (
    <li className="list-group-item d-flex justify-content-between">
      <span>
        <button
          onClick={() => {
            onToggle(todo);
          }}
          className="btn btn-primary btn-sm"
          type="button"
        >
          {completed}
        </button>
        <span> {todo.name}</span>
      </span>
      <button
        type="button"
        className="btn btn-danger btn-sm"
        onClick={() => {
          onRemove(todo);
        }}
      >
        <i className="bi bi-trash"></i>
      </button>
    </li>
  );
}

/* const matchStateToProps = (state) => {
    return { todos: [...state] }
}

/* const mapDispatchToProps = (dispatch) => {
    return {
        removeTodo: todo => dispatch(removeTodo(todo))
    }
} */

/* export default connect(matchStateToProps, {removeTodo})(TodoElement); */

TodoElement.propTypes = {
  todo: PropTypes.shape({
    completed: PropTypes.bool,
    dueDate: PropTypes.string,
    user_id: PropTypes.number,
    name: PropTypes.string,
  }),
};

export default TodoElement;
