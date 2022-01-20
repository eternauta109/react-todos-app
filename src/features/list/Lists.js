import List from "./List";
import React from "react";
import {

  useDeleteListMutation,
} from "../../service/listServiceRTK";
import { useEffect } from "react";
import { toast } from "react-toastify";


export const Lists = ({lists}) => {
  //hook per la query get sulle liste
 
  //hook per la mutation sulle liste
  const [
    removeList,
    { isLoading: isDeleting, isSuccess, error: deleteError, isError },
  ] = useDeleteListMutation();

  
  console.log("lisits", lists);
  return (
    <ul className="list-group list-group-flush">
      {lists.map((list, key) => (
        <List
          onRemoveList={(id) => {
            removeList(id)
              .unwrap()
              .then(() => {
               // reloadLists();
              })
              .catch((err) => toast.error(err.message));
          }}
          list={list}
          key={list.id}
        />
      ))}
    </ul>
  );
};

export default Lists;
