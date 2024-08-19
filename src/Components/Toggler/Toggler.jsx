import React from "react";
import "./Toggler.css";

const Toggler = ({ active, onChoose }) => {
  const handleClick = (e) => {
    onChoose(e.target.name);
  };
  return (
    <div>
      <button
        className={`toggler-btn ${active === 1 ? "active" : ""}`}
        onClick={handleClick}
        name="list-of-programmer"
      >
        Seznam programátorů
      </button>
      <button
        className={`toggler-btn ${active === 2 ? "active" : ""}`}
        onClick={handleClick}
        name="task-form"
      >
        Úkol
      </button>
    </div>
  );
};

export default Toggler;
