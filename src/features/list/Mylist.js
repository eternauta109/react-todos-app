import React from "react";
import Lists from "./Lists";
import { useRef,useEffect } from "react";
import AddList from "../../components/addElement";
import { useAddListMutation,useGetListsQuery } from "../../service/listServiceRTK";
import { toast } from "react-toastify";
//la LOGICA DELLE LISTE E' TUTTA CON RTK QUERY

const Mylists = () => {
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

  const {
    data: lists = [{}],
    error,
    isLoading,
    isFetching,
    refetch: reloadLists,//metodo per rieseguire nuovamente la query come richiamare il getlist
  } = useGetListsQuery();

  console.log("hook rtk query liste", lists, error, isLoading);

  const manageClick = async (e) => {
    e.preventDefault();
    await addList({
      name: newList.current.value,
      date: new Date().toLocaleDateString(),
      user_id: "1",
    });
    
  };

  if(isAddSucces){
    newList.current.value = "";
  
  }
 

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
