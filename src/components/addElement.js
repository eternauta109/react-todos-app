/* eslint-disable react/react-in-jsx-scope */
import React from "react";

function addElement({ ele, manageClick, txtButton, textList}) {
  return (
    <form onSubmit={manageClick}>
      <div className="form-group">
        <input ref={ele} className="form-field" name="ele" id="ele" defaultValue={textList} />

        <button className="m-1 btn btn-success">{txtButton ? txtButton: "ADD"}</button>
      </div>
    </form>
  );
}

export default addElement;
