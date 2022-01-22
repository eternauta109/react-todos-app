import React, { useEffect } from "react";
import { useRef } from "react";
import InputEdit from "../../components/addElement";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useLocation, useHistory } from "react-router-dom";
import { useUpdateListMutation } from "../../service/listServiceRTK";
import { toast } from "react-toastify";

function ListEdit() {
  const history = useHistory();
  const newEdit = useRef("");
  const { state } = useLocation();
  console.log("params useRouteMatch", state.data);
  let { list_id } = useParams();
  list_id = Number(list_id);
  console.log("params useParams", list_id);
  /*
  const pars = new URLSearchParams(search);
  console.log("params URLsearchparams", pars);
  const list_name = pars.get("list_name") ? pars.get("list_name") : "";
  console.log("list_name", list_name); */
  /* newEdit.current = "cccc"; */
  const [updateList, { isLoading, isFetching, isSuccess, error, isError }] =
    useUpdateListMutation();

  const handleClick = async (e) => {
    e.preventDefault();

    await updateList({
      id: list_id,
      name: newEdit.current.value,
    });
  };

  const Modified = () => {
    if (isSuccess) {
      return <p>modifica avvenuta</p>;
    } else {
      return <p>modifca la lista</p>;
    }
  };

  if (isSuccess) {
    history.replace("/lists");
  }

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
    if (isLoading) {
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
    <div>
      <p>edit list id: {list_id}</p>
      <InputEdit
        ele={newEdit}
        manageClick={handleClick}
        txtButton={"edit"}
        textList={state.data}
      />
      <Modified />
    </div>
  );
}

export default ListEdit;
