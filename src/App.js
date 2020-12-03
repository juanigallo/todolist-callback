import Input from "./components/Input";
import Button from "./components/Button";
import Tasks from "./components/Tasks";

import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleCallback(value) {
    setInputValue(value);
  }

  function addTask() {
    // const ... -> Spread operator
    if (inputValue != "") {
      const newTasks = [...tasks, inputValue];
      setTasks(newTasks);
      setInputValue("");
    }
  }

  function handleEnter(keyCode) {
    if (keyCode == 13) {
      addTask();
    }
  }

  function onDelete(position) {
    const newTasks = tasks.filter((task, key) => {
      return key != position;
    });

    setTasks(newTasks);
  }

  return (
    <div className="App">
      <div>
        <Input
          onChange={handleCallback}
          value={inputValue}
          onKeyDown={handleEnter}
        />
        <Button onClick={addTask} />
        <Tasks tasks={tasks} handleDelete={onDelete} />
      </div>
    </div>
  );
}

export default App;
