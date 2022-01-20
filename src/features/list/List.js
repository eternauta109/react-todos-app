/* import React, { Fragment } from "react"; */
import PropTypes from "prop-types";
//non uso piu le slice ma gli rtk
/* import { removeList } from "./listsSlice";
import { useDispatch } from "react-redux"; */
import React from "react";
import { NavLink } from "react-router-dom";

export const List = ({ list, onRemoveList }) => {
  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-md-6 text-start">
          <span>
            <NavLink
              to={
                "/lists/" +
                list.id +
                "/todos?list_name=" +
                encodeURIComponent(list.name)
              }
            >
              {" "}
              {list.name}
            </NavLink>
          </span>
        </div>

        <div className="col-md-6">
        <button
           
            type="button"
            className="me-4 btn btn-succes btn-sm"
          >
            <i className="bi bi-pencil-fill"></i>
          </button>
          <button
            onClick={() => {
              onRemoveList(list.id);
            }}
            type="button"
            className="me-4 btn btn-danger btn-sm"
          >
            <i className="bi bi-trash"></i>
          </button>
        </div>
      </div>
    </li>
  );
};

List.propTypes = {
  todo: PropTypes.shape({
    name: PropTypes.string,
    created_at: PropTypes.string,
    user_id: PropTypes.number,
    id: PropTypes.number,
  }),
};

export default List;
