import "./App.css";
import { useState } from "react";
import TaskCard from "./components/TaskCard.jsx";

function App() {
  const [list, setList] = useState([]);
  const [text, setText] = useState("");

  const addToList = () => {
    setList([...list, text]);
    setText("");
    input.value = "";
  };
  const removeFromList = (indexToRemove) => {
    const updatedList = list.filter((_, index) => index !== indexToRemove);
    setList(updatedList);
  };

  return (
    <>
      <input id="input" type="text" onChange={(e) => setText(e.target.value)} />
      <button onClick={addToList}>Add</button>
      {list.map((task, index) => (
        <TaskCard
          key={index}
          props={task}
          removeFromList={() => removeFromList(index)}
        />
      ))}
    </>
  );
}

export default App;
