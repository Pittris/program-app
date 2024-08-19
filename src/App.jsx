import { useEffect, useState } from "react";
import "./App.css";
import Toggler from "./Components/Toggler/Toggler";
import Data from "./Data.json";
import ProgrammerList from "./Components/ProgrammerList/ProgrammerList";
import Task from "./Components/Task/Task";
import ProgrammerForm from "./Components/ProgrammerForm/ProgrammerForm";

function App() {
  // stranky
  const [activeTab, setActiveTab] = useState(1);
  //  data json
  const [programmer, setProgrammer] = useState(Data.programmer);

  //  pridani programatora
  const [newProgrammer, setNewProgrammer] = useState({
    id:
      programmer.length > 0
        ? Math.max(...programmer.map((item) => item.id)) + 1
        : 1,
    name: "",
    type: "junior",
  });

  //  pocet junioru
  const [juniorProgrammerCount, setJuniorProgrammerCount] = useState(0);
  //  pocet senioru
  const [seniorProgrammerCount, setSeniorProgrammerCount] = useState(0);
  const [valid, setValid] = useState(false);

  //  zazanamenavani zmen
  const handleChange = (event) => {
    const { name, value } = event.target;
    // setNewProgrammer({
    //   ...newProgrammer,
    //   [name]: value,
    // });

    const temp = {
      ...newProgrammer,
      [name]: value,
    };
    setNewProgrammer(temp);
    validateData(temp);
  };
  const validateData = (programmer) => {
    if (programmer.name === "") {
      setValid(false);
    } else {
      setValid(true);
    }
  };
  //  pridani noveho programatora
  const handleAdd = () => {
    setProgrammer((programmer) => {
      return [...programmer, newProgrammer];
    });

    const updatedProgrammer = {
      id: newProgrammer.id + 1,
      name: "",
      type: "junior",
    };
    setNewProgrammer(updatedProgrammer);
    validateData(updatedProgrammer);
  };
  //  kontrola
  // useEffect(() => {
  //   console.log(newProgrammer);
  // }, [newProgrammer]);

  useEffect(() => {
    // Výpočet počtu juniorů a seniorů při načtení stránky
    const initialJuniorProgrammerCount = programmer.filter(
      (item) => item.type === "junior"
    ).length;
    const initialSeniorProgrammerCount = programmer.filter(
      (item) => item.type === "senior"
    ).length;
    setJuniorProgrammerCount(initialJuniorProgrammerCount);
    setSeniorProgrammerCount(initialSeniorProgrammerCount);
  }, [programmer]);

  //  zalozky
  const handleChoose = (source) => {
    switch (source) {
      case "list-of-programmer": {
        setActiveTab(1);
        break;
      }
      case "task-form": {
        setActiveTab(2);
        break;
      }

      default:
        break;
    }
  };
  //  mazani
  const handleDelete = (idecko) => {
    setProgrammer(programmer.filter((item) => item.id !== idecko));
  };

  return (
    <div className="app">
      <h1>Plánování programování</h1>
      <Toggler active={activeTab} onChoose={handleChoose} />
      {activeTab === 1 && (
        <div>
          <ProgrammerList data={programmer} handleDelete={handleDelete} />
          <ProgrammerForm
            data={newProgrammer}
            handleChange={handleChange}
            handleAdd={handleAdd}
            valid={valid}
          />
        </div>
      )}
      {activeTab === 2 && (
        <div>
          <Task
            juniorProgrammerCount={juniorProgrammerCount}
            seniorProgrammerCount={seniorProgrammerCount}
          />
        </div>
      )}
    </div>
  );
}

export default App;
