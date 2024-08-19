import React, { useState, useEffect } from "react";
import "./Task.css";

const Task = ({ juniorProgrammerCount, seniorProgrammerCount }) => {
  const [linesOfCode, setLinesOfCode] = useState();
  const [days, setDays] = useState();
  const [canApprove, setCanApprove] = useState(false);
  const linesPerDay = juniorProgrammerCount * 100 + seniorProgrammerCount * 200;

  const approvalCheck = () => {
    const neededCapacity = linesOfCode;
    const availableCapacity = linesPerDay * days;
    // Zkontroluj, zda jsou zadány řádky a dny a zda je dostupná kapacita dostatečná
    if (availableCapacity >= neededCapacity) {
      setCanApprove(true);
    } else {
      setCanApprove(false);
    }
  };

  useEffect(() => {
    approvalCheck();
  }, [linesOfCode, days]);

  const handleApprovalClick = () => {
    if (canApprove) {
      alert("Plán byl schválen!");
    } else {
      alert("Plán nelze schválit.");
    }
  };

  return (
    <div className="task">
      <div className="border">
        <p>Počet juniorů: {juniorProgrammerCount}</p>
        <p>Počet seniorů: {seniorProgrammerCount}</p>
        <p>Jsou schopni napsat za den {linesPerDay} řádků kódu.</p>
      </div>
      <h2>Plánování projektu</h2>
      <input
        type="number"
        placeholder="Počet řádků kódu:"
        value={linesOfCode}
        min={1}
        onChange={(e) => setLinesOfCode(parseInt(e.target.value) || "")}
      />
      <input
        type="number"
        placeholder="Časový limit ve dnech:"
        value={days}
        min={1}
        onChange={(e) => setDays(parseInt(e.target.value) || "")}
      />
      <button
        className="authorize-btn"
        style={{ backgroundColor: canApprove ? "green" : "red" }}
        onClick={handleApprovalClick}
        disabled={!canApprove}
      >
        Schválit plán
      </button>
    </div>
  );
};

export default Task;
