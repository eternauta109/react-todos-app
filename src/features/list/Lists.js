import List from "./List";
import React from "react";
import {
  useGetListsQuery,
  useDeleteListMutation,
} from "../../service/listServiceRTK";
import { useEffect } from "react";
import { toast } from "react-toastify";


export const Lists = () => {
  //hook per la query get sulle liste
  const {
    data: lists = [],
    error,
    isLoading,
    isFetching,
    refetch: reloadLists,//metodo per rieseguire nuovamente la query come richiamare il getlist
  } = useGetListsQuery();

  console.log("hook rtk query liste", lists, error, isLoading);
  //hook per la mutation sulle liste
  const [
    removeList,
    { isLoading: isDeleting, isSuccess, error: deleteError, isError },
  ] = useDeleteListMutation();

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
    if (isFetching || isLoading) {
      toast.info("Loading List");
    }
    if (!isFetching) {
      toast.dismiss();
    }
    return () => {
      /* cleanup */
    };
  }, [error, isFetching]);
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
