import React from "react";
import Lists from "./Lists";
import { useRef } from "react";
import AddList from "../../components/addElement";
import { useAddListMutation } from "../../service/listServiceRTK";

//la LOGICA DELLE LISTE E' TUTTA CON RTK QUERY

const Mylists = ({ lists }) => {
  const newList = useRef("");
  //Add a list con rtk query
  const [
    addList,
    {
      /* isLoading: isAdding, */
      isSuccess: isAddSucces,
     /*  error: addError,
      isError: isAddError, */
    },
  ] = useAddListMutation();

  const manageClick = (e) => {
    e.preventDefault();
    addList({
      name: newList.current.value,
      date: new Date().toLocaleDateString(),
      user_id: "1",
    });
    
  };

  if(isAddSucces){
    newList.current.value = "";
    
  }

  return (
    <div className="col-md-6">
      <h1>My list</h1>
      <AddList ele={newList} manageClick={manageClick} txtButton={"Add a List"} />
      {/* <PushList newList={newList} /> */}
      <Lists lists={lists} />
    </div>
  );
};

export default Mylists;
