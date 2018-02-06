import React from "react";
import "./productCard.css";



export const Productcard = ({children}) => {
  return(
    <div className="productcard">
      {children}
    </div>
  );
};
