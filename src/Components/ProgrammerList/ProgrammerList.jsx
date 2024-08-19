import React from "react";
import "./ProgrammerList.css";

const ProgrammerList = ({ data, handleDelete }) => {
  return (
    <div className="list">
      {data.map((item) => {
        return (
          <div className="item" key={item.id}>
            <span>
              {item.name} / {item.type}
            </span>
            <button
              className="btn-delete"
              onClick={() => handleDelete(item.id)}
            >
              X
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ProgrammerList;
