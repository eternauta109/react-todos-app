import List from "./List";
import React from "react";
import {
  useGetListsQuery,
  useDeleteListMutation,
} from "../../service/listServiceRTK";
import { useEffect } from "react";
import { toast } from "react-toastify";

export const Lists = () => {
  const {
    data: lists = [],
    error,
    isLoading,
    isFetching,
    refetch: reloadLists,
  } = useGetListsQuery();

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
        <List onRemoveList={
          id=>{
            removeList(id).unwrap()
            .then(()=>{reloadLists();}).catch(err=>toast.error(err.message))
          }
          }
          list={list}
          key={list.id} />
      ))}
    </ul>
  );
};

export default Lists;
