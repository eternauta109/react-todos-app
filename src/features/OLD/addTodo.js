/* eslint-disable react/react-in-jsx-scope */
import React from "react"

function addTodo({todoEl,manageClick}) {
    return (
        <form onSubmit={manageClick}>
            <div className="form-group">
              <input
                ref={todoEl}
                className="form-field"
                name="todo"
                id="todo"
              />

              <button  className="m-1 btn btn-success">
                ADD
              </button>
            </div>
          </form>
    )
}


export default addTodo

