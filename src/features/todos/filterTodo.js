import React from "react";

export default function filterTodo({ onFilter, filter }) {
  let { btnClassAll, btnClassTodo, btnClassCompleted } = getBtnFunc();

  return (
    <div className="row d-flex">
      <div className="col sm-4">
        <button
          disabled={filter === "ALL"}
          onClick={() => onFilter("ALL")}
          className={btnClassAll}
        >
          ALL
        </button>
      </div>
      <div className="col sm-4">
        <button
          disabled={filter === "TODO"}
          onClick={() => onFilter("TODO")}
          className={btnClassTodo}
        >
          TO DO
        </button>
      </div>
      <div className="col sm-4">
        <button
          disabled={filter === "COMPLETED"}
          onClick={() => onFilter("COMPLETED")}
          className={btnClassCompleted}
        >
          COMPLETED
        </button>
      </div>
    </div>
  );

  function getBtnFunc() {
    let btnClassAll = "btn w-100 btn-outline-success ";
    let btnClassTodo = "btn w-100 btn-outline-success";
    let btnClassCompleted = "btn w-100 btn-outline-success";

    switch (filter) {
      case "ALL":
        btnClassAll = btnClassAll.replace(
          "btn-outline-success",
          "btn-outline-info"
        );
        break;
      case "TODO":
        btnClassTodo = btnClassTodo.replace(
          "btn-outline-success",
          "btn-outline-info"
        );
        break;

      case "COMPLETED":
        btnClassCompleted = btnClassCompleted.replace(
          "btn-outline-success",
          "btn-outline-info"
        );
        break;

      default:
        break;
    }
    return { btnClassAll, btnClassTodo, btnClassCompleted };
  }
}
