import React from "react";


export const NotesDisplayGrid = ({ children }) => {
  return (
    <div className="notesGrid">
      <ul className="list-group">
        {children}
      </ul>
    </div>
  );
};
