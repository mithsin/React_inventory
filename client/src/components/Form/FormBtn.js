import React from "react";

export const FormBtn = props =>
  <button {...props} style={{ float: "right", clear: "both", marginBottom: 10,}} className="btn btn-success">
    {props.children}
  </button>;
