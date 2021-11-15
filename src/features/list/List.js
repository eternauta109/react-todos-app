import React from "react";
import PropTypes from "prop-types";
import { removeList } from "./listsSlice";
import { useDispatch } from "react-redux";

export const List = ({ list }) => {
  const dispatch = useDispatch();
  const onRemove = (list) => {
    dispatch(removeList(list));
  };

  return (
    <li className="list-group-item d-flex justify-content-between">
      <span>
        <span> {list.name}</span>
      </span>
      <button
        onClick={() => {
          onRemove(list);
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
