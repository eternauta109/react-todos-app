/* import React, { Fragment } from "react"; */
import PropTypes from "prop-types";
//non uso piu le slice ma gli rtk
/* import { removeList } from "./listsSlice";
import { useDispatch } from "react-redux"; */
import React from "react";


export const List = ({ list,onRemoveList }) => {
  

  return (
    
    <li className="list-group-item d-flex justify-content-between">
      <span>
        <span> {list.name}</span>
      </span>
      <button
        onClick={() => {
          onRemoveList(list.id)
        }}
        type="button"
        className="btn btn-danger btn-sm"
      >
        <i className="bi bi-trash"></i>
      </button>
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
