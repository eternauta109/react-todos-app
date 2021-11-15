import React from "react";
import Lists from "./Lists";
import PushList from "./PushList";

import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addList } from "./thunksLists";

const Mylists = ({ lists }) => {
  const newList = useRef("");
  const dispatch = useDispatch();

  const manageClick = (e) => {
    e.preventDefault();
    dispatch(
      addList({
        name: newList.current.value,
        created_at:new Date().toLocaleDateString(),       
        user_id: 1,
      })
    );
    newList.current.value = "";
  };

  return (
    <div className="col-md-6">
      <h1>My list</h1>

      <PushList newList={newList} manageClick={manageClick} />
      <Lists lists={lists} />
    </div>
  );
};

export default Mylists;
