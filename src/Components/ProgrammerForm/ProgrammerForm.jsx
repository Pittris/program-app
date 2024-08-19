import React from "react";
import "./ProgrammerForm.css";

const ProgrammerForm = ({ data, handleChange, handleAdd }) => {
   return (
      <div className="programmer-form">
         <input
            type="text"
            placeholder="jméno programátora"
            name="name"
            value={data.name}
            onChange={handleChange}
         />
         <fieldset>
            <legend>Úroveň programátora</legend>
            <label htmlFor="junior">junior</label>
            <input
               type="radio"
               name="type"
               id="junior"
               value="junior"
               checked={data.type === "junior"}
               onChange={handleChange}
            />
            <label htmlFor="senior">senior</label>
            <input
               type="radio"
               name="type"
               id="senior"
               value="senior"
               checked={data.type === "senior"}
               onChange={handleChange}
               
            />
         </fieldset>

         <button type="button" className="list-btn" onClick={handleAdd}>
            Přidat
         </button>
      </div>
   );
};

export default ProgrammerForm;
